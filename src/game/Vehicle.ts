import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { clamp, damp, taperedBox, placed, resolveCircleBox } from './utils';
import type { CityData } from './City';
import { lightPoolTexture } from './textures';

export type CarKind = 'sedan' | 'suv' | 'van' | 'police';

export interface DriveControls {
  throttle: number;
  brake: number;
  steer: number;
  handbrake: boolean;
}

interface Spec {
  length: number;
  width: number;
  bodyH: number;
  roofH: number;
  wheelR: number;
  clearance: number;
  accel: number;
  maxSpeed: number;
}

const SPECS: Record<CarKind, Spec> = {
  sedan: {
    length: 4.4,
    width: 1.88,
    bodyH: 0.58,
    roofH: 0.52,
    wheelR: 0.34,
    clearance: 0.32,
    accel: 11,
    maxSpeed: 33,
  },
  suv: {
    length: 4.8,
    width: 1.98,
    bodyH: 0.72,
    roofH: 0.66,
    wheelR: 0.41,
    clearance: 0.4,
    accel: 9.5,
    maxSpeed: 30,
  },
  van: {
    length: 5.2,
    width: 2.05,
    bodyH: 1.0,
    roofH: 0.9,
    wheelR: 0.38,
    clearance: 0.36,
    accel: 8,
    maxSpeed: 26,
  },
  police: {
    length: 4.5,
    width: 1.9,
    bodyH: 0.6,
    roofH: 0.5,
    wheelR: 0.35,
    clearance: 0.33,
    accel: 12.5,
    maxSpeed: 35,
  },
};

const tmpPush = { x: 0, z: 0 };

export class Vehicle {
  group = new THREE.Group();
  body = new THREE.Group();
  pos: THREE.Vector3;
  heading: number;
  speed = 0;
  steer = 0;
  kind: CarKind;
  spec: Spec;
  impact = 0;
  occupied = false;
  isPolice = false;
  headlightsOn = false;
  private wheelSpin = 0;
  private steerGroup = new THREE.Group();
  private spinFront = new THREE.Group();
  private spinRear = new THREE.Group();
  private materials: THREE.Material[] = [];
  private lightBarMats: THREE.MeshStandardMaterial[] = [];
  private beamMat?: THREE.MeshBasicMaterial;
  private sirenTime = 0;
  private wheelR: number;
  private damageFlash = 0;

  constructor(kind: CarKind, color: string, x: number, z: number, heading = 0) {
    this.kind = kind;
    this.spec = SPECS[kind];
    this.wheelR = this.spec.wheelR;
    this.pos = new THREE.Vector3(x, 0, z);
    this.heading = heading;
    this.isPolice = kind === 'police';

    this.group.add(this.body);
    this.buildMesh(kind, color);
    this.group.position.copy(this.pos);
    this.group.rotation.y = heading;
  }

