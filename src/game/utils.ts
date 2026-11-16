import * as THREE from 'three';

export const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const damp = (a: number, b: number, lambda: number, dt: number) =>
  lerp(a, b, 1 - Math.exp(-lambda * dt));
export const smoothstep = (t: number) => t * t * (3 - 2 * t);
export const TAU = Math.PI * 2;

export function shortestAngle(from: number, to: number): number {
  let d = (to - from) % TAU;
  if (d > Math.PI) d -= TAU;
  if (d < -Math.PI) d += TAU;
  return d;
}

export function dampAngle(from: number, to: number, lambda: number, dt: number): number {
  return from + shortestAngle(from, to) * (1 - Math.exp(-lambda * dt));
}

export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface Box2 {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
}

/** Push a circle out of an axis aligned box. Returns the correction vector. */
export function resolveCircleBox(
  x: number,
  z: number,
  r: number,
  box: Box2,
  out: { x: number; z: number }
) {
  const cx = clamp(x, box.minX, box.maxX);
  const cz = clamp(z, box.minZ, box.maxZ);
  let dx = x - cx;
  let dz = z - cz;
  const d2 = dx * dx + dz * dz;
  if (d2 > r * r) {
    out.x = 0;
    out.z = 0;
    return false;
  }
  if (d2 > 1e-8) {
    const d = Math.sqrt(d2);
    out.x = (dx / d) * (r - d);
    out.z = (dz / d) * (r - d);
  } else {
    // center inside the box: push out along the shallowest axis
    const toLeft = x - box.minX;
    const toRight = box.maxX - x;
    const toBack = z - box.minZ;
    const toFront = box.maxZ - z;
    const m = Math.min(toLeft, toRight, toBack, toFront);
    out.x = 0;
    out.z = 0;
    if (m === toLeft) out.x = -(toLeft + r);
    else if (m === toRight) out.x = toRight + r;
    else if (m === toBack) out.z = -(toBack + r);
    else out.z = toFront + r;
  }
  return true;
}

/** Ray/segment vs axis aligned box (XZ plane). Returns distance along the ray or -1. */
export function rayBoxXZ(
  ox: number,
  oz: number,
  dx: number,
  dz: number,
  box: Box2,
  maxDist: number
): number {
  let tmin = 0;
  let tmax = maxDist;
  // X slab
  if (Math.abs(dx) < 1e-6) {
    if (ox < box.minX || ox > box.maxX) return -1;
  } else {
    let t1 = (box.minX - ox) / dx;
    let t2 = (box.maxX - ox) / dx;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    if (tmin > tmax) return -1;
  }
  if (Math.abs(dz) < 1e-6) {
    if (oz < box.minZ || oz > box.maxZ) return -1;
  } else {
    let t1 = (box.minZ - oz) / dz;
    let t2 = (box.maxZ - oz) / dz;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    if (tmin > tmax) return -1;
  }
  return tmin;
}

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _v = new THREE.Vector3();
const _s = new THREE.Vector3(1, 1, 1);

/** Clone a geometry transformed into place (used for merging static props). */
export function placed(
  geo: THREE.BufferGeometry,
  x: number,
  y: number,
  z: number,
  rotY = 0,
  scaleX = 1,
  scaleY = 1,
  scaleZ = 1
): THREE.BufferGeometry {
  const g = geo.clone();
  _e.set(0, rotY, 0);
  _q.setFromEuler(_e);
  _v.set(x, y, z);
  _s.set(scaleX, scaleY, scaleZ);
  _m.compose(_v, _q, _s);
  g.applyMatrix4(_m);
  return g;
}

/** Box geometry whose UVs are scaled so textures keep a constant world size. */
export function boxGeo(w: number, h: number, d: number, tile = 2): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv as THREE.BufferAttribute;
  const scales: [number, number][] = [
    [d / tile, h / tile],
    [d / tile, h / tile],
    [w / tile, d / tile],
    [w / tile, d / tile],
    [w / tile, h / tile],
    [w / tile, h / tile],
  ];
  for (let f = 0; f < 6; f++) {
    for (let i = 0; i < 4; i++) {
      const idx = f * 4 + i;
      uv.setXY(idx, uv.getX(idx) * scales[f][0], uv.getY(idx) * scales[f][1]);
    }
  }
  uv.needsUpdate = true;
  return g;
}

/** Facade box: UVs scaled so a texture tile maps to ~4m x 3.2m of wall. */
export function facadeGeo(w: number, h: number, d: number, tileW = 4, tileH = 3.2): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv as THREE.BufferAttribute;
  const scales: [number, number][] = [
    [Math.max(1, Math.round(d / tileW)), Math.max(1, Math.round(h / tileH))],
    [Math.max(1, Math.round(d / tileW)), Math.max(1, Math.round(h / tileH))],
    [1, 1],
    [1, 1],
    [Math.max(1, Math.round(w / tileW)), Math.max(1, Math.round(h / tileH))],
    [Math.max(1, Math.round(w / tileW)), Math.max(1, Math.round(h / tileH))],
  ];
  for (let f = 0; f < 6; f++) {
    for (let i = 0; i < 4; i++) {
      const idx = f * 4 + i;
      uv.setXY(idx, uv.getX(idx) * scales[f][0], uv.getY(idx) * scales[f][1]);
    }
  }
  uv.needsUpdate = true;
  return g;
}

/** Box tapered at the top - used for car bodies and cabin shells. */
export function taperedBox(
  w: number,
  h: number,
  d: number,
  topX = 1,
  topZ = 1,
  tile = 2
): THREE.BufferGeometry {
  const g = boxGeo(w, h, d, tile);
  const pos = g.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    if (y > 0) {
      pos.setX(i, pos.getX(i) * topX);
      pos.setZ(i, pos.getZ(i) * topZ);
    }
  }
  pos.needsUpdate = true;
  g.computeVertexNormals();
  return g;
}

/** Triangular prism used for gabled house roofs (ridge along X). */
export function gableGeo(w: number, h: number, d: number): THREE.BufferGeometry {
  const hw = w / 2;
  const hd = d / 2;
  const p: number[] = [];
  const push = (...v: number[]) => p.push(...v);
  // back slope
  push(-hw, 0, -hd, hw, 0, -hd, hw, h, 0);
  push(-hw, 0, -hd, hw, h, 0, -hw, h, 0);
  // front slope
  push(hw, 0, hd, -hw, 0, hd, -hw, h, 0);
  push(hw, 0, hd, -hw, h, 0, hw, h, 0);
  // left gable
  push(-hw, 0, hd, -hw, 0, -hd, -hw, h, 0);
  // right gable
  push(hw, 0, -hd, hw, 0, hd, hw, h, 0);
  // bottom
  push(-hw, 0, hd, hw, 0, hd, hw, 0, -hd);
  push(-hw, 0, hd, hw, 0, -hd, -hw, 0, -hd);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  const uv: number[] = [];
  for (let i = 0; i < p.length; i += 3) uv.push(p[i] * 0.25, p[i + 2] * 0.25);
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.computeVertexNormals();
  return geo;
}
