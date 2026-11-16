import * as THREE from 'three';
import { damp, clamp } from './utils';

export interface CharacterColors {
  skin: number;
  shirt: number;
  jacket: number;
  pants: number;
  shoes: number;
  hair: number;
}

export const DEFAULT_COLORS: CharacterColors = {
  skin: 0xb98a68,
  shirt: 0xe8e5de,
  jacket: 0x22262e,
  pants: 0x2e3642,
  shoes: 0x14161a,
  hair: 0x17181b,
};

const mat = (color: number, roughness = 0.75, metalness = 0.05) =>
  new THREE.MeshStandardMaterial({ color, roughness, metalness });

function capsule(r: number, len: number) {
  return new THREE.CapsuleGeometry(r, len, 3, 8);
}

/**
 * A fully modelled humanoid built from primitives, driven by procedural
 * animation (idle / walk / run / jump). Origin is at the feet.
 */
export class Humanoid {
  root = new THREE.Group();
  hips = new THREE.Group();
  torso = new THREE.Group();
  head = new THREE.Group();
  armL = new THREE.Group();
  armR = new THREE.Group();
  elbowL = new THREE.Group();
  elbowR = new THREE.Group();
  legL = new THREE.Group();
  legR = new THREE.Group();
  kneeL = new THREE.Group();
  kneeR = new THREE.Group();
  private phase = 0;
  private idleTime = 0;
  private pelvisY = 0.94;
  private meshes: THREE.Mesh[] = [];