  private buildMesh(kind: CarKind, color: string) {
    const s = this.spec;
    const paint = new THREE.MeshPhysicalMaterial({
      color,
      roughness: 0.28,
      metalness: 0.22,
      clearcoat: 0.82,
      clearcoatRoughness: 0.16,
      envMapIntensity: 1.15,
    });
    const glass = new THREE.MeshPhysicalMaterial({
      color: 0x172633, roughness: 0.12, metalness: 0.18,
      clearcoat: 1, clearcoatRoughness: 0.06,
    });
    const trim = new THREE.MeshStandardMaterial({ color: 0x17191d, roughness: 0.72, metalness: 0.35 });
    const headMat = new THREE.MeshStandardMaterial({
      color: 0xfff6da,
      emissive: 0xfff0c8,
      emissiveIntensity: 1.2,
      roughness: 0.3,
    });
    const tailMat = new THREE.MeshStandardMaterial({
      color: 0x8e1414,
      emissive: 0xff2118,
      emissiveIntensity: 1.5,
      roughness: 0.4,
    });
    this.materials.push(paint, glass, trim, headMat, tailMat);

    const bodyY = s.clearance + s.bodyH / 2;
    const roofY = bodyY + s.bodyH / 2 + s.roofH / 2;

    const paintGeos: THREE.BufferGeometry[] = [];
    const glassGeos: THREE.BufferGeometry[] = [];
    const trimGeos: THREE.BufferGeometry[] = [];
    const headGeos: THREE.BufferGeometry[] = [];
    const tailGeos: THREE.BufferGeometry[] = [];

    // main body
    paintGeos.push(placed(taperedBox(s.width, s.bodyH, s.length, 0.97, 0.99, 2), 0, bodyY, 0));
    // hood + trunk
    paintGeos.push(
      placed(taperedBox(s.width * 0.92, 0.14, s.length * 0.26, 0.95, 1, 2), 0, bodyY + s.bodyH / 2, s.length * 0.3)
    );
    paintGeos.push(
      placed(taperedBox(s.width * 0.92, 0.14, s.length * 0.18, 0.95, 1, 2), 0, bodyY + s.bodyH / 2, -s.length * 0.37)
    );
    // greenhouse / cabin
    const cabinLen = kind === 'van' ? s.length * 0.52 : s.length * 0.46;
    const cabinZ = kind === 'van' ? -s.length * 0.02 : -s.length * 0.04;
    paintGeos.push(
      placed(
        taperedBox(s.width * 0.99, 0.16, cabinLen * 1.02, 0.99, 1, 2),
        0,
        bodyY + s.bodyH / 2 - 0.02,
        cabinZ
      )
    );
    glassGeos.push(
      placed(
        taperedBox(s.width * 0.86, s.roofH, cabinLen, kind === 'van' ? 0.94 : 0.8, kind === 'van' ? 0.92 : 0.72, 2),
        0,
        bodyY + s.bodyH / 2 + s.roofH / 2 - 0.02,
        cabinZ
      )
    );
    // roof
    paintGeos.push(
      placed(
        taperedBox(s.width * 0.76, 0.09, cabinLen * (kind === 'van' ? 0.94 : 0.8), 1, 1, 2),
        0,
        roofY - 0.03,
        cabinZ
      )
    );
    // bumpers, skirts
    trimGeos.push(placed(taperedBox(s.width * 1.01, 0.3, 0.34, 1, 1, 2), 0, s.clearance + 0.22, s.length / 2 - 0.12));
    trimGeos.push(placed(taperedBox(s.width * 1.01, 0.3, 0.34, 1, 1, 2), 0, s.clearance + 0.22, -s.length / 2 + 0.12));
    trimGeos.push(placed(taperedBox(s.width * 1.02, 0.16, s.length * 0.5, 1, 1, 2), 0, s.clearance + 0.12, 0));
    // grille
    trimGeos.push(placed(taperedBox(s.width * 0.42, 0.16, 0.06, 1, 1, 2), 0, s.clearance + 0.4, s.length / 2 - 0.02));
    // mirrors
    for (const side of [-1, 1]) {
      trimGeos.push(placed(taperedBox(0.17, 0.1, 0.09, 1, 1, 2), side * (s.width / 2 + 0.06), bodyY + 0.16, s.length * 0.16));
      headGeos.push(
        placed(taperedBox(s.width * 0.2, 0.14, 0.08, 1, 1, 2), side * s.width * 0.32, s.clearance + 0.42, s.length / 2 - 0.01)
      );
      tailGeos.push(
        placed(taperedBox(s.width * 0.2, 0.13, 0.08, 1, 1, 2), side * s.width * 0.32, s.clearance + 0.44, -s.length / 2 + 0.01)
      );
    }

    const addMerged = (
      geos: THREE.BufferGeometry[],
      mat: THREE.Material,
      shadow = true
    ) => {
      if (!geos.length) return;
      const g = mergeGeometries(geos, false);
      geos.forEach((x) => x.dispose());
      if (!g) return;
      const mesh = new THREE.Mesh(g, mat);
      mesh.castShadow = shadow;
      mesh.receiveShadow = false;
      this.body.add(mesh);
    };

    addMerged(paintGeos, paint);
    addMerged(glassGeos, glass);
    addMerged(trimGeos, trim);
    addMerged(headGeos, headMat, false);
    addMerged(tailGeos, tailMat, false);

    // Fine exterior details: glass panels, door seams, mirrors, grille and lighting.
    const detailMat = new THREE.MeshStandardMaterial({ color: 0x252a30, roughness: 0.72, metalness: 0.42 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xb9c2c9, roughness: 0.28, metalness: 0.82 });
    const windowMat = new THREE.MeshPhysicalMaterial({
      color: 0x182b38, roughness: 0.12, metalness: 0.18,
      transparent: true, opacity: 0.82, clearcoat: 0.9, clearcoatRoughness: 0.08,
    });
    const lensMat = new THREE.MeshPhysicalMaterial({
      color: 0xe9f3ff, emissive: 0xffedc5, emissiveIntensity: 0.32,
      roughness: 0.16, metalness: 0.12, clearcoat: 1,
    });
    const signalMat = new THREE.MeshStandardMaterial({
      color: 0xff8a25, emissive: 0xff4a08, emissiveIntensity: 0.55, roughness: 0.3,
    });
    this.materials.push(detailMat, chromeMat, windowMat, lensMat, signalMat);

    const part = (
      geometry: THREE.BufferGeometry, material: THREE.Material,
      x: number, y: number, z: number, rx = 0, ry = 0, rz = 0
    ) => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
      mesh.rotation.set(rx, ry, rz);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.body.add(mesh);
      return mesh;
    };
    const box = (w: number, h: number, d: number, material: THREE.Material,
      x: number, y: number, z: number, rx = 0, ry = 0, rz = 0) =>
      part(new THREE.BoxGeometry(w, h, d), material, x, y, z, rx, ry, rz);

