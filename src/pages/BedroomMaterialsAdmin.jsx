import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Upload, LockKeyhole, Check, ExternalLink } from 'lucide-react';
import { customizerApi, setStudioAccessKey } from '../lib/customizerApi';
import ImageKitAssetPicker from '../components/ImageKitAssetPicker';
import '../css/bedroom-custamize.css';
import '../css/bedroom-materials-admin.css';

const blankSample = () => ({ name: '', kind: 'wood', description: '', color: '#ffffff', roughness: 0.65, metalness: 0, repeatX: 1, repeatY: 1, rotation: 0, active: true, maps: { baseColor: null, normal: null, roughness: null }, textures: {} });

function SampleEditor({ sample, token, onSaved, onCancel }) {
  const [draft, setDraft] = useState(() => sample || blankSample());
  const [busy, setBusy] = useState(false), [error, setError] = useState('');
  const [mediaMap, setMediaMap] = useState('');
  const patch = (key, value) => setDraft((d) => ({ ...d, [key]: value }));
  async function save(event) {
    event.preventDefault(); setBusy(true); setError('');
    try {
      await customizerApi(`/admin/samples${sample ? `/${sample.id}` : ''}`, { token, method: sample ? 'PUT' : 'POST', body: draft });
      await onSaved();
    } catch (err) { setError(err.message); } finally { setBusy(false); }
  }
  return <><form className="bm-panel" onSubmit={save}>
    <div className="bm-panel-heading"><h2>{sample ? 'Edit sample' : 'New material sample'}</h2><button type="button" className="bc-reset" onClick={onCancel} disabled={busy}>Close</button></div>
    <p className="bm-help">Use a seamless, evenly lit texture. Color tint is white by default to preserve your sample’s original color.</p>
    {error && <p className="bm-error" role="alert">{error}</p>}
    <fieldset disabled={busy}>
      <div className="bm-fields"><label>Sample name<input required maxLength={80} value={draft.name} onChange={(e) => patch('name', e.target.value)} placeholder="e.g. Natural oak · W01" /></label><label>Material type<select value={draft.kind} disabled={Boolean(sample)} onChange={(e) => patch('kind', e.target.value)}><option value="wood">Wood</option><option value="fabric">Fabric</option></select></label></div>
      <label>Description<input maxLength={240} value={draft.description} onChange={(e) => patch('description', e.target.value)} placeholder="A short description for your clients" /></label>
      <div className="bm-upload-grid">{[['baseColor', 'Base color · required'], ['normal', 'Normal map · optional'], ['roughness', 'Roughness map · optional']].map(([key, label]) => <div className="bm-upload" key={key}>
        {draft.textures[key] ? <img src={draft.textures[key]} alt={label} /> : <Upload size={24} />}
        <label>{label}</label><button type="button" className="bc-reset" onClick={() => setMediaMap(key)}>Choose from ImageKit</button>
        {key !== 'baseColor' && draft.maps[key] && <button type="button" className="bm-text-button" onClick={() => setDraft((d) => ({ ...d, maps: { ...d.maps, [key]: null }, textures: { ...d.textures, [key]: null } }))}>Remove map</button>}
      </div>)}</div>
      <p className="bm-help">PNG or JPEG · up to 8 MB and 4096 × 4096 per texture. Prefer 1024 or 2048 px for mobile.</p>
      <div className="bm-fields bm-fields-three">
        <label>Roughness (0–1)<input type="number" min="0" max="1" step="0.05" required value={draft.roughness} onChange={(e) => patch('roughness', Number(e.target.value))} /></label>
        <label>Metalness (0–1)<input type="number" min="0" max="1" step="0.05" required value={draft.metalness} onChange={(e) => patch('metalness', Number(e.target.value))} /></label>
        <label>Color tint<input type="color" value={draft.color} onChange={(e) => patch('color', e.target.value)} /></label>
        <label>Horizontal repeat<input type="number" min="0.1" max="50" step="0.1" required value={draft.repeatX} onChange={(e) => patch('repeatX', Number(e.target.value))} /></label>
        <label>Vertical repeat<input type="number" min="0.1" max="50" step="0.1" required value={draft.repeatY} onChange={(e) => patch('repeatY', Number(e.target.value))} /></label>
        <label>Rotation (degrees)<input type="number" min="-180" max="180" step="1" required value={draft.rotation} onChange={(e) => patch('rotation', Number(e.target.value))} /></label>
      </div>
      <label className="bm-check"><input type="checkbox" checked={draft.active} onChange={(e) => patch('active', e.target.checked)} /> Available for bedroom assignments</label>
      <button className="bc-button" type="submit" disabled={!draft.maps.baseColor || busy}>{busy ? 'Working…' : 'Save sample'}</button>
    </fieldset>
  </form>{mediaMap && <ImageKitAssetPicker kind="image" token={token} onClose={() => setMediaMap('')} onSelect={(asset) => setDraft((d) => ({ ...d, maps: { ...d.maps, [mediaMap]: asset.id }, textures: { ...d.textures, [mediaMap]: asset.url } }))} />}</>;
}

