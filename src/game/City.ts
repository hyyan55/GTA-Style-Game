import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { mulberry32, boxGeo, facadeGeo, placed, gableGeo, taperedBox } from './utils';
import {
  asphaltTexture,
  concreteTexture,
  grassTexture,
  roofTexture,
  woodTexture,
  facadeTextures,
  shopTexture,
  lightPoolTexture,
  signTexture,
} from './textures';

export const N = 7;
export const ROAD = 14;
export const BLOCK = 34;
export const CELL = ROAD + BLOCK;
export const CITY_SIZE = N * CELL + ROAD; // 350
export const ORIGIN = -CITY_SIZE / 2;
export const BOUNDS = CITY_SIZE / 2 + 6;
export const ROAD_CENTERS: number[] = [];
for (let k = 0; k <= N; k++) ROAD_CENTERS.push(ORIGIN + ROAD / 2 + k * CELL);

export const blockCenter = (bx: number, bz: number) => ({
  x: ORIGIN + ROAD + bx * CELL + BLOCK / 2,
  z: ORIGIN + ROAD + bz * CELL + BLOCK / 2,
});

export interface BuildingInfo {
  x: number;
  z: number;
  w: number;
  d: number;
  h: number;
}

export interface Box2 {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
}

export interface VehicleSpawn {
  x: number;
  z: number;
  heading: number;
  color: string;
  kind: 'sedan' | 'suv' | 'van';
}

export interface CityData {
  colliders: Box2[];
  buildings: BuildingInfo[];
  vehicleSpawns: VehicleSpawn[];
  pedLoops: THREE.Vector3[][];
  trafficRoads: number[];
  depot: THREE.Vector3;
  deliverySpots: THREE.Vector3[];
  pickupSpots: THREE.Vector3[];
  policeSpawn: THREE.Vector3;
  facadeMaterials: THREE.MeshStandardMaterial[];
  lightPoolMaterial: THREE.MeshBasicMaterial;
  lampMaterial: THREE.MeshStandardMaterial;
  groundHeightAt: (x: number, z: number) => number;
  zoneAt: (x: number, z: number) => string;
  group: THREE.Group;
}

class Batch {
  private map = new Map<THREE.Material, THREE.BufferGeometry[]>();
  add(mat: THREE.Material, geo: THREE.BufferGeometry) {
    const g = (geo.index ? geo.toNonIndexed() : geo) as THREE.BufferGeometry;
    if (!g.attributes.normal) g.computeVertexNormals();
    if (!g.attributes.uv) {
      const count = g.attributes.position.count;
      g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(count * 2), 2));
    }
    let arr = this.map.get(mat);
    if (!arr) {
      arr = [];
      this.map.set(mat, arr);
    }
    arr.push(g);
  }
  flush(parent: THREE.Object3D, castShadow: boolean, receiveShadow: boolean, name: string) {
    let i = 0;
    this.map.forEach((geos, mat) => {
      if (!geos.length) return;
      const merged = mergeGeometries(geos, false);
      geos.forEach((g) => g.dispose());
      if (!merged) return;
      merged.computeBoundingSphere();
      const mesh = new THREE.Mesh(merged, mat);
      mesh.name = `${name}-${i++}`;
      mesh.castShadow = castShadow;
      mesh.receiveShadow = receiveShadow;
      mesh.matrixAutoUpdate = false;
      parent.add(mesh);
    });
    this.map.clear();
  }
}

const SIDEWALK = 2.5;

