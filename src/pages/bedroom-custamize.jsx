import { lazy, Suspense, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Check, ChevronRight, Layers, Leaf, RotateCcw, Armchair, Info } from 'lucide-react';
import { BEDROOM_PRODUCTS } from '../data/bedroomsData';
import { customizerApi } from '../lib/customizerApi';
import '../css/bedroom-custamize.css';

const BedroomModelViewer = lazy(() => import('../components/BedroomModelViewer'));

function FinishGroup({ kind, samples, selected, onSelect, hasSurface }) {
  const title = kind === 'wood' ? 'Wood finish' : 'Fabric & upholstery';
  return <section className="bc-finish-group" aria-label={title}>
    <div className="bc-section-heading"><span className="bc-step">{kind === 'wood' ? '01' : '02'}</span><h2>{title}</h2>{kind === 'wood' ? <Leaf size={19} /> : <Armchair size={19} />}</div>
    {!hasSurface ? <p className="bc-empty-note">This piece has no customizable {kind} surfaces.</p> : samples.length === 0 ? <p className="bc-empty-note">The studio is preparing {kind} samples for this piece.</p> : <>
      <div className="bc-selected-caption"><strong>{selected?.name || 'Choose a finish'}</strong><span>{samples.length} finishes</span></div>
      <div className="bc-swatches" role="group" aria-label={`Choose ${kind}`}>
        {samples.map((sample) => <button type="button" key={sample.id} className={`bc-swatch ${sample.id === selected?.id ? 'is-selected' : ''}`} aria-pressed={sample.id === selected?.id} aria-label={`Select ${sample.name}`} onClick={() => onSelect(sample.id)}>
          <span className="bc-swatch-image" style={{ backgroundColor: sample.color, backgroundImage: `url("${sample.textures.baseColor}")` }}>{sample.id === selected?.id && <span className="bc-swatch-check"><Check size={14} /></span>}</span>
          <span>{sample.name}</span>
        </button>)}
      </div>
      {selected?.description && <p className="bc-finish-description">{selected.description}</p>}
    </>}
  </section>;
}

function Customizer({ room, samples }) {
  const available = {
    wood: samples.filter((s) => s.kind === 'wood' && room.sampleIds.wood.includes(s.id)),
    fabric: samples.filter((s) => s.kind === 'fabric' && room.sampleIds.fabric.includes(s.id)),
  };
  const hasFabric = room.bindings.fabric.length > 0;
  const initial = { wood: room.defaults?.wood || available.wood[0]?.id || null, fabric: hasFabric ? room.defaults?.fabric || available.fabric[0]?.id || null : null };
  const [selection, setSelection] = useState(initial);
  const wood = available.wood.find((s) => s.id === selection.wood);
  const fabric = hasFabric ? available.fabric.find((s) => s.id === selection.fabric) : null;
  return <>
    <div className="bc-workspace">
      <div className="bc-preview-column">
        <Suspense fallback={<div className="bc-viewer bc-loading-panel" role="status">Loading 3D preview…</div>}>
          <BedroomModelViewer room={room} wood={wood} fabric={fabric} />
        </Suspense>
        <div className="bc-preview-caption"><Layers size={18} /><p>Choose an available finish to see it on your room. Fixed details keep their original materials.</p></div>
      </div>
      <aside className="bc-options">
        <div className="bc-options-header"><span className="bc-eyebrow">Make it yours</span><h2>A finish that feels like home.</h2><p>Find your wood. Add your texture. See it come together.</p></div>
        <FinishGroup kind="wood" samples={available.wood} selected={wood} hasSurface={room.bindings.wood.length > 0} onSelect={(id) => setSelection((s) => ({ ...s, wood: id }))} />
        <FinishGroup kind="fabric" samples={available.fabric} selected={fabric} hasSurface={hasFabric} onSelect={(id) => setSelection((s) => ({ ...s, fabric: id }))} />
        <div className="bc-selection-summary" aria-live="polite"><span className="bc-eyebrow">Your combination</span><div><span>Wood</span><strong>{wood?.name || 'Original finish'}</strong></div><div><span>Fabric</span><strong>{fabric?.name || 'Not applicable'}</strong></div></div>
        <button type="button" className="bc-reset" onClick={() => setSelection(initial)}><RotateCcw size={15} /> Reset finishes</button>
        <p className="bc-color-note"><Info size={15} />Screen colors can vary. Confirm your choice with a physical sample.</p>
      </aside>
    </div>
    <section className="bc-piece-card" aria-label="Selected bedroom piece"><img src={room.images[0]} alt={room.name} /><div><span className="bc-eyebrow">The piece you chose</span><h2>{room.name}</h2><p>{room.desc}</p></div><Link to="/bedrooms">Explore the collection <ChevronRight size={17} /></Link></section>
  </>;
}

export default function BedroomCustamize() {
  const [params, setParams] = useSearchParams();
  const productId = params.get('room') || BEDROOM_PRODUCTS[0].id;
  const [catalog, setCatalog] = useState(null), [error, setError] = useState(''), [reload, setReload] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    customizerApi('/catalog', { signal: controller.signal }).then(setCatalog).catch((err) => { if (err.name !== 'AbortError') setError(err.message); });
    return () => controller.abort();
  }, [reload]);
  const rooms = catalog?.rooms || BEDROOM_PRODUCTS;
  const room = rooms.find((r) => r.id === productId);
  if (!room) return <main className="bc-page"><div className="bc-shell"><h1>Bedroom not found</h1><p>Choose a piece from the bedroom collection.</p><Link className="bc-button" to="/bedrooms">Back to bedrooms</Link></div></main>;
  return <main className="bc-page"><div className="bc-shell">
    <Link className="bc-back" to="/bedrooms"><ArrowLeft size={16} /> Back to bedrooms</Link>
    <header className="bc-header"><div><span className="bc-eyebrow">Hurfa · Material studio</span><h1>Your bedroom, your touch.</h1><p>Explore the details that make a room feel yours.</p></div><label className="bc-room-switch">Selected piece<select value={room.id} onChange={(event) => setParams({ room: event.target.value })}>{rooms.map((r) => <option value={r.id} key={r.id}>{r.name}</option>)}</select></label></header>
    {error && <div className="bc-notice" role="alert"><Info size={18} /><span>{error}</span><button onClick={() => { setError(''); setReload((v) => v + 1); }}>Retry</button></div>}
    {!catalog && !error ? <div className="bc-loading-panel" role="status"><span className="bc-spinner" /> Loading the material library…</div> : catalog && (room.modelUrl ?
      <Customizer key={`${room.id}-${room.revision || 0}`} room={room} samples={catalog.samples} /> :
      <div className="bc-no-model"><h2>3D preview coming soon</h2><p>The preview for {room.name} is not available yet.</p><Link to="/bedrooms" className="bc-button bc-button-secondary">Back to the collection</Link></div>
    )}
  </div></main>;
}
