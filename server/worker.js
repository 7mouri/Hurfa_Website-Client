import { BEDROOM_PRODUCTS } from '../src/data/bedroomsData.js';
import { HttpError, assert, inspectGlb, inspectImage, validateRoom, validateSample } from './validation.js';
import * as validator from 'gltf-validator';
import { listImageKit, getImageKitFile, uploadImageKit } from './imagekit.js';

const ROOT = '/api/customizer';
const now = () => new Date().toISOString();
const urlFor = (id) => id ? `${ROOT}/assets/${id}` : null;
const json = (data, status = 200) => Response.json(data, { status, headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' } });
function database(env) {
  assert(env.DB && env.MATERIAL_ASSETS, 'The material library is not connected. Please try again later.', 503);
  return env.DB;
}
async function admin(request, env) {
  assert(env.CUSTOMIZER_ADMIN_TOKEN?.length >= 6, 'Material management has not been enabled. Configure the server access key.', 503);
  const supplied = request.headers.get('Authorization')?.replace(/^Bearer /, '') || '';
  const digest = async (value) => new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value)));
  const [a, b] = await Promise.all([digest(supplied), digest(env.CUSTOMIZER_ADMIN_TOKEN)]);
  let difference = 0;
  for (let i = 0; i < a.length; i++) difference |= a[i] ^ b[i];
  assert(difference === 0, 'The studio access key is incorrect.', 401);
}
async function bodyBytes(request, limit) {
  assert(Number(request.headers.get('content-length') || 0) <= limit, 'This file is too large.', 413);
  assert(request.body, 'The upload is empty.');
  const reader = request.body.getReader();
  const chunks = []; let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > limit) { await reader.cancel(); throw new HttpError(413, 'This file is too large.'); }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size); let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  return bytes;
}
async function bodyJson(request) {
  assert(request.headers.get('content-type')?.includes('application/json'), 'Send JSON configuration.', 415);
  try { return JSON.parse(new TextDecoder().decode(await bodyBytes(request, 65536))); }
  catch (error) { if (error instanceof HttpError) throw error; throw new HttpError(400, 'Invalid JSON configuration.'); }
}
async function allSamples(db) {
  const { results } = await db.prepare('SELECT * FROM customizer_samples ORDER BY kind, name').all();
  return results.map((row) => {
    const config = JSON.parse(row.config);
    return { ...config, id: row.id, name: row.name, kind: row.kind, active: Boolean(row.active), revision: row.revision,
      textures: Object.fromEntries(Object.entries(config.maps).map(([key, id]) => [key, urlFor(id)])) };
  });
}
async function asset(db, id, kind) {
  assert(typeof id === 'string', 'Choose an uploaded file.');
  const row = await db.prepare('SELECT * FROM customizer_assets WHERE id = ?').bind(id).first();
  assert(row && (!kind || row.kind === kind), 'That uploaded file is unavailable.', 400);
  return { ...row, metadata: JSON.parse(row.metadata), url: urlFor(row.id) };
}
async function catalog(db, includeInactive = false) {
  const samples = await allSamples(db);
  const { results } = await db.prepare('SELECT * FROM customizer_rooms').all();
  const rooms = BEDROOM_PRODUCTS.map((product) => {
    const row = results.find((r) => r.product_id === product.id);
    return { ...product, modelAssetId: row?.model_asset_id || null, modelUrl: urlFor(row?.model_asset_id),
      revision: row?.revision || 0, bindings: { wood: [], fabric: [] }, sampleIds: { wood: [], fabric: [] },
      defaults: { wood: null, fabric: null }, ...(row ? JSON.parse(row.config) : {}) };
  });
  return { rooms, samples: includeInactive ? samples : samples.filter((s) => s.active) };
}