export function buildCity(scene: THREE.Scene, quality: 'low' | 'medium' | 'high'): CityData {
  const group = new THREE.Group();
  group.name = 'city';
  scene.add(group);

  const colliders: Box2[] = [];
  const buildings: BuildingInfo[] = [];
  const vehicleSpawns: VehicleSpawn[] = [];
  const pedLoops: THREE.Vector3[][] = [];

  // ---------- materials ----------
  const facadeMats: THREE.MeshStandardMaterial[] = [];
  const styles = ['stone', 'brick', 'glass', 'panel', 'residential'] as const;
  const facadeSets = styles.map((s, i) => facadeTextures(s, 11 + i * 37));
  facadeSets.forEach((set, i) => {
    const mat = new THREE.MeshStandardMaterial({
      map: set.map,
      emissiveMap: set.emissive,
      emissive: new THREE.Color(0xffcf94),
      emissiveIntensity: 0,
      roughness: set.style === 'glass' ? 0.35 : 0.85,
      metalness: set.style === 'glass' ? 0.45 : 0.05,
      envMapIntensity: 0.6,
    });
    facadeMats.push(mat);
  });

  const shopMats = [0, 1].map((i) => {
    const t = shopTexture(100 + i * 13);
    return new THREE.MeshStandardMaterial({
      map: t,
      emissiveMap: t,
      emissive: new THREE.Color(0xffc98d),
      emissiveIntensity: 0.12,
      roughness: 0.55,
      metalness: 0.15,
    });
  });

  const concreteMat = new THREE.MeshStandardMaterial({ map: concreteTexture(), roughness: 0.95, metalness: 0 });
  const roofMat = new THREE.MeshStandardMaterial({ map: roofTexture(), roughness: 0.95 });
  const grassMat = new THREE.MeshStandardMaterial({ map: grassTexture(), roughness: 1 });
  const asphaltMat = new THREE.MeshStandardMaterial({ map: asphaltTexture(), roughness: 0.92, metalness: 0.04 });
  const woodMat = new THREE.MeshStandardMaterial({ map: woodTexture(), roughness: 0.85 });
  const metalMat = new THREE.MeshStandardMaterial({ color: 0x393e45, roughness: 0.55, metalness: 0.7 });
  const darkMetalMat = new THREE.MeshStandardMaterial({ color: 0x22262b, roughness: 0.6, metalness: 0.6 });
  const markingMat = new THREE.MeshStandardMaterial({
    color: 0xd6d2c6,
    roughness: 0.85,
    metalness: 0,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  });
  const yellowMat = new THREE.MeshStandardMaterial({
    color: 0xcaa63f,
    roughness: 0.85,
    metalness: 0,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  });
  const lampMat = new THREE.MeshStandardMaterial({
    color: 0x2a2d31,
    emissive: new THREE.Color(0xffd7a0),
    emissiveIntensity: 0,
    roughness: 0.4,
    metalness: 0.5,
  });
  const lightPoolMat = new THREE.MeshBasicMaterial({
    map: lightPoolTexture(),
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const treeMat = new THREE.MeshStandardMaterial({ color: 0x4b7239, roughness: 0.95, flatShading: true });
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3626, roughness: 0.95 });
  const signMat = new THREE.MeshBasicMaterial({ color: 0xffd9a0 });
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x9fc4d4,
    roughness: 0.15,
    metalness: 0.6,
    transparent: true,
    opacity: 0.7,
  });
  const waterMat = new THREE.MeshStandardMaterial({
    color: 0x2f5666,
    roughness: 0.12,
    metalness: 0.75,
    transparent: true,
    opacity: 0.9,
  });

  const staticBatch = new Batch(); // facades, concrete, roofs
  const propBatch = new Batch(); // poles, benches, misc metal
  const markingBatch = new Batch();
  const poolBatch = new Batch();
  const lampBatch = new Batch();

  const addFacade = (
    mat: THREE.Material,
    x: number,
    y: number,
    z: number,
    w: number,
    h: number,
    d: number,
    rotY = 0
  ) => staticBatch.add(mat, placed(facadeGeo(w, h, d), x, y, z, rotY));

  // ---------- ground ----------
  const groundGeo = new THREE.PlaneGeometry(900, 900, 1, 1);
  const groundUV = groundGeo.attributes.uv as THREE.BufferAttribute;
  for (let i = 0; i < groundUV.count; i++) groundUV.setXY(i, groundUV.getX(i) * 90, groundUV.getY(i) * 90);
  const ground = new THREE.Mesh(groundGeo, asphaltMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  ground.matrixAutoUpdate = false;
  ground.updateMatrix();
  group.add(ground);

  // ---------- helpers ----------
  const rndSeed = (bx: number, bz: number) => mulberry32((bx * 73856093) ^ (bz * 19349663) ^ 0x9e3779b9);

  const addCollider = (x: number, z: number, w: number, d: number) => {
    colliders.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2 });
  };

  const curbMat = new THREE.MeshStandardMaterial({ color: 0x6b6b66, roughness: 0.95 });
  const addSlab = (cx: number, cz: number) => {
    // curb lip slightly wider than the block, then the raised sidewalk surface
    staticBatch.add(curbMat, placed(boxGeo(BLOCK + 0.6, 0.2, BLOCK + 0.6, 2), cx, 0.1, cz));
    staticBatch.add(concreteMat, placed(boxGeo(BLOCK, 0.24, BLOCK, 2), cx, 0.12, cz));
  };

  const addBuilding = (
    x: number,
    z: number,
    w: number,
    d: number,
    h: number,
    matIndex: number,
    opts: { shop?: boolean; awnings?: number; roofDetail?: boolean } = {}
  ) => {
    addFacade(facadeMats[matIndex], x, h / 2 + 0.24, z, w, h, d);
    buildings.push({ x, z, w, d, h });
    addCollider(x, z, w, d);
    if (opts.shop) {
      const rnd = rndSeed(Math.round(x), Math.round(z));
      const shopMat = shopMats[Math.floor(rnd() * shopMats.length)];
      staticBatch.add(shopMat, placed(boxGeo(w + 0.25, 3.6, d + 0.25, 4), x, 2.04, z));
      // awnings + signs on the street-facing sides
      for (let i = 0; i < 4; i++) {
        if (rnd() > 0.55) continue;
        const along = i % 2 === 0 ? w : d;
        const awningLen = along * (0.55 + rnd() * 0.3);
        const colors = [0x9c3b32, 0x2f5c78, 0xa8812f, 0x2f6b52, 0x6b3f78];
        const awnMat = new THREE.MeshStandardMaterial({
          color: colors[Math.floor(rnd() * colors.length)],
          roughness: 0.8,
        });
        const off = 0.75;
        const yy = 4.15;
        if (i < 2) {
          const zEdge = z + (i === 0 ? d / 2 + off : -d / 2 - off);
          propBatch.add(awnMat, placed(boxGeo(awningLen, 0.16, 1.5, 2), x, yy, zEdge, 0, 1, 1, 1));
          staticBatch.add(
            signMat,
            placed(boxGeo(awningLen * 0.6, 0.55, 0.12, 2), x, yy + 0.55, zEdge + (i === 0 ? 0.2 : -0.2))
          );
        } else {
          const xEdge = x + (i === 2 ? w / 2 + off : -w / 2 - off);
          propBatch.add(awnMat, placed(boxGeo(1.5, 0.16, awningLen, 2), xEdge, yy, z));
          staticBatch.add(
            signMat,
            placed(boxGeo(0.12, 0.55, awningLen * 0.6, 2), xEdge + (i === 2 ? 0.2 : -0.2), yy + 0.55, z)
          );
        }
      }
    }
    if (opts.roofDetail && h > 20) {
      // parapet
      const t = 0.35;
      staticBatch.add(roofMat, placed(boxGeo(w, 0.7, t, 2), x, h + 0.24, z + d / 2 - t / 2));
      staticBatch.add(roofMat, placed(boxGeo(w, 0.7, t, 2), x, h + 0.24, z - d / 2 + t / 2));
      staticBatch.add(roofMat, placed(boxGeo(t, 0.7, d, 2), x + w / 2 - t / 2, h + 0.24, z));
      staticBatch.add(roofMat, placed(boxGeo(t, 0.7, d, 2), x - w / 2 + t / 2, h + 0.24, z));
      // roof units
      const rnd = rndSeed(Math.round(x * 3), Math.round(z * 3));
      const count = 1 + Math.floor(rnd() * 3);
      for (let i = 0; i < count; i++) {
        const uw = 2 + rnd() * 3;
        const ud = 2 + rnd() * 3;
        propBatch.add(
          darkMetalMat,
          placed(
            boxGeo(uw, 1 + rnd(), ud, 1),
            x + (rnd() - 0.5) * (w - uw - 2),
            h + 0.24 + 0.5,
            z + (rnd() - 0.5) * (d - ud - 2)
          )
        );
      }
      if (h > 40) {
        propBatch.add(metalMat, placed(new THREE.CylinderGeometry(0.08, 0.11, 9, 4), x, h + 4.7, z));
        lampBatch.add(lampMat, placed(boxGeo(0.3, 0.3, 0.3, 1), x, h + 9.3, z));
      }
    }
  };

  const addTree = (x: number, z: number, scale = 1) => {
    const rnd = mulberry32(Math.round(x * 91 + z * 17));
    propBatch.add(trunkMat, placed(new THREE.CylinderGeometry(0.16, 0.24, 2.4, 5), x, 1.2 + 0.24, z));
    const s = (1.5 + rnd() * 0.7) * scale;
    const y = 2.6 + 0.24 + s * 0.4;
    propBatch.add(treeMat, placed(new THREE.IcosahedronGeometry(s, 0), x, y, z, rnd() * 3, 1, 0.9, 1));
    if (rnd() < 0.6) {
      propBatch.add(
        treeMat,
        placed(new THREE.IcosahedronGeometry(s * 0.7, 0), x + (rnd() - 0.5) * s, y + s * 0.5, z + (rnd() - 0.5) * s, rnd() * 3)
      );
    }
  };

  const addBench = (x: number, z: number, rotY = 0) => {
    propBatch.add(woodMat, placed(boxGeo(2.0, 0.1, 0.55, 1), x, 0.72, z, rotY));
    propBatch.add(woodMat, placed(boxGeo(2.0, 0.5, 0.1, 1), x, 0.98, z, rotY));
    for (const s of [-1, 1]) {
      propBatch.add(
        metalMat,
        placed(boxGeo(0.1, 0.5, 0.5, 1), x + Math.cos(rotY) * 0.8 * s, 0.45, z - Math.sin(rotY) * 0.8 * s, rotY)
      );
    }
  };

  const addLamp = (x: number, z: number, rotY: number) => {
    const dirX = Math.sin(rotY);
    const dirZ = Math.cos(rotY);
    propBatch.add(metalMat, placed(new THREE.CylinderGeometry(0.11, 0.16, 7.2, 6), x, 3.6 + 0.24, z));
    propBatch.add(
      metalMat,
      placed(boxGeo(0.14, 0.14, 1.9, 1), x + dirX * 0.9, 7.1, z + dirZ * 0.9, rotY)
    );
    lampBatch.add(lampMat, placed(boxGeo(0.55, 0.2, 0.9, 1), x + dirX * 1.75, 6.98, z + dirZ * 1.75, rotY));
    const pool = new THREE.PlaneGeometry(11, 11);
    pool.rotateX(-Math.PI / 2);
    poolBatch.add(lightPoolMat, placed(pool, x + dirX * 2.6, 0.055, z + dirZ * 2.6));
  };

  const addTrafficLight = (x: number, z: number, rotY: number) => {
    propBatch.add(metalMat, placed(new THREE.CylinderGeometry(0.1, 0.13, 5.4, 5), x, 2.7 + 0.24, z));
    propBatch.add(darkMetalMat, placed(boxGeo(0.44, 1.15, 0.4, 1), x, 5.0, z, rotY));
    const lamp = new THREE.MeshBasicMaterial({ color: Math.random() < 0.5 ? 0x5cff9a : 0xff5c5c });
    lampBatch.add(lamp, placed(boxGeo(0.24, 0.24, 0.08, 1), x, 5.28, z + 0.22, rotY));
  };

  // ---------- road markings ----------
  const markPlane = (x: number, z: number, w: number, d: number, mat: THREE.Material, y = 0.035) => {
    const p = new THREE.PlaneGeometry(w, d);
    p.rotateX(-Math.PI / 2);
    markingBatch.add(mat, placed(p, x, y, z));
  };

  for (const xr of ROAD_CENTERS) {
    for (let k = 0; k < N; k++) {
      const zA = ROAD_CENTERS[k] + ROAD / 2;
      const zB = ROAD_CENTERS[k + 1] - ROAD / 2;
      const len = zB - zA;
      const midZ = (zA + zB) / 2;
      // double yellow centre line
      markPlane(xr - 0.18, midZ, 0.14, len - 2, yellowMat);
      markPlane(xr + 0.18, midZ, 0.14, len - 2, yellowMat);
      // white edge lines
      markPlane(xr - ROAD / 2 + 0.5, midZ, 0.12, len, markingMat);
      markPlane(xr + ROAD / 2 - 0.5, midZ, 0.12, len, markingMat);
      // lane dashes
      const dash = 2.2;
      for (let t = -len / 2 + 3; t < len / 2 - 3; t += 6) {
        markPlane(xr - 3.4, midZ + t, 0.12, dash, markingMat);
        markPlane(xr + 3.4, midZ + t, 0.12, dash, markingMat);
      }
    }
  }
  for (const zr of ROAD_CENTERS) {
    for (let k = 0; k < N; k++) {
      const xA = ROAD_CENTERS[k] + ROAD / 2;
      const xB = ROAD_CENTERS[k + 1] - ROAD / 2;
      const len = xB - xA;
      const midX = (xA + xB) / 2;
      markPlane(midX, zr - 0.18, len - 2, 0.14, yellowMat);
      markPlane(midX, zr + 0.18, len - 2, 0.14, yellowMat);
      markPlane(midX, zr - ROAD / 2 + 0.5, len, 0.12, markingMat);
      markPlane(midX, zr + ROAD / 2 - 0.5, len, 0.12, markingMat);
      for (let t = -len / 2 + 3; t < len / 2 - 3; t += 6) {
        markPlane(midX + t, zr - 3.4, 2.2, 0.12, markingMat);
        markPlane(midX + t, zr + 3.4, 2.2, 0.12, markingMat);
      }
    }
  }
  // crosswalks at intersections
  for (const xr of ROAD_CENTERS) {
    for (const zr of ROAD_CENTERS) {
      for (let s = 0; s < 2; s++) {
        const dz = s === 0 ? ROAD / 2 + 1.1 : -ROAD / 2 - 1.1;
        for (let i = -ROAD / 2 + 1; i < ROAD / 2 - 0.5; i += 1.5) {
          markPlane(xr + i + 0.3, zr + dz, 0.7, 2.4, markingMat);
        }
        const dx = s === 0 ? ROAD / 2 + 1.1 : -ROAD / 2 - 1.1;
        for (let i = -ROAD / 2 + 1; i < ROAD / 2 - 0.5; i += 1.5) {
          markPlane(xr + dx, zr + i + 0.3, 2.4, 0.7, markingMat);
        }
      }
    }
  }

  // ---------- lampposts along every road ----------
  for (let k = 0; k <= N; k++) {
    const p = ROAD_CENTERS[k];
    for (let t = ORIGIN + 24; t < ORIGIN + CITY_SIZE - 12; t += 58) {
      addLamp(p + ROAD / 2 + 0.9, t, -Math.PI / 2);
      addLamp(p - ROAD / 2 - 0.9, t + 29, Math.PI / 2);
    }
  }
  for (let k = 0; k <= N; k++) {
    const p = ROAD_CENTERS[k];
    for (let t = ORIGIN + 24; t < ORIGIN + CITY_SIZE - 12; t += 58) {
      addLamp(t, p - ROAD / 2 - 0.9, 0);
      addLamp(t + 29, p + ROAD / 2 + 0.9, Math.PI);
    }
  }
  for (let i = 1; i < N; i += 2) {
    for (let j = 1; j < N; j += 2) {
      const x = ROAD_CENTERS[i] + ROAD / 2 + 2.2;
      const z = ROAD_CENTERS[j] + ROAD / 2 + 2.2;
      addTrafficLight(x, z, 0);
      addTrafficLight(x - ROAD - 4.4, z, 0);
      addTrafficLight(x, z - ROAD - 4.4, Math.PI / 2);
      addTrafficLight(x - ROAD - 4.4, z - ROAD - 4.4, Math.PI / 2);
    }
  }

  // ---------- special blocks ----------
  const plaza = blockCenter(3, 3);
  const depotCenter = blockCenter(3, 4);
  const parkA = blockCenter(1, 1);
  const parkB = blockCenter(5, 5);
  const parkingLot = blockCenter(2, 5);
  const gasStation = blockCenter(5, 1);

  // plaza geometry
  {
    const rnd = mulberry32(5150);
    const paving = new THREE.CylinderGeometry(12, 12, 0.14, 28);
    staticBatch.add(concreteMat, placed(paving, plaza.x, 0.31, plaza.z));
    // fountain
    propBatch.add(concreteMat, placed(new THREE.CylinderGeometry(3.4, 3.6, 0.75, 20), plaza.x, 0.62, plaza.z));
    propBatch.add(waterMat, placed(new THREE.CylinderGeometry(3.15, 3.15, 0.2, 20), plaza.x, 0.98, plaza.z));
    propBatch.add(concreteMat, placed(new THREE.CylinderGeometry(0.6, 0.9, 2.2, 12), plaza.x, 1.6, plaza.z));
    propBatch.add(waterMat, placed(new THREE.CylinderGeometry(1.5, 1.5, 0.18, 14), plaza.x, 2.3, plaza.z));
    addCollider(plaza.x, plaza.z, 7, 7);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const px = plaza.x + Math.cos(a) * 9;
      const pz = plaza.z + Math.sin(a) * 9;
      addBench(px, pz, -a + Math.PI / 2);
      addTree(plaza.x + Math.cos(a + 0.4) * 13.5, plaza.z + Math.sin(a + 0.4) * 13.5, 0.9);
    }
    // planters
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + 0.5;
      const px = plaza.x + Math.cos(a) * 6.5;
      const pz = plaza.z + Math.sin(a) * 6.5;
      propBatch.add(concreteMat, placed(boxGeo(1.8, 0.55, 1.8, 1), px, 0.75, pz));
      addTree(px, pz, 0.55);
    }
    const signMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(9, 2.2),
      new THREE.MeshBasicMaterial({ map: signTexture('SHADOW CITY', '#cfe6ff', '#0b1016'), transparent: false })
    );
    signMesh.position.set(plaza.x, 7.6, plaza.z + 16.6);
    signMesh.rotation.y = Math.PI;
    group.add(signMesh);
    addCollider(plaza.x + 6, plaza.z + 16, 1.2, 1.2);
    propBatch.add(metalMat, placed(boxGeo(0.2, 8, 0.2, 1), plaza.x + 6, 4, plaza.z + 16));
    propBatch.add(metalMat, placed(boxGeo(0.2, 8, 0.2, 1), plaza.x - 6, 4, plaza.z + 16));
    void rnd;
  }

  // depot block (mission start)
  {
    const dx = depotCenter.x;
    const dz = depotCenter.z;
    addFacade(facadeMats[0], dx, 4.6, dz - 4, 26, 9, 14);
    buildings.push({ x: dx, z: dz - 4, w: 26, d: 14, h: 9 });
    addCollider(dx, dz - 4, 26, 14);
    // garage opening frame
    propBatch.add(darkMetalMat, placed(boxGeo(0.7, 6, 0.7, 1), dx - 4, 3.2, dz + 3.2));
    propBatch.add(darkMetalMat, placed(boxGeo(0.7, 6, 0.7, 1), dx + 4, 3.2, dz + 3.2));
    propBatch.add(darkMetalMat, placed(boxGeo(9, 0.7, 0.8, 1), dx, 6.2, dz + 3.2));
    const depSign = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 1.9),
      new THREE.MeshBasicMaterial({ map: signTexture('NIGHTLINE COURIERS', '#8fd3ff', '#0a0f14') })
    );
    depSign.position.set(dx, 7.8, dz + 3.6);
    group.add(depSign);
    // crates & pallets
    for (let i = 0; i < 5; i++) {
      propBatch.add(woodMat, placed(boxGeo(1.2, 1.1, 1.2, 1), dx + 8 + i * 1.4, 0.8, dz + 4 + (i % 2) * 1.6));
    }
    // parked vans in front
    vehicleSpawns.push({ x: dx - 9, z: dz - 19, heading: Math.PI, color: '#1f2a36', kind: 'van' });
    vehicleSpawns.push({ x: dx + 9, z: dz - 19, heading: Math.PI, color: '#4a2b2b', kind: 'sedan' });
  }

  // parks
  const makePark = (cx: number, cz: number, seed: number) => {
    const rnd = mulberry32(seed);
    staticBatch.add(grassMat, placed(boxGeo(BLOCK - 1.4, 0.12, BLOCK - 1.4, 4), cx, 0.3, cz));
    // crossing paths
    markPlane(cx, cz, BLOCK - 2, 3.4, concreteMat, 0.365);
    markPlane(cx, cz, 3.4, BLOCK - 2, concreteMat, 0.365);
    for (let i = 0; i < 16; i++) {
      const px = cx + (rnd() - 0.5) * (BLOCK - 8);
      const pz = cz + (rnd() - 0.5) * (BLOCK - 8);
      if (Math.abs(px - cx) < 3 || Math.abs(pz - cz) < 3) continue;
      addTree(px, pz, 0.85 + rnd() * 0.5);
    }
    for (let i = 0; i < 4; i++) {
      const a = rnd() * Math.PI * 2;
      addBench(cx + Math.cos(a) * 8, cz + Math.sin(a) * 8, -a + Math.PI / 2);
    }
    // pond
    const pond = new THREE.CircleGeometry(4.2, 20);
    pond.rotateX(-Math.PI / 2);
    const pondMesh = new THREE.Mesh(pond, waterMat);
    pondMesh.position.set(cx + 8, 0.36, cz - 8);
    pondMesh.receiveShadow = true;
    group.add(pondMesh);
    addCollider(cx + 8, cz - 8, 8.4, 8.4);
    // trash bins
    for (let i = 0; i < 3; i++) {
      const bx = cx + (rnd() - 0.5) * 22;
      const bz = cz + (rnd() - 0.5) * 22;
      propBatch.add(darkMetalMat, placed(new THREE.CylinderGeometry(0.35, 0.3, 1.0, 8), bx, 0.85, bz));
    }
  };
  makePark(parkA.x, parkA.z, 313);
  makePark(parkB.x, parkB.z, 707);

  // parking lot
  {
    const cx = parkingLot.x;
    const cz = parkingLot.z;
    staticBatch.add(asphaltMat, placed(boxGeo(BLOCK - 1.6, 0.1, BLOCK - 1.6, 8), cx, 0.29, cz));
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 2; j++) {
        const px = cx - 11 + i * 5.5;
        const pz = cz - 9 + j * 18;
        markPlane(px, pz, 0.16, 5.5, markingMat, 0.355);
      }
    }
    for (let i = 0; i < 6; i++) {
      addLamp(cx - 13 + (i % 3) * 13, cz - 13 + Math.floor(i / 3) * 26, i % 2 ? Math.PI : 0);
    }
    vehicleSpawns.push({ x: cx - 8.5, z: cz - 7, heading: 0, color: '#2f3a45', kind: 'sedan' });
    vehicleSpawns.push({ x: cx - 3, z: cz - 7, heading: 0, color: '#6d2027', kind: 'suv' });
    vehicleSpawns.push({ x: cx + 2.5, z: cz - 7, heading: 0, color: '#c8c3b6', kind: 'sedan' });
    vehicleSpawns.push({ x: cx + 8, z: cz + 12, heading: Math.PI, color: '#22303b', kind: 'van' });
    // small office
    addFacade(facadeMats[3], cx, 3.5 + 0.24, cz + 13, 10, 6.5, 8);
    addCollider(cx, cz + 13, 10, 8);
    buildings.push({ x: cx, z: cz + 13, w: 10, d: 8, h: 6.5 });
  }

  // gas station
  {
    const cx = gasStation.x;
    const cz = gasStation.z;
    staticBatch.add(concreteMat, placed(boxGeo(BLOCK - 1.6, 0.1, BLOCK - 1.6, 4), cx, 0.29, cz));
    // canopy
    propBatch.add(whiteish(), placed(boxGeo(20, 0.7, 13, 3), cx, 6.4, cz));
    for (const [ox, oz] of [
      [-8, -5],
      [8, -5],
      [-8, 5],
      [8, 5],
    ]) {
      propBatch.add(whiteish(), placed(boxGeo(0.7, 6.2, 0.7, 2), cx + ox, 3.4, cz + oz));
      addCollider(cx + ox, cz + oz, 0.9, 0.9);
    }
    for (const [ox, oz] of [
      [-3.5, 0],
      [3.5, 0],
    ]) {
      propBatch.add(darkMetalMat, placed(boxGeo(1.1, 1.7, 0.9, 1), cx + ox, 1.15, cz + oz));
      addCollider(cx + ox, cz + oz, 1.2, 1.0);
    }
    // kiosk
    addFacade(facadeMats[1], cx + 11, 2.6, cz - 10, 8, 4.4, 7);
    addCollider(cx + 11, cz - 10, 8, 7);
    buildings.push({ x: cx + 11, z: cz - 10, w: 8, d: 7, h: 4.4 });
    // price sign
    propBatch.add(metalMat, placed(new THREE.CylinderGeometry(0.25, 0.25, 9, 6), cx - 13, 4.7, cz + 9));
    const price = new THREE.Mesh(
      new THREE.PlaneGeometry(2.6, 5.2),
      new THREE.MeshBasicMaterial({ map: signTexture('FUEL 2.49', '#ffcf6b', '#11151a') })
    );
    price.position.set(cx - 13, 8.2, cz + 9.1);
    group.add(price);
    vehicleSpawns.push({ x: cx - 3.5, z: cz + 8, heading: 0, color: '#2b3f52', kind: 'sedan' });
    vehicleSpawns.push({ x: cx + 3.5, z: cz - 8, heading: Math.PI, color: '#b8412f', kind: 'suv' });
    function whiteish() {
      return new THREE.MeshStandardMaterial({ color: 0xd8d6cf, roughness: 0.7 });
    }
  }

  // ---------- generic blocks ----------
  for (let bx = 0; bx < N; bx++) {
    for (let bz = 0; bz < N; bz++) {
      const key = `${bx},${bz}`;
      if (key === '3,3' || key === '3,4' || key === '1,1' || key === '5,5' || key === '2,5' || key === '5,1') {
        // still draw the sidewalk slab for special blocks
        const { x: cx, z: cz } = blockCenter(bx, bz);
        addSlab(cx, cz);
        continue;
      }
      const { x: cx, z: cz } = blockCenter(bx, bz);
      addSlab(cx, cz);
      const rnd = rndSeed(bx, bz);
      const dist = Math.max(Math.abs(bx - 3), Math.abs(bz - 3));

      if (dist <= 1) {
        // downtown towers
        const w = 15 + rnd() * 8;
        const d = 15 + rnd() * 8;
        const h = 34 + rnd() * 30;
        const x = cx + (rnd() - 0.5) * (BLOCK - 8 - w);
        const z = cz + (rnd() - 0.5) * (BLOCK - 8 - d);
        addBuilding(x, z, w, d, h, 2 + Math.floor(rnd() * 2), { shop: true, roofDetail: true });
        // podium annex
        const aw = 8 + rnd() * 4;
        const ax = x + (rnd() < 0.5 ? -1 : 1) * (w / 2 + aw / 2 + 1.2);
        const az = z + (rnd() < 0.5 ? -1 : 1) * (d / 2 + 4);
        if (Math.abs(ax - cx) < BLOCK / 2 - aw / 2 - 3 && Math.abs(az - cz) < BLOCK / 2 - 5) {
          addBuilding(ax, az, aw, 8 + rnd() * 5, 8 + rnd() * 10, 4, { shop: true, roofDetail: true });
        } else {
          addBuilding(x + w / 2 + 5, z - d / 2 - 5, 9, 9, 12 + rnd() * 8, 0, { shop: true });
        }
      } else if (dist === 2) {
        // commercial mid-rise, two buildings
        const wide = rnd() < 0.5;
        for (let s = 0; s < 2; s++) {
          const w = wide ? 12 + rnd() * 3 : 24 + rnd() * 3;
          const d = wide ? 24 + rnd() * 3 : 12 + rnd() * 3;
          const x = cx + (wide ? (s === 0 ? -1 : 1) * 7.5 : 0) + (rnd() - 0.5) * 2;
          const z = cz + (wide ? 0 : (s === 0 ? -1 : 1) * 7.5) + (rnd() - 0.5) * 2;
          const h = 13 + rnd() * 14;
          addBuilding(x, z, w, d, h, Math.floor(rnd() * 5), {
            shop: true,
            roofDetail: true,
          });
        }
      } else {
        // residential outskirts
        if (rnd() < 0.45) {
          const w = 22 + rnd() * 5;
          const d = 14 + rnd() * 5;
          const x = cx + (rnd() - 0.5) * 2;
          const z = cz + (rnd() - 0.5) * 2;
          const h = 9 + rnd() * 6;
          addBuilding(x, z, w, d, h, 4, { shop: true, roofDetail: false });
          // flat roof lip
          staticBatch.add(roofMat, placed(boxGeo(w + 0.4, 0.5, d + 0.4, 2), x, h + 0.5, z));
        } else {
          for (let q = 0; q < 4; q++) {
            if (rnd() < 0.18) continue;
            const ox = q % 2 === 0 ? -8 : 8;
            const oz = q < 2 ? -8 : 8;
            const w = 9 + rnd() * 2.5;
            const d = 8 + rnd() * 2.5;
            const h = 5.6 + rnd() * 2.6;
            const x = cx + ox + (rnd() - 0.5) * 1.5;
            const z = cz + oz + (rnd() - 0.5) * 1.5;
            staticBatch.add(grassMat, placed(boxGeo(w + 4, 0.08, d + 4, 4), x, 0.31, z));
            addBuilding(x, z, w, d, h, 4, {});
            staticBatch.add(
              roofMat,
              placed(gableGeo(w + 1.2, 2.4 + rnd() * 1.4, d + 1.2), x, h + 0.24, z, rnd() < 0.5 ? 0 : Math.PI / 2)
            );
            // tiny porch light
            lampBatch.add(lampMat, placed(boxGeo(0.3, 0.25, 0.3, 1), x, h - 0.6, z + d / 2 + 0.2));
          }
        }
      }
      // sidewalk trees & clutter
      for (let t = 0; t < 2; t++) {
        const side = Math.floor(rnd() * 4);
        const along = (rnd() - 0.5) * (BLOCK - 10);
        const edge = BLOCK / 2 - 1.5;
        if (side === 0) addTree(cx + along, cz + edge, 0.7);
        else if (side === 1) addTree(cx + along, cz - edge, 0.7);
        else if (side === 2) addTree(cx + edge, cz + along, 0.7);
        else addTree(cx - edge, cz + along, 0.7);
      }
      if (rnd() < 0.5) {
        propBatch.add(darkMetalMat, placed(new THREE.CylinderGeometry(0.3, 0.26, 0.9, 7), cx + 14, 0.75, cz - 14));
      }
    }
  }

  // ---------- street parked cars ----------
  const parked: VehicleSpawn[] = [
    { x: 19.5, z: 9, heading: 0, color: '#8a1f1f', kind: 'sedan' },
    { x: 19.5, z: -14, heading: 0, color: '#26364a', kind: 'suv' },
    { x: -19.5, z: 6, heading: Math.PI, color: '#c9c4b7', kind: 'sedan' },
    { x: 28.5, z: 30, heading: Math.PI / 2, color: '#2b2b30', kind: 'van' },
    { x: 5, z: 42, heading: 0, color: '#b8a24a', kind: 'sedan' },
    { x: -52, z: 28, heading: Math.PI / 2, color: '#3d5c4a', kind: 'suv' },
    { x: 76, z: 5, heading: 0, color: '#5a2f6b', kind: 'sedan' },
    { x: -100, z: -4, heading: Math.PI, color: '#1e5a6b', kind: 'sedan' },
    { x: 52, z: 76, heading: Math.PI / 2, color: '#7a4a1f', kind: 'suv' },
    { x: -76, z: 52, heading: 0, color: '#334155', kind: 'sedan' },
  ];
  vehicleSpawns.push(...parked);

  // ---------- pedestrian loops ----------
  for (let bx = 0; bx < N; bx += 2) {
    for (let bz = 0; bz < N; bz += 2) {
      const { x: cx, z: cz } = blockCenter(bx, bz);
      const o = BLOCK / 2 - 1.6;
      const y = 0.24;
      pedLoops.push([
        new THREE.Vector3(cx - o, y, cz - o),
        new THREE.Vector3(cx + o, y, cz - o),
        new THREE.Vector3(cx + o, y, cz + o),
        new THREE.Vector3(cx - o, y, cz + o),
      ]);
    }
  }

  // ---------- perimeter wall ----------
  const wallMat = concreteMat;
  const wallH = 1.4;
  const edge = CITY_SIZE / 2 + 2;
  const walls: [number, number, number, number][] = [
    [0, -edge, CITY_SIZE + 8, 1.6],
    [0, edge, CITY_SIZE + 8, 1.6],
    [-edge, 0, 1.6, CITY_SIZE + 8],
    [edge, 0, 1.6, CITY_SIZE + 8],
  ];
  for (const [wx, wz, ww, wd] of walls) {
    staticBatch.add(wallMat, placed(boxGeo(ww, wallH, wd, 2), wx, wallH / 2, wz));
    addCollider(wx, wz, ww, wd);
  }

  // ---------- flush ----------
  staticBatch.flush(group, true, true, 'static');
  propBatch.flush(group, true, true, 'props');
  markingBatch.flush(group, false, true, 'marks');
  poolBatch.flush(group, false, false, 'pools');
  lampBatch.flush(group, false, false, 'lamps');

  const deliverySpots = [
    new THREE.Vector3(-72, 0, 72),
    new THREE.Vector3(96, 0, -120),
    new THREE.Vector3(-144, 0, 96),
    new THREE.Vector3(48, 0, 144),
    new THREE.Vector3(120, 0, 24),
    new THREE.Vector3(-24, 0, -120),
  ];

  const pickupSpots: THREE.Vector3[] = [
    new THREE.Vector3(8, 0.4, 9),
    new THREE.Vector3(-33, 0.4, 46),
    new THREE.Vector3(58, 0.4, -33),
    new THREE.Vector3(-84, 0.4, -20),
    new THREE.Vector3(120, 0.4, 72),
    new THREE.Vector3(-120, 0.4, 120),
    new THREE.Vector3(36, 0.4, 108),
    new THREE.Vector3(-48, 0.4, -84),
  ];

  const groundHeightAt = (x: number, z: number) => {
    const lx = x - (ORIGIN + ROAD);
    const lz = z - (ORIGIN + ROAD);
    const bx = Math.floor(lx / CELL);
    const bz = Math.floor(lz / CELL);
    if (bx < 0 || bx >= N || bz < 0 || bz >= N) return 0;
    const fx = lx - bx * CELL;
    const fz = lz - bz * CELL;
    if (fx <= BLOCK && fz <= BLOCK) return 0.24;
    return 0;
  };

  const zoneAt = (x: number, z: number) => {
    if (Math.abs(x) < 70 && Math.abs(z) < 70) return 'Shadow Center';
    if (x > 70) return z > 0 ? 'East Docks' : 'Steel Row';
    if (x < -70) return z > 0 ? 'West Heights' : 'Old Quarter';
    return z > 0 ? 'Northline' : 'Southside';
  };

  return {
    colliders,
    buildings,
    vehicleSpawns,
    pedLoops,
    trafficRoads: ROAD_CENTERS,
    depot: new THREE.Vector3(depotCenter.x, 0.24, depotCenter.z - 14),
    deliverySpots,
    pickupSpots,
    policeSpawn: new THREE.Vector3(96, 0, 0),
    facadeMaterials: facadeMats,
    lightPoolMaterial: lightPoolMat,
    lampMaterial: lampMat,
    groundHeightAt,
    zoneAt,
    group,
  };
}

export { SIDEWALK };
