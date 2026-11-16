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
    const paint = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.42,
      metalness: 0.06,
      envMapIntensity: 1,
    });
    const glass = new THREE.MeshStandardMaterial({ color: 0x22303a, roughness: 0.18, metalness: 0.1 });
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
    this.materials.push(tyreMat, hubMat);
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
      parent.add(tyre, hub);
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
