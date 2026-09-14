import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RotateCcw, Plus, Minus, Move, Maximize2, Pause, Rotate3D } from 'lucide-react';

function disposeObject(object) {
  const materials = new Set(), textures = new Set();
  object.traverse((node) => {
    node.geometry?.dispose();
    for (const mat of (Array.isArray(node.material) ? node.material : [node.material]).filter(Boolean)) materials.add(mat);
  });
  for (const mat of materials) {
    for (const value of Object.values(mat)) if (value?.isTexture) textures.add(value);
    mat.dispose();
  }
  for (const texture of textures) { texture.dispose(); texture.source?.data?.close?.(); }
}

export default function BedroomModelViewer({ room, wood, fabric }) {
  const mount = useRef(null), runtime = useRef(null);
  const [status, setStatus] = useState({ phase: 'loading', message: 'Preparing your preview…' });
  const [materialError, setMaterialError] = useState('');
  const [rotating, setRotating] = useState(false);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    const host = mount.current;
    let renderer, controls, environment, pmrem, observer, model;
    let cancelled = false, frame = 0;
    const scene = new THREE.Scene(); scene.background = new THREE.Color('#eeeae3');
    const camera = new THREE.PerspectiveCamera(36, 1, 0.01, 500);
    // The React status mirrors the lifecycle of the external WebGL scene.
    // oxlint-disable-next-line react/set-state-in-effect
    setStatus({ phase: 'loading', message: 'Preparing your preview…' });
    setMaterialError(''); setRotating(false);
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.domElement.setAttribute('aria-label', `Interactive 3D preview of ${room.name}. Use the view buttons to rotate and zoom.`);
      renderer.domElement.setAttribute('role', 'img');
      host.appendChild(renderer.domElement);
      pmrem = new THREE.PMREMGenerator(renderer);
      const studio = new RoomEnvironment(); environment = pmrem.fromScene(studio, 0.04); studio.dispose();
      scene.environment = environment.texture; scene.environmentIntensity = 0.7;
      scene.add(new THREE.HemisphereLight('#fffaf1', '#b4a899', 2));
      const light = new THREE.DirectionalLight('#fff9ed', 3.3); light.position.set(4, 8, 5); light.castShadow = true;
      light.shadow.mapSize.set(2048, 2048); light.shadow.camera.left = -10; light.shadow.camera.right = 10;
      light.shadow.camera.top = 10; light.shadow.camera.bottom = -10; light.shadow.normalBias = 0.025; scene.add(light);
      controls = new OrbitControls(camera, renderer.domElement); controls.enableDamping = true;
      controls.maxPolarAngle = Math.PI / 2.05; controls.minPolarAngle = 0.15; controls.enablePan = false;
      controls.autoRotateSpeed = 0.8;
      const load = new GLTFLoader().loadAsync(room.modelUrl).then((gltf) => gltf.scene);
      load.then((loaded) => {
        if (cancelled) { disposeObject(loaded); return; }
        model = loaded;
        const bounds = new THREE.Box3().setFromObject(model), size = bounds.getSize(new THREE.Vector3());
        if (!Number.isFinite(size.length()) || size.length() === 0) { disposeObject(loaded); throw new Error('The model has no visible geometry.'); }
        const center = bounds.getCenter(new THREE.Vector3());
        // Center without changing model units or the artist's UV scale.
        model.position.sub(new THREE.Vector3(center.x, bounds.min.y, center.z));
        model.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
        scene.add(model);
        const span = Math.max(size.x, size.y, size.z);
        const ground = new THREE.Mesh(new THREE.PlaneGeometry(span * 10, span * 10), new THREE.ShadowMaterial({ opacity: 0.13 }));
        ground.rotation.x = -Math.PI / 2; ground.position.y = -0.006; ground.receiveShadow = true; scene.add(ground);
        controls.target.set(0, size.y * 0.4, 0); controls.minDistance = span * 0.7; controls.maxDistance = span * 6;
        camera.near = span / 1000; camera.far = span * 100; camera.updateProjectionMatrix();
        const reset = (front = false) => {
          const distance = span * 1.8 / Math.min(1, camera.aspect);
          camera.position.set(front ? 0 : distance * 0.72, size.y * 0.6 + distance * 0.43, distance * 0.9);
          controls.target.set(0, size.y * 0.4, 0); controls.update();
        };
        runtime.current = { model, controls, camera, reset, renderer };
        reset(); setStatus({ phase: 'ready', message: '' });
      }).catch((error) => {
        if (!cancelled) setStatus({ phase: 'error', message: error.message === 'The model has no visible geometry.' ? error.message : 'We couldn’t load this 3D model. Please try again.' });
      });
      observer = new ResizeObserver(() => {
        const width = host.clientWidth, height = host.clientHeight;
        if (!width || !height) return;
        renderer.setSize(width, height); camera.aspect = width / height; camera.updateProjectionMatrix();
      });
      observer.observe(host);
      const animate = () => { frame = requestAnimationFrame(animate); if (!document.hidden) { controls.update(); renderer.render(scene, camera); } };
      animate();
    } catch {
      setStatus({ phase: 'error', message: '3D preview is unavailable in this browser. Please enable hardware acceleration or try another browser.' });
    }
    return () => {
      cancelled = true; runtime.current?.cleanupMaterials?.(); runtime.current = null; cancelAnimationFrame(frame); observer?.disconnect(); controls?.dispose();
      disposeObject(scene); environment?.dispose(); pmrem?.dispose(); renderer?.dispose();
      renderer?.domElement.remove();
    };
  }, [room.id, room.modelUrl, room.name, retry]);

  useEffect(() => {
    if (status.phase !== 'ready' || !runtime.current) return;
    const current = runtime.current;
    let cancelled = false; const created = [], replacements = [], originals = new Map();
    const anisotropy = Math.min(8, current.renderer.capabilities.getMaxAnisotropy());
    const cleanup = () => {
      cancelled = true;
      for (const [node, original] of originals) node.material = original;
      originals.clear();
      replacements.splice(0).forEach((material) => material.dispose());
      created.splice(0).forEach((tex) => tex.dispose());
    };
    current.cleanupMaterials = cleanup;
    setMaterialError('');
    const loader = new THREE.TextureLoader();
    const texture = async (url, sample, color = false) => {
      if (!url) return null;
      const tex = await loader.loadAsync(url); created.push(tex);
      tex.flipY = false; tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(sample.repeatX, sample.repeatY); tex.center.set(0.5, 0.5); tex.rotation = THREE.MathUtils.degToRad(sample.rotation);
      tex.anisotropy = anisotropy;
      if (color) tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    };
    async function apply() {
      for (const [kind, sample] of [['wood', wood], ['fabric', fabric]]) {
        if (!sample) continue;
        const names = room.bindings[kind];
        const maps = await Promise.allSettled([
          texture(sample.textures.baseColor, sample, true),
          texture(sample.textures.normal, sample), texture(sample.textures.roughness, sample),
        ]);
        if (maps.some((result) => result.status === 'rejected')) throw new Error(`The ${sample.name} texture could not load. Choose another finish or retry.`);
        if (cancelled) return;
        const [map, normalMap, roughnessMap] = maps.map((result) => result.value);
        const found = new Set();
        current.model.traverse((node) => {
          if (!node.isMesh) return;
          const original = node.material;
          const change = (material) => {
            if (!names.includes(material.name)) return material;
            found.add(material.name);
            const next = material.clone();
            next.map = map; next.normalMap = normalMap; next.roughnessMap = roughnessMap;
            next.color.set(sample.color);
            next.roughness = sample.roughness; next.metalness = sample.metalness;
            next.metalnessMap = null; next.needsUpdate = true;
            if (!originals.has(node)) originals.set(node, original);
            replacements.push(next);
            return next;
          };
          node.material = Array.isArray(original) ? original.map(change) : change(original);
        });
        if (names.some((name) => !found.has(name))) throw new Error(`The model’s ${kind} surfaces need to be mapped again by the studio.`);
      }
    }
    apply().catch((error) => { if (!cancelled) { setMaterialError(error.message); cleanup(); } }).finally(() => {
      if (cancelled) cleanup();
    });
    return cleanup;
  }, [wood, fabric, status.phase, room.bindings, retry]);

  const action = (name) => {
    const r = runtime.current; if (!r) return;
    if (name === 'reset' || name === 'front') r.reset(name === 'front');
    if (name === 'in' || name === 'out') {
      const direction = r.camera.position.clone().sub(r.controls.target);
      const length = THREE.MathUtils.clamp(direction.length() * (name === 'in' ? 0.8 : 1.25), r.controls.minDistance, r.controls.maxDistance);
      r.camera.position.copy(r.controls.target).add(direction.setLength(length));
    }
    if (name === 'rotate') { r.controls.autoRotate = !r.controls.autoRotate; setRotating(r.controls.autoRotate); }
    if (name === 'left' || name === 'right') {
      const direction = r.camera.position.clone().sub(r.controls.target).applyAxisAngle(new THREE.Vector3(0, 1, 0), name === 'left' ? 0.3 : -0.3);
      r.camera.position.copy(r.controls.target).add(direction);
    }
    r.controls.update();
  };
  return <div className="bc-viewer">
    <div className="bc-canvas" ref={mount} />
    <div className="bc-viewer-label"><span className="bc-live-dot" />Your room in 3D</div>
    {status.phase !== 'ready' && <div className="bc-viewer-message" role="status">
      {status.phase === 'loading' && <span className="bc-spinner" />}
      <p>{status.message}</p>
      {status.phase === 'error' && <button className="bc-button" onClick={() => setRetry((v) => v + 1)}>Try again</button>}
    </div>}
    {materialError && <div className="bc-viewer-error" role="alert">{materialError}</div>}
    <div className="bc-camera-controls" aria-label="3D camera controls">
      <button onClick={() => action('reset')} disabled={status.phase !== 'ready'} title="Reset view" aria-label="Reset view"><RotateCcw size={18} /></button>
      <button onClick={() => action('in')} disabled={status.phase !== 'ready'} title="Zoom in" aria-label="Zoom in"><Plus size={18} /></button>
      <button onClick={() => action('out')} disabled={status.phase !== 'ready'} title="Zoom out" aria-label="Zoom out"><Minus size={18} /></button>
      <button onClick={() => action('rotate')} disabled={status.phase !== 'ready'} title="Auto rotate" aria-label="Auto rotate" aria-pressed={rotating}>{rotating ? <Pause size={18} /> : <Rotate3D size={18} />}</button>
    </div>
    <div className="bc-viewer-bottom">
      <span><Move size={15} /> Drag to rotate · Scroll to zoom</span>
      <div><button onClick={() => action('left')} aria-label="Rotate left" disabled={status.phase !== 'ready'}>←</button><button onClick={() => action('front')} disabled={status.phase !== 'ready'}><Maximize2 size={14} /> Front</button><button onClick={() => action('right')} aria-label="Rotate right" disabled={status.phase !== 'ready'}>→</button></div>
    </div>
  </div>;
}