    // Separate front/rear glass and side glazing give the cabin a real window layout.
    const cabinTop = bodyY + s.bodyH / 2 + s.roofH;
    const sideX = s.width * 0.445;
    const sideWindowZ = cabinZ;
    box(0.035, s.roofH * 0.72, cabinLen * 0.68, windowMat, -sideX, bodyY + s.bodyH / 2 + s.roofH * 0.49, sideWindowZ);
    box(0.035, s.roofH * 0.72, cabinLen * 0.68, windowMat, sideX, bodyY + s.bodyH / 2 + s.roofH * 0.49, sideWindowZ);
    // B-pillars and door divisions.
    for (const side of [-1, 1]) {
      box(0.055, s.roofH * 0.94, 0.075, detailMat, side * sideX, bodyY + s.bodyH / 2 + s.roofH * 0.5, cabinZ);
      box(0.035, 0.025, s.length * 0.24, detailMat, side * (s.width * 0.495), bodyY + 0.05, s.length * 0.04);
      box(0.12, 0.035, 0.055, chromeMat, side * (s.width * 0.505), bodyY + 0.14, s.length * 0.04);
      // Side mirrors with reflective caps.
      box(0.2, 0.12, 0.16, paint, side * (s.width * 0.54), bodyY + 0.2, s.length * 0.19);
      box(0.012, 0.075, 0.12, chromeMat, side * (s.width * 0.595), bodyY + 0.2, s.length * 0.19);
      // Side indicator and lower sill.
      box(0.035, 0.07, 0.13, signalMat, side * (s.width * 0.503), bodyY + 0.02, s.length * 0.22);
      box(0.07, 0.11, s.length * 0.58, detailMat, side * (s.width * 0.49), s.clearance + 0.1, 0);
    }
    // Windscreen and rear screen are angled, glossy panes.
    box(s.width * 0.78, 0.045, 0.58, windowMat, 0, bodyY + s.bodyH / 2 + s.roofH * 0.42, s.length * 0.205, -0.58);
    box(s.width * 0.76, 0.045, 0.48, windowMat, 0, bodyY + s.bodyH / 2 + s.roofH * 0.42, -s.length * 0.245, 0.58);
    // Cabin interior: seats, headrests, dashboard and steering wheel.
    const seatMat = new THREE.MeshStandardMaterial({ color: 0x242b32, roughness: 0.92 });
    const dashMat = new THREE.MeshStandardMaterial({ color: 0x111820, roughness: 0.55 });
    this.materials.push(seatMat, dashMat);
    const cabinFloorY = bodyY + s.bodyH * 0.12;
    for (const side of [-1, 1]) {
      box(0.58, 0.16, 0.62, seatMat, side * 0.43, cabinFloorY + 0.1, cabinZ - 0.28);
      box(0.56, 0.58, 0.16, seatMat, side * 0.43, cabinFloorY + 0.43, cabinZ - 0.52, -0.08);
      box(0.32, 0.2, 0.12, seatMat, side * 0.43, cabinFloorY + 0.78, cabinZ - 0.52);
    }
    box(s.width * 0.8, 0.2, 0.24, dashMat, 0, cabinFloorY + 0.48, s.length * 0.19, -0.12);
    const steering = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.025, 7, 22), chromeMat);
    steering.position.set(0.36, cabinFloorY + 0.55, s.length * 0.2);
    steering.rotation.x = 0.28;
    steering.rotation.z = -0.16;
    this.body.add(steering);
    box(0.18, 0.12, 0.24, detailMat, -0.02, cabinFloorY + 0.24, cabinZ - 0.02);

    // Wheel-arch lips follow the tyre profile instead of leaving square cut-outs.
    for (const side of [-1, 1]) {
      for (const z of [-s.length * 0.32, s.length * 0.32]) {
        const arch = new THREE.Mesh(new THREE.TorusGeometry(this.wheelR * 1.12, 0.055, 6, 22, Math.PI), detailMat);
        arch.rotation.y = Math.PI / 2;
        arch.position.set(side * (s.width * 0.49), this.wheelR + 0.02, z);
        this.body.add(arch);
      }
    }

    // Front grille, lower intake, registration plate and rear reflectors.
    box(s.width * 0.34, 0.18, 0.045, detailMat, 0, s.clearance + 0.39, s.length * 0.505);
    box(s.width * 0.22, 0.035, 0.05, chromeMat, 0, s.clearance + 0.43, s.length * 0.512);
    box(0.42, 0.16, 0.035, chromeMat, 0, s.clearance + 0.2, s.length * 0.515);
    box(0.46, 0.15, 0.035, chromeMat, 0, s.clearance + 0.2, -s.length * 0.515);
    // Distinct headlamp lenses, amber indicators and rear light clusters.
    for (const side of [-1, 1]) {
      box(s.width * 0.2, 0.17, 0.055, lensMat, side * s.width * 0.32, s.clearance + 0.45, s.length * 0.51);
      box(0.09, 0.12, 0.06, signalMat, side * s.width * 0.43, s.clearance + 0.43, s.length * 0.51);
      box(s.width * 0.19, 0.18, 0.06, tailMat, side * s.width * 0.34, s.clearance + 0.44, -s.length * 0.51);
      box(0.08, 0.09, 0.065, lensMat, side * s.width * 0.34, s.clearance + 0.29, -s.length * 0.515);
    }
    // Subtle roof antenna and front badge.
    part(new THREE.CylinderGeometry(0.012, 0.018, 0.22, 6), detailMat, 0, cabinTop + 0.12, -s.length * 0.18, -0.18);
    part(new THREE.SphereGeometry(0.055, 10, 8), chromeMat, 0, s.clearance + 0.48, s.length * 0.52);

    // police light bar
    if (this.isPolice) {
      const redMat = new THREE.MeshStandardMaterial({ color: 0x330000, emissive: 0xff1111, emissiveIntensity: 1.2 });
      const blueMat = new THREE.MeshStandardMaterial({ color: 0x000833, emissive: 0x2255ff, emissiveIntensity: 1.2 });
      this.materials.push(redMat, blueMat);
      this.lightBarMats.push(redMat, blueMat);
      const barY = roofY + 0.12;
      const r = new THREE.Mesh(new THREE.BoxGeometry(s.width * 0.34, 0.14, 0.26), redMat);
      r.position.set(-s.width * 0.2, barY, cabinZ);
      const b = new THREE.Mesh(new THREE.BoxGeometry(s.width * 0.34, 0.14, 0.26), blueMat);
      b.position.set(s.width * 0.2, barY, cabinZ);
      this.body.add(r, b);
    }

    // wheels
    const wheelGeo = (offsetX: number) => {
      const tyre = new THREE.CylinderGeometry(this.wheelR, this.wheelR, 0.24, 14);
      tyre.rotateZ(Math.PI / 2);
      return tyre.translate(offsetX, 0, 0);
    };
    const hubGeo = (offsetX: number) => {
      const hub = new THREE.CylinderGeometry(this.wheelR * 0.55, this.wheelR * 0.55, 0.26, 10);
      hub.rotateZ(Math.PI / 2);
      return hub.translate(offsetX, 0, 0);
    };
    const tyreMat = new THREE.MeshStandardMaterial({ color: 0x121316, roughness: 0.9, metalness: 0.1 });
    const hubMat = new THREE.MeshStandardMaterial({ color: 0x9aa0a6, roughness: 0.4, metalness: 0.45 });
    const rimDark = new THREE.MeshStandardMaterial({ color: 0x303943, roughness: 0.32, metalness: 0.78 });
    const brakeMat = new THREE.MeshStandardMaterial({ color: 0x777f87, roughness: 0.48, metalness: 0.72 });
    this.materials.push(tyreMat, hubMat, rimDark, brakeMat);
    const offX = s.width / 2 - 0.1;
    const tyrePair = mergeGeometries([wheelGeo(offX), wheelGeo(-offX)], false)!;
    const hubPair = mergeGeometries([hubGeo(offX), hubGeo(-offX)], false)!;

    this.steerGroup.position.set(0, this.wheelR, s.length * 0.32);
    this.spinFront.position.set(0, 0, 0);
    this.spinRear.position.set(0, 0, -s.length * 0.32);
    this.steerGroup.add(this.spinFront);
    this.body.add(this.steerGroup, this.spinRear);

    for (const parent of [this.spinFront, this.spinRear]) {
      const tyre = new THREE.Mesh(tyrePair, tyreMat);
      tyre.castShadow = true;
      const hub = new THREE.Mesh(hubPair, hubMat);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(this.wheelR * 0.48, this.wheelR * 0.075, 7, 18), rimDark);
      rim.rotation.y = Math.PI / 2;
      rim.position.x = offX + 0.025;
      const rim2 = rim.clone();
      rim2.position.x = -offX - 0.025;
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(this.wheelR * 0.38, this.wheelR * 0.38, 0.045, 18), brakeMat);
      disc.rotation.z = Math.PI / 2;
      disc.position.x = offX - 0.025;
      const disc2 = disc.clone();
      disc2.position.x = -offX + 0.025;
      const spokes = new THREE.Group();
      for (let spoke = 0; spoke < 5; spoke++) {
        const bar = new THREE.Mesh(new THREE.BoxGeometry(0.035, this.wheelR * 0.72, 0.055), hubMat);
        bar.rotation.x = (Math.PI * 2 * spoke) / 5;
        spokes.add(bar);
      }
      spokes.position.x = offX + 0.055;
      const spokes2 = spokes.clone();
      spokes2.position.x = -offX - 0.055;
      parent.add(tyre, hub, rim, rim2, disc, disc2, spokes, spokes2);
    }

    // headlight ground glow
    const beam = new THREE.MeshBasicMaterial({
      map: lightPoolTexture(),
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.beamMat = beam;
    const beamGeo = new THREE.PlaneGeometry(7, 16);
    beamGeo.rotateX(-Math.PI / 2);
    const beamMesh = new THREE.Mesh(beamGeo, beam);
    beamMesh.position.set(0, 0.06, s.length * 0.95);
    this.group.add(beamMesh);
  }

  get speedKmh() {
    return Math.abs(this.speed) * 3.6;
  }

  get forward() {
    return new THREE.Vector3(Math.sin(this.heading), 0, Math.cos(this.heading));
  }

  setHeadlights(on: boolean) {
    this.headlightsOn = on;
    if (this.beamMat) this.beamMat.opacity = on ? 0.75 : 0;
  }

  /** World-space quad corners for simple vehicle/vehicle overlap tests. */
  getRadius() {
    return this.spec.width * 0.55;
  }

  update(dt: number, controls: DriveControls, city: CityData) {
    const s = this.spec;
    this.impact = 0;

    if (controls.throttle > 0) {
      this.speed += s.accel * controls.throttle * dt * (1 - Math.min(1, Math.abs(this.speed) / s.maxSpeed));
    }
    if (controls.brake > 0) {
      if (this.speed > 0.5) {
        this.speed -= 26 * controls.brake * dt;
      } else {
        this.speed -= s.accel * 0.75 * controls.brake * dt;
      }
    }
    // rolling resistance + aero drag
    this.speed -= this.speed * 0.5 * dt;
    if (controls.handbrake) this.speed *= 1 - Math.min(0.95, 3.2 * dt);
    this.speed = clamp(this.speed, -s.maxSpeed * 0.34, s.maxSpeed);
    if (Math.abs(this.speed) < 0.06 && controls.throttle === 0) this.speed = 0;

    const speedNorm = Math.abs(this.speed) / s.maxSpeed;
    const maxSteer = 0.62 * (1 - clamp(speedNorm, 0, 0.72));
    this.steer = damp(this.steer, controls.steer * maxSteer, 8, dt);
    const wheelbase = s.length * 0.64;
    if (Math.abs(this.speed) > 0.15) {
      this.heading += (this.speed / wheelbase) * Math.tan(this.steer) * dt;
    }

    const stepX = Math.sin(this.heading) * this.speed * dt;
    const stepZ = Math.cos(this.heading) * this.speed * dt;
    this.pos.x += stepX;
    this.pos.z += stepZ;

    // collision: three circles along the body
    const radius = s.width * 0.52;
    const sinH = Math.sin(this.heading);
    const cosH = Math.cos(this.heading);
    let hit = false;
    for (const off of [s.length * 0.36, 0, -s.length * 0.36]) {
      const cx = this.pos.x + sinH * off;
      const cz = this.pos.z + cosH * off;
      for (let i = 0; i < city.colliders.length; i++) {
        if (resolveCircleBox(cx, cz, radius, city.colliders[i], tmpPush)) {
          this.pos.x += tmpPush.x;
          this.pos.z += tmpPush.z;
          hit = true;
        }
      }
    }
    const limitX = 172;
    if (this.pos.x < -limitX || this.pos.x > limitX || this.pos.z < -limitX || this.pos.z > limitX) {
      this.pos.x = clamp(this.pos.x, -limitX, limitX);
      this.pos.z = clamp(this.pos.z, -limitX, limitX);
      hit = true;
    }
    if (hit) {
      this.impact = Math.abs(this.speed);
      this.speed *= -0.18;
      this.damageFlash = 0.25;
    }

    // visuals
    this.group.position.set(this.pos.x, 0, this.pos.z);
    this.group.rotation.y = this.heading;

    this.wheelSpin += (this.speed / this.wheelR) * dt;
    this.spinFront.rotation.x = this.wheelSpin;
    this.spinRear.rotation.x = this.wheelSpin;
    this.steerGroup.rotation.y = this.steer;

    const lateral = -clamp(this.steer * this.speed * 0.05, -0.09, 0.09);
    this.body.rotation.z = damp(this.body.rotation.z, lateral, 6, dt);
    const accelPitch = clamp((controls.throttle - controls.brake) * 0.012, -0.02, 0.02);
    this.body.rotation.x = damp(this.body.rotation.x, -accelPitch, 5, dt);

    if (this.damageFlash > 0) this.damageFlash = Math.max(0, this.damageFlash - dt);

    if (this.isPolice) {
      this.sirenTime += dt;
      const on = Math.floor(this.sirenTime * 4) % 2 === 0;
      if (this.lightBarMats.length === 2) {
        this.lightBarMats[0].emissiveIntensity = on ? 2.4 : 0.15;
        this.lightBarMats[1].emissiveIntensity = on ? 0.15 : 2.4;
      }
    }
  }

  dispose() {
    this.group.removeFromParent();
    this.group.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.isMesh) {
        m.geometry.dispose();
      }
    });
    this.materials.forEach((m) => m.dispose());
    this.beamMat?.dispose();
  }
}
