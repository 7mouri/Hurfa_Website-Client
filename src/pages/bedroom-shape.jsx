import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Archive,
  ArrowLeft,
  BedDouble,
  CheckCircle2,
  Copy,
  DoorClosed,
  Grid3X3,
  Lamp,
  Move,
  Plus,
  RotateCw,
  Ruler,
  Sparkles,
  Trash2,
  Undo2,
  AlertTriangle,
} from "lucide-react";
import "../css/bedroom-shape.css";

const ITEM_SPECS = {
  wardrobe: {
    width: 240,
    depth: 60,
    label: "Wardrobe",
    Icon: DoorClosed,
    fill: "#f6c96b",
    border: "#c68c1b",
  },
  ...Object.fromEntries([80, 120, 160, 200].map((width) => [
    `wardrobe-${width}`,
    { width, depth: 60, label: "Wardrobe", Icon: DoorClosed, fill: "#f6c96b", border: "#c68c1b" },
  ])),
  bed: {
    width: 180,
    depth: 200,
    label: "Bed",
    Icon: BedDouble,
    fill: "#a9d6c7",
    border: "#4f9f89",
  },
  ...Object.fromEntries([90, 120, 140].map((width) => [
    `bed-${width}`,
    { width, depth: 200, label: "Bed", Icon: BedDouble, fill: "#a9d6c7", border: "#4f9f89" },
  ])),
  "bed-160": {
    width: 160,
    depth: 200,
    label: "Bed",
    Icon: BedDouble,
    fill: "#a9d6c7",
    border: "#4f9f89",
  },
  "bed-200": {
    width: 200,
    depth: 200,
    label: "Bed",
    Icon: BedDouble,
    fill: "#a9d6c7",
    border: "#4f9f89",
  },
  nightstand: {
    width: 55,
    depth: 45,
    label: "Nightstand",
    Icon: Lamp,
    fill: "#f59b7d",
    border: "#d76240",
  },
  dresser: {
    width: 140,
    depth: 45,
    label: "Dresser",
    Icon: Archive,
    fill: "#9ec8e7",
    border: "#4e91c3",
  },
  "storage-unit": {
    width: 90,
    depth: 45,
    label: "Storage unit",
    Icon: Archive,
    fill: "#9ec8e7",
    border: "#4e91c3",
  },
  door: {
    width: 90,
    depth: 18,
    label: "Door",
    Icon: DoorClosed,
    fill: "#f9faf7",
    border: "#17463d",
    kind: "opening",
  },
  window: {
    width: 130,
    depth: 14,
    label: "Window",
    Icon: Grid3X3,
    fill: "#dff4fb",
    border: "#4388b8",
    kind: "opening",
  },
};

const CATALOG = ["bed-90", "bed-120", "bed-140", "bed", "bed-160", "bed-200", "wardrobe-80", "wardrobe-120", "wardrobe-160", "wardrobe-200", "wardrobe", "dresser", "storage-unit", "nightstand"];
const OPENING_CATALOG = ["door", "window"];

const ROOM_PRESETS = [
  { id: "compact", label: "Compact", width: 320, depth: 360 },
  { id: "standard", label: "Standard", width: 440, depth: 482 },
  { id: "spacious", label: "Spacious", width: 560, depth: 620 },
];