export async function handleApi(request, env) {
  const url = new URL(request.url);
  try {
    const db = database(env);
    const pathname = url.pathname.slice(ROOT.length);
    if (!['GET', 'HEAD'].includes(request.method)) {
      const origin = request.headers.get('Origin');
      assert(!origin || origin === url.origin, 'Cross-origin writes are not allowed.', 403);
    }
    if (pathname.startsWith('/admin')) await admin(request, env);
    if (request.method === 'GET' && pathname === '/admin/imagekit') {
      return json(await listImageKit(env, { kind: url.searchParams.get('kind') || 'model', skip: Number(url.searchParams.get('skip') || 0), path: url.searchParams.get('path') || '' }));
    }
    if (request.method === 'POST' && pathname === '/admin/imagekit/upload') {
      const bytes = await bodyBytes(request, 8 * 1024 * 1024);
      const info = inspectImage(bytes);
      let filename = 'sample.png';
      try { filename = decodeURIComponent(request.headers.get('X-File-Name') || filename).replace(/[/\\\r\n]/g, '_').slice(0, 180); } catch { /* Use safe default name. */ }
      return json(await uploadImageKit(env, bytes, filename, info.mime), 201);
    }
    if (request.method === 'GET' && pathname === '/catalog') return json(await catalog(db));
    if (request.method === 'GET' && pathname === '/admin/catalog') {
      const data = await catalog(db, true);
      const { results } = await db.prepare("SELECT * FROM customizer_assets WHERE kind = 'model' ORDER BY created_at DESC LIMIT 100").all();
      return json({ ...data, models: results.map((r) => ({ id: r.id, url: urlFor(r.id), ...JSON.parse(r.metadata) })) });
    }
    const assetMatch = pathname.match(/^\/assets\/([a-f\d-]{36})$/);
    if (assetMatch && ['GET', 'HEAD'].includes(request.method)) {
      const row = await db.prepare('SELECT * FROM customizer_assets WHERE id = ?').bind(assetMatch[1]).first();
      assert(row, 'File not found.', 404);
      const object = await env.MATERIAL_ASSETS.get(row.object_key);
      assert(object, 'File not found.', 404);
      return new Response(request.method === 'HEAD' ? null : object.body, { headers: {
        'Content-Type': row.mime, 'Content-Length': String(row.size), 'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Content-Type-Options': 'nosniff', 'Content-Security-Policy': "default-src 'none'; sandbox",
        'Cross-Origin-Resource-Policy': 'same-origin', ETag: object.httpEtag,
      } });
    }
    if (request.method === 'POST' && ['/admin/assets', '/admin/imagekit/import'].includes(pathname)) {
      const imported = pathname === '/admin/imagekit/import' ? await bodyJson(request) : null;
      const kind = imported?.kind || url.searchParams.get('kind');
      assert(['image', 'model'].includes(kind), 'Choose an image or model upload.');
      const remote = imported ? await getImageKitFile(env, imported.fileId, kind) : null;
      const bytes = await bodyBytes(remote?.response || request, (kind === 'model' ? 20 : 8) * 1024 * 1024);
      let metadata, mime;
      if (kind === 'model') {
        metadata = inspectGlb(bytes);
        const report = await validator.validateBytes(bytes, { maxIssues: 20, externalResourceFunction: () => Promise.reject(new Error('External resources are disabled.')) });
        assert(!report.issues.truncated, 'The model has too many validation issues. Clean up the export and try again.');
        assert(!report.issues.numErrors, `The GLB did not pass validation: ${report.issues.messages.find((m) => m.severity === 0)?.message || 'Please check the export.'}`);
        metadata.warnings = report.issues.messages.filter((m) => m.severity === 1).map((m) => m.message);
        mime = 'model/gltf-binary';
      } else {
        metadata = inspectImage(bytes); mime = metadata.mime;
      }
      metadata.filename = remote?.filename || (request.headers.get('X-File-Name') || 'Upload').slice(0, 180);
      if (remote) metadata.source = remote.source;
      const id = crypto.randomUUID(); const key = `${kind}/${id}`;
      await env.MATERIAL_ASSETS.put(key, bytes, { httpMetadata: { contentType: mime } });
      try {
        await db.prepare('INSERT INTO customizer_assets (id, kind, object_key, mime, size, metadata, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)')
          .bind(id, kind, key, mime, bytes.length, JSON.stringify(metadata), now()).run();
      } catch (error) { await env.MATERIAL_ASSETS.delete(key); throw error; }
      return json({ id, url: urlFor(id), ...metadata }, 201);
    }
    const sampleMatch = pathname.match(/^\/admin\/samples(?:\/([a-f\d-]{36}))?$/);
    if (sampleMatch && ['POST', 'PUT'].includes(request.method)) {
      assert(request.method === 'PUT' ? Boolean(sampleMatch[1]) : !sampleMatch[1], 'Invalid sample endpoint.', 405);
      const input = await bodyJson(request); const sample = validateSample(input);
      for (const id of Object.values(sample.maps).filter(Boolean)) await asset(db, id, 'image');
      const id = sampleMatch[1] || crypto.randomUUID();
      if (sampleMatch[1]) {
        const existing = await db.prepare('SELECT * FROM customizer_samples WHERE id = ?').bind(id).first();
        assert(existing, 'Sample not found.', 404);
        assert(existing.kind === sample.kind, 'A saved sample cannot change between wood and fabric.');
        // A referenced sample cannot disappear from a published room.
        const result = await db.prepare(`UPDATE customizer_samples SET name = ?, config = ?, active = ?, revision = revision + 1, updated_at = ?
          WHERE id = ? AND revision = ? AND (? = 1 OR NOT EXISTS (
            SELECT 1 FROM customizer_rooms r, json_each(r.config, '$.sampleIds.wood') w WHERE w.value = ?
            UNION ALL SELECT 1 FROM customizer_rooms r, json_each(r.config, '$.sampleIds.fabric') f WHERE f.value = ?))`)
          .bind(sample.name, JSON.stringify(sample), Number(sample.active), now(), id, input.revision ?? -1, Number(sample.active), id, id).run();
        assert(result.meta.changes, 'This sample changed, or is still assigned to a bedroom. Reload and remove its room assignments before archiving.', 409);
      } else {
        await db.prepare('INSERT INTO customizer_samples (id, name, kind, config, active, revision, updated_at) VALUES (?, ?, ?, ?, ?, 1, ?)')
          .bind(id, sample.name, sample.kind, JSON.stringify(sample), Number(sample.active), now()).run();
      }
      return json({ id }, sampleMatch[1] ? 200 : 201);
    }
    const roomMatch = pathname.match(/^\/admin\/rooms\/([a-z\d-]+)$/);
    if (request.method === 'PUT' && roomMatch) {
      const productId = roomMatch[1];
      assert(BEDROOM_PRODUCTS.some((p) => p.id === productId), 'Bedroom not found.', 404);
      const input = await bodyJson(request);
      const model = input.modelAssetId ? await asset(db, input.modelAssetId, 'model') : null;
      const config = model ? validateRoom(input, model.metadata, await allSamples(db)) : { bindings: { wood: [], fabric: [] }, sampleIds: { wood: [], fabric: [] }, defaults: { wood: null, fabric: null } };
      const sampleIds = [...config.sampleIds.wood, ...config.sampleIds.fabric];
      const result = await db.prepare(`INSERT INTO customizer_rooms (product_id, model_asset_id, config, revision, updated_at)
        SELECT ?, ?, ?, 1, ? WHERE (SELECT COUNT(*) FROM customizer_samples WHERE active = 1 AND id IN (SELECT value FROM json_each(?))) = ?
        AND (? = 0 OR EXISTS (SELECT 1 FROM customizer_rooms WHERE product_id = ?))
        ON CONFLICT(product_id) DO UPDATE SET model_asset_id = excluded.model_asset_id, config = excluded.config,
          revision = customizer_rooms.revision + 1, updated_at = excluded.updated_at WHERE customizer_rooms.revision = ?`)
        .bind(productId, model?.id || null, JSON.stringify(config), now(), JSON.stringify(sampleIds), sampleIds.length, input.revision ?? -1, productId, input.revision ?? -1).run();
      assert(result.meta.changes, 'The bedroom or samples changed while you were editing. Reload and try again.', 409);
      return json({ productId });
    }
    return json({ error: 'Endpoint not found.' }, 404);
  } catch (error) {
    if (!(error instanceof HttpError)) console.error('Customizer API failure:', error);
    return json({ error: error instanceof HttpError ? error.message : 'The material library is temporarily unavailable. Please try again.' }, error.status || 500);
  }
}

export default {
  async fetch(request, env) {
    const pathname = new URL(request.url).pathname;
    if (pathname.startsWith(`${ROOT}/`)) return handleApi(request, env);
    return env.ASSETS ? env.ASSETS.fetch(request) : new Response('Not found', { status: 404 });
  },
};