function RoomEditor({ room, catalog, token, onSaved }) {
  const [draft, setDraft] = useState(room), [models, setModels] = useState(catalog.models);
  const [showLibrary, setShowLibrary] = useState(false);
  const [busy, setBusy] = useState(false), [error, setError] = useState(''), [message, setMessage] = useState('');
  const model = models.find((m) => m.id === draft.modelAssetId);
  function chooseModel(id) {
    setDraft((d) => ({ ...d, modelAssetId: id, bindings: { wood: [], fabric: [] }, sampleIds: { wood: [], fabric: [] }, defaults: { wood: null, fabric: null } }));
  }
  function mapMaterial(name, kind) {
    setDraft((d) => {
      const bindings = { wood: d.bindings.wood.filter((n) => n !== name), fabric: d.bindings.fabric.filter((n) => n !== name) };
      if (kind) bindings[kind].push(name);
      return { ...d, bindings, sampleIds: { wood: bindings.wood.length ? d.sampleIds.wood : [], fabric: bindings.fabric.length ? d.sampleIds.fabric : [] }, defaults: { wood: bindings.wood.length ? d.defaults.wood : null, fabric: bindings.fabric.length ? d.defaults.fabric : null } };
    });
  }
  function toggleSample(sample) {
    const kind = sample.kind;
    setDraft((d) => {
      const ids = d.sampleIds[kind].includes(sample.id) ? d.sampleIds[kind].filter((id) => id !== sample.id) : [...d.sampleIds[kind], sample.id];
      return { ...d, sampleIds: { ...d.sampleIds, [kind]: ids }, defaults: { ...d.defaults, [kind]: ids.includes(d.defaults[kind]) ? d.defaults[kind] : ids[0] || null } };
    });
  }
  async function save(event) {
    event.preventDefault(); setBusy(true); setError(''); setMessage('');
    try {
      await customizerApi(`/admin/rooms/${room.id}`, { token, method: 'PUT', body: draft });
      await onSaved();
    } catch (err) { setError(err.message); } finally { setBusy(false); }
  }
  return <><form className="bm-panel" onSubmit={save}><h2>{room.name}</h2><p className="bm-help">Choose this bedroom’s GLB from your ImageKit library and save its assignment. You can configure wood and fabric options later.</p>
    {error && <p className="bm-error" role="alert">{error}</p>}{message && <p className="bm-success" role="status">{message}</p>}
    <fieldset disabled={busy}>
      <div className="bm-fields"><label>Assigned model<select value={draft.modelAssetId || ''} onChange={(e) => chooseModel(e.target.value)}><option value="">No model assigned</option>{models.map((m) => <option key={m.id} value={m.id}>{m.filename || m.id}</option>)}</select></label><div className="bm-action-row"><button type="button" className="bc-button bc-button-secondary" onClick={() => setShowLibrary(true)}>Browse ImageKit models</button>{draft.modelAssetId && <button type="button" className="bm-text-button" onClick={() => chooseModel(null)}>Remove assignment</button>}</div></div>
      <p className="bm-help">Self-contained, uncompressed GLB 2.0 · up to 20 MB. A model can be displayed with its original materials. Sample customization needs named surfaces and UV mapping.</p>
      {model && <>
        <h3>Material options (optional)</h3>
        <p className="bm-help">Leave surfaces on “Keep original” to use the file as provided. Set these options when your wood and fabric samples are ready.</p>
        <div className="bm-material-list">{model.materials.map((material, index) => <label key={index}><span><strong>{material.name}</strong><small>{!material.hasUV ? 'UV mapping needed for samples' : material.customizable === false ? 'A unique material name is needed for samples' : material.unlit ? 'Keep original · unlit material' : 'Ready for textures'}</small></span><select disabled={!material.hasUV || material.customizable === false || material.unlit} value={draft.bindings.wood.includes(material.name) ? 'wood' : draft.bindings.fabric.includes(material.name) ? 'fabric' : ''} onChange={(e) => mapMaterial(material.name, e.target.value)}><option value="">Keep original</option><option value="wood">Wood</option><option value="fabric">Fabric</option></select></label>)}</div>
        {model.warnings?.length > 0 && <details className="bm-help"><summary>Model export notes ({model.warnings.length})</summary><ul>{model.warnings.map((warning, i) => <li key={i}>{warning}</li>)}</ul></details>}
        <h3>2. Choose available samples</h3>
        {['wood', 'fabric'].map((kind) => <section className="bm-room-samples" key={kind}><h4>{kind === 'wood' ? 'Wood finishes' : 'Fabric finishes'}</h4>{!draft.bindings[kind].length ? <p className="bm-help">Assign a {kind} surface above to enable these samples.</p> : <>
          <div className="bm-sample-checks">{catalog.samples.filter((s) => s.active && s.kind === kind).map((s) => <label key={s.id} className="bm-check"><input type="checkbox" checked={draft.sampleIds[kind].includes(s.id)} onChange={() => toggleSample(s)} /><img src={s.textures.baseColor} alt="" /><span>{s.name}</span></label>)}</div>
          {!catalog.samples.some((s) => s.active && s.kind === kind) && <p className="bm-help">Add a {kind} sample to the library first.</p>}
          <label>Default finish<select value={draft.defaults[kind] || ''} onChange={(e) => setDraft((d) => ({ ...d, defaults: { ...d.defaults, [kind]: e.target.value || null } }))}><option value="">Choose a default</option>{catalog.samples.filter((s) => draft.sampleIds[kind].includes(s.id)).map((s) => <option value={s.id} key={s.id}>{s.name}</option>)}</select></label>
        </>}</section>)}
      </>}
      <div className="bm-action-row"><button type="submit" className="bc-button" disabled={busy}>{busy ? 'Working…' : 'Save bedroom setup'}</button><Link className="bc-button bc-button-secondary" to={`/bedroom-custamize?room=${room.id}`} target="_blank" rel="noreferrer">Open saved preview <ExternalLink size={15} /></Link></div>
    </fieldset>
  </form>{showLibrary && <ImageKitAssetPicker kind="model" token={token} onClose={() => setShowLibrary(false)} onSelect={(asset) => { setModels((all) => [asset, ...all.filter((m) => m.id !== asset.id)]); chooseModel(asset.id); setMessage('ImageKit model selected. Save this bedroom setup to apply it.'); }} />}</>;
}

