var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
}) : x2)(function(x2) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x2 + '" is not supported');
});

// dist/server/index.js
var e = Object.create;
var t = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var r = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf;
var a = Object.prototype.hasOwnProperty;
var o = /* @__PURE__ */ __name((e2, t2) => () => (t2 || (e2((t2 = { exports: {} }).exports, t2), e2 = null), t2.exports), "o");
var s = /* @__PURE__ */ __name((e2, i2, o2, s2) => {
  if (i2 && typeof i2 == "object" || typeof i2 == "function") for (var c2 = r(i2), l2 = 0, u2 = c2.length, d2; l2 < u2; l2++) d2 = c2[l2], !a.call(e2, d2) && d2 !== o2 && t(e2, d2, {
    get: ((e3) => i2[e3]).bind(null, d2),
    enumerable: !(s2 = n(i2, d2)) || s2.enumerable
  });
  return e2;
}, "s");
var c = /* @__PURE__ */ __name((n2, r2, o2) => (o2 = n2 == null ? {} : e(i(n2)), s(r2 || !n2 || !n2.__esModule || !a.call(n2, "default") ? t(o2, "default", {
  value: n2,
  enumerable: true
}) : o2, n2)), "c");
var l = /* @__PURE__ */ ((e2) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(e2, { get: /* @__PURE__ */ __name((e3, t2) => (typeof __require < "u" ? __require : e3)[t2], "get") }) : e2)(function(e2) {
  if (typeof __require < "u") return __require.apply(this, arguments);
  throw Error('Calling `require` for "' + e2 + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
var u = '<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>hurfa-website-client</title>\n    <script type="module" crossorigin src="/assets/index-BDxhCgwy.js"><\/script>\n    <link rel="stylesheet" crossorigin href="/assets/index-DIs_yQYQ.css">\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>\n';
var d = [
  {
    id: "wardrobe-oak",
    name: "Wardrobe \u2014 Oak",
    category: "Bedrooms",
    price: "JOD 420",
    desc: "A full-height wardrobe in solid oak with soft-close doors and adjustable internal shelving.",
    images: ["https://ik.imagekit.io/6dghafkgmq/hurfa_catalog/Tayf_4iPZv6iGf.png?updatedAt=1782466205843", "https://ik.imagekit.io/6dghafkgmq/hurfa_catalog/Oud-Collection_u9dsnBlwn.jpg?updatedAt=1787138978278"]
  },
  {
    id: "bed-frame-wesal",
    name: "Bed Frame \u2014 Wesal",
    category: "Bedrooms",
    price: "JOD 310",
    desc: "Upholstered headboard with a low-profile walnut frame, built for a queen or king mattress.",
    images: ["https://ik.imagekit.io/6dghafkgmq/hurfa_catalog/Wesal-Collection_n299cVlM5.jpg?updatedAt=1787138960280", "https://ik.imagekit.io/6dghafkgmq/Kitchens/Kit3V4.jpg?updatedAt=1779196664060"]
  },
  {
    id: "nightstand-pair",
    name: "Nightstand \u2014 Pair",
    category: "Bedrooms",
    price: "JOD 145",
    desc: "A matching pair of compact nightstands with a single soft-close drawer and open lower shelf.",
    images: ["https://ik.imagekit.io/6dghafkgmq/hurfa_catalog/Oud-Collection_u9dsnBlwn.jpg?updatedAt=1787138978278", "https://ik.imagekit.io/6dghafkgmq/hurfa_catalog/Tayf_4iPZv6iGf.png?updatedAt=1782466205843"]
  },
  {
    id: "dresser-six-drawer",
    name: "Dresser \u2014 Six Drawer",
    category: "Bedrooms",
    price: "JOD 265",
    desc: "A six-drawer dresser with brushed brass hardware, finished to match the rest of the room.",
    images: ["https://ik.imagekit.io/6dghafkgmq/Kitchens/Kit3V4.jpg?updatedAt=1779196664060", "https://ik.imagekit.io/6dghafkgmq/hurfa_catalog/Wesal-Collection_n299cVlM5.jpg?updatedAt=1787138960280"]
  }
];
var f = class extends Error {
  static {
    __name(this, "f");
  }
  constructor(e2, t2) {
    super(t2), this.status = e2;
  }
};
function p(e2, t2, n2 = 400) {
  if (!e2) throw new f(n2, t2);
}
__name(p, "p");
function m(e2, t2, n2 = 100) {
  return p(typeof e2 == "string" && e2.trim().length > 0 && e2.length <= n2, `${t2} is required (up to ${n2} characters).`), e2.trim();
}
__name(m, "m");
function h(e2, t2, n2, r2) {
  return p(typeof e2 == "number" && Number.isFinite(e2) && e2 >= n2 && e2 <= r2, `${t2} must be between ${n2} and ${r2}.`), e2;
}
__name(h, "h");
function g(e2) {
  p(e2 && typeof e2 == "object", "Invalid sample."), p(["wood", "fabric"].includes(e2.kind), "Choose wood or fabric."), p(/^#[a-f\d]{6}$/i.test(e2.color), "Choose a valid color."), p(typeof e2.active == "boolean", "Active must be true or false.");
  let t2 = {};
  for (let n2 of [
    "baseColor",
    "normal",
    "roughness"
  ]) {
    let r2 = e2.maps?.[n2] ?? null;
    p(r2 === null || typeof r2 == "string" && /^[a-f\d-]{36}$/.test(r2), `Invalid ${n2} image.`), t2[n2] = r2;
  }
  return p(t2.baseColor, "Upload a base color texture first."), {
    name: m(e2.name, "Sample name", 80),
    kind: e2.kind,
    description: typeof e2.description == "string" ? e2.description.trim().slice(0, 240) : "",
    color: e2.color,
    active: e2.active,
    maps: t2,
    roughness: h(e2.roughness, "Roughness", 0, 1),
    metalness: h(e2.metalness, "Metalness", 0, 1),
    repeatX: h(e2.repeatX, "Horizontal repeat", 0.1, 50),
    repeatY: h(e2.repeatY, "Vertical repeat", 0.1, 50),
    rotation: h(e2.rotation, "Rotation", -180, 180)
  };
}
__name(g, "g");
function _(e2, t2, n2) {
  p(e2 && typeof e2 == "object", "Invalid bedroom configuration.");
  let r2 = new Map(t2.materials.map((e3) => [e3.name, e3])), i2 = {}, a2 = {}, o2 = {}, s2 = /* @__PURE__ */ new Set();
  for (let t3 of ["wood", "fabric"]) {
    let c2 = e2.bindings?.[t3];
    p(Array.isArray(c2) && c2.length <= 64 && new Set(c2).size === c2.length, `Invalid ${t3} material mapping.`), i2[t3] = c2.map((e3) => (p(r2.has(e3), `Material ${e3} is not in this model.`), p(r2.get(e3).hasUV, `${e3} needs UV mapping before applying samples.`), p(!r2.get(e3).unlit, `${e3} uses an unlit material. Export it as a standard PBR material to customize it.`), p(!s2.has(e3), `${e3} cannot be both wood and fabric.`), s2.add(e3), e3));
    let l2 = e2.sampleIds?.[t3];
    p(Array.isArray(l2) && l2.length <= 200 && new Set(l2).size === l2.length, `Invalid ${t3} samples.`), a2[t3] = l2.map((e3) => (p(n2.some((n3) => n3.id === e3 && n3.kind === t3 && n3.active), `Choose an active ${t3} sample.`), e3)), p(c2.length > 0 || l2.length === 0, `Map a ${t3} surface before assigning ${t3} samples.`), p(c2.length === 0 || l2.length > 0, `Choose at least one ${t3} sample for the mapped surfaces.`), o2[t3] = e2.defaults?.[t3] ?? null, p(l2.length ? l2.includes(o2[t3]) : o2[t3] === null, `Choose a valid default ${t3} sample.`);
  }
  return p(s2.size, "Map at least one wood or fabric surface."), {
    bindings: i2,
    sampleIds: a2,
    defaults: o2
  };
}
__name(_, "_");
function v(e2) {
  let t2 = new DataView(e2.buffer, e2.byteOffset, e2.byteLength), n2, r2, i2;
  if (e2.length > 24 && t2.getUint32(0) === 2303741511 && t2.getUint32(4) === 218765834 && t2.getUint32(12) === 1229472850) {
    n2 = "image/png", r2 = t2.getUint32(16), i2 = t2.getUint32(20);
    let a2 = 8, o2 = false, s2 = false;
    for (; a2 + 12 <= e2.length; ) {
      let n3 = t2.getUint32(a2), r3 = t2.getUint32(a2 + 4);
      p(n3 <= e2.length - a2 - 12, "The PNG texture is incomplete.");
      let i3 = 4294967295;
      for (let t3 = a2 + 4; t3 < a2 + 8 + n3; t3++) {
        i3 ^= e2[t3];
        for (let e3 = 0; e3 < 8; e3++) i3 = i3 >>> 1 ^ 3988292384 & -(i3 & 1);
      }
      if (p((i3 ^ 4294967295) >>> 0 === t2.getUint32(a2 + 8 + n3), "The PNG texture is corrupted."), r3 === 1229209940 && n3 > 0 && (o2 = true), r3 === 1229278788) {
        s2 = true, p(n3 === 0 && a2 + 12 === e2.length, "Invalid PNG ending.");
        break;
      }
      a2 += n3 + 12;
    }
    p(o2 && s2, "The PNG texture has no complete image data.");
  } else if (e2[0] === 255 && e2[1] === 216 && e2[2] === 255) {
    n2 = "image/jpeg";
    let a2 = 2;
    for (; a2 + 4 < e2.length && e2[a2++] === 255; ) {
      let n3 = e2[a2++];
      if (n3 === 218 || n3 === 217) break;
      let o2 = t2.getUint16(a2);
      if (o2 < 2 || a2 + o2 > e2.length) break;
      if ([
        192,
        193,
        194
      ].includes(n3) && o2 >= 8) {
        i2 = t2.getUint16(a2 + 3), r2 = t2.getUint16(a2 + 5);
        break;
      }
      a2 += o2;
    }
  }
  if (p(n2 && r2 && i2, "Use a valid PNG or JPEG texture."), n2 === "image/jpeg") {
    p(e2[e2.length - 2] === 255 && e2[e2.length - 1] === 217, "The JPEG texture is incomplete.");
    let t3 = false;
    for (let n3 = 2; n3 + 12 < e2.length; n3++) if (e2[n3] === 255 && e2[n3 + 1] === 218) {
      t3 = true;
      break;
    }
    p(t3, "The JPEG texture has no image data.");
  }
  return p(r2 <= 4096 && i2 <= 4096 && r2 * i2 <= 16777216, "Texture dimensions must be at most 4096 \xD7 4096."), {
    mime: n2,
    width: r2,
    height: i2
  };
}
__name(v, "v");
function y(e2) {
  p(e2.length >= 28, "The GLB file is incomplete.");
  let t2 = new DataView(e2.buffer, e2.byteOffset, e2.byteLength);
  p(t2.getUint32(0, true) === 1179937895 && t2.getUint32(4, true) === 2 && t2.getUint32(8, true) === e2.length, "Upload a valid GLB version 2 file.");
  let n2 = t2.getUint32(12, true);
  p(t2.getUint32(16, true) === 1313821514 && n2 <= 2097152 && n2 % 4 == 0 && 20 + n2 <= e2.length, "Invalid GLB JSON chunk.");
  let r2;
  try {
    r2 = JSON.parse(new TextDecoder().decode(e2.subarray(20, 20 + n2)));
  } catch {
    throw new f(400, "The model contains invalid JSON.");
  }
  p(r2 && typeof r2 == "object" && !Array.isArray(r2), "The model needs a glTF document.");
  for (let e3 of [
    "buffers",
    "bufferViews",
    "images",
    "materials",
    "meshes",
    "nodes",
    "accessors"
  ]) p(r2[e3] === void 0 || Array.isArray(r2[e3]) && r2[e3].every((e4) => e4 && typeof e4 == "object" && !Array.isArray(e4)), `Invalid model ${e3}.`);
  for (let e3 of ["extensionsUsed", "extensionsRequired"]) p(r2[e3] === void 0 || Array.isArray(r2[e3]) && r2[e3].every((e4) => typeof e4 == "string"), "Invalid model extensions.");
  for (let e3 of r2.meshes || []) p(Array.isArray(e3.primitives) && e3.primitives.every((e4) => e4 && typeof e4 == "object" && !Array.isArray(e4)), "Invalid mesh primitives.");
  p(r2.asset?.version === "2.0", "Only glTF 2.0 models are supported.");
  let i2 = 20 + n2;
  p(i2 + 8 <= e2.length && t2.getUint32(i2 + 4, true) === 5130562 && i2 + 8 + t2.getUint32(i2, true) === e2.length, "The GLB needs one embedded binary buffer."), p(r2.buffers?.length === 1 && !r2.buffers[0].uri && r2.buffers[0].byteLength <= e2.length - i2 - 8, "Embed all buffers in the GLB."), p((r2.images || []).every((e3) => !e3.uri && Number.isInteger(e3.bufferView)), "Embed all images in the GLB; external files and data URLs are not supported.");
  let a2 = /* @__PURE__ */ new Set([
    "KHR_materials_unlit",
    "KHR_materials_clearcoat",
    "KHR_materials_sheen",
    "KHR_materials_ior",
    "KHR_materials_specular",
    "KHR_materials_transmission",
    "KHR_materials_volume",
    "KHR_materials_emissive_strength",
    "KHR_texture_transform",
    "KHR_mesh_quantization"
  ]);
  p((r2.extensionsUsed || []).every((e3) => a2.has(e3)), "Export an uncompressed GLB with standard PBR materials. Draco, Meshopt, KTX2 and custom extensions are not enabled in this upload pipeline yet."), p((r2.materials?.length || 0) <= 64 && (r2.nodes?.length || 0) <= 1e3 && (r2.meshes?.length || 0) <= 300, "This model is too complex. Limit it to 64 materials, 1,000 nodes and 300 meshes."), p((r2.accessors || []).reduce((e3, t3) => e3 + (t3.count || 0), 0) <= 8e6, "Reduce the model geometry before uploading.");
  let o2 = 0;
  for (let t3 of r2.images || []) {
    let n3 = r2.bufferViews?.[t3.bufferView];
    p(n3 && n3.buffer === 0 && n3.byteLength > 0 && (n3.byteOffset || 0) + n3.byteLength <= r2.buffers[0].byteLength, "Invalid embedded texture.");
    let a3 = i2 + 8 + (n3.byteOffset || 0), s3 = v(e2.subarray(a3, a3 + n3.byteLength));
    o2 += s3.width * s3.height;
  }
  p(o2 <= 33554432, "Reduce the embedded texture resolution (maximum 32 megapixels total).");
  let s2 = /* @__PURE__ */ new Set(), c2 = (r2.materials || []).map((e3, t3) => {
    let n3 = m(e3.name, "Each model material name", 100);
    p(n3 === e3.name, "Remove spaces from the start and end of material names."), p(!s2.has(n3), "Give each model material a unique name."), s2.add(n3);
    let i3 = (r2.meshes || []).flatMap((e4) => e4.primitives || []).filter((e4) => e4.material === t3);
    return {
      name: n3,
      hasUV: i3.length > 0 && i3.every((e4) => Number.isInteger(e4.attributes?.TEXCOORD_0)),
      unlit: !!e3.extensions?.KHR_materials_unlit
    };
  });
  return p(c2.length, "The model needs named materials."), { materials: c2 };
}
__name(y, "y");
var b = /* @__PURE__ */ c((/* @__PURE__ */ o(((e2) => {
  var t2 = globalThis;
  t2.scheduleImmediate = typeof setImmediate < "u" ? function(e3) {
    setImmediate(e3);
  } : function(e3) {
    setTimeout(e3, 0);
  }, l !== void 0 && (t2.require = l), e2 !== void 0 && (t2.exports = e2), typeof __dirname < "u" && (t2.__dirname = __dirname), typeof __filename < "u" && (t2.__filename = __filename), typeof Buffer < "u" && (t2.Buffer = Buffer), (function() {
    function e3(e4, t3) {
      for (var n3 = Object.keys(e4), r3 = 0; r3 < n3.length; r3++) {
        var i3 = n3[r3];
        t3[i3] = e4[i3];
      }
    }
    __name(e3, "e");
    function n2(e4, t3) {
      for (var n3 = Object.keys(e4), r3 = 0; r3 < n3.length; r3++) {
        var i3 = n3[r3];
        t3.hasOwnProperty(i3) || (t3[i3] = e4[i3]);
      }
    }
    __name(n2, "n");
    function r2(e4, t3) {
      Object.assign(t3, e4);
    }
    __name(r2, "r");
    var i2 = (function() {
      var e4 = /* @__PURE__ */ __name(function() {
      }, "e");
      e4.prototype = { p: {} };
      var t3 = new e4();
      if (!(t3.__proto__ && t3.__proto__.p === e4.prototype.p)) return false;
      try {
        if (typeof navigator < "u" && true && "Cloudflare-Workers".indexOf("Chrome/") >= 0) return true;
        if (typeof version == "function" && version.length == 0) {
          var n3 = version();
          if (/^\d+\.\d+\.\d+\.\d+$/.test(n3)) return true;
        }
      } catch {
      }
      return false;
    })();
    function a2(t3, n3) {
      if (t3.prototype.constructor = t3, t3.prototype["$i" + t3.name] = t3, n3 != null) {
        if (i2) {
          t3.prototype.__proto__ = n3.prototype;
          return;
        }
        var r3 = Object.create(n3.prototype);
        e3(t3.prototype, r3), t3.prototype = r3;
      }
    }
    __name(a2, "a");
    function o2(e4, t3) {
      for (var n3 = 0; n3 < t3.length; n3++) a2(t3[n3], e4);
    }
    __name(o2, "o");
    function s2(e4, t3) {
      r2(t3.prototype, e4.prototype), e4.prototype.constructor = e4;
    }
    __name(s2, "s");
    function c2(e4, t3) {
      n2(t3.prototype, e4.prototype), e4.prototype.constructor = e4;
    }
    __name(c2, "c");
    function l2(e4, t3, n3, r3) {
      var i3 = e4;
      e4[t3] = i3, e4[n3] = function() {
        e4[n3] = function() {
          E2.xP(t3);
        };
        var a3, o3 = r3;
        try {
          e4[t3] === i3 ? (a3 = e4[t3] = o3, a3 = e4[t3] = r3()) : a3 = e4[t3];
        } finally {
          a3 === o3 && (e4[t3] = null), e4[n3] = function() {
            return this[t3];
          };
        }
        return a3;
      };
    }
    __name(l2, "l");
    function u2(e4, t3, n3, r3) {
      var i3 = e4;
      e4[t3] = i3, e4[n3] = function() {
        return e4[t3] === i3 && (e4[t3] = r3()), e4[n3] = function() {
          return this[t3];
        }, e4[t3];
      };
    }
    __name(u2, "u");
    function d2(e4, t3, n3, r3) {
      var i3 = e4;
      e4[t3] = i3, e4[n3] = function() {
        if (e4[t3] === i3) {
          var a3 = r3();
          e4[t3] !== i3 && E2.nU(t3), e4[t3] = a3;
        }
        var o3 = e4[t3];
        return e4[n3] = function() {
          return o3;
        }, o3;
      };
    }
    __name(d2, "d");
    function f2(e4) {
      return e4.immutable$list = Array, e4.fixed$length = Array, e4;
    }
    __name(f2, "f");
    function p2(e4) {
      function t3() {
      }
      __name(t3, "t");
      return t3.prototype = e4, new t3(), e4;
    }
    __name(p2, "p");
    function m2(e4) {
      for (var t3 = 0; t3 < e4.length; ++t3) p2(e4[t3]);
    }
    __name(m2, "m");
    function h2(e4, t3) {
      var n3 = null;
      return e4 ? function(e5) {
        return n3 === null && (n3 = E2.nO(t3)), new n3(e5, this);
      } : function() {
        return n3 === null && (n3 = E2.nO(t3)), new n3(this, null);
      };
    }
    __name(h2, "h");
    function g2(e4) {
      var t3 = null;
      return function() {
        return t3 === null && (t3 = E2.nO(e4).prototype), t3;
      };
    }
    __name(g2, "g");
    var _2 = 0;
    function v2(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3) {
      return typeof s3 == "number" && (s3 += _2), {
        co: e4,
        iS: t3,
        iI: n3,
        rC: r3,
        dV: i3,
        cs: a3,
        fs: o3,
        fT: s3,
        aI: c3 || 0,
        nDA: l3
      };
    }
    __name(v2, "v");
    function y2(e4, t3, n3, r3, i3, a3, o3, s3) {
      e4[t3] = g2(v2(e4, true, false, n3, r3, i3, a3, o3, s3, false));
    }
    __name(y2, "y");
    function b2(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3) {
      n3 = !!n3;
      var u3 = v2(e4, false, n3, r3, i3, a3, o3, s3, c3, !!l3);
      e4[t3] = h2(n3, u3);
    }
    __name(b2, "b");
    function x2(t3) {
      var n3 = j2.interceptorsByTag;
      if (!n3) {
        j2.interceptorsByTag = t3;
        return;
      }
      e3(t3, n3);
    }
    __name(x2, "x");
    function S2(t3) {
      var n3 = j2.leafTags;
      if (!n3) {
        j2.leafTags = t3;
        return;
      }
      e3(t3, n3);
    }
    __name(S2, "S");
    function C2(e4) {
      var t3 = j2.types, n3 = t3.length;
      return t3.push.apply(t3, e4), n3;
    }
    __name(C2, "C");
    function w2(t3, n3) {
      return e3(n3, t3), t3;
    }
    __name(w2, "w");
    var T2 = (function() {
      var e4 = /* @__PURE__ */ __name(function(e5, t4, n3, r3, i3) {
        return function(a3, o3, s3, c3) {
          return b2(a3, o3, e5, t4, n3, r3, [s3], c3, i3, false);
        };
      }, "e"), t3 = /* @__PURE__ */ __name(function(e5, t4, n3, r3) {
        return function(i3, a3, o3, s3) {
          return y2(i3, a3, e5, t4, n3, [o3], s3, r3);
        };
      }, "t");
      return {
        inherit: a2,
        inheritMany: o2,
        mixin: s2,
        mixinHard: c2,
        installStaticTearOff: y2,
        installInstanceTearOff: b2,
        _instance_0u: e4(0, 0, null, ["$0"], 0),
        _instance_1u: e4(0, 1, null, ["$1"], 0),
        _instance_2u: e4(0, 2, null, ["$2"], 0),
        _instance_0i: e4(1, 0, null, ["$0"], 0),
        _instance_1i: e4(1, 1, null, ["$1"], 0),
        _instance_2i: e4(1, 2, null, ["$2"], 0),
        _static_0: t3(0, null, ["$0"], 0),
        _static_1: t3(1, null, ["$1"], 0),
        _static_2: t3(2, null, ["$2"], 0),
        makeConstList: f2,
        lazy: u2,
        lazyFinal: d2,
        lazyOld: l2,
        updateHolder: w2,
        convertToFastObject: p2,
        updateTypes: C2,
        setOrUpdateInterceptorsByTag: x2,
        setOrUpdateLeafTags: S2
      };
    })(), E2 = {
      ns: /* @__PURE__ */ __name(function() {
      }, "ns"),
      he(e4, t3, n3) {
        return t3.h("q<0>").b(e4) ? new E2.dZ(e4, t3.h("@<0>").I(n3).h("dZ<1,2>")) : new E2.c5(e4, t3.h("@<0>").I(n3).h("c5<1,2>"));
      },
      uG(e4) {
        return new E2.f1("Field '" + E2.b(e4) + "' has been assigned during initialization.");
      },
      bg(e4) {
        return new E2.fm(e4);
      },
      mW(e4) {
        var t3, n3 = e4 ^ 48;
        return n3 <= 9 ? n3 : (t3 = e4 | 32, 97 <= t3 && t3 <= 102 ? t3 - 87 : -1);
      },
      pW(e4, t3) {
        var n3 = E2.mW(O2.a.B(e4, t3)), r3 = E2.mW(O2.a.B(e4, t3 + 1));
        return n3 * 16 + r3 - (r3 & 256);
      },
      bU(e4, t3, n3) {
        if (e4 == null) throw E2.d(new E2.dI(t3, n3.h("dI<0>")));
        return e4;
      },
      dQ(e4, t3, n3, r3) {
        return E2.aW(t3, "start"), n3 != null && (E2.aW(n3, "end"), t3 > n3 && E2.Z(E2.Y(t3, 0, n3, "start", null))), new E2.dP(e4, t3, n3, r3.h("dP<0>"));
      },
      jQ(e4, t3, n3, r3) {
        return N2.O.b(e4) ? new E2.c9(e4, t3, n3.h("@<0>").I(r3).h("c9<1,2>")) : new E2.bd(e4, t3, n3.h("@<0>").I(r3).h("bd<1,2>"));
      },
      p0(e4, t3, n3) {
        var r3 = "count";
        return N2.O.b(e4) ? (E2.h8(t3, r3), E2.aW(t3, r3), new E2.cR(e4, t3, n3.h("cR<0>"))) : (E2.h8(t3, r3), E2.aW(t3, r3), new E2.bh(e4, t3, n3.h("bh<0>")));
      },
      nq() {
        return new E2.bJ("No element");
      },
      ui() {
        return new E2.bJ("Too few elements");
      },
      bM: /* @__PURE__ */ __name(function() {
      }, "bM"),
      dm: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.$ti = t3;
      }, "dm"),
      c5: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.$ti = t3;
      }, "c5"),
      dZ: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.$ti = t3;
      }, "dZ"),
      dU: /* @__PURE__ */ __name(function() {
      }, "dU"),
      b5: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.$ti = t3;
      }, "b5"),
      c6: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.$ti = t3;
      }, "c6"),
      hf: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "hf"),
      f1: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "f1"),
      fm: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "fm"),
      c8: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "c8"),
      nd: /* @__PURE__ */ __name(function() {
      }, "nd"),
      dI: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.$ti = t3;
      }, "dI"),
      q: /* @__PURE__ */ __name(function() {
      }, "q"),
      ah: /* @__PURE__ */ __name(function() {
      }, "ah"),
      dP: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.a = e4, i3.b = t3, i3.c = n3, i3.$ti = r3;
      }, "dP"),
      aa: /* @__PURE__ */ __name(function(e4, t3, n3) {
        var r3 = this;
        r3.a = e4, r3.b = t3, r3.c = 0, r3.d = null, r3.$ti = n3;
      }, "aa"),
      bd: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.$ti = n3;
      }, "bd"),
      c9: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.$ti = n3;
      }, "c9"),
      dD: /* @__PURE__ */ __name(function(e4, t3, n3) {
        var r3 = this;
        r3.a = null, r3.b = e4, r3.c = t3, r3.$ti = n3;
      }, "dD"),
      ab: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.$ti = n3;
      }, "ab"),
      lK: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.$ti = n3;
      }, "lK"),
      cF: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.$ti = n3;
      }, "cF"),
      bh: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.$ti = n3;
      }, "bh"),
      cR: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.$ti = n3;
      }, "cR"),
      dN: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.$ti = n3;
      }, "dN"),
      b7: /* @__PURE__ */ __name(function(e4) {
        this.$ti = e4;
      }, "b7"),
      dq: /* @__PURE__ */ __name(function(e4) {
        this.$ti = e4;
      }, "dq"),
      ds: /* @__PURE__ */ __name(function() {
      }, "ds"),
      fy: /* @__PURE__ */ __name(function() {
      }, "fy"),
      d4: /* @__PURE__ */ __name(function() {
      }, "d4"),
      d3: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "d3"),
      ep: /* @__PURE__ */ __name(function() {
      }, "ep"),
      u2() {
        throw E2.d(E2.ad("Cannot modify unmodifiable Map"));
      },
      ub(e4) {
        return typeof e4 == "number" ? O2.c1.gE(e4) : N2.fo.b(e4) ? e4.gE(e4) : N2.dd.b(e4) ? E2.d0(e4) : E2.fZ(e4);
      },
      uc(e4) {
        return new E2.hY(e4);
      },
      q2(e4) {
        return j2.mangledGlobalNames[e4] ?? "minified:" + e4;
      },
      pU(e4, t3) {
        var n3;
        return t3 != null && (n3 = t3.x, n3 != null) ? n3 : N2.aU.b(e4);
      },
      b(e4) {
        var t3;
        if (typeof e4 == "string") return e4;
        if (typeof e4 == "number") {
          if (e4 !== 0) return "" + e4;
        } else if (true === e4) return "true";
        else if (false === e4) return "false";
        else if (e4 == null) return "null";
        if (t3 = D2.as(e4), typeof t3 != "string") throw E2.d(E2.h7(e4, "object", "toString method returned 'null'"));
        return t3;
      },
      d0(e4) {
        var t3, n3 = A2.oR;
        return n3 ??= A2.oR = /* @__PURE__ */ Symbol("identityHashCode"), t3 = e4[n3], t3 ?? (t3 = Math.random() * 1073741823 | 0, e4[n3] = t3), t3;
      },
      oY(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3 = null;
        if (typeof e4 != "string" && E2.Z(E2.cL(e4)), n3 = /^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(e4), n3 == null) return c3;
        if (r3 = n3[3], t3 == null) return r3 == null ? n3[2] == null ? c3 : parseInt(e4, 16) : parseInt(e4, 10);
        if (t3 < 2 || t3 > 36) throw E2.d(E2.Y(t3, 2, 36, "radix", c3));
        if (t3 === 10 && r3 != null) return parseInt(e4, 10);
        if (t3 < 10 || r3 == null) {
          for (i3 = t3 <= 10 ? 47 + t3 : 86 + t3, a3 = n3[1], o3 = a3.length, s3 = 0; s3 < o3; ++s3) if ((O2.a.J(a3, s3) | 32) > i3) return c3;
        }
        return parseInt(e4, t3);
      },
      ka(e4) {
        return E2.uZ(e4);
      },
      uZ(e4) {
        var t3, n3, r3, i3;
        if (e4 instanceof E2.c) return E2.ar(E2.ak(e4), null);
        if (t3 = D2.bV(e4), t3 === O2.bW || t3 === O2.c3 || N2.ak.b(e4)) {
          if (n3 = O2.a9(e4), n3 !== "Object" && n3 !== "") return n3;
          if (r3 = e4.constructor, typeof r3 == "function" && (i3 = r3.name, typeof i3 == "string" && i3 !== "Object" && i3 !== "")) return i3;
        }
        return E2.ar(E2.ak(e4), null);
      },
      oQ(e4) {
        var t3, n3, r3, i3, a3 = e4.length;
        if (a3 <= 500) return String.fromCharCode.apply(null, e4);
        for (t3 = "", n3 = 0; n3 < a3; n3 = r3) r3 = n3 + 500, i3 = r3 < a3 ? r3 : a3, t3 += String.fromCharCode.apply(null, e4.slice(n3, i3));
        return t3;
      },
      v1(e4) {
        var t3, n3, r3, i3 = E2.a([], N2.Z);
        for (t3 = e4.length, n3 = 0; n3 < e4.length; e4.length === t3 || (0, E2.cN)(e4), ++n3) {
          if (r3 = e4[n3], !E2.aI(r3)) throw E2.d(E2.cL(r3));
          if (r3 <= 65535) i3.push(r3);
          else if (r3 <= 1114111) i3.push(55296 + (O2.c.ai(r3 - 65536, 10) & 1023)), i3.push(56320 + (r3 & 1023));
          else throw E2.d(E2.cL(r3));
        }
        return E2.oQ(i3);
      },
      v0(e4) {
        var t3, n3, r3;
        for (t3 = e4.length, n3 = 0; n3 < t3; ++n3) {
          if (r3 = e4[n3], !E2.aI(r3) || r3 < 0) throw E2.d(E2.cL(r3));
          if (r3 > 65535) return E2.v1(e4);
        }
        return E2.oQ(e4);
      },
      v2(e4, t3, n3) {
        var r3, i3, a3, o3;
        if (n3 <= 500 && t3 === 0 && n3 === e4.length) return String.fromCharCode.apply(null, e4);
        for (r3 = t3, i3 = ""; r3 < n3; r3 = a3) a3 = r3 + 500, o3 = a3 < n3 ? a3 : n3, i3 += String.fromCharCode.apply(null, e4.subarray(r3, o3));
        return i3;
      },
      be(e4) {
        var t3;
        if (0 <= e4) {
          if (e4 <= 65535) return String.fromCharCode(e4);
          if (e4 <= 1114111) return t3 = e4 - 65536, String.fromCharCode((O2.c.ai(t3, 10) | 55296) >>> 0, t3 & 1023 | 56320);
        }
        throw E2.d(E2.Y(e4, 0, 1114111, null, null));
      },
      ax(e4) {
        return e4.date === void 0 && (e4.date = new Date(e4.a)), e4.date;
      },
      fk(e4) {
        return e4.b ? E2.ax(e4).getUTCFullYear() + 0 : E2.ax(e4).getFullYear() + 0;
      },
      oW(e4) {
        return e4.b ? E2.ax(e4).getUTCMonth() + 1 : E2.ax(e4).getMonth() + 1;
      },
      oS(e4) {
        return e4.b ? E2.ax(e4).getUTCDate() + 0 : E2.ax(e4).getDate() + 0;
      },
      oT(e4) {
        return e4.b ? E2.ax(e4).getUTCHours() + 0 : E2.ax(e4).getHours() + 0;
      },
      oV(e4) {
        return e4.b ? E2.ax(e4).getUTCMinutes() + 0 : E2.ax(e4).getMinutes() + 0;
      },
      oX(e4) {
        return e4.b ? E2.ax(e4).getUTCSeconds() + 0 : E2.ax(e4).getSeconds() + 0;
      },
      oU(e4) {
        return e4.b ? E2.ax(e4).getUTCMilliseconds() + 0 : E2.ax(e4).getMilliseconds() + 0;
      },
      bE(e4, t3, n3) {
        var r3, i3, a3 = {};
        return a3.a = 0, r3 = [], i3 = [], a3.a = t3.length, O2.d.D(r3, t3), a3.b = "", n3 != null && n3.a !== 0 && n3.M(0, new E2.k9(a3, i3, r3)), D2.tB(e4, new E2.iJ(O2.dM, 0, r3, i3, 0));
      },
      v_(e4, t3, n3) {
        var r3 = Array.isArray(t3) ? n3 == null || n3.a === 0 : false, i3, a3;
        if (r3) {
          if (i3 = t3.length, i3 === 0) {
            if (e4.$0) return e4.$0();
          } else if (i3 === 1) {
            if (e4.$1) return e4.$1(t3[0]);
          } else if (i3 === 2) {
            if (e4.$2) return e4.$2(t3[0], t3[1]);
          } else if (i3 === 3) {
            if (e4.$3) return e4.$3(t3[0], t3[1], t3[2]);
          } else if (i3 === 4) {
            if (e4.$4) return e4.$4(t3[0], t3[1], t3[2], t3[3]);
          } else if (i3 === 5 && e4.$5) return e4.$5(t3[0], t3[1], t3[2], t3[3], t3[4]);
          if (a3 = e4["$" + i3], a3 != null) return a3.apply(e4, t3);
        }
        return E2.uY(e4, t3, n3);
      },
      uY(e4, t3, n3) {
        var r3 = t3 == null ? [] : Array.isArray(t3) ? t3 : E2.bc(t3, true, N2.z), i3 = r3.length, a3 = e4.$R, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3;
        if (i3 < a3) return E2.bE(e4, r3, n3);
        if (o3 = e4.$D, s3 = o3 == null, c3 = s3 ? null : o3(), l3 = D2.bV(e4), u3 = l3.$C, typeof u3 == "string" && (u3 = l3[u3]), s3) return n3 != null && n3.a !== 0 ? E2.bE(e4, r3, n3) : i3 === a3 ? u3.apply(e4, r3) : E2.bE(e4, r3, n3);
        if (Array.isArray(c3)) return n3 != null && n3.a !== 0 ? E2.bE(e4, r3, n3) : (d3 = a3 + c3.length, i3 > d3 ? E2.bE(e4, r3, null) : (i3 < d3 && (f3 = c3.slice(i3 - a3), r3 === t3 && (r3 = E2.bc(r3, true, N2.z)), O2.d.D(r3, f3)), u3.apply(e4, r3)));
        if (i3 > a3) return E2.bE(e4, r3, n3);
        if (r3 === t3 && (r3 = E2.bc(r3, true, N2.z)), p3 = Object.keys(c3), n3 == null) for (s3 = p3.length, m3 = 0; m3 < p3.length; p3.length === s3 || (0, E2.cN)(p3), ++m3) {
          if (h3 = c3[p3[m3]], O2.ad === h3) return E2.bE(e4, r3, n3);
          O2.d.C(r3, h3);
        }
        else {
          for (s3 = p3.length, g3 = 0, m3 = 0; m3 < p3.length; p3.length === s3 || (0, E2.cN)(p3), ++m3) if (_3 = p3[m3], n3.v(_3)) ++g3, O2.d.C(r3, n3.i(0, _3));
          else {
            if (h3 = c3[_3], O2.ad === h3) return E2.bE(e4, r3, n3);
            O2.d.C(r3, h3);
          }
          if (g3 !== n3.a) return E2.bE(e4, r3, n3);
        }
        return u3.apply(e4, r3);
      },
      eA(e4, t3) {
        var n3, r3 = "index", i3 = null;
        return E2.aI(t3) ? (n3 = D2.a3(e4), t3 < 0 || t3 >= n3 ? E2.eW(t3, n3, e4, i3, r3) : new E2.dL(i3, i3, true, t3, r3, "Value not in range")) : new E2.at(true, t3, r3, i3);
      },
      x0(e4, t3, n3) {
        return e4 < 0 || e4 > n3 ? E2.Y(e4, 0, n3, "start", null) : t3 != null && (t3 < e4 || t3 > n3) ? E2.Y(t3, e4, n3, "end", null) : new E2.at(true, t3, "end", null);
      },
      cL(e4) {
        return new E2.at(true, e4, null, null);
      },
      d(e4) {
        var t3, n3;
        return e4 ??= new E2.fg(), t3 = /* @__PURE__ */ Error(), t3.dartException = e4, n3 = E2.xQ, "defineProperty" in Object ? (Object.defineProperty(t3, "message", { get: n3 }), t3.name = "") : t3.toString = n3, t3;
      },
      xQ() {
        return D2.as(this.dartException);
      },
      Z(e4) {
        throw E2.d(e4);
      },
      cN(e4) {
        throw E2.d(E2.ag(e4));
      },
      bl(e4) {
        var t3, n3, r3, i3, a3, o3;
        return e4 = E2.pZ(e4.replace("[object Object]", "$receiver$")), t3 = e4.match(/\\\$[a-zA-Z]+\\\$/g), t3 ??= E2.a([], N2.s), n3 = t3.indexOf("\\$arguments\\$"), r3 = t3.indexOf("\\$argumentsExpr\\$"), i3 = t3.indexOf("\\$expr\\$"), a3 = t3.indexOf("\\$method\\$"), o3 = t3.indexOf("\\$receiver\\$"), new E2.lt(e4.replace(/* @__PURE__ */ RegExp("\\\\\\$arguments\\\\\\$", "g"), "((?:x|[^x])*)").replace(/* @__PURE__ */ RegExp("\\\\\\$argumentsExpr\\\\\\$", "g"), "((?:x|[^x])*)").replace(/* @__PURE__ */ RegExp("\\\\\\$expr\\\\\\$", "g"), "((?:x|[^x])*)").replace(/* @__PURE__ */ RegExp("\\\\\\$method\\\\\\$", "g"), "((?:x|[^x])*)").replace(/* @__PURE__ */ RegExp("\\\\\\$receiver\\\\\\$", "g"), "((?:x|[^x])*)"), n3, r3, i3, a3, o3);
      },
      lu(e4) {
        return (function(e5) {
          var t3 = "$arguments$";
          try {
            e5.$method$(t3);
          } catch (e6) {
            return e6.message;
          }
        })(e4);
      },
      p3(e4) {
        return (function(e5) {
          try {
            e5.$method$;
          } catch (e6) {
            return e6.message;
          }
        })(e4);
      },
      nt(e4, t3) {
        var n3 = t3 == null, r3 = n3 ? null : t3.method;
        return new E2.f0(e4, r3, n3 ? null : t3.receiver);
      },
      M(e4) {
        return e4 == null ? new E2.fh(e4) : e4 instanceof E2.dr ? E2.bW(e4, e4.a) : typeof e4 == "object" ? "dartException" in e4 ? E2.bW(e4, e4.dartException) : E2.wH(e4) : e4;
      },
      bW(e4, t3) {
        return N2.Q.b(t3) && (t3.$thrownJsError ??= e4), t3;
      },
      wH(e4) {
        var t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3 = null;
        if (!("message" in e4)) return e4;
        if (t3 = e4.message, "number" in e4 && typeof e4.number == "number" && (n3 = e4.number, r3 = n3 & 65535, (O2.c.ai(n3, 16) & 8191) == 10)) switch (r3) {
          case 438:
            return E2.bW(e4, E2.nt(E2.b(t3) + " (Error " + r3 + ")", h3));
          case 445:
          case 5007:
            return i3 = E2.b(t3), E2.bW(e4, new E2.dJ(i3 + " (Error " + r3 + ")", h3));
        }
        return e4 instanceof TypeError ? (a3 = A2.tb(), o3 = A2.tc(), s3 = A2.td(), c3 = A2.te(), l3 = A2.th(), u3 = A2.ti(), d3 = A2.tg(), A2.tf(), f3 = A2.tk(), p3 = A2.tj(), m3 = a3.a9(t3), m3 == null ? (m3 = o3.a9(t3), m3 == null ? (m3 = s3.a9(t3), m3 == null ? (m3 = c3.a9(t3), m3 == null ? (m3 = l3.a9(t3), m3 == null ? (m3 = u3.a9(t3), m3 == null ? (m3 = d3.a9(t3), m3 == null ? (m3 = c3.a9(t3), m3 == null ? (m3 = f3.a9(t3), m3 == null ? (m3 = p3.a9(t3), i3 = m3 != null) : i3 = true) : i3 = true) : i3 = true) : i3 = true) : i3 = true) : i3 = true) : i3 = true, i3 ? E2.bW(e4, new E2.dJ(t3, m3 == null ? h3 : m3.method)) : E2.bW(e4, new E2.fx(typeof t3 == "string" ? t3 : ""))) : (m3.method = "call", E2.bW(e4, E2.nt(t3, m3)))) : E2.bW(e4, E2.nt(t3, m3))) : e4 instanceof RangeError ? typeof t3 == "string" && t3.indexOf("call stack") !== -1 ? new E2.dO() : (t3 = (function(e5) {
          try {
            return String(e5);
          } catch {
          }
          return null;
        })(e4), E2.bW(e4, new E2.at(false, h3, h3, typeof t3 == "string" ? t3.replace(/^RangeError:\s*/, "") : t3))) : typeof InternalError == "function" && e4 instanceof InternalError && typeof t3 == "string" && t3 === "too much recursion" ? new E2.dO() : e4;
      },
      aS(e4) {
        var t3;
        return e4 instanceof E2.dr ? e4.b : e4 == null ? new E2.ed(e4) : (t3 = e4.$cachedTrace, t3 ?? (e4.$cachedTrace = new E2.ed(e4)));
      },
      fZ(e4) {
        return typeof e4 != "object" || !e4 ? D2.bY(e4) : E2.d0(e4);
      },
      pN(e4, t3) {
        var n3, r3, i3, a3 = e4.length;
        for (n3 = 0; n3 < a3; n3 = i3) r3 = n3 + 1, i3 = r3 + 1, t3.m(0, e4[n3], e4[r3]);
        return t3;
      },
      x4(e4, t3) {
        var n3, r3 = e4.length;
        for (n3 = 0; n3 < r3; ++n3) t3.C(0, e4[n3]);
        return t3;
      },
      xg(e4, t3, n3, r3, i3, a3) {
        switch (t3) {
          case 0:
            return e4.$0();
          case 1:
            return e4.$1(n3);
          case 2:
            return e4.$2(n3, r3);
          case 3:
            return e4.$3(n3, r3, i3);
          case 4:
            return e4.$4(n3, r3, i3, a3);
        }
        throw E2.d(E2.u9("Unsupported number of arguments for wrapped closure"));
      },
      mO(e4, t3) {
        var n3;
        return e4 == null ? null : (n3 = e4.$identity, n3 || (n3 = /* @__PURE__ */ (function(e5, t4, n4) {
          return function(r3, i3, a3, o3) {
            return n4(e5, t4, r3, i3, a3, o3);
          };
        })(e4, t3, E2.xg), e4.$identity = n3, n3));
      },
      u1(e4) {
        var t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3 = e4.co, f3 = e4.iS, p3 = e4.iI, m3 = e4.nDA, h3 = e4.aI, g3 = e4.fs, _3 = e4.cs, v3 = g3[0], y3 = _3[0], b3 = d3[v3], x3 = e4.fT;
        for (x3.toString, t3 = Object.create(f3 ? new E2.fq().constructor.prototype : new E2.cP(null, null).constructor.prototype), t3.$initialize = t3.constructor, n3 = f3 ? function() {
          this.$initialize();
        } : function(e5, t4) {
          this.$initialize(e5, t4);
        }, t3.constructor = n3, n3.prototype = t3, t3.$_name = v3, t3.$_target = b3, r3 = !f3, r3 ? i3 = E2.ox(v3, b3, p3, m3) : (t3.$static_name = v3, i3 = b3), t3.$S = E2.tY(x3, f3, p3), t3[y3] = i3, a3 = i3, o3 = 1; o3 < g3.length; ++o3) s3 = g3[o3], typeof s3 == "string" ? (c3 = d3[s3], l3 = s3, s3 = c3) : l3 = "", u3 = _3[o3], u3 != null && (r3 && (s3 = E2.ox(l3, s3, p3, m3)), t3[u3] = s3), o3 === h3 && (a3 = s3);
        return t3.$C = a3, t3.$R = e4.rC, t3.$D = e4.dV, n3;
      },
      tY(e4, t3, n3) {
        if (typeof e4 == "number") return e4;
        if (typeof e4 == "string") {
          if (t3) throw E2.d("Cannot compute signature for static tearoff.");
          return /* @__PURE__ */ (function(e5, t4) {
            return function() {
              return t4(this, e5);
            };
          })(e4, E2.tR);
        }
        throw E2.d("Error in functionType of tearoff");
      },
      tZ(e4, t3, n3, r3) {
        var i3 = E2.ow;
        switch (t3 ? -1 : e4) {
          case 0:
            return /* @__PURE__ */ (function(e5, t4) {
              return function() {
                return t4(this)[e5]();
              };
            })(n3, i3);
          case 1:
            return /* @__PURE__ */ (function(e5, t4) {
              return function(n4) {
                return t4(this)[e5](n4);
              };
            })(n3, i3);
          case 2:
            return /* @__PURE__ */ (function(e5, t4) {
              return function(n4, r4) {
                return t4(this)[e5](n4, r4);
              };
            })(n3, i3);
          case 3:
            return /* @__PURE__ */ (function(e5, t4) {
              return function(n4, r4, i4) {
                return t4(this)[e5](n4, r4, i4);
              };
            })(n3, i3);
          case 4:
            return /* @__PURE__ */ (function(e5, t4) {
              return function(n4, r4, i4, a3) {
                return t4(this)[e5](n4, r4, i4, a3);
              };
            })(n3, i3);
          case 5:
            return /* @__PURE__ */ (function(e5, t4) {
              return function(n4, r4, i4, a3, o3) {
                return t4(this)[e5](n4, r4, i4, a3, o3);
              };
            })(n3, i3);
          default:
            return /* @__PURE__ */ (function(e5, t4) {
              return function() {
                return e5.apply(t4(this), arguments);
              };
            })(r3, i3);
        }
      },
      ox(e4, t3, n3, r3) {
        var i3, a3;
        return n3 ? E2.u0(e4, t3, r3) : (i3 = t3.length, a3 = E2.tZ(i3, r3, e4, t3), a3);
      },
      u_(e4, t3, n3, r3) {
        var i3 = E2.ow, a3 = E2.tS;
        switch (t3 ? -1 : e4) {
          case 0:
            throw E2.d(new E2.fp("Intercepted function with no arguments."));
          case 1:
            return /* @__PURE__ */ (function(e5, t4, n4) {
              return function() {
                return t4(this)[e5](n4(this));
              };
            })(n3, a3, i3);
          case 2:
            return /* @__PURE__ */ (function(e5, t4, n4) {
              return function(r4) {
                return t4(this)[e5](n4(this), r4);
              };
            })(n3, a3, i3);
          case 3:
            return /* @__PURE__ */ (function(e5, t4, n4) {
              return function(r4, i4) {
                return t4(this)[e5](n4(this), r4, i4);
              };
            })(n3, a3, i3);
          case 4:
            return /* @__PURE__ */ (function(e5, t4, n4) {
              return function(r4, i4, a4) {
                return t4(this)[e5](n4(this), r4, i4, a4);
              };
            })(n3, a3, i3);
          case 5:
            return /* @__PURE__ */ (function(e5, t4, n4) {
              return function(r4, i4, a4, o3) {
                return t4(this)[e5](n4(this), r4, i4, a4, o3);
              };
            })(n3, a3, i3);
          case 6:
            return /* @__PURE__ */ (function(e5, t4, n4) {
              return function(r4, i4, a4, o3, s3) {
                return t4(this)[e5](n4(this), r4, i4, a4, o3, s3);
              };
            })(n3, a3, i3);
          default:
            return /* @__PURE__ */ (function(e5, t4, n4) {
              return function() {
                var r4 = [n4(this)];
                return Array.prototype.push.apply(r4, arguments), e5.apply(t4(this), r4);
              };
            })(r3, a3, i3);
        }
      },
      u0(e4, t3, n3) {
        var r3, i3;
        return A2.ou ??= E2.ot("interceptor"), A2.ov ??= E2.ot("receiver"), r3 = t3.length, i3 = E2.u_(r3, n3, e4, t3), i3;
      },
      nO(e4) {
        return E2.u1(e4);
      },
      tR(e4, t3) {
        return E2.mt(j2.typeUniverse, E2.ak(e4.a), t3);
      },
      ow(e4) {
        return e4.a;
      },
      tS(e4) {
        return e4.b;
      },
      ot(e4) {
        var t3, n3, r3, i3 = new E2.cP("receiver", "interceptor"), a3 = D2.nr(Object.getOwnPropertyNames(i3));
        for (t3 = a3.length, n3 = 0; n3 < t3; ++n3) if (r3 = a3[n3], i3[r3] === e4) return r3;
        throw E2.d(E2.K("Field name " + e4 + " not found.", null));
      },
      xP(e4) {
        throw E2.d(new E2.eQ(e4));
      },
      xa(e4) {
        return j2.getIsolateTag(e4);
      },
      uH(e4, t3, n3) {
        var r3 = new E2.cx(e4, t3, n3.h("cx<0>"));
        return r3.c = e4.e, r3;
      },
      Bh(e4, t3, n3) {
        Object.defineProperty(e4, t3, {
          value: n3,
          enumerable: false,
          writable: true,
          configurable: true
        });
      },
      xC(e4) {
        var t3, n3, r3, i3, a3, o3 = A2.pR.$1(e4), s3 = A2.mP[o3];
        if (s3 != null) return Object.defineProperty(e4, j2.dispatchPropertyName, {
          value: s3,
          enumerable: false,
          writable: true,
          configurable: true
        }), s3.i;
        if (t3 = A2.n_[o3], t3 != null) return t3;
        if (n3 = j2.interceptorsByTag[o3], n3 == null && (r3 = A2.pJ.$2(e4, o3), r3 != null)) {
          if (s3 = A2.mP[r3], s3 != null) return Object.defineProperty(e4, j2.dispatchPropertyName, {
            value: s3,
            enumerable: false,
            writable: true,
            configurable: true
          }), s3.i;
          if (t3 = A2.n_[r3], t3 != null) return t3;
          n3 = j2.interceptorsByTag[r3], o3 = r3;
        }
        if (n3 == null) return null;
        if (t3 = n3.prototype, i3 = o3[0], i3 === "!") return s3 = E2.nc(t3), A2.mP[o3] = s3, Object.defineProperty(e4, j2.dispatchPropertyName, {
          value: s3,
          enumerable: false,
          writable: true,
          configurable: true
        }), s3.i;
        if (i3 === "~") return A2.n_[o3] = t3, t3;
        if (i3 === "-") return a3 = E2.nc(t3), Object.defineProperty(Object.getPrototypeOf(e4), j2.dispatchPropertyName, {
          value: a3,
          enumerable: false,
          writable: true,
          configurable: true
        }), a3.i;
        if (i3 === "+") return E2.pX(e4, t3);
        if (i3 === "*") throw E2.d(E2.p4(o3));
        return j2.leafTags[o3] === true ? (a3 = E2.nc(t3), Object.defineProperty(Object.getPrototypeOf(e4), j2.dispatchPropertyName, {
          value: a3,
          enumerable: false,
          writable: true,
          configurable: true
        }), a3.i) : E2.pX(e4, t3);
      },
      pX(e4, t3) {
        var n3 = Object.getPrototypeOf(e4);
        return Object.defineProperty(n3, j2.dispatchPropertyName, {
          value: D2.nS(t3, n3, null, null),
          enumerable: false,
          writable: true,
          configurable: true
        }), t3;
      },
      nc(e4) {
        return D2.nS(e4, false, null, !!e4.$iav);
      },
      xE(e4, t3, n3) {
        var r3 = t3.prototype;
        return j2.leafTags[e4] === true ? E2.nc(r3) : D2.nS(r3, n3, null, null);
      },
      xe() {
        true !== A2.nQ && (A2.nQ = true, E2.xf());
      },
      xf() {
        var e4, t3, n3, r3, i3, a3, o3, s3;
        if (A2.mP = /* @__PURE__ */ Object.create(null), A2.n_ = /* @__PURE__ */ Object.create(null), E2.xd(), e4 = j2.interceptorsByTag, t3 = Object.getOwnPropertyNames(e4), typeof window < "u") for (n3 = /* @__PURE__ */ __name(function() {
        }, "n"), r3 = 0; r3 < t3.length; ++r3) i3 = t3[r3], a3 = A2.pY.$1(i3), a3 != null && (o3 = E2.xE(i3, e4[i3], a3), o3 != null && (Object.defineProperty(a3, j2.dispatchPropertyName, {
          value: o3,
          enumerable: false,
          writable: true,
          configurable: true
        }), n3.prototype = a3));
        for (r3 = 0; r3 < t3.length; ++r3) i3 = t3[r3], /^[A-Za-z_]/.test(i3) && (s3 = e4[i3], e4["!" + i3] = s3, e4["~" + i3] = s3, e4["-" + i3] = s3, e4["+" + i3] = s3, e4["*" + i3] = s3);
      },
      xd() {
        var e4, t3, n3, r3, i3, a3, o3 = O2.bb();
        if (o3 = E2.di(O2.bc, E2.di(O2.bd, E2.di(O2.aa, E2.di(O2.aa, E2.di(O2.be, E2.di(O2.bf, E2.di(O2.bg(O2.a9), o3))))))), typeof dartNativeDispatchHooksTransformer < "u" && (e4 = dartNativeDispatchHooksTransformer, typeof e4 == "function" && (e4 = [e4]), e4.constructor == Array)) for (t3 = 0; t3 < e4.length; ++t3) n3 = e4[t3], typeof n3 == "function" && (o3 = n3(o3) || o3);
        r3 = o3.getTag, i3 = o3.getUnknownTag, a3 = o3.prototypeForTag, A2.pR = new E2.mX(r3), A2.pJ = new E2.mY(i3), A2.pY = new E2.mZ(a3);
      },
      di(e4, t3) {
        return e4(t3) || t3;
      },
      uk(e4, t3, n3, r3, i3, a3) {
        var o3 = t3 ? "m" : "", s3 = n3 ? "" : "i", c3 = r3 ? "u" : "", l3 = i3 ? "s" : "", u3 = a3 ? "g" : "", d3 = (function(e5, t4) {
          try {
            return new RegExp(e5, t4);
          } catch (e6) {
            return e6;
          }
        })(e4, o3 + s3 + c3 + l3 + u3);
        if (d3 instanceof RegExp) return d3;
        throw E2.d(E2.R("Illegal RegExp pattern (" + String(d3) + ")", e4, null));
      },
      x1(e4) {
        return e4.indexOf("$", 0) >= 0 ? e4.replace(/\$/g, "$$$$") : e4;
      },
      pZ(e4) {
        return /[[\]{}()*+?.\\^$|]/.test(e4) ? e4.replace(/[[\]{}()*+?.\\^$|]/g, "\\$&") : e4;
      },
      q0(e4, t3, n3) {
        return E2.xN(e4, t3, n3);
      },
      xN(e4, t3, n3) {
        var r3, i3, a3, o3;
        if (t3 === "") {
          if (e4 === "") return n3;
          for (r3 = e4.length, i3 = n3, a3 = 0; a3 < r3; ++a3) i3 = i3 + e4[a3] + n3;
          return i3.charCodeAt(0), i3;
        }
        return o3 = e4.indexOf(t3, 0), o3 < 0 ? e4 : e4.length < 500 || n3.indexOf("$", 0) >= 0 ? e4.split(t3).join(n3) : e4.replace(new RegExp(E2.pZ(t3), "g"), E2.x1(n3));
      },
      dn: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.$ti = t3;
      }, "dn"),
      cQ: /* @__PURE__ */ __name(function() {
      }, "cQ"),
      aJ: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.a = e4, i3.b = t3, i3.c = n3, i3.$ti = r3;
      }, "aJ"),
      dW: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.$ti = t3;
      }, "dW"),
      X: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.$ti = t3;
      }, "X"),
      hY: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "hY"),
      iJ: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.a = e4, a3.c = t3, a3.d = n3, a3.e = r3, a3.f = i3;
      }, "iJ"),
      k9: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "k9"),
      lt: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3) {
        var o3 = this;
        o3.a = e4, o3.b = t3, o3.c = n3, o3.d = r3, o3.e = i3, o3.f = a3;
      }, "lt"),
      dJ: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "dJ"),
      f0: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "f0"),
      fx: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "fx"),
      fh: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "fh"),
      dr: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "dr"),
      ed: /* @__PURE__ */ __name(function(e4) {
        this.a = e4, this.b = null;
      }, "ed"),
      c7: /* @__PURE__ */ __name(function() {
      }, "c7"),
      eL: /* @__PURE__ */ __name(function() {
      }, "eL"),
      eM: /* @__PURE__ */ __name(function() {
      }, "eM"),
      ft: /* @__PURE__ */ __name(function() {
      }, "ft"),
      fq: /* @__PURE__ */ __name(function() {
      }, "fq"),
      cP: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "cP"),
      fp: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "fp"),
      mm: /* @__PURE__ */ __name(function() {
      }, "mm"),
      aC: /* @__PURE__ */ __name(function(e4) {
        var t3 = this;
        t3.a = 0, t3.f = t3.e = t3.d = t3.c = t3.b = null, t3.r = 0, t3.$ti = e4;
      }, "aC"),
      iP: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "iP"),
      jN: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3, this.c = null;
      }, "jN"),
      aO: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.$ti = t3;
      }, "aO"),
      cx: /* @__PURE__ */ __name(function(e4, t3, n3) {
        var r3 = this;
        r3.a = e4, r3.b = t3, r3.d = r3.c = null, r3.$ti = n3;
      }, "cx"),
      mX: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "mX"),
      mY: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "mY"),
      mZ: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "mZ"),
      iK: /* @__PURE__ */ __name(function(e4, t3) {
        var n3 = this;
        n3.a = e4, n3.b = t3, n3.d = n3.c = null;
      }, "iK"),
      mk: /* @__PURE__ */ __name(function(e4) {
        this.b = e4;
      }, "mk"),
      de(e4, t3, n3) {
        if (!E2.aI(t3)) throw E2.d(E2.K("Invalid view offsetInBytes " + E2.b(t3), null));
      },
      w8(e4) {
        return e4;
      },
      f7(e4, t3, n3) {
        return E2.de(e4, t3, n3), n3 == null ? new DataView(e4, t3) : new DataView(e4, t3, n3);
      },
      uQ(e4) {
        return new Float32Array(e4);
      },
      uR(e4) {
        return new Int8Array(e4);
      },
      oO(e4, t3, n3) {
        return E2.de(e4, t3, n3), new Uint16Array(e4, t3, n3);
      },
      oP(e4, t3, n3) {
        return E2.de(e4, t3, n3), new Uint32Array(e4, t3, n3);
      },
      uS(e4) {
        return new Uint8Array(e4);
      },
      nw(e4, t3, n3) {
        var r3;
        return E2.de(e4, t3, n3), r3 = new Uint8Array(e4, t3, n3), r3;
      },
      bo(e4, t3, n3) {
        if (e4 >>> 0 !== e4 || e4 >= n3) throw E2.d(E2.eA(t3, e4));
      },
      bR(e4, t3, n3) {
        if (e4 >>> 0 !== e4 || t3 >>> 0 !== t3 || e4 > t3 || t3 > n3) throw E2.d(E2.x0(e4, t3, n3));
        return t3;
      },
      dF: /* @__PURE__ */ __name(function() {
      }, "dF"),
      d_: /* @__PURE__ */ __name(function() {
      }, "d_"),
      dE: /* @__PURE__ */ __name(function() {
      }, "dE"),
      aw: /* @__PURE__ */ __name(function() {
      }, "aw"),
      f8: /* @__PURE__ */ __name(function() {
      }, "f8"),
      f9: /* @__PURE__ */ __name(function() {
      }, "f9"),
      fa: /* @__PURE__ */ __name(function() {
      }, "fa"),
      fb: /* @__PURE__ */ __name(function() {
      }, "fb"),
      fc: /* @__PURE__ */ __name(function() {
      }, "fc"),
      fd: /* @__PURE__ */ __name(function() {
      }, "fd"),
      fe: /* @__PURE__ */ __name(function() {
      }, "fe"),
      dG: /* @__PURE__ */ __name(function() {
      }, "dG"),
      cy: /* @__PURE__ */ __name(function() {
      }, "cy"),
      e7: /* @__PURE__ */ __name(function() {
      }, "e7"),
      e8: /* @__PURE__ */ __name(function() {
      }, "e8"),
      e9: /* @__PURE__ */ __name(function() {
      }, "e9"),
      ea: /* @__PURE__ */ __name(function() {
      }, "ea"),
      v5(e4, t3) {
        return t3.c ??= E2.nG(e4, t3.y, true);
      },
      oZ(e4, t3) {
        return t3.c ??= E2.ek(e4, "a5", [t3.y]);
      },
      p_(e4) {
        var t3 = e4.x;
        return t3 === 6 || t3 === 7 || t3 === 8 ? E2.p_(e4.y) : t3 === 12 || t3 === 13;
      },
      v4(e4) {
        return e4.at;
      },
      aR(e4) {
        return E2.fT(j2.typeUniverse, e4, false);
      },
      bT(e4, t3, n3, r3) {
        var i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3, y3, b3 = t3.x;
        switch (b3) {
          case 5:
          case 1:
          case 2:
          case 3:
          case 4:
            return t3;
          case 6:
            return i3 = t3.y, a3 = E2.bT(e4, i3, n3, r3), a3 === i3 ? t3 : E2.pl(e4, a3, true);
          case 7:
            return i3 = t3.y, a3 = E2.bT(e4, i3, n3, r3), a3 === i3 ? t3 : E2.nG(e4, a3, true);
          case 8:
            return i3 = t3.y, a3 = E2.bT(e4, i3, n3, r3), a3 === i3 ? t3 : E2.pk(e4, a3, true);
          case 9:
            return o3 = t3.z, s3 = E2.ey(e4, o3, n3, r3), s3 === o3 ? t3 : E2.ek(e4, t3.y, s3);
          case 10:
            return c3 = t3.y, l3 = E2.bT(e4, c3, n3, r3), u3 = t3.z, d3 = E2.ey(e4, u3, n3, r3), l3 === c3 && d3 === u3 ? t3 : E2.nE(e4, l3, d3);
          case 12:
            return f3 = t3.y, p3 = E2.bT(e4, f3, n3, r3), m3 = t3.z, h3 = E2.wE(e4, m3, n3, r3), p3 === f3 && h3 === m3 ? t3 : E2.pj(e4, p3, h3);
          case 13:
            return g3 = t3.z, r3 += g3.length, _3 = E2.ey(e4, g3, n3, r3), c3 = t3.y, l3 = E2.bT(e4, c3, n3, r3), _3 === g3 && l3 === c3 ? t3 : E2.nF(e4, l3, _3, true);
          case 14:
            return v3 = t3.y, v3 < r3 || (y3 = n3[v3 - r3], y3 == null) ? t3 : y3;
          default:
            throw E2.d(E2.eG("Attempted to substitute unexpected RTI kind " + b3));
        }
      },
      ey(e4, t3, n3, r3) {
        var i3, a3, o3, s3, c3 = t3.length, l3 = E2.mv(c3);
        for (i3 = false, a3 = 0; a3 < c3; ++a3) o3 = t3[a3], s3 = E2.bT(e4, o3, n3, r3), s3 !== o3 && (i3 = true), l3[a3] = s3;
        return i3 ? l3 : t3;
      },
      wF(e4, t3, n3, r3) {
        var i3, a3, o3, s3, c3, l3, u3 = t3.length, d3 = E2.mv(u3);
        for (i3 = false, a3 = 0; a3 < u3; a3 += 3) o3 = t3[a3], s3 = t3[a3 + 1], c3 = t3[a3 + 2], l3 = E2.bT(e4, c3, n3, r3), l3 !== c3 && (i3 = true), d3.splice(a3, 3, o3, s3, l3);
        return i3 ? d3 : t3;
      },
      wE(e4, t3, n3, r3) {
        var i3, a3 = t3.a, o3 = E2.ey(e4, a3, n3, r3), s3 = t3.b, c3 = E2.ey(e4, s3, n3, r3), l3 = t3.c, u3 = E2.wF(e4, l3, n3, r3);
        return o3 === a3 && c3 === s3 && u3 === l3 ? t3 : (i3 = new E2.fK(), i3.a = o3, i3.b = c3, i3.c = u3, i3);
      },
      a(e4, t3) {
        return e4[j2.arrayRti] = t3, e4;
      },
      wY(e4) {
        var t3, n3 = e4.$S;
        return n3 == null ? null : typeof n3 == "number" ? E2.xb(n3) : (t3 = e4.$S(), t3);
      },
      pT(e4, t3) {
        var n3;
        return E2.p_(t3) && e4 instanceof E2.c7 && (n3 = E2.wY(e4), n3 != null) ? n3 : E2.ak(e4);
      },
      ak(e4) {
        var t3;
        return e4 instanceof E2.c ? (t3 = e4.$ti, t3 ?? E2.nJ(e4)) : Array.isArray(e4) ? E2.a_(e4) : E2.nJ(D2.bV(e4));
      },
      a_(e4) {
        var t3 = e4[j2.arrayRti], n3 = N2.b;
        return t3 == null || t3.constructor !== n3.constructor ? n3 : t3;
      },
      A(e4) {
        return e4.$ti ?? E2.nJ(e4);
      },
      nJ(e4) {
        var t3 = e4.constructor;
        return t3.$ccache ?? E2.wj(e4, t3);
      },
      wj(e4, t3) {
        var n3 = e4 instanceof E2.c7 ? e4.__proto__.__proto__.constructor : t3, r3 = E2.vH(j2.typeUniverse, n3.name);
        return t3.$ccache = r3, r3;
      },
      xb(e4) {
        var t3, n3 = j2.types, r3 = n3[e4];
        return typeof r3 == "string" ? (t3 = E2.fT(j2.typeUniverse, r3, false), n3[e4] = t3, t3) : r3;
      },
      pL(e4) {
        var t3, n3, r3, i3 = e4.w;
        return i3 ?? (t3 = e4.at, n3 = t3.replace(/\*/g, ""), n3 === t3 ? e4.w = new E2.eh(e4) : (r3 = E2.fT(j2.typeUniverse, n3, true), i3 = r3.w, e4.w = i3 ?? (r3.w = new E2.eh(r3))));
      },
      u(e4) {
        return E2.pL(E2.fT(j2.typeUniverse, e4, false));
      },
      wi(e4) {
        var t3, n3, r3, i3 = this, a3 = N2.K;
        if (i3 === a3) return E2.df(i3, e4, E2.wn);
        if (a3 = E2.bq(i3) ? true : i3 === N2._ || i3 === a3, a3) return E2.df(i3, e4, E2.wr);
        if (a3 = i3.x, t3 = a3 === 6 ? i3.y : i3, n3 = t3 === N2.S ? E2.aI : t3 === N2.gR || t3 === N2.di ? E2.wm : t3 === N2.R ? E2.wp : t3 === N2.y ? E2.eu : null, n3 != null) return E2.df(i3, e4, n3);
        if (t3.x === 9) {
          if (r3 = t3.y, t3.z.every(E2.xh)) return i3.r = "$i" + r3, r3 === "o" ? E2.df(i3, e4, E2.wl) : E2.df(i3, e4, E2.wq);
        } else if (a3 === 7) return E2.df(i3, e4, E2.wb);
        return E2.df(i3, e4, E2.w9);
      },
      df(e4, t3, n3) {
        return e4.b = n3, e4.b(t3);
      },
      wh(e4) {
        var t3, n3, r3 = this;
        return t3 = E2.bq(r3) ? true : r3 === N2._ || r3 === N2.K, n3 = t3 ? E2.w1 : r3 === N2.K ? E2.w_ : E2.wa, r3.a = n3, r3.a(e4);
      },
      fX(e4) {
        var t3, n3 = e4.x;
        return t3 = E2.bq(e4) || e4 === N2._ || e4 === N2.A || n3 === 7 || n3 === 6 && E2.fX(e4.y) ? true : n3 === 8 && E2.fX(e4.y) || e4 === N2.P || e4 === N2.T, t3;
      },
      w9(e4) {
        var t3 = this;
        return e4 == null ? E2.fX(t3) : E2.a7(j2.typeUniverse, E2.pT(e4, t3), null, t3, null);
      },
      wb(e4) {
        return e4 == null || this.y.b(e4);
      },
      wq(e4) {
        var t3, n3 = this;
        return e4 == null ? E2.fX(n3) : (t3 = n3.r, e4 instanceof E2.c ? !!e4[t3] : !!D2.bV(e4)[t3]);
      },
      wl(e4) {
        var t3, n3 = this;
        return e4 == null ? E2.fX(n3) : typeof e4 == "object" ? Array.isArray(e4) ? true : (t3 = n3.r, e4 instanceof E2.c ? !!e4[t3] : !!D2.bV(e4)[t3]) : false;
      },
      Ba(e4) {
        var t3 = this;
        if (e4 == null || t3.b(e4)) return e4;
        E2.pw(e4, t3);
      },
      wa(e4) {
        var t3 = this;
        if (e4 == null || t3.b(e4)) return e4;
        E2.pw(e4, t3);
      },
      pw(e4, t3) {
        throw E2.d(E2.vw(E2.pd(e4, E2.pT(e4, t3), E2.ar(t3, null))));
      },
      pd(e4, t3, n3) {
        return E2.cS(e4) + ": type '" + E2.b(E2.ar(t3 ?? E2.ak(e4), null)) + "' is not a subtype of type '" + E2.b(n3) + "'";
      },
      vw(e4) {
        return new E2.ei("TypeError: " + e4);
      },
      aq(e4, t3) {
        return new E2.ei("TypeError: " + E2.pd(e4, null, t3));
      },
      wn(e4) {
        return e4 != null;
      },
      w_(e4) {
        return e4;
      },
      wr(e4) {
        return true;
      },
      w1(e4) {
        return e4;
      },
      eu(e4) {
        return true === e4 || false === e4;
      },
      AW(e4) {
        if (true === e4) return true;
        if (false === e4) return false;
        throw E2.d(E2.aq(e4, "bool"));
      },
      AY(e4) {
        if (true === e4) return true;
        if (false === e4) return false;
        if (e4 == null) return e4;
        throw E2.d(E2.aq(e4, "bool"));
      },
      AX(e4) {
        if (true === e4) return true;
        if (false === e4) return false;
        if (e4 == null) return e4;
        throw E2.d(E2.aq(e4, "bool?"));
      },
      AZ(e4) {
        if (typeof e4 == "number") return e4;
        throw E2.d(E2.aq(e4, "double"));
      },
      B0(e4) {
        if (typeof e4 == "number" || e4 == null) return e4;
        throw E2.d(E2.aq(e4, "double"));
      },
      B_(e4) {
        if (typeof e4 == "number" || e4 == null) return e4;
        throw E2.d(E2.aq(e4, "double?"));
      },
      aI(e4) {
        return typeof e4 == "number" && Math.floor(e4) === e4;
      },
      B1(e4) {
        if (typeof e4 == "number" && Math.floor(e4) === e4) return e4;
        throw E2.d(E2.aq(e4, "int"));
      },
      B3(e4) {
        if (typeof e4 == "number" && Math.floor(e4) === e4 || e4 == null) return e4;
        throw E2.d(E2.aq(e4, "int"));
      },
      B2(e4) {
        if (typeof e4 == "number" && Math.floor(e4) === e4 || e4 == null) return e4;
        throw E2.d(E2.aq(e4, "int?"));
      },
      wm(e4) {
        return typeof e4 == "number";
      },
      B4(e4) {
        if (typeof e4 == "number") return e4;
        throw E2.d(E2.aq(e4, "num"));
      },
      B6(e4) {
        if (typeof e4 == "number" || e4 == null) return e4;
        throw E2.d(E2.aq(e4, "num"));
      },
      B5(e4) {
        if (typeof e4 == "number" || e4 == null) return e4;
        throw E2.d(E2.aq(e4, "num?"));
      },
      wp(e4) {
        return typeof e4 == "string";
      },
      B7(e4) {
        if (typeof e4 == "string") return e4;
        throw E2.d(E2.aq(e4, "String"));
      },
      w0(e4) {
        if (typeof e4 == "string" || e4 == null) return e4;
        throw E2.d(E2.aq(e4, "String"));
      },
      B8(e4) {
        if (typeof e4 == "string" || e4 == null) return e4;
        throw E2.d(E2.aq(e4, "String?"));
      },
      pF(e4, t3) {
        var n3, r3, i3;
        for (n3 = "", r3 = "", i3 = 0; i3 < e4.length; ++i3, r3 = ", ") n3 += O2.a.ae(r3, E2.ar(e4[i3], t3));
        return n3;
      },
      wz(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3 = e4.y, l3 = e4.z;
        if (c3 === "") return "(" + E2.pF(l3, t3) + ")";
        for (n3 = l3.length, r3 = c3.split(","), i3 = r3.length - n3, a3 = "(", o3 = "", s3 = 0; s3 < n3; ++s3, o3 = ", ") a3 += o3, i3 === 0 && (a3 += "{"), a3 = O2.a.ae(a3, E2.ar(l3[s3], t3)), i3 >= 0 && (a3 += " " + r3[i3]), ++i3;
        return a3 + "})";
      },
      py(e4, t3, n3) {
        var r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3, y3, b3, x3, S3, C3, w3, T3 = ", ";
        if (n3 != null) {
          for (r3 = n3.length, t3 == null ? (t3 = E2.a([], N2.s), i3 = null) : i3 = t3.length, a3 = t3.length, o3 = r3; o3 > 0; --o3) t3.push("T" + (a3 + o3));
          for (s3 = N2.cK, c3 = N2._, l3 = N2.K, u3 = "<", d3 = "", o3 = 0; o3 < r3; ++o3, d3 = T3) u3 = O2.a.ae(u3 + d3, t3[t3.length - 1 - o3]), f3 = n3[o3], p3 = f3.x, m3 = p3 !== 2 && p3 !== 3 && p3 !== 4 && p3 !== 5 && f3 !== s3 ? f3 === c3 || f3 === l3 : true, m3 || (u3 += O2.a.ae(" extends ", E2.ar(f3, t3)));
          u3 += ">";
        } else u3 = "", i3 = null;
        for (s3 = e4.y, h3 = e4.z, g3 = h3.a, _3 = g3.length, v3 = h3.b, y3 = v3.length, b3 = h3.c, x3 = b3.length, S3 = E2.ar(s3, t3), C3 = "", w3 = "", o3 = 0; o3 < _3; ++o3, w3 = T3) C3 += O2.a.ae(w3, E2.ar(g3[o3], t3));
        if (y3 > 0) {
          for (C3 += w3 + "[", w3 = "", o3 = 0; o3 < y3; ++o3, w3 = T3) C3 += O2.a.ae(w3, E2.ar(v3[o3], t3));
          C3 += "]";
        }
        if (x3 > 0) {
          for (C3 += w3 + "{", w3 = "", o3 = 0; o3 < x3; o3 += 3, w3 = T3) C3 += w3, b3[o3 + 1] && (C3 += "required "), C3 += D2.om(E2.ar(b3[o3 + 2], t3), " ") + b3[o3];
          C3 += "}";
        }
        return i3 != null && (t3.toString, t3.length = i3), u3 + "(" + C3 + ") => " + E2.b(S3);
      },
      ar(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3 = e4.x;
        return c3 === 5 ? "erased" : c3 === 2 ? "dynamic" : c3 === 3 ? "void" : c3 === 1 ? "Never" : c3 === 4 ? "any" : c3 === 6 ? (n3 = E2.ar(e4.y, t3), n3) : c3 === 7 ? (r3 = e4.y, n3 = E2.ar(r3, t3), i3 = r3.x, D2.om(i3 === 12 || i3 === 13 ? O2.a.ae("(", n3) + ")" : n3, "?")) : c3 === 8 ? "FutureOr<" + E2.b(E2.ar(e4.y, t3)) + ">" : c3 === 9 ? (a3 = E2.wG(e4.y), o3 = e4.z, o3.length > 0 ? a3 + ("<" + E2.pF(o3, t3) + ">") : a3) : c3 === 11 ? E2.wz(e4, t3) : c3 === 12 ? E2.py(e4, t3, null) : c3 === 13 ? E2.py(e4.y, t3, e4.z) : c3 === 14 ? (t3.toString, s3 = e4.y, t3[t3.length - 1 - s3]) : "?";
      },
      wG(e4) {
        return j2.mangledGlobalNames[e4] ?? "minified:" + e4;
      },
      vI(e4, t3) {
        for (var n3 = e4.tR[t3]; typeof n3 == "string"; ) n3 = e4.tR[n3];
        return n3;
      },
      vH(e4, t3) {
        var n3, r3, i3, a3, o3, s3 = e4.eT, c3 = s3[t3];
        if (c3 == null) return E2.fT(e4, t3, false);
        if (typeof c3 == "number") {
          for (n3 = c3, r3 = E2.el(e4, 5, "#"), i3 = E2.mv(n3), a3 = 0; a3 < n3; ++a3) i3[a3] = r3;
          return o3 = E2.ek(e4, t3, i3), s3[t3] = o3, o3;
        }
        return c3;
      },
      vF(e4, t3) {
        return E2.pt(e4.tR, t3);
      },
      vE(e4, t3) {
        return E2.pt(e4.eT, t3);
      },
      fT(e4, t3, n3) {
        var r3, i3 = e4.eC;
        return i3.get(t3) ?? (r3 = E2.pi(E2.pg(e4, null, t3, n3)), i3.set(t3, r3), r3);
      },
      mt(e4, t3, n3) {
        var r3, i3, a3 = t3.Q;
        return a3 ??= t3.Q = /* @__PURE__ */ new Map(), r3 = a3.get(n3), r3 ?? (i3 = E2.pi(E2.pg(e4, t3, n3, true)), a3.set(n3, i3), i3);
      },
      vG(e4, t3, n3) {
        var r3, i3, a3, o3 = t3.as;
        return o3 ??= t3.as = /* @__PURE__ */ new Map(), r3 = n3.at, i3 = o3.get(r3), i3 ?? (a3 = E2.nE(e4, t3, n3.x === 10 ? n3.z : [n3]), o3.set(r3, a3), a3);
      },
      bn(e4, t3) {
        return t3.a = E2.wh, t3.b = E2.wi, t3;
      },
      el(e4, t3, n3) {
        var r3, i3;
        return e4.eC.get(n3) ?? (r3 = new E2.aF(null, null), r3.x = t3, r3.at = n3, i3 = E2.bn(e4, r3), e4.eC.set(n3, i3), i3);
      },
      pl(e4, t3, n3) {
        var r3, i3 = t3.at + "*";
        return e4.eC.get(i3) ?? (r3 = E2.vB(e4, t3, i3, n3), e4.eC.set(i3, r3), r3);
      },
      vB(e4, t3, n3, r3) {
        var i3, a3, o3;
        return r3 && (i3 = t3.x, a3 = E2.bq(t3) ? true : t3 === N2.P || t3 === N2.T || i3 === 7 || i3 === 6, a3) ? t3 : (o3 = new E2.aF(null, null), o3.x = 6, o3.y = t3, o3.at = n3, E2.bn(e4, o3));
      },
      nG(e4, t3, n3) {
        var r3, i3 = t3.at + "?";
        return e4.eC.get(i3) ?? (r3 = E2.vA(e4, t3, i3, n3), e4.eC.set(i3, r3), r3);
      },
      vA(e4, t3, n3, r3) {
        var i3, a3, o3, s3;
        if (r3) {
          if (i3 = t3.x, a3 = E2.bq(t3) ? true : t3 !== N2.P && t3 !== N2.T ? i3 === 7 || i3 === 8 && E2.n0(t3.y) : true, a3) return t3;
          if (i3 === 1 || t3 === N2.A) return N2.P;
          if (i3 === 6) return o3 = t3.y, o3.x === 8 && E2.n0(o3.y) ? o3 : E2.v5(e4, t3);
        }
        return s3 = new E2.aF(null, null), s3.x = 7, s3.y = t3, s3.at = n3, E2.bn(e4, s3);
      },
      pk(e4, t3, n3) {
        var r3, i3 = t3.at + "/";
        return e4.eC.get(i3) ?? (r3 = E2.vy(e4, t3, i3, n3), e4.eC.set(i3, r3), r3);
      },
      vy(e4, t3, n3, r3) {
        var i3, a3, o3;
        if (r3) {
          if (i3 = t3.x, a3 = E2.bq(t3) ? true : t3 === N2._ || t3 === N2.K, a3 || t3 === N2.K) return t3;
          if (i3 === 1) return E2.ek(e4, "a5", [t3]);
          if (t3 === N2.P || t3 === N2.T) return N2.eH;
        }
        return o3 = new E2.aF(null, null), o3.x = 8, o3.y = t3, o3.at = n3, E2.bn(e4, o3);
      },
      vC(e4, t3) {
        var n3, r3, i3 = "" + t3 + "^";
        return e4.eC.get(i3) ?? (n3 = new E2.aF(null, null), n3.x = 14, n3.y = t3, n3.at = i3, r3 = E2.bn(e4, n3), e4.eC.set(i3, r3), r3);
      },
      ej(e4) {
        var t3, n3, r3, i3 = e4.length;
        for (t3 = "", n3 = "", r3 = 0; r3 < i3; ++r3, n3 = ",") t3 += n3 + e4[r3].at;
        return t3;
      },
      vx(e4) {
        var t3, n3, r3, i3, a3, o3 = e4.length;
        for (t3 = "", n3 = "", r3 = 0; r3 < o3; r3 += 3, n3 = ",") i3 = e4[r3], a3 = e4[r3 + 1] ? "!" : ":", t3 += n3 + i3 + a3 + e4[r3 + 2].at;
        return t3;
      },
      ek(e4, t3, n3) {
        var r3, i3, a3, o3 = t3;
        return n3.length > 0 && (o3 += "<" + E2.ej(n3) + ">"), r3 = e4.eC.get(o3), r3 ?? (i3 = new E2.aF(null, null), i3.x = 9, i3.y = t3, i3.z = n3, n3.length > 0 && (i3.c = n3[0]), i3.at = o3, a3 = E2.bn(e4, i3), e4.eC.set(o3, a3), a3);
      },
      nE(e4, t3, n3) {
        var r3, i3, a3, o3, s3, c3;
        return t3.x === 10 ? (r3 = t3.y, i3 = t3.z.concat(n3)) : (i3 = n3, r3 = t3), a3 = r3.at + (";<" + E2.ej(i3) + ">"), o3 = e4.eC.get(a3), o3 ?? (s3 = new E2.aF(null, null), s3.x = 10, s3.y = r3, s3.z = i3, s3.at = a3, c3 = E2.bn(e4, s3), e4.eC.set(a3, c3), c3);
      },
      vD(e4, t3, n3) {
        var r3, i3, a3 = "+" + (t3 + "(" + E2.ej(n3) + ")");
        return e4.eC.get(a3) ?? (r3 = new E2.aF(null, null), r3.x = 11, r3.y = t3, r3.z = n3, r3.at = a3, i3 = E2.bn(e4, r3), e4.eC.set(a3, i3), i3);
      },
      pj(e4, t3, n3) {
        var r3, i3, a3, o3, s3, c3 = t3.at, l3 = n3.a, u3 = l3.length, d3 = n3.b, f3 = d3.length, p3 = n3.c, m3 = p3.length, h3 = "(" + E2.ej(l3);
        return f3 > 0 && (r3 = u3 > 0 ? "," : "", h3 += r3 + "[" + E2.ej(d3) + "]"), m3 > 0 && (r3 = u3 > 0 ? "," : "", h3 += r3 + "{" + E2.vx(p3) + "}"), i3 = c3 + (h3 + ")"), a3 = e4.eC.get(i3), a3 ?? (o3 = new E2.aF(null, null), o3.x = 12, o3.y = t3, o3.z = n3, o3.at = i3, s3 = E2.bn(e4, o3), e4.eC.set(i3, s3), s3);
      },
      nF(e4, t3, n3, r3) {
        var i3, a3 = t3.at + ("<" + E2.ej(n3) + ">");
        return e4.eC.get(a3) ?? (i3 = E2.vz(e4, t3, n3, a3, r3), e4.eC.set(a3, i3), i3);
      },
      vz(e4, t3, n3, r3, i3) {
        var a3, o3, s3, c3, l3, u3, d3, f3;
        if (i3) {
          for (a3 = n3.length, o3 = E2.mv(a3), s3 = 0, c3 = 0; c3 < a3; ++c3) l3 = n3[c3], l3.x === 1 && (o3[c3] = l3, ++s3);
          if (s3 > 0) return u3 = E2.bT(e4, t3, o3, 0), d3 = E2.ey(e4, n3, o3, 0), E2.nF(e4, u3, d3, n3 !== d3);
        }
        return f3 = new E2.aF(null, null), f3.x = 13, f3.y = t3, f3.z = n3, f3.at = r3, E2.bn(e4, f3);
      },
      pg(e4, t3, n3, r3) {
        return {
          u: e4,
          e: t3,
          r: n3,
          s: [],
          p: 0,
          n: r3
        };
      },
      pi(e4) {
        var t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3 = e4.r, f3 = e4.s;
        for (t3 = d3.length, n3 = 0; n3 < t3; ) if (r3 = d3.charCodeAt(n3), r3 >= 48 && r3 <= 57) n3 = E2.vr(n3 + 1, r3, d3, f3);
        else if ((((r3 | 32) >>> 0) - 97 & 65535) < 26 || r3 === 95 || r3 === 36 || r3 === 124) n3 = E2.ph(e4, n3, d3, f3, false);
        else if (r3 === 46) n3 = E2.ph(e4, n3, d3, f3, true);
        else switch (++n3, r3) {
          case 44:
            break;
          case 58:
            f3.push(false);
            break;
          case 33:
            f3.push(true);
            break;
          case 59:
            f3.push(E2.bQ(e4.u, e4.e, f3.pop()));
            break;
          case 94:
            f3.push(E2.vC(e4.u, f3.pop()));
            break;
          case 35:
            f3.push(E2.el(e4.u, 5, "#"));
            break;
          case 64:
            f3.push(E2.el(e4.u, 2, "@"));
            break;
          case 126:
            f3.push(E2.el(e4.u, 3, "~"));
            break;
          case 60:
            f3.push(e4.p), e4.p = f3.length;
            break;
          case 62:
            if (i3 = e4.u, a3 = f3.splice(e4.p), E2.nD(e4.u, e4.e, a3), e4.p = f3.pop(), o3 = f3.pop(), typeof o3 == "string") f3.push(E2.ek(i3, o3, a3));
            else switch (s3 = E2.bQ(i3, e4.e, o3), s3.x) {
              case 12:
                f3.push(E2.nF(i3, s3, a3, e4.n));
                break;
              default:
                f3.push(E2.nE(i3, s3, a3));
            }
            break;
          case 38:
            E2.vs(e4, f3);
            break;
          case 42:
            c3 = e4.u, f3.push(E2.pl(c3, E2.bQ(c3, e4.e, f3.pop()), e4.n));
            break;
          case 63:
            c3 = e4.u, f3.push(E2.nG(c3, E2.bQ(c3, e4.e, f3.pop()), e4.n));
            break;
          case 47:
            c3 = e4.u, f3.push(E2.pk(c3, E2.bQ(c3, e4.e, f3.pop()), e4.n));
            break;
          case 40:
            f3.push(-3), f3.push(e4.p), e4.p = f3.length;
            break;
          case 41:
            E2.vq(e4, f3);
            break;
          case 91:
            f3.push(e4.p), e4.p = f3.length;
            break;
          case 93:
            a3 = f3.splice(e4.p), E2.nD(e4.u, e4.e, a3), e4.p = f3.pop(), f3.push(a3), f3.push(-1);
            break;
          case 123:
            f3.push(e4.p), e4.p = f3.length;
            break;
          case 125:
            a3 = f3.splice(e4.p), E2.vu(e4.u, e4.e, a3), e4.p = f3.pop(), f3.push(a3), f3.push(-2);
            break;
          case 43:
            l3 = d3.indexOf("(", n3), f3.push(d3.substring(n3, l3)), f3.push(-4), f3.push(e4.p), e4.p = f3.length, n3 = l3 + 1;
            break;
          default:
            throw "Bad character " + r3;
        }
        return u3 = f3.pop(), E2.bQ(e4.u, e4.e, u3);
      },
      vr(e4, t3, n3, r3) {
        var i3, a3, o3 = t3 - 48;
        for (i3 = n3.length; e4 < i3 && (a3 = n3.charCodeAt(e4), a3 >= 48 && a3 <= 57); ++e4) o3 = o3 * 10 + (a3 - 48);
        return r3.push(o3), e4;
      },
      ph(e4, t3, n3, r3, i3) {
        var a3, o3, s3, c3, l3, u3, d3 = t3 + 1;
        for (a3 = n3.length; d3 < a3; ++d3) if (o3 = n3.charCodeAt(d3), o3 === 46) {
          if (i3) break;
          i3 = true;
        } else if (s3 = (((o3 | 32) >>> 0) - 97 & 65535) < 26 || o3 === 95 || o3 === 36 || o3 === 124 || o3 >= 48 && o3 <= 57, !s3) break;
        return c3 = n3.substring(t3, d3), i3 ? (a3 = e4.u, l3 = e4.e, l3.x === 10 && (l3 = l3.y), u3 = E2.vI(a3, l3.y)[c3], u3 ?? E2.Z('No "' + c3 + '" in "' + E2.v4(l3) + '"'), r3.push(E2.mt(a3, l3, u3))) : r3.push(c3), d3;
      },
      vq(e4, t3) {
        var n3, r3, i3, a3, o3, s3 = null, c3 = e4.u, l3 = t3.pop();
        if (typeof l3 == "number") switch (l3) {
          case -1:
            n3 = t3.pop(), r3 = s3;
            break;
          case -2:
            r3 = t3.pop(), n3 = s3;
            break;
          default:
            t3.push(l3), r3 = s3, n3 = r3;
        }
        else t3.push(l3), r3 = s3, n3 = r3;
        switch (i3 = E2.vp(e4, t3), l3 = t3.pop(), l3) {
          case -3:
            l3 = t3.pop(), n3 ??= c3.sEA, r3 ??= c3.sEA, a3 = E2.bQ(c3, e4.e, l3), o3 = new E2.fK(), o3.a = i3, o3.b = n3, o3.c = r3, t3.push(E2.pj(c3, a3, o3));
            return;
          case -4:
            t3.push(E2.vD(c3, t3.pop(), i3));
            return;
          default:
            throw E2.d(E2.eG("Unexpected state under `()`: " + E2.b(l3)));
        }
      },
      vs(e4, t3) {
        var n3 = t3.pop();
        if (n3 === 0) {
          t3.push(E2.el(e4.u, 1, "0&"));
          return;
        }
        if (n3 === 1) {
          t3.push(E2.el(e4.u, 4, "1&"));
          return;
        }
        throw E2.d(E2.eG("Unexpected extended operation " + E2.b(n3)));
      },
      vp(e4, t3) {
        var n3 = t3.splice(e4.p);
        return E2.nD(e4.u, e4.e, n3), e4.p = t3.pop(), n3;
      },
      bQ(e4, t3, n3) {
        return typeof n3 == "string" ? E2.ek(e4, n3, e4.sEA) : typeof n3 == "number" ? (t3.toString, E2.vt(e4, t3, n3)) : n3;
      },
      nD(e4, t3, n3) {
        var r3, i3 = n3.length;
        for (r3 = 0; r3 < i3; ++r3) n3[r3] = E2.bQ(e4, t3, n3[r3]);
      },
      vu(e4, t3, n3) {
        var r3, i3 = n3.length;
        for (r3 = 2; r3 < i3; r3 += 3) n3[r3] = E2.bQ(e4, t3, n3[r3]);
      },
      vt(e4, t3, n3) {
        var r3, i3, a3 = t3.x;
        if (a3 === 10) {
          if (n3 === 0) return t3.y;
          if (r3 = t3.z, i3 = r3.length, n3 <= i3) return r3[n3 - 1];
          n3 -= i3, t3 = t3.y, a3 = t3.x;
        } else if (n3 === 0) return t3;
        if (a3 !== 9) throw E2.d(E2.eG("Indexed base must be an interface type"));
        if (r3 = t3.z, n3 <= r3.length) return r3[n3 - 1];
        throw E2.d(E2.eG("Bad index " + n3 + " for " + t3.k(0)));
      },
      a7(e4, t3, n3, r3, i3) {
        var a3, o3, s3, c3, l3, u3, d3, f3, p3, m3;
        if (t3 === r3 || (a3 = E2.bq(r3) ? true : r3 === N2._ || r3 === N2.K, a3) || (o3 = t3.x, o3 === 4)) return true;
        if (E2.bq(t3)) return false;
        if (a3 = t3.x === 1 || t3 === N2.P || t3 === N2.T, a3 || (s3 = o3 === 14, s3 && E2.a7(e4, n3[t3.y], n3, r3, i3))) return true;
        if (c3 = r3.x, o3 === 6) return E2.a7(e4, t3.y, n3, r3, i3);
        if (c3 === 6) return a3 = r3.y, E2.a7(e4, t3, n3, a3, i3);
        if (o3 === 8) return E2.a7(e4, t3.y, n3, r3, i3) ? E2.a7(e4, E2.oZ(e4, t3), n3, r3, i3) : false;
        if (o3 === 7) return a3 = E2.a7(e4, t3.y, n3, r3, i3), a3;
        if (c3 === 8) return E2.a7(e4, t3, n3, r3.y, i3) ? true : E2.a7(e4, t3, n3, E2.oZ(e4, r3), i3);
        if (c3 === 7) return a3 = E2.a7(e4, t3, n3, r3.y, i3), a3;
        if (s3) return false;
        if (a3 = o3 !== 12, (!a3 || o3 === 13) && r3 === N2.b8) return true;
        if (c3 === 13) {
          if (t3 === N2.g) return true;
          if (o3 !== 13 || (l3 = t3.z, u3 = r3.z, d3 = l3.length, d3 !== u3.length)) return false;
          for (n3 = n3 == null ? l3 : l3.concat(n3), i3 = i3 == null ? u3 : u3.concat(i3), f3 = 0; f3 < d3; ++f3) if (p3 = l3[f3], m3 = u3[f3], !E2.a7(e4, p3, n3, m3, i3) || !E2.a7(e4, m3, i3, p3, n3)) return false;
          return E2.pA(e4, t3.y, n3, r3.y, i3);
        }
        return c3 === 12 ? t3 === N2.g || !a3 && E2.pA(e4, t3, n3, r3, i3) : o3 === 9 ? c3 === 9 && E2.wk(e4, t3, n3, r3, i3) : (a3 = o3 === 11, a3 && r3 === N2.gT ? true : a3 && c3 === 11 ? E2.wo(e4, t3, n3, r3, i3) : false);
      },
      pA(e4, t3, n3, r3, i3) {
        var a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3, y3, b3, x3, S3, C3, w3, T3;
        if (!E2.a7(e4, t3.y, n3, r3.y, i3) || (a3 = t3.z, o3 = r3.z, s3 = a3.a, c3 = o3.a, l3 = s3.length, u3 = c3.length, l3 > u3) || (d3 = u3 - l3, f3 = a3.b, p3 = o3.b, m3 = f3.length, h3 = p3.length, l3 + m3 < u3 + h3)) return false;
        for (g3 = 0; g3 < l3; ++g3) if (_3 = s3[g3], !E2.a7(e4, c3[g3], i3, _3, n3)) return false;
        for (g3 = 0; g3 < d3; ++g3) if (_3 = f3[g3], !E2.a7(e4, c3[l3 + g3], i3, _3, n3)) return false;
        for (g3 = 0; g3 < h3; ++g3) if (_3 = f3[d3 + g3], !E2.a7(e4, p3[g3], i3, _3, n3)) return false;
        for (v3 = a3.c, y3 = o3.c, b3 = v3.length, x3 = y3.length, S3 = 0, C3 = 0; C3 < x3; C3 += 3) for (w3 = y3[C3]; ; ) {
          if (S3 >= b3 || (T3 = v3[S3], S3 += 3, w3 < T3)) return false;
          if (!(T3 < w3)) {
            if (_3 = v3[S3 - 1], !E2.a7(e4, y3[C3 + 2], i3, _3, n3)) return false;
            break;
          }
        }
        return true;
      },
      wk(e4, t3, n3, r3, i3) {
        for (var a3, o3, s3, c3, l3, u3, d3, f3 = t3.y, p3 = r3.y; f3 !== p3; ) {
          if (a3 = e4.tR[f3], a3 == null) return false;
          if (typeof a3 == "string") {
            f3 = a3;
            continue;
          }
          if (o3 = a3[p3], o3 == null) return false;
          for (s3 = o3.length, c3 = s3 > 0 ? Array(s3) : j2.typeUniverse.sEA, l3 = 0; l3 < s3; ++l3) c3[l3] = E2.mt(e4, t3, o3[l3]);
          return E2.pu(e4, c3, null, n3, r3.z, i3);
        }
        return u3 = t3.z, d3 = r3.z, E2.pu(e4, u3, null, n3, d3, i3);
      },
      pu(e4, t3, n3, r3, i3, a3) {
        var o3, s3, c3, l3 = t3.length;
        for (o3 = 0; o3 < l3; ++o3) if (s3 = t3[o3], c3 = i3[o3], !E2.a7(e4, s3, r3, c3, a3)) return false;
        return true;
      },
      wo(e4, t3, n3, r3, i3) {
        var a3, o3 = t3.z, s3 = r3.z, c3 = o3.length;
        if (c3 !== s3.length || t3.y !== r3.y) return false;
        for (a3 = 0; a3 < c3; ++a3) if (!E2.a7(e4, o3[a3], n3, s3[a3], i3)) return false;
        return true;
      },
      n0(e4) {
        var t3, n3 = e4.x;
        return t3 = e4 !== N2.P && e4 !== N2.T ? E2.bq(e4) || n3 === 7 || n3 === 6 && E2.n0(e4.y) ? true : n3 === 8 && E2.n0(e4.y) : true, t3;
      },
      xh(e4) {
        return E2.bq(e4) ? true : e4 === N2._ || e4 === N2.K;
      },
      bq(e4) {
        var t3 = e4.x;
        return t3 === 2 || t3 === 3 || t3 === 4 || t3 === 5 || e4 === N2.cK;
      },
      pt(e4, t3) {
        var n3, r3, i3 = Object.keys(t3), a3 = i3.length;
        for (n3 = 0; n3 < a3; ++n3) r3 = i3[n3], e4[r3] = t3[r3];
      },
      mv(e4) {
        return e4 > 0 ? Array(e4) : j2.typeUniverse.sEA;
      },
      aF: /* @__PURE__ */ __name(function(e4, t3) {
        var n3 = this;
        n3.a = e4, n3.b = t3, n3.w = n3.r = n3.c = null, n3.x = 0, n3.at = n3.as = n3.Q = n3.z = n3.y = null;
      }, "aF"),
      fK: /* @__PURE__ */ __name(function() {
        this.c = this.b = this.a = null;
      }, "fK"),
      eh: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "eh"),
      fJ: /* @__PURE__ */ __name(function() {
      }, "fJ"),
      ei: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "ei"),
      vg() {
        var e4, n3, r3 = {};
        return t2.scheduleImmediate == null ? t2.MutationObserver != null && t2.document != null ? (e4 = t2.document.createElement("div"), n3 = t2.document.createElement("span"), r3.a = null, new t2.MutationObserver(E2.mO(new E2.lW(r3), 1)).observe(e4, { childList: true }), new E2.lV(r3, e4, n3)) : t2.setImmediate == null ? E2.wR() : E2.wQ() : E2.wP();
      },
      vh(e4) {
        t2.scheduleImmediate(E2.mO(new E2.lX(e4), 0));
      },
      vi(e4) {
        t2.setImmediate(E2.mO(new E2.lY(e4), 0));
      },
      vj(e4) {
        E2.vv(0, e4);
      },
      vv(e4, t3) {
        var n3 = new E2.mr();
        return n3.dg(e4, t3), n3;
      },
      ex(e4) {
        return new E2.fD(new E2.C(A2.B, e4.h("C<0>")), e4.h("fD<0>"));
      },
      et(e4, t3) {
        return e4.$2(0, null), t3.b = true, t3.a;
      },
      dd(e4, t3) {
        E2.w2(e4, t3);
      },
      es(e4, t3) {
        t3.a3(e4);
      },
      er(e4, t3) {
        t3.bK(E2.M(e4), E2.aS(e4));
      },
      w2(e4, t3) {
        var n3, r3, i3 = new E2.mx(t3), a3 = new E2.my(t3);
        e4 instanceof E2.C ? e4.cz(i3, a3, N2.z) : (n3 = N2.z, N2.d.b(e4) ? e4.au(0, i3, a3, n3) : (r3 = new E2.C(A2.B, N2.eI), r3.a = 8, r3.c = e4, r3.cz(i3, a3, n3)));
      },
      ez(e4) {
        var t3 = /* @__PURE__ */ (function(e5, t4) {
          return function(n3, r3) {
            for (; ; ) try {
              e5(n3, r3);
              break;
            } catch (e6) {
              r3 = e6, n3 = t4;
            }
          };
        })(e4, 1);
        return A2.B.c1(new E2.mN(t3));
      },
      mf(e4) {
        return new E2.d7(e4, 1);
      },
      bO() {
        return O2.eo;
      },
      bP(e4) {
        return new E2.d7(e4, 3);
      },
      bS(e4, t3) {
        return new E2.eg(e4, t3.h("eg<0>"));
      },
      h9(e4, t3) {
        var n3 = E2.bU(e4, "error", N2.K);
        return new E2.eH(n3, t3 ?? E2.eI(e4));
      },
      eI(e4) {
        var t3;
        return N2.Q.b(e4) && (t3 = e4.gb2(), t3 != null) ? t3 : O2.bk;
      },
      nz(e4, t3) {
        for (var n3, r3; n3 = e4.a, n3 & 4; ) e4 = e4.c;
        n3 & 24 ? (r3 = t3.bb(), t3.by(e4), E2.d6(t3, r3)) : (r3 = t3.c, t3.a = t3.a & 1 | 4, t3.c = e4, e4.cs(r3));
      },
      d6(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3 = {}, g3 = h3.a = e4;
        for (n3 = N2.d; ; ) {
          if (r3 = {}, i3 = g3.a, a3 = !(i3 & 16), o3 = !a3, t3 == null) {
            o3 && !(i3 & 1) && (g3 = g3.c, E2.dh(g3.a, g3.b));
            return;
          }
          for (r3.a = t3, s3 = t3.a, g3 = t3; s3 != null; g3 = s3, s3 = c3) g3.a = null, E2.d6(h3.a, g3), r3.a = s3, c3 = s3.a;
          if (i3 = h3.a, l3 = i3.c, r3.b = o3, r3.c = l3, a3 ? (u3 = g3.c, u3 = !!(u3 & 1) || (u3 & 15) == 8) : u3 = true, u3) {
            if (d3 = g3.b.b, o3 ? (i3 = i3.b === d3, i3 = !(i3 || i3)) : i3 = false, i3) {
              E2.dh(l3.a, l3.b);
              return;
            }
            if (f3 = A2.B, f3 === d3 ? f3 = null : A2.B = d3, g3 = g3.c, (g3 & 15) == 8 ? new E2.md(r3, h3, o3).$0() : a3 ? g3 & 1 && new E2.mc(r3, l3).$0() : g3 & 2 && new E2.mb(h3, r3).$0(), f3 != null && (A2.B = f3), g3 = r3.c, n3.b(g3) ? (i3 = r3.a.$ti, i3 = i3.h("a5<2>").b(g3) || !i3.z[1].b(g3)) : i3 = false, i3) {
              if (p3 = r3.a.b, g3 instanceof E2.C) {
                if (g3.a & 24) {
                  m3 = p3.c, p3.c = null, t3 = p3.bc(m3), p3.a = g3.a & 30 | p3.a & 1, p3.c = g3.c, h3.a = g3;
                  continue;
                }
                E2.nz(g3, p3);
              } else p3.ce(g3);
              return;
            }
          }
          p3 = r3.a.b, m3 = p3.c, p3.c = null, t3 = p3.bc(m3), g3 = r3.b, i3 = r3.c, g3 ? (p3.a = p3.a & 1 | 16, p3.c = i3) : (p3.a = 8, p3.c = i3), h3.a = p3, g3 = p3;
        }
      },
      wA(e4, t3) {
        if (N2.C.b(e4)) return t3.c1(e4);
        if (N2.v.b(e4)) return e4;
        throw E2.d(E2.h7(e4, "onError", M2.c));
      },
      wv() {
        var e4, t3;
        for (e4 = A2.dg; e4 != null; e4 = A2.dg) A2.ew = null, t3 = e4.b, A2.dg = t3, t3 ?? (A2.ev = null), e4.a.$0();
      },
      wC() {
        A2.nK = true;
        try {
          E2.wv();
        } finally {
          A2.ew = null, A2.nK = false, A2.dg != null && A2.oj().$1(E2.pK());
        }
      },
      pH(e4) {
        var t3 = new E2.fE(e4), n3 = A2.ev;
        n3 == null ? (A2.dg = A2.ev = t3, A2.nK || A2.oj().$1(E2.pK())) : A2.ev = n3.b = t3;
      },
      wB(e4) {
        var t3, n3, r3, i3 = A2.dg;
        if (i3 == null) {
          E2.pH(e4), A2.ew = A2.ev;
          return;
        }
        t3 = new E2.fE(e4), n3 = A2.ew, n3 == null ? (t3.b = i3, A2.dg = A2.ew = t3) : (r3 = n3.b, t3.b = r3, A2.ew = n3.b = t3, r3 ?? (A2.ev = t3));
      },
      q_(e4) {
        var t3, n3 = null, r3 = A2.B;
        if (O2.i === r3) {
          E2.cI(n3, n3, O2.i, e4);
          return;
        }
        if (t3 = false, t3) {
          E2.cI(n3, n3, r3, e4);
          return;
        }
        E2.cI(n3, n3, r3, r3.cB(e4));
      },
      fs(e4, t3) {
        var n3 = null, r3 = t3.h("aZ<0>"), i3 = new E2.aZ(n3, n3, n3, n3, r3);
        return i3.aJ(e4), i3.aK(), new E2.aj(i3, r3.h("aj<1>"));
      },
      v9(e4, t3) {
        var n3 = null, r3 = t3.h("db<0>"), i3 = new E2.db(n3, n3, n3, n3, r3);
        return e4.au(0, new E2.ln(i3, t3), new E2.lo(i3), N2.P), new E2.aj(i3, r3.h("aj<1>"));
      },
      AG(e4) {
        return E2.bU(e4, "stream", N2.K), new E2.fQ();
      },
      p1(e4, t3, n3, r3) {
        return new E2.aZ(null, t3, n3, e4, r3.h("aZ<0>"));
      },
      nM(e4) {
        var t3, n3;
        if (e4 != null) try {
          e4.$0();
        } catch (e5) {
          t3 = E2.M(e5), n3 = E2.aS(e5), E2.dh(t3, n3);
        }
      },
      vn(e4, t3) {
        if (t3 ??= E2.wS(), N2.k.b(t3)) return e4.c1(t3);
        if (N2.d5.b(t3)) return t3;
        throw E2.d(E2.K("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.", null));
      },
      ww(e4, t3) {
        E2.dh(e4, t3);
      },
      dh(e4, t3) {
        E2.wB(new E2.mK(e4, t3));
      },
      pC(e4, t3, n3, r3) {
        var i3, a3 = A2.B;
        if (a3 === n3) return r3.$0();
        A2.B = n3, i3 = a3;
        try {
          return a3 = r3.$0(), a3;
        } finally {
          A2.B = i3;
        }
      },
      pE(e4, t3, n3, r3, i3) {
        var a3, o3 = A2.B;
        if (o3 === n3) return r3.$1(i3);
        A2.B = n3, a3 = o3;
        try {
          return o3 = r3.$1(i3), o3;
        } finally {
          A2.B = a3;
        }
      },
      pD(e4, t3, n3, r3, i3, a3) {
        var o3, s3 = A2.B;
        if (s3 === n3) return r3.$2(i3, a3);
        A2.B = n3, o3 = s3;
        try {
          return s3 = r3.$2(i3, a3), s3;
        } finally {
          A2.B = o3;
        }
      },
      cI(e4, t3, n3, r3) {
        O2.i !== n3 && (r3 = n3.cB(r3)), E2.pH(r3);
      },
      lW: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "lW"),
      lV: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "lV"),
      lX: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "lX"),
      lY: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "lY"),
      mr: /* @__PURE__ */ __name(function() {
      }, "mr"),
      ms: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "ms"),
      fD: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = false, this.$ti = t3;
      }, "fD"),
      mx: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "mx"),
      my: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "my"),
      mN: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "mN"),
      d7: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "d7"),
      aH: /* @__PURE__ */ __name(function(e4, t3) {
        var n3 = this;
        n3.a = e4, n3.d = n3.c = n3.b = null, n3.$ti = t3;
      }, "aH"),
      eg: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.$ti = t3;
      }, "eg"),
      eH: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "eH"),
      fG: /* @__PURE__ */ __name(function() {
      }, "fG"),
      ay: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.$ti = t3;
      }, "ay"),
      bN: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.a = null, a3.b = e4, a3.c = t3, a3.d = n3, a3.e = r3, a3.$ti = i3;
      }, "bN"),
      C: /* @__PURE__ */ __name(function(e4, t3) {
        var n3 = this;
        n3.a = 0, n3.b = e4, n3.c = null, n3.$ti = t3;
      }, "C"),
      m3: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "m3"),
      ma: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "ma"),
      m6: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "m6"),
      m7: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "m7"),
      m8: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "m8"),
      m5: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "m5"),
      m9: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "m9"),
      m4: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "m4"),
      md: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "md"),
      me: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "me"),
      mc: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "mc"),
      mb: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "mb"),
      fE: /* @__PURE__ */ __name(function(e4) {
        this.a = e4, this.b = null;
      }, "fE"),
      bi: /* @__PURE__ */ __name(function() {
      }, "bi"),
      ln: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "ln"),
      lo: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "lo"),
      lp: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "lp"),
      lq: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "lq"),
      fr: /* @__PURE__ */ __name(function() {
      }, "fr"),
      da: /* @__PURE__ */ __name(function() {
      }, "da"),
      mq: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "mq"),
      mp: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "mp"),
      fS: /* @__PURE__ */ __name(function() {
      }, "fS"),
      fF: /* @__PURE__ */ __name(function() {
      }, "fF"),
      aZ: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.a = null, a3.b = 0, a3.c = null, a3.d = e4, a3.e = t3, a3.f = n3, a3.r = r3, a3.$ti = i3;
      }, "aZ"),
      db: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.a = null, a3.b = 0, a3.c = null, a3.d = e4, a3.e = t3, a3.f = n3, a3.r = r3, a3.$ti = i3;
      }, "db"),
      aj: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.$ti = t3;
      }, "aj"),
      dX: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3) {
        var o3 = this;
        o3.w = e4, o3.a = t3, o3.b = n3, o3.c = r3, o3.d = i3, o3.e = a3, o3.r = o3.f = null;
      }, "dX"),
      dT: /* @__PURE__ */ __name(function() {
      }, "dT"),
      m0: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "m0"),
      m_: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "m_"),
      ee: /* @__PURE__ */ __name(function() {
      }, "ee"),
      fI: /* @__PURE__ */ __name(function() {
      }, "fI"),
      cG: /* @__PURE__ */ __name(function(e4) {
        this.b = e4, this.a = null;
      }, "cG"),
      dY: /* @__PURE__ */ __name(function(e4, t3) {
        this.b = e4, this.c = t3, this.a = null;
      }, "dY"),
      m1: /* @__PURE__ */ __name(function() {
      }, "m1"),
      eb: /* @__PURE__ */ __name(function() {
        this.a = 0, this.c = this.b = null;
      }, "eb"),
      ml: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "ml"),
      fQ: /* @__PURE__ */ __name(function() {
      }, "fQ"),
      mw: /* @__PURE__ */ __name(function() {
      }, "mw"),
      mK: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "mK"),
      mn: /* @__PURE__ */ __name(function() {
      }, "mn"),
      mo: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "mo"),
      pe(e4, t3) {
        var n3 = e4[t3];
        return n3 === e4 ? null : n3;
      },
      nA(e4, t3, n3) {
        e4[t3] = n3 ?? e4;
      },
      pf() {
        var e4 = /* @__PURE__ */ Object.create(null);
        return E2.nA(e4, "<non-identifier-key>", e4), delete e4["<non-identifier-key>"], e4;
      },
      uI(e4, t3, n3, r3) {
        return E2.vo(E2.wZ(), e4, t3, n3, r3);
      },
      nu(e4, t3, n3) {
        return E2.pN(e4, new E2.aC(t3.h("@<0>").I(n3).h("aC<1,2>")));
      },
      a9(e4, t3) {
        return new E2.aC(e4.h("@<0>").I(t3).h("aC<1,2>"));
      },
      vo(e4, t3, n3, r3, i3) {
        var a3 = n3 ?? new E2.mi(r3);
        return new E2.e5(e4, t3, a3, r3.h("@<0>").I(i3).h("e5<1,2>"));
      },
      oH(e4) {
        return new E2.b_(e4.h("b_<0>"));
      },
      aD(e4) {
        return new E2.b_(e4.h("b_<0>"));
      },
      aP(e4, t3) {
        return E2.x4(e4, new E2.b_(t3.h("b_<0>")));
      },
      nC() {
        var e4 = /* @__PURE__ */ Object.create(null);
        return e4["<non-identifier-key>"] = e4, delete e4["<non-identifier-key>"], e4;
      },
      nB(e4, t3, n3) {
        var r3 = new E2.cH(e4, t3, n3.h("cH<0>"));
        return r3.c = e4.e, r3;
      },
      w7(e4, t3) {
        return D2.af(e4, t3);
      },
      uh(e4, t3, n3) {
        var r3, i3;
        if (E2.nL(e4)) return t3 === "(" && n3 === ")" ? "(...)" : t3 + "..." + n3;
        r3 = E2.a([], N2.s), A2.cJ.push(e4);
        try {
          E2.ws(e4, r3);
        } finally {
          A2.cJ.pop();
        }
        return i3 = E2.ny(t3, r3, ", ") + n3, i3.charCodeAt(0), i3;
      },
      iI(e4, t3, n3) {
        var r3, i3;
        if (E2.nL(e4)) return t3 + "..." + n3;
        r3 = new E2.ac(t3), A2.cJ.push(e4);
        try {
          i3 = r3, i3.a = E2.ny(i3.a, e4, ", ");
        } finally {
          A2.cJ.pop();
        }
        return r3.a += n3, i3 = r3.a, i3.charCodeAt(0), i3;
      },
      nL(e4) {
        var t3, n3;
        for (t3 = A2.cJ.length, n3 = 0; n3 < t3; ++n3) if (e4 === A2.cJ[n3]) return true;
        return false;
      },
      ws(e4, t3) {
        for (var n3, r3, i3, a3, o3, s3, c3, l3 = e4.gH(e4), u3 = 0, d3 = 0; u3 < 80 || d3 < 3; ) {
          if (!l3.q()) return;
          n3 = E2.b(l3.gt()), t3.push(n3), u3 += n3.length + 2, ++d3;
        }
        if (!l3.q()) {
          if (d3 <= 5) return;
          r3 = t3.pop(), i3 = t3.pop();
        } else if (a3 = l3.gt(), ++d3, l3.q()) {
          for (o3 = l3.gt(), ++d3; l3.q(); a3 = o3, o3 = s3) if (s3 = l3.gt(), ++d3, d3 > 100) {
            for (; u3 > 75 && d3 > 3; ) u3 -= t3.pop().length + 2, --d3;
            t3.push("...");
            return;
          }
          i3 = E2.b(a3), r3 = E2.b(o3), u3 += r3.length + i3.length + 4;
        } else {
          if (d3 <= 4) {
            t3.push(E2.b(a3));
            return;
          }
          r3 = E2.b(a3), i3 = t3.pop(), u3 += r3.length + 2;
        }
        for (d3 > t3.length + 2 ? (u3 += 5, c3 = "...") : c3 = null; u3 > 80 && t3.length > 3; ) u3 -= t3.pop().length + 2, c3 ??= (u3 += 5, "...");
        c3 != null && t3.push(c3), t3.push(i3), t3.push(r3);
      },
      uJ(e4, t3) {
        var n3, r3, i3 = E2.oH(t3);
        for (n3 = e4.length, r3 = 0; r3 < e4.length; e4.length === n3 || (0, E2.cN)(e4), ++r3) i3.C(0, t3.a(e4[r3]));
        return i3;
      },
      nv(e4) {
        var t3, n3 = {};
        if (E2.nL(e4)) return "{...}";
        t3 = new E2.ac("");
        try {
          A2.cJ.push(e4), t3.a += "{", n3.a = true, e4.M(0, new E2.jO(n3, t3)), t3.a += "}";
        } finally {
          A2.cJ.pop();
        }
        return n3 = t3.a, n3.charCodeAt(0), n3;
      },
      e1: /* @__PURE__ */ __name(function() {
      }, "e1"),
      e4: /* @__PURE__ */ __name(function(e4) {
        var t3 = this;
        t3.a = 0, t3.e = t3.d = t3.c = t3.b = null, t3.$ti = e4;
      }, "e4"),
      e2: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.$ti = t3;
      }, "e2"),
      e3: /* @__PURE__ */ __name(function(e4, t3, n3) {
        var r3 = this;
        r3.a = e4, r3.b = t3, r3.c = 0, r3.d = null, r3.$ti = n3;
      }, "e3"),
      e5: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.w = e4, i3.x = t3, i3.y = n3, i3.a = 0, i3.f = i3.e = i3.d = i3.c = i3.b = null, i3.r = 0, i3.$ti = r3;
      }, "e5"),
      mi: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "mi"),
      b_: /* @__PURE__ */ __name(function(e4) {
        var t3 = this;
        t3.a = 0, t3.f = t3.e = t3.d = t3.c = t3.b = null, t3.r = 0, t3.$ti = e4;
      }, "b_"),
      mj: /* @__PURE__ */ __name(function(e4) {
        this.a = e4, this.c = this.b = null;
      }, "mj"),
      cH: /* @__PURE__ */ __name(function(e4, t3, n3) {
        var r3 = this;
        r3.a = e4, r3.b = t3, r3.d = r3.c = null, r3.$ti = n3;
      }, "cH"),
      aX: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.$ti = t3;
      }, "aX"),
      dw: /* @__PURE__ */ __name(function() {
      }, "dw"),
      dA: /* @__PURE__ */ __name(function() {
      }, "dA"),
      p: /* @__PURE__ */ __name(function() {
      }, "p"),
      dB: /* @__PURE__ */ __name(function() {
      }, "dB"),
      jO: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "jO"),
      I: /* @__PURE__ */ __name(function() {
      }, "I"),
      jP: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "jP"),
      fU: /* @__PURE__ */ __name(function() {
      }, "fU"),
      dC: /* @__PURE__ */ __name(function() {
      }, "dC"),
      bm: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.$ti = t3;
      }, "bm"),
      dM: /* @__PURE__ */ __name(function() {
      }, "dM"),
      ec: /* @__PURE__ */ __name(function() {
      }, "ec"),
      e6: /* @__PURE__ */ __name(function() {
      }, "e6"),
      em: /* @__PURE__ */ __name(function() {
      }, "em"),
      eq: /* @__PURE__ */ __name(function() {
      }, "eq"),
      pB(e4, t3) {
        var n3, r3, i3 = null;
        try {
          i3 = JSON.parse(e4);
        } catch (e5) {
          throw n3 = E2.M(e5), r3 = E2.R(String(n3), null, null), E2.d(r3);
        }
        return r3 = E2.mA(i3), r3;
      },
      mA(e4) {
        var t3;
        if (e4 == null) return null;
        if (typeof e4 != "object") return e4;
        if (Object.getPrototypeOf(e4) !== Array.prototype) return new E2.fM(e4, /* @__PURE__ */ Object.create(null));
        for (t3 = 0; t3 < e4.length; ++t3) e4[t3] = E2.mA(e4[t3]);
        return e4;
      },
      ve(e4, t3, n3, r3) {
        var i3, a3;
        return t3 instanceof Uint8Array ? (i3 = t3, r3 = i3.length, r3 - n3 < 15 || (a3 = E2.vf(e4, i3, n3, r3), a3 != null && e4 && a3.indexOf("\uFFFD") >= 0) ? null : a3) : null;
      },
      vf(e4, t3, n3, r3) {
        var i3 = e4 ? A2.tm() : A2.tl();
        return i3 == null ? null : n3 === 0 && r3 === t3.length ? E2.p8(i3, t3) : E2.p8(i3, t3.subarray(n3, E2.aQ(n3, r3, t3.length)));
      },
      p8(e4, t3) {
        var n3;
        try {
          return n3 = e4.decode(t3), n3;
        } catch {
        }
        return null;
      },
      os(e4, t3, n3, r3, i3, a3) {
        if (O2.c.br(a3, 4) !== 0) throw E2.d(E2.R("Invalid base64 padding, padded length must be multiple of four, is " + a3, e4, n3));
        if (r3 + i3 !== a3) throw E2.d(E2.R("Invalid base64 padding, '=' not at the end", e4, t3));
        if (i3 > 2) throw E2.d(E2.R("Invalid base64 padding, more than two '=' characters", e4, t3));
      },
      vm(e4, t3, n3, r3, i3, a3) {
        var o3, s3, c3, l3, u3, d3, f3 = "Invalid encoding before padding", p3 = "Invalid character", m3 = O2.c.ai(a3, 2), h3 = a3 & 3, g3 = A2.ok();
        for (o3 = t3, s3 = 0; o3 < n3; ++o3) {
          if (c3 = O2.a.B(e4, o3), s3 |= c3, l3 = g3[c3 & 127], l3 >= 0) {
            m3 = (m3 << 6 | l3) & 16777215, h3 = h3 + 1 & 3, h3 === 0 && (u3 = i3 + 1, r3[i3] = m3 >>> 16 & 255, i3 = u3 + 1, r3[u3] = m3 >>> 8 & 255, u3 = i3 + 1, r3[i3] = m3 & 255, i3 = u3, m3 = 0);
            continue;
          }
          if (l3 === -1 && h3 > 1) {
            if (s3 > 127) break;
            if (h3 === 3) {
              if (m3 & 3) throw E2.d(E2.R(f3, e4, o3));
              r3[i3] = m3 >>> 10, r3[i3 + 1] = m3 >>> 2;
            } else {
              if (m3 & 15) throw E2.d(E2.R(f3, e4, o3));
              r3[i3] = m3 >>> 4;
            }
            return d3 = (3 - h3) * 3, c3 === 37 && (d3 += 2), E2.pc(e4, o3 + 1, n3, -d3 - 1);
          }
          throw E2.d(E2.R(p3, e4, o3));
        }
        if (s3 >= 0 && s3 <= 127) return (m3 << 2 | h3) >>> 0;
        for (o3 = t3; o3 < n3 && (c3 = O2.a.B(e4, o3), !(c3 > 127)); ++o3) ;
        throw E2.d(E2.R(p3, e4, o3));
      },
      vk(e4, t3, n3, r3) {
        var i3 = E2.vl(e4, t3, n3), a3 = (r3 & 3) + (i3 - t3), o3 = O2.c.ai(a3, 2) * 3, s3 = a3 & 3;
        return s3 !== 0 && i3 < n3 && (o3 += s3 - 1), o3 > 0 ? new Uint8Array(o3) : A2.tn();
      },
      vl(e4, t3, n3) {
        for (var r3, i3 = n3, a3 = i3, o3 = 0; a3 > t3 && o3 < 2; ) c$0: {
          if (--a3, r3 = O2.a.B(e4, a3), r3 === 61) {
            ++o3, i3 = a3;
            break c$0;
          }
          if ((r3 | 32) == 100) {
            if (a3 === t3) break;
            --a3, r3 = O2.a.B(e4, a3);
          }
          if (r3 === 51) {
            if (a3 === t3) break;
            --a3, r3 = O2.a.B(e4, a3);
          }
          if (r3 === 37) {
            ++o3, i3 = a3;
            break c$0;
          }
          break;
        }
        return i3;
      },
      pc(e4, t3, n3, r3) {
        var i3, a3;
        if (t3 === n3) return r3;
        for (i3 = -r3 - 1; i3 > 0; ) {
          if (a3 = O2.a.B(e4, t3), i3 === 3) {
            if (a3 === 61) {
              i3 -= 3, ++t3;
              break;
            }
            if (a3 === 37) {
              if (--i3, ++t3, t3 === n3) break;
              a3 = O2.a.B(e4, t3);
            } else break;
          }
          if ((i3 > 3 ? i3 - 3 : i3) === 2) {
            if (a3 !== 51 || (++t3, --i3, t3 === n3)) break;
            a3 = O2.a.B(e4, t3);
          }
          if ((a3 | 32) != 100 || (++t3, --i3, t3 === n3)) break;
        }
        if (t3 !== n3) throw E2.d(E2.R("Invalid padding character", e4, t3));
        return -i3 - 1;
      },
      ps(e4) {
        switch (e4) {
          case 65:
            return "Missing extension byte";
          case 67:
            return "Unexpected extension byte";
          case 69:
            return "Invalid UTF-8 byte";
          case 71:
            return "Overlong encoding";
          case 73:
            return "Out of unicode range";
          case 75:
            return "Encoded surrogate";
          case 77:
            return "Unfinished UTF-8 octet sequence";
          default:
            return "";
        }
      },
      vZ(e4, t3, n3) {
        var r3, i3, a3, o3 = n3 - t3, s3 = new Uint8Array(o3);
        for (r3 = D2.V(e4), i3 = 0; i3 < o3; ++i3) a3 = r3.i(e4, t3 + i3), s3[i3] = (a3 & 4294967040) >>> 0 ? 255 : a3;
        return s3;
      },
      fM: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3, this.c = null;
      }, "fM"),
      fN: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "fN"),
      mh: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.b = e4, this.c = t3, this.a = n3;
      }, "mh"),
      lD: /* @__PURE__ */ __name(function() {
      }, "lD"),
      lC: /* @__PURE__ */ __name(function() {
      }, "lC"),
      ha: /* @__PURE__ */ __name(function() {
      }, "ha"),
      hc: /* @__PURE__ */ __name(function() {
      }, "hc"),
      hb: /* @__PURE__ */ __name(function() {
      }, "hb"),
      lZ: /* @__PURE__ */ __name(function() {
        this.a = 0;
      }, "lZ"),
      hd: /* @__PURE__ */ __name(function() {
      }, "hd"),
      eJ: /* @__PURE__ */ __name(function() {
      }, "eJ"),
      fO: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.$ti = n3;
      }, "fO"),
      eN: /* @__PURE__ */ __name(function() {
      }, "eN"),
      eP: /* @__PURE__ */ __name(function() {
      }, "eP"),
      hW: /* @__PURE__ */ __name(function() {
      }, "hW"),
      iQ: /* @__PURE__ */ __name(function() {
      }, "iQ"),
      iR: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "iR"),
      lr: /* @__PURE__ */ __name(function() {
      }, "lr"),
      ls: /* @__PURE__ */ __name(function() {
      }, "ls"),
      ef: /* @__PURE__ */ __name(function() {
      }, "ef"),
      mu: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "mu"),
      lA: /* @__PURE__ */ __name(function() {
      }, "lA"),
      lB: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "lB"),
      fV: /* @__PURE__ */ __name(function(e4) {
        this.a = e4, this.b = 16, this.c = 0;
      }, "fV"),
      cM(e4, t3) {
        var n3 = E2.oY(e4, t3);
        if (n3 != null) return n3;
        throw E2.d(E2.R(e4, null, null));
      },
      u6(e4) {
        return e4 instanceof E2.c7 ? e4.k(0) : "Instance of '" + E2.b(E2.ka(e4)) + "'";
      },
      u7(e4, t3) {
        throw e4 = E2.d(e4), e4.stack = D2.as(t3), e4;
      },
      U(e4, t3, n3, r3) {
        var i3, a3 = D2.b8(e4, r3);
        if (e4 !== 0 && t3 != null) for (i3 = 0; i3 < e4; ++i3) a3[i3] = t3;
        return a3;
      },
      uK(e4, t3) {
        var n3, r3 = E2.a([], t3.h("D<0>"));
        for (n3 = e4.gH(e4); n3.q(); ) r3.push(n3.gt());
        return r3;
      },
      bc(e4, t3, n3) {
        var r3;
        return t3 ? E2.oI(e4, n3) : (r3 = D2.nr(E2.oI(e4, n3)), r3);
      },
      oI(e4, t3) {
        var n3, r3;
        if (Array.isArray(e4)) return E2.a(e4.slice(0), t3.h("D<0>"));
        for (n3 = E2.a([], t3.h("D<0>")), r3 = D2.aA(e4); r3.q(); ) n3.push(r3.gt());
        return n3;
      },
      oJ(e4, t3, n3, r3) {
        var i3, a3 = D2.b8(e4, r3);
        for (i3 = 0; i3 < e4; ++i3) a3[i3] = t3.$1(i3);
        return a3;
      },
      p2(e4, t3, n3) {
        return N2.bm.b(e4) ? E2.v2(e4, t3, E2.aQ(t3, n3, e4.length)) : E2.va(e4, t3, n3);
      },
      va(e4, t3, n3) {
        var r3, i3, a3, o3, s3 = null;
        if (t3 < 0) throw E2.d(E2.Y(t3, 0, e4.length, s3, s3));
        if (r3 = n3 == null, !r3 && n3 < t3) throw E2.d(E2.Y(n3, t3, e4.length, s3, s3));
        for (i3 = new E2.aa(e4, e4.length, E2.ak(e4).h("aa<p.E>")), a3 = 0; a3 < t3; ++a3) if (!i3.q()) throw E2.d(E2.Y(t3, 0, a3, s3, s3));
        if (o3 = [], r3) for (; i3.q(); ) o3.push(i3.d);
        else for (a3 = t3; a3 < n3; ++a3) {
          if (!i3.q()) throw E2.d(E2.Y(n3, t3, a3, s3, s3));
          o3.push(i3.d);
        }
        return E2.v0(o3);
      },
      nx(e4) {
        return new E2.iK(e4, E2.uk(e4, false, true, false, false, false));
      },
      ny(e4, t3, n3) {
        var r3 = D2.aA(t3);
        if (!r3.q()) return e4;
        if (n3.length === 0) do
          e4 += E2.b(r3.gt());
        while (r3.q());
        else for (e4 += E2.b(r3.gt()); r3.q(); ) e4 = e4 + n3 + E2.b(r3.gt());
        return e4;
      },
      uT(e4, t3, n3, r3, i3) {
        return new E2.dH(e4, t3, n3, r3, i3);
      },
      oy(e4) {
        var t3 = Math.abs(e4), n3 = e4 < 0 ? "-" : "";
        return t3 >= 1e3 ? "" + e4 : t3 >= 100 ? n3 + "0" + t3 : t3 >= 10 ? n3 + "00" + t3 : n3 + "000" + t3;
      },
      u5(e4) {
        var t3 = Math.abs(e4), n3 = e4 < 0 ? "-" : "+";
        return t3 >= 1e5 ? n3 + t3 : n3 + "0" + t3;
      },
      oz(e4) {
        return e4 >= 100 ? "" + e4 : e4 >= 10 ? "0" + e4 : "00" + e4;
      },
      b6(e4) {
        return e4 >= 10 ? "" + e4 : "0" + e4;
      },
      cS(e4) {
        return typeof e4 == "number" || E2.eu(e4) || e4 == null ? D2.as(e4) : typeof e4 == "string" ? JSON.stringify(e4) : E2.u6(e4);
      },
      u8(e4, t3) {
        E2.bU(e4, "error", N2.K), E2.bU(t3, "stackTrace", N2.gm), E2.u7(e4, t3), E2.bg(M2.g);
      },
      eG(e4) {
        return new E2.eF(e4);
      },
      K(e4, t3) {
        return new E2.at(false, null, t3, e4);
      },
      h7(e4, t3, n3) {
        return new E2.at(true, e4, t3, n3);
      },
      h8(e4, t3) {
        return e4;
      },
      Y(e4, t3, n3, r3, i3) {
        return new E2.dL(t3, n3, true, e4, r3, "Invalid value");
      },
      aQ(e4, t3, n3) {
        if (0 > e4 || e4 > n3) throw E2.d(E2.Y(e4, 0, n3, "start", null));
        if (t3 != null) {
          if (e4 > t3 || t3 > n3) throw E2.d(E2.Y(t3, e4, n3, "end", null));
          return t3;
        }
        return n3;
      },
      aW(e4, t3) {
        if (e4 < 0) throw E2.d(E2.Y(e4, 0, null, t3, null));
        return e4;
      },
      eW(e4, t3, n3, r3, i3) {
        return new E2.eV(t3, true, e4, i3, "Index out of range");
      },
      ad(e4) {
        return new E2.fz(e4);
      },
      p4(e4) {
        return new E2.fu(e4);
      },
      d2(e4) {
        return new E2.bJ(e4);
      },
      ag(e4) {
        return new E2.eO(e4);
      },
      u9(e4) {
        return new E2.e_(e4);
      },
      R(e4, t3, n3) {
        return new E2.aK(e4, t3, n3);
      },
      oE(e4, t3, n3) {
        return e4 <= 0 ? new E2.b7(n3.h("b7<0>")) : new E2.e0(e4, t3, n3.h("e0<0>"));
      },
      oK(e4, t3, n3, r3, i3) {
        return new E2.c6(e4, t3.h("@<0>").I(n3).I(r3).I(i3).h("c6<1,2,3,4>"));
      },
      k6(e4) {
        var t3, n3, r3 = A2.to();
        for (t3 = e4.length, n3 = 0; n3 < t3; ++n3) r3 = r3 + D2.bY(e4[n3]) & 536870911, r3 = r3 + ((r3 & 524287) << 10) & 536870911, r3 ^= r3 >>> 6;
        return r3 = r3 + ((r3 & 67108863) << 3) & 536870911, r3 ^= r3 >>> 11, r3 + ((r3 & 16383) << 15) & 536870911;
      },
      p6(e4) {
        var t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3, y3, b3, x3, S3, C3, w3 = null, T3 = e4.length;
        if (T3 >= 5) {
          if (t3 = E2.pI(e4, 0), t3 === 0) return n3 = E2.lw(T3 < T3 ? O2.a.u(e4, 0, T3) : e4, 5, w3), n3.gbo(n3);
          if (t3 === 32) return n3 = E2.lw(O2.a.u(e4, 5, T3), 0, w3), n3.gbo(n3);
        }
        return r3 = E2.U(8, 0, false, N2.S), r3[0] = 0, r3[1] = -1, r3[2] = -1, r3[7] = -1, r3[3] = 0, r3[4] = 0, r3[5] = T3, r3[6] = T3, E2.pG(e4, 0, T3, 0, r3) >= 14 && (r3[7] = T3), i3 = r3[1], i3 >= 0 && E2.pG(e4, 0, i3, 20, r3) === 20 && (r3[7] = i3), a3 = r3[2] + 1, o3 = r3[3], s3 = r3[4], c3 = r3[5], l3 = r3[6], l3 < c3 && (c3 = l3), s3 < a3 ? s3 = c3 : s3 <= i3 && (s3 = i3 + 1), o3 < a3 && (o3 = s3), u3 = r3[7] < 0, u3 ? a3 > i3 + 3 ? (d3 = w3, u3 = false) : (n3 = o3 > 0, n3 && o3 + 1 === s3 ? (d3 = w3, u3 = false) : (f3 = O2.a.U(e4, "\\", s3) ? true : a3 > 0 ? O2.a.U(e4, "\\", a3 - 1) || O2.a.U(e4, "\\", a3 - 2) : false, f3 ? (d3 = w3, u3 = false) : (f3 = c3 < T3 && c3 === s3 + 2 && O2.a.U(e4, "..", s3) ? true : c3 > s3 + 2 && O2.a.U(e4, "/..", c3 - 3), f3 ? (d3 = w3, u3 = false) : (i3 === 4 ? O2.a.U(e4, "file", 0) ? (a3 <= 0 ? (O2.a.U(e4, "/", s3) ? (p3 = "file://", m3 = 2) : (p3 = "file:///", m3 = 3), e4 = p3 + O2.a.u(e4, s3, T3), i3 -= 0, n3 = m3 - 0, c3 += n3, l3 += n3, T3 = e4.length, a3 = 7, o3 = 7, s3 = 7) : s3 === c3 && (++l3, h3 = c3 + 1, e4 = O2.a.aH(e4, s3, c3, "/"), ++T3, c3 = h3), d3 = "file") : O2.a.U(e4, "http", 0) ? (n3 && o3 + 3 === s3 && O2.a.U(e4, "80", o3 + 1) && (l3 -= 3, g3 = s3 - 3, c3 -= 3, e4 = O2.a.aH(e4, o3, s3, ""), T3 -= 3, s3 = g3), d3 = "http") : d3 = w3 : i3 === 5 && O2.a.U(e4, "https", 0) ? (n3 && o3 + 4 === s3 && O2.a.U(e4, "443", o3 + 1) && (l3 -= 4, g3 = s3 - 4, c3 -= 4, e4 = O2.a.aH(e4, o3, s3, ""), T3 -= 3, s3 = g3), d3 = "https") : d3 = w3, u3 = true)))) : d3 = w3, u3 ? (T3 < e4.length && (e4 = O2.a.u(e4, 0, T3), i3 -= 0, a3 -= 0, o3 -= 0, s3 -= 0, c3 -= 0, l3 -= 0), new E2.fP(e4, i3, a3, o3, s3, c3, l3, d3)) : (d3 ?? (i3 > 0 ? d3 = E2.vS(e4, 0, i3) : (i3 === 0 && (E2.dc(e4, 0, "Invalid empty scheme"), E2.bg(M2.g)), d3 = "")), a3 > 0 ? (_3 = i3 + 3, v3 = _3 < a3 ? E2.vT(e4, _3, a3 - 1) : "", y3 = E2.vO(e4, a3, o3, false), n3 = o3 + 1, n3 < s3 ? (b3 = E2.oY(O2.a.u(e4, n3, s3), w3), x3 = E2.vQ(b3 ?? E2.Z(E2.R("Invalid port", e4, n3)), d3)) : x3 = w3) : (x3 = w3, y3 = x3, v3 = ""), S3 = E2.vP(e4, s3, c3, w3, d3, y3 != null), C3 = c3 < l3 ? E2.vR(e4, c3 + 1, l3, w3) : w3, E2.vJ(d3, v3, y3, x3, S3, C3, l3 < T3 ? E2.vN(e4, l3 + 1, T3) : w3));
      },
      vd(e4, t3, n3) {
        var r3, i3, a3, o3, s3, c3, l3 = "IPv4 address should contain exactly 4 parts", u3 = "each part must be in the range 0..255", d3 = new E2.lx(e4), f3 = /* @__PURE__ */ new Uint8Array(4);
        for (r3 = t3, i3 = r3, a3 = 0; r3 < n3; ++r3) o3 = O2.a.B(e4, r3), o3 === 46 ? (a3 === 3 && d3.$2(l3, r3), s3 = E2.cM(O2.a.u(e4, i3, r3), null), s3 > 255 && d3.$2(u3, i3), c3 = a3 + 1, f3[a3] = s3, i3 = r3 + 1, a3 = c3) : (o3 ^ 48) > 9 && d3.$2("invalid character", r3);
        return a3 !== 3 && d3.$2(l3, n3), s3 = E2.cM(O2.a.u(e4, i3, n3), null), s3 > 255 && d3.$2(u3, i3), f3[a3] = s3, f3;
      },
      p7(e4, t3, n3) {
        var r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3 = null, v3 = new E2.ly(e4), y3 = new E2.lz(v3, e4);
        for (e4.length < 2 && v3.$2("address is too short", _3), r3 = E2.a([], N2.Z), i3 = t3, a3 = i3, o3 = false, s3 = false; i3 < n3; ++i3) c3 = O2.a.B(e4, i3), c3 === 58 ? (i3 === t3 && (++i3, O2.a.B(e4, i3) !== 58 && v3.$2("invalid start colon.", i3), a3 = i3), i3 === a3 ? (o3 && v3.$2("only one wildcard `::` is allowed", i3), r3.push(-1), o3 = true) : r3.push(y3.$2(a3, i3)), a3 = i3 + 1) : c3 === 46 && (s3 = true);
        for (r3.length === 0 && v3.$2("too few parts", _3), l3 = a3 === n3, u3 = O2.d.gaV(r3), l3 && u3 !== -1 && v3.$2("expected a part after last `:`", n3), l3 || (s3 ? (d3 = E2.vd(e4, a3, n3), r3.push((d3[0] << 8 | d3[1]) >>> 0), r3.push((d3[2] << 8 | d3[3]) >>> 0)) : r3.push(y3.$2(a3, n3))), o3 ? r3.length > 7 && v3.$2("an address with a wildcard must have less than 7 parts", _3) : r3.length !== 8 && v3.$2("an address without a wildcard must contain exactly 8 parts", _3), f3 = /* @__PURE__ */ new Uint8Array(16), u3 = r3.length, p3 = 9 - u3, i3 = 0, m3 = 0; i3 < u3; ++i3) if (h3 = r3[i3], h3 === -1) for (g3 = 0; g3 < p3; ++g3) f3[m3] = 0, f3[m3 + 1] = 0, m3 += 2;
        else f3[m3] = O2.c.ai(h3, 8), f3[m3 + 1] = h3 & 255, m3 += 2;
        return f3;
      },
      vJ(e4, t3, n3, r3, i3, a3, o3) {
        return new E2.en(e4, t3, n3, r3, i3, a3, o3);
      },
      pm(e4) {
        return e4 === "http" ? 80 : e4 === "https" ? 443 : 0;
      },
      dc(e4, t3, n3) {
        throw E2.d(E2.R(n3, e4, t3));
      },
      vQ(e4, t3) {
        return e4 === E2.pm(t3) ? null : e4;
      },
      vO(e4, t3, n3, r3) {
        var i3, a3, o3, s3, c3, l3;
        if (t3 === n3) return "";
        if (O2.a.B(e4, t3) === 91) return i3 = n3 - 1, O2.a.B(e4, i3) !== 93 && (E2.dc(e4, t3, "Missing end `]` to match `[` in host"), E2.bg(M2.g)), a3 = t3 + 1, o3 = E2.vL(e4, a3, i3), o3 < i3 ? (s3 = o3 + 1, c3 = E2.pr(e4, O2.a.U(e4, "25", s3) ? o3 + 3 : s3, i3, "%25")) : c3 = "", E2.p7(e4, a3, o3), O2.a.u(e4, t3, o3).toLowerCase() + c3 + "]";
        for (l3 = t3; l3 < n3; ++l3) if (O2.a.B(e4, l3) === 58) return o3 = O2.a.bg(e4, "%", t3), o3 = o3 >= t3 && o3 < n3 ? o3 : n3, o3 < n3 ? (s3 = o3 + 1, c3 = E2.pr(e4, O2.a.U(e4, "25", s3) ? o3 + 3 : s3, n3, "%25")) : c3 = "", E2.p7(e4, t3, o3), "[" + O2.a.u(e4, t3, o3) + c3 + "]";
        return E2.vV(e4, t3, n3);
      },
      vL(e4, t3, n3) {
        var r3 = O2.a.bg(e4, "%", t3);
        return r3 >= t3 && r3 < n3 ? r3 : n3;
      },
      pr(e4, t3, n3, r3) {
        var i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3 = r3 === "" ? null : new E2.ac(r3);
        for (i3 = t3, a3 = i3, o3 = true; i3 < n3; ) if (s3 = O2.a.B(e4, i3), s3 === 37) {
          if (c3 = E2.nI(e4, i3, true), l3 = c3 == null, l3 && o3) {
            i3 += 3;
            continue;
          }
          m3 ??= new E2.ac(""), u3 = m3.a += O2.a.u(e4, a3, i3), l3 ? c3 = O2.a.u(e4, i3, i3 + 3) : c3 === "%" && (E2.dc(e4, i3, "ZoneID should not contain % anymore"), E2.bg(M2.g)), m3.a = u3 + c3, i3 += 3, a3 = i3, o3 = true;
        } else s3 < 127 && O2.av[s3 >>> 4] & 1 << (s3 & 15) ? (o3 && 65 <= s3 && 90 >= s3 && (m3 ??= new E2.ac(""), a3 < i3 && (m3.a += O2.a.u(e4, a3, i3), a3 = i3), o3 = false), ++i3) : ((s3 & 64512) == 55296 && i3 + 1 < n3 ? (d3 = O2.a.B(e4, i3 + 1), (d3 & 64512) == 56320 ? (s3 = (s3 & 1023) << 10 | d3 & 1023 | 65536, f3 = 2) : f3 = 1) : f3 = 1, p3 = O2.a.u(e4, a3, i3), m3 ??= new E2.ac(""), l3 = m3, l3.a += p3, l3.a += E2.nH(s3), i3 += f3, a3 = i3);
        return m3 == null ? O2.a.u(e4, t3, n3) : (a3 < n3 && (m3.a += O2.a.u(e4, a3, n3)), l3 = m3.a, l3.charCodeAt(0), l3);
      },
      vV(e4, t3, n3) {
        var r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3;
        for (r3 = t3, i3 = r3, a3 = null, o3 = true; r3 < n3; ) if (s3 = O2.a.B(e4, r3), s3 === 37) {
          if (c3 = E2.nI(e4, r3, true), l3 = c3 == null, l3 && o3) {
            r3 += 3;
            continue;
          }
          a3 ??= new E2.ac(""), u3 = O2.a.u(e4, i3, r3), d3 = a3.a += o3 ? u3 : u3.toLowerCase(), l3 ? (c3 = O2.a.u(e4, r3, r3 + 3), f3 = 3) : c3 === "%" ? (c3 = "%25", f3 = 1) : f3 = 3, a3.a = d3 + c3, r3 += f3, i3 = r3, o3 = true;
        } else s3 < 127 && O2.db[s3 >>> 4] & 1 << (s3 & 15) ? (o3 && 65 <= s3 && 90 >= s3 && (a3 ??= new E2.ac(""), i3 < r3 && (a3.a += O2.a.u(e4, i3, r3), i3 = r3), o3 = false), ++r3) : s3 <= 93 && O2.an[s3 >>> 4] & 1 << (s3 & 15) ? (E2.dc(e4, r3, "Invalid character"), E2.bg(M2.g)) : ((s3 & 64512) == 55296 && r3 + 1 < n3 ? (p3 = O2.a.B(e4, r3 + 1), (p3 & 64512) == 56320 ? (s3 = (s3 & 1023) << 10 | p3 & 1023 | 65536, f3 = 2) : f3 = 1) : f3 = 1, u3 = O2.a.u(e4, i3, r3), o3 || (u3 = u3.toLowerCase()), a3 ??= new E2.ac(""), l3 = a3, l3.a += u3, l3.a += E2.nH(s3), r3 += f3, i3 = r3);
        return a3 == null ? O2.a.u(e4, t3, n3) : (i3 < n3 && (u3 = O2.a.u(e4, i3, n3), a3.a += o3 ? u3 : u3.toLowerCase()), l3 = a3.a, l3.charCodeAt(0), l3);
      },
      vS(e4, t3, n3) {
        var r3, i3, a3, o3 = M2.g;
        if (t3 === n3) return "";
        for (E2.po(O2.a.J(e4, t3)) || (E2.dc(e4, t3, "Scheme not starting with alphabetic character"), E2.bg(o3)), r3 = t3, i3 = false; r3 < n3; ++r3) a3 = O2.a.J(e4, r3), a3 < 128 && O2.as[a3 >>> 4] & 1 << (a3 & 15) || (E2.dc(e4, r3, "Illegal scheme character"), E2.bg(o3)), 65 <= a3 && a3 <= 90 && (i3 = true);
        return e4 = O2.a.u(e4, t3, n3), E2.vK(i3 ? e4.toLowerCase() : e4);
      },
      vK(e4) {
        return e4 === "http" ? "http" : e4 === "file" ? "file" : e4 === "https" ? "https" : e4 === "package" ? "package" : e4;
      },
      vT(e4, t3, n3) {
        return E2.eo(e4, t3, n3, O2.cQ, false, false);
      },
      vP(e4, t3, n3, r3, i3, a3) {
        var o3 = i3 === "file", s3 = o3 || a3, c3 = E2.eo(e4, t3, n3, O2.ax, true, true);
        if (c3.length === 0) {
          if (o3) return "/";
        } else s3 && !O2.a.Y(c3, "/") && (c3 = "/" + c3);
        return E2.vU(c3, i3, a3);
      },
      vU(e4, t3, n3) {
        var r3 = t3.length === 0;
        return r3 && !n3 && !O2.a.Y(e4, "/") && !O2.a.Y(e4, "\\") ? E2.vW(e4, !r3 || n3) : E2.vX(e4);
      },
      vR(e4, t3, n3, r3) {
        return E2.eo(e4, t3, n3, O2.D, true, false);
      },
      vN(e4, t3, n3) {
        return E2.eo(e4, t3, n3, O2.D, true, false);
      },
      nI(e4, t3, n3) {
        var r3, i3, a3, o3, s3, c3 = t3 + 2;
        return c3 >= e4.length || (r3 = O2.a.B(e4, t3 + 1), i3 = O2.a.B(e4, c3), a3 = E2.mW(r3), o3 = E2.mW(i3), a3 < 0 || o3 < 0) ? "%" : (s3 = a3 * 16 + o3, s3 < 127 && O2.av[O2.c.ai(s3, 4)] & 1 << (s3 & 15) ? E2.be(n3 && 65 <= s3 && 90 >= s3 ? (s3 | 32) >>> 0 : s3) : r3 >= 97 || i3 >= 97 ? O2.a.u(e4, t3, t3 + 3).toUpperCase() : null);
      },
      nH(e4) {
        var t3, n3, r3, i3, a3, o3 = "0123456789ABCDEF";
        if (e4 < 128) t3 = /* @__PURE__ */ new Uint8Array(3), t3[0] = 37, t3[1] = O2.a.J(o3, e4 >>> 4), t3[2] = O2.a.J(o3, e4 & 15);
        else for (e4 > 2047 ? e4 > 65535 ? (n3 = 240, r3 = 4) : (n3 = 224, r3 = 3) : (n3 = 192, r3 = 2), t3 = new Uint8Array(3 * r3), i3 = 0; --r3, r3 >= 0; n3 = 128) a3 = O2.c.dT(e4, 6 * r3) & 63 | n3, t3[i3] = 37, t3[i3 + 1] = O2.a.J(o3, a3 >>> 4), t3[i3 + 2] = O2.a.J(o3, a3 & 15), i3 += 3;
        return E2.p2(t3, 0, null);
      },
      eo(e4, t3, n3, r3, i3, a3) {
        return E2.pq(e4, t3, n3, r3, i3, a3) ?? O2.a.u(e4, t3, n3);
      },
      pq(e4, t3, n3, r3, i3, a3) {
        var o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3 = null;
        for (o3 = !i3, s3 = t3, c3 = s3, l3 = g3; s3 < n3; ) if (u3 = O2.a.B(e4, s3), u3 < 127 && r3[u3 >>> 4] & 1 << (u3 & 15)) ++s3;
        else {
          if (u3 === 37) {
            if (d3 = E2.nI(e4, s3, false), d3 == null) {
              s3 += 3;
              continue;
            }
            d3 === "%" ? (d3 = "%25", f3 = 1) : f3 = 3;
          } else u3 === 92 && a3 ? (d3 = "/", f3 = 1) : o3 && u3 <= 93 && O2.an[u3 >>> 4] & 1 << (u3 & 15) ? (E2.dc(e4, s3, "Invalid character"), E2.bg(M2.g), f3 = g3, d3 = f3) : ((u3 & 64512) == 55296 ? (p3 = s3 + 1, p3 < n3 ? (m3 = O2.a.B(e4, p3), (m3 & 64512) == 56320 ? (u3 = (u3 & 1023) << 10 | m3 & 1023 | 65536, f3 = 2) : f3 = 1) : f3 = 1) : f3 = 1, d3 = E2.nH(u3));
          l3 ??= new E2.ac(""), p3 = l3, h3 = p3.a += O2.a.u(e4, c3, s3), p3.a = h3 + E2.b(d3), s3 += f3, c3 = s3;
        }
        return l3 == null ? g3 : (c3 < n3 && (l3.a += O2.a.u(e4, c3, n3)), o3 = l3.a, o3.charCodeAt(0), o3);
      },
      pp(e4) {
        return O2.a.Y(e4, ".") ? true : O2.a.bR(e4, "/.") !== -1;
      },
      vX(e4) {
        var t3, n3, r3, i3, a3, o3;
        if (!E2.pp(e4)) return e4;
        for (t3 = E2.a([], N2.s), n3 = e4.split("/"), r3 = n3.length, i3 = false, a3 = 0; a3 < r3; ++a3) o3 = n3[a3], D2.af(o3, "..") ? (t3.length !== 0 && (t3.pop(), t3.length === 0 && t3.push("")), i3 = true) : o3 === "." ? i3 = true : (t3.push(o3), i3 = false);
        return i3 && t3.push(""), O2.d.cQ(t3, "/");
      },
      vW(e4, t3) {
        var n3, r3, i3, a3, o3, s3;
        if (!E2.pp(e4)) return t3 ? e4 : E2.pn(e4);
        for (n3 = E2.a([], N2.s), r3 = e4.split("/"), i3 = r3.length, a3 = false, o3 = 0; o3 < i3; ++o3) s3 = r3[o3], s3 === ".." ? n3.length !== 0 && O2.d.gaV(n3) !== ".." ? (n3.pop(), a3 = true) : (n3.push(".."), a3 = false) : s3 === "." ? a3 = true : (n3.push(s3), a3 = false);
        return r3 = n3.length, r3 = r3 === 0 || r3 === 1 && n3[0].length === 0, r3 ? "./" : ((a3 || O2.d.gaV(n3) === "..") && n3.push(""), t3 || (n3[0] = E2.pn(n3[0])), O2.d.cQ(n3, "/"));
      },
      pn(e4) {
        var t3, n3, r3 = e4.length;
        if (r3 >= 2 && E2.po(O2.a.J(e4, 0))) for (t3 = 1; t3 < r3; ++t3) {
          if (n3 = O2.a.J(e4, t3), n3 === 58) return O2.a.u(e4, 0, t3) + "%3A" + O2.a.bu(e4, t3 + 1);
          if (n3 > 127 || !(O2.as[n3 >>> 4] & 1 << (n3 & 15))) break;
        }
        return e4;
      },
      vM(e4, t3) {
        var n3, r3, i3;
        for (n3 = 0, r3 = 0; r3 < 2; ++r3) if (i3 = O2.a.B(e4, t3 + r3), 48 <= i3 && i3 <= 57) n3 = n3 * 16 + i3 - 48;
        else if (i3 |= 32, 97 <= i3 && i3 <= 102) n3 = n3 * 16 + i3 - 87;
        else throw E2.d(E2.K("Invalid URL encoding", null));
        return n3;
      },
      vY(e4, t3, n3, r3, i3) {
        for (var a3, o3, s3, c3, l3 = t3; ; ) {
          if (!(l3 < n3)) {
            a3 = true;
            break;
          }
          if (o3 = O2.a.B(e4, l3), s3 = o3 <= 127 ? o3 === 37 : true, s3) {
            a3 = false;
            break;
          }
          ++l3;
        }
        if (a3) {
          if (s3 = O2.ac === r3, s3) return O2.a.u(e4, t3, n3);
          c3 = new E2.c8(O2.a.u(e4, t3, n3));
        } else for (c3 = E2.a([], N2.Z), s3 = e4.length, l3 = t3; l3 < n3; ++l3) {
          if (o3 = O2.a.B(e4, l3), o3 > 127) throw E2.d(E2.K("Illegal percent encoding in URI", null));
          if (o3 === 37) {
            if (l3 + 3 > s3) throw E2.d(E2.K("Truncated URI", null));
            c3.push(E2.vM(e4, l3 + 1)), l3 += 2;
          } else c3.push(o3);
        }
        return O2.em.e_(c3);
      },
      po(e4) {
        var t3 = e4 | 32;
        return 97 <= t3 && t3 <= 122;
      },
      p5(e4) {
        var t3;
        if (e4.length >= 5) {
          if (t3 = E2.pI(e4, 0), t3 === 0) return E2.lw(e4, 5, null);
          if (t3 === 32) return E2.lw(O2.a.bu(e4, 5), 0, null);
        }
        throw E2.d(E2.R("Does not start with 'data:'", e4, 0));
      },
      lw(e4, t3, n3) {
        var r3, i3, a3, o3, s3, c3, l3, u3, d3 = "Invalid MIME type", f3 = E2.a([t3 - 1], N2.Z);
        for (r3 = e4.length, i3 = t3, a3 = -1, o3 = null; i3 < r3 && (o3 = O2.a.J(e4, i3), o3 !== 44 && o3 !== 59); ++i3) if (o3 === 47) {
          if (a3 < 0) {
            a3 = i3;
            continue;
          }
          throw E2.d(E2.R(d3, e4, i3));
        }
        if (a3 < 0 && i3 > t3) throw E2.d(E2.R(d3, e4, i3));
        for (; o3 !== 44; ) {
          for (f3.push(i3), ++i3, s3 = -1; i3 < r3; ++i3) if (o3 = O2.a.J(e4, i3), o3 === 61) s3 < 0 && (s3 = i3);
          else if (o3 === 59 || o3 === 44) break;
          if (s3 >= 0) f3.push(s3);
          else {
            if (c3 = O2.d.gaV(f3), o3 !== 44 || i3 !== c3 + 7 || !O2.a.U(e4, "base64", c3 + 1)) throw E2.d(E2.R("Expecting '='", e4, i3));
            break;
          }
        }
        return f3.push(i3), l3 = i3 + 1, (f3.length & 1) == 1 ? e4 = O2.b7.ee(e4, l3, r3) : (u3 = E2.pq(e4, l3, r3, O2.D, true, false), u3 != null && (e4 = O2.a.aH(e4, l3, r3, u3))), new E2.lv(e4, f3, n3);
      },
      w6() {
        var e4, t3, n3, r3, i3, a3 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=", o3 = ".", s3 = ":", c3 = "/", l3 = "\\", u3 = "?", d3 = "#", f3 = "/\\", p3 = E2.a(Array(22), N2.gN);
        for (e4 = 0; e4 < 22; ++e4) p3[e4] = /* @__PURE__ */ new Uint8Array(96);
        return t3 = new E2.mB(p3), n3 = new E2.mC(), r3 = new E2.mD(), i3 = t3.$2(0, 225), n3.$3(i3, a3, 1), n3.$3(i3, o3, 14), n3.$3(i3, s3, 34), n3.$3(i3, c3, 3), n3.$3(i3, l3, 227), n3.$3(i3, u3, 172), n3.$3(i3, d3, 205), i3 = t3.$2(14, 225), n3.$3(i3, a3, 1), n3.$3(i3, o3, 15), n3.$3(i3, s3, 34), n3.$3(i3, f3, 234), n3.$3(i3, u3, 172), n3.$3(i3, d3, 205), i3 = t3.$2(15, 225), n3.$3(i3, a3, 1), n3.$3(i3, "%", 225), n3.$3(i3, s3, 34), n3.$3(i3, c3, 9), n3.$3(i3, l3, 233), n3.$3(i3, u3, 172), n3.$3(i3, d3, 205), i3 = t3.$2(1, 225), n3.$3(i3, a3, 1), n3.$3(i3, s3, 34), n3.$3(i3, c3, 10), n3.$3(i3, l3, 234), n3.$3(i3, u3, 172), n3.$3(i3, d3, 205), i3 = t3.$2(2, 235), n3.$3(i3, a3, 139), n3.$3(i3, c3, 131), n3.$3(i3, l3, 131), n3.$3(i3, o3, 146), n3.$3(i3, u3, 172), n3.$3(i3, d3, 205), i3 = t3.$2(3, 235), n3.$3(i3, a3, 11), n3.$3(i3, c3, 68), n3.$3(i3, l3, 68), n3.$3(i3, o3, 18), n3.$3(i3, u3, 172), n3.$3(i3, d3, 205), i3 = t3.$2(4, 229), n3.$3(i3, a3, 5), r3.$3(i3, "AZ", 229), n3.$3(i3, s3, 102), n3.$3(i3, "@", 68), n3.$3(i3, "[", 232), n3.$3(i3, c3, 138), n3.$3(i3, l3, 138), n3.$3(i3, u3, 172), n3.$3(i3, d3, 205), i3 = t3.$2(5, 229), n3.$3(i3, a3, 5), r3.$3(i3, "AZ", 229), n3.$3(i3, s3, 102), n3.$3(i3, "@", 68), n3.$3(i3, c3, 138), n3.$3(i3, l3, 138), n3.$3(i3, u3, 172), n3.$3(i3, d3, 205), i3 = t3.$2(6, 231), r3.$3(i3, "19", 7), n3.$3(i3, "@", 68), n3.$3(i3, c3, 138), n3.$3(i3, l3, 138), n3.$3(i3, u3, 172), n3.$3(i3, d3, 205), i3 = t3.$2(7, 231), r3.$3(i3, "09", 7), n3.$3(i3, "@", 68), n3.$3(i3, c3, 138), n3.$3(i3, l3, 138), n3.$3(i3, u3, 172), n3.$3(i3, d3, 205), n3.$3(t3.$2(8, 8), "]", 5), i3 = t3.$2(9, 235), n3.$3(i3, a3, 11), n3.$3(i3, o3, 16), n3.$3(i3, f3, 234), n3.$3(i3, u3, 172), n3.$3(i3, d3, 205), i3 = t3.$2(16, 235), n3.$3(i3, a3, 11), n3.$3(i3, o3, 17), n3.$3(i3, f3, 234), n3.$3(i3, u3, 172), n3.$3(i3, d3, 205), i3 = t3.$2(17, 235), n3.$3(i3, a3, 11), n3.$3(i3, c3, 9), n3.$3(i3, l3, 233), n3.$3(i3, u3, 172), n3.$3(i3, d3, 205), i3 = t3.$2(10, 235), n3.$3(i3, a3, 11), n3.$3(i3, o3, 18), n3.$3(i3, c3, 10), n3.$3(i3, l3, 234), n3.$3(i3, u3, 172), n3.$3(i3, d3, 205), i3 = t3.$2(18, 235), n3.$3(i3, a3, 11), n3.$3(i3, o3, 19), n3.$3(i3, f3, 234), n3.$3(i3, u3, 172), n3.$3(i3, d3, 205), i3 = t3.$2(19, 235), n3.$3(i3, a3, 11), n3.$3(i3, f3, 234), n3.$3(i3, u3, 172), n3.$3(i3, d3, 205), i3 = t3.$2(11, 235), n3.$3(i3, a3, 11), n3.$3(i3, c3, 10), n3.$3(i3, l3, 234), n3.$3(i3, u3, 172), n3.$3(i3, d3, 205), i3 = t3.$2(12, 236), n3.$3(i3, a3, 12), n3.$3(i3, u3, 12), n3.$3(i3, d3, 205), i3 = t3.$2(13, 237), n3.$3(i3, a3, 13), n3.$3(i3, u3, 13), r3.$3(t3.$2(20, 245), "az", 21), i3 = t3.$2(21, 245), r3.$3(i3, "az", 21), r3.$3(i3, "09", 21), n3.$3(i3, "+-.", 21), p3;
      },
      pG(e4, t3, n3, r3, i3) {
        var a3, o3, s3, c3, l3 = A2.ts();
        for (a3 = t3; a3 < n3; ++a3) o3 = l3[r3], s3 = O2.a.J(e4, a3) ^ 96, c3 = o3[s3 > 95 ? 31 : s3], r3 = c3 & 31, i3[c3 >>> 5] = a3;
        return r3;
      },
      pI(e4, t3) {
        return ((O2.a.J(e4, t3 + 4) ^ 58) * 3 | O2.a.J(e4, t3) ^ 100 | O2.a.J(e4, t3 + 1) ^ 97 | O2.a.J(e4, t3 + 2) ^ 116 | O2.a.J(e4, t3 + 3) ^ 97) >>> 0;
      },
      k2: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "k2"),
      dp: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "dp"),
      m2: /* @__PURE__ */ __name(function() {
      }, "m2"),
      H: /* @__PURE__ */ __name(function() {
      }, "H"),
      eF: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "eF"),
      aG: /* @__PURE__ */ __name(function() {
      }, "aG"),
      fg: /* @__PURE__ */ __name(function() {
      }, "fg"),
      at: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.a = e4, i3.b = t3, i3.c = n3, i3.d = r3;
      }, "at"),
      dL: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3) {
        var o3 = this;
        o3.e = e4, o3.f = t3, o3.a = n3, o3.b = r3, o3.c = i3, o3.d = a3;
      }, "dL"),
      eV: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.f = e4, a3.a = t3, a3.b = n3, a3.c = r3, a3.d = i3;
      }, "eV"),
      dH: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.a = e4, a3.b = t3, a3.c = n3, a3.d = r3, a3.e = i3;
      }, "dH"),
      fz: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "fz"),
      fu: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "fu"),
      bJ: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "bJ"),
      eO: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "eO"),
      fi: /* @__PURE__ */ __name(function() {
      }, "fi"),
      dO: /* @__PURE__ */ __name(function() {
      }, "dO"),
      eQ: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "eQ"),
      e_: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "e_"),
      aK: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "aK"),
      j: /* @__PURE__ */ __name(function() {
      }, "j"),
      e0: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.$ti = n3;
      }, "e0"),
      P: /* @__PURE__ */ __name(function() {
      }, "P"),
      cY: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.$ti = n3;
      }, "cY"),
      l: /* @__PURE__ */ __name(function() {
      }, "l"),
      c: /* @__PURE__ */ __name(function() {
      }, "c"),
      fR: /* @__PURE__ */ __name(function() {
      }, "fR"),
      ac: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "ac"),
      lx: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "lx"),
      ly: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "ly"),
      lz: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "lz"),
      en: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3, o3) {
        var s3 = this;
        s3.a = e4, s3.b = t3, s3.c = n3, s3.d = r3, s3.e = i3, s3.f = a3, s3.r = o3, s3.y = s3.w = A2;
      }, "en"),
      lv: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "lv"),
      mB: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "mB"),
      mC: /* @__PURE__ */ __name(function() {
      }, "mC"),
      mD: /* @__PURE__ */ __name(function() {
      }, "mD"),
      fP: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3, o3, s3) {
        var c3 = this;
        c3.a = e4, c3.b = t3, c3.c = n3, c3.d = r3, c3.e = i3, c3.f = a3, c3.r = o3, c3.w = s3, c3.x = null;
      }, "fP"),
      fH: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3, o3) {
        var s3 = this;
        s3.a = e4, s3.b = t3, s3.c = n3, s3.d = r3, s3.e = i3, s3.f = a3, s3.r = o3, s3.y = s3.w = A2;
      }, "fH"),
      nR(e4) {
        if (!N2.I.b(e4) && !N2.j.b(e4)) throw E2.d(E2.K("object must be a Map or Iterable", null));
        return E2.w5(e4);
      },
      w5(e4) {
        var t3 = new E2.mz(new E2.e4(N2.aH)).$1(e4);
        return t3.toString, t3;
      },
      mz: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "mz"),
      tN(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3 = "byteOffset", g3 = null, _3 = "normalized";
        switch (E2.w(e4, O2.cZ, t3), n3 = E2.W(e4, "bufferView", t3, false), n3 === -1 ? (r3 = e4.v(h3), r3 && t3.l(A2.cO(), E2.a(["bufferView"], N2.M), h3), i3 = 0) : i3 = E2.a0(e4, h3, t3, 0, g3, -1, 0, false), a3 = E2.a0(e4, "componentType", t3, -1, O2.cu, -1, 0, true), o3 = E2.a0(e4, "count", t3, -1, g3, -1, 1, true), s3 = E2.J(e4, "type", t3, g3, O2.m.gN(), g3, true), c3 = E2.pO(e4, _3, t3), s3 != null && a3 !== -1 ? (l3 = O2.m.i(0, s3), l3 == null ? (u3 = g3, d3 = u3) : a3 === 5126 ? (r3 = N2.V, u3 = E2.ae(e4, "min", t3, g3, E2.a([l3], r3), 1 / 0, -1 / 0, true), d3 = E2.ae(e4, "max", t3, g3, E2.a([l3], r3), 1 / 0, -1 / 0, true)) : (u3 = E2.pP(e4, "min", t3, a3, l3), d3 = E2.pP(e4, "max", t3, a3, l3))) : (u3 = g3, d3 = u3), f3 = E2.T(e4, "sparse", t3, E2.wK(), false), r3 = c3 ? a3 === 5126 || a3 === 5125 : false, r3 && t3.n(A2.ru(), _3), (s3 === "MAT2" || s3 === "MAT3" || s3 === "MAT4") && i3 !== -1 && i3 & 3 && t3.n(A2.rt(), h3), a3) {
          case 5120:
          case 5121:
          case 5122:
          case 5123:
          case 5125:
            r3 = N2.w, r3.a(d3), r3.a(u3), E2.J(e4, "name", t3, g3, g3, g3, false), r3 = E2.t(e4, O2.S, t3, g3), p3 = E2.x(e4, t3), m3 = new E2.fC(n3, i3, a3, o3, s3, c3, d3, u3, f3, E2.b0(a3), r3, p3, false), u3 != null && (r3 = t3.S(), p3 = N2.e, t3.a_(m3, new E2.f6(E2.U(u3.length, 0, false, p3), E2.U(u3.length, 0, false, p3), D2.h4(u3, false), r3))), d3 != null && (r3 = t3.S(), p3 = N2.e, t3.a_(m3, new E2.f4(E2.U(d3.length, 0, false, p3), E2.U(d3.length, 0, false, p3), D2.h4(d3, false), r3)));
            break;
          default:
            r3 = N2.fy, r3.a(d3), r3.a(u3), E2.J(e4, "name", t3, g3, g3, g3, false), r3 = E2.t(e4, O2.S, t3, g3), p3 = E2.x(e4, t3), m3 = new E2.fB(n3, i3, a3, o3, s3, c3, d3, u3, f3, E2.b0(a3), r3, p3, false), t3.a_(m3, new E2.eY(t3.S())), u3 != null && (r3 = t3.S(), t3.a_(m3, new E2.f5(E2.U(u3.length, 0, false, N2.e), E2.U(u3.length, 0, false, N2.F), D2.h4(u3, false), r3))), d3 != null && (r3 = t3.S(), t3.a_(m3, new E2.f3(E2.U(d3.length, 0, false, N2.e), E2.U(d3.length, 0, false, N2.F), D2.h4(d3, false), r3)));
        }
        return m3;
      },
      bu(e4, t3, n3, r3, i3, a3) {
        var o3, s3, c3 = "byteOffset";
        if (e4 === -1) return false;
        if (e4 % t3 !== 0) {
          if (a3 != null) a3.l(A2.rv(), E2.a([e4, t3], N2.M), c3);
          else return false;
        }
        if (o3 = r3.x, o3 === -1) return false;
        if (s3 = o3 + e4, s3 % t3 !== 0) {
          if (a3 != null) a3.F(A2.qM(), E2.a([s3, t3], N2.M));
          else return false;
        }
        if (o3 = r3.y, e4 > o3) {
          if (a3 != null) a3.l(A2.o3(), E2.a([
            e4,
            n3,
            i3,
            o3
          ], N2.M), c3);
          else return false;
        } else if (e4 + n3 > o3) {
          if (a3 != null) a3.F(A2.o3(), E2.a([
            e4,
            n3,
            i3,
            o3
          ], N2.M));
          else return false;
        }
        return true;
      },
      np(e4, t3, n3, r3) {
        if (t3.byteLength < n3 + E2.b0(e4) * r3) return null;
        switch (e4) {
          case 5121:
            return E2.nw(t3, n3, r3);
          case 5123:
            return E2.oO(t3, n3, r3);
          case 5125:
            return E2.oP(t3, n3, r3);
          default:
            return null;
        }
      },
      oq(e4, t3, n3, r3) {
        if (t3.byteLength < n3 + E2.b0(e4) * r3) return null;
        switch (e4) {
          case 5126:
            return E2.de(t3, n3, r3), new Float32Array(t3, n3, r3);
          default:
            return null;
        }
      },
      or(e4, t3, n3, r3) {
        var i3 = t3.byteLength, a3 = E2.b0(e4);
        if (i3 < n3 + a3 * r3) return null;
        switch (e4) {
          case 5120:
            return E2.de(t3, n3, r3), i3 = new Int8Array(t3, n3, r3), i3;
          case 5121:
            return E2.nw(t3, n3, r3);
          case 5122:
            return E2.de(t3, n3, r3), new Int16Array(t3, n3, r3);
          case 5123:
            return E2.oO(t3, n3, r3);
          case 5125:
            return E2.oP(t3, n3, r3);
          default:
            return null;
        }
      },
      tM(e4, t3) {
        var n3, r3, i3;
        return E2.w(e4, O2.cH, t3), n3 = E2.a0(e4, "count", t3, -1, null, -1, 1, true), r3 = E2.T(e4, "indices", t3, E2.wI(), true), i3 = E2.T(e4, "values", t3, E2.wJ(), true), n3 === -1 || r3 == null || i3 == null ? null : new E2.bZ(n3, r3, i3, E2.t(e4, O2.dP, t3, null), E2.x(e4, t3), false);
      },
      tK(e4, t3) {
        return E2.w(e4, O2.cA, t3), new E2.c_(E2.W(e4, "bufferView", t3, true), E2.a0(e4, "byteOffset", t3, 0, null, -1, 0, false), E2.a0(e4, "componentType", t3, -1, O2.ce, -1, 0, true), E2.t(e4, O2.dN, t3, null), E2.x(e4, t3), false);
      },
      tL(e4, t3) {
        return E2.w(e4, O2.cD, t3), new E2.c0(E2.W(e4, "bufferView", t3, true), E2.a0(e4, "byteOffset", t3, 0, null, -1, 0, false), E2.t(e4, O2.dO, t3, null), E2.x(e4, t3), false);
      },
      a4: /* @__PURE__ */ __name(function() {
      }, "a4"),
      fC: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3) {
        var p3 = this;
        p3.w = e4, p3.x = t3, p3.y = n3, p3.z = r3, p3.Q = i3, p3.as = a3, p3.at = o3, p3.ax = s3, p3.ay = c3, p3.ch = l3, p3.CW = null, p3.cx = 0, p3.fr = p3.dy = null, p3.a = u3, p3.b = d3, p3.a$ = f3;
      }, "fC"),
      lR: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.a = e4, a3.b = t3, a3.c = n3, a3.d = r3, a3.e = i3;
      }, "lR"),
      lS: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "lS"),
      lT: /* @__PURE__ */ __name(function() {
      }, "lT"),
      lU: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.a = e4, a3.b = t3, a3.c = n3, a3.d = r3, a3.e = i3;
      }, "lU"),
      lP: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "lP"),
      lQ: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "lQ"),
      fB: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3) {
        var p3 = this;
        p3.w = e4, p3.x = t3, p3.y = n3, p3.z = r3, p3.Q = i3, p3.as = a3, p3.at = o3, p3.ax = s3, p3.ay = c3, p3.ch = l3, p3.CW = null, p3.cx = 0, p3.fr = p3.dy = null, p3.a = u3, p3.b = d3, p3.a$ = f3;
      }, "fB"),
      lL: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.a = e4, a3.b = t3, a3.c = n3, a3.d = r3, a3.e = i3;
      }, "lL"),
      lM: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "lM"),
      lN: /* @__PURE__ */ __name(function() {
      }, "lN"),
      lO: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.a = e4, a3.b = t3, a3.c = n3, a3.d = r3, a3.e = i3;
      }, "lO"),
      bZ: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3) {
        var o3 = this;
        o3.d = e4, o3.e = t3, o3.f = n3, o3.a = r3, o3.b = i3, o3.a$ = a3;
      }, "bZ"),
      c_: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3) {
        var o3 = this;
        o3.d = e4, o3.e = t3, o3.f = n3, o3.r = null, o3.a = r3, o3.b = i3, o3.a$ = a3;
      }, "c_"),
      c0: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.d = e4, a3.e = t3, a3.f = null, a3.a = n3, a3.b = r3, a3.a$ = i3;
      }, "c0"),
      eY: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "eY"),
      f5: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.a = e4, i3.b = t3, i3.c = n3, i3.d = r3;
      }, "f5"),
      f3: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.a = e4, i3.b = t3, i3.c = n3, i3.d = r3;
      }, "f3"),
      f6: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.a = e4, i3.b = t3, i3.c = n3, i3.d = r3;
      }, "f6"),
      f4: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.a = e4, i3.b = t3, i3.c = n3, i3.d = r3;
      }, "f4"),
      tP(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3 = null, v3 = "channels", y3 = "extras", b3 = "samplers";
        if (E2.w(e4, O2.cF, t3), n3 = E2.eB(e4, v3, t3), n3 != null) {
          for (r3 = n3.gj(n3), i3 = E2.U(r3, _3, false, N2.aA), a3 = new E2.F(i3, r3, v3, N2.eq), r3 = t3.c, r3.push(v3), o3 = N2.h, s3 = 0; s3 < n3.gj(n3); ++s3) c3 = n3.i(0, s3), r3.push(O2.c.k(s3)), E2.w(c3, O2.di, t3), l3 = E2.W(c3, "sampler", t3, true), u3 = E2.T(c3, "target", t3, E2.wM(), true), d3 = E2.t(c3, O2.dQ, t3, _3), f3 = c3.i(0, y3), f3 != null && !o3.b(f3) && t3.n(A2.dk(), y3), i3[s3] = new E2.b2(l3, u3, d3, f3, false), r3.pop();
          r3.pop();
        } else a3 = _3;
        if (p3 = E2.eB(e4, b3, t3), p3 != null) {
          for (r3 = p3.gj(p3), i3 = E2.U(r3, _3, false, N2.gW), m3 = new E2.F(i3, r3, b3, N2.az), r3 = t3.c, r3.push(b3), o3 = N2.h, s3 = 0; s3 < p3.gj(p3); ++s3) h3 = p3.i(0, s3), r3.push(O2.c.k(s3)), E2.w(h3, O2.cW, t3), l3 = E2.W(h3, "input", t3, true), u3 = E2.J(h3, "interpolation", t3, "LINEAR", O2.cq, _3, false), d3 = E2.W(h3, "output", t3, true), g3 = E2.t(h3, O2.dR, t3, _3), f3 = h3.i(0, y3), f3 != null && !o3.b(f3) && t3.n(A2.dk(), y3), i3[s3] = new E2.b3(l3, u3, d3, g3, f3, false), r3.pop();
          r3.pop();
        } else m3 = _3;
        return E2.J(e4, "name", t3, _3, _3, _3, false), new E2.bv(a3, m3, E2.t(e4, O2.T, t3, _3), E2.x(e4, t3), false);
      },
      tO(e4, t3) {
        var n3, r3;
        return E2.w(e4, O2.d3, t3), n3 = E2.t(e4, O2.aC, t3, O2.T), r3 = new E2.bw(E2.W(e4, "node", t3, false), E2.J(e4, "path", t3, null, t3.fy, null, true), n3, E2.x(e4, t3), false), t3.W(r3, E2.bc(n3.gX(), true, N2._)), r3;
      },
      bv: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.w = e4, a3.x = t3, a3.a = n3, a3.b = r3, a3.a$ = i3;
      }, "bv"),
      h5: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "h5"),
      h6: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "h6"),
      b2: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.d = e4, a3.e = t3, a3.f = null, a3.a = n3, a3.b = r3, a3.a$ = i3;
      }, "b2"),
      bw: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.d = e4, a3.e = t3, a3.f = null, a3.a = n3, a3.b = r3, a3.a$ = i3;
      }, "bw"),
      b3: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3) {
        var o3 = this;
        o3.d = e4, o3.e = t3, o3.f = n3, o3.w = o3.r = null, o3.a = r3, o3.b = i3, o3.a$ = a3;
      }, "b3"),
      eE: /* @__PURE__ */ __name(function(e4) {
        this.a = 0, this.b = e4;
      }, "eE"),
      dK: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.a = e4, i3.b = t3, i3.c = n3, i3.e = i3.d = 0, i3.$ti = r3;
      }, "dK"),
      tQ(e4, t3) {
        var n3, r3, i3, a3, o3 = null, s3 = "minVersion";
        return E2.w(e4, O2.cC, t3), E2.J(e4, "copyright", t3, o3, o3, o3, false), n3 = E2.J(e4, "generator", t3, o3, o3, o3, false), r3 = A2.br(), i3 = E2.J(e4, "version", t3, o3, o3, r3, true), r3 = E2.J(e4, s3, t3, o3, o3, r3, false), a3 = new E2.bx(n3, i3, r3, E2.t(e4, O2.dS, t3, o3), E2.x(e4, t3), false), r3 != null && i3 != null && (n3 = a3.gcS() <= a3.gbj() ? a3.gcS() === a3.gbj() && a3.ged() > a3.gbW() : true, n3 && t3.l(A2.rV(), E2.a([r3, i3], N2.M), s3)), a3;
      },
      bx: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3) {
        var o3 = this;
        o3.e = e4, o3.f = t3, o3.r = n3, o3.a = r3, o3.b = i3, o3.a$ = a3;
      }, "bx"),
      tU(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3 = null, u3 = "uri";
        if (E2.w(e4, O2.dk, t3), a3 = E2.a0(e4, "byteLength", t3, -1, l3, -1, 1, true), n3 = null, o3 = e4.v(u3), o3) {
          if (r3 = E2.J(e4, u3, t3, l3, l3, l3, false), r3 != null) {
            t3.dx && t3.n(A2.o2(), u3), i3 = null;
            try {
              i3 = E2.p5(r3);
            } catch (e5) {
              if (E2.M(e5) instanceof E2.aK) n3 = E2.pS(r3, t3);
              else throw e5;
            }
            if (i3 != null) switch (t3.dx && t3.n(A2.o1(), u3), i3.gbV().toLowerCase()) {
              case "application/gltf-buffer":
              case "application/octet-stream":
                s3 = i3.cD();
                break;
              default:
                t3.l(A2.ry(), E2.a([i3.gbV()], N2.M), u3), s3 = l3;
            }
            else s3 = l3;
          } else s3 = l3;
          o3 = true;
        } else s3 = l3;
        return c3 = n3, E2.J(e4, "name", t3, l3, l3, l3, false), new E2.aT(c3, a3, o3, s3, E2.t(e4, O2.dT, t3, l3), E2.x(e4, t3), false);
      },
      aT: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3, o3) {
        var s3 = this;
        s3.w = e4, s3.x = t3, s3.y = n3, s3.z = r3, s3.a = i3, s3.b = a3, s3.a$ = o3;
      }, "aT"),
      tT(e4, t3) {
        var n3, r3, i3, a3, o3, s3 = null, c3 = "byteStride";
        return E2.w(e4, O2.cp, t3), n3 = E2.a0(e4, "byteLength", t3, -1, s3, -1, 1, true), r3 = E2.a0(e4, c3, t3, -1, s3, 252, 4, false), i3 = E2.a0(e4, "target", t3, -1, O2.cb, -1, 0, false), r3 !== -1 && (n3 !== -1 && r3 > n3 && t3.l(A2.rz(), E2.a([r3, n3], N2.M), c3), r3 % 4 != 0 && t3.l(A2.rr(), E2.a([r3, 4], N2.M), c3), i3 === 34963 && t3.n(A2.nj(), c3)), a3 = E2.W(e4, "buffer", t3, true), o3 = E2.a0(e4, "byteOffset", t3, 0, s3, -1, 0, false), E2.J(e4, "name", t3, s3, s3, s3, false), new E2.by(a3, o3, n3, r3, i3, E2.t(e4, O2.aD, t3, s3), E2.x(e4, t3), false);
      },
      by: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3, o3, s3) {
        var c3 = this;
        c3.w = e4, c3.x = t3, c3.y = n3, c3.z = r3, c3.Q = i3, c3.at = c3.as = null, c3.ax = -1, c3.a = a3, c3.b = o3, c3.a$ = s3;
      }, "by"),
      tX(e4, t3) {
        var n3 = null, r3 = "orthographic", i3 = "perspective";
        switch (E2.w(e4, O2.dj, t3), e4.v(r3) && e4.v(i3) && t3.F(A2.oe(), O2.aw), E2.J(e4, "type", t3, n3, O2.aw, n3, true)) {
          case "orthographic":
            E2.T(e4, r3, t3, E2.wV(), true);
            break;
          case "perspective":
            E2.T(e4, i3, t3, E2.wW(), true);
        }
        return E2.J(e4, "name", t3, n3, n3, n3, false), new E2.bz(E2.t(e4, O2.dW, t3, n3), E2.x(e4, t3), false);
      },
      tV(e4, t3) {
        var n3, r3, i3, a3, o3 = "xmag", s3 = "ymag";
        return E2.w(e4, O2.dq, t3), n3 = E2.E(e4, o3, t3, NaN, 1 / 0, -1 / 0, 1 / 0, -1 / 0, true, NaN), r3 = E2.E(e4, s3, t3, NaN, 1 / 0, -1 / 0, 1 / 0, -1 / 0, true, NaN), i3 = E2.E(e4, "zfar", t3, NaN, 1 / 0, 0, 1 / 0, -1 / 0, true, NaN), a3 = E2.E(e4, "znear", t3, NaN, 1 / 0, -1 / 0, 1 / 0, 0, true, NaN), i3 <= a3 && t3.L(A2.oh()), n3 === 0 ? t3.n(A2.og(), o3) : n3 < 0 && t3.n(A2.of(), o3), r3 === 0 ? t3.n(A2.og(), s3) : r3 < 0 && t3.n(A2.of(), s3), new E2.c3(E2.t(e4, O2.dU, t3, null), E2.x(e4, t3), false);
      },
      tW(e4, t3) {
        var n3, r3, i3;
        return E2.w(e4, O2.cB, t3), n3 = E2.E(e4, "yfov", t3, NaN, 1 / 0, 0, 1 / 0, -1 / 0, true, NaN), n3 >= 3.141592653589793 && t3.L(A2.rA()), r3 = E2.E(e4, "zfar", t3, NaN, 1 / 0, 0, 1 / 0, -1 / 0, false, NaN), i3 = E2.E(e4, "znear", t3, NaN, 1 / 0, 0, 1 / 0, -1 / 0, true, NaN), r3 <= i3 && t3.L(A2.oh()), E2.E(e4, "aspectRatio", t3, NaN, 1 / 0, 0, 1 / 0, -1 / 0, false, NaN), new E2.c4(E2.t(e4, O2.dV, t3, null), E2.x(e4, t3), false);
      },
      bz: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.a$ = n3;
      }, "bz"),
      c3: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.a$ = n3;
      }, "c3"),
      c4: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.a$ = n3;
      }, "c4"),
      oC(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3, y3, b3, x3, S3, C3, w3, T3, D3, k3, j3, M3, P2, F, I, L, R, z, B, V = "extensionsRequired", H = "extensionsUsed", U = null, W = new E2.iw(t3);
        if (W.$0(), E2.w(e4, O2.dr, t3), e4.v(V) && !e4.v(H) && t3.l(A2.cO(), E2.a(["extensionsUsed"], N2.M), V), n3 = E2.pQ(e4, H, t3), n3 ??= E2.a([], N2.i), r3 = E2.pQ(e4, V, t3), r3 ??= E2.a([], N2.i), t3.e9(n3, r3), i3 = new E2.ix(e4, W, t3), a3 = new E2.iy(W, e4, t3).$1$3$req("asset", E2.wO(), true, N2.gP), (a3 == null ? U : a3.f) == null) return U;
        if (a3.gbj() !== 2) return o3 = A2.t8(), s3 = a3.gbj(), t3.l(o3, E2.a([s3], N2.M), "version"), U;
        for (a3.gbW() > 0 && (o3 = A2.t9(), s3 = a3.gbW(), t3.l(o3, E2.a([s3], N2.M), "version")), c3 = i3.$1$2("accessors", E2.wL(), N2.W), l3 = i3.$1$2("animations", E2.wN(), N2.bj), u3 = i3.$1$2("buffers", E2.wT(), N2.cT), d3 = i3.$1$2("bufferViews", E2.wU(), N2.r), f3 = i3.$1$2("cameras", E2.wX(), N2.h2), p3 = i3.$1$2("images", E2.xc(), N2.ec), m3 = i3.$1$2("materials", E2.xF(), N2.fC), h3 = i3.$1$2("meshes", E2.xI(), N2.eM), o3 = N2.L, g3 = i3.$1$2("nodes", E2.xJ(), o3), _3 = i3.$1$2("samplers", E2.xK(), N2.c2), v3 = i3.$1$2("scenes", E2.xL(), N2.bn), W.$0(), y3 = E2.W(e4, "scene", t3, false), b3 = v3.i(0, y3), y3 !== -1 && b3 == null && t3.l(A2.Q(), E2.a([y3], N2.M), "scene"), x3 = i3.$1$2("skins", E2.xM(), N2.aV), S3 = i3.$1$2("textures", E2.xO(), N2.ai), W.$0(), C3 = E2.t(e4, O2.U, t3, U), W.$0(), w3 = new E2.du(n3, r3, c3, l3, a3, u3, d3, f3, p3, m3, h3, g3, _3, b3, x3, S3, C3, E2.x(e4, t3), false), T3 = new E2.iu(t3, w3), T3.$2(d3, O2.aD), T3.$2(c3, O2.S), T3.$2(p3, O2.aE), T3.$2(S3, O2.W), T3.$2(m3, O2.f), T3.$2(h3, O2.aG), T3.$2(g3, O2.V), T3.$2(x3, O2.aK), T3.$2(l3, O2.T), T3.$2(v3, O2.aJ), C3.a !== 0 && (s3 = t3.c, s3.push("extensions"), C3.M(0, new E2.is(t3, w3)), s3.pop()), s3 = t3.c, s3.push("nodes"), g3.a4(new E2.it(t3, E2.aD(o3))), s3.pop(), D3 = [
          c3,
          u3,
          d3,
          f3,
          p3,
          m3,
          h3,
          g3,
          _3,
          x3,
          S3
        ], k3 = 0; k3 < 11; ++k3) if (j3 = D3[k3], j3.gj(j3) !== 0) {
          for (s3.push(j3.c), o3 = j3.b, M3 = j3.a, P2 = M3.length, F = 0; F < o3; ++F) I = F >= P2, I = I ? U : M3[F], (I == null ? U : I.a$) === false && t3.Z(A2.h1(), F);
          s3.pop();
        }
        if (o3 = t3.x, o3.a !== 0) {
          for (M3 = E2.uH(o3, o3.r, E2.A(o3).c); M3.q(); ) if (P2 = M3.d, P2.gj(P2) !== 0) for (L = o3.i(0, P2), O2.d.P(s3), O2.d.D(s3, L), I = P2.b, P2 = P2.a, R = P2.length, F = 0; F < I; ++F) z = F >= R, z = z ? U : P2[F], (z == null ? U : z.a$) === false && t3.Z(A2.h1(), F);
          O2.d.P(s3);
        }
        for (s3.push("meshes"), o3 = h3.b, M3 = h3.a, P2 = M3.length, F = 0; F < o3; ++F) I = F >= P2, B = I ? U : M3[F], (B == null ? U : B.x) != null && B.a$ && !B.y && (s3.push(O2.c.k(F)), t3.n(A2.ro(), "weights"), s3.pop());
        return O2.d.P(s3), w3;
      },
      du: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3) {
        var y3 = this;
        y3.d = e4, y3.e = t3, y3.f = n3, y3.r = r3, y3.w = i3, y3.x = a3, y3.y = o3, y3.z = s3, y3.Q = c3, y3.as = l3, y3.at = u3, y3.ax = d3, y3.ay = f3, y3.ch = p3, y3.cx = m3, y3.cy = h3, y3.a = g3, y3.b = _3, y3.a$ = v3;
      }, "du"),
      iw: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "iw"),
      ix: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "ix"),
      iy: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "iy"),
      iu: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "iu"),
      iv: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "iv"),
      is: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "is"),
      it: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "it"),
      iq: /* @__PURE__ */ __name(function() {
      }, "iq"),
      ir: /* @__PURE__ */ __name(function() {
      }, "ir"),
      iz: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "iz"),
      iA: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "iA"),
      m: /* @__PURE__ */ __name(function() {
      }, "m"),
      k: /* @__PURE__ */ __name(function() {
      }, "k"),
      eR: /* @__PURE__ */ __name(function() {
      }, "eR"),
      fL: /* @__PURE__ */ __name(function() {
      }, "fL"),
      ug(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3 = "bufferView", d3 = null, f3 = "uri";
        if (E2.w(e4, O2.cE, t3), a3 = E2.W(e4, u3, t3, false), o3 = E2.J(e4, "mimeType", t3, d3, t3.dy, d3, false), n3 = E2.J(e4, f3, t3, d3, d3, d3, false), s3 = a3 === -1, c3 = !s3, c3 && o3 == null && t3.l(A2.cO(), E2.a(["mimeType"], N2.M), u3), c3 && n3 != null ? s3 = true : s3 &&= n3 == null, s3 && t3.F(A2.oe(), E2.a(["bufferView", "uri"], N2.M)), r3 = null, n3 != null) {
          t3.dx && t3.n(A2.o2(), f3), i3 = null;
          try {
            i3 = E2.p5(n3);
          } catch (e5) {
            if (E2.M(e5) instanceof E2.aK) r3 = E2.pS(n3, t3);
            else throw e5;
          }
          i3 == null ? l3 = d3 : (t3.dx && t3.n(A2.o1(), f3), l3 = i3.cD(), s3 = E2.oD(l3), s3 = s3 == null ? d3 : O2.ci[s3.a], s3 = s3 !== i3.gbV().toLowerCase(), s3 && (t3.l(A2.od(), E2.a([n3, "The declared mediatype does not match the embedded content."], N2.M), f3), l3 = d3));
        } else l3 = d3;
        return s3 = r3, E2.J(e4, "name", t3, d3, d3, d3, false), new E2.aU(a3, o3, s3, l3, E2.t(e4, O2.aE, t3, d3), E2.x(e4, t3), false);
      },
      aU: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3, o3) {
        var s3 = this;
        s3.w = e4, s3.x = t3, s3.y = n3, s3.z = r3, s3.as = s3.Q = null, s3.a = i3, s3.b = a3, s3.a$ = o3;
      }, "aU"),
      uL(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3 = null, p3 = "alphaCutoff";
        return E2.w(e4, O2.cs, t3), n3 = E2.T(e4, "pbrMetallicRoughness", t3, E2.xH(), false), r3 = E2.T(e4, "normalTexture", t3, E2.pV(), false), i3 = E2.T(e4, "occlusionTexture", t3, E2.xG(), false), a3 = E2.T(e4, "emissiveTexture", t3, E2.ao(), false), o3 = E2.ae(e4, "emissiveFactor", t3, O2.ak, O2.l, 1, 0, false), s3 = E2.J(e4, "alphaMode", t3, "OPAQUE", O2.cr, f3, false), E2.E(e4, p3, t3, 0.5, 1 / 0, -1 / 0, 1 / 0, 0, false, NaN), s3 !== "MASK" && e4.v(p3) && t3.n(A2.rO(), p3), c3 = E2.pO(e4, "doubleSided", t3), l3 = E2.t(e4, O2.f, t3, f3), E2.J(e4, "name", t3, f3, f3, f3, false), u3 = new E2.ai(n3, r3, i3, a3, o3, c3, E2.a9(N2.X, N2.e), l3, E2.x(e4, t3), false), d3 = E2.a([
          n3,
          r3,
          i3,
          a3
        ], N2.M), O2.d.D(d3, l3.gX()), t3.W(u3, d3), u3;
      },
      uX(e4, t3) {
        var n3, r3, i3, a3, o3;
        return E2.w(e4, O2.cG, t3), E2.ae(e4, "baseColorFactor", t3, O2.al, O2.P, 1, 0, false), n3 = E2.T(e4, "baseColorTexture", t3, E2.ao(), false), E2.E(e4, "metallicFactor", t3, 1, 1 / 0, -1 / 0, 1, 0, false, NaN), E2.E(e4, "roughnessFactor", t3, 1, 1 / 0, -1 / 0, 1, 0, false, NaN), r3 = E2.T(e4, "metallicRoughnessTexture", t3, E2.ao(), false), i3 = E2.t(e4, O2.ej, t3, null), a3 = new E2.cB(n3, r3, i3, E2.x(e4, t3), false), o3 = E2.a([n3, r3], N2.M), O2.d.D(o3, i3.gX()), t3.W(a3, o3), a3;
      },
      uW(e4, t3) {
        var n3, r3, i3, a3;
        return E2.w(e4, O2.cU, t3), n3 = E2.t(e4, O2.aI, t3, O2.f), r3 = E2.W(e4, "index", t3, true), i3 = E2.a0(e4, "texCoord", t3, 0, null, -1, 0, false), E2.E(e4, "strength", t3, 1, 1 / 0, -1 / 0, 1, 0, false, NaN), a3 = new E2.cA(r3, i3, n3, E2.x(e4, t3), false), t3.W(a3, n3.gX()), a3;
      },
      uV(e4, t3) {
        var n3, r3, i3, a3;
        return E2.w(e4, O2.cT, t3), n3 = E2.t(e4, O2.aH, t3, O2.f), r3 = E2.W(e4, "index", t3, true), i3 = E2.a0(e4, "texCoord", t3, 0, null, -1, 0, false), E2.E(e4, "scale", t3, 1, 1 / 0, -1 / 0, 1 / 0, -1 / 0, false, NaN), a3 = new E2.cz(r3, i3, n3, E2.x(e4, t3), false), t3.W(a3, n3.gX()), a3;
      },
      vb(e4, t3) {
        var n3, r3;
        return E2.w(e4, O2.cS, t3), n3 = E2.t(e4, O2.aL, t3, O2.f), r3 = new E2.bj(E2.W(e4, "index", t3, true), E2.a0(e4, "texCoord", t3, 0, null, -1, 0, false), n3, E2.x(e4, t3), false), t3.W(r3, n3.gX()), r3;
      },
      ai: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3) {
        var u3 = this;
        u3.w = e4, u3.x = t3, u3.y = n3, u3.z = r3, u3.Q = i3, u3.ax = a3, u3.ay = false, u3.ch = o3, u3.a = s3, u3.b = c3, u3.a$ = l3;
      }, "ai"),
      jR: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "jR"),
      cB: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.e = e4, a3.w = t3, a3.a = n3, a3.b = r3, a3.a$ = i3;
      }, "cB"),
      cA: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.d = e4, a3.e = t3, a3.f = null, a3.a = n3, a3.b = r3, a3.a$ = i3;
      }, "cA"),
      cz: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.d = e4, a3.e = t3, a3.f = null, a3.a = n3, a3.b = r3, a3.a$ = i3;
      }, "cz"),
      bj: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.d = e4, a3.e = t3, a3.f = null, a3.a = n3, a3.b = r3, a3.a$ = i3;
      }, "bj"),
      dl(e4) {
        return new E2.y(e4.Q, e4.y, e4.as);
      },
      c2: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "c2"),
      c1: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "c1"),
      y: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "y"),
      uP(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3 = null, p3 = "primitives";
        if (E2.w(e4, O2.da, t3), n3 = E2.ae(e4, "weights", t3, f3, f3, 1 / 0, -1 / 0, false), r3 = E2.eB(e4, p3, t3), r3 != null) {
          for (i3 = r3.gj(r3), a3 = E2.U(i3, f3, false, N2.ft), o3 = new E2.F(a3, i3, p3, N2.b_), i3 = t3.c, i3.push(p3), s3 = 0, c3 = 0; c3 < r3.gj(r3); ++c3) i3.push(O2.c.k(c3)), l3 = E2.uO(r3.i(0, c3), t3), u3 = l3.w, d3 = u3 == null ? f3 : u3.length, d3 ??= 0, c3 === 0 ? s3 = d3 : s3 !== d3 && (u3 = A2.rU(), t3.n(u3, d3 > 0 ? "targets" : f3)), a3[c3] = l3, i3.pop();
          i3.pop(), n3 != null && s3 !== n3.length && t3.l(A2.rP(), E2.a([n3.length, s3], N2.M), "weights");
        } else o3 = f3;
        return E2.J(e4, "name", t3, f3, f3, f3, false), new E2.aV(o3, n3, E2.t(e4, O2.aG, t3, f3), E2.x(e4, t3), false);
      },
      uN(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3) {
        var m3, h3 = D2.oF(d3, N2.e);
        for (m3 = 0; m3 < d3; ++m3) h3[m3] = m3;
        return new E2.aE(e4, t3, n3, r3, i3, o3, s3, l3, u3, d3, E2.a9(N2.X, N2.W), h3, f3, p3, false);
      },
      uO(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3 = "attributes", d3 = {};
        return E2.w(e4, O2.cY, t3), d3.a = d3.b = d3.c = false, d3.d = 0, d3.e = -1, d3.f = 0, d3.r = -1, d3.w = 0, d3.x = -1, d3.y = 0, d3.z = -1, n3 = new E2.jV(), r3 = E2.a0(e4, "mode", t3, 4, null, 6, 0, false), i3 = E2.x5(e4, u3, t3, new E2.jS(d3, t3, n3)), i3 != null && (a3 = t3.c, a3.push(u3), d3.c || t3.L(A2.rS()), !d3.b && d3.a && t3.n(A2.rT(), "TANGENT"), o3 = new E2.jT(t3), d3.d = o3.$3(d3.e, d3.d, "COLOR"), d3.f = o3.$3(d3.r, d3.f, "JOINTS"), d3.w = o3.$3(d3.x, d3.w, "WEIGHTS"), d3.y = o3.$3(d3.z, d3.y, "TEXCOORD"), o3 = d3.f, s3 = d3.w, o3 !== s3 && (t3.F(A2.rR(), E2.a([o3, s3], N2.M)), d3.w = d3.f = 0), a3.pop()), c3 = E2.x6(e4, "targets", t3, new E2.jU(n3, t3)), l3 = E2.uN(i3, E2.W(e4, "indices", t3, false), E2.W(e4, "material", t3, false), r3, c3, d3.c, d3.b, d3.a, d3.d, d3.f, d3.w, d3.y, E2.t(e4, O2.aF, t3, null), E2.x(e4, t3)), t3.W(l3, l3.a.gX()), l3;
      },
      aV: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.w = e4, a3.x = t3, a3.y = false, a3.a = n3, a3.b = r3, a3.a$ = i3;
      }, "aV"),
      k1: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "k1"),
      k0: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "k0"),
      aE: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3) {
        var h3 = this;
        h3.d = e4, h3.e = t3, h3.f = n3, h3.r = r3, h3.w = i3, h3.y = a3, h3.z = o3, h3.as = s3, h3.at = c3, h3.ax = l3, h3.ay = u3, h3.CW = h3.ch = -1, h3.db = h3.cy = h3.cx = null, h3.dx = d3, h3.a = f3, h3.b = p3, h3.a$ = m3;
      }, "aE"),
      jV: /* @__PURE__ */ __name(function() {
      }, "jV"),
      jS: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "jS"),
      jT: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "jT"),
      jU: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "jU"),
      jX: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "jX"),
      jY: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "jY"),
      jZ: /* @__PURE__ */ __name(function() {
      }, "jZ"),
      k_: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.a = e4, i3.b = t3, i3.c = n3, i3.d = r3;
      }, "k_"),
      jW: /* @__PURE__ */ __name(function() {
      }, "jW"),
      eU: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3) {
        var o3 = this;
        o3.a = e4, o3.b = t3, o3.c = n3, o3.w = r3, o3.Q = o3.z = 0, o3.as = i3, o3.at = a3;
      }, "eU"),
      uU(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3, y3, b3, x3, S3, C3, w3, T3, D3, k3, j3, M3, P2, F = null, I = "matrix", L = "translation", R = "rotation";
        return E2.w(e4, O2.cj, t3), e4.v(I) ? (n3 = E2.ae(e4, I, t3, F, O2.c6, 1 / 0, -1 / 0, false), n3 == null ? i3 = F : (r3 = /* @__PURE__ */ new Float32Array(16), i3 = new E2.cZ(r3), a3 = n3[0], o3 = n3[1], s3 = n3[2], c3 = n3[3], l3 = n3[4], u3 = n3[5], d3 = n3[6], f3 = n3[7], p3 = n3[8], m3 = n3[9], h3 = n3[10], g3 = n3[11], _3 = n3[12], v3 = n3[13], y3 = n3[14], r3[15] = n3[15], r3[14] = y3, r3[13] = v3, r3[12] = _3, r3[11] = g3, r3[10] = h3, r3[9] = m3, r3[8] = p3, r3[7] = f3, r3[6] = d3, r3[5] = u3, r3[4] = l3, r3[3] = c3, r3[2] = s3, r3[1] = o3, r3[0] = a3)) : i3 = F, e4.v(L) ? (b3 = E2.ae(e4, L, t3, F, O2.l, 1 / 0, -1 / 0, false), x3 = b3 == null ? F : E2.pb(b3)) : x3 = F, e4.v(R) ? (S3 = E2.ae(e4, R, t3, F, O2.P, 1, -1, false), S3 == null ? C3 = F : (r3 = S3[0], a3 = S3[1], o3 = S3[2], s3 = S3[3], c3 = /* @__PURE__ */ new Float32Array(4), C3 = new E2.fl(c3), c3[0] = r3, c3[1] = a3, c3[2] = o3, c3[3] = s3, r3 = Math.sqrt(C3.gaW()), Math.abs(1 - r3) > 769e-5 && t3.n(A2.t5(), R))) : C3 = F, e4.v("scale") ? (w3 = E2.ae(e4, "scale", t3, F, O2.l, 1 / 0, -1 / 0, false), T3 = w3 == null ? F : E2.pb(w3)) : T3 = F, D3 = E2.W(e4, "camera", t3, false), k3 = E2.mR(e4, "children", t3, false), j3 = E2.W(e4, "mesh", t3, false), M3 = E2.W(e4, "skin", t3, false), P2 = E2.ae(e4, "weights", t3, F, F, 1 / 0, -1 / 0, false), j3 === -1 && (M3 !== -1 && t3.l(A2.cO(), E2.a(["mesh"], N2.M), "skin"), P2 != null && t3.l(A2.cO(), E2.a(["mesh"], N2.M), "weights")), i3 != null && ((x3 != null || C3 != null || T3 != null) && t3.n(A2.rZ(), I), i3.cP() ? t3.n(A2.rX(), I) : E2.xi(i3) || t3.n(A2.t_(), I)), E2.J(e4, "name", t3, F, F, F, false), new E2.ap(D3, k3, M3, i3, j3, x3, C3, T3, P2, E2.aD(N2.bn), E2.t(e4, O2.V, t3, F), E2.x(e4, t3), false);
      },
      ap: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3) {
        var p3 = this;
        p3.w = e4, p3.x = t3, p3.y = n3, p3.z = r3, p3.Q = i3, p3.as = a3, p3.at = o3, p3.ax = s3, p3.ay = c3, p3.ch = l3, p3.dx = p3.db = p3.cy = p3.cx = p3.CW = null, p3.dy = false, p3.a = u3, p3.b = d3, p3.a$ = f3;
      }, "ap"),
      k3: /* @__PURE__ */ __name(function() {
      }, "k3"),
      k4: /* @__PURE__ */ __name(function() {
      }, "k4"),
      k5: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "k5"),
      v6(e4, t3) {
        var n3 = null;
        return E2.w(e4, O2.dc, t3), E2.a0(e4, "magFilter", t3, -1, O2.cg, -1, 0, false), E2.a0(e4, "minFilter", t3, -1, O2.ck, -1, 0, false), E2.a0(e4, "wrapS", t3, 10497, O2.ao, -1, 0, false), E2.a0(e4, "wrapT", t3, 10497, O2.ao, -1, 0, false), E2.J(e4, "name", t3, n3, n3, n3, false), new E2.bF(E2.t(e4, O2.ek, t3, n3), E2.x(e4, t3), false);
      },
      bF: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.a$ = n3;
      }, "bF"),
      v7(e4, t3) {
        var n3, r3 = null;
        return E2.w(e4, O2.d4, t3), n3 = E2.mR(e4, "nodes", t3, false), E2.J(e4, "name", t3, r3, r3, r3, false), new E2.bG(n3, E2.t(e4, O2.aJ, t3, r3), E2.x(e4, t3), false);
      },
      bG: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.w = e4, i3.x = null, i3.a = t3, i3.b = n3, i3.a$ = r3;
      }, "bG"),
      ke: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "ke"),
      v8(e4, t3) {
        var n3, r3, i3, a3 = null;
        return E2.w(e4, O2.cw, t3), n3 = E2.W(e4, "inverseBindMatrices", t3, false), r3 = E2.W(e4, "skeleton", t3, false), i3 = E2.mR(e4, "joints", t3, true), E2.J(e4, "name", t3, a3, a3, a3, false), new E2.bI(n3, r3, i3, E2.aD(N2.L), E2.t(e4, O2.aK, t3, a3), E2.x(e4, t3), false);
      },
      bI: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3, o3) {
        var s3 = this;
        s3.w = e4, s3.x = t3, s3.y = n3, s3.as = s3.Q = s3.z = null, s3.at = r3, s3.a = i3, s3.b = a3, s3.a$ = o3;
      }, "bI"),
      lm: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "lm"),
      eT: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "eT"),
      vc(e4, t3) {
        var n3, r3, i3 = null;
        return E2.w(e4, O2.de, t3), n3 = E2.W(e4, "sampler", t3, false), r3 = E2.W(e4, "source", t3, false), E2.J(e4, "name", t3, i3, i3, i3, false), new E2.bK(n3, r3, E2.t(e4, O2.W, t3, i3), E2.x(e4, t3), false);
      },
      bK: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.w = e4, a3.x = t3, a3.z = a3.y = null, a3.a = n3, a3.b = r3, a3.a$ = i3;
      }, "bK"),
      p9(e4, t3, n3, r3) {
        var i3, a3 = N2.X, o3 = E2.aD(a3);
        return a3 = E2.aD(a3), i3 = t3 ?? 0, e4 != null && o3.D(0, e4), n3 != null && a3.D(0, n3), new E2.lE(i3, o3, a3, r3);
      },
      u4() {
        return new E2.ab(O2.au, new E2.hh(), N2.gw);
      },
      u3(e4) {
        var t3, n3, r3, i3, a3 = null, o3 = N2.i, s3 = E2.a([], o3), c3 = N2._, l3 = E2.a([], N2.d6), u3 = E2.a9(N2.al, N2.f9), d3 = E2.a([], o3), f3 = E2.a([], o3), p3 = E2.a([], N2.fh), m3 = E2.a([], N2.a9);
        return o3 = E2.a(["image/jpeg", "image/png"], o3), t3 = N2.aD, n3 = N2.X, r3 = N2.cn, i3 = E2.nu([
          "POSITION",
          E2.aP([O2.k], t3),
          "NORMAL",
          E2.aP([O2.k], t3),
          "TANGENT",
          E2.aP([O2.n], t3),
          "TEXCOORD",
          E2.aP([
            O2.a4,
            O2.a0,
            O2.a3
          ], t3),
          "COLOR",
          E2.aP([
            O2.k,
            O2.H,
            O2.I,
            O2.n,
            O2.y,
            O2.z
          ], t3),
          "JOINTS",
          E2.aP([O2.b_, O2.b0], t3),
          "WEIGHTS",
          E2.aP([
            O2.n,
            O2.y,
            O2.z
          ], t3)
        ], n3, r3), r3 = E2.nu([
          "POSITION",
          E2.aP([O2.k], t3),
          "NORMAL",
          E2.aP([O2.k], t3),
          "TANGENT",
          E2.aP([O2.k], t3),
          "TEXCOORD",
          E2.aP([
            O2.a4,
            O2.a_,
            O2.a0,
            O2.a2,
            O2.a3
          ], t3),
          "COLOR",
          E2.aP([
            O2.k,
            O2.w,
            O2.H,
            O2.x,
            O2.I,
            O2.n,
            O2.J,
            O2.y,
            O2.K,
            O2.z
          ], t3)
        ], n3, r3), n3 = E2.bc(O2.R, true, n3), t3 = e4 ?? E2.p9(a3, a3, a3, a3), n3 = new E2.i(t3, s3, E2.a9(N2.W, N2.b7), E2.a9(c3, c3), E2.a9(N2.f7, N2.an), l3, E2.a9(N2.r, N2.gz), E2.a9(N2.b5, N2.eG), u3, d3, f3, p3, E2.aD(N2.af), m3, new E2.ac(""), o3, i3, r3, n3), r3 = N2.em, n3.ay = new E2.aX(f3, r3), n3.at = new E2.aX(d3, r3), n3.Q = new E2.bm(u3, N2.f8), n3.CW = new E2.aX(p3, N2.go), n3;
      },
      lE: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.a = e4, i3.b = t3, i3.c = n3, i3.d = r3;
      }, "lE"),
      i: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3) {
        var y3 = this;
        y3.b = e4, y3.c = t3, y3.d = n3, y3.e = r3, y3.f = i3, y3.r = a3, y3.w = o3, y3.x = s3, y3.y = false, y3.z = c3, y3.Q = null, y3.as = l3, y3.at = null, y3.ax = u3, y3.ay = null, y3.ch = d3, y3.CW = null, y3.cx = f3, y3.cy = p3, y3.db = m3, y3.dx = false, y3.dy = h3, y3.fr = g3, y3.fx = _3, y3.fy = v3;
      }, "i"),
      hh: /* @__PURE__ */ __name(function() {
      }, "hh"),
      hg: /* @__PURE__ */ __name(function() {
      }, "hg"),
      hi: /* @__PURE__ */ __name(function() {
      }, "hi"),
      hl: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "hl"),
      hm: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "hm"),
      hj: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "hj"),
      hk: /* @__PURE__ */ __name(function() {
      }, "hk"),
      hn: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "hn"),
      bA: /* @__PURE__ */ __name(function() {
      }, "bA"),
      uf(e4) {
        var t3, n3, r3 = {};
        return r3.a = r3.b = null, t3 = new E2.C(A2.B, N2.dD), n3 = new E2.ay(t3, N2.eP), r3.c = false, r3.a = e4.bT(new E2.iC(r3, n3), new E2.iD(r3), new E2.iE(r3, n3)), t3;
      },
      oD(e4) {
        var t3, n3;
        return e4.length < 14 ? null : (t3 = E2.f7(e4.buffer, e4.byteOffset, 14), n3 = t3.getUint32(0, true), (n3 & 16777215) == 16767231 ? O2.ag : n3 === 1196314761 && t3.getUint32(4, true) === 169478669 ? O2.ah : n3 === 1179011410 && t3.getUint32(8, true) === 1346520407 && t3.getUint16(12, true) === 20566 ? O2.ai : n3 === 1481919403 && t3.getUint32(4, true) === 3140497952 && t3.getUint32(8, true) === 169478669 ? O2.bV : null);
      },
      cU: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "cU"),
      dV: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "dV"),
      d5: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "d5"),
      cc: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "cc"),
      cd: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3, o3, s3, c3) {
        var l3 = this;
        l3.a = e4, l3.b = t3, l3.c = n3, l3.d = r3, l3.e = i3, l3.f = a3, l3.r = o3, l3.w = s3, l3.x = c3;
      }, "cd"),
      iC: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "iC"),
      iE: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "iE"),
      iD: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "iD"),
      iB: /* @__PURE__ */ __name(function() {
      }, "iB"),
      iM: /* @__PURE__ */ __name(function(e4, t3) {
        var n3 = this;
        n3.f = n3.e = n3.d = n3.c = 0, n3.r = null, n3.a = e4, n3.b = t3;
      }, "iM"),
      iO: /* @__PURE__ */ __name(function() {
      }, "iO"),
      iN: /* @__PURE__ */ __name(function() {
      }, "iN"),
      k7: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3) {
        var o3 = this;
        o3.x = o3.w = o3.r = o3.f = o3.e = o3.d = o3.c = 0, o3.z = o3.y = false, o3.Q = e4, o3.as = t3, o3.at = false, o3.ax = n3, o3.ay = r3, o3.a = i3, o3.b = a3;
      }, "k7"),
      k8: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "k8"),
      lJ: /* @__PURE__ */ __name(function(e4, t3, n3) {
        var r3 = this;
        r3.c = e4, r3.d = 0, r3.a = t3, r3.b = n3;
      }, "lJ"),
      dS: /* @__PURE__ */ __name(function() {
      }, "dS"),
      dR: /* @__PURE__ */ __name(function() {
      }, "dR"),
      aL: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "aL"),
      d9: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "d9"),
      fn: /* @__PURE__ */ __name(function(e4) {
        var t3 = this;
        t3.a = e4, t3.f = t3.e = t3.d = t3.c = t3.b = null;
      }, "fn"),
      kb: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.a = e4, i3.b = t3, i3.c = n3, i3.d = r3;
      }, "kb"),
      kc: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "kc"),
      kd: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "kd"),
      mJ(e4) {
        return e4 == null || e4.Q == null || e4.y === -1 || e4.z === -1 || e4.CW == null && e4.ay == null ? null : e4;
      },
      xS(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3, y3, b3;
        for (e4.f.a4(new E2.ne(t3)), E2.wx(t3), n3 = E2.a([], N2.b2), r3 = E2.a([], N2.bd), i3 = t3.c, O2.d.P(i3), i3.push("meshes"), a3 = e4.at, o3 = a3.b, s3 = e4.ax, c3 = s3.$ti.h("aa<p.E>"), l3 = e4.cx, a3 = a3.a, u3 = a3.length, d3 = 0; d3 < o3; ++d3) if (f3 = {}, p3 = d3 >= u3, m3 = p3 ? null : a3[d3], (m3 == null ? null : m3.w) != null && (p3 = m3.w, !p3.be(p3, new E2.nf()))) {
          for (f3.a = f3.b = -1, h3 = new E2.aa(s3, s3.gj(s3), c3); h3.q(); ) g3 = h3.d, g3.cy == m3 ? (_3 = g3.dx, _3 = (_3 == null ? null : _3.Q) != null) : _3 = false, _3 && (g3 = g3.dx, v3 = g3.Q.length, _3 = f3.b, (_3 === -1 || v3 < _3) && (f3.b = v3, f3.a = l3.bR(l3, g3)));
          f3.b < 1 || (i3.push(O2.c.k(d3)), i3.push("primitives"), p3.a4(new E2.ng(f3, t3, n3, r3)), i3.pop(), i3.pop());
        }
        if (i3.pop(), n3.length !== 0) for (; E2.wD(n3); ) for (i3 = r3.length, y3 = 0; y3 < r3.length; r3.length === i3 || (0, E2.cN)(r3), ++y3) b3 = r3[y3], b3.w || b3.dY(t3);
      },
      wD(e4) {
        var t3, n3;
        for (t3 = e4.length, n3 = 0; n3 < e4.length; e4.length === t3 || (0, E2.cN)(e4), ++n3) e4[n3].q();
        return e4.fixed$length && E2.Z(E2.ad("removeWhere")), O2.d.dP(e4, new E2.mL(), true), e4.length !== 0;
      },
      wx(e4) {
        var t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3;
        for (t3 = e4.d.ge4(), t3 = t3.gH(t3), n3 = e4.c; t3.q(); ) if (r3 = t3.gt(), i3 = E2.mJ(r3.a), i3 != null) {
          for (a3 = O2.m.i(0, i3.Q), a3 ??= 0, o3 = r3.b, O2.d.P(n3), r3 = i3.af(), r3 = new E2.aH(r3.a(), E2.A(r3).h("aH<1>")), s3 = D2.V(o3), c3 = 0, l3 = 0, u3 = false; r3.q(); u3 = true) {
            for (d3 = r3.gt(), f3 = 0; f3 < s3.gj(o3); ++f3) s3.i(o3, f3).a0(e4, c3, l3, d3);
            ++l3, l3 === a3 && (l3 = 0), ++c3;
          }
          if (u3) for (f3 = 0; f3 < s3.gj(o3); ++f3) s3.i(o3, f3).aF(e4);
        }
      },
      ne: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "ne"),
      nf: /* @__PURE__ */ __name(function() {
      }, "nf"),
      ng: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.a = e4, i3.b = t3, i3.c = n3, i3.d = r3;
      }, "ng"),
      mL: /* @__PURE__ */ __name(function() {
      }, "mL"),
      eX: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3) {
        var o3 = this;
        o3.a = e4, o3.b = t3, o3.c = n3, o3.d = r3, o3.e = i3, o3.r = o3.f = 0, o3.w = false, o3.y = o3.x = 0, o3.z = a3;
      }, "eX"),
      G(e4, t3, n3) {
        return new E2.ho(n3, e4, t3);
      },
      am(e4, t3, n3) {
        return new E2.kf(n3, e4, t3);
      },
      r(e4, t3, n3) {
        return new E2.kw(n3, e4, t3);
      },
      v(e4, t3, n3) {
        return new E2.iY(n3, e4, t3);
      },
      al(e4, t3, n3) {
        return new E2.hZ(n3, e4, t3);
      },
      wy(e4) {
        return "'" + E2.b(e4) + "'";
      },
      wu(e4) {
        return typeof e4 == "string" ? "'" + e4 + "'" : D2.as(e4);
      },
      bH: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "bH"),
      iH: /* @__PURE__ */ __name(function() {
      }, "iH"),
      ho: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "ho"),
      hL: /* @__PURE__ */ __name(function() {
      }, "hL"),
      hM: /* @__PURE__ */ __name(function() {
      }, "hM"),
      hE: /* @__PURE__ */ __name(function() {
      }, "hE"),
      hD: /* @__PURE__ */ __name(function() {
      }, "hD"),
      ht: /* @__PURE__ */ __name(function() {
      }, "ht"),
      hs: /* @__PURE__ */ __name(function() {
      }, "hs"),
      hI: /* @__PURE__ */ __name(function() {
      }, "hI"),
      hz: /* @__PURE__ */ __name(function() {
      }, "hz"),
      hr: /* @__PURE__ */ __name(function() {
      }, "hr"),
      hF: /* @__PURE__ */ __name(function() {
      }, "hF"),
      hx: /* @__PURE__ */ __name(function() {
      }, "hx"),
      hu: /* @__PURE__ */ __name(function() {
      }, "hu"),
      hw: /* @__PURE__ */ __name(function() {
      }, "hw"),
      hv: /* @__PURE__ */ __name(function() {
      }, "hv"),
      hp: /* @__PURE__ */ __name(function() {
      }, "hp"),
      hq: /* @__PURE__ */ __name(function() {
      }, "hq"),
      hH: /* @__PURE__ */ __name(function() {
      }, "hH"),
      hG: /* @__PURE__ */ __name(function() {
      }, "hG"),
      hy: /* @__PURE__ */ __name(function() {
      }, "hy"),
      hO: /* @__PURE__ */ __name(function() {
      }, "hO"),
      hQ: /* @__PURE__ */ __name(function() {
      }, "hQ"),
      hT: /* @__PURE__ */ __name(function() {
      }, "hT"),
      hU: /* @__PURE__ */ __name(function() {
      }, "hU"),
      hR: /* @__PURE__ */ __name(function() {
      }, "hR"),
      hS: /* @__PURE__ */ __name(function() {
      }, "hS"),
      hP: /* @__PURE__ */ __name(function() {
      }, "hP"),
      hV: /* @__PURE__ */ __name(function() {
      }, "hV"),
      hN: /* @__PURE__ */ __name(function() {
      }, "hN"),
      hB: /* @__PURE__ */ __name(function() {
      }, "hB"),
      hA: /* @__PURE__ */ __name(function() {
      }, "hA"),
      hJ: /* @__PURE__ */ __name(function() {
      }, "hJ"),
      hK: /* @__PURE__ */ __name(function() {
      }, "hK"),
      hC: /* @__PURE__ */ __name(function() {
      }, "hC"),
      iF: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "iF"),
      iG: /* @__PURE__ */ __name(function() {
      }, "iG"),
      kf: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "kf"),
      kh: /* @__PURE__ */ __name(function() {
      }, "kh"),
      ki: /* @__PURE__ */ __name(function() {
      }, "ki"),
      kg: /* @__PURE__ */ __name(function() {
      }, "kg"),
      kk: /* @__PURE__ */ __name(function() {
      }, "kk"),
      kl: /* @__PURE__ */ __name(function() {
      }, "kl"),
      km: /* @__PURE__ */ __name(function() {
      }, "km"),
      kj: /* @__PURE__ */ __name(function() {
      }, "kj"),
      kn: /* @__PURE__ */ __name(function() {
      }, "kn"),
      ko: /* @__PURE__ */ __name(function() {
      }, "ko"),
      kp: /* @__PURE__ */ __name(function() {
      }, "kp"),
      ku: /* @__PURE__ */ __name(function() {
      }, "ku"),
      kv: /* @__PURE__ */ __name(function() {
      }, "kv"),
      kt: /* @__PURE__ */ __name(function() {
      }, "kt"),
      kq: /* @__PURE__ */ __name(function() {
      }, "kq"),
      kr: /* @__PURE__ */ __name(function() {
      }, "kr"),
      ks: /* @__PURE__ */ __name(function() {
      }, "ks"),
      kw: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "kw"),
      lj: /* @__PURE__ */ __name(function() {
      }, "lj"),
      lk: /* @__PURE__ */ __name(function() {
      }, "lk"),
      l4: /* @__PURE__ */ __name(function() {
      }, "l4"),
      kL: /* @__PURE__ */ __name(function() {
      }, "kL"),
      ky: /* @__PURE__ */ __name(function() {
      }, "ky"),
      kz: /* @__PURE__ */ __name(function() {
      }, "kz"),
      kx: /* @__PURE__ */ __name(function() {
      }, "kx"),
      kA: /* @__PURE__ */ __name(function() {
      }, "kA"),
      kB: /* @__PURE__ */ __name(function() {
      }, "kB"),
      kC: /* @__PURE__ */ __name(function() {
      }, "kC"),
      kE: /* @__PURE__ */ __name(function() {
      }, "kE"),
      kD: /* @__PURE__ */ __name(function() {
      }, "kD"),
      kF: /* @__PURE__ */ __name(function() {
      }, "kF"),
      kG: /* @__PURE__ */ __name(function() {
      }, "kG"),
      kH: /* @__PURE__ */ __name(function() {
      }, "kH"),
      kI: /* @__PURE__ */ __name(function() {
      }, "kI"),
      kX: /* @__PURE__ */ __name(function() {
      }, "kX"),
      l_: /* @__PURE__ */ __name(function() {
      }, "l_"),
      l3: /* @__PURE__ */ __name(function() {
      }, "l3"),
      l1: /* @__PURE__ */ __name(function() {
      }, "l1"),
      kZ: /* @__PURE__ */ __name(function() {
      }, "kZ"),
      l2: /* @__PURE__ */ __name(function() {
      }, "l2"),
      l0: /* @__PURE__ */ __name(function() {
      }, "l0"),
      kY: /* @__PURE__ */ __name(function() {
      }, "kY"),
      l8: /* @__PURE__ */ __name(function() {
      }, "l8"),
      l6: /* @__PURE__ */ __name(function() {
      }, "l6"),
      l9: /* @__PURE__ */ __name(function() {
      }, "l9"),
      lg: /* @__PURE__ */ __name(function() {
      }, "lg"),
      ll: /* @__PURE__ */ __name(function() {
      }, "ll"),
      lf: /* @__PURE__ */ __name(function() {
      }, "lf"),
      kK: /* @__PURE__ */ __name(function() {
      }, "kK"),
      l7: /* @__PURE__ */ __name(function() {
      }, "l7"),
      lc: /* @__PURE__ */ __name(function() {
      }, "lc"),
      lb: /* @__PURE__ */ __name(function() {
      }, "lb"),
      la: /* @__PURE__ */ __name(function() {
      }, "la"),
      lh: /* @__PURE__ */ __name(function() {
      }, "lh"),
      li: /* @__PURE__ */ __name(function() {
      }, "li"),
      le: /* @__PURE__ */ __name(function() {
      }, "le"),
      l5: /* @__PURE__ */ __name(function() {
      }, "l5"),
      ld: /* @__PURE__ */ __name(function() {
      }, "ld"),
      kJ: /* @__PURE__ */ __name(function() {
      }, "kJ"),
      kM: /* @__PURE__ */ __name(function() {
      }, "kM"),
      kN: /* @__PURE__ */ __name(function() {
      }, "kN"),
      kO: /* @__PURE__ */ __name(function() {
      }, "kO"),
      kP: /* @__PURE__ */ __name(function() {
      }, "kP"),
      kQ: /* @__PURE__ */ __name(function() {
      }, "kQ"),
      kR: /* @__PURE__ */ __name(function() {
      }, "kR"),
      kS: /* @__PURE__ */ __name(function() {
      }, "kS"),
      kW: /* @__PURE__ */ __name(function() {
      }, "kW"),
      kV: /* @__PURE__ */ __name(function() {
      }, "kV"),
      kT: /* @__PURE__ */ __name(function() {
      }, "kT"),
      kU: /* @__PURE__ */ __name(function() {
      }, "kU"),
      iY: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "iY"),
      j0: /* @__PURE__ */ __name(function() {
      }, "j0"),
      iZ: /* @__PURE__ */ __name(function() {
      }, "iZ"),
      j_: /* @__PURE__ */ __name(function() {
      }, "j_"),
      j1: /* @__PURE__ */ __name(function() {
      }, "j1"),
      j4: /* @__PURE__ */ __name(function() {
      }, "j4"),
      j2: /* @__PURE__ */ __name(function() {
      }, "j2"),
      j3: /* @__PURE__ */ __name(function() {
      }, "j3"),
      j8: /* @__PURE__ */ __name(function() {
      }, "j8"),
      j6: /* @__PURE__ */ __name(function() {
      }, "j6"),
      ja: /* @__PURE__ */ __name(function() {
      }, "ja"),
      j7: /* @__PURE__ */ __name(function() {
      }, "j7"),
      j9: /* @__PURE__ */ __name(function() {
      }, "j9"),
      j5: /* @__PURE__ */ __name(function() {
      }, "j5"),
      jb: /* @__PURE__ */ __name(function() {
      }, "jb"),
      je: /* @__PURE__ */ __name(function() {
      }, "je"),
      jd: /* @__PURE__ */ __name(function() {
      }, "jd"),
      jc: /* @__PURE__ */ __name(function() {
      }, "jc"),
      jf: /* @__PURE__ */ __name(function() {
      }, "jf"),
      jg: /* @__PURE__ */ __name(function() {
      }, "jg"),
      jh: /* @__PURE__ */ __name(function() {
      }, "jh"),
      jl: /* @__PURE__ */ __name(function() {
      }, "jl"),
      jm: /* @__PURE__ */ __name(function() {
      }, "jm"),
      ju: /* @__PURE__ */ __name(function() {
      }, "ju"),
      jk: /* @__PURE__ */ __name(function() {
      }, "jk"),
      jj: /* @__PURE__ */ __name(function() {
      }, "jj"),
      jq: /* @__PURE__ */ __name(function() {
      }, "jq"),
      jp: /* @__PURE__ */ __name(function() {
      }, "jp"),
      jo: /* @__PURE__ */ __name(function() {
      }, "jo"),
      jv: /* @__PURE__ */ __name(function() {
      }, "jv"),
      jt: /* @__PURE__ */ __name(function() {
      }, "jt"),
      jn: /* @__PURE__ */ __name(function() {
      }, "jn"),
      jw: /* @__PURE__ */ __name(function() {
      }, "jw"),
      js: /* @__PURE__ */ __name(function() {
      }, "js"),
      jr: /* @__PURE__ */ __name(function() {
      }, "jr"),
      jx: /* @__PURE__ */ __name(function() {
      }, "jx"),
      jy: /* @__PURE__ */ __name(function() {
      }, "jy"),
      jB: /* @__PURE__ */ __name(function() {
      }, "jB"),
      jz: /* @__PURE__ */ __name(function() {
      }, "jz"),
      jA: /* @__PURE__ */ __name(function() {
      }, "jA"),
      jC: /* @__PURE__ */ __name(function() {
      }, "jC"),
      jE: /* @__PURE__ */ __name(function() {
      }, "jE"),
      jD: /* @__PURE__ */ __name(function() {
      }, "jD"),
      jF: /* @__PURE__ */ __name(function() {
      }, "jF"),
      jG: /* @__PURE__ */ __name(function() {
      }, "jG"),
      jH: /* @__PURE__ */ __name(function() {
      }, "jH"),
      jI: /* @__PURE__ */ __name(function() {
      }, "jI"),
      jJ: /* @__PURE__ */ __name(function() {
      }, "jJ"),
      jM: /* @__PURE__ */ __name(function() {
      }, "jM"),
      jL: /* @__PURE__ */ __name(function() {
      }, "jL"),
      jK: /* @__PURE__ */ __name(function() {
      }, "jK"),
      ji: /* @__PURE__ */ __name(function() {
      }, "ji"),
      hZ: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "hZ"),
      i5: /* @__PURE__ */ __name(function() {
      }, "i5"),
      i6: /* @__PURE__ */ __name(function() {
      }, "i6"),
      i8: /* @__PURE__ */ __name(function() {
      }, "i8"),
      i_: /* @__PURE__ */ __name(function() {
      }, "i_"),
      i7: /* @__PURE__ */ __name(function() {
      }, "i7"),
      i0: /* @__PURE__ */ __name(function() {
      }, "i0"),
      i3: /* @__PURE__ */ __name(function() {
      }, "i3"),
      i2: /* @__PURE__ */ __name(function() {
      }, "i2"),
      i1: /* @__PURE__ */ __name(function() {
      }, "i1"),
      ib: /* @__PURE__ */ __name(function() {
      }, "ib"),
      ia: /* @__PURE__ */ __name(function() {
      }, "ia"),
      ic: /* @__PURE__ */ __name(function() {
      }, "ic"),
      id: /* @__PURE__ */ __name(function() {
      }, "id"),
      i9: /* @__PURE__ */ __name(function() {
      }, "i9"),
      ie: /* @__PURE__ */ __name(function() {
      }, "ie"),
      i4: /* @__PURE__ */ __name(function() {
      }, "i4"),
      cW: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.a = e4, a3.b = t3, a3.c = n3, a3.d = r3, a3.e = i3;
      }, "cW"),
      we(e4) {
        e4.dy.push("image/webp");
      },
      ua(e4, t3) {
        return t3.toString, E2.w(e4, O2.df, t3), new E2.ca(E2.W(e4, "source", t3, false), E2.t(e4, O2.dY, t3, null), E2.x(e4, t3), false);
      },
      ca: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.d = e4, i3.e = null, i3.a = t3, i3.b = n3, i3.a$ = r3;
      }, "ca"),
      un(e4, t3) {
        return t3.toString, E2.w(e4, O2.d9, t3), E2.J(e4, "pointer", t3, null, null, A2.qK(), true), new E2.cf(E2.t(e4, O2.dZ, t3, null), E2.x(e4, t3), false);
      },
      wf(e4) {
        e4.fy.push("pointer");
      },
      cf: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.a$ = n3;
      }, "cf"),
      uo(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3 = null, m3 = "lights", h3 = "spot";
        if (t3.toString, E2.w(e4, O2.d0, t3), n3 = E2.eB(e4, m3, t3), r3 = N2.cp, n3 != null) {
          for (i3 = n3.gj(n3), r3 = E2.U(i3, p3, false, r3), a3 = new E2.F(r3, i3, m3, N2.E), i3 = t3.c, i3.push(m3), o3 = N2.h, s3 = 0; s3 < n3.gj(n3); ++s3) c3 = n3.i(0, s3), i3.push(O2.c.k(s3)), E2.w(c3, O2.co, t3), E2.ae(c3, "color", t3, O2.C, O2.l, 1, 0, false), E2.E(c3, "intensity", t3, 1, 1 / 0, -1 / 0, 1 / 0, 0, false, NaN), l3 = E2.J(c3, "type", t3, p3, O2.cJ, p3, true), l3 === "spot" ? E2.T(c3, h3, t3, E2.xm(), true) : (u3 = c3.v(h3), u3 && t3.n(A2.oi(), h3)), d3 = E2.E(c3, "range", t3, NaN, 1 / 0, 0, 1 / 0, -1 / 0, false, NaN), l3 === "directional" && !isNaN(d3) && t3.n(A2.oi(), "range"), E2.J(c3, "name", t3, p3, p3, p3, false), u3 = E2.t(c3, O2.e1, t3, p3), f3 = c3.i(0, "extras"), f3 != null && !o3.b(f3) && t3.n(A2.dk(), "extras"), r3[s3] = new E2.ba(u3, f3, false), i3.pop();
          i3.pop();
        } else r3 = D2.b8(0, r3), a3 = new E2.F(r3, 0, m3, N2.E);
        return new E2.bC(a3, E2.t(e4, O2.e_, t3, p3), E2.x(e4, t3), false);
      },
      up(e4, t3) {
        var n3, r3, i3 = "outerConeAngle";
        return E2.w(e4, O2.cV, t3), n3 = E2.E(e4, "innerConeAngle", t3, 0, 1.5707963267948966, -1 / 0, 1 / 0, 0, false, NaN), r3 = E2.E(e4, i3, t3, 0.7853981633974483, 1 / 0, 0, 1.5707963267948966, -1 / 0, false, NaN), r3 <= n3 && t3.l(A2.rF(), E2.a([n3, r3], N2.M), i3), new E2.cg(E2.t(e4, O2.e0, t3, null), E2.x(e4, t3), false);
      },
      uq(e4, t3) {
        return t3.toString, E2.w(e4, O2.d_, t3), new E2.ch(E2.W(e4, "light", t3, true), E2.t(e4, O2.e2, t3, null), E2.x(e4, t3), false);
      },
      bC: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.d = e4, i3.a = t3, i3.b = n3, i3.a$ = r3;
      }, "bC"),
      iS: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "iS"),
      ba: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.a$ = n3;
      }, "ba"),
      cg: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.a$ = n3;
      }, "cg"),
      ch: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.d = e4, i3.e = null, i3.a = t3, i3.b = n3, i3.a$ = r3;
      }, "ch"),
      ur(e4, t3) {
        var n3, r3, i3, a3;
        return t3.toString, E2.w(e4, O2.cv, t3), E2.E(e4, "anisotropyStrength", t3, 0, 1 / 0, -1 / 0, 1, 0, false, NaN), E2.E(e4, "anisotropyRotation", t3, 0, 1 / 0, -1 / 0, 1 / 0, -1 / 0, false, NaN), n3 = E2.T(e4, "anisotropyTexture", t3, E2.ao(), false), r3 = E2.t(e4, O2.e3, t3, null), i3 = new E2.ci(n3, r3, E2.x(e4, t3), false), a3 = E2.a([n3], N2.M), O2.d.D(a3, r3.gX()), t3.W(i3, a3), i3;
      },
      ci: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.f = e4, i3.a = t3, i3.b = n3, i3.a$ = r3;
      }, "ci"),
      us(e4, t3) {
        var n3, r3, i3, a3, o3, s3;
        return t3.toString, E2.w(e4, O2.ca, t3), E2.E(e4, "clearcoatFactor", t3, 0, 1 / 0, -1 / 0, 1, 0, false, NaN), n3 = E2.T(e4, "clearcoatTexture", t3, E2.ao(), false), E2.E(e4, "clearcoatRoughnessFactor", t3, 0, 1 / 0, -1 / 0, 1, 0, false, NaN), r3 = E2.T(e4, "clearcoatRoughnessTexture", t3, E2.ao(), false), i3 = E2.T(e4, "clearcoatNormalTexture", t3, E2.pV(), false), a3 = E2.t(e4, O2.e4, t3, null), o3 = new E2.cj(n3, r3, i3, a3, E2.x(e4, t3), false), s3 = E2.a([
          n3,
          r3,
          i3
        ], N2.M), O2.d.D(s3, a3.gX()), t3.W(o3, s3), o3;
      },
      cj: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3, a3) {
        var o3 = this;
        o3.e = e4, o3.r = t3, o3.w = n3, o3.a = r3, o3.b = i3, o3.a$ = a3;
      }, "cj"),
      ut(e4, t3) {
        return t3.toString, E2.w(e4, O2.cK, t3), E2.E(e4, "dispersion", t3, 0, 1 / 0, -1 / 0, 1 / 0, 0, false, NaN), new E2.ck(E2.t(e4, O2.e5, t3, null), E2.x(e4, t3), false);
      },
      ck: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.a$ = n3;
      }, "ck"),
      uu(e4, t3) {
        return t3.toString, E2.w(e4, O2.cL, t3), new E2.cl(E2.E(e4, "emissiveStrength", t3, 1, 1 / 0, -1 / 0, 1 / 0, 0, false, NaN), E2.t(e4, O2.e6, t3, null), E2.x(e4, t3), false);
      },
      cl: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.d = e4, i3.a = t3, i3.b = n3, i3.a$ = r3;
      }, "cl"),
      uv(e4, t3) {
        return t3.toString, E2.w(e4, O2.cX, t3), E2.E(e4, "ior", t3, 1.5, 1 / 0, -1 / 0, 1 / 0, 1, false, 0), new E2.cm(E2.t(e4, O2.e7, t3, null), E2.x(e4, t3), false);
      },
      cm: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.a$ = n3;
      }, "cm"),
      uw(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3 = "iridescenceThicknessMinimum", u3 = "iridescenceThicknessTexture";
        return t3.toString, E2.w(e4, O2.dg, t3), E2.E(e4, "iridescenceFactor", t3, 0, 1 / 0, -1 / 0, 1, 0, false, NaN), n3 = E2.T(e4, "iridescenceTexture", t3, E2.ao(), false), E2.E(e4, "iridescenceIor", t3, 1.3, 1 / 0, -1 / 0, 1 / 0, 1, false, NaN), r3 = E2.E(e4, l3, t3, 100, 1 / 0, -1 / 0, 1 / 0, 0, false, NaN), i3 = E2.E(e4, "iridescenceThicknessMaximum", t3, 400, 1 / 0, -1 / 0, 1 / 0, 0, false, NaN), a3 = E2.T(e4, u3, t3, E2.ao(), false), a3 == null ? !isNaN(r3) && e4.v(l3) && t3.n(A2.rK(), l3) : r3 === i3 && t3.n(A2.rL(), u3), o3 = E2.t(e4, O2.e8, t3, null), s3 = new E2.cn(n3, a3, o3, E2.x(e4, t3), false), c3 = E2.a([n3, a3], N2.M), O2.d.D(c3, o3.gX()), t3.W(s3, c3), s3;
      },
      cn: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.e = e4, a3.x = t3, a3.a = n3, a3.b = r3, a3.a$ = i3;
      }, "cn"),
      ux(e4, t3) {
        var n3, r3, i3, a3, o3;
        return t3.toString, E2.w(e4, O2.cI, t3), E2.ae(e4, "diffuseFactor", t3, O2.al, O2.P, 1, 0, false), n3 = E2.T(e4, "diffuseTexture", t3, E2.ao(), false), E2.ae(e4, "specularFactor", t3, O2.C, O2.l, 1, 0, false), E2.E(e4, "glossinessFactor", t3, 1, 1 / 0, -1 / 0, 1, 0, false, NaN), r3 = E2.T(e4, "specularGlossinessTexture", t3, E2.ao(), false), i3 = E2.t(e4, O2.dX, t3, null), a3 = new E2.co(n3, r3, i3, E2.x(e4, t3), false), o3 = E2.a([n3, r3], N2.M), O2.d.D(o3, i3.gX()), t3.W(a3, o3), a3;
      },
      co: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.e = e4, a3.w = t3, a3.a = n3, a3.b = r3, a3.a$ = i3;
      }, "co"),
      uy(e4, t3) {
        var n3, r3, i3, a3, o3;
        return t3.toString, E2.w(e4, O2.c9, t3), E2.ae(e4, "sheenColorFactor", t3, O2.ak, O2.l, 1, 0, false), n3 = E2.T(e4, "sheenColorTexture", t3, E2.ao(), false), E2.E(e4, "sheenRoughnessFactor", t3, 0, 1 / 0, -1 / 0, 1, 0, false, NaN), r3 = E2.T(e4, "sheenRoughnessTexture", t3, E2.ao(), false), i3 = E2.t(e4, O2.e9, t3, null), a3 = new E2.cp(n3, r3, i3, E2.x(e4, t3), false), o3 = E2.a([n3, r3], N2.M), O2.d.D(o3, i3.gX()), t3.W(a3, o3), a3;
      },
      cp: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.e = e4, a3.r = t3, a3.a = n3, a3.b = r3, a3.a$ = i3;
      }, "cp"),
      uz(e4, t3) {
        var n3, r3, i3, a3, o3;
        return t3.toString, E2.w(e4, O2.cc, t3), E2.E(e4, "specularFactor", t3, 1, 1 / 0, -1 / 0, 1, 0, false, NaN), n3 = E2.T(e4, "specularTexture", t3, E2.ao(), false), E2.ae(e4, "specularColorFactor", t3, O2.C, O2.l, 1 / 0, 0, false), r3 = E2.T(e4, "specularColorTexture", t3, E2.ao(), false), i3 = E2.t(e4, O2.ea, t3, null), a3 = new E2.cq(n3, r3, i3, E2.x(e4, t3), false), o3 = E2.a([n3, r3], N2.M), O2.d.D(o3, i3.gX()), t3.W(a3, o3), a3;
      },
      cq: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.e = e4, a3.r = t3, a3.a = n3, a3.b = r3, a3.a$ = i3;
      }, "cq"),
      uA(e4, t3) {
        var n3, r3, i3, a3;
        return t3.toString, E2.w(e4, O2.cf, t3), E2.E(e4, "transmissionFactor", t3, 0, 1 / 0, -1 / 0, 1, 0, false, NaN), n3 = E2.T(e4, "transmissionTexture", t3, E2.ao(), false), r3 = E2.t(e4, O2.eb, t3, null), i3 = new E2.cr(n3, r3, E2.x(e4, t3), false), a3 = E2.a([n3], N2.M), O2.d.D(a3, r3.gX()), t3.W(i3, a3), i3;
      },
      cr: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.e = e4, i3.a = t3, i3.b = n3, i3.a$ = r3;
      }, "cr"),
      uB(e4, t3) {
        return t3.toString, E2.w(e4, O2.cM, t3), new E2.cs(E2.t(e4, O2.ec, t3, null), E2.x(e4, t3), false);
      },
      cs: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.a$ = n3;
      }, "cs"),
      uC(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3, d3 = null, f3 = "variants";
        if (t3.toString, E2.w(e4, O2.dl, t3), n3 = E2.eB(e4, f3, t3), r3 = N2.J, n3 != null) {
          for (i3 = n3.gj(n3), r3 = E2.U(i3, d3, false, r3), a3 = new E2.F(r3, i3, f3, N2.u), i3 = t3.c, i3.push(f3), o3 = N2.h, s3 = 0; s3 < n3.gj(n3); ++s3) c3 = n3.i(0, s3), i3.push(O2.c.k(s3)), E2.w(c3, O2.d2, t3), E2.J(c3, "name", t3, d3, d3, d3, true), l3 = E2.t(c3, O2.ef, t3, d3), u3 = c3.i(0, "extras"), u3 != null && !o3.b(u3) && t3.n(A2.dk(), "extras"), r3[s3] = new E2.aM(l3, u3, false), i3.pop();
          i3.pop();
        } else r3 = D2.b8(0, r3), a3 = new E2.F(r3, 0, f3, N2.u);
        return new E2.bD(a3, E2.t(e4, O2.ed, t3, d3), E2.x(e4, t3), false);
      },
      uD(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3 = null, h3 = "mappings";
        if (t3.toString, E2.w(e4, O2.d1, t3), n3 = E2.eB(e4, h3, t3), r3 = N2.aa, n3 != null) {
          for (i3 = n3.gj(n3), r3 = E2.U(i3, m3, false, r3), a3 = new E2.F(r3, i3, h3, N2.B), i3 = t3.c, i3.push(h3), o3 = N2.h, s3 = 0; s3 < n3.gj(n3); ++s3) c3 = n3.i(0, s3), i3.push(O2.c.k(s3)), E2.w(c3, O2.dm, t3), l3 = E2.mR(c3, "variants", t3, true), u3 = E2.W(c3, "material", t3, true), E2.J(c3, "name", t3, m3, m3, m3, false), d3 = E2.t(c3, O2.ee, t3, m3), f3 = c3.i(0, "extras"), f3 != null && !o3.b(f3) && t3.n(A2.dk(), "extras"), r3[s3] = new E2.bb(l3, u3, d3, f3, false), i3.pop();
          i3.pop();
        } else r3 = D2.b8(0, r3), a3 = new E2.F(r3, 0, h3, N2.B);
        return p3 = new E2.ct(a3, E2.t(e4, O2.el, t3, m3), E2.x(e4, t3), false), t3.W(p3, E2.bc(a3, true, N2._)), p3;
      },
      bD: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.d = e4, i3.a = t3, i3.b = n3, i3.a$ = r3;
      }, "bD"),
      iT: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "iT"),
      aM: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.a$ = n3;
      }, "aM"),
      ct: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.d = e4, i3.a = t3, i3.b = n3, i3.a$ = r3;
      }, "ct"),
      iW: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "iW"),
      bb: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.d = e4, a3.e = t3, a3.r = null, a3.a = n3, a3.b = r3, a3.a$ = i3;
      }, "bb"),
      iU: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.a = e4, i3.b = t3, i3.c = n3, i3.d = r3;
      }, "iU"),
      iV: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "iV"),
      uE(e4, t3) {
        var n3, r3, i3, a3, o3;
        return t3.toString, E2.w(e4, O2.dp, t3), E2.ae(e4, "attenuationColor", t3, O2.C, O2.l, 1, 0, false), E2.E(e4, "attenuationDistance", t3, NaN, 1 / 0, 0, 1 / 0, -1 / 0, false, NaN), n3 = E2.E(e4, "thicknessFactor", t3, 0, 1 / 0, -1 / 0, 1 / 0, 0, false, NaN), r3 = E2.T(e4, "thicknessTexture", t3, E2.ao(), false), i3 = E2.t(e4, O2.eg, t3, null), a3 = new E2.cu(n3, r3, i3, E2.x(e4, t3), false), o3 = E2.a([r3], N2.M), O2.d.D(o3, i3.gX()), t3.W(a3, o3), a3;
      },
      cu: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.f = e4, a3.r = t3, a3.a = n3, a3.b = r3, a3.a$ = i3;
      }, "cu"),
      iX: /* @__PURE__ */ __name(function() {
      }, "iX"),
      uF(e4, t3) {
        return t3.toString, E2.w(e4, O2.d8, t3), E2.ae(e4, "offset", t3, O2.c5, O2.am, 1 / 0, -1 / 0, false), E2.E(e4, "rotation", t3, 0, 1 / 0, -1 / 0, 1 / 0, -1 / 0, false, NaN), E2.ae(e4, "scale", t3, O2.c7, O2.am, 1 / 0, -1 / 0, false), new E2.cv(E2.a0(e4, "texCoord", t3, -1, null, -1, 0, false), E2.t(e4, O2.eh, t3, null), E2.x(e4, t3), false);
      },
      cv: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.r = e4, i3.a = t3, i3.b = n3, i3.a$ = r3;
      }, "cv"),
      L: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.a = e4, i3.b = t3, i3.c = n3, i3.d = r3;
      }, "L"),
      O: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "O"),
      cb: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "cb"),
      cw: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "cw"),
      fo: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "fo"),
      oA(e4, t3) {
        var n3 = null, r3 = /* @__PURE__ */ new Uint8Array(12), i3 = new E2.dt(r3, e4, new E2.ay(new E2.C(A2.B, N2.f), N2.G));
        return t3.dx = true, i3.f = t3, i3.b = E2.f7(r3.buffer, 0, n3), i3.ch = E2.p1(n3, n3, n3, N2.w), i3;
      },
      dt: /* @__PURE__ */ __name(function(e4, t3, n3) {
        var r3 = this;
        r3.a = e4, r3.b = null, r3.c = t3, r3.d = null, r3.e = n3, r3.f = null, r3.as = r3.Q = r3.z = r3.y = r3.x = r3.w = r3.r = 0, r3.at = false, r3.ch = r3.ay = r3.ax = null, r3.CW = false, r3.cx = null;
      }, "dt"),
      ii: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "ii"),
      ij: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "ij"),
      ig: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "ig"),
      ih: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "ih"),
      ue(e4, t3) {
        var n3, r3 = {}, i3 = new E2.C(A2.B, N2.eD);
        return r3.a = false, r3.b = null, n3 = E2.p1(new E2.il(r3), new E2.im(r3), new E2.io(r3), N2.w), r3.b = e4.ea(new E2.ip(r3, n3, new E2.ay(i3, N2.a_), t3), n3.gdZ()), i3;
      },
      oB(e4, t3) {
        var n3 = new E2.cT(e4, new E2.ay(new E2.C(A2.B, N2.f), N2.G));
        return n3.e = t3, n3;
      },
      ud(e4, t3) {
        var n3, r3, i3, a3 = null, o3 = null;
        try {
          o3 = O2.ab.e1(e4);
        } catch (e5) {
          if (i3 = E2.M(e5), i3 instanceof E2.aK) return n3 = i3, t3.aE(A2.h3(), E2.a([n3], N2.M), true), a3;
          throw e5;
        }
        if (N2.t.b(o3)) try {
          return r3 = E2.oC(o3, t3), new E2.au("model/gltf+json", r3, a3);
        } catch (e5) {
          if (E2.M(e5) instanceof E2.bA) return a3;
          throw e5;
        }
        return t3.aE(A2.a2(), E2.a([o3, "object"], N2.M), true), a3;
      },
      au: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "au"),
      im: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "im"),
      io: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "io"),
      il: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "il"),
      ip: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.a = e4, i3.b = t3, i3.c = n3, i3.d = r3;
      }, "ip"),
      cT: /* @__PURE__ */ __name(function(e4, t3) {
        var n3 = this;
        n3.a = e4, n3.b = null, n3.c = t3, n3.e = n3.d = null, n3.f = true;
      }, "cT"),
      ik: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "ik"),
      dv: /* @__PURE__ */ __name(function() {
      }, "dv"),
      az(e4, t3, n3, r3) {
        var i3 = e4.i(0, t3);
        return i3 == null && e4.v(t3) && r3.l(A2.a2(), E2.a([null, n3], N2.M), t3), i3;
      },
      mM(e4) {
        return typeof e4 == "number" && Math.floor(e4) === e4 ? D2.no(e4) : e4;
      },
      W(e4, t3, n3, r3) {
        var i3 = E2.mM(E2.az(e4, t3, "integer", n3));
        if (E2.aI(i3)) {
          if (i3 >= 0) return i3;
          n3.n(A2.h2(), t3);
        } else i3 == null ? r3 && n3.F(A2.bs(), E2.a([t3], N2.M)) : n3.l(A2.a2(), E2.a([i3, "integer"], N2.M), t3);
        return -1;
      },
      pO(e4, t3, n3) {
        var r3 = E2.az(e4, t3, "boolean", n3);
        return r3 == null ? false : E2.eu(r3) ? r3 : (n3.l(A2.a2(), E2.a([r3, "boolean"], N2.M), t3), false);
      },
      a0(e4, t3, n3, r3, i3, a3, o3, s3) {
        var c3, l3 = E2.mM(E2.az(e4, t3, "integer", n3));
        if (E2.aI(l3)) {
          if (i3 != null) {
            if (!E2.nN(t3, l3, i3, n3, false)) return -1;
          } else if (c3 = l3 < o3 || a3 !== -1 && l3 > a3, c3) return n3.l(A2.ni(), E2.a([l3], N2.M), t3), -1;
          return l3;
        }
        if (l3 == null) {
          if (!s3) return r3;
          n3.F(A2.bs(), E2.a([t3], N2.M));
        } else n3.l(A2.a2(), E2.a([l3, "integer"], N2.M), t3);
        return -1;
      },
      E(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3) {
        var u3, d3 = E2.az(e4, t3, "number", n3);
        if (typeof d3 == "number") return u3 = d3 === l3 ? false : d3 < s3 || d3 <= a3 || d3 > o3 || d3 >= i3, u3 ? (n3.l(A2.ni(), E2.a([d3], N2.M), t3), NaN) : d3;
        if (d3 == null) {
          if (!c3) return r3;
          n3.F(A2.bs(), E2.a([t3], N2.M));
        } else n3.l(A2.a2(), E2.a([d3, "number"], N2.M), t3);
        return NaN;
      },
      J(e4, t3, n3, r3, i3, a3, o3) {
        var s3, c3 = E2.az(e4, t3, "string", n3);
        if (typeof c3 == "string") {
          if (i3 != null) E2.nN(t3, c3, i3, n3, false);
          else if (a3 == null ? s3 = null : (s3 = a3.b, s3 = s3.test(c3)), s3 === false) return n3.l(A2.rp(), E2.a([c3, a3.a], N2.M), t3), null;
          return c3;
        }
        if (c3 == null) {
          if (!o3) return r3;
          n3.F(A2.bs(), E2.a([t3], N2.M));
        } else n3.l(A2.a2(), E2.a([c3, "string"], N2.M), t3);
        return null;
      },
      pS(e4, t3) {
        var n3, r3, i3;
        try {
          return n3 = E2.p6(e4), i3 = n3, (i3.gcK() || i3.gbN() || i3.gcJ() || i3.gbP() || i3.gbO()) && t3.l(A2.t3(), E2.a([e4], N2.M), "uri"), n3;
        } catch (n4) {
          if (i3 = E2.M(n4), i3 instanceof E2.aK) return r3 = i3, t3.l(A2.od(), E2.a([e4, r3], N2.M), "uri"), null;
          throw n4;
        }
      },
      nP(e4, t3, n3, r3) {
        var i3 = E2.az(e4, t3, "object", n3);
        if (N2.t.b(i3)) return i3;
        if (i3 == null) {
          if (r3) return n3.F(A2.bs(), E2.a([t3], N2.M)), null;
        } else if (n3.l(A2.a2(), E2.a([i3, "object"], N2.M), t3), r3) return null;
        return E2.a9(N2.X, N2._);
      },
      T(e4, t3, n3, r3, i3) {
        var a3, o3, s3 = E2.az(e4, t3, "object", n3);
        return N2.t.b(s3) ? (a3 = n3.c, a3.push(t3), o3 = r3.$2(s3, n3), a3.pop(), o3) : (s3 == null ? i3 && n3.F(A2.bs(), E2.a([t3], N2.M)) : n3.l(A2.a2(), E2.a([s3, "object"], N2.M), t3), null);
      },
      mR(e4, t3, n3, r3) {
        var i3, a3, o3, s3, c3, l3, u3 = E2.az(e4, t3, "array", n3);
        if (N2.m.b(u3)) {
          if (i3 = D2.V(u3), i3.gA(u3)) return n3.n(A2.bX(), t3), null;
          for (a3 = n3.c, a3.push(t3), o3 = N2.e, s3 = E2.aD(o3), c3 = 0; c3 < i3.gj(u3); ++c3) l3 = i3.i(u3, c3), typeof l3 == "number" && Math.floor(l3) === l3 && (l3 = D2.no(l3)), E2.aI(l3) && l3 >= 0 ? (s3.C(0, l3) || n3.Z(A2.ob(), c3), i3.m(u3, c3, l3)) : (i3.m(u3, c3, -1), n3.Z(A2.h2(), c3));
          return a3.pop(), i3.aj(u3, o3);
        }
        return u3 == null ? r3 && n3.F(A2.bs(), E2.a([t3], N2.M)) : n3.l(A2.a2(), E2.a([u3, "array"], N2.M), t3), null;
      },
      x5(e4, t3, n3, r3) {
        var i3, a3 = E2.az(e4, t3, "object", n3);
        return N2.t.b(a3) ? a3.gA(a3) ? (n3.n(A2.bX(), t3), null) : (i3 = n3.c, i3.push(t3), a3.M(0, new E2.mS(r3, a3, n3)), i3.pop(), a3.ak(0, N2.X, N2.e)) : (i3 = N2.M, a3 == null ? n3.F(A2.bs(), E2.a([t3], i3)) : n3.l(A2.a2(), E2.a([a3, "object"], i3), t3), null);
      },
      x6(e4, t3, n3, r3) {
        var i3, a3, o3, s3, c3, l3, u3, d3 = E2.az(e4, t3, "array", n3);
        if (N2.m.b(d3)) {
          if (i3 = D2.V(d3), i3.gA(d3)) return n3.n(A2.bX(), t3), null;
          for (a3 = n3.c, a3.push(t3), o3 = N2.M, s3 = N2.t, c3 = false, l3 = 0; l3 < i3.gj(d3); ++l3) u3 = i3.i(d3, l3), s3.b(u3) ? u3.gA(u3) ? (n3.Z(A2.bX(), l3), c3 = true) : (a3.push(O2.c.k(l3)), u3.M(0, new E2.mT(r3, u3, n3)), a3.pop()) : (n3.F(A2.eC(), E2.a([u3, "object"], o3)), c3 = true);
          return a3.pop(), c3 ? null : (i3 = D2.nn(d3, N2.h), a3 = E2.A(i3).h("ab<p.E,h<e*,f*>*>"), E2.bc(new E2.ab(i3, new E2.mU(), a3), false, a3.h("ah.E")));
        }
        return d3 != null && n3.l(A2.a2(), E2.a([d3, "array"], N2.M), t3), null;
      },
      ae(e4, t3, n3, r3, i3, a3, o3, s3) {
        var c3, l3, u3, d3, f3, p3, m3, h3, g3 = null, _3 = E2.az(e4, t3, "array", n3);
        if (N2.m.b(_3)) {
          if (c3 = D2.V(_3), c3.gA(_3)) return n3.n(A2.bX(), t3), g3;
          if (i3 != null && !E2.nN(t3, c3.gj(_3), i3, n3, true)) return g3;
          for (l3 = E2.U(c3.gj(_3), 0, false, N2.F), u3 = N2.M, d3 = n3.c, f3 = false, p3 = 0; p3 < c3.gj(_3); ++p3) m3 = c3.i(_3, p3), typeof m3 == "number" ? (h3 = m3 == 1 / 0 || m3 == -1 / 0 || m3 < o3 || m3 > a3, h3 && (d3.push(t3), n3.ao(A2.ni(), E2.a([m3], u3), p3), d3.pop(), f3 = true), s3 ? (h3 = A2.ol(), h3[0] = m3, l3[p3] = h3[0]) : l3[p3] = m3) : (n3.l(A2.eC(), E2.a([m3, "number"], u3), t3), f3 = true);
          return f3 ? g3 : l3;
        }
        return _3 == null ? (c3 = r3 == null ? g3 : D2.cX(r3.slice(0), E2.a_(r3).c), c3) : (n3.l(A2.a2(), E2.a([_3, "array"], N2.M), t3), g3);
      },
      pP(e4, t3, n3, r3, i3) {
        var a3, o3, s3, c3, l3, u3, d3, f3, p3, m3 = E2.az(e4, t3, "array", n3);
        if (N2.m.b(m3)) {
          if (a3 = D2.V(m3), a3.gj(m3) !== i3) return n3.l(A2.oc(), E2.a([a3.gj(m3), E2.a([i3], N2.V)], N2.M), t3), null;
          for (o3 = E2.xR(r3), s3 = E2.q1(r3), c3 = E2.x_(r3, i3), l3 = N2.M, u3 = false, d3 = 0; d3 < a3.gj(m3); ++d3) f3 = a3.i(m3, d3), typeof f3 == "number" && Math.floor(f3) === f3 && (f3 = D2.no(f3)), E2.aI(f3) ? (p3 = f3 < o3 || f3 > s3, p3 && (n3.l(A2.rC(), E2.a([f3, O2.ay.i(0, r3)], l3), t3), u3 = true), c3[d3] = f3) : (n3.l(A2.eC(), E2.a([f3, "integer"], l3), t3), u3 = true);
          return u3 ? null : c3;
        }
        return m3 != null && n3.l(A2.a2(), E2.a([m3, "array"], N2.M), t3), null;
      },
      pQ(e4, t3, n3) {
        var r3, i3, a3, o3, s3, c3, l3, u3, d3 = E2.az(e4, t3, "array", n3);
        if (N2.m.b(d3)) {
          if (r3 = D2.V(d3), r3.gA(d3)) return n3.n(A2.bX(), t3), null;
          for (i3 = n3.c, i3.push(t3), a3 = N2.X, o3 = E2.aD(a3), s3 = N2.M, c3 = false, l3 = 0; l3 < r3.gj(d3); ++l3) u3 = r3.i(d3, l3), typeof u3 == "string" ? o3.C(0, u3) || n3.Z(A2.ob(), l3) : (n3.ao(A2.eC(), E2.a([u3, "string"], s3), l3), c3 = true);
          return i3.pop(), c3 ? null : r3.aj(d3, a3);
        }
        return d3 != null && n3.l(A2.a2(), E2.a([d3, "array"], N2.M), t3), null;
      },
      eB(e4, t3, n3) {
        var r3, i3, a3, o3, s3, c3, l3 = E2.az(e4, t3, "array", n3);
        if (N2.m.b(l3)) {
          if (r3 = D2.V(l3), r3.gA(l3)) return n3.n(A2.bX(), t3), null;
          for (i3 = r3.gH(l3), a3 = N2.t, o3 = N2.M, s3 = false; i3.q(); ) c3 = i3.gt(), a3.b(c3) || (n3.l(A2.eC(), E2.a([c3, "object"], o3), t3), s3 = true);
          return s3 ? null : r3.aj(l3, a3);
        }
        return r3 = N2.M, l3 == null ? n3.F(A2.bs(), E2.a([t3], r3)) : n3.l(A2.a2(), E2.a([l3, "array"], r3), t3), null;
      },
      t(e4, t3, n3, r3) {
        var i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3 = "extensions", _3 = E2.a9(N2.X, N2._), v3 = E2.nP(e4, g3, n3, false);
        if (v3.gA(v3)) return _3;
        for (i3 = n3.c, i3.push(g3), a3 = v3.gN(), a3 = a3.gH(a3), o3 = N2.ax, s3 = N2.c, c3 = r3 == null, l3 = n3.f, u3 = n3.r; a3.q(); ) {
          if (d3 = a3.gt(), f3 = E2.nP(v3, d3, n3, false), p3 = n3.ay, !p3.G(p3, d3)) {
            p3 = n3.at, p3 = p3.G(p3, d3), p3 || n3.n(A2.rk(), d3), _3.m(0, d3, f3);
            continue;
          }
          if (m3 = n3.Q.a.i(0, new E2.cb(t3, d3)), m3 == null) {
            n3.n(A2.rl(), d3);
            continue;
          }
          v3.gj(v3) > 1 && m3.b && n3.n(A2.rW(), d3), f3 != null && (i3.push(d3), h3 = m3.a.$2(f3, n3), _3.m(0, d3, h3), !m3.c && s3.b(h3) && (d3 = c3 ? t3 : r3, d3 = l3.c_(d3, new E2.mQ()), p3 = E2.a(i3.slice(0), E2.a_(i3)), p3.fixed$length = Array, D2.nm(d3, new E2.cw(h3, p3))), o3.b(h3) && (d3 = E2.a(i3.slice(0), E2.a_(i3)), d3.fixed$length = Array, u3.push(new E2.fo(h3, d3))), i3.pop());
        }
        return i3.pop(), _3;
      },
      x(e4, t3) {
        var n3 = e4.i(0, "extras");
        return n3 != null && !N2.h.b(n3) && t3.n(A2.dk(), "extras"), n3;
      },
      nN(e4, t3, n3, r3, i3) {
        var a3;
        return D2.on(n3, t3) ? true : (a3 = i3 ? A2.oc() : A2.rs(), r3.l(a3, E2.a([t3, n3], N2.M), e4), false);
      },
      w(e4, t3, n3) {
        var r3, i3, a3;
        for (r3 = e4.gN(), r3 = r3.gH(r3); r3.q(); ) i3 = r3.gt(), O2.d.G(t3, i3) ? a3 = false : (a3 = O2.d.G(O2.cP, i3), a3 = !a3), a3 && n3.n(A2.rq(), i3);
      },
      nT(e4, t3, n3, r3, i3, a3) {
        var o3, s3, c3, l3, u3, d3, f3 = i3.c;
        for (f3.push(r3), o3 = N2.M, s3 = n3.a, c3 = s3.length, l3 = 0; l3 < e4.gj(e4); ++l3) u3 = e4.i(0, l3), u3 !== -1 && (d3 = u3 == null || u3 < 0 || u3 >= c3 ? null : s3[u3], d3 == null ? i3.ao(A2.Q(), E2.a([u3], o3), l3) : (d3.a$ = true, t3[l3] = d3, a3.$3(d3, u3, l3)));
        f3.pop();
      },
      xi(e4) {
        var t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3, y3, b3, x3, S3, C3, w3, T3, D3, O3, k3, j3, M3, N3, P2, F, I, L, R, z = e4.a;
        return z[3] !== 0 || z[7] !== 0 || z[11] !== 0 || z[15] !== 1 || e4.cG() === 0 ? false : (t3 = A2.tt(), n3 = A2.tq(), r3 = A2.tr(), i3 = A2.oN, i3 ??= A2.oN = new E2.cE(/* @__PURE__ */ new Float32Array(3)), i3.bt(z[0], z[1], z[2]), a3 = Math.sqrt(i3.gaW()), i3.bt(z[4], z[5], z[6]), o3 = Math.sqrt(i3.gaW()), i3.bt(z[8], z[9], z[10]), s3 = Math.sqrt(i3.gaW()), e4.cG() < 0 && (a3 = -a3), t3 = t3.a, t3[0] = z[12], t3[1] = z[13], t3[2] = z[14], c3 = 1 / a3, l3 = 1 / o3, u3 = 1 / s3, d3 = A2.oL, d3 ??= A2.oL = new E2.cZ(/* @__PURE__ */ new Float32Array(16)), f3 = d3.a, f3[15] = z[15], f3[14] = z[14], f3[13] = z[13], f3[12] = z[12], f3[11] = z[11], f3[10] = z[10], f3[9] = z[9], f3[8] = z[8], f3[7] = z[7], f3[6] = z[6], f3[5] = z[5], f3[4] = z[4], f3[3] = z[3], f3[2] = z[2], f3[1] = z[1], f3[0] = z[0], f3[0] *= c3, f3[1] *= c3, f3[2] *= c3, f3[4] *= l3, f3[5] *= l3, f3[6] *= l3, f3[8] *= u3, f3[9] *= u3, f3[10] *= u3, p3 = A2.oM, p3 ??= A2.oM = new E2.f2(/* @__PURE__ */ new Float32Array(9)), m3 = p3.a, m3[0] = f3[0], m3[1] = f3[1], m3[2] = f3[2], m3[3] = f3[4], m3[4] = f3[5], m3[5] = f3[6], m3[6] = f3[8], m3[7] = f3[9], m3[8] = f3[10], n3.toString, z = m3[0], f3 = m3[4], h3 = m3[8], g3 = 0 + z + f3 + h3, g3 > 0 ? (_3 = Math.sqrt(g3 + 1), z = n3.a, z[3] = _3 * 0.5, _3 = 0.5 / _3, z[0] = (m3[5] - m3[7]) * _3, z[1] = (m3[6] - m3[2]) * _3, z[2] = (m3[1] - m3[3]) * _3) : (v3 = z < f3 ? f3 < h3 ? 2 : 1 : z < h3 ? 2 : 0, y3 = (v3 + 1) % 3, b3 = (v3 + 2) % 3, z = v3 * 3, f3 = y3 * 3, h3 = b3 * 3, _3 = Math.sqrt(m3[z + v3] - m3[f3 + y3] - m3[h3 + b3] + 1), n3 = n3.a, n3[v3] = _3 * 0.5, _3 = 0.5 / _3, n3[3] = (m3[f3 + b3] - m3[h3 + y3]) * _3, n3[y3] = (m3[z + y3] + m3[f3 + v3]) * _3, n3[b3] = (m3[z + b3] + m3[h3 + v3]) * _3, z = n3), r3 = r3.a, r3[0] = a3, r3[1] = o3, r3[2] = s3, n3 = A2.tp(), x3 = z[0], S3 = z[1], C3 = z[2], w3 = z[3], T3 = x3 + x3, D3 = S3 + S3, O3 = C3 + C3, k3 = x3 * T3, j3 = x3 * D3, M3 = x3 * O3, N3 = S3 * D3, P2 = S3 * O3, F = C3 * O3, I = w3 * T3, L = w3 * D3, R = w3 * O3, z = n3.a, z[0] = 1 - (N3 + F), z[1] = j3 + R, z[2] = M3 - L, z[3] = 0, z[4] = j3 - R, z[5] = 1 - (k3 + F), z[6] = P2 + I, z[7] = 0, z[8] = M3 + L, z[9] = P2 - I, z[10] = 1 - (k3 + N3), z[11] = 0, z[12] = t3[0], z[13] = t3[1], z[14] = t3[2], z[15] = 1, a3 = r3[0], o3 = r3[1], s3 = r3[2], z[0] *= a3, z[1] *= a3, z[2] *= a3, z[3] *= a3, z[4] *= o3, z[5] *= o3, z[6] *= o3, z[7] *= o3, z[8] *= s3, z[9] *= s3, z[10] *= s3, z[11] *= s3, z[12] = z[12], z[13] = z[13], z[14] = z[14], z[15] = z[15], Math.abs(n3.cL() - e4.cL()) < 5e-5);
      },
      x_(e4, t3) {
        switch (e4) {
          case 5120:
            return new Int8Array(t3);
          case 5121:
            return new Uint8Array(t3);
          case 5122:
            return new Int16Array(t3);
          case 5123:
            return new Uint16Array(t3);
          case 5124:
            return new Int32Array(t3);
          case 5125:
            return new Uint32Array(t3);
          default:
            throw E2.d(E2.K(null, null));
        }
      },
      mS: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "mS"),
      mT: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "mT"),
      mU: /* @__PURE__ */ __name(function() {
      }, "mU"),
      mQ: /* @__PURE__ */ __name(function() {
      }, "mQ"),
      F: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.a = e4, i3.b = t3, i3.c = n3, i3.$ti = r3;
      }, "F"),
      a1: /* @__PURE__ */ __name(function() {
      }, "a1"),
      fv: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = 0, this.b = e4, this.c = t3;
      }, "fv"),
      fw: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = 0, this.b = e4, this.c = t3;
      }, "fw"),
      eK: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "eK"),
      lF: /* @__PURE__ */ __name(function(e4, t3, n3, r3) {
        var i3 = this;
        i3.a = e4, i3.b = t3, i3.c = n3, i3.d = r3;
      }, "lF"),
      lI: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "lI"),
      lH: /* @__PURE__ */ __name(function() {
      }, "lH"),
      lG: /* @__PURE__ */ __name(function() {
      }, "lG"),
      uM() {
        return new E2.cZ(/* @__PURE__ */ new Float32Array(16));
      },
      v3() {
        return new E2.fl(/* @__PURE__ */ new Float32Array(4));
      },
      pb(e4) {
        var t3 = /* @__PURE__ */ new Float32Array(3);
        return t3[2] = e4[2], t3[1] = e4[1], t3[0] = e4[0], new E2.cE(t3);
      },
      pa() {
        return new E2.cE(/* @__PURE__ */ new Float32Array(3));
      },
      f2: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "f2"),
      cZ: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "cZ"),
      fl: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "fl"),
      cE: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "cE"),
      fA: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "fA"),
      xD() {
        var e4 = new E2.nb();
        D2.tE(t2.exports, E2.cK(new E2.n7(e4))), D2.tF(t2.exports, E2.cK(new E2.n8(e4))), D2.tG(t2.exports, E2.cK(new E2.n9())), D2.tD(t2.exports, E2.cK(new E2.na()));
      },
      h_(e4, t3) {
        return E2.xT(e4, t3);
      },
      xT(e4, t3) {
        var n3 = 0, r3 = E2.ex(N2.t), i3, a3 = 2, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3 = E2.ez(function(g3, _3) {
          for (g3 === 1 && (o3 = _3, n3 = a3); ; ) switch (n3) {
            case 0:
              if (!N2.a.b(e4)) throw E2.d(E2.K("data: Argument must be a Uint8Array.", null));
              l3 = E2.pv(t3), s3 = E2.pz(l3), c3 = null, u3 = E2.w0(l3 == null ? null : D2.tw(l3));
            case 3:
              switch (u3 == null ? null : u3.toLowerCase()) {
                case "glb":
                  n3 = 5;
                  break;
                case "gltf":
                  n3 = 6;
                  break;
                default:
                  n3 = 7;
              }
              break;
            case 5:
              c3 = E2.oA(E2.fs(e4, N2.w), s3), n3 = 4;
              break;
            case 6:
              c3 = E2.oB(E2.fs(e4, N2.w), s3), n3 = 4;
              break;
            case 7:
              return a3 = 9, n3 = 12, E2.dd(E2.ue(E2.fs(e4, N2.w), s3), h3);
            case 12:
              c3 = _3, a3 = 2, n3 = 11;
              break;
            case 9:
              throw a3 = 8, d3 = o3, E2.M(d3) instanceof E2.dv, d3;
            case 8:
              n3 = 2;
              break;
            case 11:
            case 4:
              return f3 = E2, p3 = l3, m3 = s3, n3 = 13, E2.dd(c3.c0(), h3);
            case 13:
              i3 = f3.fY(p3, m3, _3), n3 = 1;
              break;
            case 1:
              return E2.es(i3, r3);
            case 2:
              return E2.er(o3, r3);
          }
        });
        return E2.et(h3, r3);
      },
      nV(e4, t3) {
        var n3 = 0, r3 = E2.ex(N2.t), i3, a3, o3, s3 = E2.ez(function(s4, c3) {
          if (s4 === 1) return E2.er(c3, r3);
          for (; ; ) switch (n3) {
            case 0:
              if (typeof e4 != "string") throw E2.d(E2.K("json: Argument must be a string.", null));
              a3 = E2.pv(t3), o3 = E2.pz(a3), i3 = E2.fY(a3, o3, E2.ud(e4, o3)), n3 = 1;
              break;
            case 1:
              return E2.es(i3, r3);
          }
        });
        return E2.et(s3, r3);
      },
      pv(e4) {
        if (e4 != null && (typeof e4 == "number" || E2.eu(e4) || typeof e4 == "string" || N2.l.b(e4))) throw E2.d(E2.K("options: Value must be an object.", null));
        return N2.bv.a(e4);
      },
      fY(e4, t3, n3) {
        var r3 = 0, i3 = E2.ex(N2.t), a3, o3, s3, c3, l3, u3 = E2.ez(function(d3, f3) {
          if (d3 === 1) return E2.er(f3, i3);
          for (; ; ) switch (r3) {
            case 0:
              if (l3 = e4 == null, l3) s3 = null, c3 = null;
              else {
                if (o3 = D2.b1(e4), s3 = E2.wd(o3.gbo(e4)), o3.gbL(e4) != null && !N2.b1.b(o3.gbL(e4))) throw E2.d(E2.K("options.externalResourceFunction: Value must be a function.", null));
                if (c3 = o3.gbL(e4), o3.gc6(e4) != null && !E2.eu(o3.gc6(e4))) throw E2.d(E2.K("options.writeTimestamp: Value must be a boolean.", null));
              }
              r3 = (n3 == null ? null : n3.b) == null ? 4 : 3;
              break;
            case 3:
              return r3 = 5, E2.dd(E2.wc(t3, n3, c3).aX(), u3);
            case 5:
            case 4:
              l3 = l3 ? null : D2.tz(e4), a3 = new E2.lF(s3, t3, n3, l3 ?? true).bn(), r3 = 1;
              break;
            case 1:
              return E2.es(a3, i3);
          }
        });
        return E2.et(u3, i3);
      },
      wd(e4) {
        var t3, n3;
        if (e4 != null) {
          if (typeof e4 == "string") try {
            return n3 = E2.p6(e4), n3;
          } catch (e5) {
            throw n3 = E2.M(e5), n3 instanceof E2.aK ? (t3 = n3, E2.d(E2.K("options.uri: " + E2.b(t3) + ".", null))) : e5;
          }
          throw E2.d(E2.K("options.uri: Value must be a string.", null));
        }
        return null;
      },
      pz(e4) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3 = null, p3 = "]: Value must be a non-empty String.";
        if (e4 != null) {
          if (n3 = D2.b1(e4), n3.gbM(e4) != null && typeof n3.gbM(e4) != "string") throw E2.d(E2.K("options.format: Value must be a string.", f3));
          if (r3 = n3.gbk(e4) == null ? false : !E2.aI(n3.gbk(e4)) || n3.gbk(e4) < 0, r3) throw E2.d(E2.K("options.maxIssues: Value must be a non-negative integer.", f3));
          if (n3.gaY(e4) != null && n3.gaU(e4) != null) throw E2.d(E2.K("options.onlyIssues cannot be used along with options.ignoredIssues.", f3));
          if (n3.gaY(e4) != null) {
            if (!N2.l.b(n3.gaY(e4))) throw E2.d(E2.K("options.onlyIssues: Value must be an array.", f3));
            for (i3 = E2.a([], N2.i), a3 = 0; a3 < D2.a3(n3.gaY(e4)); ++a3) if (o3 = D2.nl(n3.gaY(e4), a3), typeof o3 == "string" && o3.length !== 0) i3.push(o3);
            else throw E2.d(E2.K("options.onlyIssues[" + a3 + p3, f3));
          } else i3 = f3;
          if (n3.gaU(e4) != null) {
            if (!N2.l.b(n3.gaU(e4))) throw E2.d(E2.K("options.ignoredIssues: Value must be an array.", f3));
            for (s3 = E2.a([], N2.i), a3 = 0; a3 < D2.a3(n3.gaU(e4)); ++a3) if (o3 = D2.nl(n3.gaU(e4), a3), typeof o3 == "string" && o3.length !== 0) s3.push(o3);
            else throw E2.d(E2.K("options.ignoredIssues[" + a3 + p3, f3));
          } else s3 = f3;
          if (n3.gam(e4) != null) {
            if (typeof n3.gam(e4) == "number" || E2.eu(n3.gam(e4)) || typeof n3.gam(e4) == "string" || N2.l.b(n3.gam(e4))) throw E2.d(E2.K("options.severityOverrides: Value must be an object.", f3));
            for (r3 = N2.X, c3 = E2.a9(r3, N2.dz), r3 = D2.nn(t2.Object.keys(n3.gam(e4)), r3), r3 = new E2.aa(r3, r3.gj(r3), E2.A(r3).h("aa<p.E>")); r3.q(); ) if (l3 = r3.d, u3 = n3.gam(e4)[l3], E2.aI(u3) && u3 >= 0 && u3 <= 3) c3.m(0, l3, O2.cn[u3]);
            else throw E2.d(E2.K('options.severityOverrides["' + E2.b(l3) + '"]: Value must be one of [0, 1, 2, 3].', f3));
          } else c3 = f3;
          d3 = E2.p9(s3, n3.gbk(e4), i3, c3);
        } else d3 = f3;
        return E2.u3(d3);
      },
      wc(e4, t3, n3) {
        var r3 = new E2.mG(n3), i3 = new E2.e_("options.externalResourceFunction is required to load this resource.");
        return new E2.kb(t3.b, e4, new E2.mE(e4, t3, n3, r3, i3), new E2.mF(n3, r3, i3));
      },
      bf: /* @__PURE__ */ __name(function() {
      }, "bf"),
      hX: /* @__PURE__ */ __name(function() {
      }, "hX"),
      d8: /* @__PURE__ */ __name(function() {
      }, "d8"),
      nb: /* @__PURE__ */ __name(function() {
      }, "nb"),
      n7: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "n7"),
      n6: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "n6"),
      n3: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "n3"),
      n4: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "n4"),
      n8: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "n8"),
      n5: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "n5"),
      n1: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "n1"),
      n2: /* @__PURE__ */ __name(function(e4, t3) {
        this.a = e4, this.b = t3;
      }, "n2"),
      n9: /* @__PURE__ */ __name(function() {
      }, "n9"),
      na: /* @__PURE__ */ __name(function() {
      }, "na"),
      mG: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "mG"),
      mH: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "mH"),
      mI: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "mI"),
      mE: /* @__PURE__ */ __name(function(e4, t3, n3, r3, i3) {
        var a3 = this;
        a3.a = e4, a3.b = t3, a3.c = n3, a3.d = r3, a3.e = i3;
      }, "mE"),
      mF: /* @__PURE__ */ __name(function(e4, t3, n3) {
        this.a = e4, this.b = t3, this.c = n3;
      }, "mF"),
      ff: /* @__PURE__ */ __name(function(e4) {
        this.a = e4;
      }, "ff"),
      nU(e4) {
        return E2.Z(E2.uG(e4));
      },
      w4(e4) {
        var t3;
        return e4.$dart_jsFunction ?? (t3 = /* @__PURE__ */ (function(e5, t4) {
          return function() {
            return e5(t4, Array.prototype.slice.apply(arguments));
          };
        })(E2.w3, e4), t3[A2.nW()] = e4, e4.$dart_jsFunction = t3, t3);
      },
      w3(e4, t3) {
        return E2.v_(e4, t3, null);
      },
      cK(e4) {
        return typeof e4 == "function" ? e4 : E2.w4(e4);
      },
      wg(e4) {
        var t3 = "POSITION", n3 = "TEXCOORD", r3 = e4.fr;
        r3.i(0, t3).D(0, O2.dh), r3.i(0, "NORMAL").D(0, O2.Q), r3.i(0, "TANGENT").D(0, O2.ds), r3.i(0, n3).D(0, O2.cd), r3 = e4.fx, r3.i(0, t3).D(0, O2.cx), r3.i(0, "NORMAL").D(0, O2.Q), r3.i(0, "TANGENT").D(0, O2.Q), r3.i(0, n3).D(0, O2.dn);
      },
      b0(e4) {
        switch (e4) {
          case 5120:
          case 5121:
            return 1;
          case 5122:
          case 5123:
            return 2;
          case 5124:
          case 5125:
          case 5126:
            return 4;
          default:
            return -1;
        }
      },
      xR(e4) {
        switch (e4) {
          case 5121:
          case 5123:
          case 5125:
            return 0;
          case 5120:
            return -128;
          case 5122:
            return -32768;
          case 5124:
            return -2147483648;
          default:
            throw E2.d(E2.K(null, null));
        }
      },
      q1(e4) {
        switch (e4) {
          case 5120:
            return 127;
          case 5121:
            return 255;
          case 5122:
            return 32767;
          case 5123:
            return 65535;
          case 5124:
            return 2147483647;
          case 5125:
            return 4294967295;
          default:
            throw E2.d(E2.K(null, null));
        }
      },
      fW(e4, t3) {
        var n3 = e4 + t3 & 536870911;
        return n3 = n3 + ((n3 & 524287) << 10) & 536870911, n3 ^ n3 >>> 6;
      },
      px(e4) {
        var t3 = e4 + ((e4 & 67108863) << 3) & 536870911;
        return t3 ^= t3 >>> 11, t3 + ((t3 & 16383) << 15) & 536870911;
      }
    }, D2 = {
      nS(e4, t3, n3, r3) {
        return {
          i: e4,
          p: t3,
          e: n3,
          x: r3
        };
      },
      mV(e4) {
        var t3, n3, r3, i3, a3, o3 = e4[j2.dispatchPropertyName];
        if (o3 ?? A2.nQ ?? (E2.xe(), o3 = e4[j2.dispatchPropertyName]), o3 != null) {
          if (t3 = o3.p, false === t3) return o3.i;
          if (true === t3) return e4;
          if (n3 = Object.getPrototypeOf(e4), t3 === n3) return o3.i;
          if (o3.e === n3) throw E2.d(E2.p4("Return interceptor for " + E2.b(t3(e4, o3))));
        }
        return r3 = e4.constructor, r3 == null ? i3 = null : (a3 = A2.mg, a3 ??= A2.mg = j2.getIsolateTag("_$dart_js"), i3 = r3[a3]), i3 != null || (i3 = E2.xC(e4), i3 != null) ? i3 : typeof e4 == "function" ? O2.c2 : (t3 = Object.getPrototypeOf(e4), t3 == null || t3 === Object.prototype ? O2.aA : typeof r3 == "function" ? (a3 = A2.mg, a3 ??= A2.mg = j2.getIsolateTag("_$dart_js"), Object.defineProperty(r3, a3, {
          value: O2.X,
          enumerable: false,
          writable: true,
          configurable: true
        }), O2.X) : O2.X);
      },
      b8(e4, t3) {
        if (e4 < 0 || e4 > 4294967295) throw E2.d(E2.Y(e4, 0, 4294967295, "length", null));
        return D2.cX(Array(e4), t3);
      },
      oF(e4, t3) {
        if (e4 > 4294967295) throw E2.d(E2.Y(e4, 0, 4294967295, "length", null));
        return D2.cX(Array(e4), t3);
      },
      cX(e4, t3) {
        return D2.nr(E2.a(e4, t3.h("D<0>")));
      },
      nr(e4) {
        return e4.fixed$length = Array, e4;
      },
      uj(e4) {
        if (e4 < 256) switch (e4) {
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 32:
          case 133:
          case 160:
            return true;
          default:
            return false;
        }
        switch (e4) {
          case 5760:
          case 8192:
          case 8193:
          case 8194:
          case 8195:
          case 8196:
          case 8197:
          case 8198:
          case 8199:
          case 8200:
          case 8201:
          case 8202:
          case 8232:
          case 8233:
          case 8239:
          case 8287:
          case 12288:
          case 65279:
            return true;
          default:
            return false;
        }
      },
      oG(e4, t3) {
        for (var n3, r3; t3 > 0 && (n3 = t3 - 1, r3 = O2.a.B(e4, n3), !(r3 !== 32 && r3 !== 13 && !D2.uj(r3))); t3 = n3) ;
        return t3;
      },
      bV(e4) {
        return typeof e4 == "number" ? Math.floor(e4) == e4 ? D2.dy.prototype : D2.eZ.prototype : typeof e4 == "string" ? D2.bB.prototype : e4 == null ? D2.dz.prototype : typeof e4 == "boolean" ? D2.dx.prototype : e4.constructor == Array ? D2.D.prototype : typeof e4 == "object" ? e4 instanceof E2.c ? e4 : D2.mV(e4) : typeof e4 == "function" ? D2.b9.prototype : e4;
      },
      V(e4) {
        return typeof e4 == "string" ? D2.bB.prototype : e4 == null ? e4 : e4.constructor == Array ? D2.D.prototype : typeof e4 == "object" ? e4 instanceof E2.c ? e4 : D2.mV(e4) : typeof e4 == "function" ? D2.b9.prototype : e4;
      },
      bp(e4) {
        return e4 == null ? e4 : e4.constructor == Array ? D2.D.prototype : typeof e4 == "object" ? e4 instanceof E2.c ? e4 : D2.mV(e4) : typeof e4 == "function" ? D2.b9.prototype : e4;
      },
      x7(e4) {
        return typeof e4 == "number" ? D2.ce.prototype : e4 == null || e4 instanceof E2.c ? e4 : D2.bL.prototype;
      },
      x8(e4) {
        return typeof e4 == "number" ? D2.ce.prototype : typeof e4 == "string" ? D2.bB.prototype : e4 == null || e4 instanceof E2.c ? e4 : D2.bL.prototype;
      },
      x9(e4) {
        return typeof e4 == "string" ? D2.bB.prototype : e4 == null || e4 instanceof E2.c ? e4 : D2.bL.prototype;
      },
      b1(e4) {
        return e4 == null ? e4 : typeof e4 == "object" ? e4 instanceof E2.c ? e4 : D2.mV(e4) : typeof e4 == "function" ? D2.b9.prototype : e4;
      },
      om(e4, t3) {
        return typeof e4 == "number" && typeof t3 == "number" ? e4 + t3 : D2.x8(e4).ae(e4, t3);
      },
      af(e4, t3) {
        return e4 == null ? t3 == null : typeof e4 == "object" ? D2.bV(e4).O(e4, t3) : t3 != null && e4 === t3;
      },
      nl(e4, t3) {
        return typeof t3 == "number" && (e4.constructor == Array || typeof e4 == "string" || E2.pU(e4, e4[j2.dispatchPropertyName])) && t3 >>> 0 === t3 && t3 < e4.length ? e4[t3] : D2.V(e4).i(e4, t3);
      },
      tv(e4, t3, n3) {
        return typeof t3 == "number" && (e4.constructor == Array || E2.pU(e4, e4[j2.dispatchPropertyName])) && !e4.immutable$list && t3 >>> 0 === t3 && t3 < e4.length ? e4[t3] = n3 : D2.bp(e4).m(e4, t3, n3);
      },
      nm(e4, t3) {
        return D2.bp(e4).C(e4, t3);
      },
      nn(e4, t3) {
        return D2.bp(e4).aj(e4, t3);
      },
      on(e4, t3) {
        return D2.bp(e4).G(e4, t3);
      },
      eD(e4, t3) {
        return D2.bp(e4).V(e4, t3);
      },
      tw(e4) {
        return D2.b1(e4).gbM(e4);
      },
      bY(e4) {
        return D2.bV(e4).gE(e4);
      },
      oo(e4) {
        return D2.V(e4).gA(e4);
      },
      tx(e4) {
        return D2.V(e4).ga8(e4);
      },
      aA(e4) {
        return D2.bp(e4).gH(e4);
      },
      a3(e4) {
        return D2.V(e4).gj(e4);
      },
      ty(e4) {
        return D2.b1(e4).ger(e4);
      },
      tz(e4) {
        return D2.b1(e4).gc6(e4);
      },
      tA(e4, t3, n3) {
        return D2.bp(e4).b0(e4, t3, n3);
      },
      bt(e4, t3, n3) {
        return D2.bp(e4).al(e4, t3, n3);
      },
      tB(e4, t3) {
        return D2.bV(e4).bm(e4, t3);
      },
      tC(e4, t3) {
        return D2.V(e4).sj(e4, t3);
      },
      tD(e4, t3) {
        return D2.b1(e4).sdf(e4, t3);
      },
      tE(e4, t3) {
        return D2.b1(e4).seB(e4, t3);
      },
      tF(e4, t3) {
        return D2.b1(e4).seD(e4, t3);
      },
      tG(e4, t3) {
        return D2.b1(e4).seE(e4, t3);
      },
      op(e4, t3) {
        return D2.bp(e4).a6(e4, t3);
      },
      tH(e4, t3, n3) {
        return D2.b1(e4).d1(e4, t3, n3);
      },
      tI(e4, t3, n3) {
        return D2.b1(e4).es(e4, t3, n3);
      },
      no(e4) {
        return D2.x7(e4).eu(e4);
      },
      h4(e4, t3) {
        return D2.bp(e4).b_(e4, t3);
      },
      as(e4) {
        return D2.bV(e4).k(e4);
      },
      tJ(e4) {
        return D2.x9(e4).ey(e4);
      },
      cV: /* @__PURE__ */ __name(function() {
      }, "cV"),
      dx: /* @__PURE__ */ __name(function() {
      }, "dx"),
      dz: /* @__PURE__ */ __name(function() {
      }, "dz"),
      f_: /* @__PURE__ */ __name(function() {
      }, "f_"),
      aN: /* @__PURE__ */ __name(function() {
      }, "aN"),
      fj: /* @__PURE__ */ __name(function() {
      }, "fj"),
      bL: /* @__PURE__ */ __name(function() {
      }, "bL"),
      b9: /* @__PURE__ */ __name(function() {
      }, "b9"),
      D: /* @__PURE__ */ __name(function(e4) {
        this.$ti = e4;
      }, "D"),
      iL: /* @__PURE__ */ __name(function(e4) {
        this.$ti = e4;
      }, "iL"),
      b4: /* @__PURE__ */ __name(function(e4, t3, n3) {
        var r3 = this;
        r3.a = e4, r3.b = t3, r3.c = 0, r3.d = null, r3.$ti = n3;
      }, "b4"),
      ce: /* @__PURE__ */ __name(function() {
      }, "ce"),
      dy: /* @__PURE__ */ __name(function() {
      }, "dy"),
      eZ: /* @__PURE__ */ __name(function() {
      }, "eZ"),
      bB: /* @__PURE__ */ __name(function() {
      }, "bB")
    }, O2 = {}, k2 = [
      E2,
      D2,
      O2
    ], A2 = {};
    E2.ns.prototype = {}, D2.cV.prototype = {
      O(e4, t3) {
        return e4 === t3;
      },
      gE(e4) {
        return E2.d0(e4);
      },
      k(e4) {
        return "Instance of '" + E2.b(E2.ka(e4)) + "'";
      },
      bm(e4, t3) {
        throw E2.d(new E2.dH(e4, t3.gcT(), t3.gcX(), t3.gcU(), null));
      }
    }, D2.dx.prototype = {
      k(e4) {
        return String(e4);
      },
      gE(e4) {
        return e4 ? 519018 : 218159;
      },
      $iS: 1
    }, D2.dz.prototype = {
      O(e4, t3) {
        return t3 == null;
      },
      k(e4) {
        return "null";
      },
      gE(e4) {
        return 0;
      },
      bm(e4, t3) {
        return this.d6(e4, t3);
      },
      $il: 1
    }, D2.f_.prototype = {}, D2.aN.prototype = {
      gE(e4) {
        return 0;
      },
      k(e4) {
        return String(e4);
      },
      $ibf: 1,
      $id8: 1,
      ger(e4) {
        return e4.then;
      },
      d1(e4, t3) {
        return e4.then(t3);
      },
      es(e4, t3, n3) {
        return e4.then(t3, n3);
      },
      seB(e4, t3) {
        return e4.validateBytes = t3;
      },
      seD(e4, t3) {
        return e4.validateString = t3;
      },
      seE(e4, t3) {
        return e4.version = t3;
      },
      sdf(e4, t3) {
        return e4.supportedExtensions = t3;
      },
      gbo(e4) {
        return e4.uri;
      },
      gbM(e4) {
        return e4.format;
      },
      gbL(e4) {
        return e4.externalResourceFunction;
      },
      gc6(e4) {
        return e4.writeTimestamp;
      },
      gbk(e4) {
        return e4.maxIssues;
      },
      gaU(e4) {
        return e4.ignoredIssues;
      },
      gaY(e4) {
        return e4.onlyIssues;
      },
      gam(e4) {
        return e4.severityOverrides;
      }
    }, D2.fj.prototype = {}, D2.bL.prototype = {}, D2.b9.prototype = {
      k(e4) {
        var t3 = e4[A2.nW()];
        return t3 == null ? this.da(e4) : "JavaScript function for " + E2.b(D2.as(t3));
      },
      $iaB: 1
    }, D2.D.prototype = {
      aj(e4, t3) {
        return new E2.b5(e4, E2.a_(e4).h("@<1>").I(t3).h("b5<1,2>"));
      },
      C(e4, t3) {
        e4.fixed$length && E2.Z(E2.ad("add")), e4.push(t3);
      },
      dP(e4, t3, n3) {
        var r3, i3, a3, o3 = [], s3 = e4.length;
        for (r3 = 0; r3 < s3; ++r3) if (i3 = e4[r3], t3.$1(i3) || o3.push(i3), e4.length !== s3) throw E2.d(E2.ag(e4));
        if (a3 = o3.length, a3 !== s3) for (this.sj(e4, a3), r3 = 0; r3 < o3.length; ++r3) e4[r3] = o3[r3];
      },
      D(e4, t3) {
        var n3;
        if (e4.fixed$length && E2.Z(E2.ad("addAll")), Array.isArray(t3)) {
          this.di(e4, t3);
          return;
        }
        for (n3 = D2.aA(t3); n3.q(); ) e4.push(n3.gt());
      },
      di(e4, t3) {
        var n3, r3 = t3.length;
        if (r3 !== 0) {
          if (e4 === t3) throw E2.d(E2.ag(e4));
          for (n3 = 0; n3 < r3; ++n3) e4.push(t3[n3]);
        }
      },
      P(e4) {
        e4.fixed$length && E2.Z(E2.ad("clear")), e4.length = 0;
      },
      al(e4, t3, n3) {
        return new E2.ab(e4, t3, E2.a_(e4).h("@<1>").I(n3).h("ab<1,2>"));
      },
      cQ(e4, t3) {
        var n3, r3 = E2.U(e4.length, "", false, N2.R);
        for (n3 = 0; n3 < e4.length; ++n3) r3[n3] = E2.b(e4[n3]);
        return r3.join(t3);
      },
      a6(e4, t3) {
        return E2.dQ(e4, t3, null, E2.a_(e4).c);
      },
      bf(e4, t3, n3) {
        var r3, i3, a3 = e4.length;
        for (r3 = 0; r3 < a3; ++r3) {
          if (i3 = e4[r3], t3.$1(i3)) return i3;
          if (e4.length !== a3) throw E2.d(E2.ag(e4));
        }
        return n3.$0();
      },
      V(e4, t3) {
        return e4[t3];
      },
      a1(e4, t3, n3) {
        if (t3 < 0 || t3 > e4.length) throw E2.d(E2.Y(t3, 0, e4.length, "start", null));
        if (n3 < t3 || n3 > e4.length) throw E2.d(E2.Y(n3, t3, e4.length, "end", null));
        return t3 === n3 ? E2.a([], E2.a_(e4)) : E2.a(e4.slice(t3, n3), E2.a_(e4));
      },
      b0(e4, t3, n3) {
        return E2.aQ(t3, n3, e4.length), E2.dQ(e4, t3, n3, E2.a_(e4).c);
      },
      gaV(e4) {
        var t3 = e4.length;
        if (t3 > 0) return e4[t3 - 1];
        throw E2.d(E2.nq());
      },
      G(e4, t3) {
        var n3;
        for (n3 = 0; n3 < e4.length; ++n3) if (D2.af(e4[n3], t3)) return true;
        return false;
      },
      gA(e4) {
        return e4.length === 0;
      },
      ga8(e4) {
        return e4.length !== 0;
      },
      k(e4) {
        return E2.iI(e4, "[", "]");
      },
      b_(e4, t3) {
        return D2.cX(e4.slice(0), E2.a_(e4).c);
      },
      c3(e4) {
        return E2.uJ(e4, E2.a_(e4).c);
      },
      gH(e4) {
        return new D2.b4(e4, e4.length, E2.a_(e4).h("b4<1>"));
      },
      gE(e4) {
        return E2.d0(e4);
      },
      gj(e4) {
        return e4.length;
      },
      sj(e4, t3) {
        if (e4.fixed$length && E2.Z(E2.ad("set length")), t3 < 0) throw E2.d(E2.Y(t3, 0, null, "newLength", null));
        e4.length = t3;
      },
      i(e4, t3) {
        if (!(t3 >= 0 && t3 < e4.length)) throw E2.d(E2.eA(e4, t3));
        return e4[t3];
      },
      m(e4, t3, n3) {
        if (e4.immutable$list && E2.Z(E2.ad("indexed set")), !(t3 >= 0 && t3 < e4.length)) throw E2.d(E2.eA(e4, t3));
        e4[t3] = n3;
      },
      $iq: 1,
      $ij: 1,
      $io: 1
    }, D2.iL.prototype = {}, D2.b4.prototype = {
      gt() {
        return this.d;
      },
      q() {
        var e4, t3 = this, n3 = t3.a, r3 = n3.length;
        if (t3.b !== r3) throw E2.d(E2.cN(n3));
        return e4 = t3.c, e4 >= r3 ? (t3.d = null, false) : (t3.d = n3[e4], t3.c = e4 + 1, true);
      },
      $iP: 1
    }, D2.ce.prototype = {
      eu(e4) {
        var t3;
        if (e4 >= -2147483648 && e4 <= 2147483647) return e4 | 0;
        if (isFinite(e4)) return t3 = e4 < 0 ? Math.ceil(e4) : Math.floor(e4), t3 + 0;
        throw E2.d(E2.ad("" + e4 + ".toInt()"));
      },
      av(e4, t3) {
        var n3, r3, i3, a3;
        if (t3 < 2 || t3 > 36) throw E2.d(E2.Y(t3, 2, 36, "radix", null));
        return n3 = e4.toString(t3), O2.a.B(n3, n3.length - 1) === 41 ? (r3 = /^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(n3), r3 ?? E2.Z(E2.ad("Unexpected toString result: " + n3)), n3 = r3[1], i3 = +r3[3], a3 = r3[2], a3 != null && (n3 += a3, i3 -= a3.length), n3 + O2.a.bs("0", i3)) : n3;
      },
      k(e4) {
        return e4 === 0 && 1 / e4 < 0 ? "-0.0" : "" + e4;
      },
      gE(e4) {
        var t3, n3, r3, i3, a3 = e4 | 0;
        return e4 === a3 ? a3 & 536870911 : (t3 = Math.abs(e4), n3 = Math.log(t3) / 0.6931471805599453 | 0, r3 = 2 ** n3, i3 = t3 < 1 ? t3 / r3 : r3 / t3, ((i3 * 9007199254740992 | 0) + (i3 * 3542243181176521 | 0)) * 599197 + n3 * 1259 & 536870911);
      },
      br(e4, t3) {
        var n3 = e4 % t3;
        return n3 === 0 ? 0 : n3 > 0 ? n3 : n3 + t3;
      },
      aw(e4, t3) {
        return (e4 | 0) === e4 && (t3 >= 1 || t3 < -1) ? e4 / t3 | 0 : this.cv(e4, t3);
      },
      bJ(e4, t3) {
        return (e4 | 0) === e4 ? e4 / t3 | 0 : this.cv(e4, t3);
      },
      cv(e4, t3) {
        var n3 = e4 / t3;
        if (n3 >= -2147483648 && n3 <= 2147483647) return n3 | 0;
        if (n3 > 0) {
          if (n3 !== 1 / 0) return Math.floor(n3);
        } else if (n3 > -1 / 0) return Math.ceil(n3);
        throw E2.d(E2.ad("Result of truncating division is " + E2.b(n3) + ": " + E2.b(e4) + " ~/ " + t3));
      },
      aI(e4, t3) {
        if (t3 < 0) throw E2.d(E2.cL(t3));
        return t3 > 31 ? 0 : e4 << t3 >>> 0;
      },
      ai(e4, t3) {
        var n3;
        return e4 > 0 ? n3 = this.cu(e4, t3) : (n3 = t3 > 31 ? 31 : t3, n3 = e4 >> n3 >>> 0), n3;
      },
      dT(e4, t3) {
        if (0 > t3) throw E2.d(E2.cL(t3));
        return this.cu(e4, t3);
      },
      cu(e4, t3) {
        return t3 > 31 ? 0 : e4 >>> t3;
      },
      $iz: 1,
      $iN: 1
    }, D2.dy.prototype = { $if: 1 }, D2.eZ.prototype = {}, D2.bB.prototype = {
      B(e4, t3) {
        if (t3 < 0) throw E2.d(E2.eA(e4, t3));
        return t3 >= e4.length && E2.Z(E2.eA(e4, t3)), e4.charCodeAt(t3);
      },
      J(e4, t3) {
        if (t3 >= e4.length) throw E2.d(E2.eA(e4, t3));
        return e4.charCodeAt(t3);
      },
      ae(e4, t3) {
        if (typeof t3 != "string") throw E2.d(E2.h7(t3, null, null));
        return e4 + t3;
      },
      aH(e4, t3, n3, r3) {
        var i3 = E2.aQ(t3, n3, e4.length);
        return e4.substring(0, t3) + r3 + e4.substring(i3);
      },
      U(e4, t3, n3) {
        var r3;
        if (n3 < 0 || n3 > e4.length) throw E2.d(E2.Y(n3, 0, e4.length, null, null));
        return r3 = n3 + t3.length, r3 > e4.length ? false : t3 === e4.substring(n3, r3);
      },
      Y(e4, t3) {
        return this.U(e4, t3, 0);
      },
      u(e4, t3, n3) {
        return e4.substring(t3, E2.aQ(t3, n3, e4.length));
      },
      bu(e4, t3) {
        return this.u(e4, t3, null);
      },
      ey(e4) {
        var t3, n3, r3;
        if (e4.trimRight !== void 0) {
          if (t3 = e4.trimRight(), n3 = t3.length, n3 === 0) return t3;
          r3 = n3 - 1, this.B(t3, r3) === 133 && (n3 = D2.oG(t3, r3));
        } else n3 = D2.oG(e4, e4.length), t3 = e4;
        return n3 === t3.length ? t3 : n3 === 0 ? "" : t3.substring(0, n3);
      },
      bs(e4, t3) {
        var n3, r3;
        if (0 >= t3) return "";
        if (t3 === 1 || e4.length === 0) return e4;
        if (t3 !== t3 >>> 0) throw E2.d(O2.bh);
        for (n3 = e4, r3 = ""; (t3 & 1) == 1 && (r3 = n3 + r3), t3 >>>= 1, t3 !== 0; ) n3 += n3;
        return r3;
      },
      aq(e4, t3, n3) {
        var r3 = t3 - e4.length;
        return r3 <= 0 ? e4 : this.bs(n3, r3) + e4;
      },
      bg(e4, t3, n3) {
        var r3;
        if (n3 < 0 || n3 > e4.length) throw E2.d(E2.Y(n3, 0, e4.length, null, null));
        return r3 = e4.indexOf(t3, n3), r3;
      },
      bR(e4, t3) {
        return this.bg(e4, t3, 0);
      },
      k(e4) {
        return e4;
      },
      gE(e4) {
        var t3, n3, r3;
        for (t3 = e4.length, n3 = 0, r3 = 0; r3 < t3; ++r3) n3 = n3 + e4.charCodeAt(r3) & 536870911, n3 = n3 + ((n3 & 524287) << 10) & 536870911, n3 ^= n3 >> 6;
        return n3 = n3 + ((n3 & 67108863) << 3) & 536870911, n3 ^= n3 >> 11, n3 + ((n3 & 16383) << 15) & 536870911;
      },
      gj(e4) {
        return e4.length;
      },
      $ie: 1
    }, E2.bM.prototype = {
      gH(e4) {
        var t3 = E2.A(this);
        return new E2.dm(D2.aA(this.gaa()), t3.h("@<1>").I(t3.z[1]).h("dm<1,2>"));
      },
      gj(e4) {
        return D2.a3(this.gaa());
      },
      gA(e4) {
        return D2.oo(this.gaa());
      },
      ga8(e4) {
        return D2.tx(this.gaa());
      },
      a6(e4, t3) {
        var n3 = E2.A(this);
        return E2.he(D2.op(this.gaa(), t3), n3.c, n3.z[1]);
      },
      V(e4, t3) {
        return E2.A(this).z[1].a(D2.eD(this.gaa(), t3));
      },
      G(e4, t3) {
        return D2.on(this.gaa(), t3);
      },
      k(e4) {
        return D2.as(this.gaa());
      }
    }, E2.dm.prototype = {
      q() {
        return this.a.q();
      },
      gt() {
        return this.$ti.z[1].a(this.a.gt());
      },
      $iP: 1
    }, E2.c5.prototype = { gaa() {
      return this.a;
    } }, E2.dZ.prototype = { $iq: 1 }, E2.dU.prototype = {
      i(e4, t3) {
        return this.$ti.z[1].a(D2.nl(this.a, t3));
      },
      m(e4, t3, n3) {
        D2.tv(this.a, t3, this.$ti.c.a(n3));
      },
      sj(e4, t3) {
        D2.tC(this.a, t3);
      },
      C(e4, t3) {
        D2.nm(this.a, this.$ti.c.a(t3));
      },
      b0(e4, t3, n3) {
        var r3 = this.$ti;
        return E2.he(D2.tA(this.a, t3, n3), r3.c, r3.z[1]);
      },
      $iq: 1,
      $io: 1
    }, E2.b5.prototype = {
      aj(e4, t3) {
        return new E2.b5(this.a, this.$ti.h("@<1>").I(t3).h("b5<1,2>"));
      },
      gaa() {
        return this.a;
      }
    }, E2.c6.prototype = {
      ak(e4, t3, n3) {
        var r3 = this.$ti;
        return new E2.c6(this.a, r3.h("@<1>").I(r3.z[1]).I(t3).I(n3).h("c6<1,2,3,4>"));
      },
      v(e4) {
        return this.a.v(e4);
      },
      i(e4, t3) {
        return this.$ti.h("4?").a(this.a.i(0, t3));
      },
      m(e4, t3, n3) {
        var r3 = this.$ti;
        this.a.m(0, r3.c.a(t3), r3.z[1].a(n3));
      },
      M(e4, t3) {
        this.a.M(0, new E2.hf(this, t3));
      },
      gN() {
        var e4 = this.$ti;
        return E2.he(this.a.gN(), e4.c, e4.z[2]);
      },
      gj(e4) {
        var t3 = this.a;
        return t3.gj(t3);
      },
      gA(e4) {
        var t3 = this.a;
        return t3.gA(t3);
      }
    }, E2.hf.prototype = {
      $2(e4, t3) {
        var n3 = this.a.$ti;
        this.b.$2(n3.z[2].a(e4), n3.z[3].a(t3));
      },
      $S() {
        return this.a.$ti.h("~(1,2)");
      }
    }, E2.f1.prototype = { k(e4) {
      return "LateInitializationError: " + this.a;
    } }, E2.fm.prototype = { k(e4) {
      return "ReachabilityError: " + this.a;
    } }, E2.c8.prototype = {
      gj(e4) {
        return this.a.length;
      },
      i(e4, t3) {
        return O2.a.B(this.a, t3);
      }
    }, E2.nd.prototype = {
      $0() {
        var e4 = new E2.C(A2.B, N2.U);
        return e4.ah(null), e4;
      },
      $S: 47
    }, E2.dI.prototype = {
      k(e4) {
        return "Null is not a valid value for '" + this.a + "' of type '" + E2.pL(this.$ti.c).k(0) + "'";
      },
      $iaG: 1
    }, E2.q.prototype = {}, E2.ah.prototype = {
      gH(e4) {
        var t3 = this;
        return new E2.aa(t3, t3.gj(t3), E2.A(t3).h("aa<ah.E>"));
      },
      gA(e4) {
        return this.gj(this) === 0;
      },
      G(e4, t3) {
        var n3, r3 = this, i3 = r3.gj(r3);
        for (n3 = 0; n3 < i3; ++n3) {
          if (D2.af(r3.V(0, n3), t3)) return true;
          if (i3 !== r3.gj(r3)) throw E2.d(E2.ag(r3));
        }
        return false;
      },
      al(e4, t3, n3) {
        return new E2.ab(this, t3, E2.A(this).h("@<ah.E>").I(n3).h("ab<1,2>"));
      },
      a6(e4, t3) {
        return E2.dQ(this, t3, null, E2.A(this).h("ah.E"));
      }
    }, E2.dP.prototype = {
      gdu() {
        var e4 = D2.a3(this.a), t3 = this.c;
        return t3 == null || t3 > e4 ? e4 : t3;
      },
      gdU() {
        var e4 = D2.a3(this.a), t3 = this.b;
        return t3 > e4 ? e4 : t3;
      },
      gj(e4) {
        var t3, n3 = D2.a3(this.a), r3 = this.b;
        return r3 >= n3 ? 0 : (t3 = this.c, t3 == null || t3 >= n3 ? n3 - r3 : t3 - r3);
      },
      V(e4, t3) {
        var n3 = this, r3 = n3.gdU() + t3;
        if (t3 < 0 || r3 >= n3.gdu()) throw E2.d(E2.eW(t3, n3.gj(n3), n3, null, "index"));
        return D2.eD(n3.a, r3);
      },
      a6(e4, t3) {
        var n3, r3, i3 = this;
        return E2.aW(t3, "count"), n3 = i3.b + t3, r3 = i3.c, r3 != null && n3 >= r3 ? new E2.b7(i3.$ti.h("b7<1>")) : E2.dQ(i3.a, n3, r3, i3.$ti.c);
      },
      b_(e4, t3) {
        var n3, r3, i3, a3 = this, o3 = a3.b, s3 = a3.a, c3 = D2.V(s3), l3 = c3.gj(s3), u3 = a3.c;
        if (u3 != null && u3 < l3 && (l3 = u3), n3 = l3 - o3, n3 <= 0) return s3 = D2.b8(0, a3.$ti.c), s3;
        for (r3 = E2.U(n3, c3.V(s3, o3), false, a3.$ti.c), i3 = 1; i3 < n3; ++i3) if (r3[i3] = c3.V(s3, o3 + i3), c3.gj(s3) < l3) throw E2.d(E2.ag(a3));
        return r3;
      }
    }, E2.aa.prototype = {
      gt() {
        return this.d;
      },
      q() {
        var e4, t3 = this, n3 = t3.a, r3 = D2.V(n3), i3 = r3.gj(n3);
        if (t3.b !== i3) throw E2.d(E2.ag(n3));
        return e4 = t3.c, e4 >= i3 ? (t3.d = null, false) : (t3.d = r3.V(n3, e4), ++t3.c, true);
      },
      $iP: 1
    }, E2.bd.prototype = {
      gH(e4) {
        var t3 = E2.A(this);
        return new E2.dD(D2.aA(this.a), this.b, t3.h("@<1>").I(t3.z[1]).h("dD<1,2>"));
      },
      gj(e4) {
        return D2.a3(this.a);
      },
      gA(e4) {
        return D2.oo(this.a);
      },
      V(e4, t3) {
        return this.b.$1(D2.eD(this.a, t3));
      }
    }, E2.c9.prototype = { $iq: 1 }, E2.dD.prototype = {
      q() {
        var e4 = this, t3 = e4.b;
        return t3.q() ? (e4.a = e4.c.$1(t3.gt()), true) : (e4.a = null, false);
      },
      gt() {
        return this.a;
      }
    }, E2.ab.prototype = {
      gj(e4) {
        return D2.a3(this.a);
      },
      V(e4, t3) {
        return this.b.$1(D2.eD(this.a, t3));
      }
    }, E2.lK.prototype = {
      gH(e4) {
        return new E2.cF(D2.aA(this.a), this.b, this.$ti.h("cF<1>"));
      },
      al(e4, t3, n3) {
        return new E2.bd(this, t3, this.$ti.h("@<1>").I(n3).h("bd<1,2>"));
      }
    }, E2.cF.prototype = {
      q() {
        var e4, t3;
        for (e4 = this.a, t3 = this.b; e4.q(); ) if (t3.$1(e4.gt())) return true;
        return false;
      },
      gt() {
        return this.a.gt();
      }
    }, E2.bh.prototype = {
      a6(e4, t3) {
        return E2.h8(t3, "count"), E2.aW(t3, "count"), new E2.bh(this.a, this.b + t3, E2.A(this).h("bh<1>"));
      },
      gH(e4) {
        return new E2.dN(D2.aA(this.a), this.b, E2.A(this).h("dN<1>"));
      }
    }, E2.cR.prototype = {
      gj(e4) {
        var t3 = D2.a3(this.a) - this.b;
        return t3 >= 0 ? t3 : 0;
      },
      a6(e4, t3) {
        return E2.h8(t3, "count"), E2.aW(t3, "count"), new E2.cR(this.a, this.b + t3, this.$ti);
      },
      $iq: 1
    }, E2.dN.prototype = {
      q() {
        var e4, t3;
        for (e4 = this.a, t3 = 0; t3 < this.b; ++t3) e4.q();
        return this.b = 0, e4.q();
      },
      gt() {
        return this.a.gt();
      }
    }, E2.b7.prototype = {
      gH(e4) {
        return O2.b9;
      },
      gA(e4) {
        return true;
      },
      gj(e4) {
        return 0;
      },
      V(e4, t3) {
        throw E2.d(E2.Y(t3, 0, 0, "index", null));
      },
      G(e4, t3) {
        return false;
      },
      al(e4, t3, n3) {
        return new E2.b7(n3.h("b7<0>"));
      },
      a6(e4, t3) {
        return E2.aW(t3, "count"), this;
      }
    }, E2.dq.prototype = {
      q() {
        return false;
      },
      gt() {
        throw E2.d(E2.nq());
      },
      $iP: 1
    }, E2.ds.prototype = {
      sj(e4, t3) {
        throw E2.d(E2.ad("Cannot change the length of a fixed-length list"));
      },
      C(e4, t3) {
        throw E2.d(E2.ad("Cannot add to a fixed-length list"));
      }
    }, E2.fy.prototype = {
      m(e4, t3, n3) {
        throw E2.d(E2.ad("Cannot modify an unmodifiable list"));
      },
      sj(e4, t3) {
        throw E2.d(E2.ad("Cannot change the length of an unmodifiable list"));
      },
      C(e4, t3) {
        throw E2.d(E2.ad("Cannot add to an unmodifiable list"));
      }
    }, E2.d4.prototype = {}, E2.d3.prototype = {
      gE(e4) {
        var t3 = this._hashCode;
        return t3 ?? (t3 = 664597 * D2.bY(this.a) & 536870911, this._hashCode = t3, t3);
      },
      k(e4) {
        return 'Symbol("' + E2.b(this.a) + '")';
      },
      O(e4, t3) {
        return t3 != null && t3 instanceof E2.d3 && this.a == t3.a;
      },
      $icD: 1
    }, E2.ep.prototype = {}, E2.dn.prototype = {}, E2.cQ.prototype = {
      ak(e4, t3, n3) {
        var r3 = E2.A(this);
        return E2.oK(this, r3.c, r3.z[1], t3, n3);
      },
      gA(e4) {
        return this.gj(this) === 0;
      },
      k(e4) {
        return E2.nv(this);
      },
      m(e4, t3, n3) {
        E2.u2(), E2.bg(M2.g);
      },
      $ih: 1
    }, E2.aJ.prototype = {
      gj(e4) {
        return this.a;
      },
      v(e4) {
        return typeof e4 != "string" || e4 === "__proto__" ? false : this.b.hasOwnProperty(e4);
      },
      i(e4, t3) {
        return this.v(t3) ? this.b[t3] : null;
      },
      M(e4, t3) {
        var n3, r3, i3, a3, o3 = this.c;
        for (n3 = o3.length, r3 = this.b, i3 = 0; i3 < n3; ++i3) a3 = o3[i3], t3.$2(a3, r3[a3]);
      },
      gN() {
        return new E2.dW(this, this.$ti.h("dW<1>"));
      }
    }, E2.dW.prototype = {
      gH(e4) {
        var t3 = this.a.c;
        return new D2.b4(t3, t3.length, E2.a_(t3).h("b4<1>"));
      },
      gj(e4) {
        return this.a.c.length;
      }
    }, E2.X.prototype = {
      aM() {
        var e4, t3, n3 = this, r3 = n3.$map;
        return r3 ?? (e4 = n3.$ti, t3 = E2.uc(e4.h("1?")), r3 = E2.uI(E2.wt(), t3, e4.c, e4.z[1]), E2.pN(n3.a, r3), n3.$map = r3), r3;
      },
      v(e4) {
        return this.aM().v(e4);
      },
      i(e4, t3) {
        return this.aM().i(0, t3);
      },
      M(e4, t3) {
        this.aM().M(0, t3);
      },
      gN() {
        var e4 = this.aM();
        return new E2.aO(e4, E2.A(e4).h("aO<1>"));
      },
      gj(e4) {
        return this.aM().a;
      }
    }, E2.hY.prototype = {
      $1(e4) {
        return this.a.b(e4);
      },
      $S: 14
    }, E2.iJ.prototype = {
      gcT() {
        return this.a;
      },
      gcX() {
        var e4, t3, n3, r3, i3 = this;
        if (i3.c === 1 || (e4 = i3.d, t3 = e4.length - i3.e.length - i3.f, t3 === 0)) return O2.at;
        for (n3 = [], r3 = 0; r3 < t3; ++r3) n3.push(e4[r3]);
        return n3.fixed$length = Array, n3.immutable$list = Array, n3;
      },
      gcU() {
        var e4, t3, n3, r3, i3, a3, o3 = this;
        if (o3.c !== 0 || (e4 = o3.e, t3 = e4.length, n3 = o3.d, r3 = n3.length - t3 - o3.f, t3 === 0)) return O2.az;
        for (i3 = new E2.aC(N2.eo), a3 = 0; a3 < t3; ++a3) i3.m(0, new E2.d3(e4[a3]), n3[r3 + a3]);
        return new E2.dn(i3, N2.gF);
      }
    }, E2.k9.prototype = {
      $2(e4, t3) {
        var n3 = this.a;
        n3.b = n3.b + "$" + E2.b(e4), this.b.push(e4), this.c.push(t3), ++n3.a;
      },
      $S: 69
    }, E2.lt.prototype = { a9(e4) {
      var t3, n3, r3 = this, i3 = new RegExp(r3.a).exec(e4);
      return i3 == null ? null : (t3 = /* @__PURE__ */ Object.create(null), n3 = r3.b, n3 !== -1 && (t3.arguments = i3[n3 + 1]), n3 = r3.c, n3 !== -1 && (t3.argumentsExpr = i3[n3 + 1]), n3 = r3.d, n3 !== -1 && (t3.expr = i3[n3 + 1]), n3 = r3.e, n3 !== -1 && (t3.method = i3[n3 + 1]), n3 = r3.f, n3 !== -1 && (t3.receiver = i3[n3 + 1]), t3);
    } }, E2.dJ.prototype = { k(e4) {
      var t3 = this.b;
      return t3 == null ? "NoSuchMethodError: " + E2.b(this.a) : "NoSuchMethodError: method not found: '" + t3 + "' on null";
    } }, E2.f0.prototype = { k(e4) {
      var t3, n3 = this, r3 = "NoSuchMethodError: method not found: '", i3 = n3.b;
      return i3 == null ? "NoSuchMethodError: " + E2.b(n3.a) : (t3 = n3.c, t3 == null ? r3 + i3 + "' (" + E2.b(n3.a) + ")" : r3 + i3 + "' on '" + t3 + "' (" + E2.b(n3.a) + ")");
    } }, E2.fx.prototype = { k(e4) {
      var t3 = this.a;
      return t3.length === 0 ? "Error" : "Error: " + t3;
    } }, E2.fh.prototype = {
      k(e4) {
        return "Throw of null ('" + (this.a === null ? "null" : "undefined") + "' from JavaScript)";
      },
      $ia8: 1
    }, E2.dr.prototype = {}, E2.ed.prototype = {
      k(e4) {
        var t3, n3 = this.b;
        return n3 ?? (n3 = this.a, t3 = typeof n3 == "object" && n3 ? n3.stack : null, this.b = t3 ?? "");
      },
      $ian: 1
    }, E2.c7.prototype = {
      k(e4) {
        var t3 = this.constructor, n3 = t3 == null ? null : t3.name;
        return "Closure '" + E2.q2(n3 ?? "unknown") + "'";
      },
      $iaB: 1,
      geF() {
        return this;
      },
      $C: "$1",
      $R: 1,
      $D: null
    }, E2.eL.prototype = {
      $C: "$0",
      $R: 0
    }, E2.eM.prototype = {
      $C: "$2",
      $R: 2
    }, E2.ft.prototype = {}, E2.fq.prototype = { k(e4) {
      var t3 = this.$static_name;
      return t3 == null ? "Closure of unknown static method" : "Closure '" + E2.q2(t3) + "'";
    } }, E2.cP.prototype = {
      O(e4, t3) {
        return t3 == null ? false : this === t3 || t3 instanceof E2.cP && this.$_target === t3.$_target && this.a === t3.a;
      },
      gE(e4) {
        return (E2.fZ(this.a) ^ E2.d0(this.$_target)) >>> 0;
      },
      k(e4) {
        return "Closure '" + E2.b(this.$_name) + "' of " + ("Instance of '" + E2.b(E2.ka(this.a)) + "'");
      }
    }, E2.fp.prototype = { k(e4) {
      return "RuntimeError: " + this.a;
    } }, E2.mm.prototype = {}, E2.aC.prototype = {
      gj(e4) {
        return this.a;
      },
      gA(e4) {
        return this.a === 0;
      },
      gN() {
        return new E2.aO(this, E2.A(this).h("aO<1>"));
      },
      gX() {
        var e4 = E2.A(this);
        return E2.jQ(new E2.aO(this, e4.h("aO<1>")), new E2.iP(this), e4.c, e4.z[1]);
      },
      v(e4) {
        var t3, n3;
        return typeof e4 == "string" ? (t3 = this.b, t3 != null && t3[e4] != null) : typeof e4 == "number" && (e4 & 1073741823) === e4 ? (n3 = this.c, n3 != null && n3[e4] != null) : this.cM(e4);
      },
      cM(e4) {
        var t3 = this.d;
        return t3 != null && this.bi(t3[this.bh(e4)], e4) >= 0;
      },
      i(e4, t3) {
        var n3, r3, i3, a3, o3 = null;
        return typeof t3 == "string" ? (n3 = this.b, n3 == null ? o3 : (r3 = n3[t3], i3 = r3 == null ? o3 : r3.b, i3)) : typeof t3 == "number" && (t3 & 1073741823) === t3 ? (a3 = this.c, a3 == null ? o3 : (r3 = a3[t3], i3 = r3 == null ? o3 : r3.b, i3)) : this.cN(t3);
      },
      cN(e4) {
        var t3, n3, r3 = this.d;
        return r3 == null || (t3 = r3[this.bh(e4)], n3 = this.bi(t3, e4), n3 < 0) ? null : t3[n3].b;
      },
      m(e4, t3, n3) {
        var r3, i3, a3 = this;
        typeof t3 == "string" ? (r3 = a3.b, a3.ca(r3 ?? (a3.b = a3.bH()), t3, n3)) : typeof t3 == "number" && (t3 & 1073741823) === t3 ? (i3 = a3.c, a3.ca(i3 ?? (a3.c = a3.bH()), t3, n3)) : a3.cO(t3, n3);
      },
      cO(e4, t3) {
        var n3, r3, i3, a3 = this, o3 = a3.d;
        o3 ??= a3.d = a3.bH(), n3 = a3.bh(e4), r3 = o3[n3], r3 == null ? o3[n3] = [a3.bI(e4, t3)] : (i3 = a3.bi(r3, e4), i3 >= 0 ? r3[i3].b = t3 : r3.push(a3.bI(e4, t3)));
      },
      c_(e4, t3) {
        var n3;
        return this.v(e4) ? this.i(0, e4) : (n3 = t3.$0(), this.m(0, e4, n3), n3);
      },
      M(e4, t3) {
        for (var n3 = this, r3 = n3.e, i3 = n3.r; r3 != null; ) {
          if (t3.$2(r3.a, r3.b), i3 !== n3.r) throw E2.d(E2.ag(n3));
          r3 = r3.c;
        }
      },
      ca(e4, t3, n3) {
        var r3 = e4[t3];
        r3 == null ? e4[t3] = this.bI(t3, n3) : r3.b = n3;
      },
      bI(e4, t3) {
        var n3 = this, r3 = new E2.jN(e4, t3);
        return n3.e == null ? n3.e = n3.f = r3 : n3.f = n3.f.c = r3, ++n3.a, n3.r = n3.r + 1 & 1073741823, r3;
      },
      bh(e4) {
        return D2.bY(e4) & 1073741823;
      },
      bi(e4, t3) {
        var n3, r3;
        if (e4 == null) return -1;
        for (n3 = e4.length, r3 = 0; r3 < n3; ++r3) if (D2.af(e4[r3].a, t3)) return r3;
        return -1;
      },
      k(e4) {
        return E2.nv(this);
      },
      bH() {
        var e4 = /* @__PURE__ */ Object.create(null);
        return e4["<non-identifier-key>"] = e4, delete e4["<non-identifier-key>"], e4;
      }
    }, E2.iP.prototype = {
      $1(e4) {
        return this.a.i(0, e4);
      },
      $S() {
        return E2.A(this.a).h("2(1)");
      }
    }, E2.jN.prototype = {}, E2.aO.prototype = {
      gj(e4) {
        return this.a.a;
      },
      gA(e4) {
        return this.a.a === 0;
      },
      gH(e4) {
        var t3 = this.a, n3 = new E2.cx(t3, t3.r, this.$ti.h("cx<1>"));
        return n3.c = t3.e, n3;
      },
      G(e4, t3) {
        return this.a.v(t3);
      }
    }, E2.cx.prototype = {
      gt() {
        return this.d;
      },
      q() {
        var e4, t3 = this, n3 = t3.a;
        if (t3.b !== n3.r) throw E2.d(E2.ag(n3));
        return e4 = t3.c, e4 == null ? (t3.d = null, false) : (t3.d = e4.a, t3.c = e4.c, true);
      },
      $iP: 1
    }, E2.mX.prototype = {
      $1(e4) {
        return this.a(e4);
      },
      $S: 30
    }, E2.mY.prototype = {
      $2(e4, t3) {
        return this.a(e4, t3);
      },
      $S: 33
    }, E2.mZ.prototype = {
      $1(e4) {
        return this.a(e4);
      },
      $S: 50
    }, E2.iK.prototype = {
      k(e4) {
        return "RegExp/" + this.a + "/" + this.b.flags;
      },
      aT(e4) {
        var t3;
        return typeof e4 != "string" && E2.Z(E2.cL(e4)), t3 = this.b.exec(e4), t3 == null ? null : new E2.mk(t3);
      }
    }, E2.mk.prototype = {}, E2.dF.prototype = {
      dE(e4, t3, n3, r3) {
        var i3 = E2.Y(t3, 0, n3, r3, null);
        throw E2.d(i3);
      },
      ci(e4, t3, n3, r3) {
        (t3 >>> 0 !== t3 || t3 > n3) && this.dE(e4, t3, n3, r3);
      }
    }, E2.d_.prototype = {
      gj(e4) {
        return e4.length;
      },
      dS(e4, t3, n3, r3, i3) {
        var a3, o3, s3 = e4.length;
        if (this.ci(e4, t3, s3, "start"), this.ci(e4, n3, s3, "end"), t3 > n3) throw E2.d(E2.Y(t3, 0, n3, null, null));
        if (a3 = n3 - t3, i3 < 0) throw E2.d(E2.K(i3, null));
        if (o3 = r3.length, o3 - i3 < a3) throw E2.d(E2.d2("Not enough elements"));
        (i3 !== 0 || o3 !== a3) && (r3 = r3.subarray(i3, i3 + a3)), e4.set(r3, t3);
      },
      $iav: 1
    }, E2.dE.prototype = {
      i(e4, t3) {
        return E2.bo(t3, e4, e4.length), e4[t3];
      },
      m(e4, t3, n3) {
        E2.bo(t3, e4, e4.length), e4[t3] = n3;
      },
      $iq: 1,
      $ij: 1,
      $io: 1
    }, E2.aw.prototype = {
      m(e4, t3, n3) {
        E2.bo(t3, e4, e4.length), e4[t3] = n3;
      },
      a5(e4, t3, n3, r3, i3) {
        if (N2.eB.b(r3)) {
          this.dS(e4, t3, n3, r3, i3);
          return;
        }
        this.dc(e4, t3, n3, r3, i3);
      },
      d5(e4, t3, n3, r3) {
        return this.a5(e4, t3, n3, r3, 0);
      },
      $iq: 1,
      $ij: 1,
      $io: 1
    }, E2.f8.prototype = { a1(e4, t3, n3) {
      return new Float32Array(e4.subarray(t3, E2.bR(t3, n3, e4.length)));
    } }, E2.f9.prototype = { a1(e4, t3, n3) {
      return new Float64Array(e4.subarray(t3, E2.bR(t3, n3, e4.length)));
    } }, E2.fa.prototype = {
      i(e4, t3) {
        return E2.bo(t3, e4, e4.length), e4[t3];
      },
      a1(e4, t3, n3) {
        return new Int16Array(e4.subarray(t3, E2.bR(t3, n3, e4.length)));
      }
    }, E2.fb.prototype = {
      i(e4, t3) {
        return E2.bo(t3, e4, e4.length), e4[t3];
      },
      a1(e4, t3, n3) {
        return new Int32Array(e4.subarray(t3, E2.bR(t3, n3, e4.length)));
      }
    }, E2.fc.prototype = {
      i(e4, t3) {
        return E2.bo(t3, e4, e4.length), e4[t3];
      },
      a1(e4, t3, n3) {
        return new Int8Array(e4.subarray(t3, E2.bR(t3, n3, e4.length)));
      }
    }, E2.fd.prototype = {
      i(e4, t3) {
        return E2.bo(t3, e4, e4.length), e4[t3];
      },
      a1(e4, t3, n3) {
        return new Uint16Array(e4.subarray(t3, E2.bR(t3, n3, e4.length)));
      }
    }, E2.fe.prototype = {
      i(e4, t3) {
        return E2.bo(t3, e4, e4.length), e4[t3];
      },
      a1(e4, t3, n3) {
        return new Uint32Array(e4.subarray(t3, E2.bR(t3, n3, e4.length)));
      }
    }, E2.dG.prototype = {
      gj(e4) {
        return e4.length;
      },
      i(e4, t3) {
        return E2.bo(t3, e4, e4.length), e4[t3];
      },
      a1(e4, t3, n3) {
        return new Uint8ClampedArray(e4.subarray(t3, E2.bR(t3, n3, e4.length)));
      }
    }, E2.cy.prototype = {
      gj(e4) {
        return e4.length;
      },
      i(e4, t3) {
        return E2.bo(t3, e4, e4.length), e4[t3];
      },
      a1(e4, t3, n3) {
        return new Uint8Array(e4.subarray(t3, E2.bR(t3, n3, e4.length)));
      },
      $icy: 1,
      $ia6: 1
    }, E2.e7.prototype = {}, E2.e8.prototype = {}, E2.e9.prototype = {}, E2.ea.prototype = {}, E2.aF.prototype = {
      h(e4) {
        return E2.mt(j2.typeUniverse, this, e4);
      },
      I(e4) {
        return E2.vG(j2.typeUniverse, this, e4);
      }
    }, E2.fK.prototype = {}, E2.eh.prototype = {
      k(e4) {
        return E2.ar(this.a, null);
      },
      $ibk: 1
    }, E2.fJ.prototype = { k(e4) {
      return this.a;
    } }, E2.ei.prototype = { $iaG: 1 }, E2.lW.prototype = {
      $1(e4) {
        var t3 = this.a, n3 = t3.a;
        t3.a = null, n3.$0();
      },
      $S: 15
    }, E2.lV.prototype = {
      $1(e4) {
        var t3, n3;
        this.a.a = e4, t3 = this.b, n3 = this.c, t3.firstChild ? t3.removeChild(n3) : t3.appendChild(n3);
      },
      $S: 122
    }, E2.lX.prototype = {
      $0() {
        this.a.$0();
      },
      $S: 2
    }, E2.lY.prototype = {
      $0() {
        this.a.$0();
      },
      $S: 2
    }, E2.mr.prototype = { dg(e4, n3) {
      if (t2.setTimeout != null) t2.setTimeout(E2.mO(new E2.ms(this, n3), 0), e4);
      else throw E2.d(E2.ad("`setTimeout()` not found."));
    } }, E2.ms.prototype = {
      $0() {
        this.b.$0();
      },
      $S: 1
    }, E2.fD.prototype = {
      a3(e4) {
        var t3, n3 = this;
        n3.b ? (t3 = n3.a, n3.$ti.h("a5<1>").b(e4) ? t3.cf(e4) : t3.bA(e4)) : n3.a.ah(e4);
      },
      bK(e4, t3) {
        var n3;
        t3 ??= E2.eI(e4), n3 = this.a, this.b ? n3.aA(e4, t3) : n3.b5(e4, t3);
      }
    }, E2.mx.prototype = {
      $1(e4) {
        return this.a.$2(0, e4);
      },
      $S: 34
    }, E2.my.prototype = {
      $2(e4, t3) {
        this.a.$2(1, new E2.dr(e4, t3));
      },
      $S: 42
    }, E2.mN.prototype = {
      $2(e4, t3) {
        this.a(e4, t3);
      },
      $S: 48
    }, E2.d7.prototype = { k(e4) {
      return "IterationMarker(" + this.b + ", " + E2.b(this.a) + ")";
    } }, E2.aH.prototype = {
      gt() {
        var e4 = this.c;
        return e4 == null ? this.b : e4.gt();
      },
      q() {
        for (var e4, t3, n3, r3, i3, a3 = this; ; ) {
          if (e4 = a3.c, e4 != null) {
            if (e4.q()) return true;
            a3.c = null;
          }
          if (t3 = (function(e5, t4, n4) {
            for (var r4, i4 = t4; ; ) try {
              return e5(i4, r4);
            } catch (e6) {
              r4 = e6, i4 = n4;
            }
          })(a3.a, 0, 1), t3 instanceof E2.d7) {
            if (n3 = t3.b, n3 === 2) {
              if (r3 = a3.d, r3 == null || r3.length === 0) return a3.b = null, false;
              a3.a = r3.pop();
              continue;
            }
            if (e4 = t3.a, n3 === 3) throw e4;
            if (i3 = D2.aA(e4), i3 instanceof E2.aH) {
              e4 = a3.d, e4 ??= a3.d = [], e4.push(a3.a), a3.a = i3.a;
              continue;
            }
            a3.c = i3;
            continue;
          }
          return a3.b = t3, true;
        }
        return false;
      },
      $iP: 1
    }, E2.eg.prototype = { gH(e4) {
      return new E2.aH(this.a(), this.$ti.h("aH<1>"));
    } }, E2.eH.prototype = {
      k(e4) {
        return E2.b(this.a);
      },
      $iH: 1,
      gb2() {
        return this.b;
      }
    }, E2.fG.prototype = {
      bK(e4, t3) {
        var n3;
        if (E2.bU(e4, "error", N2.K), n3 = this.a, n3.a & 30) throw E2.d(E2.d2("Future already completed"));
        t3 ??= E2.eI(e4), n3.b5(e4, t3);
      },
      R(e4) {
        return this.bK(e4, null);
      }
    }, E2.ay.prototype = {
      a3(e4) {
        var t3 = this.a;
        if (t3.a & 30) throw E2.d(E2.d2("Future already completed"));
        t3.ah(e4);
      },
      bd() {
        return this.a3(null);
      }
    }, E2.bN.prototype = {
      ec(e4) {
        return (this.c & 15) != 6 || this.b.b.c2(this.d, e4.a);
      },
      e7(e4) {
        var t3 = this.e, n3 = null, r3 = this.b.b;
        n3 = N2.C.b(t3) ? r3.el(t3, e4.a, e4.b) : r3.c2(t3, e4.a);
        try {
          return r3 = n3, r3;
        } catch (e5) {
          throw N2.eK.b(E2.M(e5)) ? this.c & 1 ? E2.d(E2.K("The error handler of Future.then must return a value of the returned future's type", "onError")) : E2.d(E2.K("The error handler of Future.catchError must return a value of the future's type", "onError")) : e5;
        }
      }
    }, E2.C.prototype = {
      au(e4, t3, n3, r3) {
        var i3, a3, o3 = A2.B;
        if (o3 === O2.i) {
          if (n3 != null && !N2.C.b(n3) && !N2.v.b(n3)) throw E2.d(E2.h7(n3, "onError", M2.c));
        } else n3 != null && (n3 = E2.wA(n3, o3));
        return i3 = new E2.C(o3, r3.h("C<0>")), a3 = n3 == null ? 1 : 3, this.b4(new E2.bN(i3, a3, t3, n3, this.$ti.h("@<1>").I(r3).h("bN<1,2>"))), i3;
      },
      d1(e4, t3, n3) {
        return this.au(e4, t3, null, n3);
      },
      cz(e4, t3, n3) {
        var r3 = new E2.C(A2.B, n3.h("C<0>"));
        return this.b4(new E2.bN(r3, 3, e4, t3, this.$ti.h("@<1>").I(n3).h("bN<1,2>"))), r3;
      },
      bp(e4) {
        var t3 = this.$ti, n3 = new E2.C(A2.B, t3);
        return this.b4(new E2.bN(n3, 8, e4, null, t3.h("@<1>").I(t3.c).h("bN<1,2>"))), n3;
      },
      dQ(e4) {
        this.a = this.a & 1 | 16, this.c = e4;
      },
      by(e4) {
        this.a = e4.a & 30 | this.a & 1, this.c = e4.c;
      },
      b4(e4) {
        var t3 = this, n3 = t3.a;
        if (n3 <= 3) e4.a = t3.c, t3.c = e4;
        else {
          if (n3 & 4) {
            if (n3 = t3.c, !(n3.a & 24)) {
              n3.b4(e4);
              return;
            }
            t3.by(n3);
          }
          E2.cI(null, null, t3.b, new E2.m3(t3, e4));
        }
      },
      cs(e4) {
        var t3, n3, r3, i3, a3, o3 = this, s3 = {};
        if (s3.a = e4, e4 != null) {
          if (t3 = o3.a, t3 <= 3) {
            if (n3 = o3.c, o3.c = e4, n3 != null) {
              for (r3 = e4.a, i3 = e4; r3 != null; i3 = r3, r3 = a3) a3 = r3.a;
              i3.a = n3;
            }
          } else {
            if (t3 & 4) {
              if (t3 = o3.c, !(t3.a & 24)) {
                t3.cs(e4);
                return;
              }
              o3.by(t3);
            }
            s3.a = o3.bc(e4), E2.cI(null, null, o3.b, new E2.ma(s3, o3));
          }
        }
      },
      bb() {
        var e4 = this.c;
        return this.c = null, this.bc(e4);
      },
      bc(e4) {
        var t3, n3, r3;
        for (t3 = e4, n3 = null; t3 != null; n3 = t3, t3 = r3) r3 = t3.a, t3.a = n3;
        return n3;
      },
      ce(e4) {
        var t3, n3, r3 = this;
        r3.a ^= 2;
        try {
          e4.au(0, new E2.m6(r3), new E2.m7(r3), N2.P);
        } catch (e5) {
          t3 = E2.M(e5), n3 = E2.aS(e5), E2.q_(new E2.m8(r3, t3, n3));
        }
      },
      bA(e4) {
        var t3 = this, n3 = t3.bb();
        t3.a = 8, t3.c = e4, E2.d6(t3, n3);
      },
      aA(e4, t3) {
        var n3 = this.bb();
        this.dQ(E2.h9(e4, t3)), E2.d6(this, n3);
      },
      ah(e4) {
        if (this.$ti.h("a5<1>").b(e4)) {
          this.cf(e4);
          return;
        }
        this.dk(e4);
      },
      dk(e4) {
        this.a ^= 2, E2.cI(null, null, this.b, new E2.m5(this, e4));
      },
      cf(e4) {
        var t3 = this;
        if (t3.$ti.b(e4)) {
          e4.a & 16 ? (t3.a ^= 2, E2.cI(null, null, t3.b, new E2.m9(t3, e4))) : E2.nz(e4, t3);
          return;
        }
        t3.ce(e4);
      },
      b5(e4, t3) {
        this.a ^= 2, E2.cI(null, null, this.b, new E2.m4(this, e4, t3));
      },
      $ia5: 1
    }, E2.m3.prototype = {
      $0() {
        E2.d6(this.a, this.b);
      },
      $S: 1
    }, E2.ma.prototype = {
      $0() {
        E2.d6(this.b, this.a.a);
      },
      $S: 1
    }, E2.m6.prototype = {
      $1(e4) {
        var t3, n3, r3 = this.a;
        r3.a ^= 2;
        try {
          r3.bA(r3.$ti.c.a(e4));
        } catch (e5) {
          t3 = E2.M(e5), n3 = E2.aS(e5), r3.aA(t3, n3);
        }
      },
      $S: 15
    }, E2.m7.prototype = {
      $2(e4, t3) {
        this.a.aA(e4, t3);
      },
      $S: 52
    }, E2.m8.prototype = {
      $0() {
        this.a.aA(this.b, this.c);
      },
      $S: 1
    }, E2.m5.prototype = {
      $0() {
        this.a.bA(this.b);
      },
      $S: 1
    }, E2.m9.prototype = {
      $0() {
        E2.nz(this.b, this.a);
      },
      $S: 1
    }, E2.m4.prototype = {
      $0() {
        this.a.aA(this.b, this.c);
      },
      $S: 1
    }, E2.md.prototype = {
      $0() {
        var e4, t3, n3, r3, i3, a3 = this, o3 = null;
        try {
          n3 = a3.a.a, o3 = n3.b.b.cZ(n3.d);
        } catch (i4) {
          e4 = E2.M(i4), t3 = E2.aS(i4), a3.c ? (n3 = a3.b.a.c.a, r3 = e4, r3 = n3 == null ? r3 == null : n3 === r3, n3 = r3) : n3 = false, r3 = a3.a, n3 ? r3.c = a3.b.a.c : r3.c = E2.h9(e4, t3), r3.b = true;
          return;
        }
        if (o3 instanceof E2.C && o3.a & 24) {
          o3.a & 16 && (n3 = a3.a, n3.c = o3.c, n3.b = true);
          return;
        }
        N2.d.b(o3) && (i3 = a3.b.a, n3 = a3.a, n3.c = D2.tH(o3, new E2.me(i3), N2.z), n3.b = false);
      },
      $S: 1
    }, E2.me.prototype = {
      $1(e4) {
        return this.a;
      },
      $S: 53
    }, E2.mc.prototype = {
      $0() {
        var e4, t3, n3, r3;
        try {
          n3 = this.a, r3 = n3.a, n3.c = r3.b.b.c2(r3.d, this.b);
        } catch (r4) {
          e4 = E2.M(r4), t3 = E2.aS(r4), n3 = this.a, n3.c = E2.h9(e4, t3), n3.b = true;
        }
      },
      $S: 1
    }, E2.mb.prototype = {
      $0() {
        var e4, t3, n3, r3, i3, a3, o3, s3 = this;
        try {
          e4 = s3.a.a.c, r3 = s3.b, r3.a.ec(e4) && r3.a.e != null && (r3.c = r3.a.e7(e4), r3.b = false);
        } catch (e5) {
          t3 = E2.M(e5), n3 = E2.aS(e5), r3 = s3.a.a.c, i3 = r3.a, a3 = t3, o3 = s3.b, (i3 == null ? a3 == null : i3 === a3) ? o3.c = r3 : o3.c = E2.h9(t3, n3), o3.b = true;
        }
      },
      $S: 1
    }, E2.fE.prototype = {}, E2.bi.prototype = { gj(e4) {
      var t3 = {}, n3 = new E2.C(A2.B, N2.fJ);
      return t3.a = 0, this.bU(new E2.lp(t3, this), true, new E2.lq(t3, n3), n3.gdq()), n3;
    } }, E2.ln.prototype = {
      $1(e4) {
        var t3 = this.a;
        t3.aJ(e4), t3.aK();
      },
      $S() {
        return this.b.h("l(0)");
      }
    }, E2.lo.prototype = {
      $2(e4, t3) {
        var n3 = this.a;
        n3.b3(e4, t3), n3.aK();
      },
      $S: 55
    }, E2.lp.prototype = {
      $1(e4) {
        ++this.a.a;
      },
      $S() {
        return this.b.$ti.h("~(1)");
      }
    }, E2.lq.prototype = {
      $0() {
        var e4 = this.b, t3 = this.a.a, n3 = e4.bb();
        e4.a = 8, e4.c = t3, E2.d6(e4, n3);
      },
      $S: 1
    }, E2.fr.prototype = {}, E2.da.prototype = {
      gdL() {
        return this.b & 8 ? this.a.gc5() : this.a;
      },
      b6() {
        var e4, t3 = this;
        return t3.b & 8 ? (e4 = t3.a.gc5(), e4) : (e4 = t3.a, e4 ?? (t3.a = new E2.eb()));
      },
      gaD() {
        var e4 = this.a;
        return this.b & 8 ? e4.gc5() : e4;
      },
      bv() {
        return this.b & 4 ? new E2.bJ("Cannot add event after closing") : new E2.bJ("Cannot add event while adding a stream");
      },
      ck() {
        var e4 = this.c;
        return e4 ??= this.c = this.b & 2 ? A2.h0() : new E2.C(A2.B, N2.D), e4;
      },
      C(e4, t3) {
        if (this.b >= 4) throw E2.d(this.bv());
        this.aJ(t3);
      },
      a7() {
        var e4 = this, t3 = e4.b;
        if (t3 & 4) return e4.ck();
        if (t3 >= 4) throw E2.d(e4.bv());
        return e4.aK(), e4.ck();
      },
      aK() {
        var e4 = this.b |= 4;
        e4 & 1 ? this.aO() : e4 & 3 || this.b6().C(0, O2.M);
      },
      aJ(e4) {
        var t3 = this.b;
        t3 & 1 ? this.aC(e4) : t3 & 3 || this.b6().C(0, new E2.cG(e4));
      },
      b3(e4, t3) {
        var n3 = this.b;
        n3 & 1 ? this.aP(e4, t3) : n3 & 3 || this.b6().C(0, new E2.dY(e4, t3));
      },
      dV(e4, t3, n3, r3) {
        var i3, a3, o3, s3, c3, l3, u3 = this;
        if (u3.b & 3) throw E2.d(E2.d2("Stream has already been listened to."));
        return i3 = A2.B, a3 = +!!r3, o3 = E2.vn(i3, t3), s3 = new E2.dX(u3, e4, o3, n3, i3, a3), c3 = u3.gdL(), i3 = u3.b |= 1, i3 & 8 ? (l3 = u3.a, l3.sc5(s3), l3.ar()) : u3.a = s3, s3.dR(c3), s3.bF(new E2.mq(u3)), s3;
      },
      dN(e4) {
        var t3, n3, r3, i3, a3, o3, s3 = this, c3 = null;
        if (s3.b & 8 && (c3 = s3.a.K()), s3.a = null, s3.b = s3.b & 4294967286 | 2, t3 = s3.r, t3 != null) {
          if (c3 == null) try {
            n3 = t3.$0(), N2.bq.b(n3) && (c3 = n3);
          } catch (e5) {
            r3 = E2.M(e5), i3 = E2.aS(e5), a3 = new E2.C(A2.B, N2.D), a3.b5(r3, i3), c3 = a3;
          }
          else c3 = c3.bp(t3);
        }
        return o3 = new E2.mp(s3), c3 == null ? o3.$0() : c3 = c3.bp(o3), c3;
      }
    }, E2.mq.prototype = {
      $0() {
        E2.nM(this.a.d);
      },
      $S: 1
    }, E2.mp.prototype = {
      $0() {
        var e4 = this.a.c;
        e4 != null && !(e4.a & 30) && e4.ah(null);
      },
      $S: 1
    }, E2.fS.prototype = {
      aC(e4) {
        this.gaD().aJ(e4);
      },
      aP(e4, t3) {
        this.gaD().b3(e4, t3);
      },
      aO() {
        this.gaD().dn();
      }
    }, E2.fF.prototype = {
      aC(e4) {
        this.gaD().az(new E2.cG(e4));
      },
      aP(e4, t3) {
        this.gaD().az(new E2.dY(e4, t3));
      },
      aO() {
        this.gaD().az(O2.M);
      }
    }, E2.aZ.prototype = {}, E2.db.prototype = {}, E2.aj.prototype = {
      gE(e4) {
        return (E2.d0(this.a) ^ 892482866) >>> 0;
      },
      O(e4, t3) {
        return t3 == null ? false : this === t3 || t3 instanceof E2.aj && t3.a === this.a;
      }
    }, E2.dX.prototype = {
      cp() {
        return this.w.dN(this);
      },
      b9() {
        var e4 = this.w;
        e4.b & 8 && e4.a.aZ(), E2.nM(e4.e);
      },
      ba() {
        var e4 = this.w;
        e4.b & 8 && e4.a.ar(), E2.nM(e4.f);
      }
    }, E2.dT.prototype = {
      dR(e4) {
        var t3 = this;
        e4 != null && (t3.r = e4, e4.c != null && (t3.e = (t3.e | 64) >>> 0, e4.b1(t3)));
      },
      cW(e4) {
        var t3, n3, r3 = this, i3 = r3.e;
        i3 & 8 || (t3 = (i3 + 128 | 4) >>> 0, r3.e = t3, i3 < 128 && (n3 = r3.r, n3 != null && n3.a === 1 && (n3.a = 3)), !(i3 & 4) && !(t3 & 32) && r3.bF(r3.gcq()));
      },
      aZ() {
        return this.cW(null);
      },
      ar() {
        var e4 = this, t3 = e4.e;
        t3 & 8 || t3 >= 128 && (t3 = e4.e = t3 - 128, t3 < 128 && (t3 & 64 && e4.r.c != null ? e4.r.b1(e4) : (t3 = (t3 & 4294967291) >>> 0, e4.e = t3, t3 & 32 || e4.bF(e4.gcr()))));
      },
      K() {
        var e4 = this, t3 = (e4.e & 4294967279) >>> 0;
        return e4.e = t3, t3 & 8 || e4.bw(), t3 = e4.f, t3 ?? A2.h0();
      },
      bw() {
        var e4, t3 = this, n3 = t3.e = (t3.e | 8) >>> 0;
        n3 & 64 && (e4 = t3.r, e4.a === 1 && (e4.a = 3)), n3 & 32 || (t3.r = null), t3.f = t3.cp();
      },
      aJ(e4) {
        var t3 = this.e;
        t3 & 8 || (t3 < 32 ? this.aC(e4) : this.az(new E2.cG(e4)));
      },
      b3(e4, t3) {
        var n3 = this.e;
        n3 & 8 || (n3 < 32 ? this.aP(e4, t3) : this.az(new E2.dY(e4, t3)));
      },
      dn() {
        var e4 = this, t3 = e4.e;
        t3 & 8 || (t3 = (t3 | 2) >>> 0, e4.e = t3, t3 < 32 ? e4.aO() : e4.az(O2.M));
      },
      b9() {
      },
      ba() {
      },
      cp() {
        return null;
      },
      az(e4) {
        var t3, n3 = this, r3 = n3.r;
        r3 ??= n3.r = new E2.eb(), r3.C(0, e4), t3 = n3.e, t3 & 64 || (t3 = (t3 | 64) >>> 0, n3.e = t3, t3 < 128 && r3.b1(n3));
      },
      aC(e4) {
        var t3 = this, n3 = t3.e;
        t3.e = (n3 | 32) >>> 0, t3.d.d0(t3.a, e4), t3.e = (t3.e & 4294967263) >>> 0, t3.bx(!!(n3 & 4));
      },
      aP(e4, t3) {
        var n3, r3 = this, i3 = r3.e, a3 = new E2.m0(r3, e4, t3);
        i3 & 1 ? (r3.e = (i3 | 16) >>> 0, r3.bw(), n3 = r3.f, n3 != null && n3 !== A2.h0() ? n3.bp(a3) : a3.$0()) : (a3.$0(), r3.bx(!!(i3 & 4)));
      },
      aO() {
        var e4, t3 = this, n3 = new E2.m_(t3);
        t3.bw(), t3.e = (t3.e | 16) >>> 0, e4 = t3.f, e4 != null && e4 !== A2.h0() ? e4.bp(n3) : n3.$0();
      },
      bF(e4) {
        var t3 = this, n3 = t3.e;
        t3.e = (n3 | 32) >>> 0, e4.$0(), t3.e = (t3.e & 4294967263) >>> 0, t3.bx(!!(n3 & 4));
      },
      bx(e4) {
        var t3, n3, r3 = this, i3 = r3.e;
        for (i3 & 64 && r3.r.c == null && (i3 = r3.e = (i3 & 4294967231) >>> 0, i3 & 4 && i3 < 128 ? (t3 = r3.r, t3 = t3 == null ? null : t3.c == null, t3 = t3 !== false) : t3 = false, t3 && (i3 = (i3 & 4294967291) >>> 0, r3.e = i3)); ; e4 = n3) {
          if (i3 & 8) {
            r3.r = null;
            return;
          }
          if (n3 = !!(i3 & 4), e4 === n3) break;
          r3.e = (i3 ^ 32) >>> 0, n3 ? r3.b9() : r3.ba(), i3 = (r3.e & 4294967263) >>> 0, r3.e = i3;
        }
        i3 & 64 && i3 < 128 && r3.r.b1(r3);
      }
    }, E2.m0.prototype = {
      $0() {
        var e4, t3, n3 = this.a, r3 = n3.e;
        r3 & 8 && !(r3 & 16) || (n3.e = (r3 | 32) >>> 0, e4 = n3.b, r3 = this.b, t3 = n3.d, N2.k.b(e4) ? t3.eo(e4, r3, this.c) : t3.d0(e4, r3), n3.e = (n3.e & 4294967263) >>> 0);
      },
      $S: 1
    }, E2.m_.prototype = {
      $0() {
        var e4 = this.a, t3 = e4.e;
        t3 & 16 && (e4.e = (t3 | 42) >>> 0, e4.d.d_(e4.c), e4.e = (e4.e & 4294967263) >>> 0);
      },
      $S: 1
    }, E2.ee.prototype = {
      bU(e4, t3, n3, r3) {
        return this.a.dV(e4, r3, n3, t3 === true);
      },
      bT(e4, t3, n3) {
        return this.bU(e4, null, t3, n3);
      },
      ea(e4, t3) {
        return this.bU(e4, null, t3, null);
      }
    }, E2.fI.prototype = {
      gaG() {
        return this.a;
      },
      saG(e4) {
        return this.a = e4;
      }
    }, E2.cG.prototype = { bY(e4) {
      e4.aC(this.b);
    } }, E2.dY.prototype = { bY(e4) {
      e4.aP(this.b, this.c);
    } }, E2.m1.prototype = {
      bY(e4) {
        e4.aO();
      },
      gaG() {
        return null;
      },
      saG(e4) {
        throw E2.d(E2.d2("No events after a done."));
      }
    }, E2.eb.prototype = {
      b1(e4) {
        var t3 = this, n3 = t3.a;
        if (n3 !== 1) {
          if (n3 >= 1) {
            t3.a = 1;
            return;
          }
          E2.q_(new E2.ml(t3, e4)), t3.a = 1;
        }
      },
      C(e4, t3) {
        var n3 = this, r3 = n3.c;
        r3 == null ? n3.b = n3.c = t3 : (r3.saG(t3), n3.c = t3);
      }
    }, E2.ml.prototype = {
      $0() {
        var e4, t3, n3 = this.a, r3 = n3.a;
        n3.a = 0, r3 !== 3 && (e4 = n3.b, t3 = e4.gaG(), n3.b = t3, t3 ?? (n3.c = null), e4.bY(this.b));
      },
      $S: 1
    }, E2.fQ.prototype = {}, E2.mw.prototype = {}, E2.mK.prototype = {
      $0() {
        E2.u8(this.a, this.b), E2.bg(M2.g);
      },
      $S: 1
    }, E2.mn.prototype = {
      d_(e4) {
        var t3, n3;
        try {
          if (O2.i === A2.B) {
            e4.$0();
            return;
          }
          E2.pC(null, null, this, e4);
        } catch (e5) {
          t3 = E2.M(e5), n3 = E2.aS(e5), E2.dh(t3, n3);
        }
      },
      eq(e4, t3) {
        var n3, r3;
        try {
          if (O2.i === A2.B) {
            e4.$1(t3);
            return;
          }
          E2.pE(null, null, this, e4, t3);
        } catch (e5) {
          n3 = E2.M(e5), r3 = E2.aS(e5), E2.dh(n3, r3);
        }
      },
      d0(e4, t3) {
        return this.eq(e4, t3, N2.z);
      },
      en(e4, t3, n3) {
        var r3, i3;
        try {
          if (O2.i === A2.B) {
            e4.$2(t3, n3);
            return;
          }
          E2.pD(null, null, this, e4, t3, n3);
        } catch (e5) {
          r3 = E2.M(e5), i3 = E2.aS(e5), E2.dh(r3, i3);
        }
      },
      eo(e4, t3, n3) {
        return this.en(e4, t3, n3, N2.z, N2.z);
      },
      cB(e4) {
        return new E2.mo(this, e4);
      },
      ek(e4) {
        return A2.B === O2.i ? e4.$0() : E2.pC(null, null, this, e4);
      },
      cZ(e4) {
        return this.ek(e4, N2.z);
      },
      ep(e4, t3) {
        return A2.B === O2.i ? e4.$1(t3) : E2.pE(null, null, this, e4, t3);
      },
      c2(e4, t3) {
        return this.ep(e4, t3, N2.z, N2.z);
      },
      em(e4, t3, n3) {
        return A2.B === O2.i ? e4.$2(t3, n3) : E2.pD(null, null, this, e4, t3, n3);
      },
      el(e4, t3, n3) {
        return this.em(e4, t3, n3, N2.z, N2.z, N2.z);
      },
      eh(e4) {
        return e4;
      },
      c1(e4) {
        return this.eh(e4, N2.z, N2.z, N2.z);
      }
    }, E2.mo.prototype = {
      $0() {
        return this.a.d_(this.b);
      },
      $S: 1
    }, E2.e1.prototype = {
      gj(e4) {
        return this.a;
      },
      gA(e4) {
        return this.a === 0;
      },
      gN() {
        return new E2.e2(this, this.$ti.h("e2<1>"));
      },
      v(e4) {
        var t3, n3;
        return typeof e4 == "string" && e4 !== "__proto__" ? (t3 = this.b, t3 != null && t3[e4] != null) : typeof e4 == "number" && (e4 & 1073741823) === e4 ? (n3 = this.c, n3 != null && n3[e4] != null) : this.dt(e4);
      },
      dt(e4) {
        var t3 = this.d;
        return t3 != null && this.an(this.cl(t3, e4), e4) >= 0;
      },
      i(e4, t3) {
        var n3, r3, i3;
        return typeof t3 == "string" && t3 !== "__proto__" ? (n3 = this.b, r3 = n3 == null ? null : E2.pe(n3, t3), r3) : typeof t3 == "number" && (t3 & 1073741823) === t3 ? (i3 = this.c, r3 = i3 == null ? null : E2.pe(i3, t3), r3) : this.dw(t3);
      },
      dw(e4) {
        var t3, n3, r3 = this.d;
        return r3 == null ? null : (t3 = this.cl(r3, e4), n3 = this.an(t3, e4), n3 < 0 ? null : t3[n3 + 1]);
      },
      m(e4, t3, n3) {
        var r3, i3, a3, o3, s3, c3 = this;
        typeof t3 == "string" && t3 !== "__proto__" ? (r3 = c3.b, c3.dj(r3 ?? (c3.b = E2.pf()), t3, n3)) : (i3 = c3.d, i3 ??= c3.d = E2.pf(), a3 = E2.fZ(t3) & 1073741823, o3 = i3[a3], o3 == null ? (E2.nA(i3, a3, [t3, n3]), ++c3.a, c3.e = null) : (s3 = c3.an(o3, t3), s3 >= 0 ? o3[s3 + 1] = n3 : (o3.push(t3, n3), ++c3.a, c3.e = null)));
      },
      M(e4, t3) {
        var n3, r3, i3, a3 = this, o3 = a3.cj();
        for (n3 = o3.length, r3 = 0; r3 < n3; ++r3) if (i3 = o3[r3], t3.$2(i3, a3.i(0, i3)), o3 !== a3.e) throw E2.d(E2.ag(a3));
      },
      cj() {
        var e4, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3 = this, d3 = u3.e;
        if (d3 != null) return d3;
        if (d3 = E2.U(u3.a, null, false, N2.z), e4 = u3.b, e4 != null) for (t3 = Object.getOwnPropertyNames(e4), n3 = t3.length, r3 = 0, i3 = 0; i3 < n3; ++i3) d3[r3] = t3[i3], ++r3;
        else r3 = 0;
        if (a3 = u3.c, a3 != null) for (t3 = Object.getOwnPropertyNames(a3), n3 = t3.length, i3 = 0; i3 < n3; ++i3) d3[r3] = +t3[i3], ++r3;
        if (o3 = u3.d, o3 != null) for (t3 = Object.getOwnPropertyNames(o3), n3 = t3.length, i3 = 0; i3 < n3; ++i3) for (s3 = o3[t3[i3]], c3 = s3.length, l3 = 0; l3 < c3; l3 += 2) d3[r3] = s3[l3], ++r3;
        return u3.e = d3;
      },
      dj(e4, t3, n3) {
        e4[t3] ?? (++this.a, this.e = null), E2.nA(e4, t3, n3);
      },
      cl(e4, t3) {
        return e4[E2.fZ(t3) & 1073741823];
      }
    }, E2.e4.prototype = { an(e4, t3) {
      var n3, r3, i3;
      if (e4 == null) return -1;
      for (n3 = e4.length, r3 = 0; r3 < n3; r3 += 2) if (i3 = e4[r3], i3 == null ? t3 == null : i3 === t3) return r3;
      return -1;
    } }, E2.e2.prototype = {
      gj(e4) {
        return this.a.a;
      },
      gA(e4) {
        return this.a.a === 0;
      },
      gH(e4) {
        var t3 = this.a;
        return new E2.e3(t3, t3.cj(), this.$ti.h("e3<1>"));
      },
      G(e4, t3) {
        return this.a.v(t3);
      }
    }, E2.e3.prototype = {
      gt() {
        return this.d;
      },
      q() {
        var e4 = this, t3 = e4.b, n3 = e4.c, r3 = e4.a;
        if (t3 !== r3.e) throw E2.d(E2.ag(r3));
        return n3 >= t3.length ? (e4.d = null, false) : (e4.d = t3[n3], e4.c = n3 + 1, true);
      },
      $iP: 1
    }, E2.e5.prototype = {
      i(e4, t3) {
        return this.y.$1(t3) ? this.d8(t3) : null;
      },
      m(e4, t3, n3) {
        this.d9(t3, n3);
      },
      v(e4) {
        return this.y.$1(e4) ? this.d7(e4) : false;
      },
      bh(e4) {
        return this.x.$1(e4) & 1073741823;
      },
      bi(e4, t3) {
        var n3, r3, i3;
        if (e4 == null) return -1;
        for (n3 = e4.length, r3 = this.w, i3 = 0; i3 < n3; ++i3) if (r3.$2(e4[i3].a, t3)) return i3;
        return -1;
      }
    }, E2.mi.prototype = {
      $1(e4) {
        return this.a.b(e4);
      },
      $S: 63
    }, E2.b_.prototype = {
      gH(e4) {
        var t3 = this, n3 = new E2.cH(t3, t3.r, E2.A(t3).h("cH<1>"));
        return n3.c = t3.e, n3;
      },
      gj(e4) {
        return this.a;
      },
      gA(e4) {
        return this.a === 0;
      },
      ga8(e4) {
        return this.a !== 0;
      },
      G(e4, t3) {
        var n3, r3;
        return typeof t3 == "string" && t3 !== "__proto__" ? (n3 = this.b, n3 != null && n3[t3] != null) : typeof t3 == "number" && (t3 & 1073741823) === t3 ? (r3 = this.c, r3 != null && r3[t3] != null) : this.ds(t3);
      },
      ds(e4) {
        var t3 = this.d;
        return t3 != null && this.an(t3[this.bB(e4)], e4) >= 0;
      },
      C(e4, t3) {
        var n3, r3, i3 = this;
        return typeof t3 == "string" && t3 !== "__proto__" ? (n3 = i3.b, i3.cc(n3 ?? (i3.b = E2.nC()), t3)) : typeof t3 == "number" && (t3 & 1073741823) === t3 ? (r3 = i3.c, i3.cc(r3 ?? (i3.c = E2.nC()), t3)) : i3.dh(t3);
      },
      dh(e4) {
        var t3, n3, r3 = this, i3 = r3.d;
        if (i3 ??= r3.d = E2.nC(), t3 = r3.bB(e4), n3 = i3[t3], n3 == null) i3[t3] = [r3.bz(e4)];
        else {
          if (r3.an(n3, e4) >= 0) return false;
          n3.push(r3.bz(e4));
        }
        return true;
      },
      ei(e4, t3) {
        var n3 = this;
        return typeof t3 == "string" && t3 !== "__proto__" ? n3.ct(n3.b, t3) : typeof t3 == "number" && (t3 & 1073741823) === t3 ? n3.ct(n3.c, t3) : n3.dO(t3);
      },
      dO(e4) {
        var t3, n3, r3, i3, a3 = this, o3 = a3.d;
        return o3 == null || (t3 = a3.bB(e4), n3 = o3[t3], r3 = a3.an(n3, e4), r3 < 0) ? false : (i3 = n3.splice(r3, 1)[0], n3.length === 0 && delete o3[t3], a3.cA(i3), true);
      },
      dv(e4, t3) {
        for (var n3, r3, i3, a3, o3 = this, s3 = o3.e; s3 != null; s3 = r3) {
          if (n3 = s3.a, r3 = s3.b, i3 = o3.r, a3 = e4.$1(n3), i3 !== o3.r) throw E2.d(E2.ag(o3));
          false === a3 && o3.ei(0, n3);
        }
      },
      P(e4) {
        var t3 = this;
        t3.a > 0 && (t3.b = t3.c = t3.d = t3.e = t3.f = null, t3.a = 0, t3.bG());
      },
      cc(e4, t3) {
        return e4[t3] == null && (e4[t3] = this.bz(t3), true);
      },
      ct(e4, t3) {
        var n3;
        return e4 == null || (n3 = e4[t3], n3 == null) ? false : (this.cA(n3), delete e4[t3], true);
      },
      bG() {
        this.r = this.r + 1 & 1073741823;
      },
      bz(e4) {
        var t3, n3 = this, r3 = new E2.mj(e4);
        return n3.e == null ? n3.e = n3.f = r3 : (t3 = n3.f, t3.toString, r3.c = t3, n3.f = t3.b = r3), ++n3.a, n3.bG(), r3;
      },
      cA(e4) {
        var t3 = this, n3 = e4.c, r3 = e4.b;
        n3 == null ? t3.e = r3 : n3.b = r3, r3 == null ? t3.f = n3 : r3.c = n3, --t3.a, t3.bG();
      },
      bB(e4) {
        return D2.bY(e4) & 1073741823;
      },
      an(e4, t3) {
        var n3, r3;
        if (e4 == null) return -1;
        for (n3 = e4.length, r3 = 0; r3 < n3; ++r3) if (D2.af(e4[r3].a, t3)) return r3;
        return -1;
      }
    }, E2.mj.prototype = {}, E2.cH.prototype = {
      gt() {
        return this.d;
      },
      q() {
        var e4 = this, t3 = e4.c, n3 = e4.a;
        if (e4.b !== n3.r) throw E2.d(E2.ag(n3));
        return t3 == null ? (e4.d = null, false) : (e4.d = t3.a, e4.c = t3.b, true);
      },
      $iP: 1
    }, E2.aX.prototype = {
      aj(e4, t3) {
        return new E2.aX(D2.nn(this.a, t3), t3.h("aX<0>"));
      },
      gj(e4) {
        return D2.a3(this.a);
      },
      i(e4, t3) {
        return D2.eD(this.a, t3);
      }
    }, E2.dw.prototype = {}, E2.dA.prototype = {
      $iq: 1,
      $ij: 1,
      $io: 1
    }, E2.p.prototype = {
      gH(e4) {
        return new E2.aa(e4, this.gj(e4), E2.ak(e4).h("aa<p.E>"));
      },
      V(e4, t3) {
        return this.i(e4, t3);
      },
      gA(e4) {
        return this.gj(e4) === 0;
      },
      ga8(e4) {
        return !this.gA(e4);
      },
      gcH(e4) {
        if (this.gj(e4) === 0) throw E2.d(E2.nq());
        return this.i(e4, 0);
      },
      G(e4, t3) {
        var n3, r3 = this.gj(e4);
        for (n3 = 0; n3 < r3; ++n3) {
          if (D2.af(this.i(e4, n3), t3)) return true;
          if (r3 !== this.gj(e4)) throw E2.d(E2.ag(e4));
        }
        return false;
      },
      be(e4, t3) {
        var n3, r3 = this.gj(e4);
        for (n3 = 0; n3 < r3; ++n3) {
          if (!t3.$1(this.i(e4, n3))) return false;
          if (r3 !== this.gj(e4)) throw E2.d(E2.ag(e4));
        }
        return true;
      },
      aR(e4, t3) {
        var n3, r3 = this.gj(e4);
        for (n3 = 0; n3 < r3; ++n3) {
          if (t3.$1(this.i(e4, n3))) return true;
          if (r3 !== this.gj(e4)) throw E2.d(E2.ag(e4));
        }
        return false;
      },
      al(e4, t3, n3) {
        return new E2.ab(e4, t3, E2.ak(e4).h("@<p.E>").I(n3).h("ab<1,2>"));
      },
      a6(e4, t3) {
        return E2.dQ(e4, t3, null, E2.ak(e4).h("p.E"));
      },
      b_(e4, t3) {
        var n3, r3, i3, a3, o3 = this;
        if (o3.gA(e4)) return n3 = D2.b8(0, E2.ak(e4).h("p.E")), n3;
        for (r3 = o3.i(e4, 0), i3 = E2.U(o3.gj(e4), r3, false, E2.ak(e4).h("p.E")), a3 = 1; a3 < o3.gj(e4); ++a3) i3[a3] = o3.i(e4, a3);
        return i3;
      },
      c3(e4) {
        var t3, n3 = E2.oH(E2.ak(e4).h("p.E"));
        for (t3 = 0; t3 < this.gj(e4); ++t3) n3.C(0, this.i(e4, t3));
        return n3;
      },
      C(e4, t3) {
        var n3 = this.gj(e4);
        this.sj(e4, n3 + 1), this.m(e4, n3, t3);
      },
      aj(e4, t3) {
        return new E2.b5(e4, E2.ak(e4).h("@<p.E>").I(t3).h("b5<1,2>"));
      },
      a1(e4, t3, n3) {
        var r3 = this.gj(e4);
        return E2.aQ(t3, n3, r3), E2.uK(this.b0(e4, t3, n3), E2.ak(e4).h("p.E"));
      },
      b0(e4, t3, n3) {
        return E2.aQ(t3, n3, this.gj(e4)), E2.dQ(e4, t3, n3, E2.ak(e4).h("p.E"));
      },
      e5(e4, t3, n3, r3) {
        var i3;
        for (E2.aQ(t3, n3, this.gj(e4)), i3 = t3; i3 < n3; ++i3) this.m(e4, i3, r3);
      },
      a5(e4, t3, n3, r3, i3) {
        var a3, o3, s3, c3, l3;
        if (E2.aQ(t3, n3, this.gj(e4)), a3 = n3 - t3, a3 !== 0) {
          if (E2.aW(i3, "skipCount"), E2.ak(e4).h("o<p.E>").b(r3) ? (o3 = i3, s3 = r3) : (s3 = D2.op(r3, i3).b_(0, false), o3 = 0), c3 = D2.V(s3), o3 + a3 > c3.gj(s3)) throw E2.d(E2.ui());
          if (o3 < t3) for (l3 = a3 - 1; l3 >= 0; --l3) this.m(e4, t3 + l3, c3.i(s3, o3 + l3));
          else for (l3 = 0; l3 < a3; ++l3) this.m(e4, t3 + l3, c3.i(s3, o3 + l3));
        }
      },
      bR(e4, t3) {
        var n3;
        for (n3 = 0; n3 < this.gj(e4); ++n3) if (D2.af(this.i(e4, n3), t3)) return n3;
        return -1;
      },
      k(e4) {
        return E2.iI(e4, "[", "]");
      }
    }, E2.dB.prototype = {}, E2.jO.prototype = {
      $2(e4, t3) {
        var n3, r3 = this.a;
        r3.a || (this.b.a += ", "), r3.a = false, r3 = this.b, n3 = r3.a += E2.b(e4), r3.a = n3 + ": ", r3.a += E2.b(t3);
      },
      $S: 64
    }, E2.I.prototype = {
      ak(e4, t3, n3) {
        var r3 = E2.A(this);
        return E2.oK(this, r3.h("I.K"), r3.h("I.V"), t3, n3);
      },
      M(e4, t3) {
        var n3, r3;
        for (n3 = this.gN(), n3 = n3.gH(n3); n3.q(); ) r3 = n3.gt(), t3.$2(r3, this.i(0, r3));
      },
      ge4() {
        return this.gN().al(0, new E2.jP(this), E2.A(this).h("cY<I.K,I.V>"));
      },
      v(e4) {
        return this.gN().G(0, e4);
      },
      gj(e4) {
        var t3 = this.gN();
        return t3.gj(t3);
      },
      gA(e4) {
        var t3 = this.gN();
        return t3.gA(t3);
      },
      k(e4) {
        return E2.nv(this);
      },
      $ih: 1
    }, E2.jP.prototype = {
      $1(e4) {
        var t3 = this.a, n3 = E2.A(t3);
        return new E2.cY(e4, t3.i(0, e4), n3.h("@<I.K>").I(n3.h("I.V")).h("cY<1,2>"));
      },
      $S() {
        return E2.A(this.a).h("cY<I.K,I.V>(I.K)");
      }
    }, E2.fU.prototype = { m(e4, t3, n3) {
      throw E2.d(E2.ad("Cannot modify unmodifiable map"));
    } }, E2.dC.prototype = {
      ak(e4, t3, n3) {
        return this.a.ak(0, t3, n3);
      },
      i(e4, t3) {
        return this.a.i(0, t3);
      },
      m(e4, t3, n3) {
        this.a.m(0, t3, n3);
      },
      v(e4) {
        return this.a.v(e4);
      },
      M(e4, t3) {
        this.a.M(0, t3);
      },
      gA(e4) {
        var t3 = this.a;
        return t3.gA(t3);
      },
      gj(e4) {
        var t3 = this.a;
        return t3.gj(t3);
      },
      gN() {
        return this.a.gN();
      },
      k(e4) {
        return this.a.k(0);
      },
      $ih: 1
    }, E2.bm.prototype = { ak(e4, t3, n3) {
      return new E2.bm(this.a.ak(0, t3, n3), t3.h("@<0>").I(n3).h("bm<1,2>"));
    } }, E2.dM.prototype = {
      gA(e4) {
        return this.a === 0;
      },
      ga8(e4) {
        return this.a !== 0;
      },
      D(e4, t3) {
        var n3;
        for (n3 = D2.aA(t3); n3.q(); ) this.C(0, n3.gt());
      },
      al(e4, t3, n3) {
        return new E2.c9(this, t3, E2.A(this).h("@<1>").I(n3).h("c9<1,2>"));
      },
      k(e4) {
        return E2.iI(this, "{", "}");
      },
      be(e4, t3) {
        var n3;
        for (n3 = E2.nB(this, this.r, E2.A(this).c); n3.q(); ) if (!t3.$1(n3.d)) return false;
        return true;
      },
      a6(e4, t3) {
        return E2.p0(this, t3, E2.A(this).c);
      },
      bf(e4, t3, n3) {
        var r3, i3;
        for (r3 = E2.nB(this, this.r, E2.A(this).c); r3.q(); ) if (i3 = r3.d, t3.$1(i3)) return i3;
        return n3.$0();
      },
      V(e4, t3) {
        var n3, r3, i3, a3 = this, o3 = "index";
        for (E2.bU(t3, o3, N2.S), E2.aW(t3, o3), n3 = E2.nB(a3, a3.r, E2.A(a3).c), r3 = 0; n3.q(); ) {
          if (i3 = n3.d, t3 === r3) return i3;
          ++r3;
        }
        throw E2.d(E2.eW(t3, r3, a3, null, o3));
      }
    }, E2.ec.prototype = {
      $iq: 1,
      $ij: 1,
      $id1: 1
    }, E2.e6.prototype = {}, E2.em.prototype = {}, E2.eq.prototype = {}, E2.fM.prototype = {
      i(e4, t3) {
        var n3, r3 = this.b;
        return r3 == null ? this.c.i(0, t3) : typeof t3 == "string" ? (n3 = r3[t3], n3 === void 0 ? this.dM(t3) : n3) : null;
      },
      gj(e4) {
        return this.b == null ? this.c.a : this.aL().length;
      },
      gA(e4) {
        return this.gj(this) === 0;
      },
      gN() {
        if (this.b == null) {
          var e4 = this.c;
          return new E2.aO(e4, E2.A(e4).h("aO<1>"));
        }
        return new E2.fN(this);
      },
      m(e4, t3, n3) {
        var r3, i3, a3 = this;
        a3.b == null ? a3.c.m(0, t3, n3) : a3.v(t3) ? (r3 = a3.b, r3[t3] = n3, i3 = a3.a, (i3 == null ? r3 != null : i3 !== r3) && (i3[t3] = null)) : a3.dW().m(0, t3, n3);
      },
      v(e4) {
        return this.b == null ? this.c.v(e4) : typeof e4 == "string" && Object.prototype.hasOwnProperty.call(this.a, e4);
      },
      M(e4, t3) {
        var n3, r3, i3, a3, o3 = this;
        if (o3.b == null) return o3.c.M(0, t3);
        for (n3 = o3.aL(), r3 = 0; r3 < n3.length; ++r3) if (i3 = n3[r3], a3 = o3.b[i3], a3 === void 0 && (a3 = E2.mA(o3.a[i3]), o3.b[i3] = a3), t3.$2(i3, a3), n3 !== o3.c) throw E2.d(E2.ag(o3));
      },
      aL() {
        var e4 = this.c;
        return e4 ??= this.c = E2.a(Object.keys(this.a), N2.s), e4;
      },
      dW() {
        var e4, t3, n3, r3, i3, a3 = this;
        if (a3.b == null) return a3.c;
        for (e4 = E2.a9(N2.R, N2.z), t3 = a3.aL(), n3 = 0; r3 = t3.length, n3 < r3; ++n3) i3 = t3[n3], e4.m(0, i3, a3.i(0, i3));
        return r3 === 0 ? t3.push("") : O2.d.P(t3), a3.a = a3.b = null, a3.c = e4;
      },
      dM(e4) {
        var t3;
        return Object.prototype.hasOwnProperty.call(this.a, e4) ? (t3 = E2.mA(this.a[e4]), this.b[e4] = t3) : null;
      }
    }, E2.fN.prototype = {
      gj(e4) {
        var t3 = this.a;
        return t3.gj(t3);
      },
      V(e4, t3) {
        var n3 = this.a;
        return n3.b == null ? n3.gN().V(0, t3) : n3.aL()[t3];
      },
      gH(e4) {
        var t3 = this.a;
        return t3.b == null ? (t3 = t3.gN(), t3 = t3.gH(t3)) : (t3 = t3.aL(), t3 = new D2.b4(t3, t3.length, E2.a_(t3).h("b4<1>"))), t3;
      },
      G(e4, t3) {
        return this.a.v(t3);
      }
    }, E2.mh.prototype = { a7() {
      var e4, t3, n3, r3 = this;
      r3.de(), e4 = r3.a, t3 = e4.a, e4.a = "", e4 = r3.c, n3 = e4.b, n3.push(E2.pB((t3.charCodeAt(0), t3), r3.b)), e4.a.$1(n3);
    } }, E2.lD.prototype = {
      $0() {
        var e4;
        try {
          return e4 = new TextDecoder("utf-8", { fatal: true }), e4;
        } catch {
        }
        return null;
      },
      $S: 7
    }, E2.lC.prototype = {
      $0() {
        var e4;
        try {
          return e4 = new TextDecoder("utf-8", { fatal: false }), e4;
        } catch {
        }
        return null;
      },
      $S: 7
    }, E2.ha.prototype = { ee(e4, t3, n3) {
      var r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3, y3 = "Invalid base64 encoding length ";
      for (n3 = E2.aQ(t3, n3, e4.length), r3 = A2.ok(), i3 = t3, a3 = i3, o3 = null, s3 = -1, c3 = -1, l3 = 0; i3 < n3; i3 = u3) {
        if (u3 = i3 + 1, d3 = O2.a.J(e4, i3), d3 === 37 ? (f3 = u3 + 2, f3 <= n3 ? (p3 = E2.pW(e4, u3), p3 === 37 && (p3 = -1), u3 = f3) : p3 = -1) : p3 = d3, 0 <= p3 && p3 <= 127) {
          if (m3 = r3[p3], m3 >= 0) {
            if (p3 = O2.a.B("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", m3), p3 === d3) continue;
            d3 = p3;
          } else {
            if (m3 === -1 && (s3 < 0 && (h3 = o3 == null ? null : o3.a.length, h3 ??= 0, s3 = h3 + (i3 - a3), c3 = i3), ++l3, d3 === 61)) continue;
            d3 = p3;
          }
          if (m3 !== -2) {
            o3 ??= new E2.ac(""), h3 = o3, g3 = h3.a += O2.a.u(e4, a3, i3), h3.a = g3 + E2.be(d3), a3 = u3;
            continue;
          }
        }
        throw E2.d(E2.R("Invalid base64 data", e4, i3));
      }
      if (o3 != null) {
        if (h3 = o3.a += O2.a.u(e4, a3, n3), g3 = h3.length, s3 >= 0) E2.os(e4, c3, n3, s3, l3, g3);
        else {
          if (_3 = O2.c.br(g3 - 1, 4) + 1, _3 === 1) throw E2.d(E2.R(y3, e4, n3));
          for (; _3 < 4; ) h3 += "=", o3.a = h3, ++_3;
        }
        return h3 = o3.a, O2.a.aH(e4, t3, n3, (h3.charCodeAt(0), h3));
      }
      if (v3 = n3 - t3, s3 >= 0) E2.os(e4, c3, n3, s3, l3, v3);
      else {
        if (_3 = O2.c.br(v3, 4), _3 === 1) throw E2.d(E2.R(y3, e4, n3));
        _3 > 1 && (e4 = O2.a.aH(e4, n3, n3, _3 === 2 ? "==" : "="));
      }
      return e4;
    } }, E2.hc.prototype = {}, E2.hb.prototype = { e0(e4, t3) {
      var n3, r3, i3, a3 = E2.aQ(t3, null, e4.length);
      return t3 === a3 ? /* @__PURE__ */ new Uint8Array() : (n3 = new E2.lZ(), r3 = n3.e2(e4, t3, a3), r3.toString, i3 = n3.a, i3 < -1 && E2.Z(E2.R("Missing padding character", e4, a3)), i3 > 0 && E2.Z(E2.R("Invalid length, must be multiple of four", e4, a3)), n3.a = -1, r3);
    } }, E2.lZ.prototype = { e2(e4, t3, n3) {
      var r3, i3 = this, a3 = i3.a;
      return a3 < 0 ? (i3.a = E2.pc(e4, t3, n3, a3), null) : t3 === n3 ? /* @__PURE__ */ new Uint8Array() : (r3 = E2.vk(e4, t3, n3, a3), i3.a = E2.vm(e4, t3, n3, r3, 0, i3.a), r3);
    } }, E2.hd.prototype = {}, E2.eJ.prototype = {}, E2.fO.prototype = {}, E2.eN.prototype = {}, E2.eP.prototype = {}, E2.hW.prototype = {}, E2.iQ.prototype = {
      e1(e4) {
        return E2.pB(e4, this.gcF().a);
      },
      gcF() {
        return O2.c4;
      }
    }, E2.iR.prototype = {}, E2.lr.prototype = {}, E2.ls.prototype = {}, E2.ef.prototype = { a7() {
    } }, E2.mu.prototype = {
      a7() {
        this.a.e6(this.c), this.b.a7();
      },
      dX(e4, t3, n3, r3) {
        this.c.a += this.a.cE(e4, t3, n3, false);
      }
    }, E2.lA.prototype = {}, E2.lB.prototype = { e_(e4) {
      var t3 = this.a;
      return E2.ve(t3, e4, 0, null) ?? new E2.fV(t3).cE(e4, 0, null, true);
    } }, E2.fV.prototype = {
      cE(e4, t3, n3, r3) {
        var i3, a3, o3, s3, c3, l3 = this, u3 = E2.aQ(t3, n3, D2.a3(e4));
        if (t3 === u3) return "";
        if (N2.gc.b(e4) ? (i3 = e4, a3 = 0) : (i3 = E2.vZ(e4, t3, u3), u3 -= t3, a3 = t3, t3 = 0), o3 = l3.bC(i3, t3, u3, r3), s3 = l3.b, s3 & 1) throw c3 = E2.ps(s3), l3.b = 0, E2.d(E2.R(c3, e4, a3 + l3.c));
        return o3;
      },
      bC(e4, t3, n3, r3) {
        var i3, a3, o3 = this;
        return n3 - t3 > 1e3 ? (i3 = O2.c.bJ(t3 + n3, 2), a3 = o3.bC(e4, t3, i3, false), o3.b & 1 ? a3 : a3 + o3.bC(e4, i3, n3, r3)) : o3.e3(e4, t3, n3, r3);
      },
      e6(e4) {
        var t3 = this.b;
        if (this.b = 0, !(t3 <= 32)) {
          if (this.a) e4.a += E2.be(65533);
          else throw E2.d(E2.R(E2.ps(77), null, null));
        }
      },
      e3(e4, t3, n3, r3) {
        var i3, a3, o3, s3, c3, l3, u3, d3 = this, f3 = 65533, p3 = d3.b, m3 = d3.c, h3 = new E2.ac(""), g3 = t3 + 1, _3 = e4[t3];
        $label0$0: for (i3 = d3.a; ; ) {
          for (; ; g3 = s3) {
            if (a3 = O2.a.J("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE", _3) & 31, m3 = p3 <= 32 ? _3 & 61694 >>> a3 : (_3 & 63 | m3 << 6) >>> 0, p3 = O2.a.J(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\0\0\0\0\0AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\0\0\0\0 AAAAA", p3 + a3), p3 === 0) {
              if (h3.a += E2.be(m3), g3 === n3) break $label0$0;
              break;
            }
            if (p3 & 1) {
              if (i3) switch (p3) {
                case 69:
                case 67:
                  h3.a += E2.be(f3);
                  break;
                case 65:
                  h3.a += E2.be(f3), --g3;
                  break;
                default:
                  o3 = h3.a += E2.be(f3), h3.a = o3 + E2.be(f3);
              }
              else return d3.b = p3, d3.c = g3 - 1, "";
              p3 = 0;
            }
            if (g3 === n3) break $label0$0;
            s3 = g3 + 1, _3 = e4[g3];
          }
          if (s3 = g3 + 1, _3 = e4[g3], _3 < 128) {
            for (; ; ) {
              if (!(s3 < n3)) {
                c3 = n3;
                break;
              }
              if (l3 = s3 + 1, _3 = e4[s3], _3 >= 128) {
                c3 = l3 - 1, s3 = l3;
                break;
              }
              s3 = l3;
            }
            if (c3 - g3 < 20) for (u3 = g3; u3 < c3; ++u3) h3.a += E2.be(e4[u3]);
            else h3.a += E2.p2(e4, g3, c3);
            if (c3 === n3) break $label0$0;
            g3 = s3;
          } else g3 = s3;
        }
        if (r3 && p3 > 32) {
          if (i3) h3.a += E2.be(f3);
          else return d3.b = 77, d3.c = n3, "";
        }
        return d3.b = p3, d3.c = m3, i3 = h3.a, i3.charCodeAt(0), i3;
      }
    }, E2.k2.prototype = {
      $2(e4, t3) {
        var n3 = this.b, r3 = this.a, i3 = n3.a += r3.a;
        i3 += E2.b(e4.a), n3.a = i3, n3.a = i3 + ": ", n3.a += E2.cS(t3), r3.a = ", ";
      },
      $S: 75
    }, E2.dp.prototype = {
      O(e4, t3) {
        return t3 != null && t3 instanceof E2.dp && this.a === t3.a && this.b === t3.b;
      },
      gE(e4) {
        var t3 = this.a;
        return (t3 ^ O2.c.ai(t3, 30)) & 1073741823;
      },
      ew() {
        var e4, t3;
        return this.b ? this : (e4 = this.a, t3 = !(Math.abs(e4) <= 864e13), t3 && E2.Z(E2.K("DateTime is outside valid range: " + e4, null)), E2.bU(true, "isUtc", N2.y), new E2.dp(e4, true));
      },
      k(e4) {
        var t3 = this, n3 = E2.oy(E2.fk(t3)), r3 = E2.b6(E2.oW(t3)), i3 = E2.b6(E2.oS(t3)), a3 = E2.b6(E2.oT(t3)), o3 = E2.b6(E2.oV(t3)), s3 = E2.b6(E2.oX(t3)), c3 = E2.oz(E2.oU(t3)), l3 = n3 + "-" + r3;
        return t3.b ? l3 + "-" + i3 + " " + a3 + ":" + o3 + ":" + s3 + "." + c3 + "Z" : l3 + "-" + i3 + " " + a3 + ":" + o3 + ":" + s3 + "." + c3;
      },
      ev() {
        var e4 = this, t3 = E2.fk(e4) >= -9999 && E2.fk(e4) <= 9999 ? E2.oy(E2.fk(e4)) : E2.u5(E2.fk(e4)), n3 = E2.b6(E2.oW(e4)), r3 = E2.b6(E2.oS(e4)), i3 = E2.b6(E2.oT(e4)), a3 = E2.b6(E2.oV(e4)), o3 = E2.b6(E2.oX(e4)), s3 = E2.oz(E2.oU(e4)), c3 = t3 + "-" + n3;
        return e4.b ? c3 + "-" + r3 + "T" + i3 + ":" + a3 + ":" + o3 + "." + s3 + "Z" : c3 + "-" + r3 + "T" + i3 + ":" + a3 + ":" + o3 + "." + s3;
      }
    }, E2.m2.prototype = { k(e4) {
      return this.aB();
    } }, E2.H.prototype = { gb2() {
      return E2.aS(this.$thrownJsError);
    } }, E2.eF.prototype = { k(e4) {
      var t3 = this.a;
      return t3 == null ? "Assertion failed" : "Assertion failed: " + E2.cS(t3);
    } }, E2.aG.prototype = {}, E2.fg.prototype = {
      k(e4) {
        return "Throw of null.";
      },
      $iaG: 1
    }, E2.at.prototype = {
      gbE() {
        return "Invalid argument" + (this.a ? "" : "(s)");
      },
      gbD() {
        return "";
      },
      k(e4) {
        var t3 = this, n3 = t3.c, r3 = n3 == null ? "" : " (" + n3 + ")", i3 = t3.d, a3 = i3 == null ? "" : ": " + E2.b(i3), o3 = t3.gbE() + r3 + a3;
        return t3.a ? o3 + t3.gbD() + ": " + E2.cS(t3.gbS()) : o3;
      },
      gbS() {
        return this.b;
      }
    }, E2.dL.prototype = {
      gbS() {
        return this.b;
      },
      gbE() {
        return "RangeError";
      },
      gbD() {
        var e4, t3 = this.e, n3 = this.f;
        return e4 = t3 == null ? n3 == null ? "" : ": Not less than or equal to " + E2.b(n3) : n3 == null ? ": Not greater than or equal to " + E2.b(t3) : n3 > t3 ? ": Not in inclusive range " + E2.b(t3) + ".." + E2.b(n3) : n3 < t3 ? ": Valid value range is empty" : ": Only valid value is " + E2.b(t3), e4;
      }
    }, E2.eV.prototype = {
      gbS() {
        return this.b;
      },
      gbE() {
        return "RangeError";
      },
      gbD() {
        if (this.b < 0) return ": index must not be negative";
        var e4 = this.f;
        return e4 === 0 ? ": no indices are valid" : ": index should be less than " + e4;
      },
      gj(e4) {
        return this.f;
      }
    }, E2.dH.prototype = { k(e4) {
      var t3, n3, r3, i3, a3, o3, s3, c3, l3 = this, u3 = {}, d3 = new E2.ac("");
      for (u3.a = "", t3 = l3.c, n3 = t3.length, r3 = 0, i3 = "", a3 = ""; r3 < n3; ++r3, a3 = ", ") o3 = t3[r3], d3.a = i3 + a3, i3 = d3.a += E2.cS(o3), u3.a = ", ";
      return l3.d.M(0, new E2.k2(u3, d3)), s3 = E2.cS(l3.a), c3 = d3.k(0), "NoSuchMethodError: method not found: '" + E2.b(l3.b.a) + "'\nReceiver: " + s3 + "\nArguments: [" + c3 + "]";
    } }, E2.fz.prototype = { k(e4) {
      return "Unsupported operation: " + this.a;
    } }, E2.fu.prototype = { k(e4) {
      var t3 = this.a;
      return t3 == null ? "UnimplementedError" : "UnimplementedError: " + t3;
    } }, E2.bJ.prototype = { k(e4) {
      return "Bad state: " + this.a;
    } }, E2.eO.prototype = { k(e4) {
      var t3 = this.a;
      return t3 == null ? "Concurrent modification during iteration." : "Concurrent modification during iteration: " + E2.cS(t3) + ".";
    } }, E2.fi.prototype = {
      k(e4) {
        return "Out of Memory";
      },
      gb2() {
        return null;
      },
      $iH: 1
    }, E2.dO.prototype = {
      k(e4) {
        return "Stack Overflow";
      },
      gb2() {
        return null;
      },
      $iH: 1
    }, E2.eQ.prototype = { k(e4) {
      var t3 = this.a;
      return t3 == null ? "Reading static variable during its initialization" : "Reading static variable '" + t3 + "' during its initialization";
    } }, E2.e_.prototype = {
      k(e4) {
        return "Exception: " + this.a;
      },
      $ia8: 1
    }, E2.aK.prototype = {
      k(e4) {
        var t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3 = this.a, p3 = f3 != null && f3 !== "" ? "FormatException: " + E2.b(f3) : "FormatException", m3 = this.c, h3 = this.b;
        if (typeof h3 == "string") {
          if (t3 = m3 == null ? false : m3 < 0 || m3 > h3.length, t3 && (m3 = null), m3 == null) return h3.length > 78 && (h3 = O2.a.u(h3, 0, 75) + "..."), p3 + "\n" + h3;
          for (n3 = 1, r3 = 0, i3 = false, a3 = 0; a3 < m3; ++a3) o3 = O2.a.J(h3, a3), o3 === 10 ? ((r3 !== a3 || !i3) && ++n3, r3 = a3 + 1, i3 = false) : o3 === 13 && (++n3, r3 = a3 + 1, i3 = true);
          for (p3 = n3 > 1 ? p3 + (" (at line " + n3 + ", character " + (m3 - r3 + 1) + ")\n") : p3 + (" (at character " + (m3 + 1) + ")\n"), s3 = h3.length, a3 = m3; a3 < s3; ++a3) if (o3 = O2.a.B(h3, a3), o3 === 10 || o3 === 13) {
            s3 = a3;
            break;
          }
          return s3 - r3 > 78 ? m3 - r3 < 75 ? (c3 = r3 + 75, l3 = r3, u3 = "", d3 = "...") : (s3 - m3 < 75 ? (l3 = s3 - 75, c3 = s3, d3 = "") : (l3 = m3 - 36, c3 = m3 + 36, d3 = "..."), u3 = "...") : (c3 = s3, l3 = r3, u3 = "", d3 = ""), p3 + u3 + O2.a.u(h3, l3, c3) + d3 + "\n" + O2.a.bs(" ", m3 - l3 + u3.length) + "^\n";
        }
        return m3 == null ? p3 : p3 + (" (at offset " + E2.b(m3) + ")");
      },
      $ia8: 1
    }, E2.j.prototype = {
      aj(e4, t3) {
        return E2.he(this, E2.A(this).h("j.E"), t3);
      },
      al(e4, t3, n3) {
        return E2.jQ(this, t3, E2.A(this).h("j.E"), n3);
      },
      G(e4, t3) {
        var n3;
        for (n3 = this.gH(this); n3.q(); ) if (D2.af(n3.gt(), t3)) return true;
        return false;
      },
      aR(e4, t3) {
        var n3;
        for (n3 = this.gH(this); n3.q(); ) if (t3.$1(n3.gt())) return true;
        return false;
      },
      b_(e4, t3) {
        return E2.bc(this, false, E2.A(this).h("j.E"));
      },
      gj(e4) {
        var t3, n3 = this.gH(this);
        for (t3 = 0; n3.q(); ) ++t3;
        return t3;
      },
      gA(e4) {
        return !this.gH(this).q();
      },
      ga8(e4) {
        return !this.gA(this);
      },
      a6(e4, t3) {
        return E2.p0(this, t3, E2.A(this).h("j.E"));
      },
      V(e4, t3) {
        var n3, r3, i3;
        for (E2.aW(t3, "index"), n3 = this.gH(this), r3 = 0; n3.q(); ) {
          if (i3 = n3.gt(), t3 === r3) return i3;
          ++r3;
        }
        throw E2.d(E2.eW(t3, r3, this, null, "index"));
      },
      k(e4) {
        return E2.uh(this, "(", ")");
      }
    }, E2.e0.prototype = {
      V(e4, t3) {
        var n3 = this.a;
        return (0 > t3 || t3 >= n3) && E2.Z(E2.eW(t3, n3, this, null, "index")), this.b.$1(t3);
      },
      gj(e4) {
        return this.a;
      }
    }, E2.P.prototype = {}, E2.cY.prototype = { k(e4) {
      return "MapEntry(" + E2.b(this.a) + ": " + E2.b(this.b) + ")";
    } }, E2.l.prototype = {
      gE(e4) {
        return E2.c.prototype.gE.call(this, this);
      },
      k(e4) {
        return "null";
      }
    }, E2.c.prototype = {
      $ic: 1,
      O(e4, t3) {
        return this === t3;
      },
      gE(e4) {
        return E2.d0(this);
      },
      k(e4) {
        return "Instance of '" + E2.b(E2.ka(this)) + "'";
      },
      bm(e4, t3) {
        throw E2.d(E2.uT(this, t3.gcT(), t3.gcX(), t3.gcU(), null));
      },
      toString() {
        return this.k(this);
      }
    }, E2.fR.prototype = {
      k(e4) {
        return "";
      },
      $ian: 1
    }, E2.ac.prototype = {
      gj(e4) {
        return this.a.length;
      },
      k(e4) {
        var t3 = this.a;
        return t3.charCodeAt(0), t3;
      }
    }, E2.lx.prototype = {
      $2(e4, t3) {
        throw E2.d(E2.R("Illegal IPv4 address, " + e4, this.a, t3));
      },
      $S: 87
    }, E2.ly.prototype = {
      $2(e4, t3) {
        throw E2.d(E2.R("Illegal IPv6 address, " + e4, this.a, t3));
      },
      $S: 88
    }, E2.lz.prototype = {
      $2(e4, t3) {
        var n3;
        return t3 - e4 > 4 && this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits", e4), n3 = E2.cM(O2.a.u(this.b, e4, t3), 16), (n3 < 0 || n3 > 65535) && this.a.$2("each part must be in the range of `0x0..0xFFFF`", e4), n3;
      },
      $S: 89
    }, E2.en.prototype = {
      gcw() {
        var e4, t3, n3, r3, i3 = this, a3 = i3.w;
        return a3 === A2 && (e4 = i3.a, t3 = e4.length === 0 ? "" : e4 + ":", n3 = i3.c, r3 = n3 == null, !r3 || e4 === "file" ? (e4 = t3 + "//", t3 = i3.b, t3.length !== 0 && (e4 = e4 + t3 + "@"), r3 || (e4 += n3), t3 = i3.d, t3 != null && (e4 = e4 + ":" + E2.b(t3))) : e4 = t3, e4 += i3.e, t3 = i3.f, t3 != null && (e4 = e4 + "?" + t3), t3 = i3.r, t3 != null && (e4 = e4 + "#" + t3), a3 !== A2 && E2.nU("_text"), a3 = i3.w = (e4.charCodeAt(0), e4)), a3;
      },
      gE(e4) {
        var t3, n3 = this, r3 = n3.y;
        return r3 === A2 && (t3 = O2.a.gE(n3.gcw()), n3.y !== A2 && E2.nU("hashCode"), n3.y = t3, r3 = t3), r3;
      },
      gd2() {
        return this.b;
      },
      gbQ() {
        var e4 = this.c;
        return e4 == null ? "" : O2.a.Y(e4, "[") ? O2.a.u(e4, 1, e4.length - 1) : e4;
      },
      gbZ() {
        return this.d ?? E2.pm(this.a);
      },
      gcY() {
        return this.f ?? "";
      },
      gcI() {
        return this.r ?? "";
      },
      gcK() {
        return this.a.length !== 0;
      },
      gbN() {
        return this.c != null;
      },
      gbP() {
        return this.f != null;
      },
      gbO() {
        return this.r != null;
      },
      gcJ() {
        return O2.a.Y(this.e, "/");
      },
      k(e4) {
        return this.gcw();
      },
      O(e4, t3) {
        var n3, r3, i3 = this;
        return t3 == null ? false : i3 === t3 || (N2.n.b(t3) && i3.a === t3.gc8() && i3.c != null === t3.gbN() && i3.b === t3.gd2() && i3.gbQ() === t3.gbQ() && i3.gbZ() === t3.gbZ() && i3.e === t3.gcV() ? (n3 = i3.f, r3 = n3 == null, !r3 === t3.gbP() ? (r3 && (n3 = ""), n3 === t3.gcY() ? (n3 = i3.r, r3 = n3 == null, !r3 === t3.gbO() ? (r3 && (n3 = ""), n3 = n3 === t3.gcI()) : n3 = false) : n3 = false) : n3 = false) : n3 = false, n3);
      },
      $iaY: 1,
      gc8() {
        return this.a;
      },
      gcV() {
        return this.e;
      }
    }, E2.lv.prototype = {
      gbo(e4) {
        var t3, n3, r3, i3, a3 = this, o3 = null, s3 = a3.c;
        return s3 ??= (s3 = a3.a, t3 = a3.b[0] + 1, n3 = O2.a.bg(s3, "?", t3), r3 = s3.length, n3 >= 0 ? (i3 = E2.eo(s3, n3 + 1, r3, O2.D, false, false), r3 = n3) : i3 = o3, a3.c = new E2.fH("data", "", o3, o3, E2.eo(s3, t3, r3, O2.ax, false, false), i3, o3)), s3;
      },
      gbV() {
        var e4 = this.b, t3 = e4[0] + 1, n3 = e4[1];
        return t3 === n3 ? "text/plain" : E2.vY(this.a, t3, n3, O2.ac, false);
      },
      cD() {
        var e4, t3, n3, r3, i3, a3, o3, s3, c3 = this.a, l3 = this.b, u3 = O2.d.gaV(l3) + 1;
        if ((l3.length & 1) == 1) return O2.b8.e0(c3, u3);
        for (l3 = c3.length, e4 = l3 - u3, t3 = u3; t3 < l3; ++t3) O2.a.B(c3, t3) === 37 && (t3 += 2, e4 -= 2);
        if (n3 = new Uint8Array(e4), e4 === l3) return O2.j.a5(n3, 0, e4, new E2.c8(c3), u3), n3;
        for (t3 = u3, r3 = 0; t3 < l3; ++t3) {
          if (i3 = O2.a.B(c3, t3), i3 !== 37) a3 = r3 + 1, n3[r3] = i3;
          else {
            if (o3 = t3 + 2, o3 < l3 && (s3 = E2.pW(c3, t3 + 1), s3 >= 0)) {
              a3 = r3 + 1, n3[r3] = s3, t3 = o3, r3 = a3;
              continue;
            }
            throw E2.d(E2.R("Invalid percent escape", c3, t3));
          }
          r3 = a3;
        }
        return n3;
      },
      k(e4) {
        var t3 = this.a;
        return this.b[0] === -1 ? "data:" + t3 : t3;
      }
    }, E2.mB.prototype = {
      $2(e4, t3) {
        var n3 = this.a[e4];
        return O2.j.e5(n3, 0, 96, t3), n3;
      },
      $S: 96
    }, E2.mC.prototype = {
      $3(e4, t3, n3) {
        var r3, i3;
        for (r3 = t3.length, i3 = 0; i3 < r3; ++i3) e4[O2.a.J(t3, i3) ^ 96] = n3;
      },
      $S: 17
    }, E2.mD.prototype = {
      $3(e4, t3, n3) {
        var r3, i3;
        for (r3 = O2.a.J(t3, 0), i3 = O2.a.J(t3, 1); r3 <= i3; ++r3) e4[(r3 ^ 96) >>> 0] = n3;
      },
      $S: 17
    }, E2.fP.prototype = {
      gcK() {
        return this.b > 0;
      },
      gbN() {
        return this.c > 0;
      },
      gbP() {
        return this.f < this.r;
      },
      gbO() {
        return this.r < this.a.length;
      },
      gcJ() {
        return O2.a.U(this.a, "/", this.e);
      },
      gc8() {
        return this.w ??= this.dr();
      },
      dr() {
        var e4, t3 = this, n3 = t3.b;
        return n3 <= 0 ? "" : (e4 = n3 === 4, e4 && O2.a.Y(t3.a, "http") ? "http" : n3 === 5 && O2.a.Y(t3.a, "https") ? "https" : e4 && O2.a.Y(t3.a, "file") ? "file" : n3 === 7 && O2.a.Y(t3.a, "package") ? "package" : O2.a.u(t3.a, 0, n3));
      },
      gd2() {
        var e4 = this.c, t3 = this.b + 3;
        return e4 > t3 ? O2.a.u(this.a, t3, e4 - 1) : "";
      },
      gbQ() {
        var e4 = this.c;
        return e4 > 0 ? O2.a.u(this.a, e4, this.d) : "";
      },
      gbZ() {
        var e4, t3 = this;
        return t3.c > 0 && t3.d + 1 < t3.e ? E2.cM(O2.a.u(t3.a, t3.d + 1, t3.e), null) : (e4 = t3.b, e4 === 4 && O2.a.Y(t3.a, "http") ? 80 : e4 === 5 && O2.a.Y(t3.a, "https") ? 443 : 0);
      },
      gcV() {
        return O2.a.u(this.a, this.e, this.f);
      },
      gcY() {
        var e4 = this.f, t3 = this.r;
        return e4 < t3 ? O2.a.u(this.a, e4 + 1, t3) : "";
      },
      gcI() {
        var e4 = this.r, t3 = this.a;
        return e4 < t3.length ? O2.a.bu(t3, e4 + 1) : "";
      },
      gE(e4) {
        return this.x ??= O2.a.gE(this.a);
      },
      O(e4, t3) {
        return t3 == null ? false : this === t3 || N2.n.b(t3) && this.a === t3.k(0);
      },
      k(e4) {
        return this.a;
      },
      $iaY: 1
    }, E2.fH.prototype = {}, E2.mz.prototype = {
      $1(e4) {
        var t3, n3, r3, i3 = this.a;
        if (i3.v(e4)) return i3.i(0, e4);
        if (N2.I.b(e4)) {
          for (t3 = {}, i3.m(0, e4, t3), i3 = e4.gN(), i3 = i3.gH(i3); i3.q(); ) n3 = i3.gt(), t3[n3] = this.$1(e4.i(0, n3));
          return t3;
        }
        return N2.j.b(e4) ? (r3 = [], i3.m(0, e4, r3), O2.d.D(r3, D2.bt(e4, this, N2.z)), r3) : e4;
      },
      $S: 123
    }, E2.a4.prototype = {
      gco() {
        var e4, t3 = this.y;
        return t3 === 5121 || t3 === 5120 ? (e4 = this.Q, e4 = e4 === "MAT2" || e4 === "MAT3") : e4 = false, t3 = e4 ? true : (t3 === 5123 || t3 === 5122) && this.Q === "MAT3", t3;
      },
      gac() {
        return O2.m.i(0, this.Q) ?? 0;
      },
      gad() {
        var e4 = this, t3 = e4.y;
        return t3 === 5121 || t3 === 5120 ? (t3 = e4.Q, t3 === "MAT2" ? 6 : t3 === "MAT3" ? 11 : e4.gac()) : t3 === 5123 || t3 === 5122 ? e4.Q === "MAT3" ? 22 : 2 * e4.gac() : 4 * e4.gac();
      },
      gap() {
        var e4 = this, t3 = e4.cx;
        return t3 === 0 ? (t3 = e4.y, t3 === 5121 || t3 === 5120 ? (t3 = e4.Q, t3 === "MAT2" ? 8 : t3 === "MAT3" ? 12 : e4.gac()) : t3 === 5123 || t3 === 5122 ? e4.Q === "MAT3" ? 24 : 2 * e4.gac() : 4 * e4.gac()) : t3;
      },
      gaS() {
        return this.gap() * (this.z - 1) + this.gad();
      },
      p(e4, t3) {
        var n3, r3, i3, a3 = this, o3 = "bufferView", s3 = e4.y, c3 = a3.w, l3 = a3.CW = s3.i(0, c3), u3 = l3 == null;
        if (!u3 && l3.z !== -1 && (a3.cx = l3.z), a3.y !== -1 && a3.z !== -1 && a3.Q != null && (c3 !== -1 && (u3 ? t3.l(A2.Q(), E2.a([c3], N2.M), o3) : (l3.a$ = true, l3 = l3.z, l3 !== -1 && l3 < a3.gad() && t3.F(A2.qL(), E2.a([a3.CW.z, a3.gad()], N2.M)), E2.bu(a3.x, a3.ch, a3.gaS(), a3.CW, c3, t3))), c3 = a3.ay, c3 != null)) {
          if (l3 = c3.d, u3 = l3 === -1, u3) return;
          u3 = t3.c, u3.push("sparse"), n3 = a3.z, l3 > n3 && t3.l(A2.rw(), E2.a([l3, n3], N2.M), "count"), n3 = c3.f, r3 = n3.d, n3.f = s3.i(0, r3), u3.push("indices"), i3 = c3.e, c3 = i3.d, c3 !== -1 && (s3 = i3.r = s3.i(0, c3), s3 == null ? t3.l(A2.Q(), E2.a([c3], N2.M), o3) : (s3.T(O2.o, o3, t3), i3.r.z !== -1 && t3.n(A2.nj(), o3), s3 = i3.f, s3 !== -1 && E2.bu(i3.e, E2.b0(s3), E2.b0(s3) * l3, i3.r, c3, t3))), u3.pop(), u3.push("values"), r3 !== -1 && (s3 = n3.f, s3 == null ? t3.l(A2.Q(), E2.a([r3], N2.M), o3) : (s3.T(O2.o, o3, t3), n3.f.z !== -1 && t3.n(A2.nj(), o3), s3 = a3.ch, c3 = O2.m.i(0, a3.Q), c3 ??= 0, E2.bu(n3.e, s3, s3 * c3 * l3, n3.f, r3, t3))), u3.pop(), u3.pop();
        }
      },
      T(e4, t3, n3) {
        var r3;
        this.a$ = true, r3 = this.fr, r3 == null ? this.fr = e4 : r3 !== e4 && n3.l(A2.qN(), E2.a([r3, e4], N2.M), t3);
      },
      eA(e4) {
        var t3 = this.dy;
        if (t3 == null) this.dy = e4;
        else if (t3 !== e4) return false;
        return true;
      },
      ef(e4) {
        var t3, n3, r3 = this;
        return !r3.as || r3.y === 5126 ? (e4.toString, e4) : (t3 = r3.ch * 8, n3 = r3.y, n3 === 5120 || n3 === 5122 || n3 === 5124 ? Math.max(e4 / (O2.c.aI(1, t3 - 1) - 1), -1) : e4 / (O2.c.aI(1, t3) - 1));
      }
    }, E2.fC.prototype = {
      af() {
        var e4 = this;
        return E2.bS(function() {
          var t3 = 0, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3;
          return function(y3, b3) {
            for (y3 === 1 && (n3 = b3, t3 = 2); ; ) switch (t3) {
              case 0:
                if (v3 = e4.y, v3 === -1 || e4.z === -1 || e4.Q == null) {
                  t3 = 1;
                  break;
                }
                if (r3 = e4.gac(), i3 = e4.z, a3 = e4.CW, a3 != null) {
                  if (a3 = a3.as, (a3 == null ? null : a3.z) == null) {
                    t3 = 1;
                    break;
                  }
                  if (e4.gap() < e4.gad()) {
                    t3 = 1;
                    break;
                  }
                  if (a3 = e4.x, o3 = e4.ch, !E2.bu(a3, o3, e4.gaS(), e4.CW, null, null)) {
                    t3 = 1;
                    break;
                  }
                  if (s3 = e4.CW, c3 = E2.or(v3, s3.as.z.buffer, s3.x + a3, O2.c.aw(e4.gaS(), o3)), c3 == null) {
                    t3 = 1;
                    break;
                  }
                  l3 = c3.length, e4.gco() ? (a3 = O2.c.aw(e4.gap(), o3), o3 = e4.Q === "MAT2", s3 = o3 ? 8 : 12, u3 = o3 ? 2 : 3, d3 = new E2.lR(l3, c3, u3, u3, a3 - s3).$0()) : d3 = new E2.lS(c3).$3(l3, r3, O2.c.aw(e4.gap(), o3) - r3);
                } else d3 = E2.oE(i3 * r3, new E2.lT(), N2.e);
                if (a3 = e4.ay, a3 != null) {
                  if (o3 = a3.f, s3 = o3.e, s3 === -1 ? f3 = true : (f3 = o3.f, f3 == null || f3.y === -1 || f3.x === -1 ? f3 = true : (f3 = f3.as, (f3 == null ? null : f3.z) == null ? f3 = true : (f3 = a3.e, f3.f === -1 || f3.e === -1 ? f3 = true : (f3 = f3.r, f3 == null || f3.y === -1 || f3.x === -1 ? f3 = true : (f3 = f3.as, f3 = (f3 == null ? null : f3.z) == null))))), f3) {
                    t3 = 1;
                    break;
                  }
                  if (f3 = a3.d, f3 > i3) {
                    t3 = 1;
                    break;
                  }
                  if (i3 = a3.e, a3 = i3.e, p3 = i3.f, E2.bu(a3, E2.b0(p3), E2.b0(p3) * f3, i3.r, null, null) ? (m3 = e4.ch, h3 = O2.m.i(0, e4.Q), h3 ??= 0, h3 = !E2.bu(s3, m3, m3 * h3 * f3, o3.f, null, null), m3 = h3) : m3 = true, m3) {
                    t3 = 1;
                    break;
                  }
                  if (i3 = i3.r, g3 = E2.np(p3, i3.as.z.buffer, i3.x + a3, f3), o3 = o3.f, _3 = E2.or(v3, o3.as.z.buffer, o3.x + s3, f3 * r3), g3 == null || _3 == null) {
                    t3 = 1;
                    break;
                  }
                  d3 = new E2.lU(e4, g3, d3, r3, _3).$0();
                }
                return t3 = 3, E2.mf(d3);
              case 3:
              case 1:
                return E2.bO();
              case 2:
                return E2.bP(n3);
            }
          };
        }, N2.e);
      },
      bq() {
        var e4 = this;
        return E2.bS(function() {
          var t3 = 0, n3, r3, i3, a3, o3;
          return function(s3, c3) {
            for (s3 === 1 && (n3 = c3, t3 = 1); ; ) switch (t3) {
              case 0:
                a3 = e4.ch * 8, o3 = e4.y, o3 = o3 === 5120 || o3 === 5122 || o3 === 5124, r3 = N2.F, t3 = o3 ? 2 : 4;
                break;
              case 2:
                return o3 = O2.c.aI(1, a3 - 1), i3 = e4.af(), i3.toString, t3 = 5, E2.mf(E2.jQ(i3, new E2.lP(1 / (o3 - 1)), i3.$ti.h("j.E"), r3));
              case 5:
                t3 = 3;
                break;
              case 4:
                return o3 = O2.c.aI(1, a3), i3 = e4.af(), i3.toString, t3 = 6, E2.mf(E2.jQ(i3, new E2.lQ(1 / (o3 - 1)), i3.$ti.h("j.E"), r3));
              case 6:
              case 3:
                return E2.bO();
              case 1:
                return E2.bP(n3);
            }
          };
        }, N2.F);
      }
    }, E2.lR.prototype = {
      $0() {
        var e4 = this;
        return E2.bS(function() {
          var t3 = 0, n3, r3, i3, a3, o3, s3, c3, l3, u3;
          return function(d3, f3) {
            for (d3 === 1 && (n3 = f3, t3 = 1); ; ) switch (t3) {
              case 0:
                r3 = e4.a, i3 = e4.c, a3 = e4.b, o3 = e4.d, s3 = e4.e, c3 = 0, l3 = 0, u3 = 0;
              case 2:
                if (!(c3 < r3)) {
                  t3 = 3;
                  break;
                }
                return t3 = 4, a3[c3];
              case 4:
                ++c3, ++l3, l3 === i3 && (c3 += 4 - l3, ++u3, u3 === o3 && (c3 += s3, u3 = 0), l3 = 0), t3 = 2;
                break;
              case 3:
                return E2.bO();
              case 1:
                return E2.bP(n3);
            }
          };
        }, N2.e);
      },
      $S: 18
    }, E2.lS.prototype = {
      $3(e4, t3, n3) {
        return this.d4(e4, t3, n3);
      },
      d4(e4, t3, n3) {
        var r3 = this;
        return E2.bS(function() {
          var i3 = e4, a3 = t3, o3 = n3, s3 = 0, c3 = 1, l3, u3, d3, f3;
          return function(e5, t4) {
            for (e5 === 1 && (l3 = t4, s3 = c3); ; ) switch (s3) {
              case 0:
                u3 = r3.a, d3 = 0, f3 = 0;
              case 2:
                if (!(d3 < i3)) {
                  s3 = 3;
                  break;
                }
                return s3 = 4, u3[d3];
              case 4:
                ++d3, ++f3, f3 === a3 && (d3 += o3, f3 = 0), s3 = 2;
                break;
              case 3:
                return E2.bO();
              case 1:
                return E2.bP(l3);
            }
          };
        }, N2.e);
      },
      $S: 31
    }, E2.lT.prototype = {
      $1(e4) {
        return 0;
      },
      $S: 32
    }, E2.lU.prototype = {
      $0() {
        var e4 = this;
        return E2.bS(function() {
          var t3 = 0, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3;
          return function(p3, m3) {
            for (p3 === 1 && (n3 = m3, t3 = 1); ; ) switch (t3) {
              case 0:
                d3 = e4.b, f3 = d3[0], r3 = D2.aA(e4.c), i3 = e4.d, a3 = e4.a.ay, o3 = e4.e, s3 = 0, c3 = 0, l3 = 0;
              case 2:
                if (!r3.q()) {
                  t3 = 3;
                  break;
                }
                u3 = r3.gt(), c3 === i3 && (s3 === f3 && l3 !== a3.d - 1 && (++l3, f3 = d3[l3]), ++s3, c3 = 0), t3 = s3 === f3 ? 4 : 6;
                break;
              case 4:
                return t3 = 7, o3[l3 * i3 + c3];
              case 7:
                t3 = 5;
                break;
              case 6:
                return t3 = 8, u3;
              case 8:
              case 5:
                ++c3, t3 = 2;
                break;
              case 3:
                return E2.bO();
              case 1:
                return E2.bP(n3);
            }
          };
        }, N2.e);
      },
      $S: 18
    }, E2.lP.prototype = {
      $1(e4) {
        return Math.max(e4 * this.a, -1);
      },
      $S: 8
    }, E2.lQ.prototype = {
      $1(e4) {
        return e4 * this.a;
      },
      $S: 8
    }, E2.fB.prototype = {
      af() {
        var e4 = this;
        return E2.bS(function() {
          var t3 = 0, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3;
          return function(y3, b3) {
            for (y3 === 1 && (n3 = b3, t3 = 2); ; ) switch (t3) {
              case 0:
                if (v3 = e4.y, v3 === -1 || e4.z === -1 || e4.Q == null) {
                  t3 = 1;
                  break;
                }
                if (r3 = e4.gac(), i3 = e4.z, a3 = e4.CW, a3 != null) {
                  if (a3 = a3.as, (a3 == null ? null : a3.z) == null) {
                    t3 = 1;
                    break;
                  }
                  if (e4.gap() < e4.gad()) {
                    t3 = 1;
                    break;
                  }
                  if (a3 = e4.x, o3 = e4.ch, !E2.bu(a3, o3, e4.gaS(), e4.CW, null, null)) {
                    t3 = 1;
                    break;
                  }
                  if (s3 = e4.CW, c3 = E2.oq(v3, s3.as.z.buffer, s3.x + a3, O2.c.aw(e4.gaS(), o3)), c3 == null) {
                    t3 = 1;
                    break;
                  }
                  l3 = c3.length, e4.gco() ? (a3 = O2.c.aw(e4.gap(), o3), o3 = e4.Q === "MAT2", s3 = o3 ? 8 : 12, u3 = o3 ? 2 : 3, d3 = new E2.lL(l3, c3, u3, u3, a3 - s3).$0()) : d3 = new E2.lM(c3).$3(l3, r3, O2.c.aw(e4.gap(), o3) - r3);
                } else d3 = E2.oE(i3 * r3, new E2.lN(), N2.F);
                if (a3 = e4.ay, a3 != null) {
                  if (o3 = a3.f, s3 = o3.e, s3 === -1 ? f3 = true : (f3 = o3.f, f3 == null || f3.y === -1 || f3.x === -1 ? f3 = true : (f3 = f3.as, (f3 == null ? null : f3.z) == null ? f3 = true : (f3 = a3.e, f3.f === -1 || f3.e === -1 ? f3 = true : (f3 = f3.r, f3 == null || f3.y === -1 || f3.x === -1 ? f3 = true : (f3 = f3.as, f3 = (f3 == null ? null : f3.z) == null))))), f3) {
                    t3 = 1;
                    break;
                  }
                  if (f3 = a3.d, f3 > i3) {
                    t3 = 1;
                    break;
                  }
                  if (i3 = a3.e, a3 = i3.e, p3 = i3.f, E2.bu(a3, E2.b0(p3), E2.b0(p3) * f3, i3.r, null, null) ? (m3 = e4.ch, h3 = O2.m.i(0, e4.Q), h3 ??= 0, h3 = !E2.bu(s3, m3, m3 * h3 * f3, o3.f, null, null), m3 = h3) : m3 = true, m3) {
                    t3 = 1;
                    break;
                  }
                  if (i3 = i3.r, g3 = E2.np(p3, i3.as.z.buffer, i3.x + a3, f3), o3 = o3.f, _3 = E2.oq(v3, o3.as.z.buffer, o3.x + s3, f3 * r3), g3 == null || _3 == null) {
                    t3 = 1;
                    break;
                  }
                  d3 = new E2.lO(e4, g3, d3, r3, _3).$0();
                }
                return t3 = 3, E2.mf(d3);
              case 3:
              case 1:
                return E2.bO();
              case 2:
                return E2.bP(n3);
            }
          };
        }, N2.F);
      },
      bq() {
        return this.af();
      }
    }, E2.lL.prototype = {
      $0() {
        var e4 = this;
        return E2.bS(function() {
          var t3 = 0, n3, r3, i3, a3, o3, s3, c3, l3, u3;
          return function(d3, f3) {
            for (d3 === 1 && (n3 = f3, t3 = 1); ; ) switch (t3) {
              case 0:
                r3 = e4.a, i3 = e4.c, a3 = e4.b, o3 = e4.d, s3 = e4.e, c3 = 0, l3 = 0, u3 = 0;
              case 2:
                if (!(c3 < r3)) {
                  t3 = 3;
                  break;
                }
                return t3 = 4, a3[c3];
              case 4:
                ++c3, ++l3, l3 === i3 && (c3 += 4 - l3, ++u3, u3 === o3 && (c3 += s3, u3 = 0), l3 = 0), t3 = 2;
                break;
              case 3:
                return E2.bO();
              case 1:
                return E2.bP(n3);
            }
          };
        }, N2.F);
      },
      $S: 19
    }, E2.lM.prototype = {
      $3(e4, t3, n3) {
        return this.d3(e4, t3, n3);
      },
      d3(e4, t3, n3) {
        var r3 = this;
        return E2.bS(function() {
          var i3 = e4, a3 = t3, o3 = n3, s3 = 0, c3 = 1, l3, u3, d3, f3;
          return function(e5, t4) {
            for (e5 === 1 && (l3 = t4, s3 = c3); ; ) switch (s3) {
              case 0:
                u3 = r3.a, d3 = 0, f3 = 0;
              case 2:
                if (!(d3 < i3)) {
                  s3 = 3;
                  break;
                }
                return s3 = 4, u3[d3];
              case 4:
                ++d3, ++f3, f3 === a3 && (d3 += o3, f3 = 0), s3 = 2;
                break;
              case 3:
                return E2.bO();
              case 1:
                return E2.bP(l3);
            }
          };
        }, N2.F);
      },
      $S: 35
    }, E2.lN.prototype = {
      $1(e4) {
        return 0;
      },
      $S: 8
    }, E2.lO.prototype = {
      $0() {
        var e4 = this;
        return E2.bS(function() {
          var t3 = 0, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3;
          return function(p3, m3) {
            for (p3 === 1 && (n3 = m3, t3 = 1); ; ) switch (t3) {
              case 0:
                d3 = e4.b, f3 = d3[0], r3 = D2.aA(e4.c), i3 = e4.d, a3 = e4.a.ay, o3 = e4.e, s3 = 0, c3 = 0, l3 = 0;
              case 2:
                if (!r3.q()) {
                  t3 = 3;
                  break;
                }
                u3 = r3.gt(), c3 === i3 && (s3 === f3 && l3 !== a3.d - 1 && (++l3, f3 = d3[l3]), ++s3, c3 = 0), t3 = s3 === f3 ? 4 : 6;
                break;
              case 4:
                return t3 = 7, o3[l3 * i3 + c3];
              case 7:
                t3 = 5;
                break;
              case 6:
                return t3 = 8, u3;
              case 8:
              case 5:
                ++c3, t3 = 2;
                break;
              case 3:
                return E2.bO();
              case 1:
                return E2.bP(n3);
            }
          };
        }, N2.F);
      },
      $S: 19
    }, E2.bZ.prototype = { ge8() {
      var e4 = this.e, t3 = e4.r, n3 = t3 == null ? null : t3.as;
      return (n3 == null ? null : n3.z) == null ? null : E2.np(e4.f, t3.as.z.buffer, t3.x + e4.e, this.d);
    } }, E2.c_.prototype = { p(e4, t3) {
      this.r = e4.y.i(0, this.d);
    } }, E2.c0.prototype = { p(e4, t3) {
      this.f = e4.y.i(0, this.d);
    } }, E2.eY.prototype = { a0(e4, t3, n3, r3) {
      return r3.toString, r3 == 1 / 0 || r3 == -1 / 0 || isNaN(r3) ? (e4.l(A2.qa(), E2.a([t3, r3], N2.M), this.a), false) : true;
    } }, E2.f5.prototype = {
      a0(e4, t3, n3, r3) {
        var i3, a3 = this;
        return (t3 === n3 || a3.b[n3] > r3) && (a3.b[n3] = r3), r3 < a3.c[n3] && (i3 = a3.a, i3[n3] = i3[n3] + 1), true;
      },
      aF(e4) {
        var t3, n3, r3, i3, a3, o3, s3, c3, l3, u3 = this;
        for (t3 = u3.b, n3 = t3.length, r3 = u3.c, i3 = u3.a, a3 = u3.d + "/min/", o3 = N2.M, s3 = 0; s3 < n3; ++s3) D2.af(r3[s3], t3[s3]) || (c3 = a3 + s3, e4.l(A2.o_(), E2.a([r3[s3], t3[s3]], o3), c3), l3 = i3[s3], l3 > 0 && e4.l(A2.nY(), E2.a([l3, r3[s3]], o3), c3));
        return true;
      }
    }, E2.f3.prototype = {
      a0(e4, t3, n3, r3) {
        var i3, a3 = this;
        return (t3 === n3 || a3.b[n3] < r3) && (a3.b[n3] = r3), r3 > a3.c[n3] && (i3 = a3.a, i3[n3] = i3[n3] + 1), true;
      },
      aF(e4) {
        var t3, n3, r3, i3, a3, o3, s3, c3, l3, u3 = this;
        for (t3 = u3.b, n3 = t3.length, r3 = u3.c, i3 = u3.a, a3 = u3.d + "/max/", o3 = N2.M, s3 = 0; s3 < n3; ++s3) D2.af(r3[s3], t3[s3]) || (c3 = a3 + s3, e4.l(A2.nZ(), E2.a([r3[s3], t3[s3]], o3), c3), l3 = i3[s3], l3 > 0 && e4.l(A2.nX(), E2.a([l3, r3[s3]], o3), c3));
        return true;
      }
    }, E2.f6.prototype = {
      a0(e4, t3, n3, r3) {
        var i3, a3 = this;
        return (t3 === n3 || a3.b[n3] > r3) && (a3.b[n3] = r3), r3 < a3.c[n3] && (i3 = a3.a, i3[n3] = i3[n3] + 1), true;
      },
      aF(e4) {
        var t3, n3, r3, i3, a3, o3, s3, c3, l3, u3 = this;
        for (t3 = u3.b, n3 = t3.length, r3 = u3.c, i3 = u3.a, a3 = u3.d + "/min/", o3 = N2.M, s3 = 0; s3 < n3; ++s3) D2.af(r3[s3], t3[s3]) || (c3 = a3 + s3, e4.l(A2.o_(), E2.a([r3[s3], t3[s3]], o3), c3), l3 = i3[s3], l3 > 0 && e4.l(A2.nY(), E2.a([l3, r3[s3]], o3), c3));
        return true;
      }
    }, E2.f4.prototype = {
      a0(e4, t3, n3, r3) {
        var i3, a3 = this;
        return (t3 === n3 || a3.b[n3] < r3) && (a3.b[n3] = r3), r3 > a3.c[n3] && (i3 = a3.a, i3[n3] = i3[n3] + 1), true;
      },
      aF(e4) {
        var t3, n3, r3, i3, a3, o3, s3, c3, l3, u3 = this;
        for (t3 = u3.b, n3 = t3.length, r3 = u3.c, i3 = u3.a, a3 = u3.d + "/max/", o3 = N2.M, s3 = 0; s3 < n3; ++s3) D2.af(r3[s3], t3[s3]) || (c3 = a3 + s3, e4.l(A2.nZ(), E2.a([r3[s3], t3[s3]], o3), c3), l3 = i3[s3], l3 > 0 && e4.l(A2.nX(), E2.a([l3, r3[s3]], o3), c3));
        return true;
      }
    }, E2.bv.prototype = { p(e4, t3) {
      var n3, r3, i3, a3, o3, s3 = this, c3 = "samplers", l3 = s3.x;
      if (l3 != null && s3.w != null) {
        for (n3 = t3.c, n3.push(c3), l3.a4(new E2.h5(t3, e4)), n3.pop(), n3.push("channels"), s3.w.a4(new E2.h6(s3, t3, e4)), n3.pop(), n3.push(c3), r3 = l3.b, l3 = l3.a, i3 = l3.length, a3 = 0; a3 < r3; ++a3) o3 = a3 >= i3, (o3 ? null : l3[a3]).a$ || t3.Z(A2.h1(), a3);
        n3.pop();
      }
    } }, E2.h5.prototype = {
      $2(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3 = "input", l3 = "output", u3 = this.a, d3 = u3.c;
        d3.push(O2.c.k(e4)), n3 = this.b.f, r3 = t3.d, t3.r = n3.i(0, r3), i3 = t3.f, t3.w = n3.i(0, i3), r3 !== -1 && (n3 = t3.r, n3 == null ? u3.l(A2.Q(), E2.a([r3], N2.M), c3) : (n3.T(O2.b1, c3, u3), a3 = t3.r.CW, a3 != null && (a3.T(O2.o, c3, u3), n3 = a3.z, n3 !== -1 && u3.n(A2.o4(), c3)), d3.push(c3), o3 = E2.dl(t3.r), o3.O(0, O2.G) ? u3.a_(t3.r, new E2.eE(u3.S())) : u3.F(A2.qR(), E2.a([o3, E2.a([O2.G], N2.p)], N2.M)), n3 = t3.r, (n3.ax == null || n3.at == null) && u3.L(A2.qT()), t3.e === "CUBICSPLINE" && t3.r.z < 2 && u3.F(A2.qS(), E2.a([
          "CUBICSPLINE",
          2,
          t3.r.z
        ], N2.M)), d3.pop())), i3 !== -1 && (n3 = t3.w, n3 == null ? u3.l(A2.Q(), E2.a([i3], N2.M), l3) : (n3.T(O2.b2, l3, u3), s3 = t3.w.CW, s3 != null && (s3.T(O2.o, l3, u3), n3 = s3.z, n3 !== -1 && u3.n(A2.o4(), l3)), n3 = t3.w.CW, n3?.T(O2.o, l3, u3), t3.w.eA(t3.e === "CUBICSPLINE"))), d3.pop();
      },
      $S: 36
    }, E2.h6.prototype = {
      $2(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3 = null, _3 = "sampler", v3 = this.b, y3 = v3.c;
        if (y3.push(O2.c.k(e4)), n3 = this.a, r3 = t3.d, t3.f = n3.x.i(0, r3), i3 = t3.e, a3 = i3 != null, a3 && (o3 = i3.d, i3.f = this.c.ax.i(0, o3), o3 !== -1)) {
          if (y3.push("target"), s3 = i3.f, s3 == null) v3.l(A2.Q(), E2.a([o3], N2.M), "node");
          else switch (s3.a$ = true, i3.e) {
            case "translation":
            case "rotation":
            case "scale":
              s3.z != null && v3.L(A2.qO()), i3.f.dx != null && v3.n(A2.rx(), "path");
              break;
            case "weights":
              o3 = s3.cy, o3 = o3 == null ? g3 : o3.w, o3 = o3 == null ? g3 : o3.gcH(o3), (o3 == null ? g3 : o3.cx) ?? v3.L(A2.qP());
          }
          y3.pop();
        }
        if (r3 !== -1) {
          for (o3 = t3.f, o3 == null ? v3.l(A2.Q(), E2.a([r3], N2.M), _3) : (o3.a$ = true, a3 && o3.w != null && (r3 = i3.e, r3 === "rotation" && (c3 = o3.w, c3.gac() === 4 && (y3.push(_3), o3 = v3.S(), s3 = c3.y === 5126 ? g3 : c3.gbX(), v3.a_(c3, new E2.dK(t3.f.e === "CUBICSPLINE", s3, o3, N2.ed)), y3.pop()), o3 = t3.f, o3.w.toString), l3 = E2.dl(o3.w), u3 = O2.dt.i(0, r3), (u3 == null ? g3 : O2.d.G(u3, l3)) === false && v3.l(A2.qV(), E2.a([
            l3,
            u3,
            r3
          ], N2.M), _3), o3 = t3.f, s3 = o3.r, s3 != null && s3.z !== -1 && o3.w.z !== -1 && o3.e != null && (d3 = s3.z, o3.e === "CUBICSPLINE" && (d3 *= 3), r3 === "weights" ? (r3 = i3.f, r3 = r3 == null ? g3 : r3.cy, r3 = r3 == null ? g3 : r3.w, r3 = r3 == null ? g3 : r3.gcH(r3), r3 = r3 == null ? g3 : r3.cx, f3 = r3 == null ? g3 : r3.length, d3 *= f3 ?? 0) : O2.d.G(O2.R, r3) || (d3 = 0), d3 !== 0 && d3 !== t3.f.w.z && v3.l(A2.qU(), E2.a([d3, t3.f.w.z], N2.M), _3)))), p3 = e4 + 1, n3 = n3.w, r3 = n3.b, o3 = N2.M, n3 = n3.a, s3 = n3.length; p3 < r3; ++p3) a3 ? (m3 = p3 >= s3, h3 = (m3 ? g3 : n3[p3]).e, h3 == null ? m3 = false : (m3 = i3.d, m3 = m3 !== -1 && m3 === h3.d && i3.e == h3.e)) : m3 = false, m3 && v3.l(A2.qQ(), E2.a([p3], o3), "target");
          y3.pop();
        }
      },
      $S: 37
    }, E2.b2.prototype = {}, E2.bw.prototype = {}, E2.b3.prototype = {}, E2.eE.prototype = { a0(e4, t3, n3, r3) {
      var i3 = this;
      return r3 < 0 ? e4.l(A2.q4(), E2.a([t3, r3], N2.M), i3.b) : (t3 !== 0 && r3 <= i3.a && e4.l(A2.q5(), E2.a([
        t3,
        r3,
        i3.a
      ], N2.M), i3.b), i3.a = r3), true;
    } }, E2.dK.prototype = { a0(e4, t3, n3, r3) {
      var i3, a3, o3 = this;
      return (!o3.a || (o3.d & 4) == 4) && (i3 = o3.b, a3 = i3 == null ? r3 : i3.$1(r3), i3 = o3.e + a3 * a3, o3.e = i3, n3 === 3 && (Math.abs(Math.sqrt(i3) - 1) > 769e-5 && e4.l(A2.q6(), E2.a([
        t3 - 3,
        t3,
        Math.sqrt(o3.e)
      ], N2.M), o3.c), o3.e = 0)), ++o3.d === 12 && (o3.d = 0), true;
    } }, E2.bx.prototype = {
      gbj() {
        var e4, t3 = this.f;
        return t3 == null ? e4 = true : (e4 = A2.br().b, e4 = !e4.test(t3)), e4 ? 0 : E2.cM(A2.br().aT(t3).b[1], null);
      },
      gbW() {
        var e4, t3 = this.f;
        return t3 == null ? e4 = true : (e4 = A2.br().b, e4 = !e4.test(t3)), e4 ? 0 : E2.cM(A2.br().aT(t3).b[2], null);
      },
      gcS() {
        var e4, t3 = this.r;
        return t3 == null ? e4 = true : (e4 = A2.br().b, e4 = !e4.test(t3)), e4 ? 2 : E2.cM(A2.br().aT(t3).b[1], null);
      },
      ged() {
        var e4, t3 = this.r;
        return t3 == null ? e4 = true : (e4 = A2.br().b, e4 = !e4.test(t3)), e4 ? 0 : E2.cM(A2.br().aT(t3).b[2], null);
      }
    }, E2.aT.prototype = {}, E2.by.prototype = {
      T(e4, t3, n3) {
        var r3;
        this.a$ = true, r3 = this.at, r3 == null ? (this.at = e4, (e4 === O2.L || e4 === O2.A) && n3.n(A2.qX(), t3)) : r3 !== e4 && n3.l(A2.qY(), E2.a([r3, e4], N2.M), t3);
      },
      p(e4, t3) {
        var n3, r3 = this, i3 = r3.w, a3 = r3.as = e4.x.i(0, i3);
        r3.ax = r3.z, n3 = r3.Q, n3 === 34962 ? r3.at = O2.A : n3 === 34963 && (r3.at = O2.L), i3 !== -1 && (a3 == null ? t3.l(A2.Q(), E2.a([i3], N2.M), "buffer") : (a3.a$ = true, a3 = a3.x, a3 !== -1 && (n3 = r3.x, n3 >= a3 ? t3.l(A2.o5(), E2.a([i3, a3], N2.M), "byteOffset") : n3 + r3.y > a3 && t3.l(A2.o5(), E2.a([i3, a3], N2.M), "byteLength"))));
      }
    }, E2.bz.prototype = {}, E2.c3.prototype = {}, E2.c4.prototype = {}, E2.du.prototype = { eC(e4) {
      var t3, n3, r3, i3, a3;
      for (new E2.iz(this, e4).$1(this.cy), t3 = e4.r, n3 = t3.length, r3 = e4.c, i3 = 0; i3 < t3.length; t3.length === n3 || (0, E2.cN)(t3), ++i3) a3 = t3[i3], O2.d.P(r3), O2.d.D(r3, a3.b), a3.a.c4(this, e4);
      O2.d.P(r3);
    } }, E2.iw.prototype = {
      $0() {
        return O2.d.P(this.a.c);
      },
      $S: 1
    }, E2.ix.prototype = {
      $1$2(e4, t3, n3) {
        var r3, i3, a3, o3, s3, c3, l3, u3, d3, f3 = this, p3 = f3.a;
        if (!p3.v(e4)) return p3 = D2.b8(0, n3.h("0*")), new E2.F(p3, 0, e4, n3.h("F<0*>"));
        if (f3.b.$0(), r3 = p3.i(0, e4), N2.m.b(r3)) {
          if (p3 = D2.V(r3), i3 = f3.c, a3 = n3.h("0*"), p3.ga8(r3)) {
            for (o3 = p3.gj(r3), a3 = E2.U(o3, null, false, a3), s3 = i3.c, s3.push(e4), c3 = N2.M, l3 = N2.t, u3 = 0; u3 < p3.gj(r3); ++u3) d3 = p3.i(r3, u3), l3.b(d3) ? (s3.push(O2.c.k(u3)), a3[u3] = t3.$2(d3, i3), s3.pop()) : i3.ao(A2.a2(), E2.a([d3, "object"], c3), u3);
            return new E2.F(a3, o3, e4, n3.h("F<0*>"));
          }
          return i3.n(A2.bX(), e4), p3 = D2.b8(0, a3), new E2.F(p3, 0, e4, n3.h("F<0*>"));
        }
        return f3.c.l(A2.a2(), E2.a([r3, "array"], N2.M), e4), p3 = D2.b8(0, n3.h("0*")), new E2.F(p3, 0, e4, n3.h("F<0*>"));
      },
      $2(e4, t3) {
        return this.$1$2(e4, t3, N2.z);
      },
      $S: 38
    }, E2.iy.prototype = {
      $1$3$req(e4, t3, n3, r3) {
        var i3, a3;
        return this.a.$0(), i3 = this.c, a3 = E2.nP(this.b, e4, i3, true), a3 == null ? null : (i3.c.push(e4), t3.$2(a3, i3));
      },
      $2(e4, t3) {
        return this.$1$3$req(e4, t3, false, N2.z);
      },
      $1$2(e4, t3, n3) {
        return this.$1$3$req(e4, t3, false, n3);
      },
      $S: 39
    }, E2.iu.prototype = {
      $2(e4, t3) {
        var n3, r3, i3, a3, o3, s3 = this.a, c3 = s3.c;
        if (c3.push(e4.c), n3 = this.b, e4.a4(new E2.iv(s3, n3)), r3 = s3.f.i(0, t3), r3 != null) {
          for (i3 = D2.cX(c3.slice(0), E2.a_(c3).c), a3 = D2.aA(r3); a3.q(); ) o3 = a3.gt(), O2.d.P(c3), O2.d.D(c3, o3.b), o3.a.p(n3, s3);
          O2.d.P(c3), O2.d.D(c3, i3);
        }
        c3.pop();
      },
      $S: 40
    }, E2.iv.prototype = {
      $2(e4, t3) {
        var n3 = this.a, r3 = n3.c;
        r3.push(O2.c.k(e4)), t3.p(this.b, n3), r3.pop();
      },
      $S: 41
    }, E2.is.prototype = {
      $2(e4, t3) {
        var n3, r3;
        N2.c.b(t3) && (n3 = this.a, r3 = n3.c, r3.push(e4), t3.p(this.b, n3), r3.pop());
      },
      $S: 3
    }, E2.it.prototype = {
      $2(e4, t3) {
        var n3, r3, i3, a3 = this;
        if (!t3.dy && t3.cx == null && t3.cy == null && t3.CW == null && t3.a.a === 0 && t3.b == null && a3.a.Z(A2.rY(), e4), t3.db != null) for (n3 = a3.b, n3.P(0), r3 = t3; r3.db != null; ) if (n3.C(0, r3)) r3 = r3.db;
        else {
          r3 === t3 && a3.a.Z(A2.rc(), e4);
          break;
        }
        t3.dx != null && (t3.db != null && a3.a.Z(A2.t2(), e4), n3 = t3.z, n3 == null || n3.cP() ? (n3 = t3.as, n3 == null ? n3 = true : (n3 = n3.a, n3 = n3[0] === 0 && n3[1] === 0 && n3[2] === 0), n3 ? (n3 = t3.at, n3 == null ? n3 = true : (n3 = n3.a, n3 = n3[0] === 0 && n3[1] === 0 && n3[2] === 0 && n3[3] === 1), n3 ? (n3 = t3.ax, n3 == null ? n3 = true : (n3 = n3.a, n3 = n3[0] === 1 && n3[1] === 1 && n3[2] === 1)) : n3 = false) : n3 = false) : n3 = false, n3 || a3.a.Z(A2.t1(), e4), i3 = t3.dx.at.bf(0, new E2.iq(), new E2.ir()), i3 == null ? n3 = false : (n3 = i3.ch, n3 = !t3.ch.be(0, n3.gcC(n3))), n3 && a3.a.Z(A2.t0(), e4));
      },
      $S: 43
    }, E2.iq.prototype = {
      $1(e4) {
        return e4.db == null;
      },
      $S: 44
    }, E2.ir.prototype = {
      $0() {
        return null;
      },
      $S: 2
    }, E2.iz.prototype = {
      $1(e4) {
        var t3 = this.b, n3 = t3.c;
        O2.d.P(n3), n3.push(e4.c), e4.a4(new E2.iA(this.a, t3)), n3.pop();
      },
      $S: 45
    }, E2.iA.prototype = {
      $2(e4, t3) {
        var n3 = this.b, r3 = n3.c;
        r3.push(O2.c.k(e4)), t3.c4(this.a, n3), r3.pop();
      },
      $S: 46
    }, E2.m.prototype = {}, E2.k.prototype = {
      p(e4, t3) {
      },
      $in: 1
    }, E2.eR.prototype = {}, E2.fL.prototype = {}, E2.aU.prototype = {
      p(e4, t3) {
        var n3, r3 = "bufferView", i3 = this.w;
        i3 !== -1 && (n3 = this.Q = e4.y.i(0, i3), n3 == null ? t3.l(A2.Q(), E2.a([i3], N2.M), r3) : (n3.T(O2.b6, r3, t3), this.Q.z !== -1 && t3.n(A2.qZ(), r3)));
      },
      ez() {
        var e4 = this.Q, t3 = e4 == null ? null : e4.as;
        if ((t3 == null ? null : t3.z) != null) try {
          this.z = E2.nw(e4.as.z.buffer, e4.x, e4.y);
        } catch (e5) {
          if (!(E2.M(e5) instanceof E2.at)) throw e5;
        }
      }
    }, E2.ai.prototype = { p(e4, t3) {
      var n3 = this, r3 = new E2.jR(t3, e4);
      r3.$2(n3.w, "pbrMetallicRoughness"), r3.$2(n3.x, "normalTexture"), r3.$2(n3.y, "occlusionTexture"), r3.$2(n3.z, "emissiveTexture");
    } }, E2.jR.prototype = {
      $2(e4, t3) {
        var n3, r3;
        e4 != null && (n3 = this.a, r3 = n3.c, r3.push(t3), e4.p(this.b, n3), r3.pop());
      },
      $S: 28
    }, E2.cB.prototype = { p(e4, t3) {
      var n3, r3 = this.e;
      r3 != null && (n3 = t3.c, n3.push("baseColorTexture"), r3.p(e4, t3), n3.pop()), r3 = this.w, r3 != null && (n3 = t3.c, n3.push("metallicRoughnessTexture"), r3.p(e4, t3), n3.pop());
    } }, E2.cA.prototype = {}, E2.cz.prototype = { p(e4, t3) {
      var n3, r3;
      for (this.dd(e4, t3), n3 = t3.e, r3 = this; r3 != null; ) if (r3 = n3.i(0, r3), r3 instanceof E2.ai) {
        r3.ay = true;
        break;
      }
    } }, E2.bj.prototype = { p(e4, t3) {
      var n3, r3 = this, i3 = r3.d, a3 = r3.f = e4.cy.i(0, i3);
      for (i3 !== -1 && (a3 == null ? t3.l(A2.Q(), E2.a([i3], N2.M), "index") : a3.a$ = true), i3 = t3.e, n3 = r3; n3 != null; ) if (n3 = i3.i(0, n3), n3 instanceof E2.ai) {
        n3.ch.m(0, t3.S(), r3.e);
        break;
      }
    } }, E2.c2.prototype = { k(e4) {
      return this.a;
    } }, E2.c1.prototype = { k(e4) {
      return this.a;
    } }, E2.y.prototype = {
      k(e4) {
        var t3 = O2.ay.i(0, this.b), n3 = this.c ? " normalized" : "";
        return "{" + E2.b(this.a) + ", " + E2.b(t3) + n3 + "}";
      },
      O(e4, t3) {
        return t3 != null && t3 instanceof E2.y && t3.a == this.a && t3.b === this.b && t3.c === this.c;
      },
      gE(e4) {
        return E2.px(E2.fW(E2.fW(E2.fW(0, D2.bY(this.a)), O2.c.gE(this.b)), O2.c0.gE(this.c)));
      }
    }, E2.aV.prototype = { p(e4, t3) {
      var n3, r3 = t3.c;
      r3.push("primitives"), n3 = this.w, n3?.a4(new E2.k1(t3, e4)), r3.pop();
    } }, E2.k1.prototype = {
      $2(e4, t3) {
        var n3, r3 = this.a, i3 = r3.c;
        i3.push(O2.c.k(e4)), i3.push("extensions"), n3 = this.b, t3.a.M(0, new E2.k0(r3, n3)), i3.pop(), t3.p(n3, r3), i3.pop();
      },
      $S: 20
    }, E2.k0.prototype = {
      $2(e4, t3) {
        var n3, r3;
        N2.c.b(t3) && (n3 = this.a, r3 = n3.c, r3.push(e4), t3.p(this.b, n3), r3.pop());
      },
      $S: 3
    }, E2.aE.prototype = {
      gex() {
        switch (this.r) {
          case 4:
            return O2.c.bJ(this.ch, 3);
          case 5:
          case 6:
            var e4 = this.ch;
            return e4 > 2 ? e4 - 2 : 0;
          default:
            return 0;
        }
      },
      p(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3 = this, g3 = "attributes", _3 = "indices", v3 = "material", y3 = h3.d;
        for (y3 != null && (n3 = t3.c, n3.push(g3), y3.M(0, new E2.jX(h3, e4, t3)), n3.pop()), y3 = h3.e, y3 !== -1 && (n3 = h3.cy = e4.f.i(0, y3), n3 == null ? t3.l(A2.Q(), E2.a([y3], N2.M), _3) : (h3.ch = n3.z, n3.T(O2.b4, _3, t3), y3 = h3.cy.CW, y3?.T(O2.L, _3, t3), y3 = t3.c, y3.push(_3), n3 = h3.cy.CW, n3 != null && n3.z !== -1 && t3.L(A2.r7()), r3 = E2.dl(h3.cy), O2.d.G(O2.aq, r3) ? (n3 = h3.CW, i3 = n3 === -1 ? -1 : n3 - 1, n3 = h3.r, a3 = n3 === -1 ? -1 : O2.c.aI(1, n3), a3 !== 0 && i3 >= -1 && (n3 = h3.cy, o3 = t3.S(), s3 = O2.c.bJ(h3.ch, 3), c3 = h3.cy.y, l3 = /* @__PURE__ */ new Uint32Array(3), t3.a_(n3, new E2.eU(i3, s3, E2.q1(c3), (a3 & 16) == 16, l3, o3)))) : t3.F(A2.r6(), E2.a([r3, O2.aq], N2.M)), y3.pop())), y3 = h3.ch, y3 === -1 ? y3 = false : (n3 = h3.r, y3 = n3 !== 1 || y3 % 2 == 0 ? (n3 === 2 || n3 === 3) && y3 < 2 ? true : n3 !== 4 || y3 % 3 == 0 ? (n3 === 5 || n3 === 6) && y3 < 3 : true : true), y3 && t3.F(A2.r5(), E2.a([h3.ch, O2.cz[h3.r]], N2.M)), y3 = h3.f, n3 = h3.db = e4.as.i(0, y3), y3 !== -1 && (n3 == null ? t3.l(A2.Q(), E2.a([y3], N2.M), v3) : (n3.a$ = true, !(h3.y && h3.z) && n3.ay && t3.n(n3.x == null ? A2.ra() : A2.r4(), v3), h3.db.ch.M(0, new E2.jY(h3, t3)))), h3.z ? (y3 = h3.db, y3 = y3 == null || !y3.ay) : y3 = false, y3 && (y3 = t3.c, y3.push(g3), t3.n(A2.rn(), "TANGENT"), y3.pop()), y3 = h3.dx, n3 = O2.d.gH(y3), y3 = new E2.cF(n3, new E2.jZ(), E2.a_(y3).h("cF<1>")), o3 = t3.c; y3.q(); ) s3 = n3.gt(), o3.push(g3), t3.n(A2.h1(), "TEXCOORD_" + E2.b(s3)), o3.pop();
        if (y3 = h3.w, y3 != null) {
          for (n3 = t3.c, n3.push("targets"), u3 = y3.length, d3 = D2.oF(u3, N2.gj), o3 = N2.X, s3 = N2.W, f3 = 0; f3 < u3; ++f3) d3[f3] = E2.a9(o3, s3);
          for (h3.cx = d3, p3 = 0; p3 < y3.length; ++p3) m3 = y3[p3], n3.push(O2.c.k(p3)), m3.M(0, new E2.k_(h3, e4, t3, p3)), n3.pop();
          n3.pop();
        }
      },
      cg(e4, t3, n3) {
        var r3, i3 = e4.CW;
        i3.z === -1 && (r3 = n3.w.c_(i3, new E2.jW()), r3.C(0, e4) && r3.gj(r3) > 1 && n3.n(A2.r2(), t3));
      }
    }, E2.jV.prototype = {
      $1(e4) {
        var t3, n3, r3, i3, a3;
        if (e4.gj(e4) === 0 ? t3 = true : (t3 = e4.a, t3 = t3.length > 1 && O2.a.J(t3, 0) === 48), t3) return -1;
        for (t3 = e4.a, n3 = t3.length, r3 = 0, i3 = 0; i3 < n3; ++i3) {
          if (a3 = O2.a.J(t3, i3) - 48, a3 > 9 || a3 < 0) return -1;
          r3 = 10 * r3 + a3;
        }
        return r3;
      },
      $S: 49
    }, E2.jS.prototype = {
      $1(e4) {
        var t3, n3, r3, i3, a3, o3, s3, c3, l3 = this;
        if (e4.length === 0 || O2.a.J(e4, 0) !== 95) switch (e4) {
          case "POSITION":
            l3.a.c = true;
            break;
          case "NORMAL":
            l3.a.b = true;
            break;
          case "TANGENT":
            l3.a.a = true;
            break;
          default:
            if (t3 = e4.split("_"), n3 = t3[0], !O2.d.G(O2.cl, n3) || t3.length !== 2) {
              l3.b.n(A2.nk(), e4);
              break;
            }
            if (r3 = t3[1], r3.toString, i3 = l3.c.$1(new E2.c8(r3)), i3 !== -1) switch (n3) {
              case "COLOR":
                r3 = l3.a, ++r3.d, a3 = r3.e, r3.e = i3 > a3 ? i3 : a3;
                break;
              case "JOINTS":
                r3 = l3.a, ++r3.f, o3 = r3.r, r3.r = i3 > o3 ? i3 : o3;
                break;
              case "TEXCOORD":
                r3 = l3.a, ++r3.y, s3 = r3.z, r3.z = i3 > s3 ? i3 : s3;
                break;
              case "WEIGHTS":
                r3 = l3.a, ++r3.w, c3 = r3.x, r3.x = i3 > c3 ? i3 : c3;
            }
            else l3.b.n(A2.nk(), e4);
        }
      },
      $S: 21
    }, E2.jT.prototype = {
      $3(e4, t3, n3) {
        var r3 = e4 + 1;
        return r3 === t3 ? t3 : (this.a.F(A2.rQ(), E2.a([
          n3,
          r3,
          t3
        ], N2.M)), 0);
      },
      $S: 51
    }, E2.jU.prototype = {
      $1(e4) {
        var t3, n3;
        (e4.length === 0 || O2.a.J(e4, 0) !== 95) && (O2.d.G(O2.ct, e4) || (t3 = e4.split("_"), O2.d.G(O2.cm, t3[0]) && t3.length === 2 ? (n3 = t3[1], n3.toString, n3 = D2.af(this.a.$1(new E2.c8(n3)), -1)) : n3 = true, n3 && this.b.n(A2.nk(), e4)));
      },
      $S: 21
    }, E2.jX.prototype = {
      $2(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3 = this;
        if (t3 !== -1) {
          if (n3 = l3.b.f.i(0, t3), n3 == null) {
            l3.c.l(A2.Q(), E2.a([t3], N2.M), e4);
            return;
          }
          r3 = l3.a, r3.ay.m(0, e4, n3), i3 = l3.c, n3.T(O2.a7, e4, i3), a3 = n3.CW, a3?.T(O2.A, e4, i3), a3 = e4 === "POSITION" ? n3.ax == null || n3.at == null : false, a3 && i3.n(A2.o8(), "POSITION"), o3 = E2.dl(n3), s3 = i3.fr.i(0, E2.a(e4.split("_"), N2.s)[0]), s3 == null ? n3.y === 5125 && i3.n(A2.r3(), e4) : s3.G(0, o3) ? e4 === "NORMAL" ? (a3 = i3.c, a3.push("NORMAL"), c3 = i3.S(), i3.a_(n3, new E2.fv(c3, n3.y === 5126 ? null : n3.gbX())), a3.pop()) : e4 === "TANGENT" ? (a3 = i3.c, a3.push("TANGENT"), c3 = i3.S(), i3.a_(n3, new E2.fw(c3, n3.y === 5126 ? null : n3.gbX())), a3.pop()) : e4 === "COLOR_0" && n3.y === 5126 && (a3 = i3.c, a3.push(e4), i3.a_(n3, new E2.eK(i3.S())), a3.pop()) : i3.l(A2.o7(), E2.a([o3, s3], N2.M), e4), a3 = n3.x, a3 === -1 || a3 % 4 == 0 ? n3.gad() % 4 == 0 ? a3 = false : (a3 = n3.CW, a3 = a3 != null && a3.z === -1) : a3 = true, a3 && i3.n(A2.o6(), e4), a3 = r3.CW, a3 === -1 ? r3.ch = r3.CW = n3.z : a3 !== n3.z && i3.n(A2.rb(), e4), a3 = n3.CW, a3 != null && a3.z === -1 && (a3.ax === -1 && (a3.ax = n3.gad()), r3.cg(n3, e4, i3));
        }
      },
      $S: 4
    }, E2.jY.prototype = {
      $2(e4, t3) {
        var n3;
        t3 !== -1 && (n3 = this.a, t3 + 1 > n3.ax ? this.b.l(A2.o9(), E2.a([e4, t3], N2.M), "material") : n3.dx[t3] = -1);
      },
      $S: 4
    }, E2.jZ.prototype = {
      $1(e4) {
        return e4 !== -1;
      },
      $S: 9
    }, E2.k_.prototype = {
      $2(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3 = this;
        t3 !== -1 && (n3 = c3.b.f.i(0, t3), n3 == null ? c3.c.l(A2.Q(), E2.a([t3], N2.M), e4) : (r3 = c3.c, n3.T(O2.a7, e4, r3), i3 = n3.CW, i3?.T(O2.A, e4, r3), a3 = c3.a.ay.i(0, e4), a3 == null ? r3.n(A2.r9(), e4) : a3.z !== n3.z && r3.n(A2.r8(), e4), i3 = e4 === "POSITION" ? n3.ax == null || n3.at == null : false, i3 && r3.n(A2.o8(), "POSITION"), o3 = E2.dl(n3), s3 = r3.fx.i(0, E2.a(e4.split("_"), N2.s)[0]), s3 != null && !s3.G(0, o3) && r3.l(A2.o7(), E2.a([o3, s3], N2.M), e4), i3 = n3.x, i3 === -1 || i3 % 4 == 0 ? n3.gad() % 4 == 0 ? i3 = false : (i3 = n3.CW, i3 = i3 != null && i3.z === -1) : i3 = true, i3 && r3.n(A2.o6(), e4), i3 = n3.CW, i3 != null && i3.z === -1 && (i3.ax === -1 && (i3.ax = n3.gad()), c3.a.cg(n3, e4, r3))), c3.a.cx[c3.d].m(0, e4, n3));
      },
      $S: 4
    }, E2.jW.prototype = {
      $0() {
        return E2.aD(N2.W);
      },
      $S: 54
    }, E2.eU.prototype = {
      a0(e4, t3, n3, r3) {
        var i3, a3, o3 = this, s3 = o3.a;
        return r3 > s3 && e4.l(A2.q7(), E2.a([
          t3,
          r3,
          s3
        ], N2.M), o3.at), r3 === o3.c && e4.l(A2.q8(), E2.a([r3, t3], N2.M), o3.at), o3.w && (s3 = o3.as, i3 = o3.z, s3[i3] = r3, ++i3, o3.z = i3, i3 === 3 && (o3.z = 0, i3 = s3[0], a3 = s3[1], i3 === a3 ? s3 = true : (s3 = s3[2], s3 = a3 === s3 || s3 === i3), s3 && ++o3.Q)), true;
      },
      aF(e4) {
        var t3 = this.Q;
        return t3 > 0 && e4.l(A2.q9(), E2.a([t3, this.b], N2.M), this.at), true;
      }
    }, E2.ap.prototype = {
      p(e4, t3) {
        var n3, r3, i3, a3 = this, o3 = a3.w;
        a3.CW = e4.z.i(0, o3), n3 = a3.y, a3.dx = e4.cx.i(0, n3), r3 = a3.Q, a3.cy = e4.at.i(0, r3), o3 !== -1 && (i3 = a3.CW, i3 == null ? t3.l(A2.Q(), E2.a([o3], N2.M), "camera") : i3.a$ = true), n3 !== -1 && (o3 = a3.dx, o3 == null ? t3.l(A2.Q(), E2.a([n3], N2.M), "skin") : o3.a$ = true), r3 !== -1 && (o3 = a3.cy, o3 == null ? t3.l(A2.Q(), E2.a([r3], N2.M), "mesh") : (o3.a$ = true, o3 = o3.w, o3 != null && (n3 = a3.ay, r3 = n3 == null, r3 ? o3 = false : (o3 = o3.i(0, 0).cx, o3 = o3 == null ? null : o3.length, o3 = o3 !== n3.length), o3 && (o3 = A2.rg(), n3 = n3.length, i3 = a3.cy.w.i(0, 0).cx, t3.l(o3, E2.a([n3, i3 == null ? null : i3.length], N2.M), "weights")), r3 && a3.cy.x != null && (a3.cy.y = true), a3.dx == null ? (o3 = a3.cy.w, o3.aR(o3, new E2.k4()) && t3.L(A2.rf())) : (o3 = a3.cy.w, o3.be(o3, new E2.k3()) && t3.L(A2.re()))))), o3 = a3.x, o3 != null && (n3 = E2.U(o3.gj(o3), null, false, N2.L), a3.cx = n3, E2.nT(o3, n3, e4.ax, "children", t3, new E2.k5(a3, t3)));
      },
      cd(e4, t3) {
        var n3, r3, i3, a3, o3 = this;
        if (o3.ch.C(0, e4), !(o3.cx == null || !t3.C(0, o3))) for (n3 = o3.cx, r3 = n3.length, i3 = 0; i3 < r3; ++i3) a3 = n3[i3], a3?.cd(e4, t3);
      }
    }, E2.k3.prototype = {
      $1(e4) {
        return e4.as === 0;
      },
      $S: 5
    }, E2.k4.prototype = {
      $1(e4) {
        return e4.as !== 0;
      },
      $S: 5
    }, E2.k5.prototype = {
      $3(e4, t3, n3) {
        e4.db != null && this.b.ao(A2.rd(), E2.a([t3], N2.M), n3), e4.db = this.a;
      },
      $S: 10
    }, E2.bF.prototype = {}, E2.bG.prototype = { p(e4, t3) {
      var n3, r3 = this.w;
      r3 != null && (n3 = E2.U(r3.gj(r3), null, false, N2.L), this.x = n3, E2.nT(r3, n3, e4.ax, "nodes", t3, new E2.ke(this, t3)));
    } }, E2.ke.prototype = {
      $3(e4, t3, n3) {
        e4.db != null && this.b.ao(A2.rh(), E2.a([t3], N2.M), n3), e4.cd(this.a, E2.aD(N2.L));
      },
      $S: 10
    }, E2.bI.prototype = { p(e4, t3) {
      var n3, r3, i3, a3, o3, s3 = this, c3 = "inverseBindMatrices", l3 = "skeleton", u3 = s3.w;
      s3.z = e4.f.i(0, u3), n3 = e4.ax, r3 = s3.x, s3.as = n3.i(0, r3), i3 = s3.y, i3 != null && (a3 = E2.U(i3.gj(i3), null, false, N2.L), s3.Q = a3, E2.nT(i3, a3, n3, "joints", t3, new E2.lm(s3)), s3.at.a === 0 && t3.n(A2.t6(), "joints")), u3 !== -1 && (n3 = s3.z, n3 == null ? t3.l(A2.Q(), E2.a([u3], N2.M), c3) : (n3.T(O2.b3, c3, t3), u3 = s3.z.CW, u3?.T(O2.b5, c3, t3), u3 = t3.c, u3.push(c3), n3 = s3.z.CW, n3 != null && n3.z !== -1 && t3.L(A2.ri()), o3 = E2.dl(s3.z), o3.O(0, O2.Y) ? t3.a_(s3.z, new E2.eT(t3.S())) : t3.F(A2.rj(), E2.a([o3, E2.a([O2.Y], N2.p)], N2.M)), n3 = s3.Q, n3 != null && s3.z.z < n3.length && t3.F(A2.r0(), E2.a([n3.length, s3.z.z], N2.M)), u3.pop())), r3 !== -1 && (u3 = s3.as, u3 == null ? t3.l(A2.Q(), E2.a([r3], N2.M), l3) : s3.at.G(0, u3) || t3.n(A2.t7(), l3));
    } }, E2.lm.prototype = {
      $3(e4, t3, n3) {
        var r3, i3, a3;
        for (e4.dy = true, r3 = E2.aD(N2.L), i3 = e4; i3 != null && r3.C(0, i3); ) i3 = i3.db;
        a3 = this.a.at, a3.a === 0 ? a3.D(0, r3) : a3.dv(r3.gcC(r3), false);
      },
      $S: 10
    }, E2.eT.prototype = { a0(e4, t3, n3, r3) {
      return (n3 === 3 && r3 !== 0 || n3 === 7 && r3 !== 0 || n3 === 11 && r3 !== 0 || n3 === 15 && r3 !== 1) && e4.l(A2.qb(), E2.a([
        t3,
        n3,
        r3
      ], N2.M), this.a), true;
    } }, E2.bK.prototype = {
      p(e4, t3) {
        var n3, r3, i3 = this, a3 = i3.x;
        i3.z = e4.Q.i(0, a3), n3 = i3.w, i3.y = e4.ay.i(0, n3), a3 !== -1 && (r3 = i3.z, r3 == null ? t3.l(A2.Q(), E2.a([a3], N2.M), "source") : r3.a$ = true), n3 !== -1 && (a3 = i3.y, a3 == null ? t3.l(A2.Q(), E2.a([n3], N2.M), "sampler") : a3.a$ = true);
      },
      c4(e4, t3) {
        var n3 = this.z, r3 = n3 == null, i3 = r3 ? null : n3.x;
        i3 ??= (n3 = r3 ? null : n3.as, n3 == null ? null : n3.a), i3 != null && !O2.d.G(O2.ap, i3) && t3.l(A2.oa(), E2.a([i3, O2.ap], N2.M), "source");
      },
      $icC: 1
    }, E2.lE.prototype = {}, E2.i.prototype = {
      a_(e4, t3) {
        D2.nm(this.d.c_(e4, new E2.hg()), t3);
      },
      W(e4, t3) {
        var n3, r3, i3;
        for (n3 = D2.aA(t3), r3 = this.e; n3.q(); ) i3 = n3.gt(), i3 != null && r3.m(0, i3, e4);
      },
      c7(e4) {
        var t3, n3, r3, i3 = this.c;
        return i3.length === 0 && e4 != null && O2.a.Y(e4, "/") ? e4 : (t3 = e4 != null, t3 && i3.push(e4), n3 = this.db, r3 = n3.a += "/", n3.a = E2.ny(r3, new E2.ab(i3, new E2.hi(), E2.a_(i3).h("ab<1,e*>")), "/"), t3 && i3.pop(), i3 = n3.a, n3.a = "", i3.charCodeAt(0), i3);
      },
      S() {
        return this.c7(null);
      },
      e9(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3 = this, p3 = "/extensionsUsed/";
        for (O2.d.D(f3.as, e4), n3 = D2.V(e4), r3 = f3.ax, i3 = f3.cx, a3 = D2.V(t3), o3 = N2.M, s3 = 0; s3 < n3.gj(e4); ++s3) {
          if (c3 = n3.i(e4, s3), l3 = A2.q3().aT(c3), (l3 == null ? null : l3.b[1]) ?? f3.n(A2.rB(), p3 + s3), u3 = i3.bf(0, new E2.hl(c3), new E2.hm(c3)), u3 == null) {
            f3.l(A2.rm(), E2.a([c3], o3), p3 + s3);
            continue;
          }
          u3.b.M(0, new E2.hn(f3, u3)), l3 = u3.c, l3?.$1(f3), u3.d && !a3.G(t3, c3) && f3.l(A2.t4(), E2.a([c3], o3), p3 + s3), r3.push(c3);
        }
        for (s3 = 0; s3 < a3.gj(t3); ++s3) d3 = a3.i(t3, s3), n3.G(e4, d3) || f3.l(A2.ta(), E2.a([d3], o3), "/extensionsRequired/" + s3);
      },
      ab(e4, t3, n3, r3, i3, a3) {
        var o3, s3, c3, l3 = this, u3 = l3.b, d3 = e4.b;
        if (!u3.b.G(0, d3) && (o3 = u3.c, !(o3.a !== 0 && !o3.G(0, d3)))) {
          if (o3 = u3.a, o3 > 0 && l3.cy.length === o3) throw l3.y = true, E2.d(O2.ba);
          u3 = u3.d, s3 = u3 == null ? null : u3.i(0, d3), a3 == null ? (c3 = n3 == null ? r3 : O2.c.k(n3), u3 = i3 ? "" : l3.c7(c3), l3.cy.push(new E2.cW(e4, s3, u3, null, t3))) : l3.cy.push(new E2.cW(e4, s3, null, a3, t3));
        }
      },
      n(e4, t3) {
        return this.ab(e4, null, null, t3, false, null);
      },
      F(e4, t3) {
        return this.ab(e4, t3, null, null, false, null);
      },
      l(e4, t3, n3) {
        return this.ab(e4, t3, null, n3, false, null);
      },
      ao(e4, t3, n3) {
        return this.ab(e4, t3, n3, null, false, null);
      },
      Z(e4, t3) {
        return this.ab(e4, null, t3, null, false, null);
      },
      L(e4) {
        return this.ab(e4, null, null, null, false, null);
      },
      aE(e4, t3, n3) {
        return this.ab(e4, t3, null, null, n3, null);
      },
      aQ(e4, t3) {
        return this.ab(e4, null, null, null, false, t3);
      },
      a2(e4, t3, n3) {
        return this.ab(e4, t3, null, null, false, n3);
      }
    }, E2.hh.prototype = {
      $1(e4) {
        return e4.a;
      },
      $S: 57
    }, E2.hg.prototype = {
      $0() {
        return E2.a([], N2.gd);
      },
      $S: 58
    }, E2.hi.prototype = {
      $1(e4) {
        var t3;
        return e4.toString, t3 = E2.q0(e4, "~", "~0"), E2.q0(t3, "/", "~1");
      },
      $S: 59
    }, E2.hl.prototype = {
      $1(e4) {
        return e4.a === this.a;
      },
      $S: 22
    }, E2.hm.prototype = {
      $0() {
        return O2.d.bf(O2.au, new E2.hj(this.a), new E2.hk());
      },
      $S: 61
    }, E2.hj.prototype = {
      $1(e4) {
        return e4.a === this.a;
      },
      $S: 22
    }, E2.hk.prototype = {
      $0() {
        return null;
      },
      $S: 2
    }, E2.hn.prototype = {
      $2(e4, t3) {
        this.a.z.m(0, new E2.cb(e4, this.b.a), t3);
      },
      $S: 62
    }, E2.bA.prototype = { $ia8: 1 }, E2.cU.prototype = { aB() {
      return "ImageCodec." + this.b;
    } }, E2.dV.prototype = { aB() {
      return "_ColorPrimaries." + this.b;
    } }, E2.d5.prototype = { aB() {
      return "_ColorTransfer." + this.b;
    } }, E2.cc.prototype = { aB() {
      return "Format." + this.b;
    } }, E2.cd.prototype = {}, E2.iC.prototype = {
      $1(e4) {
        var t3, n3, r3, i3 = this.a;
        if (!i3.c) {
          switch (t3 = E2.oD(N2.a.a(e4)), n3 = i3.a, r3 = this.b, t3) {
            case O2.ag:
              i3.b = new E2.iM(r3, n3);
              break;
            case O2.ah:
              t3 = /* @__PURE__ */ new Uint8Array(13), i3.b = new E2.k7(O2.u, O2.r, t3, /* @__PURE__ */ new Uint8Array(32), r3, n3);
              break;
            case O2.ai:
              i3.b = new E2.lJ(/* @__PURE__ */ new Uint8Array(30), r3, n3);
              break;
            default:
              n3.K(), r3.R(O2.bj);
              return;
          }
          i3.c = true;
        }
        i3.b.C(0, e4);
      },
      $S: 11
    }, E2.iE.prototype = {
      $1(e4) {
        this.a.a.K(), this.b.R(e4);
      },
      $S: 23
    }, E2.iD.prototype = {
      $0() {
        var e4 = this.a.b;
        e4.b.K(), e4 = e4.a, e4.a.a & 30 || e4.R(O2.bi);
      },
      $S: 2
    }, E2.iB.prototype = { cb(e4) {
      var t3;
      this.b.K(), t3 = this.a, t3.a.a & 30 || t3.R(e4);
    } }, E2.iM.prototype = {
      C(e4, t3) {
        var n3, r3;
        try {
          this.dD(t3);
        } catch (e5) {
          if (r3 = E2.M(e5), r3 instanceof E2.aL) n3 = r3, this.b.K(), this.a.R(n3);
          else throw e5;
        }
      },
      dD(e4) {
        var t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3 = this, f3 = new E2.iO(), p3 = new E2.iN();
        for (t3 = D2.V(e4), n3 = 0; n3 !== t3.gj(e4); ) {
          switch (r3 = t3.i(e4, n3), d3.c) {
            case 0:
              if (r3 === 255) d3.c = 255;
              else throw E2.d(O2.c_);
              break;
            case 255:
              p3.$1(r3) && (d3.c = 1, d3.d = r3, d3.e = d3.f = 0);
              break;
            case 1:
              d3.e = r3 << 8 >>> 0, d3.c = 2;
              break;
            case 2:
              if (i3 = d3.e + r3, d3.e = i3, i3 < 2) throw E2.d(O2.bY);
              f3.$1(d3.d) && (i3 = d3.e, d3.r = new Uint8Array(i3 - 2)), d3.c = 3;
              break;
            case 3:
              if (a3 = Math.min(t3.gj(e4) - n3, d3.e - d3.f - 2), i3 = f3.$1(d3.d), o3 = d3.f, s3 = o3 + a3, i3) {
                if (i3 = d3.r, d3.f = s3, (i3 && O2.j).a5(i3, o3, s3, e4, n3), d3.f === d3.e - 2) {
                  d3.b.K(), e4 = d3.r, c3 = e4[0], t3 = e4[1], i3 = e4[2], o3 = e4[3], s3 = e4[4], l3 = e4[5], l3 === 3 ? u3 = O2.p : l3 === 1 ? u3 = O2.ae : (E2.Z(O2.bZ), u3 = O2.O), l3 = d3.a.a, l3.a & 30 && E2.Z(E2.d2("Future already completed")), l3.ah(new E2.cd("image/jpeg", c3, u3, (o3 << 8 | s3) >>> 0, (t3 << 8 | i3) >>> 0, O2.r, O2.u, false, false));
                  return;
                }
              } else d3.f = s3, s3 === d3.e - 2 && (d3.c = 255);
              n3 += a3;
              continue;
          }
          ++n3;
        }
      }
    }, E2.iO.prototype = {
      $1(e4) {
        return (e4 & 240) == 192 && e4 !== 196 && e4 !== 200 && e4 !== 204 || e4 === 222;
      },
      $S: 9
    }, E2.iN.prototype = {
      $1(e4) {
        return e4 !== 1 && (e4 & 248) != 208 && e4 !== 216 && e4 !== 217 && e4 !== 255;
      },
      $S: 9
    }, E2.k7.prototype = {
      C(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3 = this, _3 = new E2.k8(g3);
        for (n3 = D2.V(t3), r3 = g3.ay, i3 = g3.ax, a3 = 0; a3 !== n3.gj(t3); ) {
          switch (o3 = n3.i(t3, a3), g3.x) {
            case 0:
              a3 += 8, g3.x = 1;
              continue;
            case 1:
              g3.c = (g3.c << 8 | o3) >>> 0, ++g3.d === 4 && (g3.x = 2);
              break;
            case 2:
              if (s3 = (g3.e << 8 | o3) >>> 0, g3.e = s3, ++g3.f === 4) {
                switch (s3) {
                  case 1229472850:
                    if (g3.c !== 13) {
                      g3.b.K(), n3 = g3.a, n3.a.a & 30 || n3.R(O2.q);
                      return;
                    }
                    g3.y = true;
                    break;
                  case 1951551059:
                    g3.z = true;
                    break;
                  case 1665684045:
                    if (g3.c !== 32) {
                      g3.b.K(), n3 = g3.a, n3.a.a & 30 || n3.R(O2.q);
                      return;
                    }
                    break;
                  case 1934772034:
                    if (g3.c !== 1) {
                      g3.b.K(), n3 = g3.a, n3.a.a & 30 || n3.R(O2.q);
                      return;
                    }
                    break;
                  case 1883789683:
                    if (g3.c !== 9) {
                      g3.b.K(), n3 = g3.a, n3.a.a & 30 || n3.R(O2.q);
                      return;
                    }
                    break;
                  case 1732332865:
                    if (g3.c !== 4) {
                      g3.b.K(), n3 = g3.a, n3.a.a & 30 || n3.R(O2.q);
                      return;
                    }
                    break;
                  case 1766015824:
                    g3.Q = O2.F, g3.as = O2.E;
                    break;
                  case 1229209940:
                    switch (g3.b.K(), g3.y || g3.a.R(O2.bX), n3 = i3.buffer, t3 = new DataView(n3, 0), c3 = t3.getUint32(0, false), l3 = t3.getUint32(4, false), u3 = t3.getUint8(8), t3.getUint8(9)) {
                      case 0:
                        d3 = g3.z ? O2.af : O2.ae;
                        break;
                      case 2:
                      case 3:
                        d3 = g3.z ? O2.B : O2.p;
                        break;
                      case 4:
                        d3 = O2.af;
                        break;
                      case 6:
                        d3 = O2.B;
                        break;
                      default:
                        d3 = O2.O;
                    }
                    n3 = g3.as, n3 === O2.r && (n3 = g3.as = O2.t), r3 = g3.Q, r3 === O2.u && (r3 = g3.Q = O2.v), i3 = g3.at, s3 = g3.a.a, s3.a & 30 && E2.Z(E2.d2("Future already completed")), s3.ah(new E2.cd("image/png", u3, d3, c3, l3, n3, r3, i3, false));
                    return;
                }
                g3.x = g3.c === 0 ? 4 : 3;
              }
              break;
            case 3:
              switch (s3 = n3.gj(t3), f3 = g3.c, p3 = g3.w, m3 = Math.min(s3 - a3, f3 - p3), g3.e) {
                case 1229472850:
                  s3 = p3 + m3, g3.w = s3, O2.j.a5(i3, p3, s3, t3, a3);
                  break;
                case 1665684045:
                case 1732332865:
                case 1883789683:
                  s3 = p3 + m3, g3.w = s3, O2.j.a5(r3, p3, s3, t3, a3);
                  break;
                case 1934772034:
                  g3.Q = O2.v, g3.as = O2.t, g3.w = p3 + 1;
                  break;
                default:
                  g3.w = p3 + m3;
              }
              if (g3.w === g3.c) {
                switch (g3.e) {
                  case 1665684045:
                    g3.as === O2.r && g3.dl();
                    break;
                  case 1732332865:
                    g3.Q === O2.u && g3.dm();
                    break;
                  case 1883789683:
                    s3 = r3.buffer, h3 = new DataView(s3, 0), h3.getUint32(0, false) !== h3.getUint32(4, false) && (g3.at = true);
                }
                g3.x = 4;
              }
              a3 += m3;
              continue;
            case 4:
              ++g3.r === 4 && (_3.$0(), g3.x = 1);
          }
          ++a3;
        }
      },
      dm() {
        var e4 = this;
        if (e4.Q !== O2.v) switch (E2.f7(e4.ay.buffer, 0, null).getUint32(0, false)) {
          case 45455:
            e4.Q = O2.v;
            break;
          case 1e5:
            e4.Q = O2.en;
            break;
          default:
            e4.Q = O2.F;
        }
      },
      dl() {
        var e4, t3 = this;
        t3.as !== O2.t && (e4 = E2.f7(t3.ay.buffer, 0, null), t3.as = e4.getUint32(0, false) === 31270 && e4.getUint32(4, false) === 32900 && e4.getUint32(8, false) === 64e3 && e4.getUint32(12, false) === 33e3 && e4.getUint32(16, false) === 3e4 && e4.getUint32(20, false) === 6e4 && e4.getUint32(24, false) === 15e3 && e4.getUint32(28, false) === 6e3 ? O2.t : O2.E);
      }
    }, E2.k8.prototype = {
      $0() {
        var e4 = this.a;
        e4.r = e4.w = e4.f = e4.e = e4.d = e4.c = 0;
      },
      $S: 1
    }, E2.lJ.prototype = { C(e4, t3) {
      var n3, r3, i3, a3, o3, s3, c3, l3 = this, u3 = D2.a3(t3), d3 = l3.d, f3 = l3.c;
      if (u3 = d3 + Math.min(u3, 30 - d3), l3.d = u3, O2.j.d5(f3, d3, u3, t3), u3 = l3.d, u3 = u3 >= 25 ? u3 < 30 && f3[15] !== 76 : true, !u3) {
        if (l3.b.K(), n3 = E2.f7(f3.buffer, 0, null), n3.getUint32(0, false) !== 1380533830 || n3.getUint32(8, false) !== 1464156752) {
          l3.cb(O2.aj);
          return;
        }
        switch (n3.getUint32(12, false)) {
          case 1448097824:
            r3 = n3.getUint16(26, true) & 16383, i3 = n3.getUint16(28, true) & 16383, a3 = O2.p, o3 = false, s3 = false;
            break;
          case 1448097868:
            u3 = f3[21], d3 = f3[22], r3 = 1 + ((u3 | (d3 & 63) << 8) >>> 0), u3 = f3[23], f3 = f3[24], i3 = 1 + ((d3 >>> 6 | u3 << 2 | (f3 & 15) << 10) >>> 0), a3 = (f3 & 16) == 16 ? O2.B : O2.p, o3 = false, s3 = false;
            break;
          case 1448097880:
            c3 = f3[20], s3 = (c3 & 2) == 2, o3 = (c3 & 32) == 32, a3 = (c3 & 16) == 16 ? O2.B : O2.p, r3 = ((f3[24] | f3[25] << 8 | f3[26] << 16) >>> 0) + 1, i3 = ((f3[27] | f3[28] << 8 | f3[29] << 16) >>> 0) + 1;
            break;
          default:
            l3.cb(O2.aj);
            return;
        }
        u3 = o3 ? O2.F : O2.v, d3 = o3 ? O2.E : O2.t, l3.a.a3(new E2.cd("image/webp", 8, a3, r3, i3, d3, u3, false, s3));
      }
    } }, E2.dS.prototype = { $ia8: 1 }, E2.dR.prototype = { $ia8: 1 }, E2.aL.prototype = {
      k(e4) {
        return this.a;
      },
      $ia8: 1
    }, E2.d9.prototype = { aB() {
      return "_Storage." + this.b;
    } }, E2.fn.prototype = { bn() {
      var e4, t3 = this, n3 = N2.X, r3 = N2._, i3 = E2.a9(n3, r3);
      return i3.m(0, "pointer", t3.a), e4 = t3.b, e4 != null && i3.m(0, "mimeType", e4), e4 = t3.c, e4 != null && i3.m(0, "storage", O2.cy[e4.a]), e4 = t3.e, e4 != null && i3.m(0, "uri", e4), e4 = t3.d, e4 != null && i3.m(0, "byteLength", e4), e4 = t3.f, e4 != null && (n3 = E2.a9(n3, r3), n3.m(0, "width", e4.d), n3.m(0, "height", e4.e), r3 = e4.c, r3 !== O2.O && n3.m(0, "format", O2.dd[r3.a]), r3 = e4.f, r3 !== O2.r && n3.m(0, "primaries", O2.d6[r3.a]), r3 = e4.r, r3 !== O2.u && n3.m(0, "transfer", O2.d5[r3.a]), r3 = e4.b, r3 > 0 && n3.m(0, "bits", r3), i3.m(0, "image", n3)), i3;
    } }, E2.kb.prototype = {
      aX() {
        return this.eb();
      },
      eb() {
        var e4 = 0, t3 = E2.ex(N2.H), n3, r3 = 2, i3, a3 = this, o3, s3, c3 = E2.ez(function(l3, u3) {
          for (l3 === 1 && (i3 = u3, e4 = r3); ; ) switch (e4) {
            case 0:
              return o3 = true, r3 = 4, e4 = 7, E2.dd(a3.b7(), c3);
            case 7:
              return e4 = 8, E2.dd(a3.b8(), c3);
            case 8:
              o3 && E2.xS(a3.a, a3.b), a3.a.eC(a3.b), r3 = 2, e4 = 6;
              break;
            case 4:
              if (r3 = 3, s3 = i3, E2.M(s3) instanceof E2.bA) {
                e4 = 1;
                break;
              }
              throw s3;
            case 3:
              e4 = 2;
              break;
            case 6:
            case 1:
              return E2.es(n3, t3);
            case 2:
              return E2.er(i3, t3);
          }
        });
        return E2.et(c3, t3);
      },
      b7() {
        var e4 = 0, t3 = E2.ex(N2.H), n3 = 1, r3, i3 = this, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3, y3, b3, x3, S3 = E2.ez(function(C3, w3) {
          for (C3 === 1 && (r3 = w3, e4 = n3); ; ) switch (e4) {
            case 0:
              y3 = i3.b, b3 = y3.c, O2.d.P(b3), b3.push("buffers"), l3 = i3.a.x, u3 = l3.b, d3 = y3.ch, f3 = N2.M, p3 = N2.x, l3 = l3.a, m3 = l3.length, h3 = 0;
            case 2:
              if (!(h3 < u3)) {
                e4 = 4;
                break;
              }
              if (g3 = h3 >= m3, a3 = g3 ? null : l3[h3], a3 == null) {
                e4 = 3;
                break;
              }
              return b3.push(O2.c.k(h3)), _3 = new E2.fn(y3.S()), _3.b = "application/gltf-buffer", o3 = new E2.kc(i3, _3, h3), s3 = null, n3 = 6, e4 = 9, E2.dd(o3.$1(a3), S3);
            case 9:
              s3 = w3, n3 = 1, e4 = 8;
              break;
            case 6:
              if (n3 = 5, x3 = r3, g3 = E2.M(x3), p3.b(g3)) c3 = g3, y3.l(A2.nh(), E2.a([c3], f3), "uri");
              else throw x3;
              e4 = 8;
              break;
            case 5:
              e4 = 1;
              break;
            case 8:
              s3 != null && (_3.d = D2.a3(s3), D2.a3(s3) < a3.x ? y3.F(A2.ql(), E2.a([D2.a3(s3), a3.x], f3)) : (y3.dx && h3 === 0 && !a3.y && (g3 = a3.x, v3 = g3 + (-g3 & 3), D2.a3(s3) > v3 && y3.F(A2.qm(), E2.a([D2.a3(s3) - v3], f3))), g3 = a3, g3.z ?? (g3.z = s3))), d3.push(_3.bn()), b3.pop();
            case 3:
              ++h3, e4 = 2;
              break;
            case 4:
              return E2.es(null, t3);
            case 1:
              return E2.er(r3, t3);
          }
        });
        return E2.et(S3, t3);
      },
      b8() {
        var e4 = 0, t3 = E2.ex(N2.H), n3 = 1, r3, i3 = this, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3, y3, b3, x3, S3, C3, w3, T3, D3 = E2.ez(function(k3, j3) {
          for (k3 === 1 && (r3 = j3, e4 = n3); ; ) switch (e4) {
            case 0:
              C3 = i3.b, w3 = C3.c, O2.d.P(w3), w3.push("images"), f3 = i3.a.Q, p3 = f3.b, m3 = C3.ch, h3 = N2.M, g3 = N2.x, _3 = C3.dy, f3 = f3.a, v3 = f3.length, y3 = 0;
            case 2:
              if (!(y3 < p3)) {
                e4 = 4;
                break;
              }
              if (b3 = y3 >= v3, a3 = b3 ? null : f3[y3], a3 == null) {
                e4 = 3;
                break;
              }
              w3.push(O2.c.k(y3)), x3 = new E2.fn(C3.S()), o3 = new E2.kd(i3, x3), s3 = null;
              try {
                s3 = o3.$1(a3);
              } catch (e5) {
                if (b3 = E2.M(e5), g3.b(b3)) c3 = b3, C3.l(A2.nh(), E2.a([c3], h3), "uri");
                else throw e5;
              }
              l3 = null, e4 = s3 == null ? 6 : 5;
              break;
            case 5:
              return n3 = 8, e4 = 11, E2.dd(E2.uf(s3), D3);
            case 11:
              l3 = j3, b3 = O2.d.G(_3, l3.a), b3 || C3.F(A2.qq(), E2.a([l3.a], h3)), n3 = 1, e4 = 10;
              break;
            case 8:
              if (n3 = 7, T3 = r3, b3 = E2.M(T3), b3 instanceof E2.dS) C3.L(A2.qt());
              else if (b3 instanceof E2.dR) C3.L(A2.qs());
              else if (b3 instanceof E2.aL) u3 = b3, C3.F(A2.qn(), E2.a([u3], h3));
              else if (g3.b(b3)) d3 = b3, C3.l(A2.nh(), E2.a([d3], h3), "uri");
              else throw T3;
              e4 = 10;
              break;
            case 7:
              e4 = 1;
              break;
            case 10:
              l3 != null && (x3.b = l3.a, a3.x != null && a3.x !== l3.a && (b3 = A2.qp(), S3 = E2.a([l3.a, a3.x], h3), C3.l(b3, S3, x3.c === O2.aN ? "bufferView" : "uri")), b3 = l3.d, b3 !== 0 && !((b3 & b3 - 1) >>> 0) ? (b3 = l3.e, b3 = !(b3 !== 0 && !((b3 & b3 - 1) >>> 0))) : b3 = true, b3 && C3.F(A2.qr(), E2.a([l3.d, l3.e], h3)), b3 = l3, (b3.f === O2.E || b3.r === O2.F || l3.x || l3.w) && C3.L(A2.qo()), a3.as = l3, x3.f = l3);
            case 6:
              m3.push(x3.bn()), w3.pop();
            case 3:
              ++y3, e4 = 2;
              break;
            case 4:
              return E2.es(null, t3);
            case 1:
              return E2.er(r3, t3);
          }
        });
        return E2.et(D3, t3);
      }
    }, E2.kc.prototype = {
      $1(e4) {
        var t3, n3, r3, i3 = this;
        return e4.x === -1 ? null : (t3 = e4.w, t3 == null ? (t3 = e4.z, t3 == null ? (t3 = i3.a, n3 = t3.b, n3.dx && i3.c === 0 && !e4.y ? (i3.b.c = O2.ep, r3 = t3.c.$0(), r3 ?? n3.L(A2.qW()), r3) : null) : (i3.b.c = O2.aM, t3)) : (n3 = i3.b, n3.c = O2.aO, n3.e = t3.k(0), i3.a.c.$1(t3)));
      },
      $S: 65
    }, E2.kd.prototype = {
      $1(e4) {
        var t3, n3, r3 = this;
        if (e4.a.a === 0) {
          if (t3 = e4.y, t3 != null) return n3 = r3.b, n3.c = O2.aO, n3.e = t3.k(0), r3.a.d.$1(t3);
          if (t3 = e4.z, t3 != null) return r3.b.c = O2.aM, E2.fs(t3, N2.w);
          if (e4.Q != null && (r3.b.c = O2.aN, e4.ez(), t3 = e4.z, t3 != null)) return E2.fs(t3, N2.w);
        }
        return null;
      },
      $S: 66
    }, E2.ne.prototype = {
      $2(e4, t3) {
        var n3, r3, i3, a3, o3, s3, c3, l3, u3 = E2.mJ(t3);
        if ((u3 == null ? null : u3.ay) != null && (u3 = this.a, n3 = u3.c, O2.d.P(n3), n3.push("accessors"), n3.push(O2.c.k(e4)), r3 = t3.ay.ge8(), r3 != null)) for (n3 = r3.length, i3 = t3.z, a3 = N2.M, o3 = 0, s3 = -1, c3 = 0; c3 < n3; ++c3, s3 = l3) l3 = r3[c3], s3 !== -1 && l3 <= s3 && u3.l(A2.qi(), E2.a([
          o3,
          l3,
          s3
        ], a3), "sparse"), l3 >= i3 && u3.l(A2.qh(), E2.a([
          o3,
          l3,
          i3
        ], a3), "sparse"), ++o3;
      },
      $S: 67
    }, E2.nf.prototype = {
      $1(e4) {
        return e4.as === 0;
      },
      $S: 5
    }, E2.ng.prototype = {
      $2(e4, t3) {
        for (var n3, r3, i3, a3, o3 = this, s3 = null, c3 = t3.CW, l3 = t3.as, u3 = E2.U(l3, s3, false, N2.bF), d3 = E2.U(l3, s3, false, N2.ga), f3 = N2.hc, p3 = t3.ay, m3 = 0; ; ) {
          if (!(m3 < l3)) {
            n3 = false;
            break;
          }
          if (r3 = "" + m3, i3 = E2.mJ(p3.i(0, "JOINTS_" + r3)), a3 = E2.mJ(p3.i(0, "WEIGHTS_" + r3)), r3 = (i3 == null ? s3 : i3.z) !== c3 || (a3 == null ? s3 : a3.z) !== c3, r3) {
            n3 = true;
            break;
          }
          r3 = f3.a(i3).af(), u3[m3] = new E2.aH(r3.a(), E2.A(r3).h("aH<1>")), r3 = a3.bq(), d3[m3] = new E2.aH(r3.a(), E2.A(r3).h("aH<1>")), ++m3;
        }
        n3 || (l3 = o3.b, f3 = l3.c, f3.push(O2.c.k(e4)), f3.push("attributes"), p3 = o3.c, O2.d.D(p3, u3), O2.d.D(p3, d3), l3 = l3.S(), p3 = o3.a, o3.d.push(new E2.eX(u3, d3, p3.b - 1, p3.a, l3, E2.aD(N2.e))), f3.pop(), f3.pop());
      },
      $S: 20
    }, E2.mL.prototype = {
      $1(e4) {
        return e4.gt() == null;
      },
      $S: 68
    }, E2.eX.prototype = { dY(e4) {
      var t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3 = this;
      for (t3 = g3.a, n3 = t3.length, r3 = g3.b, i3 = g3.c, a3 = g3.e, o3 = a3 + "/JOINTS_", s3 = N2.M, c3 = g3.z, a3 += "/WEIGHTS_", l3 = g3.d, u3 = 0; u3 < n3; ++u3) {
        if (d3 = t3[u3].gt(), d3 == null) {
          g3.w = true;
          return;
        }
        if (d3 > i3) {
          e4.l(A2.qe(), E2.a([
            g3.f,
            g3.r,
            d3,
            i3,
            l3
          ], s3), o3 + u3);
          continue;
        }
        if (f3 = r3[u3].gt(), f3 == null) {
          g3.w = true;
          return;
        }
        f3 === 0 ? d3 !== 0 && e4.l(A2.qf(), E2.a([
          g3.f,
          g3.r,
          d3
        ], s3), o3 + u3) : (c3.C(0, d3) ? p3 = true : (e4.l(A2.qd(), E2.a([
          g3.f,
          g3.r,
          d3
        ], s3), o3 + u3), p3 = false), f3 < 0 ? e4.l(A2.qj(), E2.a([
          g3.f,
          g3.r,
          f3
        ], s3), a3 + u3) : p3 && (m3 = g3.x, h3 = A2.ol(), h3[0] = m3 + f3, g3.x = h3[0], g3.y += 2e-7));
      }
      if (++g3.r === 4) {
        if (Math.abs(g3.x - 1) > g3.y) for (u3 = 0; u3 < n3; ++u3) t3 = A2.qk(), r3 = g3.f, e4.l(t3, E2.a([
          r3 - 3,
          r3,
          g3.x
        ], s3), a3 + u3);
        c3.P(0), g3.x = g3.y = g3.r = 0;
      }
      ++g3.f;
    } }, E2.bH.prototype = { aB() {
      return "Severity." + this.b;
    } }, E2.iH.prototype = {}, E2.ho.prototype = {}, E2.hL.prototype = {
      $1(e4) {
        return "Actual data byte length (" + E2.b(e4[0]) + ") is less than the declared buffer byte length (" + E2.b(e4[1]) + ").";
      },
      $S: 0
    }, E2.hM.prototype = {
      $1(e4) {
        return "GLB-stored BIN chunk contains " + E2.b(e4[0]) + " extra padding byte(s).";
      },
      $S: 0
    }, E2.hE.prototype = {
      $1(e4) {
        return "Declared minimum value for this component (" + E2.b(e4[0]) + ") does not match actual minimum (" + E2.b(e4[1]) + ").";
      },
      $S: 0
    }, E2.hD.prototype = {
      $1(e4) {
        return "Declared maximum value for this component (" + E2.b(e4[0]) + ") does not match actual maximum (" + E2.b(e4[1]) + ").";
      },
      $S: 0
    }, E2.ht.prototype = {
      $1(e4) {
        return "Accessor contains " + E2.b(e4[0]) + " element(s) less than declared minimum value " + E2.b(e4[1]) + ".";
      },
      $S: 0
    }, E2.hs.prototype = {
      $1(e4) {
        return "Accessor contains " + E2.b(e4[0]) + " element(s) greater than declared maximum value " + E2.b(e4[1]) + ".";
      },
      $S: 0
    }, E2.hI.prototype = {
      $1(e4) {
        return "Vector3 at accessor indices " + E2.b(e4[0]) + ".." + E2.b(e4[1]) + " is not of unit length: " + E2.b(e4[2]) + ".";
      },
      $S: 0
    }, E2.hz.prototype = {
      $1(e4) {
        return "Vector3 with sign at accessor indices " + E2.b(e4[0]) + ".." + E2.b(e4[1]) + " has invalid w component: " + E2.b(e4[2]) + ". Must be 1.0 or -1.0.";
      },
      $S: 0
    }, E2.hr.prototype = {
      $1(e4) {
        return "Animation sampler output accessor element at indices " + E2.b(e4[0]) + ".." + E2.b(e4[1]) + " is not of unit length: " + E2.b(e4[2]) + ".";
      },
      $S: 0
    }, E2.hF.prototype = {
      $1(e4) {
        return "Accessor element at index " + E2.b(e4[0]) + " is not clamped to 0..1 range: " + E2.b(e4[1]) + ".";
      },
      $S: 0
    }, E2.hx.prototype = {
      $1(e4) {
        return "Accessor element at index " + E2.b(e4[0]) + " is " + E2.b(e4[1]) + ".";
      },
      $S: 0
    }, E2.hu.prototype = {
      $1(e4) {
        return "Indices accessor element at index " + E2.b(e4[0]) + " has value " + E2.b(e4[1]) + " that is greater than the maximum vertex index available (" + E2.b(e4[2]) + ").";
      },
      $S: 0
    }, E2.hw.prototype = {
      $1(e4) {
        return "Indices accessor contains " + E2.b(e4[0]) + " degenerate triangles (out of " + E2.b(e4[1]) + ").";
      },
      $S: 0
    }, E2.hv.prototype = {
      $1(e4) {
        return "Indices accessor contains primitive restart value (" + E2.b(e4[0]) + ") at index " + E2.b(e4[1]) + ".";
      },
      $S: 0
    }, E2.hp.prototype = {
      $1(e4) {
        return M2.m + E2.b(e4[0]) + " is negative: " + E2.b(e4[1]) + ".";
      },
      $S: 0
    }, E2.hq.prototype = {
      $1(e4) {
        return M2.m + E2.b(e4[0]) + " is less than or equal to previous: " + E2.b(e4[1]) + " <= " + E2.b(e4[2]) + ".";
      },
      $S: 0
    }, E2.hH.prototype = {
      $1(e4) {
        return M2.d + E2.b(e4[0]) + " is less than or equal to previous: " + E2.b(e4[1]) + " <= " + E2.b(e4[2]) + ".";
      },
      $S: 0
    }, E2.hG.prototype = {
      $1(e4) {
        return M2.d + E2.b(e4[0]) + " is greater than or equal to the number of accessor elements: " + E2.b(e4[1]) + " >= " + E2.b(e4[2]) + ".";
      },
      $S: 0
    }, E2.hy.prototype = {
      $1(e4) {
        return "Matrix element at index " + E2.b(e4[0]) + " (component index " + E2.b(e4[1]) + ") contains invalid value: " + E2.b(e4[2]) + ".";
      },
      $S: 0
    }, E2.hO.prototype = {
      $1(e4) {
        return "Image data is invalid. " + E2.b(e4[0]);
      },
      $S: 0
    }, E2.hQ.prototype = {
      $1(e4) {
        return "Recognized image format " + ("'" + E2.b(e4[0]) + "'") + " does not match declared image format " + ("'" + E2.b(e4[1]) + "'") + ".";
      },
      $S: 0
    }, E2.hT.prototype = {
      $1(e4) {
        return "Unexpected end of image stream.";
      },
      $S: 0
    }, E2.hU.prototype = {
      $1(e4) {
        return "Image format not recognized.";
      },
      $S: 0
    }, E2.hR.prototype = {
      $1(e4) {
        return "'" + E2.b(e4[0]) + "' MIME type requires an extension.";
      },
      $S: 0
    }, E2.hS.prototype = {
      $1(e4) {
        return "Image has non-power-of-two dimensions: " + E2.b(e4[0]) + "x" + E2.b(e4[1]) + ".";
      },
      $S: 0
    }, E2.hP.prototype = {
      $1(e4) {
        return "Image contains unsupported features like non-default colorspace information, non-square pixels, or animation.";
      },
      $S: 0
    }, E2.hV.prototype = {
      $1(e4) {
        return "URI is used in GLB container.";
      },
      $S: 0
    }, E2.hN.prototype = {
      $1(e4) {
        return "Data URI is used in GLB container.";
      },
      $S: 0
    }, E2.hB.prototype = {
      $1(e4) {
        return "Joints accessor element at index " + E2.b(e4[0]) + " (component index " + E2.b(e4[1]) + ") has value " + E2.b(e4[2]) + " that is greater than the maximum joint index (" + E2.b(e4[3]) + ") set by skin " + E2.b(e4[4]) + ".";
      },
      $S: 0
    }, E2.hA.prototype = {
      $1(e4) {
        return "Joints accessor element at index " + E2.b(e4[0]) + " (component index " + E2.b(e4[1]) + ") has value " + E2.b(e4[2]) + " that is already in use for the vertex.";
      },
      $S: 0
    }, E2.hJ.prototype = {
      $1(e4) {
        return "Weights accessor element at index " + E2.b(e4[0]) + " (component index " + E2.b(e4[1]) + ") has negative value " + E2.b(e4[2]) + ".";
      },
      $S: 0
    }, E2.hK.prototype = {
      $1(e4) {
        return "Weights accessor elements (at indices " + E2.b(e4[0]) + ".." + E2.b(e4[1]) + ") have non-normalized sum: " + E2.b(e4[2]) + ".";
      },
      $S: 0
    }, E2.hC.prototype = {
      $1(e4) {
        return "Joints accessor element at index " + E2.b(e4[0]) + " (component index " + E2.b(e4[1]) + ") is used with zero weight but has non-zero value (" + E2.b(e4[2]) + ").";
      },
      $S: 0
    }, E2.iF.prototype = {}, E2.iG.prototype = {
      $1(e4) {
        return D2.as(e4[0]);
      },
      $S: 0
    }, E2.kf.prototype = {}, E2.kh.prototype = {
      $1(e4) {
        return "Invalid array length " + E2.b(e4[0]) + ". Valid lengths are: " + D2.bt(N2.Y.a(e4[1]), E2.pM(), N2.X).k(0) + ".";
      },
      $S: 0
    }, E2.ki.prototype = {
      $1(e4) {
        var t3 = e4[0];
        return t3 = typeof t3 == "string" ? "'" + t3 + "'" : D2.as(t3), "Type mismatch. Array element " + E2.b(t3) + " is not a " + ("'" + E2.b(e4[1]) + "'") + ".";
      },
      $S: 0
    }, E2.kg.prototype = {
      $1(e4) {
        return "Duplicate element.";
      },
      $S: 0
    }, E2.kk.prototype = {
      $1(e4) {
        return "Index must be a non-negative integer.";
      },
      $S: 0
    }, E2.kl.prototype = {
      $1(e4) {
        return "Invalid JSON data. Parser output: " + E2.b(e4[0]);
      },
      $S: 0
    }, E2.km.prototype = {
      $1(e4) {
        return "Invalid URI " + ("'" + E2.b(e4[0]) + "'") + ". Parser output:\n" + E2.b(e4[1]);
      },
      $S: 0
    }, E2.kj.prototype = {
      $1(e4) {
        return "Entity cannot be empty.";
      },
      $S: 0
    }, E2.kn.prototype = {
      $1(e4) {
        return e4.toString, "Exactly one of " + new E2.ab(e4, E2.dj(), E2.a_(e4).h("ab<1,e*>")).k(0) + " properties must be defined.";
      },
      $S: 0
    }, E2.ko.prototype = {
      $1(e4) {
        return "Value " + ("'" + E2.b(e4[0]) + "'") + " does not match regexp pattern " + ("'" + E2.b(e4[1]) + "'") + ".";
      },
      $S: 0
    }, E2.kp.prototype = {
      $1(e4) {
        var t3 = e4[0];
        return t3 = typeof t3 == "string" ? "'" + t3 + "'" : D2.as(t3), "Type mismatch. Property value " + E2.b(t3) + " is not a " + ("'" + E2.b(e4[1]) + "'") + ".";
      },
      $S: 0
    }, E2.ku.prototype = {
      $1(e4) {
        var t3 = e4[0];
        return t3 = typeof t3 == "string" ? "'" + t3 + "'" : D2.as(t3), "Invalid value " + E2.b(t3) + ". Valid values are " + D2.bt(N2.Y.a(e4[1]), E2.pM(), N2.X).k(0) + ".";
      },
      $S: 0
    }, E2.kv.prototype = {
      $1(e4) {
        return "Value " + E2.b(e4[0]) + " is out of range.";
      },
      $S: 0
    }, E2.kt.prototype = {
      $1(e4) {
        return "Value " + E2.b(e4[0]) + " is not a multiple of " + E2.b(e4[1]) + ".";
      },
      $S: 0
    }, E2.kq.prototype = {
      $1(e4) {
        return "Property " + ("'" + E2.b(e4[0]) + "'") + " must be defined.";
      },
      $S: 0
    }, E2.kr.prototype = {
      $1(e4) {
        return "Unexpected property.";
      },
      $S: 0
    }, E2.ks.prototype = {
      $1(e4) {
        return "Dependency failed. " + ("'" + E2.b(e4[0]) + "'") + " must be defined.";
      },
      $S: 0
    }, E2.kw.prototype = {}, E2.lj.prototype = {
      $1(e4) {
        return "Unknown glTF major asset version: " + E2.b(e4[0]) + ".";
      },
      $S: 0
    }, E2.lk.prototype = {
      $1(e4) {
        return "Unknown glTF minor asset version: " + E2.b(e4[0]) + ".";
      },
      $S: 0
    }, E2.l4.prototype = {
      $1(e4) {
        return "Asset minVersion " + ("'" + E2.b(e4[0]) + "'") + " is greater than version " + ("'" + E2.b(e4[1]) + "'") + ".";
      },
      $S: 0
    }, E2.kL.prototype = {
      $1(e4) {
        return "Invalid value " + E2.b(e4[0]) + " for GL type " + ("'" + E2.b(e4[1]) + "'") + ".";
      },
      $S: 0
    }, E2.ky.prototype = {
      $1(e4) {
        return "Only (u)byte and (u)short accessors can be normalized.";
      },
      $S: 0
    }, E2.kz.prototype = {
      $1(e4) {
        return "Offset " + E2.b(e4[0]) + " is not a multiple of componentType length " + E2.b(e4[1]) + ".";
      },
      $S: 0
    }, E2.kx.prototype = {
      $1(e4) {
        return "Matrix accessors must be aligned to 4-byte boundaries.";
      },
      $S: 0
    }, E2.kA.prototype = {
      $1(e4) {
        return "Sparse accessor overrides more elements (" + E2.b(e4[0]) + ") than the base accessor contains (" + E2.b(e4[1]) + ").";
      },
      $S: 0
    }, E2.kB.prototype = {
      $1(e4) {
        return "Animated TRS properties will not affect a skinned mesh.";
      },
      $S: 0
    }, E2.kC.prototype = {
      $1(e4) {
        return "Data URI media type must be 'application/octet-stream' or 'application/gltf-buffer'. Found " + ("'" + E2.b(e4[0]) + "'") + " instead.";
      },
      $S: 0
    }, E2.kE.prototype = {
      $1(e4) {
        return "Buffer view's byteStride (" + E2.b(e4[0]) + ") is greater than byteLength (" + E2.b(e4[1]) + ").";
      },
      $S: 0
    }, E2.kD.prototype = {
      $1(e4) {
        return "Only buffer views with raw vertex data can have byteStride.";
      },
      $S: 0
    }, E2.kF.prototype = {
      $1(e4) {
        return "xmag and ymag should not be negative.";
      },
      $S: 0
    }, E2.kG.prototype = {
      $1(e4) {
        return "xmag and ymag must not be zero.";
      },
      $S: 0
    }, E2.kH.prototype = {
      $1(e4) {
        return "yfov should be less than Pi.";
      },
      $S: 0
    }, E2.kI.prototype = {
      $1(e4) {
        return "zfar must be greater than znear.";
      },
      $S: 0
    }, E2.kX.prototype = {
      $1(e4) {
        return "Alpha cutoff is supported only for 'MASK' alpha mode.";
      },
      $S: 0
    }, E2.l_.prototype = {
      $1(e4) {
        return "Invalid attribute name.";
      },
      $S: 0
    }, E2.l3.prototype = {
      $1(e4) {
        return "All primitives must have the same number of morph targets.";
      },
      $S: 0
    }, E2.l1.prototype = {
      $1(e4) {
        return "No POSITION attribute found.";
      },
      $S: 0
    }, E2.kZ.prototype = {
      $1(e4) {
        return "Indices for indexed attribute semantic " + ("'" + E2.b(e4[0]) + "'") + " must start with 0 and be continuous. Total expected indices: " + E2.b(e4[1]) + ", total provided indices: " + E2.b(e4[2]) + ".";
      },
      $S: 0
    }, E2.l2.prototype = {
      $1(e4) {
        return "TANGENT attribute without NORMAL found.";
      },
      $S: 0
    }, E2.l0.prototype = {
      $1(e4) {
        return "Number of JOINTS attribute semantics (" + E2.b(e4[0]) + ") does not match the number of WEIGHTS (" + E2.b(e4[1]) + ").";
      },
      $S: 0
    }, E2.kY.prototype = {
      $1(e4) {
        return "The length of weights array (" + E2.b(e4[0]) + M2.p + E2.b(e4[1]) + ").";
      },
      $S: 0
    }, E2.l8.prototype = {
      $1(e4) {
        return "A node can have either a matrix or any combination of translation/rotation/scale (TRS) properties.";
      },
      $S: 0
    }, E2.l6.prototype = {
      $1(e4) {
        return "Do not specify default transform matrix.";
      },
      $S: 0
    }, E2.l9.prototype = {
      $1(e4) {
        return "Matrix must be decomposable to TRS.";
      },
      $S: 0
    }, E2.lg.prototype = {
      $1(e4) {
        return "Rotation quaternion must be normalized.";
      },
      $S: 0
    }, E2.ll.prototype = {
      $1(e4) {
        return "Unused extension " + ("'" + E2.b(e4[0]) + "'") + " cannot be required.";
      },
      $S: 0
    }, E2.lf.prototype = {
      $1(e4) {
        return "Extension " + ("'" + E2.b(e4[0]) + "'") + " cannot be optional.";
      },
      $S: 0
    }, E2.kK.prototype = {
      $1(e4) {
        return "Extension name has invalid format.";
      },
      $S: 0
    }, E2.l7.prototype = {
      $1(e4) {
        return "Empty node encountered.";
      },
      $S: 0
    }, E2.lc.prototype = {
      $1(e4) {
        return "Node with a skinned mesh is not root. Parent transforms will not affect a skinned mesh.";
      },
      $S: 0
    }, E2.lb.prototype = {
      $1(e4) {
        return "Local transforms will not affect a skinned mesh.";
      },
      $S: 0
    }, E2.la.prototype = {
      $1(e4) {
        return "A node with a skinned mesh is used in a scene that does not contain joint nodes.";
      },
      $S: 0
    }, E2.lh.prototype = {
      $1(e4) {
        return "Joints do not have a common root.";
      },
      $S: 0
    }, E2.li.prototype = {
      $1(e4) {
        return "Skeleton node is not a common root.";
      },
      $S: 0
    }, E2.le.prototype = {
      $1(e4) {
        return "Non-relative URI found: " + ("'" + E2.b(e4[0]) + "'") + ".";
      },
      $S: 0
    }, E2.l5.prototype = {
      $1(e4) {
        return "This extension may be incompatible with other extensions for the object.";
      },
      $S: 0
    }, E2.ld.prototype = {
      $1(e4) {
        return "Prefer JSON Objects for extras.";
      },
      $S: 0
    }, E2.kJ.prototype = {
      $1(e4) {
        return "This property should not be defined as it will not be used.";
      },
      $S: 0
    }, E2.kM.prototype = {
      $1(e4) {
        return "This extension requires the animation channel target node to be undefined.";
      },
      $S: 0
    }, E2.kN.prototype = {
      $1(e4) {
        return "This extension requires the animation channel target path to be 'pointer'. Found " + ("'" + E2.b(e4[0]) + "'") + " instead.";
      },
      $S: 0
    }, E2.kO.prototype = {
      $1(e4) {
        return "outerConeAngle (" + E2.b(e4[1]) + ") is less than or equal to innerConeAngle (" + E2.b(e4[0]) + ").";
      },
      $S: 0
    }, E2.kP.prototype = {
      $1(e4) {
        return "Normal and anisotropy textures should use the same texture coords.";
      },
      $S: 0
    }, E2.kQ.prototype = {
      $1(e4) {
        return "Normal and clearcoat normal textures should use the same texture coords.";
      },
      $S: 0
    }, E2.kR.prototype = {
      $1(e4) {
        return "The dispersion extension needs to be combined with the volume extension.";
      },
      $S: 0
    }, E2.kS.prototype = {
      $1(e4) {
        return "Emissive strength has no effect when the emissive factor is zero or undefined.";
      },
      $S: 0
    }, E2.kW.prototype = {
      $1(e4) {
        return "The volume extension needs to be combined with an extension that allows light to transmit through the surface.";
      },
      $S: 0
    }, E2.kV.prototype = {
      $1(e4) {
        return "The volume extension should not be used with double-sided materials.";
      },
      $S: 0
    }, E2.kT.prototype = {
      $1(e4) {
        return "Thickness minimum has no effect when a thickness texture is not defined.";
      },
      $S: 0
    }, E2.kU.prototype = {
      $1(e4) {
        return "Thickness texture has no effect when the thickness minimum is equal to the thickness maximum.";
      },
      $S: 0
    }, E2.iY.prototype = {}, E2.j0.prototype = {
      $1(e4) {
        return "Accessor's total byteOffset " + E2.b(e4[0]) + " isn't a multiple of componentType length " + E2.b(e4[1]) + ".";
      },
      $S: 0
    }, E2.iZ.prototype = {
      $1(e4) {
        return "Referenced bufferView's byteStride value " + E2.b(e4[0]) + " is less than accessor element's length " + E2.b(e4[1]) + ".";
      },
      $S: 0
    }, E2.j_.prototype = {
      $1(e4) {
        return "Accessor (offset: " + E2.b(e4[0]) + ", length: " + E2.b(e4[1]) + ") does not fit referenced bufferView [" + E2.b(e4[2]) + "] length " + E2.b(e4[3]) + ".";
      },
      $S: 0
    }, E2.j1.prototype = {
      $1(e4) {
        return "Override of previously set accessor usage. Initial: " + ("'" + E2.b(e4[0]) + "'") + ", new: " + ("'" + E2.b(e4[1]) + "'") + ".";
      },
      $S: 0
    }, E2.j4.prototype = {
      $1(e4) {
        return "Animation channel has the same target as channel " + E2.b(e4[0]) + ".";
      },
      $S: 0
    }, E2.j2.prototype = {
      $1(e4) {
        return "Animation channel cannot target TRS properties of a node with defined matrix.";
      },
      $S: 0
    }, E2.j3.prototype = {
      $1(e4) {
        return "Animation channel cannot target WEIGHTS when mesh does not have morph targets.";
      },
      $S: 0
    }, E2.j8.prototype = {
      $1(e4) {
        return "accessor.min and accessor.max must be defined for animation input accessor.";
      },
      $S: 0
    }, E2.j6.prototype = {
      $1(e4) {
        return "Invalid Animation sampler input accessor format " + ("'" + E2.b(e4[0]) + "'") + ". Must be one of " + D2.bt(N2.Y.a(e4[1]), E2.dj(), N2.X).k(0) + ".";
      },
      $S: 0
    }, E2.ja.prototype = {
      $1(e4) {
        return "Invalid animation sampler output accessor format " + ("'" + E2.b(e4[0]) + "'") + " for path " + ("'" + E2.b(e4[2]) + "'") + ". Must be one of " + D2.bt(N2.Y.a(e4[1]), E2.dj(), N2.X).k(0) + ".";
      },
      $S: 0
    }, E2.j7.prototype = {
      $1(e4) {
        return "Animation sampler output accessor with " + ("'" + E2.b(e4[0]) + "'") + " interpolation must have at least " + E2.b(e4[1]) + " elements. Got " + E2.b(e4[2]) + ".";
      },
      $S: 0
    }, E2.j9.prototype = {
      $1(e4) {
        return "Animation sampler output accessor of count " + E2.b(e4[0]) + " expected. Found " + E2.b(e4[1]) + ".";
      },
      $S: 0
    }, E2.j5.prototype = {
      $1(e4) {
        return "bufferView.byteStride must not be defined for buffer views used by animation sampler accessors.";
      },
      $S: 0
    }, E2.jb.prototype = {
      $1(e4) {
        return "Buffer refers to an unresolved GLB binary chunk.";
      },
      $S: 0
    }, E2.je.prototype = {
      $1(e4) {
        return "BufferView does not fit buffer (" + E2.b(e4[0]) + ") byteLength (" + E2.b(e4[1]) + ").";
      },
      $S: 0
    }, E2.jd.prototype = {
      $1(e4) {
        return "Override of previously set bufferView target or usage. Initial: " + ("'" + E2.b(e4[0]) + "'") + ", new: " + ("'" + E2.b(e4[1]) + "'") + ".";
      },
      $S: 0
    }, E2.jc.prototype = {
      $1(e4) {
        return "bufferView.target should be set for vertex or index data.";
      },
      $S: 0
    }, E2.jf.prototype = {
      $1(e4) {
        return "bufferView.byteStride must not be defined for buffer views containing image data.";
      },
      $S: 0
    }, E2.jg.prototype = {
      $1(e4) {
        return "Validation support for this extension is incomplete; the asset may have undetected issues.";
      },
      $S: 0
    }, E2.jh.prototype = {
      $1(e4) {
        return "IBM accessor must have at least " + E2.b(e4[0]) + " elements. Found " + E2.b(e4[1]) + ".";
      },
      $S: 0
    }, E2.jl.prototype = {
      $1(e4) {
        return "Invalid accessor format " + ("'" + E2.b(e4[0]) + "'") + " for this attribute semantic. Must be one of " + D2.bt(N2.Y.a(e4[1]), E2.dj(), N2.X).k(0) + ".";
      },
      $S: 0
    }, E2.jm.prototype = {
      $1(e4) {
        return "Mesh attributes cannot use UNSIGNED_INT component type.";
      },
      $S: 0
    }, E2.ju.prototype = {
      $1(e4) {
        return "accessor.min and accessor.max must be defined for POSITION attribute accessor.";
      },
      $S: 0
    }, E2.jk.prototype = {
      $1(e4) {
        return "bufferView.byteStride must be defined when two or more accessors use the same buffer view.";
      },
      $S: 0
    }, E2.jj.prototype = {
      $1(e4) {
        return "Vertex attribute data must be aligned to 4-byte boundaries.";
      },
      $S: 0
    }, E2.jq.prototype = {
      $1(e4) {
        return "bufferView.byteStride must not be defined for indices accessor.";
      },
      $S: 0
    }, E2.jp.prototype = {
      $1(e4) {
        return "Invalid indices accessor format " + ("'" + E2.b(e4[0]) + "'") + ". Must be one of " + D2.bt(N2.Y.a(e4[1]), E2.dj(), N2.X).k(0) + ". ";
      },
      $S: 0
    }, E2.jo.prototype = {
      $1(e4) {
        return "Number of vertices or indices (" + E2.b(e4[0]) + ") is not compatible with used drawing mode (" + ("'" + E2.b(e4[1]) + "'") + ").";
      },
      $S: 0
    }, E2.jv.prototype = {
      $1(e4) {
        return "Material is incompatible with mesh primitive: Texture binding " + ("'" + E2.b(e4[0]) + "'") + " needs 'TEXCOORD_" + E2.b(e4[1]) + "' attribute.";
      },
      $S: 0
    }, E2.jt.prototype = {
      $1(e4) {
        return "Material requires a tangent space but the mesh primitive does not provide it and the material does not contain a normal map to generate it.";
      },
      $S: 0
    }, E2.jn.prototype = {
      $1(e4) {
        return "Material requires a tangent space but the mesh primitive does not provide it. Runtime-generated tangent space may be non-portable across implementations.";
      },
      $S: 0
    }, E2.jw.prototype = {
      $1(e4) {
        return "All accessors of the same primitive must have the same count.";
      },
      $S: 0
    }, E2.js.prototype = {
      $1(e4) {
        return "The mesh primitive does not define this attribute semantic.";
      },
      $S: 0
    }, E2.jr.prototype = {
      $1(e4) {
        return "Base accessor has different count.";
      },
      $S: 0
    }, E2.jx.prototype = {
      $1(e4) {
        return "Node is a part of a node loop.";
      },
      $S: 0
    }, E2.jy.prototype = {
      $1(e4) {
        return "Value overrides parent of node " + E2.b(e4[0]) + ".";
      },
      $S: 0
    }, E2.jB.prototype = {
      $1(e4) {
        var t3 = E2.b(e4[0]), n3 = e4[1];
        return "The length of weights array (" + t3 + M2.p + E2.b(n3 ?? 0) + ").";
      },
      $S: 0
    }, E2.jz.prototype = {
      $1(e4) {
        return "Node has skin defined, but mesh has no joints data.";
      },
      $S: 0
    }, E2.jA.prototype = {
      $1(e4) {
        return "Node uses skinned mesh, but has no skin defined.";
      },
      $S: 0
    }, E2.jC.prototype = {
      $1(e4) {
        return "Node " + E2.b(e4[0]) + " is not a root node.";
      },
      $S: 0
    }, E2.jE.prototype = {
      $1(e4) {
        return "Invalid IBM accessor format " + ("'" + E2.b(e4[0]) + "'") + ". Must be one of " + D2.bt(N2.Y.a(e4[1]), E2.dj(), N2.X).k(0) + ". ";
      },
      $S: 0
    }, E2.jD.prototype = {
      $1(e4) {
        return "bufferView.byteStride must not be defined for buffer views used by inverse bind matrices accessors.";
      },
      $S: 0
    }, E2.jF.prototype = {
      $1(e4) {
        return "Invalid MIME type " + ("'" + E2.b(e4[0]) + "'") + " for the texture source. Valid MIME types are " + D2.bt(N2.Y.a(e4[1]), E2.dj(), N2.X).k(0) + ".";
      },
      $S: 0
    }, E2.jG.prototype = {
      $1(e4) {
        return "Extension is not declared in extensionsUsed.";
      },
      $S: 0
    }, E2.jH.prototype = {
      $1(e4) {
        return "Unexpected location for this extension.";
      },
      $S: 0
    }, E2.jI.prototype = {
      $1(e4) {
        return "Unresolved reference: " + E2.b(e4[0]) + ".";
      },
      $S: 0
    }, E2.jJ.prototype = {
      $1(e4) {
        return "Cannot validate an extension as it is not supported by the validator: " + ("'" + E2.b(e4[0]) + "'") + ".";
      },
      $S: 0
    }, E2.jM.prototype = {
      $1(e4) {
        return "This object may be unused.";
      },
      $S: 0
    }, E2.jL.prototype = {
      $1(e4) {
        return "The static morph target weights are always overridden.";
      },
      $S: 0
    }, E2.jK.prototype = {
      $1(e4) {
        return "Tangents are not used because the material has no normal texture.";
      },
      $S: 0
    }, E2.ji.prototype = {
      $1(e4) {
        return "This variant is used more than once for this mesh primitive.";
      },
      $S: 0
    }, E2.hZ.prototype = {}, E2.i5.prototype = {
      $1(e4) {
        return "Invalid GLB magic value (" + E2.b(e4[0]) + ").";
      },
      $S: 0
    }, E2.i6.prototype = {
      $1(e4) {
        return "Invalid GLB version value " + E2.b(e4[0]) + ".";
      },
      $S: 0
    }, E2.i8.prototype = {
      $1(e4) {
        return "Declared GLB length (" + E2.b(e4[0]) + ") is too small.";
      },
      $S: 0
    }, E2.i_.prototype = {
      $1(e4) {
        return "Length of " + E2.b(e4[0]) + " chunk is not aligned to 4-byte boundaries.";
      },
      $S: 0
    }, E2.i7.prototype = {
      $1(e4) {
        return "Declared length (" + E2.b(e4[0]) + ") does not match GLB length (" + E2.b(e4[1]) + ").";
      },
      $S: 0
    }, E2.i0.prototype = {
      $1(e4) {
        return "Chunk (" + E2.b(e4[0]) + ") length (" + E2.b(e4[1]) + ") does not fit total GLB length.";
      },
      $S: 0
    }, E2.i3.prototype = {
      $1(e4) {
        return "Chunk (" + E2.b(e4[0]) + ") cannot have zero length.";
      },
      $S: 0
    }, E2.i2.prototype = {
      $1(e4) {
        return "Empty BIN chunk should be omitted.";
      },
      $S: 0
    }, E2.i1.prototype = {
      $1(e4) {
        return "Chunk of type " + E2.b(e4[0]) + " has already been used.";
      },
      $S: 0
    }, E2.ib.prototype = {
      $1(e4) {
        return "Unexpected end of chunk header.";
      },
      $S: 0
    }, E2.ia.prototype = {
      $1(e4) {
        return "Unexpected end of chunk data.";
      },
      $S: 0
    }, E2.ic.prototype = {
      $1(e4) {
        return "Unexpected end of header.";
      },
      $S: 0
    }, E2.id.prototype = {
      $1(e4) {
        return "First chunk must be of JSON type. Found " + E2.b(e4[0]) + " instead.";
      },
      $S: 0
    }, E2.i9.prototype = {
      $1(e4) {
        return "BIN chunk must be the second chunk.";
      },
      $S: 0
    }, E2.ie.prototype = {
      $1(e4) {
        return "Unknown GLB chunk type: " + E2.b(e4[0]) + ".";
      },
      $S: 0
    }, E2.i4.prototype = {
      $1(e4) {
        return "Extra data after the end of GLB stream.";
      },
      $S: 0
    }, E2.cW.prototype = {
      gbl() {
        return D2.tJ(this.a.c.$1(this.e));
      },
      gc9() {
        return this.b ?? this.a.a;
      },
      gE(e4) {
        return O2.a.gE(this.k(0));
      },
      O(e4, t3) {
        return t3 != null && t3 instanceof E2.cW && t3.k(0) === this.k(0);
      },
      k(e4) {
        var t3 = this, n3 = t3.c;
        return n3 != null && n3.length !== 0 ? E2.b(n3) + ": " + t3.gbl() : (n3 = t3.d, n3 == null ? t3.gbl() : "@" + E2.b(n3) + ": " + t3.gbl());
      }
    }, E2.ca.prototype = {
      p(e4, t3) {
        var n3 = this.d, r3 = this.e = e4.Q.i(0, n3);
        n3 !== -1 && (r3 == null ? t3.l(A2.Q(), E2.a([n3], N2.M), "source") : r3.a$ = true);
      },
      c4(e4, t3) {
        var n3 = this.e, r3 = n3 == null, i3 = r3 ? null : n3.x;
        i3 ??= (n3 = r3 ? null : n3.as, n3 == null ? null : n3.a), i3 != null && i3 !== "image/webp" && t3.l(A2.oa(), E2.a([i3, O2.d7], N2.M), "source");
      },
      $icC: 1
    }, E2.cf.prototype = { p(e4, t3) {
      var n3, r3;
      for (t3.L(A2.r_()), n3 = t3.e, r3 = this; r3 != null; ) if (r3 = n3.i(0, r3), r3 instanceof E2.bw) {
        r3.f != null && t3.L(A2.rD()), n3 = r3.e, n3 !== "pointer" && t3.F(A2.rE(), E2.a([n3], N2.M));
        break;
      }
    } }, E2.bC.prototype = { p(e4, t3) {
      var n3, r3, i3 = t3.c;
      i3.push("lights"), n3 = this.d, r3 = D2.cX(i3.slice(0), E2.a_(i3).c), t3.x.m(0, n3, r3), n3.a4(new E2.iS(t3, e4)), i3.pop();
    } }, E2.iS.prototype = {
      $2(e4, t3) {
        var n3 = this.a.c;
        n3.push(O2.c.k(e4)), n3.pop();
      },
      $S: 70
    }, E2.ba.prototype = {}, E2.cg.prototype = {}, E2.ch.prototype = { p(e4, t3) {
      var n3, r3, i3 = e4.a.i(0, "KHR_lights_punctual");
      i3 instanceof E2.bC ? (n3 = this.d, r3 = this.e = i3.d.i(0, n3), n3 !== -1 && (r3 == null ? t3.l(A2.Q(), E2.a([n3], N2.M), "light") : r3.a$ = true)) : t3.F(A2.cO(), E2.a(["/extensions/KHR_lights_punctual"], N2.M));
    } }, E2.ci.prototype = { p(e4, t3) {
      var n3, r3, i3, a3, o3 = this.f;
      if (o3 != null) {
        for (n3 = t3.c, n3.push("anisotropyTexture"), o3.p(e4, t3), r3 = t3.e, i3 = this; i3 != null; ) if (i3 = r3.i(0, i3), i3 instanceof E2.ai) {
          i3.ay = true, a3 = i3.x, a3 != null && a3.e !== o3.e && t3.L(A2.rG());
          break;
        }
        n3.pop();
      }
    } }, E2.cj.prototype = { p(e4, t3) {
      var n3, r3, i3, a3, o3 = this, s3 = o3.e;
      if (s3 != null && (n3 = t3.c, n3.push("clearcoatTexture"), s3.p(e4, t3), n3.pop()), s3 = o3.r, s3 != null && (n3 = t3.c, n3.push("clearcoatRoughnessTexture"), s3.p(e4, t3), n3.pop()), s3 = o3.w, s3 != null) {
        for (n3 = t3.c, n3.push("clearcoatNormalTexture"), s3.p(e4, t3), r3 = t3.e, i3 = o3; i3 != null; ) if (i3 = r3.i(0, i3), i3 instanceof E2.ai) {
          a3 = i3.x, a3 != null && a3.e !== s3.e && t3.L(A2.rH());
          break;
        }
        n3.pop();
      }
    } }, E2.ck.prototype = { p(e4, t3) {
      var n3, r3;
      for (n3 = t3.e, r3 = this; r3 != null; ) if (r3 = n3.i(0, r3), r3 instanceof E2.ai) {
        r3.a.v("KHR_materials_volume") || t3.L(A2.rI());
        break;
      }
    } }, E2.cl.prototype = { p(e4, t3) {
      var n3, r3, i3 = this.d;
      if (i3 = isNaN(i3) || i3 === 1, !i3) {
        for (i3 = t3.e, n3 = this; n3 != null; ) if (n3 = i3.i(0, n3), n3 instanceof E2.ai) {
          r3 = n3.Q, r3 != null && D2.af(r3[0], 0) && D2.af(r3[1], 0) && D2.af(r3[2], 0) && t3.L(A2.rJ());
          break;
        }
      }
    } }, E2.cm.prototype = {}, E2.cn.prototype = { p(e4, t3) {
      var n3, r3 = this.e;
      r3 != null && (n3 = t3.c, n3.push("iridescenceTexture"), r3.p(e4, t3), n3.pop()), r3 = this.x, r3 != null && (n3 = t3.c, n3.push("iridescenceThicknessTexture"), r3.p(e4, t3), n3.pop());
    } }, E2.co.prototype = { p(e4, t3) {
      var n3, r3 = this.e;
      r3 != null && (n3 = t3.c, n3.push("diffuseTexture"), r3.p(e4, t3), n3.pop()), r3 = this.w, r3 != null && (n3 = t3.c, n3.push("specularGlossinessTexture"), r3.p(e4, t3), n3.pop());
    } }, E2.cp.prototype = { p(e4, t3) {
      var n3, r3 = this.e;
      r3 != null && (n3 = t3.c, n3.push("sheenColorTexture"), r3.p(e4, t3), n3.pop()), r3 = this.r, r3 != null && (n3 = t3.c, n3.push("sheenRoughnessTexture"), r3.p(e4, t3), n3.pop());
    } }, E2.cq.prototype = { p(e4, t3) {
      var n3, r3 = this.e;
      r3 != null && (n3 = t3.c, n3.push("specularTexture"), r3.p(e4, t3), n3.pop()), r3 = this.r, r3 != null && (n3 = t3.c, n3.push("specularColorTexture"), r3.p(e4, t3), n3.pop());
    } }, E2.cr.prototype = { p(e4, t3) {
      var n3, r3 = this.e;
      r3 != null && (n3 = t3.c, n3.push("transmissionTexture"), r3.p(e4, t3), n3.pop());
    } }, E2.cs.prototype = {}, E2.bD.prototype = { p(e4, t3) {
      var n3, r3, i3 = t3.c;
      i3.push("variants"), n3 = this.d, r3 = D2.cX(i3.slice(0), E2.a_(i3).c), t3.x.m(0, n3, r3), n3.a4(new E2.iT(t3, e4)), i3.pop();
    } }, E2.iT.prototype = {
      $2(e4, t3) {
        var n3 = this.a.c;
        n3.push(O2.c.k(e4)), n3.pop();
      },
      $S: 71
    }, E2.aM.prototype = {}, E2.ct.prototype = { p(e4, t3) {
      var n3 = t3.c;
      n3.push("mappings"), this.d.a4(new E2.iW(t3, e4, E2.aD(N2.e))), n3.pop();
    } }, E2.iW.prototype = {
      $2(e4, t3) {
        var n3 = this.a, r3 = n3.c;
        r3.push(O2.c.k(e4)), t3.cR(this.b, n3, this.c), r3.pop();
      },
      $S: 72
    }, E2.bb.prototype = {
      cR(e4, t3, n3) {
        var r3, i3, a3, o3 = this, s3 = e4.a.i(0, "KHR_materials_variants");
        if (s3 instanceof E2.bD) {
          if (r3 = o3.d, r3 != null && (i3 = t3.c, i3.push("variants"), E2.oJ(r3.gj(r3), new E2.iU(o3, s3, t3, n3), false, N2.J), i3.pop()), r3 = o3.e, i3 = o3.r = e4.as.i(0, r3), r3 !== -1) {
            if (i3 == null) t3.l(A2.Q(), E2.a([r3], N2.M), "material");
            else for (i3.a$ = true, r3 = t3.e, a3 = o3; a3 != null; ) if (a3 = r3.i(0, a3), a3 instanceof E2.aE) {
              o3.r.ch.M(0, new E2.iV(a3, t3));
              break;
            }
          }
        } else t3.F(A2.cO(), E2.a(["/extensions/KHR_materials_variants"], N2.M));
      },
      p(e4, t3) {
        return this.cR(e4, t3, null);
      }
    }, E2.iU.prototype = {
      $1(e4) {
        var t3 = this, n3 = t3.a.d.i(0, e4), r3 = t3.b.d.i(0, n3);
        return n3 !== -1 && (t3.d.C(0, n3) || t3.c.Z(A2.r1(), e4), r3 == null ? t3.c.ao(A2.Q(), E2.a([n3], N2.M), e4) : r3.a$ = true), r3;
      },
      $S: 73
    }, E2.iV.prototype = {
      $2(e4, t3) {
        var n3;
        t3 !== -1 && (n3 = this.a, t3 + 1 > n3.ax ? this.b.l(A2.o9(), E2.a([e4, t3], N2.M), "material") : n3.dx[t3] = -1);
      },
      $S: 4
    }, E2.cu.prototype = { p(e4, t3) {
      var n3, r3, i3 = this.r;
      for (i3 != null && (n3 = t3.c, n3.push("thicknessTexture"), i3.p(e4, t3), n3.pop()), i3 = t3.e, r3 = this; r3 != null; ) if (r3 = i3.i(0, r3), r3 instanceof E2.ai) {
        i3 = r3.a, !i3.v("KHR_materials_transmission") && !i3.gX().aR(0, new E2.iX()) && t3.L(A2.rN()), r3.ax && this.f > 0 && t3.L(A2.rM());
        break;
      }
    } }, E2.iX.prototype = {
      $1(e4) {
        return N2.h.b(e4);
      },
      $S: 74
    }, E2.cv.prototype = { p(e4, t3) {
      var n3, r3;
      for (n3 = t3.e, r3 = this; r3 != null; ) if (r3 = n3.i(0, r3), r3 instanceof E2.ai) {
        r3.ch.m(0, t3.S(), this.r);
        break;
      }
    } }, E2.L.prototype = {}, E2.O.prototype = {}, E2.cb.prototype = {
      gE(e4) {
        var t3 = D2.bY(this.a), n3 = D2.bY(this.b);
        return E2.px(E2.fW(E2.fW(0, O2.c.gE(t3)), O2.c.gE(n3)));
      },
      O(e4, t3) {
        return t3 != null && t3 instanceof E2.cb && this.b == t3.b && this.a == t3.a;
      }
    }, E2.cw.prototype = {}, E2.fo.prototype = {}, E2.dt.prototype = {
      c0() {
        var e4 = this, t3 = e4.d = e4.c.bT(new E2.ii(e4), e4.gdB(), e4.gcn()), n3 = e4.ch;
        return n3.e = t3.geg(), n3.f = t3.gej(), n3.r = new E2.ij(e4), e4.e.a;
      },
      aN() {
        this.d.K();
        var e4 = this.e;
        e4.a.a & 30 || e4.a3(new E2.au("model/gltf-binary", null, this.cx));
      },
      dA(e4) {
        var t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3 = this, v3 = "model/gltf-binary", y3 = "0";
        for (_3.d.aZ(), t3 = D2.V(e4), n3 = N2.f, r3 = N2.G, i3 = N2.M, a3 = _3.a, o3 = 0; o3 !== t3.gj(e4); ) switch (_3.r) {
          case 0:
            if (s3 = t3.gj(e4), c3 = _3.w, l3 = Math.min(s3 - o3, 12 - c3), s3 = c3 + l3, _3.w = s3, O2.j.a5(a3, c3, s3, e4, o3), o3 += l3, _3.x = l3, _3.w !== 12) break;
            if (u3 = _3.b.getUint32(0, true), u3 !== 1179937895) {
              _3.f.a2(A2.qA(), E2.a([u3], i3), 0), _3.d.K(), t3 = _3.e.a, t3.a & 30 || (n3 = _3.cx, t3.ah(new E2.au(v3, null, n3)));
              return;
            }
            if (d3 = _3.b.getUint32(4, true), d3 !== 2) {
              _3.f.a2(A2.qB(), E2.a([d3], i3), 4), _3.d.K(), t3 = _3.e.a, t3.a & 30 || (n3 = _3.cx, t3.ah(new E2.au(v3, null, n3)));
              return;
            }
            s3 = _3.y = _3.b.getUint32(8, true), s3 <= _3.x && _3.f.a2(A2.qD(), E2.a([s3], i3), 8), _3.r = 1, _3.w = 0;
            break;
          case 1:
            if (s3 = _3.x, s3 === _3.y) {
              _3.f.aQ(A2.qz(), s3), _3.d.K(), _3.cm();
              return;
            }
            if (s3 = t3.gj(e4), c3 = _3.w, l3 = Math.min(s3 - o3, 8 - c3), s3 = c3 + l3, _3.w = s3, O2.j.a5(a3, c3, s3, e4, o3), o3 += l3, _3.x += l3, _3.w !== 8) break;
            switch (_3.Q = _3.b.getUint32(0, true), s3 = _3.b.getUint32(4, true), _3.as = s3, _3.Q & 3 && (c3 = _3.f, f3 = A2.qu(), p3 = _3.x, c3.a2(f3, E2.a(["0x" + O2.a.aq(O2.c.av(s3, 16), 8, y3)], i3), p3 - 8)), _3.x + _3.Q > _3.y && _3.f.a2(A2.qv(), E2.a(["0x" + O2.a.aq(O2.c.av(_3.as, 16), 8, y3), _3.Q], i3), _3.x - 8), _3.z === 0 && _3.as !== 1313821514 && _3.f.a2(A2.qI(), E2.a(["0x" + O2.a.aq(O2.c.av(_3.as, 16), 8, y3)], i3), _3.x - 8), s3 = _3.as, s3 === 5130562 && _3.z > 1 && !_3.CW && _3.f.a2(A2.qE(), E2.a(["0x" + O2.a.aq(O2.c.av(s3, 16), 8, y3)], i3), _3.x - 8), m3 = new E2.ig(_3), s3 = _3.as, s3) {
              case 1313821514:
                _3.Q === 0 && (c3 = _3.f, f3 = A2.qy(), p3 = _3.x, c3.a2(f3, E2.a(["0x" + O2.a.aq(O2.c.av(s3, 16), 8, y3)], i3), p3 - 8)), m3.$1$seen(_3.at), _3.at = true;
                break;
              case 5130562:
                _3.Q === 0 && _3.f.aQ(A2.qx(), _3.x - 8), m3.$1$seen(_3.CW), _3.CW = true;
                break;
              default:
                _3.f.a2(A2.qJ(), E2.a(["0x" + O2.a.aq(O2.c.av(s3, 16), 8, y3)], i3), _3.x - 8), _3.r = 4294967295;
            }
            ++_3.z, _3.w = 0;
            break;
          case 1313821514:
            l3 = Math.min(t3.gj(e4) - o3, _3.Q - _3.w), _3.ax ?? (s3 = _3.ch, c3 = _3.f, s3 = new E2.cT(new E2.aj(s3, E2.A(s3).h("aj<1>")), new E2.ay(new E2.C(A2.B, n3), r3)), s3.e = c3, _3.ax = s3, _3.ay = s3.c0()), s3 = _3.ch, h3 = o3 + l3, c3 = t3.a1(e4, o3, h3), f3 = s3.b, f3 >= 4 && E2.Z(s3.bv()), f3 & 1 ? s3.aC(c3) : f3 & 3 || (s3 = s3.b6(), c3 = new E2.cG(c3), g3 = s3.c, g3 == null ? s3.b = s3.c = c3 : (g3.saG(c3), s3.c = c3)), s3 = _3.w += l3, _3.x += l3, s3 === _3.Q && (_3.ch.a7(), _3.r = 1, _3.w = 0), o3 = h3;
            break;
          case 5130562:
            s3 = t3.gj(e4), c3 = _3.Q, f3 = _3.w, l3 = Math.min(s3 - o3, c3 - f3), s3 = _3.cx, s3 ??= _3.cx = new Uint8Array(c3), c3 = f3 + l3, _3.w = c3, O2.j.a5(s3, f3, c3, e4, o3), o3 += l3, _3.x += l3, _3.w === _3.Q && (_3.r = 1, _3.w = 0);
            break;
          case 4294967295:
            s3 = t3.gj(e4), c3 = _3.Q, f3 = _3.w, l3 = Math.min(s3 - o3, c3 - f3), f3 += l3, _3.w = f3, o3 += l3, _3.x += l3, f3 === c3 && (_3.r = 1, _3.w = 0);
        }
        _3.d.ar();
      },
      cm() {
        var e4, t3, n3 = this;
        switch (n3.r) {
          case 0:
            n3.f.aQ(A2.qH(), n3.x), n3.aN();
            break;
          case 1:
            n3.w === 0 ? (e4 = n3.y, t3 = n3.x, e4 !== t3 && n3.f.a2(A2.qC(), E2.a([e4, t3], N2.M), n3.x), e4 = n3.ay, e4 == null ? n3.e.a3(new E2.au("model/gltf-binary", null, n3.cx)) : e4.au(0, new E2.ih(n3), n3.gcn(), N2.P)) : (n3.f.aQ(A2.qG(), n3.x), n3.aN());
            break;
          default:
            n3.Q > 0 && n3.f.aQ(A2.qF(), n3.x), n3.aN();
        }
      },
      dC(e4) {
        var t3;
        this.d.K(), t3 = this.e, t3.a.a & 30 || t3.R(e4);
      },
      $ieS: 1
    }, E2.ii.prototype = {
      $1(e4) {
        try {
          this.a.dA(e4);
        } catch (e5) {
          if (E2.M(e5) instanceof E2.bA) this.a.aN();
          else throw e5;
        }
      },
      $S: 11
    }, E2.ij.prototype = {
      $0() {
        var e4 = this.a;
        e4.ch.b & 4 ? e4.d.ar() : e4.aN();
      },
      $S: 2
    }, E2.ig.prototype = {
      $1$seen(e4) {
        var t3 = this.a;
        e4 ? (t3.f.a2(A2.qw(), E2.a(["0x" + O2.a.aq(O2.c.av(t3.as, 16), 8, "0")], N2.M), t3.x - 8), t3.r = 4294967295) : t3.r = t3.as;
      },
      $0() {
        return this.$1$seen(null);
      },
      $S: 76
    }, E2.ih.prototype = {
      $1(e4) {
        var t3 = this.a, n3 = e4 == null ? null : e4.b;
        t3.e.a3(new E2.au("model/gltf-binary", n3, t3.cx));
      },
      $S: 77
    }, E2.au.prototype = {}, E2.im.prototype = {
      $0() {
        return this.a.b.aZ();
      },
      $S: 1
    }, E2.io.prototype = {
      $0() {
        return this.a.b.ar();
      },
      $S: 1
    }, E2.il.prototype = {
      $0() {
        return this.a.b.K();
      },
      $S: 78
    }, E2.ip.prototype = {
      $1(e4) {
        var t3, n3, r3, i3, a3 = this, o3 = a3.a;
        if (!o3.a) {
          if (t3 = D2.V(e4), t3.gA(e4)) {
            o3.b.K(), a3.b.a7(), a3.c.R(O2.a8);
            return;
          }
          if (n3 = t3.i(e4, 0), n3 === 103) t3 = a3.b, a3.c.a3(E2.oA(new E2.aj(t3, E2.A(t3).h("aj<1>")), a3.d)), o3.a = true;
          else if (t3 = n3 === 123 || n3 === 9 || n3 === 32 || n3 === 10 || n3 === 13 || n3 === 239, r3 = a3.c, i3 = a3.b, t3) r3.a3(E2.oB(new E2.aj(i3, E2.A(i3).h("aj<1>")), a3.d)), o3.a = true;
          else {
            o3.b.K(), i3.a7(), r3.R(O2.a8);
            return;
          }
        }
        a3.b.C(0, e4);
      },
      $S: 11
    }, E2.cT.prototype = {
      c0() {
        var e4 = this, t3 = E2.a([], N2.M), n3 = new E2.ac("");
        return e4.d = new E2.mu(new E2.fV(false), new E2.mh(O2.ab.gcF().a, new E2.fO(new E2.ik(e4), t3, N2.cy), n3), n3), e4.b = e4.a.bT(e4.gdF(), e4.gdH(), e4.gdJ()), e4.c.a;
      },
      dG(e4) {
        var t3, n3, r3 = this;
        r3.b.aZ(), r3.f &&= (n3 = D2.V(e4), n3.ga8(e4) && n3.i(e4, 0) === 239 && r3.e.aE(A2.h3(), E2.a(["BOM found at the beginning of UTF-8 stream."], N2.M), true), false);
        try {
          r3.d.dX(e4, 0, D2.a3(e4), false), r3.b.ar();
        } catch (e5) {
          if (n3 = E2.M(e5), n3 instanceof E2.aK) t3 = n3, r3.e.aE(A2.h3(), E2.a([t3], N2.M), true), r3.b.K(), r3.c.bd();
          else throw e5;
        }
      },
      dK(e4) {
        var t3;
        this.b.K(), t3 = this.c, t3.a.a & 30 || t3.R(e4);
      },
      dI() {
        var e4, t3, n3 = this;
        try {
          n3.d.a7();
        } catch (r3) {
          if (t3 = E2.M(r3), t3 instanceof E2.aK) e4 = t3, n3.e.aE(A2.h3(), E2.a([e4], N2.M), true), n3.b.K(), n3.c.bd();
          else throw r3;
        }
      },
      $ieS: 1
    }, E2.ik.prototype = {
      $1(e4) {
        var t3, n3, r3 = e4[0];
        if (N2.t.b(r3)) try {
          n3 = this.a, t3 = E2.oC(r3, n3.e), n3.c.a3(new E2.au("model/gltf+json", t3, null));
        } catch (e5) {
          if (E2.M(e5) instanceof E2.bA) n3 = this.a, n3.b.K(), n3.c.bd();
          else throw e5;
        }
        else n3 = this.a, n3.e.aE(A2.a2(), E2.a([r3, "object"], N2.M), true), n3.b.K(), n3.c.bd();
      },
      $S: 80
    }, E2.dv.prototype = {
      k(e4) {
        return "Invalid data: could not detect glTF format.";
      },
      $ia8: 1
    }, E2.mS.prototype = {
      $2(e4, t3) {
        var n3, r3;
        this.a.$1(e4), t3 = E2.mM(t3), n3 = E2.aI(t3) && t3 >= 0, r3 = this.b, n3 ? r3.m(0, e4, t3) : (r3.m(0, e4, -1), this.c.n(A2.h2(), e4));
      },
      $S: 3
    }, E2.mT.prototype = {
      $2(e4, t3) {
        var n3, r3;
        this.a.$1(e4), t3 = E2.mM(t3), n3 = E2.aI(t3) && t3 >= 0, r3 = this.b, n3 ? r3.m(0, e4, t3) : (r3.m(0, e4, -1), this.c.n(A2.h2(), e4));
      },
      $S: 3
    }, E2.mU.prototype = {
      $1(e4) {
        return e4.ak(0, N2.X, N2.e);
      },
      $S: 81
    }, E2.mQ.prototype = {
      $0() {
        return E2.a([], N2.bH);
      },
      $S: 82
    }, E2.F.prototype = {
      i(e4, t3) {
        return t3 == null || t3 < 0 || t3 >= this.a.length ? null : this.a[t3];
      },
      m(e4, t3, n3) {
        this.a[t3] = n3;
      },
      gj(e4) {
        return this.b;
      },
      sj(e4, t3) {
        throw E2.d(E2.ad("Changing length is not supported"));
      },
      k(e4) {
        return E2.iI(this.a, "[", "]");
      },
      a4(e4) {
        var t3, n3, r3, i3;
        for (t3 = this.b, n3 = this.a, r3 = 0; r3 < t3; ++r3) i3 = n3[r3], i3 != null && e4.$2(r3, i3);
      }
    }, E2.a1.prototype = { aF(e4) {
      return true;
    } }, E2.fv.prototype = { a0(e4, t3, n3, r3) {
      var i3 = this, a3 = i3.c, o3 = a3 == null ? r3 : a3.$1(r3);
      return a3 = i3.a + o3 * o3, i3.a = a3, n3 === 2 && (Math.abs(Math.sqrt(a3) - 1) > 674e-5 && e4.l(A2.o0(), E2.a([
        t3 - 2,
        t3,
        Math.sqrt(i3.a)
      ], N2.M), i3.b), i3.a = 0), true;
    } }, E2.fw.prototype = { a0(e4, t3, n3, r3) {
      var i3 = this, a3 = i3.c, o3 = a3 == null ? r3 : a3.$1(r3);
      return n3 === 3 ? o3 !== 1 && o3 !== -1 && e4.l(A2.qc(), E2.a([
        t3 - 3,
        t3,
        o3
      ], N2.M), i3.b) : (a3 = i3.a + o3 * o3, i3.a = a3, n3 === 2 && (Math.abs(Math.sqrt(a3) - 1) > 674e-5 && e4.l(A2.o0(), E2.a([
        t3 - 2,
        t3,
        Math.sqrt(i3.a)
      ], N2.M), i3.b), i3.a = 0)), true;
    } }, E2.eK.prototype = { a0(e4, t3, n3, r3) {
      return (1 < r3 || 0 > r3) && e4.l(A2.qg(), E2.a([t3, r3], N2.M), this.a), true;
    } }, E2.lF.prototype = {
      bn() {
        var e4, t3, n3, r3, i3, a3 = this, o3 = N2.X, s3 = N2._, c3 = E2.a9(o3, s3), l3 = a3.a;
        return l3 != null && c3.m(0, "uri", l3.k(0)), l3 = a3.c, e4 = l3 == null, (e4 ? null : l3.a) != null && c3.m(0, "mimeType", e4 ? null : l3.a), c3.m(0, "validatorVersion", "2.0.0-dev.3.10"), a3.d && c3.m(0, "validatedAt", new E2.dp(Date.now(), false).ew().ev()), l3 = a3.b, t3 = l3.cy, n3 = E2.a9(o3, s3), r3 = E2.a([
          0,
          0,
          0,
          0
        ], N2.V), i3 = E2.oJ(t3.length, new E2.lI(t3, r3), false, N2.t), n3.m(0, "numErrors", r3[0]), n3.m(0, "numWarnings", r3[1]), n3.m(0, "numInfos", r3[2]), n3.m(0, "numHints", r3[3]), n3.m(0, "messages", i3), n3.m(0, "truncated", l3.y), c3.m(0, "issues", n3), l3 = a3.dz(), l3 != null && c3.m(0, "info", l3), c3;
      },
      dz() {
        var e4, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3 = null, d3 = this.c, f3 = d3 == null ? u3 : d3.b;
        if (d3 = f3 == null ? u3 : f3.w, (d3 == null ? u3 : d3.f) == null) return u3;
        for (e4 = E2.a9(N2.X, N2._), d3 = f3.w, e4.m(0, "version", d3.f), t3 = d3.r, t3 != null && e4.m(0, "minVersion", t3), d3 = d3.e, d3 != null && e4.m(0, "generator", d3), d3 = f3.d, t3 = D2.V(d3), t3.ga8(d3) && (d3 = t3.c3(d3), e4.m(0, "extensionsUsed", E2.bc(d3, false, E2.A(d3).c))), d3 = f3.e, t3 = D2.V(d3), t3.ga8(d3) && (d3 = t3.c3(d3), e4.m(0, "extensionsRequired", E2.bc(d3, false, E2.A(d3).c))), d3 = this.b, t3 = d3.CW, t3.gA(t3) || e4.m(0, "resources", d3.CW), e4.m(0, "animationCount", f3.r.b), e4.m(0, "materialCount", f3.as.b), d3 = f3.at, e4.m(0, "hasMorphTargets", d3.aR(d3, new E2.lH())), t3 = f3.cx, e4.m(0, "hasSkins", !t3.gA(t3)), t3 = f3.cy, e4.m(0, "hasTextures", !t3.gA(t3)), e4.m(0, "hasDefaultScene", f3.ch != null), d3 = new E2.aa(d3, d3.gj(d3), d3.$ti.h("aa<p.E>")), n3 = 0, r3 = 0, i3 = 0, a3 = 0, o3 = 0, s3 = 0; d3.q(); ) if (t3 = d3.d.w, t3 != null) for (n3 += t3.b, t3 = new E2.aa(t3, t3.gj(t3), t3.$ti.h("aa<p.E>")); t3.q(); ) c3 = t3.d, l3 = c3.CW, l3 !== -1 && (o3 += l3), s3 += c3.gex(), r3 = Math.max(r3, c3.ay.a), i3 = Math.max(i3, c3.ax), a3 = Math.max(a3, c3.as * 4);
        return e4.m(0, "drawCallCount", n3), e4.m(0, "totalVertexCount", o3), e4.m(0, "totalTriangleCount", s3), e4.m(0, "maxUVs", i3), e4.m(0, "maxInfluences", a3), e4.m(0, "maxAttributes", r3), e4;
      }
    }, E2.lI.prototype = {
      $1(e4) {
        var t3, n3 = this.a[e4], r3 = n3.gc9().a, i3 = this.b;
        return i3[r3] = i3[r3] + 1, t3 = E2.nu([
          "code",
          n3.a.b,
          "message",
          n3.gbl(),
          "severity",
          n3.gc9().a
        ], N2.X, N2._), r3 = n3.c, r3 == null ? (r3 = n3.d, r3 != null && t3.m(0, "offset", r3)) : t3.m(0, "pointer", r3), t3;
      },
      $S: 83
    }, E2.lH.prototype = {
      $1(e4) {
        var t3 = e4.w;
        return t3 != null && t3.aR(t3, new E2.lG());
      },
      $S: 84
    }, E2.lG.prototype = {
      $1(e4) {
        return e4.cx != null;
      },
      $S: 5
    }, E2.f2.prototype = {
      k(e4) {
        return "[0] " + this.ag(0).k(0) + "\n[1] " + this.ag(1).k(0) + "\n[2] " + this.ag(2).k(0) + "\n";
      },
      O(e4, t3) {
        var n3, r3, i3;
        return t3 != null && (t3 instanceof E2.f2 ? (n3 = this.a, r3 = n3[0], i3 = t3.a, n3 = r3 === i3[0] && n3[1] === i3[1] && n3[2] === i3[2] && n3[3] === i3[3] && n3[4] === i3[4] && n3[5] === i3[5] && n3[6] === i3[6] && n3[7] === i3[7] && n3[8] === i3[8]) : n3 = false, n3);
      },
      gE(e4) {
        return E2.k6(this.a);
      },
      ag(e4) {
        var t3 = /* @__PURE__ */ new Float32Array(3), n3 = this.a;
        return t3[0] = n3[e4], t3[1] = n3[3 + e4], t3[2] = n3[6 + e4], new E2.cE(t3);
      }
    }, E2.cZ.prototype = {
      k(e4) {
        var t3 = this;
        return "[0] " + t3.ag(0).k(0) + "\n[1] " + t3.ag(1).k(0) + "\n[2] " + t3.ag(2).k(0) + "\n[3] " + t3.ag(3).k(0) + "\n";
      },
      O(e4, t3) {
        var n3, r3, i3;
        return t3 != null && (t3 instanceof E2.cZ ? (n3 = this.a, r3 = n3[0], i3 = t3.a, n3 = r3 === i3[0] && n3[1] === i3[1] && n3[2] === i3[2] && n3[3] === i3[3] && n3[4] === i3[4] && n3[5] === i3[5] && n3[6] === i3[6] && n3[7] === i3[7] && n3[8] === i3[8] && n3[9] === i3[9] && n3[10] === i3[10] && n3[11] === i3[11] && n3[12] === i3[12] && n3[13] === i3[13] && n3[14] === i3[14] && n3[15] === i3[15]) : n3 = false, n3);
      },
      gE(e4) {
        return E2.k6(this.a);
      },
      ag(e4) {
        var t3 = /* @__PURE__ */ new Float32Array(4), n3 = this.a;
        return t3[0] = n3[e4], t3[1] = n3[4 + e4], t3[2] = n3[8 + e4], t3[3] = n3[12 + e4], new E2.fA(t3);
      },
      cG() {
        var e4 = this.a, t3 = e4[0], n3 = e4[5], r3 = e4[1], i3 = e4[4], a3 = t3 * n3 - r3 * i3, o3 = e4[6], s3 = e4[2], c3 = t3 * o3 - s3 * i3, l3 = e4[7], u3 = e4[3], d3 = t3 * l3 - u3 * i3, f3 = r3 * o3 - s3 * n3, p3 = r3 * l3 - u3 * n3, m3 = s3 * l3 - u3 * o3;
        return o3 = e4[8], u3 = e4[9], l3 = e4[10], s3 = e4[11], -(u3 * m3 - l3 * p3 + s3 * f3) * e4[12] + (o3 * m3 - l3 * d3 + s3 * c3) * e4[13] - (o3 * p3 - u3 * d3 + s3 * a3) * e4[14] + (o3 * f3 - u3 * c3 + l3 * a3) * e4[15];
      },
      cL() {
        var e4 = this.a, t3 = 0 + Math.abs(e4[0]) + Math.abs(e4[1]) + Math.abs(e4[2]) + Math.abs(e4[3]), n3 = t3 > 0 ? t3 : 0;
        return t3 = 0 + Math.abs(e4[4]) + Math.abs(e4[5]) + Math.abs(e4[6]) + Math.abs(e4[7]), t3 > n3 && (n3 = t3), t3 = 0 + Math.abs(e4[8]) + Math.abs(e4[9]) + Math.abs(e4[10]) + Math.abs(e4[11]), t3 > n3 && (n3 = t3), t3 = 0 + Math.abs(e4[12]) + Math.abs(e4[13]) + Math.abs(e4[14]) + Math.abs(e4[15]), t3 > n3 ? t3 : n3;
      },
      cP() {
        var e4 = this.a;
        return e4[0] === 1 && e4[1] === 0 && e4[2] === 0 && e4[3] === 0 && e4[4] === 0 && e4[5] === 1 && e4[6] === 0 && e4[7] === 0 && e4[8] === 0 && e4[9] === 0 && e4[10] === 1 && e4[11] === 0 && e4[12] === 0 && e4[13] === 0 && e4[14] === 0 && e4[15] === 1;
      }
    }, E2.fl.prototype = {
      gaW() {
        var e4 = this.a, t3 = e4[0], n3 = e4[1], r3 = e4[2], i3 = e4[3];
        return t3 * t3 + n3 * n3 + r3 * r3 + i3 * i3;
      },
      gj(e4) {
        var t3 = this.a, n3 = t3[0], r3 = t3[1], i3 = t3[2], a3 = t3[3];
        return Math.sqrt(n3 * n3 + r3 * r3 + i3 * i3 + a3 * a3);
      },
      k(e4) {
        var t3 = this.a;
        return E2.b(t3[0]) + ", " + E2.b(t3[1]) + ", " + E2.b(t3[2]) + " @ " + E2.b(t3[3]);
      }
    }, E2.cE.prototype = {
      bt(e4, t3, n3) {
        var r3 = this.a;
        r3[0] = e4, r3[1] = t3, r3[2] = n3;
      },
      k(e4) {
        var t3 = this.a;
        return "[" + E2.b(t3[0]) + "," + E2.b(t3[1]) + "," + E2.b(t3[2]) + "]";
      },
      O(e4, t3) {
        var n3, r3, i3;
        return t3 != null && (t3 instanceof E2.cE ? (n3 = this.a, r3 = n3[0], i3 = t3.a, n3 = r3 === i3[0] && n3[1] === i3[1] && n3[2] === i3[2]) : n3 = false, n3);
      },
      gE(e4) {
        return E2.k6(this.a);
      },
      gj(e4) {
        var t3 = this.a, n3 = t3[0], r3 = t3[1];
        return t3 = t3[2], Math.sqrt(n3 * n3 + r3 * r3 + t3 * t3);
      },
      gaW() {
        var e4 = this.a, t3 = e4[0], n3 = e4[1];
        return e4 = e4[2], t3 * t3 + n3 * n3 + e4 * e4;
      }
    }, E2.fA.prototype = {
      k(e4) {
        var t3 = this.a;
        return E2.b(t3[0]) + "," + E2.b(t3[1]) + "," + E2.b(t3[2]) + "," + E2.b(t3[3]);
      },
      O(e4, t3) {
        var n3, r3, i3;
        return t3 != null && (t3 instanceof E2.fA ? (n3 = this.a, r3 = n3[0], i3 = t3.a, n3 = r3 === i3[0] && n3[1] === i3[1] && n3[2] === i3[2] && n3[3] === i3[3]) : n3 = false, n3);
      },
      gE(e4) {
        return E2.k6(this.a);
      },
      gj(e4) {
        var t3 = this.a, n3 = t3[0], r3 = t3[1], i3 = t3[2];
        return t3 = t3[3], Math.sqrt(n3 * n3 + r3 * r3 + i3 * i3 + t3 * t3);
      }
    }, E2.bf.prototype = {}, E2.hX.prototype = {}, E2.d8.prototype = {}, E2.nb.prototype = {
      $3(e4, t3, n3) {
        return n3.$1(D2.as(e4));
      },
      $S: 85
    }, E2.n7.prototype = {
      $2(e4, n3) {
        return new t2.Promise(E2.cK(new E2.n6(e4, n3, this.a)), N2._);
      },
      $S: 86
    }, E2.n6.prototype = {
      $2(e4, t3) {
        E2.h_(this.a, this.b).au(0, new E2.n3(e4), new E2.n4(this.c, t3), N2.P);
      },
      $S: 24
    }, E2.n3.prototype = {
      $1(e4) {
        this.a.$1(E2.nR(e4));
      },
      $S: 25
    }, E2.n4.prototype = {
      $2(e4, t3) {
        return this.a.$3(e4, t3, this.b);
      },
      $S: 26
    }, E2.n8.prototype = {
      $2(e4, n3) {
        return new t2.Promise(E2.cK(new E2.n5(e4, n3, this.a)), N2._);
      },
      $S: 90
    }, E2.n5.prototype = {
      $2(e4, t3) {
        E2.nV(this.a, this.b).au(0, new E2.n1(e4), new E2.n2(this.c, t3), N2.P);
      },
      $S: 24
    }, E2.n1.prototype = {
      $1(e4) {
        this.a.$1(E2.nR(e4));
      },
      $S: 25
    }, E2.n2.prototype = {
      $2(e4, t3) {
        return this.a.$3(e4, t3, this.b);
      },
      $S: 26
    }, E2.n9.prototype = {
      $0() {
        return "2.0.0-dev.3.10";
      },
      $S: 91
    }, E2.na.prototype = {
      $0() {
        return E2.nR(E2.u4());
      },
      $S: 7
    }, E2.mG.prototype = {
      $1(e4) {
        var t3 = new E2.C(A2.B, N2.q), n3 = new E2.ay(t3, N2.as), r3 = this.a.$1(D2.as(e4));
        return (r3 == null ? null : D2.ty(r3)) == null ? n3.R(new E2.at(false, null, null, "options.externalResourceFunction: Function must return a Promise.")) : D2.tI(r3, E2.cK(new E2.mH(n3)), E2.cK(new E2.mI(n3))), t3;
      },
      $S: 92
    }, E2.mH.prototype = {
      $1(e4) {
        var t3 = this.a;
        N2.a.b(e4) ? t3.a3(e4) : t3.R(new E2.at(false, null, null, "options.externalResourceFunction: Promise must be fulfilled with Uint8Array or rejected."));
      },
      $S: 23
    }, E2.mI.prototype = {
      $1(e4) {
        return this.a.R(new E2.ff(D2.as(e4)));
      },
      $S: 12
    }, E2.mE.prototype = {
      $1(e4) {
        var t3, n3, r3, i3 = this;
        return i3.a.dx && e4 == null ? i3.b.c : (i3.c == null ? (n3 = i3.e, E2.bU(n3, "error", N2.K), A2.B, O2.i, r3 = E2.eI(n3), t3 = new E2.C(A2.B, N2.q), t3.b5(n3, r3)) : t3 = i3.d.$1(e4), t3);
      },
      $0() {
        return this.$1(null);
      },
      $C: "$1",
      $R: 0,
      $D() {
        return [null];
      },
      $S: 93
    }, E2.mF.prototype = {
      $1(e4) {
        var t3, n3, r3, i3, a3 = null;
        return this.a == null ? (t3 = this.c, E2.bU(t3, "error", N2.K), n3 = N2.f1, r3 = new E2.aZ(a3, a3, a3, a3, n3), i3 = E2.eI(t3), r3.b3(t3, i3), r3.aK(), t3 = new E2.aj(r3, n3.h("aj<1>"))) : (t3 = this.b.$1(e4), t3 = E2.v9(t3, E2.ak(t3).c)), t3;
      },
      $S: 94
    }, E2.ff.prototype = {
      k(e4) {
        return "Node Exception: " + E2.b(this.a);
      },
      $ia8: 1
    }, (function() {
      var e4 = D2.cV.prototype;
      e4.d6 = e4.bm, e4 = D2.aN.prototype, e4.da = e4.k, e4 = E2.aC.prototype, e4.d7 = e4.cM, e4.d8 = e4.cN, e4.d9 = e4.cO, e4 = E2.p.prototype, e4.dc = e4.a5, e4 = E2.ef.prototype, e4.de = e4.a7, e4 = E2.bj.prototype, e4.dd = e4.p;
    })(), (function() {
      var e4 = T2._static_1, t3 = T2._static_0, n3 = T2._static_2, r3 = T2._instance_2u, i3 = T2._instance_0u, a3 = T2.installInstanceTearOff, o3 = T2._instance_1i, s3 = T2._instance_1u;
      e4(E2, "wt", "ub", 143), e4(E2, "wP", "vh", 13), e4(E2, "wQ", "vi", 13), e4(E2, "wR", "vj", 13), t3(E2, "pK", "wC", 1), n3(E2, "wS", "ww", 16), r3(E2.C.prototype, "gdq", "aA", 16), i3(E2.da.prototype, "gdZ", "a7", 56);
      var c3;
      i3(c3 = E2.dX.prototype, "gcq", "b9", 1), i3(c3, "gcr", "ba", 1), a3(c3 = E2.dT.prototype, "geg", 0, 0, null, ["$1", "$0"], ["cW", "aZ"], 60, 0, 0), i3(c3, "gej", "ar", 1), i3(c3, "gcq", "b9", 1), i3(c3, "gcr", "ba", 1), n3(E2, "wZ", "w7", 97), o3(E2.b_.prototype, "gcC", "G", 14), n3(E2, "wL", "tN", 98), n3(E2, "wK", "tM", 99), n3(E2, "wI", "tK", 100), n3(E2, "wJ", "tL", 101), s3(E2.a4.prototype, "gbX", "ef", 29), n3(E2, "wN", "tP", 102), n3(E2, "wM", "tO", 103), n3(E2, "wO", "tQ", 104), n3(E2, "wT", "tU", 105), n3(E2, "wU", "tT", 106), n3(E2, "wX", "tX", 107), n3(E2, "wV", "tV", 108), n3(E2, "wW", "tW", 109), n3(E2, "xc", "ug", 110), n3(E2, "xF", "uL", 111), n3(E2, "xH", "uX", 112), n3(E2, "xG", "uW", 113), n3(E2, "pV", "uV", 114), n3(E2, "ao", "vb", 115), n3(E2, "xI", "uP", 116), n3(E2, "xJ", "uU", 117), n3(E2, "xK", "v6", 118), n3(E2, "xL", "v7", 119), n3(E2, "xM", "v8", 120), n3(E2, "xO", "vc", 121), e4(E2, "dj", "wy", 27), e4(E2, "pM", "wu", 27), e4(E2, "x3", "we", 6), n3(E2, "x2", "ua", 124), n3(E2, "xj", "un", 125), e4(E2, "xk", "wf", 6), n3(E2, "xl", "uo", 126), n3(E2, "xm", "up", 127), n3(E2, "xn", "uq", 128), n3(E2, "xo", "ur", 129), n3(E2, "xp", "us", 130), n3(E2, "xq", "ut", 131), n3(E2, "xr", "uu", 132), n3(E2, "xs", "uv", 133), n3(E2, "xt", "uw", 134), n3(E2, "xu", "ux", 135), n3(E2, "xv", "uy", 136), n3(E2, "xw", "uz", 137), n3(E2, "xx", "uA", 138), n3(E2, "xy", "uB", 139), n3(E2, "ul", "uC", 140), n3(E2, "um", "uD", 141), n3(E2, "xz", "uE", 142), n3(E2, "xB", "uF", 95), i3(c3 = E2.dt.prototype, "gdB", "cm", 1), s3(c3, "gcn", "dC", 12), s3(c3 = E2.cT.prototype, "gdF", "dG", 79), s3(c3, "gdJ", "dK", 12), i3(c3, "gdH", "dI", 1), e4(E2, "xA", "wg", 6);
    })(), (function() {
      var e4 = T2.mixin, t3 = T2.inherit, n3 = T2.inheritMany;
      t3(E2.c, null), n3(E2.c, [
        E2.ns,
        D2.cV,
        D2.b4,
        E2.j,
        E2.dm,
        E2.I,
        E2.c7,
        E2.H,
        E2.e6,
        E2.aa,
        E2.P,
        E2.dq,
        E2.ds,
        E2.fy,
        E2.d3,
        E2.dC,
        E2.cQ,
        E2.iJ,
        E2.lt,
        E2.fh,
        E2.dr,
        E2.ed,
        E2.mm,
        E2.jN,
        E2.cx,
        E2.iK,
        E2.mk,
        E2.aF,
        E2.fK,
        E2.eh,
        E2.mr,
        E2.fD,
        E2.d7,
        E2.aH,
        E2.eH,
        E2.fG,
        E2.bN,
        E2.C,
        E2.fE,
        E2.bi,
        E2.fr,
        E2.da,
        E2.fS,
        E2.fF,
        E2.dT,
        E2.fI,
        E2.m1,
        E2.eb,
        E2.fQ,
        E2.mw,
        E2.e3,
        E2.eq,
        E2.mj,
        E2.cH,
        E2.p,
        E2.fU,
        E2.dM,
        E2.ls,
        E2.eN,
        E2.lZ,
        E2.eJ,
        E2.fV,
        E2.dp,
        E2.m2,
        E2.fi,
        E2.dO,
        E2.e_,
        E2.aK,
        E2.cY,
        E2.l,
        E2.fR,
        E2.ac,
        E2.en,
        E2.lv,
        E2.fP,
        E2.fL,
        E2.a1,
        E2.m,
        E2.c2,
        E2.c1,
        E2.y,
        E2.lE,
        E2.i,
        E2.bA,
        E2.cd,
        E2.iB,
        E2.dS,
        E2.dR,
        E2.aL,
        E2.fn,
        E2.kb,
        E2.eX,
        E2.iH,
        E2.cW,
        E2.L,
        E2.O,
        E2.cb,
        E2.cw,
        E2.fo,
        E2.dt,
        E2.au,
        E2.cT,
        E2.dv,
        E2.lF,
        E2.f2,
        E2.cZ,
        E2.fl,
        E2.cE,
        E2.fA,
        E2.ff
      ]), n3(D2.cV, [
        D2.dx,
        D2.dz,
        D2.f_,
        D2.D,
        D2.ce,
        D2.bB,
        E2.dF
      ]), t3(D2.aN, D2.f_), n3(D2.aN, [
        D2.fj,
        D2.bL,
        D2.b9,
        E2.bf,
        E2.hX,
        E2.d8
      ]), t3(D2.iL, D2.D), n3(D2.ce, [D2.dy, D2.eZ]), n3(E2.j, [
        E2.bM,
        E2.q,
        E2.bd,
        E2.lK,
        E2.bh,
        E2.dW,
        E2.dw
      ]), n3(E2.bM, [E2.c5, E2.ep]), t3(E2.dZ, E2.c5), t3(E2.dU, E2.ep), t3(E2.b5, E2.dU), t3(E2.dB, E2.I), n3(E2.dB, [
        E2.c6,
        E2.aC,
        E2.e1,
        E2.fM
      ]), n3(E2.c7, [
        E2.eM,
        E2.eL,
        E2.hY,
        E2.ft,
        E2.iP,
        E2.mX,
        E2.mZ,
        E2.lW,
        E2.lV,
        E2.mx,
        E2.m6,
        E2.me,
        E2.ln,
        E2.lp,
        E2.mi,
        E2.jP,
        E2.mC,
        E2.mD,
        E2.mz,
        E2.lS,
        E2.lT,
        E2.lP,
        E2.lQ,
        E2.lM,
        E2.lN,
        E2.ix,
        E2.iy,
        E2.iq,
        E2.iz,
        E2.jV,
        E2.jS,
        E2.jT,
        E2.jU,
        E2.jZ,
        E2.k3,
        E2.k4,
        E2.k5,
        E2.ke,
        E2.lm,
        E2.hh,
        E2.hi,
        E2.hl,
        E2.hj,
        E2.iC,
        E2.iE,
        E2.iO,
        E2.iN,
        E2.kc,
        E2.kd,
        E2.nf,
        E2.mL,
        E2.hL,
        E2.hM,
        E2.hE,
        E2.hD,
        E2.ht,
        E2.hs,
        E2.hI,
        E2.hz,
        E2.hr,
        E2.hF,
        E2.hx,
        E2.hu,
        E2.hw,
        E2.hv,
        E2.hp,
        E2.hq,
        E2.hH,
        E2.hG,
        E2.hy,
        E2.hO,
        E2.hQ,
        E2.hT,
        E2.hU,
        E2.hR,
        E2.hS,
        E2.hP,
        E2.hV,
        E2.hN,
        E2.hB,
        E2.hA,
        E2.hJ,
        E2.hK,
        E2.hC,
        E2.iG,
        E2.kh,
        E2.ki,
        E2.kg,
        E2.kk,
        E2.kl,
        E2.km,
        E2.kj,
        E2.kn,
        E2.ko,
        E2.kp,
        E2.ku,
        E2.kv,
        E2.kt,
        E2.kq,
        E2.kr,
        E2.ks,
        E2.lj,
        E2.lk,
        E2.l4,
        E2.kL,
        E2.ky,
        E2.kz,
        E2.kx,
        E2.kA,
        E2.kB,
        E2.kC,
        E2.kE,
        E2.kD,
        E2.kF,
        E2.kG,
        E2.kH,
        E2.kI,
        E2.kX,
        E2.l_,
        E2.l3,
        E2.l1,
        E2.kZ,
        E2.l2,
        E2.l0,
        E2.kY,
        E2.l8,
        E2.l6,
        E2.l9,
        E2.lg,
        E2.ll,
        E2.lf,
        E2.kK,
        E2.l7,
        E2.lc,
        E2.lb,
        E2.la,
        E2.lh,
        E2.li,
        E2.le,
        E2.l5,
        E2.ld,
        E2.kJ,
        E2.kM,
        E2.kN,
        E2.kO,
        E2.kP,
        E2.kQ,
        E2.kR,
        E2.kS,
        E2.kW,
        E2.kV,
        E2.kT,
        E2.kU,
        E2.j0,
        E2.iZ,
        E2.j_,
        E2.j1,
        E2.j4,
        E2.j2,
        E2.j3,
        E2.j8,
        E2.j6,
        E2.ja,
        E2.j7,
        E2.j9,
        E2.j5,
        E2.jb,
        E2.je,
        E2.jd,
        E2.jc,
        E2.jf,
        E2.jg,
        E2.jh,
        E2.jl,
        E2.jm,
        E2.ju,
        E2.jk,
        E2.jj,
        E2.jq,
        E2.jp,
        E2.jo,
        E2.jv,
        E2.jt,
        E2.jn,
        E2.jw,
        E2.js,
        E2.jr,
        E2.jx,
        E2.jy,
        E2.jB,
        E2.jz,
        E2.jA,
        E2.jC,
        E2.jE,
        E2.jD,
        E2.jF,
        E2.jG,
        E2.jH,
        E2.jI,
        E2.jJ,
        E2.jM,
        E2.jL,
        E2.jK,
        E2.ji,
        E2.i5,
        E2.i6,
        E2.i8,
        E2.i_,
        E2.i7,
        E2.i0,
        E2.i3,
        E2.i2,
        E2.i1,
        E2.ib,
        E2.ia,
        E2.ic,
        E2.id,
        E2.i9,
        E2.ie,
        E2.i4,
        E2.iU,
        E2.iX,
        E2.ii,
        E2.ig,
        E2.ih,
        E2.ip,
        E2.ik,
        E2.mU,
        E2.lI,
        E2.lH,
        E2.lG,
        E2.nb,
        E2.n3,
        E2.n1,
        E2.mG,
        E2.mH,
        E2.mI,
        E2.mE,
        E2.mF
      ]), n3(E2.eM, [
        E2.hf,
        E2.k9,
        E2.mY,
        E2.my,
        E2.mN,
        E2.m7,
        E2.lo,
        E2.jO,
        E2.k2,
        E2.lx,
        E2.ly,
        E2.lz,
        E2.mB,
        E2.h5,
        E2.h6,
        E2.iu,
        E2.iv,
        E2.is,
        E2.it,
        E2.iA,
        E2.jR,
        E2.k1,
        E2.k0,
        E2.jX,
        E2.jY,
        E2.k_,
        E2.hn,
        E2.ne,
        E2.ng,
        E2.iS,
        E2.iT,
        E2.iW,
        E2.iV,
        E2.mS,
        E2.mT,
        E2.n7,
        E2.n6,
        E2.n4,
        E2.n8,
        E2.n5,
        E2.n2
      ]), n3(E2.H, [
        E2.f1,
        E2.fm,
        E2.dI,
        E2.aG,
        E2.f0,
        E2.fx,
        E2.fp,
        E2.fJ,
        E2.eF,
        E2.fg,
        E2.at,
        E2.dH,
        E2.fz,
        E2.fu,
        E2.bJ,
        E2.eO,
        E2.eQ
      ]), t3(E2.dA, E2.e6), n3(E2.dA, [E2.d4, E2.F]), n3(E2.d4, [E2.c8, E2.aX]), n3(E2.eL, [
        E2.nd,
        E2.lX,
        E2.lY,
        E2.ms,
        E2.m3,
        E2.ma,
        E2.m8,
        E2.m5,
        E2.m9,
        E2.m4,
        E2.md,
        E2.mc,
        E2.mb,
        E2.lq,
        E2.mq,
        E2.mp,
        E2.m0,
        E2.m_,
        E2.ml,
        E2.mK,
        E2.mo,
        E2.lD,
        E2.lC,
        E2.lR,
        E2.lU,
        E2.lL,
        E2.lO,
        E2.iw,
        E2.ir,
        E2.jW,
        E2.hg,
        E2.hm,
        E2.hk,
        E2.iD,
        E2.k8,
        E2.ij,
        E2.im,
        E2.io,
        E2.il,
        E2.mQ,
        E2.n9,
        E2.na
      ]), n3(E2.q, [
        E2.ah,
        E2.b7,
        E2.aO,
        E2.e2
      ]), n3(E2.ah, [
        E2.dP,
        E2.ab,
        E2.fN,
        E2.e0
      ]), t3(E2.c9, E2.bd), n3(E2.P, [
        E2.dD,
        E2.cF,
        E2.dN
      ]), t3(E2.cR, E2.bh), t3(E2.em, E2.dC), t3(E2.bm, E2.em), t3(E2.dn, E2.bm), n3(E2.cQ, [E2.aJ, E2.X]), t3(E2.dJ, E2.aG), n3(E2.ft, [E2.fq, E2.cP]), t3(E2.d_, E2.dF), n3(E2.d_, [E2.e7, E2.e9]), t3(E2.e8, E2.e7), t3(E2.dE, E2.e8), t3(E2.ea, E2.e9), t3(E2.aw, E2.ea), n3(E2.dE, [E2.f8, E2.f9]), n3(E2.aw, [
        E2.fa,
        E2.fb,
        E2.fc,
        E2.fd,
        E2.fe,
        E2.dG,
        E2.cy
      ]), t3(E2.ei, E2.fJ), t3(E2.eg, E2.dw), t3(E2.ay, E2.fG), n3(E2.da, [E2.aZ, E2.db]), t3(E2.ee, E2.bi), t3(E2.aj, E2.ee), t3(E2.dX, E2.dT), n3(E2.fI, [E2.cG, E2.dY]), t3(E2.mn, E2.mw), t3(E2.e4, E2.e1), t3(E2.e5, E2.aC), t3(E2.ec, E2.eq), t3(E2.b_, E2.ec), t3(E2.lr, E2.ls), t3(E2.ef, E2.lr), t3(E2.mh, E2.ef), n3(E2.eN, [
        E2.ha,
        E2.hW,
        E2.iQ
      ]), t3(E2.eP, E2.fr), n3(E2.eP, [
        E2.hc,
        E2.hb,
        E2.iR,
        E2.lB
      ]), n3(E2.eJ, [E2.hd, E2.fO]), t3(E2.mu, E2.hd), t3(E2.lA, E2.hW), n3(E2.at, [E2.dL, E2.eV]), t3(E2.fH, E2.en), t3(E2.k, E2.fL), n3(E2.k, [
        E2.eR,
        E2.bZ,
        E2.c_,
        E2.c0,
        E2.b2,
        E2.bw,
        E2.b3,
        E2.bx,
        E2.c3,
        E2.c4,
        E2.du,
        E2.cB,
        E2.bj,
        E2.aE,
        E2.ca,
        E2.cf,
        E2.bC,
        E2.cg,
        E2.ch,
        E2.ci,
        E2.cj,
        E2.ck,
        E2.cl,
        E2.cm,
        E2.cn,
        E2.co,
        E2.cp,
        E2.cq,
        E2.cr,
        E2.cs,
        E2.bD,
        E2.ct,
        E2.bb,
        E2.cu,
        E2.cv
      ]), n3(E2.eR, [
        E2.a4,
        E2.bv,
        E2.aT,
        E2.by,
        E2.bz,
        E2.aU,
        E2.ai,
        E2.aV,
        E2.ap,
        E2.bF,
        E2.bG,
        E2.bI,
        E2.bK,
        E2.ba,
        E2.aM
      ]), n3(E2.a4, [E2.fC, E2.fB]), n3(E2.a1, [
        E2.eY,
        E2.f5,
        E2.f3,
        E2.f6,
        E2.f4,
        E2.eE,
        E2.dK,
        E2.eU,
        E2.eT,
        E2.fv,
        E2.fw,
        E2.eK
      ]), n3(E2.bj, [E2.cA, E2.cz]), n3(E2.m2, [
        E2.cU,
        E2.dV,
        E2.d5,
        E2.cc,
        E2.d9,
        E2.bH
      ]), n3(E2.iB, [
        E2.iM,
        E2.k7,
        E2.lJ
      ]), n3(E2.iH, [
        E2.ho,
        E2.iF,
        E2.kf,
        E2.kw,
        E2.iY,
        E2.hZ
      ]), e4(E2.d4, E2.fy), e4(E2.ep, E2.p), e4(E2.e7, E2.p), e4(E2.e8, E2.ds), e4(E2.e9, E2.p), e4(E2.ea, E2.ds), e4(E2.aZ, E2.fF), e4(E2.db, E2.fS), e4(E2.e6, E2.p), e4(E2.em, E2.fU), e4(E2.eq, E2.dM), e4(E2.fL, E2.m);
    })();
    var j2 = {
      typeUniverse: {
        eC: /* @__PURE__ */ new Map(),
        tR: {},
        eT: {},
        tPV: {},
        sEA: []
      },
      mangledGlobalNames: {
        f: "int",
        z: "double",
        N: "num",
        e: "String",
        S: "bool",
        l: "Null",
        o: "List"
      },
      mangledNames: {},
      types: /* @__PURE__ */ "e*(o<@>*).~().l().l(e*,c*).l(e*,f*).S*(aE*).~(i*).@().z*(f*).S*(f*).l(ap*,f*,f*).l(o<f*>*).~(c*).~(~()).S(c?).l(@).~(c,an).~(a6,e,f).j<f*>*().j<z*>*().l(f*,aE*).~(e*).S*(L*).l(c*).l(~(c*)*,aB*).l(h<e*,c*>*).~(c*,an*).e*(c*).~(k*,e*).z*(N*).@(@).j<f*>*(f*,f*,f*).f*(f*).@(@,e).~(@).j<z*>*(f*,f*,f*).l(f*,b3*).l(f*,b2*).F<0^*>*(e*,0^*(h<e*,c*>*,i*)*)<c*>.0^*(e*,0^*(h<e*,c*>*,i*)*{req:S*})<c*>.~(F<k*>*,bk*).l(f*,k*).l(@,an).l(f*,ap*).S*(ap*).~(F<cC*>*).l(f*,cC*).a5<l>().~(f,@).f*(o<f*>*).@(e).f*(f*,f*,e*).l(c,an).C<@>(@).d1<a4<N*>*>*().l(@,@).a5<@>().e*(L*).o<a1<N*>*>*().e*(e*).~([a5<~>?]).L*().l(bk*,O*).S(@).~(c?,c?).a6*/*(aT*).bi<o<f*>*>*(aU*).l(f*,a4<N*>*).S*(P<N*>*).~(e,@).l(f*,ba*).l(f*,aM*).l(f*,bb*).aM*(f*).S*(c*).~(cD,@).~({seen:S*}).l(au*).a5<~>*().~(o<f*>*).l(o<c*>*).h<e*,f*>*(h<@,@>*).o<cw*>*().h<e*,c*>*(f*).S*(aV*).~(c*,an*,aB*).bf<1&>*(a6*,c*).~(e,f).~(e,f?).f(f,f).bf<1&>*(e*,c*).e*().a5<a6*>*(aY*).a6*/*([aY*]).bi<o<f*>*>*(aY*).cv*(h<e*,c*>*,i*).a6(@,@).S(c?,c?).a4<N*>*(h<e*,c*>*,i*).bZ*(h<e*,c*>*,i*).c_*(h<e*,c*>*,i*).c0*(h<e*,c*>*,i*).bv*(h<e*,c*>*,i*).bw*(h<e*,c*>*,i*).bx*(h<e*,c*>*,i*).aT*(h<e*,c*>*,i*).by*(h<e*,c*>*,i*).bz*(h<e*,c*>*,i*).c3*(h<e*,c*>*,i*).c4*(h<e*,c*>*,i*).aU*(h<e*,c*>*,i*).ai*(h<e*,c*>*,i*).cB*(h<e*,c*>*,i*).cA*(h<e*,c*>*,i*).cz*(h<e*,c*>*,i*).bj*(h<e*,c*>*,i*).aV*(h<e*,c*>*,i*).ap*(h<e*,c*>*,i*).bF*(h<e*,c*>*,i*).bG*(h<e*,c*>*,i*).bI*(h<e*,c*>*,i*).bK*(h<e*,c*>*,i*).l(~()).c?(c?).ca*(h<e*,c*>*,i*).cf*(h<e*,c*>*,i*).bC*(h<e*,c*>*,i*).cg*(h<e*,c*>*,i*).ch*(h<e*,c*>*,i*).ci*(h<e*,c*>*,i*).cj*(h<e*,c*>*,i*).ck*(h<e*,c*>*,i*).cl*(h<e*,c*>*,i*).cm*(h<e*,c*>*,i*).cn*(h<e*,c*>*,i*).co*(h<e*,c*>*,i*).cp*(h<e*,c*>*,i*).cq*(h<e*,c*>*,i*).cr*(h<e*,c*>*,i*).cs*(h<e*,c*>*,i*).bD*(h<e*,c*>*,i*).ct*(h<e*,c*>*,i*).cu*(h<e*,c*>*,i*).f(c?)".split("."),
      interceptorsByTag: null,
      leafTags: null,
      arrayRti: /* @__PURE__ */ Symbol("$ti")
    };
    E2.vF(j2.typeUniverse, JSON.parse('{"fj":"aN","bL":"aN","b9":"aN","bf":"aN","hX":"aN","d8":"aN","dx":{"S":[]},"dz":{"l":[]},"aN":{"bf":["1&"],"d8":[]},"D":{"o":["1"],"q":["1"],"j":["1"]},"iL":{"D":["1"],"o":["1"],"q":["1"],"j":["1"]},"b4":{"P":["1"]},"ce":{"z":[],"N":[]},"dy":{"z":[],"f":[],"N":[]},"eZ":{"z":[],"N":[]},"bB":{"e":[]},"bM":{"j":["2"]},"dm":{"P":["2"]},"c5":{"bM":["1","2"],"j":["2"],"j.E":"2"},"dZ":{"c5":["1","2"],"bM":["1","2"],"q":["2"],"j":["2"],"j.E":"2"},"dU":{"p":["2"],"o":["2"],"bM":["1","2"],"q":["2"],"j":["2"]},"b5":{"dU":["1","2"],"p":["2"],"o":["2"],"bM":["1","2"],"q":["2"],"j":["2"],"p.E":"2","j.E":"2"},"c6":{"I":["3","4"],"h":["3","4"],"I.K":"3","I.V":"4"},"f1":{"H":[]},"fm":{"H":[]},"c8":{"p":["f"],"o":["f"],"q":["f"],"j":["f"],"p.E":"f"},"dI":{"aG":[],"H":[]},"q":{"j":["1"]},"ah":{"q":["1"],"j":["1"]},"dP":{"ah":["1"],"q":["1"],"j":["1"],"j.E":"1","ah.E":"1"},"aa":{"P":["1"]},"bd":{"j":["2"],"j.E":"2"},"c9":{"bd":["1","2"],"q":["2"],"j":["2"],"j.E":"2"},"dD":{"P":["2"]},"ab":{"ah":["2"],"q":["2"],"j":["2"],"j.E":"2","ah.E":"2"},"lK":{"j":["1"],"j.E":"1"},"cF":{"P":["1"]},"bh":{"j":["1"],"j.E":"1"},"cR":{"bh":["1"],"q":["1"],"j":["1"],"j.E":"1"},"dN":{"P":["1"]},"b7":{"q":["1"],"j":["1"],"j.E":"1"},"dq":{"P":["1"]},"d4":{"p":["1"],"o":["1"],"q":["1"],"j":["1"]},"d3":{"cD":[]},"dn":{"bm":["1","2"],"h":["1","2"]},"cQ":{"h":["1","2"]},"aJ":{"cQ":["1","2"],"h":["1","2"]},"dW":{"j":["1"],"j.E":"1"},"X":{"cQ":["1","2"],"h":["1","2"]},"dJ":{"aG":[],"H":[]},"f0":{"H":[]},"fx":{"H":[]},"fh":{"a8":[]},"ed":{"an":[]},"c7":{"aB":[]},"eL":{"aB":[]},"eM":{"aB":[]},"ft":{"aB":[]},"fq":{"aB":[]},"cP":{"aB":[]},"fp":{"H":[]},"aC":{"I":["1","2"],"h":["1","2"],"I.K":"1","I.V":"2"},"aO":{"q":["1"],"j":["1"],"j.E":"1"},"cx":{"P":["1"]},"d_":{"av":["1"]},"dE":{"p":["z"],"av":["z"],"o":["z"],"q":["z"],"j":["z"]},"aw":{"p":["f"],"av":["f"],"o":["f"],"q":["f"],"j":["f"]},"f8":{"p":["z"],"av":["z"],"o":["z"],"q":["z"],"j":["z"],"p.E":"z"},"f9":{"p":["z"],"av":["z"],"o":["z"],"q":["z"],"j":["z"],"p.E":"z"},"fa":{"aw":[],"p":["f"],"av":["f"],"o":["f"],"q":["f"],"j":["f"],"p.E":"f"},"fb":{"aw":[],"p":["f"],"av":["f"],"o":["f"],"q":["f"],"j":["f"],"p.E":"f"},"fc":{"aw":[],"p":["f"],"av":["f"],"o":["f"],"q":["f"],"j":["f"],"p.E":"f"},"fd":{"aw":[],"p":["f"],"av":["f"],"o":["f"],"q":["f"],"j":["f"],"p.E":"f"},"fe":{"aw":[],"p":["f"],"av":["f"],"o":["f"],"q":["f"],"j":["f"],"p.E":"f"},"dG":{"aw":[],"p":["f"],"av":["f"],"o":["f"],"q":["f"],"j":["f"],"p.E":"f"},"cy":{"aw":[],"p":["f"],"a6":[],"av":["f"],"o":["f"],"q":["f"],"j":["f"],"p.E":"f"},"eh":{"bk":[]},"fJ":{"H":[]},"ei":{"aG":[],"H":[]},"C":{"a5":["1"]},"aH":{"P":["1"]},"eg":{"j":["1"],"j.E":"1"},"eH":{"H":[]},"ay":{"fG":["1"]},"aZ":{"da":["1"]},"db":{"da":["1"]},"aj":{"bi":["1"]},"ee":{"bi":["1"]},"e1":{"I":["1","2"],"h":["1","2"]},"e4":{"e1":["1","2"],"I":["1","2"],"h":["1","2"],"I.K":"1","I.V":"2"},"e2":{"q":["1"],"j":["1"],"j.E":"1"},"e3":{"P":["1"]},"e5":{"aC":["1","2"],"I":["1","2"],"h":["1","2"],"I.K":"1","I.V":"2"},"b_":{"ec":["1"],"dM":["1"],"d1":["1"],"q":["1"],"j":["1"]},"cH":{"P":["1"]},"aX":{"p":["1"],"o":["1"],"q":["1"],"j":["1"],"p.E":"1"},"dw":{"j":["1"]},"dA":{"p":["1"],"o":["1"],"q":["1"],"j":["1"]},"dB":{"I":["1","2"],"h":["1","2"]},"I":{"h":["1","2"]},"dC":{"h":["1","2"]},"bm":{"h":["1","2"]},"ec":{"dM":["1"],"d1":["1"],"q":["1"],"j":["1"]},"fM":{"I":["e","@"],"h":["e","@"],"I.K":"e","I.V":"@"},"fN":{"ah":["e"],"q":["e"],"j":["e"],"j.E":"e","ah.E":"e"},"z":{"N":[]},"f":{"N":[]},"o":{"q":["1"],"j":["1"]},"d1":{"q":["1"],"j":["1"]},"eF":{"H":[]},"aG":{"H":[]},"fg":{"aG":[],"H":[]},"at":{"H":[]},"dL":{"H":[]},"eV":{"H":[]},"dH":{"H":[]},"fz":{"H":[]},"fu":{"H":[]},"bJ":{"H":[]},"eO":{"H":[]},"fi":{"H":[]},"dO":{"H":[]},"eQ":{"H":[]},"e_":{"a8":[]},"aK":{"a8":[]},"e0":{"ah":["1"],"q":["1"],"j":["1"],"j.E":"1","ah.E":"1"},"fR":{"an":[]},"en":{"aY":[]},"fP":{"aY":[]},"fH":{"aY":[]},"a4":{"k":[],"m":[],"n":[]},"bZ":{"k":[],"m":[],"n":[]},"c_":{"k":[],"m":[],"n":[]},"c0":{"k":[],"m":[],"n":[]},"fC":{"a4":["f*"],"k":[],"m":[],"n":[]},"fB":{"a4":["z*"],"k":[],"m":[],"n":[]},"eY":{"a1":["z*"]},"f5":{"a1":["z*"]},"f3":{"a1":["z*"]},"f6":{"a1":["f*"]},"f4":{"a1":["f*"]},"bv":{"k":[],"m":[],"n":[]},"b2":{"k":[],"m":[],"n":[]},"bw":{"k":[],"m":[],"n":[]},"b3":{"k":[],"m":[],"n":[]},"eE":{"a1":["z*"]},"dK":{"a1":["1*"]},"bx":{"k":[],"m":[],"n":[]},"aT":{"k":[],"m":[],"n":[]},"by":{"k":[],"m":[],"n":[]},"bz":{"k":[],"m":[],"n":[]},"c3":{"k":[],"m":[],"n":[]},"c4":{"k":[],"m":[],"n":[]},"du":{"k":[],"m":[],"n":[]},"k":{"m":[],"n":[]},"eR":{"k":[],"m":[],"n":[]},"aU":{"k":[],"m":[],"n":[]},"ai":{"k":[],"m":[],"n":[]},"cB":{"k":[],"m":[],"n":[]},"cA":{"k":[],"m":[],"n":[]},"cz":{"k":[],"m":[],"n":[]},"bj":{"k":[],"m":[],"n":[]},"aV":{"k":[],"m":[],"n":[]},"aE":{"k":[],"m":[],"n":[]},"eU":{"a1":["f*"]},"ap":{"k":[],"m":[],"n":[]},"bF":{"k":[],"m":[],"n":[]},"bG":{"k":[],"m":[],"n":[]},"bI":{"k":[],"m":[],"n":[]},"eT":{"a1":["z*"]},"bK":{"k":[],"m":[],"n":[],"cC":[]},"bA":{"a8":[]},"dS":{"a8":[]},"dR":{"a8":[]},"aL":{"a8":[]},"ca":{"k":[],"m":[],"n":[],"cC":[]},"cf":{"k":[],"m":[],"n":[]},"bC":{"k":[],"m":[],"n":[]},"ba":{"k":[],"m":[],"n":[]},"cg":{"k":[],"m":[],"n":[]},"ch":{"k":[],"m":[],"n":[]},"ci":{"k":[],"m":[],"n":[]},"cj":{"k":[],"m":[],"n":[]},"ck":{"k":[],"m":[],"n":[]},"cl":{"k":[],"m":[],"n":[]},"cm":{"k":[],"m":[],"n":[]},"cn":{"k":[],"m":[],"n":[]},"co":{"k":[],"m":[],"n":[]},"cp":{"k":[],"m":[],"n":[]},"cq":{"k":[],"m":[],"n":[]},"cr":{"k":[],"m":[],"n":[]},"cs":{"k":[],"m":[],"n":[]},"bD":{"k":[],"m":[],"n":[]},"aM":{"k":[],"m":[],"n":[]},"ct":{"k":[],"m":[],"n":[]},"bb":{"k":[],"m":[],"n":[]},"cu":{"k":[],"m":[],"n":[]},"cv":{"k":[],"m":[],"n":[]},"dt":{"eS":[]},"cT":{"eS":[]},"dv":{"a8":[]},"F":{"p":["1*"],"o":["1*"],"q":["1*"],"j":["1*"],"p.E":"1*"},"fv":{"a1":["N*"]},"fw":{"a1":["N*"]},"eK":{"a1":["z*"]},"ff":{"a8":[]},"a6":{"o":["f"],"q":["f"],"j":["f"]}}')), E2.vE(j2.typeUniverse, JSON.parse('{"ds":1,"fy":1,"d4":1,"ep":2,"d_":1,"fr":2,"fS":1,"fF":1,"dX":1,"dT":1,"ee":1,"fI":1,"cG":1,"eb":1,"fQ":1,"dw":1,"dA":1,"dB":2,"fU":2,"dC":2,"e6":1,"em":2,"eq":1,"eJ":1,"eN":2,"eP":2,"ef":1}'));
    var M2 = {
      p: ") does not match the number of morph targets (",
      d: "Accessor sparse indices element at index ",
      m: "Animation input accessor element at index ",
      c: "Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",
      g: "`null` encountered as the result from expression with type `Never`."
    }, N2 = (function() {
      var e4 = E2.aR;
      return {
        gF: e4("dn<cD,@>"),
        O: e4("q<@>"),
        Q: e4("H"),
        b8: e4("aB"),
        d: e4("a5<@>"),
        bq: e4("a5<~>"),
        N: e4("X<bk*,O*>"),
        j: e4("j<@>"),
        s: e4("D<e>"),
        gN: e4("D<a6>"),
        b: e4("D<@>"),
        Z: e4("D<f>"),
        p: e4("D<y*>"),
        gd: e4("D<a1<N*>*>"),
        bd: e4("D<eX*>"),
        a9: e4("D<cW*>"),
        b2: e4("D<P<N*>*>"),
        bH: e4("D<cw*>"),
        fh: e4("D<h<e*,c*>*>"),
        M: e4("D<c*>"),
        d6: e4("D<fo*>"),
        i: e4("D<e*>"),
        o: e4("D<z*>"),
        V: e4("D<f*>"),
        T: e4("dz"),
        g: e4("b9"),
        aU: e4("av<@>"),
        eo: e4("aC<cD,@>"),
        I: e4("h<@,@>"),
        gw: e4("ab<L*,e*>"),
        eB: e4("aw"),
        bm: e4("cy"),
        P: e4("l"),
        K: e4("c"),
        ed: e4("dK<N*>"),
        gT: e4("zA"),
        eq: e4("F<b2*>"),
        az: e4("F<b3*>"),
        E: e4("F<ba*>"),
        B: e4("F<bb*>"),
        u: e4("F<aM*>"),
        b_: e4("F<aE*>"),
        gm: e4("an"),
        R: e4("e"),
        fo: e4("cD"),
        dd: e4("bk"),
        eK: e4("aG"),
        gc: e4("a6"),
        ak: e4("bL"),
        go: e4("aX<h<e*,c*>*>"),
        em: e4("aX<e*>"),
        f8: e4("bm<cb*,O*>"),
        n: e4("aY"),
        a_: e4("ay<eS*>"),
        G: e4("ay<au*>"),
        eP: e4("ay<cd*>"),
        as: e4("ay<a6*>"),
        f1: e4("aZ<o<f*>*>"),
        U: e4("C<l>"),
        eI: e4("C<@>"),
        fJ: e4("C<f>"),
        eD: e4("C<eS*>"),
        f: e4("C<au*>"),
        dD: e4("C<cd*>"),
        q: e4("C<a6*>"),
        D: e4("C<~>"),
        aH: e4("e4<@,@>"),
        cy: e4("fO<c*>"),
        y: e4("S"),
        gR: e4("z"),
        z: e4("@"),
        v: e4("@(c)"),
        C: e4("@(c,an)"),
        S: e4("f"),
        aD: e4("y*"),
        hc: e4("a4<f*>*"),
        W: e4("a4<N*>*"),
        bj: e4("bv*"),
        aA: e4("b2*"),
        gW: e4("b3*"),
        gP: e4("bx*"),
        cT: e4("aT*"),
        r: e4("by*"),
        h2: e4("bz*"),
        x: e4("a8*"),
        af: e4("L*"),
        f9: e4("O*"),
        al: e4("cb*"),
        b1: e4("aB*"),
        ec: e4("aU*"),
        Y: e4("j<@>*"),
        ga: e4("P<z*>*"),
        bF: e4("P<f*>*"),
        cp: e4("ba*"),
        aa: e4("bb*"),
        J: e4("aM*"),
        c: e4("n*"),
        l: e4("o<@>*"),
        b7: e4("o<a1<N*>*>*"),
        an: e4("o<cw*>*"),
        m: e4("o<c*>*"),
        eG: e4("o<e*>*"),
        fy: e4("o<z*>*"),
        w: e4("o<f*>*"),
        h: e4("h<@,@>*"),
        gj: e4("h<e*,a4<N*>*>*"),
        t: e4("h<e*,c*>*"),
        fC: e4("ai*"),
        eM: e4("aV*"),
        ft: e4("aE*"),
        A: e4("0&*"),
        L: e4("ap*"),
        _: e4("c*"),
        ax: e4("cC*"),
        b5: e4("F<m*>*"),
        c2: e4("bF*"),
        bn: e4("bG*"),
        cn: e4("d1<y*>*"),
        gz: e4("d1<a4<N*>*>*"),
        dz: e4("bH*"),
        aV: e4("bI*"),
        X: e4("e*"),
        ai: e4("bK*"),
        f7: e4("bk*"),
        a: e4("a6*"),
        bv: e4("d8*"),
        F: e4("z*"),
        e: e4("f*"),
        eH: e4("a5<l>?"),
        cK: e4("c?"),
        di: e4("N"),
        H: e4("~"),
        d5: e4("~(c)"),
        k: e4("~(c,an)")
      };
    })();
    (function() {
      var e4 = T2.makeConstList;
      O2.bW = D2.cV.prototype, O2.d = D2.D.prototype, O2.c0 = D2.dx.prototype, O2.c = D2.dy.prototype, O2.c1 = D2.ce.prototype, O2.a = D2.bB.prototype, O2.c2 = D2.b9.prototype, O2.c3 = D2.f_.prototype, O2.j = E2.cy.prototype, O2.aA = D2.fj.prototype, O2.X = D2.bL.prototype, O2.Y = new E2.y("MAT4", 5126, false), O2.G = new E2.y("SCALAR", 5126, false), O2.a_ = new E2.y("VEC2", 5120, true), O2.a0 = new E2.y("VEC2", 5121, true), O2.a2 = new E2.y("VEC2", 5122, true), O2.a3 = new E2.y("VEC2", 5123, true), O2.a4 = new E2.y("VEC2", 5126, false), O2.w = new E2.y("VEC3", 5120, true), O2.H = new E2.y("VEC3", 5121, true), O2.x = new E2.y("VEC3", 5122, true), O2.I = new E2.y("VEC3", 5123, true), O2.k = new E2.y("VEC3", 5126, false), O2.J = new E2.y("VEC4", 5120, true), O2.b_ = new E2.y("VEC4", 5121, false), O2.y = new E2.y("VEC4", 5121, true), O2.K = new E2.y("VEC4", 5122, true), O2.b0 = new E2.y("VEC4", 5123, false), O2.z = new E2.y("VEC4", 5123, true), O2.n = new E2.y("VEC4", 5126, false), O2.b1 = new E2.c1("AnimationInput"), O2.b2 = new E2.c1("AnimationOutput"), O2.b3 = new E2.c1("IBM"), O2.b4 = new E2.c1("PrimitiveIndices"), O2.a7 = new E2.c1("VertexAttribute"), O2.b5 = new E2.c2("IBM"), O2.b6 = new E2.c2("Image"), O2.L = new E2.c2("IndexBuffer"), O2.o = new E2.c2("Other"), O2.A = new E2.c2("VertexBuffer"), O2.eq = new E2.hc(), O2.b7 = new E2.ha(), O2.b8 = new E2.hb(), O2.b9 = new E2.dq(E2.aR("dq<0&*>")), O2.a8 = new E2.dv(), O2.ba = new E2.bA(), O2.a9 = function(e5) {
        var t3 = Object.prototype.toString.call(e5);
        return t3.substring(8, t3.length - 1);
      }, O2.bb = function() {
        var e5 = Object.prototype.toString;
        function n3(t3) {
          var n4 = e5.call(t3);
          return n4.substring(8, n4.length - 1);
        }
        __name(n3, "n");
        function r3(t3, n4) {
          if (/^HTML[A-Z].*Element$/.test(n4)) return e5.call(t3) == "[object Object]" ? null : "HTMLElement";
        }
        __name(r3, "r");
        function i3(e6, n4) {
          return t2.HTMLElement && e6 instanceof HTMLElement ? "HTMLElement" : r3(e6, n4);
        }
        __name(i3, "i");
        function a3(e6) {
          if (typeof window > "u" || window[e6] === void 0) return null;
          var t3 = window[e6];
          return typeof t3 == "function" ? t3.prototype : null;
        }
        __name(a3, "a");
        function o3(e6) {
          return null;
        }
        __name(o3, "o");
        return {
          getTag: n3,
          getUnknownTag: typeof navigator == "object" ? i3 : r3,
          prototypeForTag: a3,
          discriminator: o3
        };
      }, O2.bg = function(e5) {
        return function(t3) {
          if (typeof navigator != "object") return t3;
          var n3 = "Cloudflare-Workers";
          if (n3.indexOf("DumpRenderTree") >= 0) return t3;
          if (n3.indexOf("Chrome") >= 0) {
            let e6 = function(e7) {
              return typeof window == "object" && window[e7] && window[e7].name == e7;
            };
            __name(e6, "e");
            if (e6("Window") && e6("HTMLElement")) return t3;
          }
          t3.getTag = e5;
        };
      }, O2.bc = function(e5) {
        if (typeof dartExperimentalFixupGetTag != "function") return e5;
        e5.getTag = dartExperimentalFixupGetTag(e5.getTag);
      }, O2.bd = function(e5) {
        var t3 = e5.getTag, n3 = e5.prototypeForTag;
        function r3(e6) {
          var n4 = t3(e6);
          return n4 == "Document" ? e6.xmlVersion ? "!Document" : "!HTMLDocument" : n4;
        }
        __name(r3, "r");
        function i3(e6) {
          return e6 == "Document" ? null : n3(e6);
        }
        __name(i3, "i");
        e5.getTag = r3, e5.prototypeForTag = i3;
      }, O2.bf = function(e5) {
        if ((typeof navigator == "object" ? "Cloudflare-Workers" : "").indexOf("Firefox") == -1) return e5;
        var t3 = e5.getTag, n3 = {
          BeforeUnloadEvent: "Event",
          DataTransfer: "Clipboard",
          GeoGeolocation: "Geolocation",
          Location: "!Location",
          WorkerMessageEvent: "MessageEvent",
          XMLDocument: "!Document"
        };
        function r3(e6) {
          var r4 = t3(e6);
          return n3[r4] || r4;
        }
        __name(r3, "r");
        e5.getTag = r3;
      }, O2.be = function(e5) {
        if ((typeof navigator == "object" ? "Cloudflare-Workers" : "").indexOf("Trident/") == -1) return e5;
        var t3 = e5.getTag, n3 = {
          BeforeUnloadEvent: "Event",
          DataTransfer: "Clipboard",
          HTMLDDElement: "HTMLElement",
          HTMLDTElement: "HTMLElement",
          HTMLPhraseElement: "HTMLElement",
          Position: "Geoposition"
        };
        function r3(e6) {
          var r4 = t3(e6);
          return n3[r4] || (r4 == "Object" && window.DataView && e6 instanceof window.DataView ? "DataView" : r4);
        }
        __name(r3, "r");
        function i3(e6) {
          var t4 = window[e6];
          return t4 == null ? null : t4.prototype;
        }
        __name(i3, "i");
        e5.getTag = r3, e5.prototypeForTag = i3;
      }, O2.aa = function(e5) {
        return e5;
      }, O2.ab = new E2.iQ(), O2.bh = new E2.fi(), O2.bi = new E2.dR(), O2.bj = new E2.dS(), O2.ac = new E2.lA(), O2.M = new E2.m1(), O2.ad = new E2.mm(), O2.i = new E2.mn(), O2.bk = new E2.fR(), O2.O = new E2.cc(0, "Unknown"), O2.p = new E2.cc(1, "RGB"), O2.B = new E2.cc(2, "RGBA"), O2.ae = new E2.cc(3, "Luminance"), O2.af = new E2.cc(4, "LuminanceAlpha"), O2.ag = new E2.cU(0, "JPEG"), O2.ah = new E2.cU(1, "PNG"), O2.ai = new E2.cU(2, "WebP"), O2.bV = new E2.cU(3, "KTX2"), O2.aj = new E2.aL("Wrong WebP header."), O2.bX = new E2.aL("PNG header not found."), O2.bY = new E2.aL("Invalid JPEG marker segment length."), O2.q = new E2.aL("Wrong chunk length."), O2.bZ = new E2.aL("Invalid number of JPEG color channels."), O2.c_ = new E2.aL("Invalid start of file."), O2.c4 = new E2.iR(null), O2.c5 = E2.a(e4([0, 0]), N2.o), O2.ak = E2.a(e4([
        0,
        0,
        0
      ]), N2.o), O2.c6 = E2.a(e4([16]), N2.V), O2.c7 = E2.a(e4([1, 1]), N2.o), O2.C = E2.a(e4([
        1,
        1,
        1
      ]), N2.o), O2.al = E2.a(e4([
        1,
        1,
        1,
        1
      ]), N2.o), O2.am = E2.a(e4([2]), N2.V), O2.c9 = E2.a(e4([
        "sheenColorFactor",
        "sheenColorTexture",
        "sheenRoughnessFactor",
        "sheenRoughnessTexture"
      ]), N2.i), O2.an = E2.a(e4([
        0,
        0,
        32776,
        33792,
        1,
        10240,
        0,
        0
      ]), N2.V), O2.ca = E2.a(e4([
        "clearcoatFactor",
        "clearcoatTexture",
        "clearcoatRoughnessFactor",
        "clearcoatRoughnessTexture",
        "clearcoatNormalTexture"
      ]), N2.i), O2.l = E2.a(e4([3]), N2.V), O2.ao = E2.a(e4([
        33071,
        33648,
        10497
      ]), N2.V), O2.cb = E2.a(e4([34962, 34963]), N2.V), O2.cc = E2.a(e4([
        "specularFactor",
        "specularTexture",
        "specularColorFactor",
        "specularColorTexture"
      ]), N2.i), O2.P = E2.a(e4([4]), N2.V), O2.Z = new E2.y("VEC2", 5120, false), O2.aW = new E2.y("VEC2", 5121, false), O2.a1 = new E2.y("VEC2", 5122, false), O2.aX = new E2.y("VEC2", 5123, false), O2.cd = E2.a(e4([
        O2.Z,
        O2.a_,
        O2.aW,
        O2.a1,
        O2.a2,
        O2.aX
      ]), N2.p), O2.ce = E2.a(e4([
        5121,
        5123,
        5125
      ]), N2.V), O2.ap = E2.a(e4(["image/jpeg", "image/png"]), N2.i), O2.cf = E2.a(e4(["transmissionFactor", "transmissionTexture"]), N2.i), O2.cg = E2.a(e4([9728, 9729]), N2.V), O2.aQ = new E2.y("SCALAR", 5121, false), O2.aT = new E2.y("SCALAR", 5123, false), O2.aV = new E2.y("SCALAR", 5125, false), O2.aq = E2.a(e4([
        O2.aQ,
        O2.aT,
        O2.aV
      ]), N2.p), O2.ci = E2.a(e4([
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/ktx2"
      ]), N2.i), O2.cj = E2.a(e4([
        "camera",
        "children",
        "skin",
        "matrix",
        "mesh",
        "rotation",
        "scale",
        "translation",
        "weights",
        "name"
      ]), N2.i), O2.ck = E2.a(e4([
        9728,
        9729,
        9984,
        9985,
        9986,
        9987
      ]), N2.V), O2.cl = E2.a(e4([
        "COLOR",
        "JOINTS",
        "TEXCOORD",
        "WEIGHTS"
      ]), N2.i), O2.cm = E2.a(e4(["COLOR", "TEXCOORD"]), N2.i), O2.D = E2.a(e4([
        0,
        0,
        65490,
        45055,
        65535,
        34815,
        65534,
        18431
      ]), N2.V), O2.b = new E2.bH(0, "Error"), O2.e = new E2.bH(1, "Warning"), O2.h = new E2.bH(2, "Information"), O2.aB = new E2.bH(3, "Hint"), O2.cn = E2.a(e4([
        O2.b,
        O2.e,
        O2.h,
        O2.aB
      ]), E2.aR("D<bH*>")), O2.co = E2.a(e4([
        "color",
        "intensity",
        "spot",
        "type",
        "range",
        "name"
      ]), N2.i), O2.cp = E2.a(e4([
        "buffer",
        "byteOffset",
        "byteLength",
        "byteStride",
        "target",
        "name"
      ]), N2.i), O2.as = E2.a(e4([
        0,
        0,
        26624,
        1023,
        65534,
        2047,
        65534,
        2047
      ]), N2.V), O2.cq = E2.a(e4([
        "LINEAR",
        "STEP",
        "CUBICSPLINE"
      ]), N2.i), O2.cr = E2.a(e4([
        "OPAQUE",
        "MASK",
        "BLEND"
      ]), N2.i), O2.cs = E2.a(e4([
        "pbrMetallicRoughness",
        "normalTexture",
        "occlusionTexture",
        "emissiveTexture",
        "emissiveFactor",
        "alphaMode",
        "alphaCutoff",
        "doubleSided",
        "name"
      ]), N2.i), O2.ct = E2.a(e4([
        "POSITION",
        "NORMAL",
        "TANGENT"
      ]), N2.i), O2.cu = E2.a(e4([
        5120,
        5121,
        5122,
        5123,
        5125,
        5126
      ]), N2.V), O2.cv = E2.a(e4([
        "anisotropyStrength",
        "anisotropyRotation",
        "anisotropyTexture"
      ]), N2.i), O2.cw = E2.a(e4([
        "inverseBindMatrices",
        "skeleton",
        "joints",
        "name"
      ]), N2.i), O2.a5 = new E2.y("VEC3", 5120, false), O2.a6 = new E2.y("VEC3", 5122, false), O2.cx = E2.a(e4([
        O2.a5,
        O2.w,
        O2.a6,
        O2.x
      ]), N2.p), O2.cy = E2.a(e4([
        "data-uri",
        "buffer-view",
        "glb",
        "external"
      ]), N2.i), O2.cz = E2.a(e4([
        "POINTS",
        "LINES",
        "LINE_LOOP",
        "LINE_STRIP",
        "TRIANGLES",
        "TRIANGLE_STRIP",
        "TRIANGLE_FAN"
      ]), N2.i), O2.cA = E2.a(e4([
        "bufferView",
        "byteOffset",
        "componentType"
      ]), N2.i), O2.Q = E2.a(e4([O2.w, O2.x]), N2.p), O2.cB = E2.a(e4([
        "aspectRatio",
        "yfov",
        "zfar",
        "znear"
      ]), N2.i), O2.cC = E2.a(e4([
        "copyright",
        "generator",
        "version",
        "minVersion"
      ]), N2.i), O2.cD = E2.a(e4(["bufferView", "byteOffset"]), N2.i), O2.cE = E2.a(e4([
        "bufferView",
        "mimeType",
        "uri",
        "name"
      ]), N2.i), O2.cF = E2.a(e4([
        "channels",
        "samplers",
        "name"
      ]), N2.i), O2.cG = E2.a(e4([
        "baseColorFactor",
        "baseColorTexture",
        "metallicFactor",
        "roughnessFactor",
        "metallicRoughnessTexture"
      ]), N2.i), O2.cH = E2.a(e4([
        "count",
        "indices",
        "values"
      ]), N2.i), O2.cI = E2.a(e4([
        "diffuseFactor",
        "diffuseTexture",
        "specularFactor",
        "glossinessFactor",
        "specularGlossinessTexture"
      ]), N2.i), O2.cJ = E2.a(e4([
        "directional",
        "point",
        "spot"
      ]), N2.i), O2.cK = E2.a(e4(["dispersion"]), N2.i), O2.cL = E2.a(e4(["emissiveStrength"]), N2.i), O2.at = E2.a(e4([]), N2.b), O2.cM = E2.a(e4([]), N2.i), O2.cP = E2.a(e4(["extensions", "extras"]), N2.i), O2.cQ = E2.a(e4([
        0,
        0,
        32722,
        12287,
        65534,
        34815,
        65534,
        18431
      ]), N2.V), O2.W = E2.u("bK"), O2.bl = new E2.O(E2.x2(), false, false), O2.dK = new E2.X([O2.W, O2.bl], N2.N), O2.bG = new E2.L("EXT_texture_webp", O2.dK, E2.x3(), false), O2.aC = E2.u("bw"), O2.bm = new E2.O(E2.xj(), false, false), O2.dG = new E2.X([O2.aC, O2.bm], N2.N), O2.bP = new E2.L("KHR_animation_pointer", O2.dG, E2.xk(), false), O2.U = E2.u("du"), O2.V = E2.u("ap"), O2.bn = new E2.O(E2.xl(), false, false), O2.bs = new E2.O(E2.xn(), false, false), O2.dI = new E2.X([
        O2.U,
        O2.bn,
        O2.V,
        O2.bs
      ], N2.N), O2.bQ = new E2.L("KHR_lights_punctual", O2.dI, null, false), O2.f = E2.u("ai"), O2.bt = new E2.O(E2.xo(), false, false), O2.du = new E2.X([O2.f, O2.bt], N2.N), O2.bD = new E2.L("KHR_materials_anisotropy", O2.du, null, false), O2.bu = new E2.O(E2.xp(), false, false), O2.dv = new E2.X([O2.f, O2.bu], N2.N), O2.bM = new E2.L("KHR_materials_clearcoat", O2.dv, null, false), O2.bv = new E2.O(E2.xq(), false, false), O2.dw = new E2.X([O2.f, O2.bv], N2.N), O2.bL = new E2.L("KHR_materials_dispersion", O2.dw, null, false), O2.bw = new E2.O(E2.xr(), false, false), O2.dy = new E2.X([O2.f, O2.bw], N2.N), O2.bT = new E2.L("KHR_materials_emissive_strength", O2.dy, null, false), O2.bx = new E2.O(E2.xs(), false, false), O2.dz = new E2.X([O2.f, O2.bx], N2.N), O2.bR = new E2.L("KHR_materials_ior", O2.dz, null, false), O2.by = new E2.O(E2.xt(), false, false), O2.dA = new E2.X([O2.f, O2.by], N2.N), O2.bK = new E2.L("KHR_materials_iridescence", O2.dA, null, false), O2.bB = new E2.O(E2.xu(), true, false), O2.dB = new E2.X([O2.f, O2.bB], N2.N), O2.bI = new E2.L("KHR_materials_pbrSpecularGlossiness", O2.dB, null, false), O2.bz = new E2.O(E2.xv(), false, false), O2.dC = new E2.X([O2.f, O2.bz], N2.N), O2.bF = new E2.L("KHR_materials_sheen", O2.dC, null, false), O2.bo = new E2.O(E2.xw(), false, false), O2.dD = new E2.X([O2.f, O2.bo], N2.N), O2.bO = new E2.L("KHR_materials_specular", O2.dD, null, false), O2.bp = new E2.O(E2.xx(), false, false), O2.dE = new E2.X([O2.f, O2.bp], N2.N), O2.bN = new E2.L("KHR_materials_transmission", O2.dE, null, false), O2.bC = new E2.O(E2.xy(), true, false), O2.dF = new E2.X([O2.f, O2.bC], N2.N), O2.bE = new E2.L("KHR_materials_unlit", O2.dF, null, false), O2.aF = E2.u("aE"), O2.bq = new E2.O(E2.ul(), false, false), O2.bA = new E2.O(E2.um(), false, true), O2.dH = new E2.X([
        O2.U,
        O2.bq,
        O2.aF,
        O2.bA
      ], N2.N), O2.bJ = new E2.L("KHR_materials_variants", O2.dH, null, false), O2.br = new E2.O(E2.xz(), false, false), O2.dx = new E2.X([O2.f, O2.br], N2.N), O2.bS = new E2.L("KHR_materials_volume", O2.dx, null, false), O2.cN = E2.a(e4([]), E2.aR("D<bk*>")), O2.dL = new E2.aJ(0, {}, O2.cN, E2.aR("aJ<bk*,O*>")), O2.bU = new E2.L("KHR_mesh_quantization", O2.dL, E2.xA(), true), O2.aL = E2.u("bj"), O2.aH = E2.u("cz"), O2.aI = E2.u("cA"), O2.N = new E2.O(E2.xB(), false, false), O2.dJ = new E2.X([
        O2.aL,
        O2.N,
        O2.aH,
        O2.N,
        O2.aI,
        O2.N
      ], N2.N), O2.bH = new E2.L("KHR_texture_transform", O2.dJ, null, false), O2.au = E2.a(e4([
        O2.bG,
        O2.bP,
        O2.bQ,
        O2.bD,
        O2.bM,
        O2.bL,
        O2.bT,
        O2.bR,
        O2.bK,
        O2.bI,
        O2.bF,
        O2.bO,
        O2.bN,
        O2.bE,
        O2.bJ,
        O2.bS,
        O2.bU,
        O2.bH
      ]), E2.aR("D<L*>")), O2.cS = E2.a(e4(["index", "texCoord"]), N2.i), O2.cT = E2.a(e4([
        "index",
        "texCoord",
        "scale"
      ]), N2.i), O2.cU = E2.a(e4([
        "index",
        "texCoord",
        "strength"
      ]), N2.i), O2.cV = E2.a(e4(["innerConeAngle", "outerConeAngle"]), N2.i), O2.cW = E2.a(e4([
        "input",
        "interpolation",
        "output"
      ]), N2.i), O2.cX = E2.a(e4(["ior"]), N2.i), O2.cY = E2.a(e4([
        "attributes",
        "indices",
        "material",
        "mode",
        "targets"
      ]), N2.i), O2.cZ = E2.a(e4([
        "bufferView",
        "byteOffset",
        "componentType",
        "count",
        "type",
        "normalized",
        "max",
        "min",
        "sparse",
        "name"
      ]), N2.i), O2.d_ = E2.a(e4(["light"]), N2.i), O2.d0 = E2.a(e4(["lights"]), N2.i), O2.d1 = E2.a(e4(["mappings"]), N2.i), O2.d2 = E2.a(e4(["name"]), N2.i), O2.d3 = E2.a(e4(["node", "path"]), N2.i), O2.d4 = E2.a(e4(["nodes", "name"]), N2.i), O2.d5 = E2.a(e4([
        null,
        "linear",
        "srgb",
        "custom"
      ]), N2.i), O2.d6 = E2.a(e4([
        null,
        "srgb",
        "custom"
      ]), N2.i), O2.av = E2.a(e4([
        0,
        0,
        24576,
        1023,
        65534,
        34815,
        65534,
        18431
      ]), N2.V), O2.d7 = E2.a(e4(["image/webp"]), N2.i), O2.d8 = E2.a(e4([
        "offset",
        "rotation",
        "scale",
        "texCoord"
      ]), N2.i), O2.aw = E2.a(e4(["orthographic", "perspective"]), N2.i), O2.d9 = E2.a(e4(["pointer"]), N2.i), O2.da = E2.a(e4([
        "primitives",
        "weights",
        "name"
      ]), N2.i), O2.db = E2.a(e4([
        0,
        0,
        32754,
        11263,
        65534,
        34815,
        65534,
        18431
      ]), N2.V), O2.dc = E2.a(e4([
        "magFilter",
        "minFilter",
        "wrapS",
        "wrapT",
        "name"
      ]), N2.i), O2.dd = E2.a(e4([
        null,
        "rgb",
        "rgba",
        "luminance",
        "luminance-alpha"
      ]), N2.i), O2.ax = E2.a(e4([
        0,
        0,
        65490,
        12287,
        65535,
        34815,
        65534,
        18431
      ]), N2.V), O2.de = E2.a(e4([
        "sampler",
        "source",
        "name"
      ]), N2.i), O2.df = E2.a(e4(["source"]), N2.i), O2.dg = E2.a(e4([
        "iridescenceFactor",
        "iridescenceTexture",
        "iridescenceIor",
        "iridescenceThicknessMinimum",
        "iridescenceThicknessMaximum",
        "iridescenceThicknessTexture"
      ]), N2.i), O2.aY = new E2.y("VEC3", 5121, false), O2.aZ = new E2.y("VEC3", 5123, false), O2.dh = E2.a(e4([
        O2.a5,
        O2.w,
        O2.aY,
        O2.H,
        O2.a6,
        O2.x,
        O2.aZ,
        O2.I
      ]), N2.p), O2.di = E2.a(e4(["target", "sampler"]), N2.i), O2.R = E2.a(e4([
        "translation",
        "rotation",
        "scale",
        "weights"
      ]), N2.i), O2.dj = E2.a(e4([
        "type",
        "orthographic",
        "perspective",
        "name"
      ]), N2.i), O2.dk = E2.a(e4([
        "uri",
        "byteLength",
        "name"
      ]), N2.i), O2.dl = E2.a(e4(["variants"]), N2.i), O2.dm = E2.a(e4([
        "variants",
        "material",
        "name"
      ]), N2.i), O2.dn = E2.a(e4([O2.Z, O2.a1]), N2.p), O2.dp = E2.a(e4([
        "attenuationColor",
        "attenuationDistance",
        "thicknessFactor",
        "thicknessTexture"
      ]), N2.i), O2.dq = E2.a(e4([
        "xmag",
        "ymag",
        "zfar",
        "znear"
      ]), N2.i), O2.dr = E2.a(e4([
        "extensionsUsed",
        "extensionsRequired",
        "accessors",
        "animations",
        "asset",
        "buffers",
        "bufferViews",
        "cameras",
        "images",
        "materials",
        "meshes",
        "nodes",
        "samplers",
        "scene",
        "scenes",
        "skins",
        "textures"
      ]), N2.i), O2.ds = E2.a(e4([O2.J, O2.K]), N2.p), O2.ar = E2.a(e4([O2.k]), N2.p), O2.c8 = E2.a(e4([
        O2.n,
        O2.y,
        O2.J,
        O2.z,
        O2.K
      ]), N2.p), O2.aR = new E2.y("SCALAR", 5121, true), O2.aP = new E2.y("SCALAR", 5120, true), O2.aU = new E2.y("SCALAR", 5123, true), O2.aS = new E2.y("SCALAR", 5122, true), O2.cR = E2.a(e4([
        O2.G,
        O2.aR,
        O2.aP,
        O2.aU,
        O2.aS
      ]), N2.p), O2.dt = new E2.aJ(4, {
        translation: O2.ar,
        rotation: O2.c8,
        scale: O2.ar,
        weights: O2.cR
      }, O2.R, E2.aR("aJ<e*,o<y*>*>")), O2.ch = E2.a(e4([
        "SCALAR",
        "VEC2",
        "VEC3",
        "VEC4",
        "MAT2",
        "MAT3",
        "MAT4"
      ]), N2.i), O2.m = new E2.aJ(7, {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      }, O2.ch, E2.aR("aJ<e*,f*>")), O2.ay = new E2.X([
        5120,
        "BYTE",
        5121,
        "UNSIGNED_BYTE",
        5122,
        "SHORT",
        5123,
        "UNSIGNED_SHORT",
        5124,
        "INT",
        5125,
        "UNSIGNED_INT",
        5126,
        "FLOAT",
        35664,
        "FLOAT_VEC2",
        35665,
        "FLOAT_VEC3",
        35666,
        "FLOAT_VEC4",
        35667,
        "INT_VEC2",
        35668,
        "INT_VEC3",
        35669,
        "INT_VEC4",
        35670,
        "BOOL",
        35671,
        "BOOL_VEC2",
        35672,
        "BOOL_VEC3",
        35673,
        "BOOL_VEC4",
        35674,
        "FLOAT_MAT2",
        35675,
        "FLOAT_MAT3",
        35676,
        "FLOAT_MAT4",
        35678,
        "SAMPLER_2D"
      ], E2.aR("X<f*,e*>")), O2.cO = E2.a(e4([]), E2.aR("D<cD*>")), O2.az = new E2.aJ(0, {}, O2.cO, E2.aR("aJ<cD*,@>")), O2.dM = new E2.d3("call"), O2.dN = E2.u("c_"), O2.dO = E2.u("c0"), O2.dP = E2.u("bZ"), O2.S = E2.u("a4<N>"), O2.dQ = E2.u("b2"), O2.dR = E2.u("b3"), O2.T = E2.u("bv"), O2.dS = E2.u("bx"), O2.aD = E2.u("by"), O2.dT = E2.u("aT"), O2.dU = E2.u("c3"), O2.dV = E2.u("c4"), O2.dW = E2.u("bz"), O2.dX = E2.u("co"), O2.dY = E2.u("ca"), O2.aE = E2.u("aU"), O2.dZ = E2.u("cf"), O2.e_ = E2.u("bC"), O2.e0 = E2.u("cg"), O2.e1 = E2.u("ba"), O2.e2 = E2.u("ch"), O2.e3 = E2.u("ci"), O2.e4 = E2.u("cj"), O2.e5 = E2.u("ck"), O2.e6 = E2.u("cl"), O2.e7 = E2.u("cm"), O2.e8 = E2.u("cn"), O2.e9 = E2.u("cp"), O2.ea = E2.u("cq"), O2.eb = E2.u("cr"), O2.ec = E2.u("cs"), O2.ed = E2.u("bD"), O2.ee = E2.u("bb"), O2.ef = E2.u("aM"), O2.eg = E2.u("cu"), O2.eh = E2.u("cv"), O2.aG = E2.u("aV"), O2.ei = E2.u("c"), O2.ej = E2.u("cB"), O2.ek = E2.u("bF"), O2.aJ = E2.u("bG"), O2.aK = E2.u("bI"), O2.el = E2.u("ct"), O2.em = new E2.lB(false), O2.r = new E2.dV(0, "Unknown"), O2.t = new E2.dV(1, "sRGB"), O2.E = new E2.dV(2, "Custom"), O2.u = new E2.d5(0, "Unknown"), O2.en = new E2.d5(1, "Linear"), O2.v = new E2.d5(2, "sRGB"), O2.F = new E2.d5(3, "Custom"), O2.eo = new E2.d7(null, 2), O2.aM = new E2.d9(0, "DataUri"), O2.aN = new E2.d9(1, "BufferView"), O2.ep = new E2.d9(2, "GLB"), O2.aO = new E2.d9(3, "External");
    })(), (function() {
      A2.mg = null, A2.oR = null, A2.ov = null, A2.ou = null, A2.pR = null, A2.pJ = null, A2.pY = null, A2.mP = null, A2.n_ = null, A2.nQ = null, A2.dg = null, A2.ev = null, A2.ew = null, A2.nK = false, A2.B = O2.i, A2.cJ = E2.a([], E2.aR("D<c>")), A2.oN = null, A2.oL = null, A2.oM = null;
    })(), (function() {
      var e4 = T2.lazyFinal, t3 = T2.lazy, n3 = T2.lazyOld;
      e4(A2, "xW", "nW", () => E2.xa("_$dart_dartClosure")), e4(A2, "Bi", "tu", () => O2.i.cZ(new E2.nd())), e4(A2, "AH", "tb", () => E2.bl(E2.lu({ toString: /* @__PURE__ */ __name(function() {
        return "$receiver$";
      }, "toString") }))), e4(A2, "AI", "tc", () => E2.bl(E2.lu({
        $method$: null,
        toString: /* @__PURE__ */ __name(function() {
          return "$receiver$";
        }, "toString")
      }))), e4(A2, "AJ", "td", () => E2.bl(E2.lu(null))), e4(A2, "AK", "te", () => E2.bl((function() {
        var e5 = "$arguments$";
        try {
          null.$method$(e5);
        } catch (e6) {
          return e6.message;
        }
      })())), e4(A2, "AN", "th", () => E2.bl(E2.lu(void 0))), e4(A2, "AO", "ti", () => E2.bl((function() {
        var e5 = "$arguments$";
        try {
          (void 0).$method$(e5);
        } catch (e6) {
          return e6.message;
        }
      })())), e4(A2, "AM", "tg", () => E2.bl(E2.p3(null))), e4(A2, "AL", "tf", () => E2.bl((function() {
        try {
          null.$method$;
        } catch (e5) {
          return e5.message;
        }
      })())), e4(A2, "AQ", "tk", () => E2.bl(E2.p3(void 0))), e4(A2, "AP", "tj", () => E2.bl((function() {
        try {
          (void 0).$method$;
        } catch (e5) {
          return e5.message;
        }
      })())), e4(A2, "AT", "oj", () => E2.vg()), e4(A2, "yt", "h0", () => N2.U.a(A2.tu())), e4(A2, "AR", "tl", () => new E2.lD().$0()), e4(A2, "AS", "tm", () => new E2.lC().$0()), e4(A2, "AV", "ok", () => E2.uR(E2.w8(E2.a([
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -2,
        -1,
        -2,
        -2,
        -2,
        -2,
        -2,
        62,
        -2,
        62,
        -2,
        63,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        -2,
        -2,
        -2,
        -1,
        -2,
        -2,
        -2,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        -2,
        -2,
        -2,
        -2,
        63,
        -2,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        -2,
        -2,
        -2,
        -2,
        -2
      ], N2.Z)))), t3(A2, "AU", "tn", () => E2.uS(0)), e4(A2, "Bb", "to", () => E2.fZ(O2.ei)), e4(A2, "Bf", "ts", () => E2.w6()), n3(A2, "xU", "br", () => E2.nx("^([0-9]+)\\.([0-9]+)$")), n3(A2, "xV", "q3", () => E2.nx("^([A-Z0-9]+)_[A-Za-z0-9_]+$")), n3(A2, "yi", "ql", () => E2.G("BUFFER_BYTE_LENGTH_MISMATCH", new E2.hL(), O2.b)), n3(A2, "yj", "qm", () => E2.G("BUFFER_GLB_CHUNK_TOO_BIG", new E2.hM(), O2.e)), n3(A2, "yb", "o_", () => E2.G("ACCESSOR_MIN_MISMATCH", new E2.hE(), O2.b)), n3(A2, "ya", "nZ", () => E2.G("ACCESSOR_MAX_MISMATCH", new E2.hD(), O2.b)), n3(A2, "y0", "nY", () => E2.G("ACCESSOR_ELEMENT_OUT_OF_MIN_BOUND", new E2.ht(), O2.b)), n3(A2, "y_", "nX", () => E2.G("ACCESSOR_ELEMENT_OUT_OF_MAX_BOUND", new E2.hs(), O2.b)), n3(A2, "yf", "o0", () => E2.G("ACCESSOR_VECTOR3_NON_UNIT", new E2.hI(), O2.b)), n3(A2, "y6", "qc", () => E2.G("ACCESSOR_INVALID_SIGN", new E2.hz(), O2.b)), n3(A2, "xZ", "q6", () => E2.G("ACCESSOR_ANIMATION_SAMPLER_OUTPUT_NON_NORMALIZED_QUATERNION", new E2.hr(), O2.b)), n3(A2, "yc", "qg", () => E2.G("ACCESSOR_NON_CLAMPED", new E2.hF(), O2.b)), n3(A2, "y4", "qa", () => E2.G("ACCESSOR_INVALID_FLOAT", new E2.hx(), O2.b)), n3(A2, "y1", "q7", () => E2.G("ACCESSOR_INDEX_OOB", new E2.hu(), O2.b)), n3(A2, "y3", "q9", () => E2.G("ACCESSOR_INDEX_TRIANGLE_DEGENERATE", new E2.hw(), O2.h)), n3(A2, "y2", "q8", () => E2.G("ACCESSOR_INDEX_PRIMITIVE_RESTART", new E2.hv(), O2.b)), n3(A2, "xX", "q4", () => E2.G("ACCESSOR_ANIMATION_INPUT_NEGATIVE", new E2.hp(), O2.b)), n3(A2, "xY", "q5", () => E2.G("ACCESSOR_ANIMATION_INPUT_NON_INCREASING", new E2.hq(), O2.b)), n3(A2, "ye", "qi", () => E2.G("ACCESSOR_SPARSE_INDICES_NON_INCREASING", new E2.hH(), O2.b)), n3(A2, "yd", "qh", () => E2.G("ACCESSOR_SPARSE_INDEX_OOB", new E2.hG(), O2.b)), n3(A2, "y5", "qb", () => E2.G("ACCESSOR_INVALID_IBM", new E2.hy(), O2.b)), n3(A2, "yl", "qn", () => E2.G("IMAGE_DATA_INVALID", new E2.hO(), O2.b)), n3(A2, "yn", "qp", () => E2.G("IMAGE_MIME_TYPE_INVALID", new E2.hQ(), O2.b)), n3(A2, "yq", "qs", () => E2.G("IMAGE_UNEXPECTED_EOS", new E2.hT(), O2.b)), n3(A2, "yr", "qt", () => E2.G("IMAGE_UNRECOGNIZED_FORMAT", new E2.hU(), O2.e)), n3(A2, "yo", "qq", () => E2.G("IMAGE_NON_ENABLED_MIME_TYPE", new E2.hR(), O2.b)), n3(A2, "yp", "qr", () => E2.G("IMAGE_NPOT_DIMENSIONS", new E2.hS(), O2.h)), n3(A2, "ym", "qo", () => E2.G("IMAGE_FEATURES_UNSUPPORTED", new E2.hP(), O2.e)), n3(A2, "ys", "o2", () => E2.G("URI_GLB", new E2.hV(), O2.h)), n3(A2, "yk", "o1", () => E2.G("DATA_URI_GLB", new E2.hN(), O2.e)), n3(A2, "y8", "qe", () => E2.G("ACCESSOR_JOINTS_INDEX_OOB", new E2.hB(), O2.b)), n3(A2, "y7", "qd", () => E2.G("ACCESSOR_JOINTS_INDEX_DUPLICATE", new E2.hA(), O2.b)), n3(A2, "yg", "qj", () => E2.G("ACCESSOR_WEIGHTS_NEGATIVE", new E2.hJ(), O2.b)), n3(A2, "yh", "qk", () => E2.G("ACCESSOR_WEIGHTS_NON_NORMALIZED", new E2.hK(), O2.b)), n3(A2, "y9", "qf", () => E2.G("ACCESSOR_JOINTS_USED_ZERO_WEIGHT", new E2.hC(), O2.e)), n3(A2, "yK", "nh", () => new E2.iF(O2.b, "IO_ERROR", new E2.iG())), n3(A2, "zC", "oc", () => E2.am("ARRAY_LENGTH_NOT_IN_LIST", new E2.kh(), O2.b)), n3(A2, "zD", "eC", () => E2.am("ARRAY_TYPE_MISMATCH", new E2.ki(), O2.b)), n3(A2, "zB", "ob", () => E2.am("DUPLICATE_ELEMENTS", new E2.kg(), O2.b)), n3(A2, "zF", "h2", () => E2.am("INVALID_INDEX", new E2.kk(), O2.b)), n3(A2, "zG", "h3", () => E2.am("INVALID_JSON", new E2.kl(), O2.b)), n3(A2, "zH", "od", () => E2.am("INVALID_URI", new E2.km(), O2.b)), n3(A2, "zE", "bX", () => E2.am("EMPTY_ENTITY", new E2.kj(), O2.b)), n3(A2, "zI", "oe", () => E2.am("ONE_OF_MISMATCH", new E2.kn(), O2.b)), n3(A2, "zJ", "rp", () => E2.am("PATTERN_MISMATCH", new E2.ko(), O2.b)), n3(A2, "zK", "a2", () => E2.am("TYPE_MISMATCH", new E2.kp(), O2.b)), n3(A2, "zP", "rs", () => E2.am("VALUE_NOT_IN_LIST", new E2.ku(), O2.e)), n3(A2, "zQ", "ni", () => E2.am("VALUE_NOT_IN_RANGE", new E2.kv(), O2.b)), n3(A2, "zO", "rr", () => E2.am("VALUE_MULTIPLE_OF", new E2.kt(), O2.b)), n3(A2, "zL", "bs", () => E2.am("UNDEFINED_PROPERTY", new E2.kq(), O2.b)), n3(A2, "zM", "rq", () => E2.am("UNEXPECTED_PROPERTY", new E2.kr(), O2.e)), n3(A2, "zN", "cO", () => E2.am("UNSATISFIED_DEPENDENCY", new E2.ks(), O2.b)), n3(A2, "AD", "t8", () => E2.r("UNKNOWN_ASSET_MAJOR_VERSION", new E2.lj(), O2.b)), n3(A2, "AE", "t9", () => E2.r("UNKNOWN_ASSET_MINOR_VERSION", new E2.lk(), O2.e)), n3(A2, "Ao", "rV", () => E2.r("ASSET_MIN_VERSION_GREATER_THAN_VERSION", new E2.l4(), O2.b)), n3(A2, "A4", "rC", () => E2.r("INVALID_GL_VALUE", new E2.kL(), O2.b)), n3(A2, "zS", "ru", () => E2.r("ACCESSOR_NORMALIZED_INVALID", new E2.ky(), O2.b)), n3(A2, "zT", "rv", () => E2.r("ACCESSOR_OFFSET_ALIGNMENT", new E2.kz(), O2.b)), n3(A2, "zR", "rt", () => E2.r("ACCESSOR_MATRIX_ALIGNMENT", new E2.kx(), O2.b)), n3(A2, "zU", "rw", () => E2.r("ACCESSOR_SPARSE_COUNT_OUT_OF_RANGE", new E2.kA(), O2.b)), n3(A2, "zV", "rx", () => E2.r("ANIMATION_CHANNEL_TARGET_NODE_SKIN", new E2.kB(), O2.e)), n3(A2, "zW", "ry", () => E2.r("BUFFER_DATA_URI_MIME_TYPE_INVALID", new E2.kC(), O2.b)), n3(A2, "zY", "rz", () => E2.r("BUFFER_VIEW_TOO_BIG_BYTE_STRIDE", new E2.kE(), O2.b)), n3(A2, "zX", "nj", () => E2.r("BUFFER_VIEW_INVALID_BYTE_STRIDE", new E2.kD(), O2.b)), n3(A2, "zZ", "of", () => E2.r("CAMERA_XMAG_YMAG_NEGATIVE", new E2.kF(), O2.e)), n3(A2, "A_", "og", () => E2.r("CAMERA_XMAG_YMAG_ZERO", new E2.kG(), O2.b)), n3(A2, "A0", "rA", () => E2.r("CAMERA_YFOV_GEQUAL_PI", new E2.kH(), O2.e)), n3(A2, "A1", "oh", () => E2.r("CAMERA_ZFAR_LEQUAL_ZNEAR", new E2.kI(), O2.b)), n3(A2, "Ag", "rO", () => E2.r("MATERIAL_ALPHA_CUTOFF_INVALID_MODE", new E2.kX(), O2.e)), n3(A2, "Aj", "nk", () => E2.r("MESH_PRIMITIVE_INVALID_ATTRIBUTE", new E2.l_(), O2.b)), n3(A2, "An", "rU", () => E2.r("MESH_PRIMITIVES_UNEQUAL_TARGETS_COUNT", new E2.l3(), O2.b)), n3(A2, "Al", "rS", () => E2.r("MESH_PRIMITIVE_NO_POSITION", new E2.l1(), O2.e)), n3(A2, "Ai", "rQ", () => E2.r("MESH_PRIMITIVE_INDEXED_SEMANTIC_CONTINUITY", new E2.kZ(), O2.b)), n3(A2, "Am", "rT", () => E2.r("MESH_PRIMITIVE_TANGENT_WITHOUT_NORMAL", new E2.l2(), O2.e)), n3(A2, "Ak", "rR", () => E2.r("MESH_PRIMITIVE_JOINTS_WEIGHTS_MISMATCH", new E2.l0(), O2.b)), n3(A2, "Ah", "rP", () => E2.r("MESH_INVALID_WEIGHTS_COUNT", new E2.kY(), O2.b)), n3(A2, "As", "rZ", () => E2.r("NODE_MATRIX_TRS", new E2.l8(), O2.b)), n3(A2, "Aq", "rX", () => E2.r("NODE_MATRIX_DEFAULT", new E2.l6(), O2.h)), n3(A2, "At", "t_", () => E2.r("NODE_MATRIX_NON_TRS", new E2.l9(), O2.b)), n3(A2, "AA", "t5", () => E2.r("ROTATION_NON_UNIT", new E2.lg(), O2.b)), n3(A2, "AF", "ta", () => E2.r("UNUSED_EXTENSION_REQUIRED", new E2.ll(), O2.b)), n3(A2, "Az", "t4", () => E2.r("NON_REQUIRED_EXTENSION", new E2.lf(), O2.b)), n3(A2, "A3", "rB", () => E2.r("INVALID_EXTENSION_NAME_FORMAT", new E2.kK(), O2.e)), n3(A2, "Ar", "rY", () => E2.r("NODE_EMPTY", new E2.l7(), O2.h)), n3(A2, "Aw", "t2", () => E2.r("NODE_SKINNED_MESH_NON_ROOT", new E2.lc(), O2.e)), n3(A2, "Av", "t1", () => E2.r("NODE_SKINNED_MESH_LOCAL_TRANSFORMS", new E2.lb(), O2.e)), n3(A2, "Au", "t0", () => E2.r("NODE_SKIN_NO_SCENE", new E2.la(), O2.b)), n3(A2, "AB", "t6", () => E2.r("SKIN_NO_COMMON_ROOT", new E2.lh(), O2.b)), n3(A2, "AC", "t7", () => E2.r("SKIN_SKELETON_INVALID", new E2.li(), O2.b)), n3(A2, "Ay", "t3", () => E2.r("NON_RELATIVE_URI", new E2.le(), O2.e)), n3(A2, "Ap", "rW", () => E2.r("MULTIPLE_EXTENSIONS", new E2.l5(), O2.e)), n3(A2, "Ax", "dk", () => E2.r("NON_OBJECT_EXTRAS", new E2.ld(), O2.h)), n3(A2, "A2", "oi", () => E2.r("EXTRA_PROPERTY", new E2.kJ(), O2.h)), n3(A2, "A5", "rD", () => E2.r("KHR_ANIMATION_POINTER_ANIMATION_CHANNEL_TARGET_NODE", new E2.kM(), O2.b)), n3(A2, "A6", "rE", () => E2.r("KHR_ANIMATION_POINTER_ANIMATION_CHANNEL_TARGET_PATH", new E2.kN(), O2.b)), n3(A2, "A7", "rF", () => E2.r("KHR_LIGHTS_PUNCTUAL_LIGHT_SPOT_ANGLES", new E2.kO(), O2.b)), n3(A2, "A8", "rG", () => E2.r("KHR_MATERIALS_ANISOTROPY_ANISOTROPY_TEXTURE_TEXCOORD", new E2.kP(), O2.e)), n3(A2, "A9", "rH", () => E2.r("KHR_MATERIALS_CLEARCOAT_CLEARCOAT_NORMAL_TEXTURE_TEXCOORD", new E2.kQ(), O2.e)), n3(A2, "Aa", "rI", () => E2.r("KHR_MATERIALS_DISPERSION_NO_VOLUME", new E2.kR(), O2.e)), n3(A2, "Ab", "rJ", () => E2.r("KHR_MATERIALS_EMISSIVE_STRENGTH_ZERO_FACTOR", new E2.kS(), O2.e)), n3(A2, "Af", "rN", () => E2.r("KHR_MATERIALS_VOLUME_NO_TRANSMISSION", new E2.kW(), O2.e)), n3(A2, "Ae", "rM", () => E2.r("KHR_MATERIALS_VOLUME_DOUBLE_SIDED", new E2.kV(), O2.e)), n3(A2, "Ac", "rK", () => E2.r("KHR_MATERIALS_IRIDESCENCE_THICKNESS_RANGE_WITHOUT_TEXTURE", new E2.kT(), O2.h)), n3(A2, "Ad", "rL", () => E2.r("KHR_MATERIALS_IRIDESCENCE_THICKNESS_TEXTURE_UNUSED", new E2.kU(), O2.h)), n3(A2, "yO", "qM", () => E2.v("ACCESSOR_TOTAL_OFFSET_ALIGNMENT", new E2.j0(), O2.b)), n3(A2, "yM", "qL", () => E2.v("ACCESSOR_SMALL_BYTESTRIDE", new E2.iZ(), O2.b)), n3(A2, "yN", "o3", () => E2.v("ACCESSOR_TOO_LONG", new E2.j_(), O2.b)), n3(A2, "yP", "qN", () => E2.v("ACCESSOR_USAGE_OVERRIDE", new E2.j1(), O2.b)), n3(A2, "yS", "qQ", () => E2.v("ANIMATION_DUPLICATE_TARGETS", new E2.j4(), O2.b)), n3(A2, "yQ", "qO", () => E2.v("ANIMATION_CHANNEL_TARGET_NODE_MATRIX", new E2.j2(), O2.b)), n3(A2, "yR", "qP", () => E2.v("ANIMATION_CHANNEL_TARGET_NODE_WEIGHTS_NO_MORPHS", new E2.j3(), O2.b)), n3(A2, "yW", "qT", () => E2.v("ANIMATION_SAMPLER_INPUT_ACCESSOR_WITHOUT_BOUNDS", new E2.j8(), O2.b)), n3(A2, "yU", "qR", () => E2.v("ANIMATION_SAMPLER_INPUT_ACCESSOR_INVALID_FORMAT", new E2.j6(), O2.b)), n3(A2, "yY", "qV", () => E2.v("ANIMATION_SAMPLER_OUTPUT_ACCESSOR_INVALID_FORMAT", new E2.ja(), O2.b)), n3(A2, "yV", "qS", () => E2.v("ANIMATION_SAMPLER_INPUT_ACCESSOR_TOO_FEW_ELEMENTS", new E2.j7(), O2.b)), n3(A2, "yX", "qU", () => E2.v("ANIMATION_SAMPLER_OUTPUT_ACCESSOR_INVALID_COUNT", new E2.j9(), O2.b)), n3(A2, "yT", "o4", () => E2.v("ANIMATION_SAMPLER_ACCESSOR_WITH_BYTESTRIDE", new E2.j5(), O2.b)), n3(A2, "yZ", "qW", () => E2.v("BUFFER_MISSING_GLB_DATA", new E2.jb(), O2.b)), n3(A2, "z1", "o5", () => E2.v("BUFFER_VIEW_TOO_LONG", new E2.je(), O2.b)), n3(A2, "z0", "qY", () => E2.v("BUFFER_VIEW_TARGET_OVERRIDE", new E2.jd(), O2.b)), n3(A2, "z_", "qX", () => E2.v("BUFFER_VIEW_TARGET_MISSING", new E2.jc(), O2.aB)), n3(A2, "z2", "qZ", () => E2.v("IMAGE_BUFFER_VIEW_WITH_BYTESTRIDE", new E2.jf(), O2.b)), n3(A2, "z3", "r_", () => E2.v("INCOMPLETE_EXTENSION_SUPPORT", new E2.jg(), O2.h)), n3(A2, "z4", "r0", () => E2.v("INVALID_IBM_ACCESSOR_COUNT", new E2.jh(), O2.b)), n3(A2, "z8", "o7", () => E2.v("MESH_PRIMITIVE_ATTRIBUTES_ACCESSOR_INVALID_FORMAT", new E2.jl(), O2.b)), n3(A2, "z9", "r3", () => E2.v("MESH_PRIMITIVE_ATTRIBUTES_ACCESSOR_UNSIGNED_INT", new E2.jm(), O2.b)), n3(A2, "zh", "o8", () => E2.v("MESH_PRIMITIVE_POSITION_ACCESSOR_WITHOUT_BOUNDS", new E2.ju(), O2.b)), n3(A2, "z7", "r2", () => E2.v("MESH_PRIMITIVE_ACCESSOR_WITHOUT_BYTESTRIDE", new E2.jk(), O2.b)), n3(A2, "z6", "o6", () => E2.v("MESH_PRIMITIVE_ACCESSOR_UNALIGNED", new E2.jj(), O2.b)), n3(A2, "zd", "r7", () => E2.v("MESH_PRIMITIVE_INDICES_ACCESSOR_WITH_BYTESTRIDE", new E2.jq(), O2.b)), n3(A2, "zc", "r6", () => E2.v("MESH_PRIMITIVE_INDICES_ACCESSOR_INVALID_FORMAT", new E2.jp(), O2.b)), n3(A2, "zb", "r5", () => E2.v("MESH_PRIMITIVE_INCOMPATIBLE_MODE", new E2.jo(), O2.e)), n3(A2, "zi", "o9", () => E2.v("MESH_PRIMITIVE_TOO_FEW_TEXCOORDS", new E2.jv(), O2.b)), n3(A2, "zg", "ra", () => E2.v("MESH_PRIMITIVE_NO_TANGENT_SPACE", new E2.jt(), O2.b)), n3(A2, "za", "r4", () => E2.v("MESH_PRIMITIVE_GENERATED_TANGENT_SPACE", new E2.jn(), O2.e)), n3(A2, "zj", "rb", () => E2.v("MESH_PRIMITIVE_UNEQUAL_ACCESSOR_COUNT", new E2.jw(), O2.b)), n3(A2, "zf", "r9", () => E2.v("MESH_PRIMITIVE_MORPH_TARGET_NO_BASE_ACCESSOR", new E2.js(), O2.b)), n3(A2, "ze", "r8", () => E2.v("MESH_PRIMITIVE_MORPH_TARGET_INVALID_ATTRIBUTE_COUNT", new E2.jr(), O2.b)), n3(A2, "zk", "rc", () => E2.v("NODE_LOOP", new E2.jx(), O2.b)), n3(A2, "zl", "rd", () => E2.v("NODE_PARENT_OVERRIDE", new E2.jy(), O2.b)), n3(A2, "zo", "rg", () => E2.v("NODE_WEIGHTS_INVALID", new E2.jB(), O2.b)), n3(A2, "zm", "re", () => E2.v("NODE_SKIN_WITH_NON_SKINNED_MESH", new E2.jz(), O2.b)), n3(A2, "zn", "rf", () => E2.v("NODE_SKINNED_MESH_WITHOUT_SKIN", new E2.jA(), O2.e)), n3(A2, "zp", "rh", () => E2.v("SCENE_NON_ROOT_NODE", new E2.jC(), O2.b)), n3(A2, "zr", "rj", () => E2.v("SKIN_IBM_INVALID_FORMAT", new E2.jE(), O2.b)), n3(A2, "zq", "ri", () => E2.v("SKIN_IBM_ACCESSOR_WITH_BYTESTRIDE", new E2.jD(), O2.b)), n3(A2, "zs", "oa", () => E2.v("TEXTURE_INVALID_IMAGE_MIME_TYPE", new E2.jF(), O2.b)), n3(A2, "zt", "rk", () => E2.v("UNDECLARED_EXTENSION", new E2.jG(), O2.b)), n3(A2, "zu", "rl", () => E2.v("UNEXPECTED_EXTENSION_OBJECT", new E2.jH(), O2.b)), n3(A2, "zv", "Q", () => E2.v("UNRESOLVED_REFERENCE", new E2.jI(), O2.b)), n3(A2, "zw", "rm", () => E2.v("UNSUPPORTED_EXTENSION", new E2.jJ(), O2.h)), n3(A2, "zz", "h1", () => E2.v("UNUSED_OBJECT", new E2.jM(), O2.h)), n3(A2, "zy", "ro", () => E2.v("UNUSED_MESH_WEIGHTS", new E2.jL(), O2.h)), n3(A2, "zx", "rn", () => E2.v("UNUSED_MESH_TANGENT", new E2.jK(), O2.h)), n3(A2, "z5", "r1", () => E2.v("KHR_MATERIALS_VARIANTS_NON_UNIQUE_VARIANT", new E2.ji(), O2.b)), n3(A2, "yA", "qA", () => E2.al("GLB_INVALID_MAGIC", new E2.i5(), O2.b)), n3(A2, "yB", "qB", () => E2.al("GLB_INVALID_VERSION", new E2.i6(), O2.b)), n3(A2, "yD", "qD", () => E2.al("GLB_LENGTH_TOO_SMALL", new E2.i8(), O2.b)), n3(A2, "yu", "qu", () => E2.al("GLB_CHUNK_LENGTH_UNALIGNED", new E2.i_(), O2.b)), n3(A2, "yC", "qC", () => E2.al("GLB_LENGTH_MISMATCH", new E2.i7(), O2.b)), n3(A2, "yv", "qv", () => E2.al("GLB_CHUNK_TOO_BIG", new E2.i0(), O2.b)), n3(A2, "yy", "qy", () => E2.al("GLB_EMPTY_CHUNK", new E2.i3(), O2.b)), n3(A2, "yx", "qx", () => E2.al("GLB_EMPTY_BIN_CHUNK", new E2.i2(), O2.h)), n3(A2, "yw", "qw", () => E2.al("GLB_DUPLICATE_CHUNK", new E2.i1(), O2.b)), n3(A2, "yG", "qG", () => E2.al("GLB_UNEXPECTED_END_OF_CHUNK_HEADER", new E2.ib(), O2.b)), n3(A2, "yF", "qF", () => E2.al("GLB_UNEXPECTED_END_OF_CHUNK_DATA", new E2.ia(), O2.b)), n3(A2, "yH", "qH", () => E2.al("GLB_UNEXPECTED_END_OF_HEADER", new E2.ic(), O2.b)), n3(A2, "yI", "qI", () => E2.al("GLB_UNEXPECTED_FIRST_CHUNK", new E2.id(), O2.b)), n3(A2, "yE", "qE", () => E2.al("GLB_UNEXPECTED_BIN_CHUNK", new E2.i9(), O2.b)), n3(A2, "yJ", "qJ", () => E2.al("GLB_UNKNOWN_CHUNK_TYPE", new E2.ie(), O2.e)), n3(A2, "yz", "qz", () => E2.al("GLB_EXTRA_DATA", new E2.i4(), O2.e)), n3(A2, "yL", "qK", () => E2.nx("^(?:\\/(?:[^/~]|~0|~1)*)*$")), n3(A2, "B9", "ol", () => E2.uQ(1)), n3(A2, "Bc", "tp", () => E2.uM()), n3(A2, "Bg", "tt", () => E2.pa()), n3(A2, "Bd", "tq", () => {
        var e5 = E2.v3();
        return e5.a[3] = 1, e5;
      }), n3(A2, "Be", "tr", () => E2.pa());
    })(), (function() {
      (function() {
        var e4 = /* @__PURE__ */ __name(function(e5) {
          var t4 = {};
          return t4[e5] = 1, Object.keys(T2.convertToFastObject(t4))[0];
        }, "e");
        j2.getIsolateTag = function(t4) {
          return e4("___dart_" + t4 + j2.isolateTag);
        };
        for (var t3 = "___dart_isolate_tags_", n3 = Object[t3] || (Object[t3] = /* @__PURE__ */ Object.create(null)), r3 = "_ZxYxX", i3 = 0; ; i3++) {
          var a3 = e4(r3 + "_" + i3 + "_");
          if (!(a3 in n3)) {
            n3[a3] = 1, j2.isolateTag = a3;
            break;
          }
        }
        j2.dispatchPropertyName = j2.getIsolateTag("dispatch_record");
      })(), T2.setOrUpdateInterceptorsByTag({
        ArrayBuffer: D2.cV,
        DataView: E2.dF,
        ArrayBufferView: E2.dF,
        Float32Array: E2.f8,
        Float64Array: E2.f9,
        Int16Array: E2.fa,
        Int32Array: E2.fb,
        Int8Array: E2.fc,
        Uint16Array: E2.fd,
        Uint32Array: E2.fe,
        Uint8ClampedArray: E2.dG,
        CanvasPixelArray: E2.dG,
        Uint8Array: E2.cy
      }), T2.setOrUpdateLeafTags({
        ArrayBuffer: true,
        DataView: true,
        ArrayBufferView: false,
        Float32Array: true,
        Float64Array: true,
        Int16Array: true,
        Int32Array: true,
        Int8Array: true,
        Uint16Array: true,
        Uint32Array: true,
        Uint8ClampedArray: true,
        CanvasPixelArray: true,
        Uint8Array: false
      }), E2.d_.$nativeSuperclassTag = "ArrayBufferView", E2.e7.$nativeSuperclassTag = "ArrayBufferView", E2.e8.$nativeSuperclassTag = "ArrayBufferView", E2.dE.$nativeSuperclassTag = "ArrayBufferView", E2.e9.$nativeSuperclassTag = "ArrayBufferView", E2.ea.$nativeSuperclassTag = "ArrayBufferView", E2.aw.$nativeSuperclassTag = "ArrayBufferView";
    })(), Function.prototype.$1 = function(e4) {
      return this(e4);
    }, Function.prototype.$0 = function() {
      return this();
    }, Function.prototype.$2 = function(e4, t3) {
      return this(e4, t3);
    }, Function.prototype.$1$1 = function(e4) {
      return this(e4);
    }, Function.prototype.$1$0 = function() {
      return this();
    }, Function.prototype.$3 = function(e4, t3, n3) {
      return this(e4, t3, n3);
    }, Function.prototype.$4 = function(e4, t3, n3, r3) {
      return this(e4, t3, n3, r3);
    }, Function.prototype.$1$2 = function(e4, t3) {
      return this(e4, t3);
    }, Function.prototype.$2$0 = function() {
      return this();
    }, m2(k2), p2(A2), (function(e4) {
      if (typeof document > "u") {
        e4(null);
        return;
      }
      if (document.currentScript !== void 0) {
        e4(document.currentScript);
        return;
      }
      var t3 = document.scripts;
      function n3(r4) {
        for (var i3 = 0; i3 < t3.length; ++i3) t3[i3].removeEventListener("load", n3, false);
        e4(r4.target);
      }
      __name(n3, "n");
      for (var r3 = 0; r3 < t3.length; ++r3) t3[r3].addEventListener("load", n3, false);
    })(function(e4) {
      j2.currentScript = e4;
      var t3 = E2.xD;
      typeof dartMainRunner == "function" ? dartMainRunner(t3, []) : t3([]);
    });
  })();
})))(), 1);
var x = /* @__PURE__ */ __name((e2, t2) => b.default.validateBytes(e2, t2), "x");
var S = "/api/customizer";
var C = /* @__PURE__ */ __name(() => (/* @__PURE__ */ new Date()).toISOString(), "C");
var w = /* @__PURE__ */ __name((e2) => e2 ? `${S}/assets/${e2}` : null, "w");
var T = /* @__PURE__ */ __name((e2, t2 = 200) => Response.json(e2, {
  status: t2,
  headers: {
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff"
  }
}), "T");
function E(e2) {
  return p(e2.DB && e2.MATERIAL_ASSETS, "The material library is not connected. Please try again later.", 503), e2.DB;
}
__name(E, "E");
async function D(e2, t2) {
  p(t2.CUSTOMIZER_ADMIN_TOKEN?.length >= 32, "Material management has not been enabled. Configure the server access key.", 503);
  let n2 = e2.headers.get("Authorization")?.replace(/^Bearer /, "") || "", r2 = /* @__PURE__ */ __name(async (e3) => new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(e3))), "r"), [i2, a2] = await Promise.all([r2(n2), r2(t2.CUSTOMIZER_ADMIN_TOKEN)]), o2 = 0;
  for (let e3 = 0; e3 < i2.length; e3++) o2 |= i2[e3] ^ a2[e3];
  p(o2 === 0, "The studio access key is incorrect.", 401);
}
__name(D, "D");
async function O(e2, t2) {
  p(Number(e2.headers.get("content-length") || 0) <= t2, "This file is too large.", 413), p(e2.body, "The upload is empty.");
  let n2 = e2.body.getReader(), r2 = [], i2 = 0;
  for (; ; ) {
    let { done: e3, value: a3 } = await n2.read();
    if (e3) break;
    if (i2 += a3.byteLength, i2 > t2) throw await n2.cancel(), new f(413, "This file is too large.");
    r2.push(a3);
  }
  let a2 = new Uint8Array(i2), o2 = 0;
  for (let e3 of r2) a2.set(e3, o2), o2 += e3.byteLength;
  return a2;
}
__name(O, "O");
async function k(e2) {
  p(e2.headers.get("content-type")?.includes("application/json"), "Send JSON configuration.", 415);
  try {
    return JSON.parse(new TextDecoder().decode(await O(e2, 65536)));
  } catch (e3) {
    throw e3 instanceof f ? e3 : new f(400, "Invalid JSON configuration.");
  }
}
__name(k, "k");
async function A(e2) {
  let { results: t2 } = await e2.prepare("SELECT * FROM customizer_samples ORDER BY kind, name").all();
  return t2.map((e3) => {
    let t3 = JSON.parse(e3.config);
    return {
      ...t3,
      id: e3.id,
      name: e3.name,
      kind: e3.kind,
      active: !!e3.active,
      revision: e3.revision,
      textures: Object.fromEntries(Object.entries(t3.maps).map(([e4, t4]) => [e4, w(t4)]))
    };
  });
}
__name(A, "A");
async function j(e2, t2, n2) {
  p(typeof t2 == "string", "Choose an uploaded file.");
  let r2 = await e2.prepare("SELECT * FROM customizer_assets WHERE id = ?").bind(t2).first();
  return p(r2 && (!n2 || r2.kind === n2), "That uploaded file is unavailable.", 400), {
    ...r2,
    metadata: JSON.parse(r2.metadata),
    url: w(r2.id)
  };
}
__name(j, "j");
async function M(e2, t2 = false) {
  let n2 = await A(e2), { results: r2 } = await e2.prepare("SELECT * FROM customizer_rooms").all();
  return {
    rooms: d.map((e3) => {
      let t3 = r2.find((t4) => t4.product_id === e3.id);
      return {
        ...e3,
        modelAssetId: t3?.model_asset_id || null,
        modelUrl: w(t3?.model_asset_id),
        revision: t3?.revision || 0,
        bindings: {
          wood: [],
          fabric: []
        },
        sampleIds: {
          wood: [],
          fabric: []
        },
        defaults: {
          wood: null,
          fabric: null
        },
        ...t3 ? JSON.parse(t3.config) : {}
      };
    }),
    samples: t2 ? n2 : n2.filter((e3) => e3.active)
  };
}
__name(M, "M");
async function N(e2, t2) {
  let n2 = new URL(e2.url);
  try {
    let r2 = E(t2), i2 = n2.pathname.slice(15);
    if (!["GET", "HEAD"].includes(e2.method)) {
      let t3 = e2.headers.get("Origin");
      p(!t3 || t3 === n2.origin, "Cross-origin writes are not allowed.", 403);
    }
    if (i2.startsWith("/admin") && await D(e2, t2), e2.method === "GET" && i2 === "/catalog") return T(await M(r2));
    if (e2.method === "GET" && i2 === "/admin/catalog") {
      let e3 = await M(r2, true), { results: t3 } = await r2.prepare("SELECT * FROM customizer_assets WHERE kind = 'model' ORDER BY created_at DESC LIMIT 100").all();
      return T({
        ...e3,
        models: t3.map((e4) => ({
          id: e4.id,
          url: w(e4.id),
          ...JSON.parse(e4.metadata)
        }))
      });
    }
    let a2 = i2.match(/^\/assets\/([a-f\d-]{36})$/);
    if (a2 && ["GET", "HEAD"].includes(e2.method)) {
      let n3 = await r2.prepare("SELECT * FROM customizer_assets WHERE id = ?").bind(a2[1]).first();
      p(n3, "File not found.", 404);
      let i3 = await t2.MATERIAL_ASSETS.get(n3.object_key);
      return p(i3, "File not found.", 404), new Response(e2.method === "HEAD" ? null : i3.body, { headers: {
        "Content-Type": n3.mime,
        "Content-Length": String(n3.size),
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
        "Content-Security-Policy": "default-src 'none'; sandbox",
        "Cross-Origin-Resource-Policy": "same-origin",
        ETag: i3.httpEtag
      } });
    }
    if (e2.method === "POST" && i2 === "/admin/assets") {
      let i3 = n2.searchParams.get("kind");
      p(["image", "model"].includes(i3), "Choose an image or model upload.");
      let a3 = await O(e2, (i3 === "model" ? 20 : 8) * 1024 * 1024), o3, s3;
      if (i3 === "model") {
        o3 = y(a3);
        let e3 = await x(a3, {
          maxIssues: 20,
          externalResourceFunction: /* @__PURE__ */ __name(() => Promise.reject(/* @__PURE__ */ Error("External resources are disabled.")), "externalResourceFunction")
        });
        p(!e3.issues.truncated, "The model has too many validation issues. Clean up the export and try again."), p(!e3.issues.numErrors, `The GLB did not pass validation: ${e3.issues.messages.find((e4) => e4.severity === 0)?.message || "Please check the export."}`), o3.warnings = e3.issues.messages.filter((e4) => e4.severity === 1).map((e4) => e4.message), s3 = "model/gltf-binary";
      } else o3 = v(a3), s3 = o3.mime;
      o3.filename = (e2.headers.get("X-File-Name") || "Upload").slice(0, 180);
      let c2 = crypto.randomUUID(), l2 = `${i3}/${c2}`;
      await t2.MATERIAL_ASSETS.put(l2, a3, { httpMetadata: { contentType: s3 } });
      try {
        await r2.prepare("INSERT INTO customizer_assets (id, kind, object_key, mime, size, metadata, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)").bind(c2, i3, l2, s3, a3.length, JSON.stringify(o3), C()).run();
      } catch (e3) {
        throw await t2.MATERIAL_ASSETS.delete(l2), e3;
      }
      return T({
        id: c2,
        url: w(c2),
        ...o3
      }, 201);
    }
    let o2 = i2.match(/^\/admin\/samples(?:\/([a-f\d-]{36}))?$/);
    if (o2 && ["POST", "PUT"].includes(e2.method)) {
      p(e2.method === "PUT" ? !!o2[1] : !o2[1], "Invalid sample endpoint.", 405);
      let t3 = await k(e2), n3 = g(t3);
      for (let e3 of Object.values(n3.maps).filter(Boolean)) await j(r2, e3, "image");
      let i3 = o2[1] || crypto.randomUUID();
      if (o2[1]) {
        let e3 = await r2.prepare("SELECT * FROM customizer_samples WHERE id = ?").bind(i3).first();
        p(e3, "Sample not found.", 404), p(e3.kind === n3.kind, "A saved sample cannot change between wood and fabric."), p((await r2.prepare("UPDATE customizer_samples SET name = ?, config = ?, active = ?, revision = revision + 1, updated_at = ?\n          WHERE id = ? AND revision = ? AND (? = 1 OR NOT EXISTS (\n            SELECT 1 FROM customizer_rooms r, json_each(r.config, '$.sampleIds.wood') w WHERE w.value = ?\n            UNION ALL SELECT 1 FROM customizer_rooms r, json_each(r.config, '$.sampleIds.fabric') f WHERE f.value = ?))").bind(n3.name, JSON.stringify(n3), Number(n3.active), C(), i3, t3.revision ?? -1, Number(n3.active), i3, i3).run()).meta.changes, "This sample changed, or is still assigned to a bedroom. Reload and remove its room assignments before archiving.", 409);
      } else await r2.prepare("INSERT INTO customizer_samples (id, name, kind, config, active, revision, updated_at) VALUES (?, ?, ?, ?, ?, 1, ?)").bind(i3, n3.name, n3.kind, JSON.stringify(n3), Number(n3.active), C()).run();
      return T({ id: i3 }, o2[1] ? 200 : 201);
    }
    let s2 = i2.match(/^\/admin\/rooms\/([a-z\d-]+)$/);
    if (e2.method === "PUT" && s2) {
      let t3 = s2[1];
      p(d.some((e3) => e3.id === t3), "Bedroom not found.", 404);
      let n3 = await k(e2), i3 = await j(r2, n3.modelAssetId, "model"), a3 = _(n3, i3.metadata, await A(r2)), o3 = [...a3.sampleIds.wood, ...a3.sampleIds.fabric];
      return p((await r2.prepare("INSERT INTO customizer_rooms (product_id, model_asset_id, config, revision, updated_at)\n        SELECT ?, ?, ?, 1, ? WHERE (SELECT COUNT(*) FROM customizer_samples WHERE active = 1 AND id IN (SELECT value FROM json_each(?))) = ?\n        AND (? = 0 OR EXISTS (SELECT 1 FROM customizer_rooms WHERE product_id = ?))\n        ON CONFLICT(product_id) DO UPDATE SET model_asset_id = excluded.model_asset_id, config = excluded.config,\n          revision = customizer_rooms.revision + 1, updated_at = excluded.updated_at WHERE customizer_rooms.revision = ?").bind(t3, i3.id, JSON.stringify(a3), C(), JSON.stringify(o3), o3.length, n3.revision ?? -1, t3, n3.revision ?? -1).run()).meta.changes, "The bedroom or samples changed while you were editing. Reload and try again.", 409), T({ productId: t3 });
    }
    return T({ error: "Endpoint not found." }, 404);
  } catch (e3) {
    return e3 instanceof f || console.error("Customizer API failure:", e3), T({ error: e3 instanceof f ? e3.message : "The material library is temporarily unavailable. Please try again." }, e3.status || 500);
  }
}
__name(N, "N");
var P = { async fetch(e2, t2) {
  let n2 = new URL(e2.url);
  return n2.pathname.startsWith("/api/customizer/") ? N(e2, t2) : n2.pathname.startsWith("/assets/") && t2.ASSETS ? t2.ASSETS.fetch(e2) : ["GET", "HEAD"].includes(e2.method) ? new Response(e2.method === "HEAD" ? null : u, { headers: {
    "Content-Type": "text/html; charset=utf-8",
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": "no-cache"
  } }) : new Response("Method not allowed", { status: 405 });
} };

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e2) {
      console.error("Failed to drain the unused request body.", e2);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e2) {
  return {
    name: e2?.name,
    message: e2?.message ?? String(e2),
    stack: e2?.stack,
    cause: e2?.cause === void 0 ? void 0 : reduceError(e2.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e2) {
    const error = reduceError(e2);
    const body = JSON.stringify(error);
    const headers = {
      "Content-Type": "application/json",
      "MF-Experimental-Error-Stack": "true"
    };
    const encoded = encodeURIComponent(body);
    if (encoded.length <= 8192) {
      headers["MF-Experimental-Error-Stack-Payload"] = encoded;
    }
    return new Response(body, { status: 500, headers });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-uVdKBQ/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = P;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-uVdKBQ/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
