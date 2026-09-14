import { assert } from './validation.js';

function authorization(env) {
  assert(env.IMAGEKIT_PRIVATE_KEY, 'ImageKit is not connected. Add IMAGEKIT_PRIVATE_KEY to the server configuration.', 503);
  return `Basic ${btoa(`${env.IMAGEKIT_PRIVATE_KEY}:`)}`;
}
async function callImageKit(env, path) {
  const response = await fetch(`https://api.imagekit.io/v1/${path}`, {
    headers: { Authorization: authorization(env) }, signal: AbortSignal.timeout(20000), redirect: 'error',
  });
  assert(response.ok, response.status === 401 || response.status === 403 ? 'ImageKit rejected the server API key. Update it in the server configuration.' : 'ImageKit could not complete the request. Please try again.', 502);
  return response.json();
}
export function trustedImageKitUrl(value, env) {
  const endpoint = new URL(env.IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/6dghafkgmq');
  let url;
  try { url = new URL(value); } catch { assert(false, 'ImageKit returned an invalid asset URL.'); }
  assert(endpoint.protocol === 'https:' && endpoint.hostname === 'ik.imagekit.io' && endpoint.pathname.length > 1, 'Configure a valid ImageKit delivery endpoint.', 503);
  const prefix = `${endpoint.pathname.replace(/\/$/, '')}/`;
  assert(url.protocol === 'https:' && url.origin === endpoint.origin && url.pathname.startsWith(prefix) && !url.username && !url.password && !url.hash, 'This file is outside the configured ImageKit library.');
  return url.href;
}
export async function listImageKit(env, { kind = 'model', skip = 0, path = '' } = {}) {
  assert(['model', 'image'].includes(kind), 'Choose models or images.');
  assert(Number.isInteger(skip) && skip >= 0 && skip <= 100000, 'Invalid library page.');
  assert(typeof path === 'string' && path.length <= 300, 'Invalid folder.');
  const query = new URLSearchParams({ type: 'file', fileType: kind === 'model' ? 'non-image' : 'image', limit: '100', skip: String(skip), sort: 'DESC_CREATED' });
  if (path) query.set('path', path);
  const files = await callImageKit(env, `files?${query}`);
  assert(Array.isArray(files), 'ImageKit returned an invalid library response.', 502);
  return {
    files: files.filter((file) => kind === 'model' ? /\.glb$/i.test(file.name) : /\.(png|jpe?g)$/i.test(file.name)).map((file) => ({
      fileId: file.fileId, name: file.name, filePath: file.filePath, size: file.size, url: trustedImageKitUrl(file.url, env),
      updatedAt: file.updatedAt, kind,
    })),
    nextSkip: files.length === 100 ? skip + 100 : null,
  };
}
export async function getImageKitFile(env, id, kind) {
  assert(typeof id === 'string' && /^[a-zA-Z\d_-]{1,100}$/.test(id), 'Choose a valid ImageKit file.');
  const file = await callImageKit(env, `files/${encodeURIComponent(id)}/details`);
  assert(kind === 'model' ? /\.glb$/i.test(file.name) : /\.(png|jpe?g)$/i.test(file.name), kind === 'model' ? 'Choose a GLB model from ImageKit.' : 'Choose a PNG or JPEG sample from ImageKit.');
  const sourceUrl = trustedImageKitUrl(file.url, env);
  assert(file.size <= (kind === 'model' ? 20 : 8) * 1024 * 1024, 'The selected ImageKit file is too large.', 413);
  const response = await fetch(sourceUrl, { signal: AbortSignal.timeout(30000), redirect: 'error' });
  assert(response.ok, 'The selected file cannot be downloaded from ImageKit.', 502);
  return { response, filename: file.name, source: { provider: 'imagekit', fileId: id, url: sourceUrl, version: file.versionInfo?.id || file.updatedAt || null } };
}
export async function uploadImageKit(env, bytes, filename, mime) {
  const form = new FormData();
  form.append('file', new Blob([bytes], { type: mime }), filename);
  form.append('fileName', filename); form.append('folder', '/hurfa_catalog/'); form.append('useUniqueFileName', 'true');
  const response = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
    method: 'POST', headers: { Authorization: authorization(env) }, body: form, signal: AbortSignal.timeout(60000), redirect: 'error',
  });
  assert(response.ok, 'ImageKit upload failed. No file has been added to the library.', 502);
  return response.json();
}
