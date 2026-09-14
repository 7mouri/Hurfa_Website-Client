import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Box, RefreshCw, X } from 'lucide-react';
import { customizerApi } from '../lib/customizerApi';

export default function ImageKitAssetPicker({ kind, token, onSelect, onClose }) {
  const dialog = useRef(null);
  const [files, setFiles] = useState([]), [nextSkip, setNextSkip] = useState(null), [query, setQuery] = useState('');
  const [error, setError] = useState(''), [loading, setLoading] = useState(true), [selected, setSelected] = useState('');
  useEffect(() => {
    const element = dialog.current;
    element.showModal();
    const controller = new AbortController();
    customizerApi(`/admin/imagekit?kind=${kind}`, { token, signal: controller.signal })
      .then((data) => { setFiles(data.files); setNextSkip(data.nextSkip); })
      .catch((err) => { if (err.name !== 'AbortError') setError(err.message); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => { controller.abort(); element.close(); };
  }, [kind, token]);
  async function load(skip = 0) {
    setLoading(true); setError('');
    try {
      const data = await customizerApi(`/admin/imagekit?kind=${kind}&skip=${skip}`, { token });
      setFiles((previous) => skip ? [...previous, ...data.files] : data.files); setNextSkip(data.nextSkip);
    } catch (err) { setError(err.message); } finally { setLoading(false); }
  }
  async function choose(file) {
    setSelected(file.fileId); setError('');
    try {
      const asset = await customizerApi('/admin/imagekit/import', { method: 'POST', token, body: { fileId: file.fileId, kind } });
      onSelect(asset); onClose();
    } catch (err) { setError(err.message); setSelected(''); }
  }
  const filtered = files.filter((file) => `${file.name} ${file.filePath}`.toLowerCase().includes(query.toLowerCase()));
  return createPortal(<dialog ref={dialog} className="bc-page bm-page bm-media-dialog" aria-labelledby="bm-media-title" onCancel={(event) => { event.preventDefault(); if (!selected) onClose(); }}>
    <div className="bm-panel-heading"><div><span className="bc-eyebrow">Existing ImageKit library</span><h2 id="bm-media-title">Choose {kind === 'model' ? 'a bedroom model' : 'a sample texture'}</h2></div><button className="bc-button bc-button-secondary" type="button" aria-label="Close media library" disabled={Boolean(selected)} onClick={onClose}><X size={19} /></button></div>
    <p className="bm-help">{kind === 'model' ? 'Your GLB files appear here. Upload models to ImageKit, then refresh this list.' : 'Select one of your PNG or JPEG textures from ImageKit.'}</p>
    <div className="bm-media-toolbar"><input aria-label="Search loaded files" placeholder="Search loaded files by name or folder" value={query} onChange={(e) => setQuery(e.target.value)} /><button type="button" className="bc-button bc-button-secondary" disabled={loading || Boolean(selected)} onClick={() => load()}><RefreshCw size={16} /> Refresh</button></div>
    {error && <p className="bm-error" role="alert">{error}</p>}
    {selected && <p className="bm-success" role="status">Checking the selected file…</p>}
    <div className="bm-media-grid">{filtered.map((file) => <button type="button" key={file.fileId} className="bm-media-file" disabled={Boolean(selected) || loading} onClick={() => choose(file)}>
      {kind === 'image' ? <img src={file.url} alt="" loading="lazy" /> : <span className="bm-media-model-icon"><Box size={35} /><span>GLB</span></span>}
      <strong>{file.name}</strong><span>{file.filePath}</span><small>{(file.size / 1024 / 1024).toFixed(1)} MB</small>
    </button>)}</div>
    {!loading && !error && !filtered.length && <p className="bm-help">{query ? 'No loaded files match your search.' : `No ${kind === 'model' ? 'GLB models' : 'PNG or JPEG textures'} found on this library page.`}{nextSkip !== null && ' Load more files to continue browsing.'}</p>}
    {loading && <p className="bm-help" role="status">Loading ImageKit files…</p>}
    {nextSkip !== null && <button type="button" className="bc-button" disabled={loading || Boolean(selected)} onClick={() => load(nextSkip)}>Load more files</button>}
  </dialog>, document.body);
}