  constructor(colors: CharacterColors = DEFAULT_COLORS, detailed = true) {
    const skinMat = mat(colors.skin, 0.62);
    const shirtMat = mat(colors.shirt, 0.85);
    const jacketMat = mat(colors.jacket, 0.8);
    const pantsMat = mat(colors.pants, 0.9);
    const shoeMat = mat(colors.shoes, 0.6, 0.15);
    const hairMat = mat(colors.hair, 0.9);

    const add = (parent: THREE.Object3D, geo: THREE.BufferGeometry, m: THREE.Material, x = 0, y = 0, z = 0) => {
      const mesh = new THREE.Mesh(geo, m);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = false;
      parent.add(mesh);
      this.meshes.push(mesh);
      return mesh;
    };

    this.root.add(this.hips);
    this.hips.position.y = this.pelvisY;

    this.torso.position.y = 0.04;
    this.hips.add(this.torso);

    // torso with jacket over shirt
    add(this.torso, new THREE.BoxGeometry(0.42, 0.52, 0.25), jacketMat, 0, 0.3, 0);
    add(this.torso, new THREE.BoxGeometry(0.3, 0.3, 0.06), shirtMat, 0, 0.38, 0.12);
    add(this.torso, new THREE.BoxGeometry(0.44, 0.1, 0.26), jacketMat, 0, 0.52, 0);
    add(this.torso, new THREE.BoxGeometry(0.4, 0.09, 0.24), mat(0x14161a, 0.7), 0, 0.06, 0);
    // collar: jacket all round, with a sliver of shirt at the front
    add(this.torso, new THREE.BoxGeometry(0.22, 0.08, 0.2), jacketMat, 0, 0.575, 0);
    add(this.torso, new THREE.BoxGeometry(0.09, 0.06, 0.03), shirtMat, 0, 0.56, 0.112);

    // head
    this.head.position.y = 0.63;
    this.torso.add(this.head);
    add(this.head, new THREE.CylinderGeometry(0.055, 0.06, 0.09, 8), skinMat, 0, 0.0, 0);
    const skull = add(this.head, new THREE.SphereGeometry(0.115, detailed ? 12 : 8, detailed ? 10 : 7), skinMat, 0, 0.11, 0);
    skull.scale.set(0.92, 1.05, 0.95);
    add(this.head, new THREE.SphereGeometry(0.118, detailed ? 12 : 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.52), hairMat, 0, 0.115, 0);
    add(this.head, new THREE.BoxGeometry(0.14, 0.05, 0.04), hairMat, 0, 0.16, -0.09);
    if (detailed) {
      add(this.head, new THREE.BoxGeometry(0.035, 0.02, 0.01), mat(0x101216, 0.4), -0.042, 0.12, 0.108);
      add(this.head, new THREE.BoxGeometry(0.035, 0.02, 0.01), mat(0x101216, 0.4), 0.042, 0.12, 0.108);
    }

    // arms
    const armGeo = capsule(0.068, 0.2);
    const foreGeo = capsule(0.058, 0.2);
    for (const side of [-1, 1] as const) {
      const shoulder = side === -1 ? this.armL : this.armR;
      const elbow = side === -1 ? this.elbowL : this.elbowR;
      shoulder.position.set(side * 0.268, 0.5, 0.005);
      this.torso.add(shoulder);
      add(shoulder, armGeo, jacketMat, 0, -0.15, 0);
      elbow.position.y = -0.3;
      shoulder.add(elbow);
      add(elbow, foreGeo, jacketMat, 0, -0.12, 0);
      add(elbow, new THREE.SphereGeometry(0.062, 8, 6), skinMat, 0, -0.26, 0);
    }

    // legs
    const thighGeo = capsule(0.078, 0.26);
    const shinGeo = capsule(0.065, 0.26);
    for (const side of [-1, 1] as const) {
      const hip = side === -1 ? this.legL : this.legR;
      const knee = side === -1 ? this.kneeL : this.kneeR;
      hip.position.set(side * 0.11, -0.02, 0);
      this.hips.add(hip);
      add(hip, thighGeo, pantsMat, 0, -0.2, 0);
      knee.position.y = -0.42;
      hip.add(knee);
      add(knee, shinGeo, pantsMat, 0, -0.19, 0);
      add(knee, new THREE.BoxGeometry(0.13, 0.09, 0.27), shoeMat, 0, -0.39, 0.055);
    }

    this.root.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) {
        o.castShadow = true;
      }
    });
  }

  get object() {
    return this.root;
  }

  setCastShadow(enabled: boolean) {
    this.meshes.forEach((m) => (m.castShadow = enabled));
  }

  resetPose() {
    this.phase = 0;
  }

  /**
   * Procedurally animate the rig.
   * @param speed horizontal movement speed (m/s)
   * @param airborne whether the character is off the ground
   */
  animate(dt: number, speed: number, airborne: boolean, sitting = false) {
    if (sitting) {
      this.legL.rotation.x = THREE.MathUtils.damp(this.legL.rotation.x, 1.35, 10, dt);
      this.legR.rotation.x = THREE.MathUtils.damp(this.legR.rotation.x, 1.35, 10, dt);
      this.kneeL.rotation.x = THREE.MathUtils.damp(this.kneeL.rotation.x, -1.35, 10, dt);
      this.kneeR.rotation.x = THREE.MathUtils.damp(this.kneeR.rotation.x, -1.35, 10, dt);
      this.armL.rotation.x = THREE.MathUtils.damp(this.armL.rotation.x, 1.15, 10, dt);
      this.armR.rotation.x = THREE.MathUtils.damp(this.armR.rotation.x, 1.15, 10, dt);
      this.elbowL.rotation.x = THREE.MathUtils.damp(this.elbowL.rotation.x, -0.75, 10, dt);
      this.elbowR.rotation.x = THREE.MathUtils.damp(this.elbowR.rotation.x, -0.75, 10, dt);
      return;
    }

    const moving = speed > 0.25;
    const run = clamp((speed - 2.9) / 3.6, 0, 1);
    this.idleTime += dt;

    if (moving && !airborne) {
      this.phase += dt * (speed * 1.85 + run * 1.2);
    } else {
      this.phase += dt * 0.6;
    }

    const amp = 0.46 + run * 0.55;
    const s = Math.sin(this.phase);
    const c = Math.cos(this.phase);
    const k = 14;

    if (airborne) {
      this.hips.position.y = THREE.MathUtils.damp(this.hips.position.y, this.pelvisY + 0.04, 10, dt);
      this.torso.rotation.x = THREE.MathUtils.damp(this.torso.rotation.x, -0.08, 8, dt);
      this.torso.rotation.y = THREE.MathUtils.damp(this.torso.rotation.y, 0, 8, dt);
      this.legL.rotation.x = THREE.MathUtils.damp(this.legL.rotation.x, 0.55, 9, dt);
      this.legR.rotation.x = THREE.MathUtils.damp(this.legR.rotation.x, -0.35, 9, dt);
      this.kneeL.rotation.x = THREE.MathUtils.damp(this.kneeL.rotation.x, -0.95, 9, dt);
      this.kneeR.rotation.x = THREE.MathUtils.damp(this.kneeR.rotation.x, -0.5, 9, dt);
      this.armL.rotation.x = THREE.MathUtils.damp(this.armL.rotation.x, -0.9, 8, dt);
      this.armR.rotation.x = THREE.MathUtils.damp(this.armR.rotation.x, -0.7, 8, dt);
      this.elbowL.rotation.x = THREE.MathUtils.damp(this.elbowL.rotation.x, -0.6, 8, dt);
      this.elbowR.rotation.x = THREE.MathUtils.damp(this.elbowR.rotation.x, -0.6, 8, dt);
      this.armL.rotation.z = THREE.MathUtils.damp(this.armL.rotation.z, -0.25, 8, dt);
      this.armR.rotation.z = THREE.MathUtils.damp(this.armR.rotation.z, 0.25, 8, dt);
      return;
    }

    if (!moving) {
      // idle: breathing + subtle weight shift
      const breath = Math.sin(this.idleTime * 1.5) * 0.5 + 0.5;
      this.hips.position.y = THREE.MathUtils.damp(this.hips.position.y, this.pelvisY - 0.01, 6, dt);
      this.torso.rotation.x = THREE.MathUtils.damp(this.torso.rotation.x, 0.03 + breath * 0.02, 6, dt);
      this.torso.rotation.y = THREE.MathUtils.damp(this.torso.rotation.y, Math.sin(this.idleTime * 0.4) * 0.06, 4, dt);
      this.legL.rotation.x = THREE.MathUtils.damp(this.legL.rotation.x, 0.02, 8, dt);
      this.legR.rotation.x = THREE.MathUtils.damp(this.legR.rotation.x, -0.02, 8, dt);
      this.kneeL.rotation.x = THREE.MathUtils.damp(this.kneeL.rotation.x, 0.03, 8, dt);
      this.kneeR.rotation.x = THREE.MathUtils.damp(this.kneeR.rotation.x, 0.05, 8, dt);
      this.armL.rotation.x = THREE.MathUtils.damp(this.armL.rotation.x, 0.05 + breath * 0.03, 6, dt);
      this.armR.rotation.x = THREE.MathUtils.damp(this.armR.rotation.x, 0.05 + breath * 0.03, 6, dt);
      this.armL.rotation.z = THREE.MathUtils.damp(this.armL.rotation.z, -0.09, 6, dt);
      this.armR.rotation.z = THREE.MathUtils.damp(this.armR.rotation.z, 0.09, 6, dt);
      this.elbowL.rotation.x = THREE.MathUtils.damp(this.elbowL.rotation.x, -0.22, 6, dt);
      this.elbowR.rotation.x = THREE.MathUtils.damp(this.elbowR.rotation.x, -0.22, 6, dt);
      this.head.rotation.y = THREE.MathUtils.damp(this.head.rotation.y, Math.sin(this.idleTime * 0.31) * 0.25, 3, dt);
      return;
    }

    // locomotion
    this.hips.position.y = this.pelvisY + Math.sin(this.phase * 2) * 0.012 - 0.015;
    this.torso.rotation.x = THREE.MathUtils.damp(this.torso.rotation.x, 0.05 + run * 0.2, k, dt);
    this.torso.rotation.y = THREE.MathUtils.damp(this.torso.rotation.y, Math.sin(this.phase) * 0.06 * (1 - run), k, dt);
    this.head.rotation.y = THREE.MathUtils.damp(this.head.rotation.y, 0, 6, dt);

    this.legL.rotation.x = THREE.MathUtils.damp(this.legL.rotation.x, s * amp, k, dt);
    this.legR.rotation.x = THREE.MathUtils.damp(this.legR.rotation.x, -s * amp, k, dt);
    this.kneeL.rotation.x = THREE.MathUtils.damp(
      this.kneeL.rotation.x,
      -Math.max(0, -s) * (0.55 + run * 0.85) - 0.05,
      k,
      dt
    );
    this.kneeR.rotation.x = THREE.MathUtils.damp(
      this.kneeR.rotation.x,
      -Math.max(0, s) * (0.55 + run * 0.85) - 0.05,
      k,
      dt
    );

    this.armL.rotation.x = THREE.MathUtils.damp(this.armL.rotation.x, -s * (0.42 + run * 0.55), k, dt);
    this.armR.rotation.x = THREE.MathUtils.damp(this.armR.rotation.x, s * (0.42 + run * 0.55), k, dt);
    this.armL.rotation.z = THREE.MathUtils.damp(this.armL.rotation.z, -0.1 - run * 0.05, k, dt);
    this.armR.rotation.z = THREE.MathUtils.damp(this.armR.rotation.z, 0.1 + run * 0.05, k, dt);
    this.elbowL.rotation.x = THREE.MathUtils.damp(this.elbowL.rotation.x, -0.25 - run * 1.15, k, dt);
    this.elbowR.rotation.x = THREE.MathUtils.damp(this.elbowR.rotation.x, -0.25 - run * 1.15, k, dt);
    void c;
  }
}
