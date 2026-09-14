export class HttpError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}
export function assert(condition, message, status = 400) {
  if (!condition) throw new HttpError(status, message);
}
export function textField(value, label, max = 100) {
  assert(typeof value === 'string' && value.trim().length > 0 && value.length <= max, `${label} is required (up to ${max} characters).`);
  return value.trim();
}
export function numberField(value, label, min, max) {
  assert(typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max, `${label} must be between ${min} and ${max}.`);
  return value;
}
export function validateSample(input) {
  assert(input && typeof input === 'object', 'Invalid sample.');
  assert(['wood', 'fabric'].includes(input.kind), 'Choose wood or fabric.');
  assert(/^#[a-f\d]{6}$/i.test(input.color), 'Choose a valid color.');
  assert(typeof input.active === 'boolean', 'Active must be true or false.');
  const maps = {};
  for (const key of ['baseColor', 'normal', 'roughness']) {
    const value = input.maps?.[key] ?? null;
    assert(value === null || (typeof value === 'string' && /^[a-f\d-]{36}$/.test(value)), `Invalid ${key} image.`);
    maps[key] = value;
  }
  assert(maps.baseColor, 'Upload a base color texture first.');
  return {
    name: textField(input.name, 'Sample name', 80), kind: input.kind,
    description: typeof input.description === 'string' ? input.description.trim().slice(0, 240) : '',
    color: input.color, active: input.active, maps,
    roughness: numberField(input.roughness, 'Roughness', 0, 1),
    metalness: numberField(input.metalness, 'Metalness', 0, 1),
    repeatX: numberField(input.repeatX, 'Horizontal repeat', 0.1, 50),
    repeatY: numberField(input.repeatY, 'Vertical repeat', 0.1, 50),
    rotation: numberField(input.rotation, 'Rotation', -180, 180),
  };
}

export function validateRoom(input, model, samples) {
  assert(input && typeof input === 'object', 'Invalid bedroom configuration.');
  const available = new Map(model.materials.map((m) => [m.name, m]));
  const bindings = {}, sampleIds = {}, defaults = {};
  const assigned = new Set();
  for (const kind of ['wood', 'fabric']) {
    const names = input.bindings?.[kind];
    assert(Array.isArray(names) && names.length <= 64 && new Set(names).size === names.length, `Invalid ${kind} material mapping.`);
    bindings[kind] = names.map((name) => {
      assert(available.has(name), `Material ${name} is not in this model.`);
      assert(available.get(name).customizable !== false, `${name} needs a unique, stable material name before assigning samples.`);
      assert(available.get(name).hasUV, `${name} needs UV mapping before applying samples.`);
      assert(!available.get(name).unlit, `${name} uses an unlit material. Export it as a standard PBR material to customize it.`);
      assert(!assigned.has(name), `${name} cannot be both wood and fabric.`);
      assigned.add(name);
      return name;
    });
    const ids = input.sampleIds?.[kind];
    assert(Array.isArray(ids) && ids.length <= 200 && new Set(ids).size === ids.length, `Invalid ${kind} samples.`);
    sampleIds[kind] = ids.map((id) => {
      assert(samples.some((s) => s.id === id && s.kind === kind && s.active), `Choose an active ${kind} sample.`);
      return id;
    });
    assert(names.length > 0 || ids.length === 0, `Map a ${kind} surface before assigning ${kind} samples.`);
    assert(names.length === 0 || ids.length > 0, `Choose at least one ${kind} sample for the mapped surfaces.`);
    defaults[kind] = input.defaults?.[kind] ?? null;
    assert(ids.length ? ids.includes(defaults[kind]) : defaults[kind] === null, `Choose a valid default ${kind} sample.`);
  }
  return { bindings, sampleIds, defaults };
}

// Read dimensions without decoding pixels. Reject files before GPU allocation.
export function inspectImage(bytes) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let mime, width, height;
  if (bytes.length > 24 && view.getUint32(0) === 0x89504e47 && view.getUint32(4) === 0x0d0a1a0a && view.getUint32(12) === 0x49484452) {
    mime = 'image/png'; width = view.getUint32(16); height = view.getUint32(20);
    let offset = 8, hasPixels = false, hasEnd = false;
    while (offset + 12 <= bytes.length) {
      const length = view.getUint32(offset), type = view.getUint32(offset + 4);
      assert(length <= bytes.length - offset - 12, 'The PNG texture is incomplete.');
      let crc = 0xffffffff;
      for (let i = offset + 4; i < offset + 8 + length; i++) {
        crc ^= bytes[i];
        for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
      }
      assert(((crc ^ 0xffffffff) >>> 0) === view.getUint32(offset + 8 + length), 'The PNG texture is corrupted.');
      if (type === 0x49444154 && length > 0) hasPixels = true;
      if (type === 0x49454e44) { hasEnd = true; assert(length === 0 && offset + 12 === bytes.length, 'Invalid PNG ending.'); break; }
      offset += length + 12;
    }
    assert(hasPixels && hasEnd, 'The PNG texture has no complete image data.');
  } else if (bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255) {
    mime = 'image/jpeg';
    let offset = 2;
    while (offset + 4 < bytes.length) {
      if (bytes[offset++] !== 255) break;
      const marker = bytes[offset++];
      if (marker === 0xda || marker === 0xd9) break;
      const length = view.getUint16(offset);
      if (length < 2 || offset + length > bytes.length) break;
      if ([0xc0, 0xc1, 0xc2].includes(marker) && length >= 8) {
        height = view.getUint16(offset + 3); width = view.getUint16(offset + 5); break;
      }
      offset += length;
    }
  }
  assert(mime && width && height, 'Use a valid PNG or JPEG texture.');
  if (mime === 'image/jpeg') {
    assert(bytes[bytes.length - 2] === 255 && bytes[bytes.length - 1] === 217, 'The JPEG texture is incomplete.');
    let hasScan = false;
    for (let i = 2; i + 12 < bytes.length; i++) if (bytes[i] === 255 && bytes[i + 1] === 218) { hasScan = true; break; }
    assert(hasScan, 'The JPEG texture has no image data.');
  }
  assert(width <= 4096 && height <= 4096 && width * height <= 16777216, 'Texture dimensions must be at most 4096 × 4096.');
  return { mime, width, height };
}

