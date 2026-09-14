import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, rm } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { deflateSync } from 'node:zlib';
import { localBindings } from '../server/local.js';
import { handleApi } from '../server/worker.js';
import { inspectGlb, inspectImage, validateRoom } from '../server/validation.js';
import { trustedImageKitUrl, listImageKit, getImageKitFile } from '../server/imagekit.js';

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) { crc ^= byte; for (let b = 0; b < 8; b++) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1)); }
  return (crc ^ 0xffffffff) >>> 0;
}
function png() {
  const chunk = (name, bytes) => {
    const buffer = Buffer.alloc(bytes.length + 12); buffer.writeUInt32BE(bytes.length); buffer.write(name, 4); bytes.copy(buffer, 8);
    buffer.writeUInt32BE(crc32(buffer.subarray(4, -4)), buffer.length - 4); return buffer;
  };
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(1, 0); ihdr.writeUInt32BE(1, 4); ihdr[8] = 8; ihdr[9] = 6;
  return Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]), chunk('IHDR', ihdr), chunk('IDAT', deflateSync(Buffer.from([0,180,130,80,255]))), chunk('IEND', Buffer.alloc(0))]);
}
function glb(change = () => {}) {
  const positions = new Float32Array([0,0,0, 1,0,0, 0,1,0]), normals = new Float32Array([0,0,1, 0,0,1, 0,0,1]), uv = new Float32Array([0,0,1,0,0,1]);
  const bin = Buffer.concat([Buffer.from(positions.buffer), Buffer.from(normals.buffer), Buffer.from(uv.buffer)]);
  const doc = { asset: { version: '2.0' }, scene: 0, scenes: [{ nodes: [0] }], nodes: [{ mesh: 0 }],
    buffers: [{ byteLength: bin.length }], bufferViews: [{ buffer: 0, byteOffset: 0, byteLength: 36, target: 34962 }, { buffer: 0, byteOffset: 36, byteLength: 36, target: 34962 }, { buffer: 0, byteOffset: 72, byteLength: 24, target: 34962 }],
    accessors: [{ bufferView: 0, componentType: 5126, count: 3, type: 'VEC3', min: [0,0,0], max: [1,1,0] }, { bufferView: 1, componentType: 5126, count: 3, type: 'VEC3' }, { bufferView: 2, componentType: 5126, count: 3, type: 'VEC2' }],
    materials: [{ name: 'wood', pbrMetallicRoughness: { metallicFactor: 0 } }], meshes: [{ primitives: [{ attributes: { POSITION: 0, NORMAL: 1, TEXCOORD_0: 2 }, material: 0 }] }],
  };
  change(doc);
  const raw = Buffer.from(JSON.stringify(doc)); const json = Buffer.alloc(Math.ceil(raw.length / 4) * 4, 32); raw.copy(json);
  const bytes = Buffer.alloc(28 + json.length + bin.length);
  bytes.writeUInt32LE(0x46546c67, 0); bytes.writeUInt32LE(2, 4); bytes.writeUInt32LE(bytes.length, 8);
  bytes.writeUInt32LE(json.length, 12); bytes.writeUInt32LE(0x4e4f534a, 16); json.copy(bytes, 20);
  bytes.writeUInt32LE(bin.length, 20 + json.length); bytes.writeUInt32LE(0x004e4942, 24 + json.length); bin.copy(bytes, 28 + json.length);
  return bytes;
}