const INITIAL_ITEMS = [
  { id: "bed-1", productId: "bed", x: 130, y: 110, rotation: 0 },
  { id: "door-1", productId: "door", x: 46, y: 464, rotation: 0, wall: "bottom" },
  { id: "window-1", productId: "window", x: 150, y: 0, rotation: 180, wall: "top" },
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const getDims = (item) => {
  const spec = ITEM_SPECS[item.productId];
  return (item.rotation || 0) % 180 === 0
    ? { width: spec.width, depth: spec.depth }
    : { width: spec.depth, depth: spec.width };
};

const isInsideRoom = (item, room) => {
  const dims = getDims(item);
  return (
    item.x >= 0 &&
    item.y >= 0 &&
    item.x + dims.width <= room.width &&
    item.y + dims.depth <= room.depth
  );
};

const itemsOverlap = (first, second) => {
  const firstDims = getDims(first);
  const secondDims = getDims(second);
  // Sharing an edge is allowed; only intersecting footprints count as overlap.
  return (
    first.x < second.x + secondDims.width &&
    first.x + firstDims.width > second.x &&
    first.y < second.y + secondDims.depth &&
    first.y + firstDims.depth > second.y
  );
};

const doesPlanFit = (items, room) => items.every((item, index) =>
  isInsideRoom(item, room) &&
  !items.slice(index + 1).some((other) => itemsOverlap(item, other))
);

const WALL_ROTATIONS = { top: 180, right: 270, bottom: 0, left: 90 };

const placeOpeningOnWall = (item, room, wall, centerX, centerY) => {
  const rotation = WALL_ROTATIONS[wall];
  const dims = getDims({ ...item, rotation });
  const maxX = Math.max(0, room.width - dims.width);
  const maxY = Math.max(0, room.depth - dims.depth);
  return {
    ...item,
    wall,
    rotation,
    x: wall === "left" ? 0 : wall === "right" ? maxX : clamp(centerX - dims.width / 2, 0, maxX),
    y: wall === "top" ? 0 : wall === "bottom" ? maxY : clamp(centerY - dims.depth / 2, 0, maxY),
  };
};

const snapOpeningToWall = (item, room, centerX, centerY) => {
  const distances = {
    top: Math.abs(centerY),
    right: Math.abs(room.width - centerX),
    bottom: Math.abs(room.depth - centerY),
    left: Math.abs(centerX),
  };
  // Keep the current wall on ties, so corners do not flicker while dragging.
  const wall = Object.keys(WALL_ROTATIONS).reduce(
    (nearest, candidate) => distances[candidate] < distances[nearest] ? candidate : nearest,
    item.wall || "top"
  );
  return placeOpeningOnWall(item, room, wall, centerX, centerY);
};

const fitItemToRoom = (item, room) => {
  const dims = getDims(item);
  if (ITEM_SPECS[item.productId].kind === "opening") {
    const centerX = item.x + dims.width / 2;
    const centerY = item.y + dims.depth / 2;
    return item.wall
      ? placeOpeningOnWall(item, room, item.wall, centerX, centerY)
      : snapOpeningToWall(item, room, centerX, centerY);
  }
  return {
    ...item,
    x: clamp(item.x, 0, Math.max(0, room.width - dims.width)),
    y: clamp(item.y, 0, Math.max(0, room.depth - dims.depth)),
  };
};

const canPlaceItem = (item, items, room) =>
  isInsideRoom(item, room) &&
  items.every((other) => other.id === item.id || !itemsOverlap(item, other));

const findFreePosition = (item, items, room) => {
  const preferred = fitItemToRoom(item, room);
  if (canPlaceItem(preferred, items, room)) return preferred;

  const walls = ITEM_SPECS[item.productId].kind === "opening"
    ? [preferred.wall, ...Object.keys(WALL_ROTATIONS).filter((wall) => wall !== preferred.wall)]
    : [null];
  const candidates = [];
  for (const wall of walls) {
    const oriented = wall ? { ...preferred, rotation: WALL_ROTATIONS[wall] } : preferred;
    const dims = getDims(oriented);
    // Room and item edges find available gaps without rounding positions to a grid.
    const xs = new Set([preferred.x, 0, room.width - dims.width]);
    const ys = new Set([preferred.y, 0, room.depth - dims.depth]);
    for (const other of items) {
      const otherDims = getDims(other);
      xs.add(other.x - dims.width);
      xs.add(other.x + otherDims.width);
      ys.add(other.y - dims.depth);
      ys.add(other.y + otherDims.depth);
    }
    const positionsX = wall === "left" || wall === "right" ? [0] : xs;
    const positionsY = wall === "top" || wall === "bottom" ? [0] : ys;
    for (const x of positionsX) {
      for (const y of positionsY) {
        const candidate = wall
          ? placeOpeningOnWall(oriented, room, wall, x + dims.width / 2, y + dims.depth / 2)
          : { ...oriented, x, y };
        if (canPlaceItem(candidate, items, room)) candidates.push(candidate);
      }
    }
  }
  candidates.sort((first, second) =>
    (Math.abs(first.x - preferred.x) + Math.abs(first.y - preferred.y)) -
    (Math.abs(second.x - preferred.x) + Math.abs(second.y - preferred.y))
  );
  return candidates[0] || null;
};

const fitPlanToRoom = (items, room) => {
  const fitted = items.map((item) => fitItemToRoom(item, room));
  return doesPlanFit(fitted, room) ? fitted : null;
};

export default function BedroomShape() {
  const [room, setRoom] = useState({ width: 440, depth: 482 });
  const [dimensionInputs, setDimensionInputs] = useState({ width: "440", depth: "482" });
  const [items, setItems] = useState(() => INITIAL_ITEMS.map((item) => ({ ...item })));
  const [selectedId, setSelectedId] = useState("bed-1");
  const [draggingId, setDraggingId] = useState(null);
  const [placementNotice, setPlacementNotice] = useState("");
  const [stageSize, setStageSize] = useState({ width: 900, height: 620 });

  const roomRef = useRef(null);
  const stageRef = useRef(null);
  const dragState = useRef(null);
  const nextId = useRef(2);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    const updateStageSize = () => {
      const bounds = stage.getBoundingClientRect();
      setStageSize({ width: bounds.width, height: bounds.height });
    };

    updateStageSize();
    const observer = new ResizeObserver(updateStageSize);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  const scale = useMemo(() => {
    const usableWidth = Math.max(160, stageSize.width - 104);
    const usableHeight = Math.max(180, stageSize.height - 96);
    return Math.max(
      0.1,
      Math.min(usableWidth / Math.max(room.width, 1), usableHeight / Math.max(room.depth, 1), 1.35)
    );
  }, [room, stageSize]);

  const selectedItem = items.find((item) => item.id === selectedId) || null;
  const allFit = doesPlanFit(items, room);
  const furnitureCount = items.filter((item) => ITEM_SPECS[item.productId].kind !== "opening").length;
  const openingCount = items.length - furnitureCount;
  const roomArea = ((room.width * room.depth) / 10000).toFixed(1);
  const activePreset = ROOM_PRESETS.find(
    (preset) => preset.width === room.width && preset.depth === room.depth
  )?.id;

  const resizeRoom = (nextRoom) => {
    const fitted = fitPlanToRoom(items, nextRoom);
    if (!fitted) {
      setPlacementNotice("This room size would overlap items. Move or remove items before making the room smaller.");
      return false;
    }
    setRoom(nextRoom);
    setItems(fitted);
    setPlacementNotice("");
    return true;
  };

  const setRoomPreset = (preset) => {
    const nextRoom = { width: preset.width, depth: preset.depth };
    if (!resizeRoom(nextRoom)) return;
    setDimensionInputs({ width: String(nextRoom.width), depth: String(nextRoom.depth) });
  };

  const changeDimension = (key, value) => {
    setDimensionInputs((current) => ({ ...current, [key]: value }));
    const dimension = Number(value);
    if (!Number.isFinite(dimension) || dimension < 240 || dimension > 900) return;
    const nextRoom = { ...room, [key]: dimension };
    resizeRoom(nextRoom);
  };

  const normalizeDimension = (key) => {
    const value = Number(dimensionInputs[key]);
    const nextRoom = {
      ...room,
      [key]: clamp(Math.round((Number.isFinite(value) ? value : room[key]) / 10) * 10, 240, 900),
    };
    const accepted = resizeRoom(nextRoom);
    setDimensionInputs((current) => ({ ...current, [key]: String(accepted ? nextRoom[key] : room[key]) }));
  };

  const addItem = (productId) => {
    const spec = ITEM_SPECS[productId];
    const id = `${productId}-${nextId.current++}`;

    const placed = findFreePosition({
      id,
      productId,
      x: (room.width - spec.width) / 2,
      y: (room.depth - spec.depth) / 2,
      rotation: 0,
    }, items, room);
    if (!placed) {
      setPlacementNotice(`No free space for this ${spec.label.toLowerCase()}. Move or remove an item first.`);
      return;
    }
    setItems([...items, placed]);
    setSelectedId(id);
    setPlacementNotice("");
  };

  const rotateItem = (item) => {
    if (ITEM_SPECS[item.productId].kind === "opening") return;
    const rotated = fitItemToRoom({ ...item, rotation: (item.rotation + 90) % 360 }, room);
    if (!canPlaceItem(rotated, items, room)) {
      setPlacementNotice("Not enough space to rotate this item. Move it to a clear area first.");
      return;
    }
    setItems(items.map((candidate) => candidate.id === item.id ? rotated : candidate));
    setPlacementNotice("");
  };

  const duplicateItem = (item) => {
    const id = `${item.productId}-${nextId.current++}`;
    const duplicate = findFreePosition({
      ...item,
      id,
      x: item.x + 24,
      y: item.y + 24,
    }, items, room);
    if (!duplicate) {
      setPlacementNotice("No free space for a duplicate. Move or remove an item first.");
      return;
    }
    setItems([...items, duplicate]);
    setSelectedId(id);
    setPlacementNotice("");
  };

  const removeItem = (id) => {
    setPlacementNotice("");
    setItems((current) => current.filter((item) => item.id !== id));
    setSelectedId((current) => (current === id ? null : current));
  };

  const resetPlan = () => {
    setPlacementNotice("");
    setRoom({ width: 440, depth: 482 });
    setDimensionInputs({ width: "440", depth: "482" });
    setItems(INITIAL_ITEMS.map((item) => ({ ...item })));
    setSelectedId("bed-1");
    nextId.current = 2;
  };

  const startDragging = (event, item) => {
    if (!roomRef.current || event.button !== 0) return;
    setPlacementNotice("");

    const roomBounds = roomRef.current.getBoundingClientRect();
    const pointerX = (event.clientX - roomBounds.left) / scale;
    const pointerY = (event.clientY - roomBounds.top) / scale;
    const dims = getDims(item);

    dragState.current = {
      id: item.id,
      offsetX: pointerX - item.x,
      offsetY: pointerY - item.y,
      centerOffsetX: pointerX - item.x - dims.width / 2,
      centerOffsetY: pointerY - item.y - dims.depth / 2,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
    setSelectedId(item.id);
    setDraggingId(item.id);
  };

  const moveItem = (event, item) => {
    if (!roomRef.current || dragState.current?.id !== item.id) return;

    const roomBounds = roomRef.current.getBoundingClientRect();
    const dims = getDims(item);
    const pointerX = (event.clientX - roomBounds.left) / scale;
    const pointerY = (event.clientY - roomBounds.top) / scale;
    const nextX = pointerX - dragState.current.offsetX;
    const nextY = pointerY - dragState.current.offsetY;
    const centerX = pointerX - dragState.current.centerOffsetX;
    const centerY = pointerY - dragState.current.centerOffsetY;

    const moved = ITEM_SPECS[item.productId].kind === "opening"
      ? snapOpeningToWall(item, room, centerX, centerY)
      : {
          ...item,
          x: clamp(nextX, 0, Math.max(0, room.width - dims.width)),
          y: clamp(nextY, 0, Math.max(0, room.depth - dims.depth)),
        };
    if (!canPlaceItem(moved, items, room)) {
      setPlacementNotice("Items cannot overlap. Drag to a clear space.");
      return;
    }
    setItems(items.map((candidate) => candidate.id === item.id ? moved : candidate));
    setPlacementNotice("");
  };

  const stopDragging = (event) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragState.current = null;
    setDraggingId(null);
  };

  return (
    <main className="bedroom-shape-page">
      <div className="customizer-shell">
        <header className="customizer-header">
          <div className="customizer-heading-copy">
            <Link to="/bedrooms" className="customizer-back-link">
              <ArrowLeft size={17} aria-hidden="true" />
              Bedrooms
            </Link>
            <div className="customizer-kicker">
              <Sparkles size={16} aria-hidden="true" />
              Bedroom designer
            </div>
            <h1>Make the room yours.</h1>
            <p>A clear plan for a bedroom that feels balanced, comfortable, and unmistakably personal.</p>
          </div>

          <div className="room-overview" aria-label="Current room summary">
            <span>Current room</span>
            <strong>{(room.width / 100).toFixed(1)} x {(room.depth / 100).toFixed(1)} m</strong>
            <small>{roomArea} m² total area</small>
          </div>
        </header>

        <div className="customizer-layout">
          <aside className="customizer-panel" aria-label="Bedroom controls">
            <section className="customizer-section">
              <div className="section-heading">
                <span className="section-icon"><Ruler size={18} aria-hidden="true" /></span>
                <div>
                  <span>Step 1</span>
                  <h2>Room size</h2>
                </div>
              </div>

              <div className="room-presets" aria-label="Room size presets">
                {ROOM_PRESETS.map((preset) => (
                  <button
                    type="button"
                    key={preset.id}
                    className={activePreset === preset.id ? "is-active" : ""}
                    aria-pressed={activePreset === preset.id}
                    onClick={() => setRoomPreset(preset)}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              <div className="dimension-fields">
                <label>
                  <span>Width</span>
                  <span className="dimension-input">
                    <input
                      type="number"
                      min="240"
                      max="900"
                      step="10"
                      value={dimensionInputs.width}
                      onChange={(event) => changeDimension("width", event.target.value)}
                      onBlur={() => normalizeDimension("width")}
                    />
                    <small>cm</small>
                  </span>
                </label>
                <label>
                  <span>Depth</span>
                  <span className="dimension-input">
                    <input
                      type="number"
                      min="240"
                      max="900"
                      step="10"
                      value={dimensionInputs.depth}
                      onChange={(event) => changeDimension("depth", event.target.value)}
                      onBlur={() => normalizeDimension("depth")}
                    />
                    <small>cm</small>
                  </span>
                </label>
              </div>
            </section>

            <section className="customizer-section">
              <div className="section-heading">
                <span className="section-icon section-icon-coral"><BedDouble size={18} aria-hidden="true" /></span>
                <div>
                  <span>Step 2</span>
                  <h2>Furniture</h2>
                </div>
              </div>

              <div className="furniture-grid">
                {CATALOG.map((productId) => {
                  const spec = ITEM_SPECS[productId];
                  const FurnitureIcon = spec.Icon;
                  return (
                    <button
                      type="button"
                      className="furniture-option"
                      key={productId}
                      onClick={() => addItem(productId)}
                    >
                      <span className="furniture-type-icon" style={{ backgroundColor: spec.fill, borderColor: spec.border }}>
                        <FurnitureIcon size={22} aria-hidden="true" />
                      </span>
                      <span className="furniture-copy">
                        <strong>{spec.label}</strong>
                        <small>{spec.width} × {spec.depth} cm</small>
                      </span>
                      <span className="furniture-add" aria-hidden="true"><Plus size={16} /></span>
                    </button>
                  );
                })}
              </div>
            </section>

              <section className="customizer-section customizer-section-last">
                <div className="section-heading">
                  <span className="section-icon section-icon-blue"><DoorClosed size={18} aria-hidden="true" /></span>
                  <div>
                    <span>Step 3</span>
                    <h2>Door & window</h2>
                  </div>
                </div>

                <p className="opening-hint">Drag doors and windows along the walls. They turn automatically at each wall.</p>
                <div className="opening-grid">
                  {OPENING_CATALOG.map((productId) => {
                    const spec = ITEM_SPECS[productId];
                    const OpeningIcon = spec.Icon;
                    return (
                      <button
                        type="button"
                        className="opening-option"
                        key={productId}
                        onClick={() => addItem(productId)}
                      >
                        <span className={`opening-preview opening-preview-${productId}`}>
                          <OpeningIcon size={18} aria-hidden="true" />
                        </span>
                        <span>
                          <strong>{spec.label}</strong>
                          
                        </span>
                        <Plus size={15} aria-hidden="true" />
                      </button>
                    );
                  })}
                </div>
              </section>

          </aside>

          <section className="planner-panel" aria-label="Bedroom plan">
            <div className="planner-toolbar">
              <div className="planner-title">
                <span className="planner-title-icon"><Grid3X3 size={19} aria-hidden="true" /></span>
                <div>
                  <h2>Room plan</h2>
                  <p>{furnitureCount} {furnitureCount === 1 ? "piece" : "pieces"}, {openingCount} openings</p>
                </div>
              </div>

              <div className="planner-actions">
                {selectedItem && (
                  <>
                    <span className="selected-item-name">{ITEM_SPECS[selectedItem.productId].label}</span>
                    {ITEM_SPECS[selectedItem.productId].kind !== "opening" && <button type="button" title="Rotate selected item" onClick={() => rotateItem(selectedItem)}>
                      <RotateCw size={17} aria-hidden="true" />
                      <span>Rotate</span>
                    </button>}
                    <button type="button" title="Duplicate selected item" onClick={() => duplicateItem(selectedItem)}>
                      <Copy size={17} aria-hidden="true" />
                      <span>Duplicate</span>
                    </button>
                    <button
                      type="button"
                      className="danger-action"
                      title="Remove selected item"
                      onClick={() => removeItem(selectedItem.id)}
                    >
                      <Trash2 size={17} aria-hidden="true" />
                      <span>Remove</span>
                    </button>
                  </>
                )}
                <button type="button" className="reset-action" title="Reset room plan" onClick={resetPlan}>
                  <Undo2 size={17} aria-hidden="true" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            <div className="room-stage" ref={stageRef}>
              <div className="dimension-line dimension-line-top">
                <span>{room.width}</span><small>cm</small>
              </div>
              <div className="dimension-line dimension-line-left">
                <span>{room.depth}</span><small>cm</small>
              </div>

              <div
                className="room-plan"
                ref={roomRef}
                style={{
                  width: room.width * scale,
                  height: room.depth * scale,
                }}
                onPointerDown={(event) => {
                  if (event.target === event.currentTarget) setSelectedId(null);
                }}
              >
                {items.map((item) => {
                  const spec = ITEM_SPECS[item.productId];
                  const dims = getDims(item);
                  const FurnitureIcon = spec.Icon;
                  const isSelected = selectedId === item.id;
                  const isOpening = spec.kind === "opening";
                  const isCompact = spec.width * scale < 92 || spec.depth * scale < 62;

                  return (
                    <button
                      type="button"
                      key={item.id}
                      className={`placed-item ${isOpening ? `placed-opening placed-${item.productId}` : ""} ${isSelected ? "is-selected" : ""} ${draggingId === item.id ? "is-dragging" : ""}`}
                      style={{
                        left: (item.x + (dims.width - spec.width) / 2) * scale,
                        top: (item.y + (dims.depth - spec.depth) / 2) * scale,
                        width: spec.width * scale,
                        height: spec.depth * scale,
                        transform: `rotate(${item.rotation || 0}deg)`,
                        backgroundColor: spec.fill,
                        borderColor: spec.border,
                      }}
                      aria-pressed={isSelected}
                      aria-label={`${spec.label}, ${spec.width} by ${spec.depth} centimeters`}
                      title={`${spec.label}, ${spec.width} × ${spec.depth} cm`}
                      onPointerDown={(event) => startDragging(event, item)}
                      onPointerMove={(event) => moveItem(event, item)}
                      onPointerUp={stopDragging}
                      onPointerCancel={stopDragging}
                    >
                      {isOpening ? (
                        <span className="placed-opening-content" aria-hidden="true">
                          {item.productId === "door" ? (
                            <>
                              <span className="door-slab" />
                              <span className="door-swing" />
                            </>
                          ) : (
                            <>
                              <span className="window-line" />
                              <span className="window-line" />
                            </>
                          )}
                        </span>
                      ) : (
                        <span
                          className={`placed-item-content ${isCompact ? "is-compact" : ""}`}
                          style={{ transform: `rotate(-${item.rotation || 0}deg)` }}
                        >
                          <FurnitureIcon size={isCompact ? 15 : 18} aria-hidden="true" />
                          {!isCompact && <span>{spec.label}</span>}
                        </span>
                      )}
                    </button>
                  );
                })}

                {items.length === 0 && (
                  <div className="empty-room-message">
                    <BedDouble size={30} aria-hidden="true" />
                    <strong>Your room is ready</strong>
                  </div>
                )}
              </div>
            </div>

            {placementNotice && <p className="planner-notice" role="status">{placementNotice}</p>}

            <footer className="planner-footer">
              <div className={`planner-status ${allFit ? "is-ready" : "is-warning"}`} aria-live="polite">
                {allFit ? <CheckCircle2 size={18} aria-hidden="true" /> : <AlertTriangle size={18} aria-hidden="true" />}
                <span>{allFit ? "Everything fits inside the room" : "The items inside do not fit"}</span>
              </div>

              <div className="planner-metrics">
                <span><Move size={16} aria-hidden="true" /> Top view</span>
                <span><strong>{roomArea}</strong> m²</span>
                <span><strong>{furnitureCount}</strong> items</span>
                <span><strong>{openingCount}</strong> openings</span>
              </div>
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