export function inspectGlb(bytes) {
  assert(bytes.length >= 28, 'The GLB file is incomplete.');
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  assert(view.getUint32(0, true) === 0x46546c67 && view.getUint32(4, true) === 2 && view.getUint32(8, true) === bytes.length, 'Upload a valid GLB version 2 file.');
  const jsonSize = view.getUint32(12, true);
  assert(view.getUint32(16, true) === 0x4e4f534a && jsonSize <= 2 * 1024 * 1024 && jsonSize % 4 === 0 && 20 + jsonSize <= bytes.length, 'Invalid GLB JSON chunk.');
  let doc;
  try { doc = JSON.parse(new TextDecoder().decode(bytes.subarray(20, 20 + jsonSize))); }
  catch { throw new HttpError(400, 'The model contains invalid JSON.'); }
  assert(doc && typeof doc === 'object' && !Array.isArray(doc), 'The model needs a glTF document.');
  for (const key of ['buffers', 'bufferViews', 'images', 'materials', 'meshes', 'nodes', 'accessors']) {
    assert(doc[key] === undefined || (Array.isArray(doc[key]) && doc[key].every((value) => value && typeof value === 'object' && !Array.isArray(value))), `Invalid model ${key}.`);
  }
  for (const key of ['extensionsUsed', 'extensionsRequired']) assert(doc[key] === undefined || (Array.isArray(doc[key]) && doc[key].every((e) => typeof e === 'string')), 'Invalid model extensions.');
  for (const mesh of doc.meshes || []) assert(Array.isArray(mesh.primitives) && mesh.primitives.every((p) => p && typeof p === 'object' && !Array.isArray(p)), 'Invalid mesh primitives.');
  assert(doc.asset?.version === '2.0', 'Only glTF 2.0 models are supported.');
  const binStart = 20 + jsonSize;
  assert(binStart + 8 <= bytes.length && view.getUint32(binStart + 4, true) === 0x004e4942 && binStart + 8 + view.getUint32(binStart, true) === bytes.length, 'The GLB needs one embedded binary buffer.');
  assert(doc.buffers?.length === 1 && !doc.buffers[0].uri && doc.buffers[0].byteLength <= bytes.length - binStart - 8, 'Embed all buffers in the GLB.');
  assert((doc.images || []).every((i) => !i.uri && Number.isInteger(i.bufferView)), 'Embed all images in the GLB; external files and data URLs are not supported.');
  const supported = new Set(['KHR_materials_unlit', 'KHR_materials_clearcoat', 'KHR_materials_sheen', 'KHR_materials_ior', 'KHR_materials_specular', 'KHR_materials_transmission', 'KHR_materials_volume', 'KHR_materials_emissive_strength', 'KHR_texture_transform', 'KHR_mesh_quantization']);
  assert((doc.extensionsUsed || []).every((e) => supported.has(e)), 'Export an uncompressed GLB with standard PBR materials. Draco, Meshopt, KTX2 and custom extensions are not enabled in this upload pipeline yet.');
  assert((doc.materials?.length || 0) <= 64 && (doc.nodes?.length || 0) <= 1000 && (doc.meshes?.length || 0) <= 300, 'This model is too complex. Limit it to 64 materials, 1,000 nodes and 300 meshes.');
  assert((doc.accessors || []).reduce((n, a) => n + (a.count || 0), 0) <= 8000000, 'Reduce the model geometry before uploading.');
  let decodedPixels = 0;
  for (const img of doc.images || []) {
    const b = doc.bufferViews?.[img.bufferView];
    assert(b && b.buffer === 0 && b.byteLength > 0 && (b.byteOffset || 0) + b.byteLength <= doc.buffers[0].byteLength, 'Invalid embedded texture.');
    const start = binStart + 8 + (b.byteOffset || 0);
    const info = inspectImage(bytes.subarray(start, start + b.byteLength));
    decodedPixels += info.width * info.height;
  }
  assert(decodedPixels <= 32 * 1024 * 1024, 'Reduce the embedded texture resolution (maximum 32 megapixels total).');
  const materialNames = (doc.materials || []).map((m) => m.name);
  const materials = (doc.materials || []).map((m, index) => {
    const named = typeof m.name === 'string' && m.name.trim().length > 0 && m.name.length <= 100;
    const name = named ? m.name : `Unnamed material ${index + 1}`;
    const customizable = named && m.name === m.name.trim() && materialNames.filter((value) => value === m.name).length === 1;
    const uses = (doc.meshes || []).flatMap((mesh) => mesh.primitives || []).filter((p) => p.material === index);
    return { index, name, customizable, hasUV: uses.length > 0 && uses.every((p) => Number.isInteger(p.attributes?.TEXCOORD_0)), unlit: Boolean(m.extensions?.KHR_materials_unlit) };
  });
  return { materials };
}