test('material library API stores actual files, protects writes and enforces assignments', async (t) => {
  const parent = resolve('.local'); await mkdir(parent, { recursive: true });
  const root = await mkdtemp(resolve(parent, 'test-'));
  let env = await localBindings(root);
  const liveUrl = process.env.CUSTOMIZER_TEST_URL;
  if (liveUrl) assert.ok(['localhost', '127.0.0.1'].includes(new URL(liveUrl).hostname), 'Live API tests may only target a local test server.');
  t.after(async () => { env.close(); assert.equal(dirname(root), parent); await rm(root, { recursive: true }); });
  const request = (path, { method = 'GET', body, auth = true, headers = {} } = {}) => {
    const req = new Request(`${liveUrl || 'http://localhost'}/api/customizer${path}`, {
    method, headers: { ...(auth ? { Authorization: `Bearer ${env.CUSTOMIZER_ADMIN_TOKEN}` } : {}), ...(body && !(body instanceof Uint8Array) ? { 'Content-Type': 'application/json' } : {}), ...headers },
    ...(body ? { body: body instanceof Uint8Array ? body : JSON.stringify(body) } : {}),
    });
    return liveUrl ? fetch(req) : handleApi(req, env);
  };
  const expect = async (response, status) => { const data = await response.json(); assert.equal(response.status, status, JSON.stringify(data)); return data; };
  let image, model, sample, initialRevision = 0;
  await t.test('anonymous visitors can read but cannot administer', async () => {
    const data = await expect(await request('/catalog', { auth: false }), 200); assert.equal(data.rooms.length, 4);
    initialRevision = data.rooms.find((r) => r.id === 'bed-frame-wesal').revision;
    if (!liveUrl) assert.deepEqual(data.samples, []);
    await expect(await request('/admin/catalog', { auth: false }), 401);
    await expect(await request('/admin/assets?kind=image', { method: 'POST', body: png(), auth: false }), 401);
  });
  await t.test('unconfigured admin fails closed', async () => {
    const result = await handleApi(new Request('http://localhost/api/customizer/admin/catalog'), { ...env, CUSTOMIZER_ADMIN_TOKEN: '' });
    await expect(result, 503);
  });
  await t.test('accepts a configured six-character key and rejects incorrect keys', async () => {
    const configured = { ...env, CUSTOMIZER_ADMIN_TOKEN: 'Test25' };
    for (const [key, status] of [['Test25', 200], ['test25', 401], ['wrong-key', 401], ['', 401]]) {
      const response = await handleApi(new Request('http://localhost/api/customizer/admin/catalog', {
        headers: { Authorization: `Bearer ${key}` },
      }), configured);
      await expect(response, status);
    }
  });
  await t.test('rejects cross-origin writes and oversize files', async () => {
    await expect(await request('/admin/assets?kind=image', { method: 'POST', body: png(), headers: { Origin: 'https://other.example' } }), 403);
    await expect(await request('/admin/assets?kind=model', { method: 'POST', body: liveUrl ? Buffer.alloc(21 * 1024 * 1024) : glb(), headers: { 'Content-Length': String(21 * 1024 * 1024) } }), 413);
  });
  await t.test('validates image bytes and rejects broken uploads', async () => {
    await expect(await request('/admin/assets?kind=image', { method: 'POST', body: Buffer.from('<svg onload="alert(1)"/>') }), 400);
    await expect(await request('/admin/assets?kind=image', { method: 'POST', body: png().subarray(0, 25) }), 400);
    image = await expect(await request('/admin/assets?kind=image', { method: 'POST', body: png() }), 201);
    const stored = await request(image.url.replace('/api/customizer', ''), { auth: false });
    assert.equal(stored.headers.get('content-type'), 'image/png'); assert.deepEqual(Buffer.from(await stored.arrayBuffer()), png());
    assert.equal(inspectImage(png()).width, 1);
  });
  await t.test('rejects external GLB resources and malformed geometry', async () => {
    await expect(await request('/admin/assets?kind=model', { method: 'POST', body: glb((d) => { d.buffers[0].uri = 'https://other.example/file.bin'; }) }), 400);
    await expect(await request('/admin/assets?kind=model', { method: 'POST', body: glb((d) => { d.nodes[0].mesh = 999; }) }), 400);
    assert.equal(inspectGlb(glb((d) => { d.materials[0].name = ' wood '; })).materials[0].customizable, false);
    await expect(await request('/admin/assets?kind=model', { method: 'POST', body: glb((d) => { d.meshes = {}; }) }), 400);
  });
  await t.test('truncated validator reports never publish a model', async () => {
    const invalid = glb((d) => { d.materials = Array.from({ length: 30 }, (_, i) => ({ name: `material${i}`, unexpectedProperty: true })); d.nodes[0].mesh = 999; });
    await expect(await request('/admin/assets?kind=model', { method: 'POST', body: invalid }), 400);
  });
  await t.test('extracts named material slots from a valid GLB', async () => {
    model = await expect(await request('/admin/assets?kind=model', { method: 'POST', body: glb() }), 201);
    assert.equal(model.materials[0].name, 'wood'); assert.equal(model.materials[0].hasUV, true);
  });
  await t.test('creates a reusable sample using stored asset IDs', async () => {
    sample = { name: 'Test oak', kind: 'wood', description: 'Fixture', color: '#ffffff', roughness: 0.7, metalness: 0, repeatX: 2, repeatY: 2, rotation: 90, active: true, maps: { baseColor: image.id, normal: null, roughness: null } };
    await expect(await request('/admin/samples', { method: 'POST', body: { ...sample, repeatX: -1 } }), 400);
    await expect(await request('/admin/samples', { method: 'POST', body: { ...sample, maps: { baseColor: 'https://other.example' } } }), 400);
    const result = await expect(await request('/admin/samples', { method: 'POST', body: sample }), 201); sample.id = result.id;
  });
  const configuration = () => ({ modelAssetId: model.id, revision: initialRevision, bindings: { wood: ['wood'], fabric: [] }, sampleIds: { wood: [sample.id], fabric: [] }, defaults: { wood: sample.id, fabric: null } });
  await t.test('rejects unprepared UVs and invalid surface mappings', async () => {
    const noUv = inspectGlb(glb((d) => { delete d.meshes[0].primitives[0].attributes.TEXCOORD_0; }));
    assert.throws(() => validateRoom(configuration(), noUv, [sample]), /UV mapping/);
    const config = configuration(); config.bindings.fabric = ['wood'];
    await expect(await request('/admin/rooms/bed-frame-wesal', { method: 'PUT', body: config }), 400);
    await expect(await request('/admin/rooms/not-a-bedroom', { method: 'PUT', body: configuration() }), 404);
  });
  await t.test('publishes only the chosen bedroom, retaining its defaults and texture URLs', async () => {
    await expect(await request('/admin/rooms/bed-frame-wesal', { method: 'PUT', body: configuration() }), 200);
    const data = await expect(await request('/catalog', { auth: false }), 200);
    assert.equal(data.rooms.find((r) => r.id === 'bed-frame-wesal').modelUrl, model.url);
    assert.equal(data.rooms.find((r) => r.id === 'wardrobe-oak').modelUrl, null);
    assert.equal(data.samples.find((s) => s.id === sample.id).textures.baseColor, image.url);
  });
  await t.test('rejects stale edits and prevents archiving assigned samples', async () => {
    await expect(await request('/admin/rooms/bed-frame-wesal', { method: 'PUT', body: configuration() }), 409);
    await expect(await request(`/admin/samples/${sample.id}`, { method: 'PUT', body: { ...sample, revision: 0 } }), 409);
    await expect(await request(`/admin/samples/${sample.id}`, { method: 'PUT', body: { ...sample, revision: 1, active: false } }), 409);
  });
  await t.test('retains catalog and uploaded bytes after the database reopens', { skip: Boolean(liveUrl) }, async () => {
    env.close(); env = await localBindings(root);
    const data = await expect(await request('/admin/catalog'), 200);
    assert.equal(data.samples.length, 1); assert.equal(data.models.length, 1); assert.equal(data.rooms.find((r) => r.id === 'bed-frame-wesal').revision, 1);
    assert.equal((await request(image.url.replace('/api/customizer', ''))).status, 200);
  });
  await t.test('assigns original models without samples and supports removing an assignment', async () => {
    const data = await expect(await request('/catalog'), 200);
    const revision = data.rooms.find((r) => r.id === 'wardrobe-oak').revision;
    const original = { modelAssetId: model.id, revision, bindings: { wood: [], fabric: [] }, sampleIds: { wood: [], fabric: [] }, defaults: { wood: null, fabric: null } };
    await expect(await request('/admin/rooms/wardrobe-oak', { method: 'PUT', body: original }), 200);
    const assigned = await expect(await request('/catalog'), 200);
    assert.equal(assigned.rooms.find((r) => r.id === 'wardrobe-oak').modelUrl, model.url);
    await expect(await request('/admin/rooms/wardrobe-oak', { method: 'PUT', body: { modelAssetId: null, revision: revision + 1 } }), 200);
    const cleared = await expect(await request('/catalog'), 200);
    assert.equal(cleared.rooms.find((r) => r.id === 'wardrobe-oak').modelUrl, null);
  });
});