export default function BedroomMaterialsAdmin() {
  const [token, setToken] = useState(''), [inputKey, setInputKey] = useState(''), [catalog, setCatalog] = useState(null);
  const [error, setError] = useState(''), [busy, setBusy] = useState(false), [section, setSection] = useState('rooms');
  const [editing, setEditing] = useState(null), [roomId, setRoomId] = useState(''), [success, setSuccess] = useState('');
  async function refresh(key = token) { const next = await customizerApi('/admin/catalog', { token: key }); setCatalog(next); return next; }
  async function unlock(event) {
    event.preventDefault(); setBusy(true); setError('');
    try { const data = await refresh(inputKey); setToken(inputKey); setStudioAccessKey(inputKey); setInputKey(''); setRoomId(data.rooms[0].id); }
    catch (err) { setError(err.message); } finally { setBusy(false); }
  }
  async function saved() { await refresh(); setEditing(null); setSuccess(section === 'samples' ? 'Sample saved to your library. Assign it to a bedroom to offer it to customers.' : 'Bedroom setup saved. Open the customer preview to check every finish.'); }
  return <main className="bc-page bm-page"><div className="bc-shell">
    <Link to="/admin" className="bc-back"><ArrowLeft size={16} /> Back to dashboard</Link>
    <header className="bc-header"><div><span className="bc-eyebrow">Hurfa · Studio management</span><h1>Materials & 3D models</h1><p>Your sample library, connected to every bedroom.</p></div>{token && <button className="bc-button bc-button-secondary" onClick={() => { setToken(''); setCatalog(null); setSuccess(''); }}>Lock studio <LockKeyhole size={16} /></button>}</header>
    {!token ? <form className="bm-panel bm-login" onSubmit={unlock}><LockKeyhole size={28} /><h2>Unlock material management</h2><p className="bm-help">Enter your studio access key to upload models and manage finishes.</p><label>Studio access key<input type="password" autoComplete="off" required value={inputKey} onChange={(e) => setInputKey(e.target.value)} /></label>{error && <p className="bm-error" role="alert">{error}</p>}<button className="bc-button" disabled={busy}>{busy ? 'Checking…' : 'Unlock studio'}</button></form> : <>
      <div className="bm-tabs"><button className={section === 'samples' ? 'active' : ''} onClick={() => { setSection('samples'); setSuccess(''); }}>Material library <span>{catalog.samples.length}</span></button><button className={section === 'rooms' ? 'active' : ''} onClick={() => { setSection('rooms'); setEditing(null); setSuccess(''); }}>Bedroom models <span>{catalog.rooms.length}</span></button></div>
      {success && <p className="bm-success" role="status"><Check size={17} /> {success}</p>}
      {section === 'samples' ? <>{editing ? <SampleEditor key={editing.id || 'new'} sample={editing.id ? editing : null} token={token} onSaved={saved} onCancel={() => setEditing(null)} /> : <>
        <div className="bm-action-row"><p className="bm-help">Create reusable wood and fabric finishes, then assign them to your bedrooms.</p><button className="bc-button" onClick={() => { setEditing({}); setSuccess(''); }}>+ Add sample</button></div>
        {catalog.samples.length === 0 ? <div className="bm-panel bm-empty"><LayersIcon /><h2>Your library starts here</h2><p>Upload your first wood or fabric texture to create a finish.</p><button className="bc-button" onClick={() => setEditing({})}>Add your first sample</button></div> : <div className="bm-library">{catalog.samples.map((sample) => <article className="bm-sample-card" key={sample.id}><img src={sample.textures.baseColor} alt={sample.name} /><div><span className="bc-eyebrow">{sample.kind} · {sample.active ? 'Available' : 'Archived'}</span><h2>{sample.name}</h2><p>{sample.description}</p><button className="bc-reset" onClick={() => { setEditing(sample); setSuccess(''); }}>Edit sample</button></div></article>)}</div>}
      </>}</> : <><label className="bm-room-select">Bedroom card<select value={roomId} onChange={(e) => { setRoomId(e.target.value); setSuccess(''); }}>{catalog.rooms.map((room) => <option value={room.id} key={room.id}>{room.name}</option>)}</select></label><RoomEditor key={`${roomId}-${catalog.rooms.find((r) => r.id === roomId).revision}`} room={catalog.rooms.find((r) => r.id === roomId)} catalog={catalog} token={token} onSaved={saved} /></>}
    </>}
  </div></main>;
}

function LayersIcon() { return <Upload size={32} aria-hidden="true" />; }
