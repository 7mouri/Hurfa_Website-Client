const BASE = '/api/customizer';
let studioAccessKey = '';
export const getStudioAccessKey = () => studioAccessKey;
export const setStudioAccessKey = (value) => { studioAccessKey = value; };

export async function customizerApi(path, { token, body, method = 'GET', signal } = {}) {
  let response;
  try {
    response = await fetch(`${BASE}${path}`, {
      method, signal, headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}), ...(body ? { 'Content-Type': 'application/json' } : {}) },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
  } catch (error) {
    if (error.name === 'AbortError') throw error;
    throw new Error('The material library could not be reached. Please try again.');
  }
  const data = await response.json().catch(() => null);
  if (!response.ok || !data) throw new Error(data?.error || 'The material library is unavailable. Please try again.');
  return data;
}

export async function uploadCustomizerAsset(file, kind, token) {
  const limit = (kind === 'model' ? 20 : 8) * 1024 * 1024;
  if (file.size > limit) throw new Error(`Choose a file smaller than ${kind === 'model' ? 20 : 8} MB.`);
  const response = await fetch(`${BASE}/admin/assets?kind=${kind}`, {
    method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/octet-stream', 'X-File-Name': encodeURIComponent(file.name) }, body: file,
  });
  const data = await response.json().catch(() => null);
  if (!response.ok || !data) throw new Error(data?.error || 'Upload failed. Please try again.');
  return { ...data, filename: file.name };
}