test('ImageKit connection uses server credentials and restricts imported files to the configured library', async (t) => {
  const env = { IMAGEKIT_PRIVATE_KEY: 'test-private-key', IMAGEKIT_URL_ENDPOINT: 'https://ik.imagekit.io/hurfa-test' };
  const file = { fileId: 'file-one', name: 'bedroom.glb', filePath: '/bedrooms/bedroom.glb', url: 'https://ik.imagekit.io/hurfa-test/bedrooms/bedroom.glb', size: glb().length, updatedAt: '2026-09-14' };
  let calls = 0;
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    calls++;
    if (String(url).startsWith('https://api.imagekit.io/')) {
      assert.equal(options.headers.Authorization, `Basic ${btoa('test-private-key:')}`);
      if (String(url).includes('/details')) return Response.json(file);
      return Response.json([file, { ...file, name: 'document.pdf' }]);
    }
    assert.equal(String(url), file.url); assert.equal(options.headers, undefined); assert.equal(options.redirect, 'error');
    return new Response(glb());
  });
  const library = await listImageKit(env, { kind: 'model' });
  assert.equal(library.files.length, 1); assert.equal(library.files[0].fileId, file.fileId);
  assert.equal(JSON.stringify(library).includes('test-private-key'), false);
  const imported = await getImageKitFile(env, file.fileId, 'model');
  assert.equal(imported.source.fileId, file.fileId); assert.equal(inspectGlb(new Uint8Array(await imported.response.arrayBuffer())).materials.length, 1);
  assert.equal(calls, 3);
  assert.throws(() => trustedImageKitUrl('https://127.0.0.1/internal.glb', env), /outside/);
  assert.throws(() => trustedImageKitUrl('https://ik.imagekit.io/another-account/model.glb', env), /outside/);
  await assert.rejects(() => getImageKitFile(env, '../secret', 'model'), /valid ImageKit file/);
  await assert.rejects(() => listImageKit({}, {}), /not connected/);
});
