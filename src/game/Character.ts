import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from 'three/examples/jsm/utils/SkeletonUtils.js';
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
  skin: 0xd6a17d,
  shirt: 0xf4f0e6,
  jacket: 0x315574,
  pants: 0x405064,
  shoes: 0x252b32,
  hair: 0x29231f,
};

const characterLoader = new GLTFLoader();
let characterSource: Promise<GLTF> | null = null;

function loadCharacterSource() {
  if (!characterSource) {
    characterSource = new Promise<GLTF>((resolve, reject) => {
      characterLoader.load(`${import.meta.env.BASE_URL}models/character.glb`, resolve, undefined, reject);
    });
    characterSource.catch(() => { characterSource = null; });
  }
  return characterSource;
}

const mat = (color: number, roughness = 0.75, metalness = 0.05) =>
  new THREE.MeshStandardMaterial({ color, roughness, metalness, emissive: color, emissiveIntensity: 0.035 });

function capsule(r: number, len: number) {
  return new THREE.CapsuleGeometry(r, len, 5, 12);
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
  private externalModel?: THREE.Group;
  private externalBaseY = 0;
  private externalBones: { bone: THREE.Bone; base: THREE.Quaternion; source: THREE.Object3D; weight: number }[] = [];
  private externalMixer?: THREE.AnimationMixer;
  private externalActions: Partial<Record<'idle' | 'walk' | 'run' | 'jump', THREE.AnimationAction>> = {};
  private externalActiveAction?: THREE.AnimationAction;

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

    // torso with a softly sculpted jacket silhouette over the shirt.
    const jacketBody = add(this.torso, capsule(0.21, 0.15), jacketMat, 0, 0.3, 0);
    jacketBody.scale.z = 0.68;
    add(this.torso, new THREE.BoxGeometry(0.3, 0.3, 0.06), shirtMat, 0, 0.38, 0.12);
    const shoulderLine = add(this.torso, capsule(0.22, 0.1), jacketMat, 0, 0.51, 0);
    shoulderLine.scale.z = 0.62;
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
      const eyeWhite = mat(0xf1eee8, 0.32);
      const irisMat = mat(0x34271e, 0.3);
      const browMat = mat(colors.hair, 0.95);
      const lipMat = mat(0x70483e, 0.8);
      // Facial planes and features, oriented toward the character's forward (+Z).
      add(this.head, new THREE.SphereGeometry(0.018, 8, 6), eyeWhite, -0.043, 0.12, 0.108);
      add(this.head, new THREE.SphereGeometry(0.018, 8, 6), eyeWhite, 0.043, 0.12, 0.108);
      add(this.head, new THREE.SphereGeometry(0.009, 8, 6), irisMat, -0.043, 0.12, 0.124);
      add(this.head, new THREE.SphereGeometry(0.009, 8, 6), irisMat, 0.043, 0.12, 0.124);
      add(this.head, new THREE.BoxGeometry(0.047, 0.012, 0.018), browMat, -0.043, 0.153, 0.105, 0, 0, -0.08);
      add(this.head, new THREE.BoxGeometry(0.047, 0.012, 0.018), browMat, 0.043, 0.153, 0.105, 0, 0, 0.08);
      add(this.head, new THREE.ConeGeometry(0.022, 0.055, 6), skinMat, 0, 0.085, 0.115, Math.PI / 2);
      add(this.head, new THREE.BoxGeometry(0.045, 0.009, 0.012), lipMat, 0, 0.045, 0.111);
      add(this.head, new THREE.SphereGeometry(0.035, 8, 7), skinMat, -0.112, 0.08, 0);
      add(this.head, new THREE.SphereGeometry(0.035, 8, 7), skinMat, 0.112, 0.08, 0);
      // Hairline, sideburns and neck detail.
      add(this.head, new THREE.BoxGeometry(0.035, 0.105, 0.04), hairMat, -0.105, 0.035, -0.005);
      add(this.head, new THREE.BoxGeometry(0.035, 0.105, 0.04), hairMat, 0.105, 0.035, -0.005);
      add(this.head, new THREE.SphereGeometry(0.022, 8, 6), skinMat, -0.112, 0.08, 0.026);
      add(this.head, new THREE.SphereGeometry(0.022, 8, 6), skinMat, 0.112, 0.08, 0.026);
    }

    // Tailored jacket details: lapels, front seam, pockets and cuffs.
    const seamMat = mat(0x172b3c, 0.82);
    const stitchMat = mat(0x9ba8ad, 0.8);
    add(this.torso, new THREE.BoxGeometry(0.035, 0.38, 0.022), seamMat, 0, 0.31, 0.132);
    add(this.torso, new THREE.BoxGeometry(0.09, 0.2, 0.025), shirtMat, -0.055, 0.47, 0.135, 0, 0, -0.22);
    add(this.torso, new THREE.BoxGeometry(0.09, 0.2, 0.025), shirtMat, 0.055, 0.47, 0.135, 0, 0, 0.22);
    for (const side of [-1, 1]) {
      add(this.torso, new THREE.BoxGeometry(0.12, 0.095, 0.018), seamMat, side * 0.115, 0.2, 0.134);
      add(this.torso, new THREE.BoxGeometry(0.035, 0.07, 0.02), stitchMat, side * 0.115, 0.2, 0.147);
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
      add(knee, new THREE.BoxGeometry(0.135, 0.025, 0.275), mat(0x090b0e, 0.95), 0, -0.433, 0.055);
      add(knee, new THREE.BoxGeometry(0.075, 0.018, 0.11), mat(0x747c82, 0.7, 0.25), 0, -0.36, 0.13);
    }

    this.root.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) {
        o.castShadow = true;
      }
    });
    this.loadExternalModel();
  }

  private loadExternalModel() {
    loadCharacterSource().then((source) => {
      if (!this.root.parent && this.root.userData.disposed) return;
      const model = cloneSkeleton(source.scene) as THREE.Group;
      model.traverse((object) => {
        const mesh = object as THREE.Mesh;
        if (!mesh.isMesh) return;
        mesh.geometry = mesh.geometry.clone();
        if (Array.isArray(mesh.material)) mesh.material = mesh.material.map((material) => material.clone());
        else mesh.material = mesh.material.clone();
        mesh.castShadow = true;
        mesh.receiveShadow = false;
      });

      // Fit the authored Quaternius humanoid to the game's 1.8 m character scale.
      model.updateMatrixWorld(true);
      const bounds = new THREE.Box3().setFromObject(model);
      const dimensions = bounds.getSize(new THREE.Vector3());
      const height = dimensions.y;
      if (!Number.isFinite(height) || height < 0.1) return;

      // The source GLB uses one neutral material. Add vertex colours by body
      // region so skin, jacket, trousers and shoes read as separate materials.
      const minY = bounds.min.y;
      const centerX = (bounds.min.x + bounds.max.x) * 0.5;
      const skin = new THREE.Color(0xc58f70);
      const jacket = new THREE.Color(0x315574);
      const trousers = new THREE.Color(0x3d4858);
      const shoes = new THREE.Color(0x20252c);
      const hair = new THREE.Color(0x211d1b);
      const sample = new THREE.Vector3();
      model.traverse((object) => {
        const mesh = object as THREE.Mesh;
        if (!mesh.isMesh) return;
        const positions = mesh.geometry.getAttribute('position') as THREE.BufferAttribute;
        const colors = new Float32Array(positions.count * 3);
        for (let i = 0; i < positions.count; i++) {
          sample.fromBufferAttribute(positions, i).applyMatrix4(mesh.matrixWorld);
          const y = THREE.MathUtils.clamp((sample.y - minY) / height, 0, 1);
          const side = Math.abs(sample.x - centerX);
          let color = jacket;
          if (y < 0.085) color = shoes;
          else if (y < 0.49) color = trousers;
          else if (y < 0.81) color = jacket;
          else if (y < 0.955) color = skin;
          else color = hair;
          if (side > dimensions.x * 0.36 && y > 0.34 && y < 0.74) color = skin;
          color.toArray(colors, i * 3);
        }
        mesh.geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        const makeMaterial = () => new THREE.MeshStandardMaterial({
          color: 0xffffff, vertexColors: true, roughness: 0.76, metalness: 0.025,
        });
        mesh.material = Array.isArray(mesh.material)
          ? mesh.material.map(() => makeMaterial())
          : makeMaterial();
      });

      const scale = 1.82 / height;
      model.scale.setScalar(scale);
      model.updateMatrixWorld(true);
      const fitted = new THREE.Box3().setFromObject(model);
      model.position.y = -fitted.min.y;
      this.externalBaseY = model.position.y;
      model.traverse((object) => {
        if (!(object as THREE.Bone).isBone) return;
        const name = object.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        const left = /left|_l$|l$/.test(name);
        const right = /right|_r$|r$/.test(name);
        let sourceRig: THREE.Object3D | undefined;
        let weight = 1;
        if (name.includes('pelvis') || name === 'hips') sourceRig = this.hips;
        else if (name.includes('spine') || name.includes('chest')) {
          sourceRig = this.torso;
          weight = 0.32;
        } else if (name.includes('head')) sourceRig = this.head;
        else if (name.includes('forearm') || name.includes('lowerarm')) sourceRig = left ? this.elbowL : right ? this.elbowR : undefined;
        else if (name.includes('upperarm') || name.includes('clavicle') || name.includes('shoulder')) {
          sourceRig = left ? this.armL : right ? this.armR : undefined;
          if (name.includes('clavicle') || name.includes('shoulder')) weight = 0.4;
        } else if (name.includes('thigh') || name.includes('upleg')) sourceRig = left ? this.legL : right ? this.legR : undefined;
        else if (name.includes('calf') || name.includes('lowerleg') || name.includes('shin')) sourceRig = left ? this.kneeL : right ? this.kneeR : undefined;
        if (sourceRig) this.externalBones.push({
          bone: object as THREE.Bone,
          base: (object as THREE.Bone).quaternion.clone(),
          source: sourceRig,
          weight,
        });
      });
      // Remove the procedural fallback once the authored model is ready.
      const fallbackMaterials = new Set<THREE.Material>();
      this.meshes.forEach((mesh) => {
        mesh.parent?.remove(mesh);
        mesh.geometry.dispose();
        if (Array.isArray(mesh.material)) mesh.material.forEach((material) => fallbackMaterials.add(material));
        else fallbackMaterials.add(mesh.material);
      });
      fallbackMaterials.forEach((material) => material.dispose());
      this.meshes.length = 0;
      this.root.add(model);
      this.externalModel = model;

      if (source.animations.length > 0) {
        this.externalMixer = new THREE.AnimationMixer(model);
        const findClip = (pattern: RegExp) => source.animations.find((clip) => pattern.test(clip.name));
        const idle = findClip(/idle|stand|breath/i) ?? source.animations[0];
        const walk = findClip(/walk/i) ?? idle;
        const run = findClip(/run|sprint/i) ?? walk;
        const jump = findClip(/jump|fall/i) ?? run;
        this.externalActions = {
          idle: this.externalMixer.clipAction(idle),
          walk: this.externalMixer.clipAction(walk),
          run: this.externalMixer.clipAction(run),
          jump: this.externalMixer.clipAction(jump),
        };
        this.externalActiveAction = this.externalActions.idle;
        this.externalActiveAction?.play();
      }
    }).catch(() => {
      // Keep the procedural humanoid visible when the optional model is unavailable.
    });
  }

  private updateExternalAnimation(dt: number, speed: number, airborne: boolean, sitting: boolean) {
    if (!this.externalModel) return;
    this.externalModel.position.y = this.externalBaseY + (this.hips.position.y - this.pelvisY);
    if (this.externalMixer) {
      const key = sitting ? 'idle' : airborne ? 'jump' : speed > 4.2 ? 'run' : speed > 0.25 ? 'walk' : 'idle';
      const next = this.externalActions[key] ?? this.externalActions.walk ?? this.externalActions.idle;
      if (next && next !== this.externalActiveAction) {
        next.reset().fadeIn(0.18).play();
        this.externalActiveAction?.fadeOut(0.18);
        this.externalActiveAction = next;
      }
      if (this.externalActiveAction) this.externalActiveAction.timeScale = key === 'run' ? 1.25 : 1;
      this.externalMixer.update(dt);
      return;
    }
    this.externalBones.forEach(({ bone, base, source, weight }) => {
      const delta = new THREE.Quaternion().setFromEuler(source.rotation);
      delta.slerp(new THREE.Quaternion(), 1 - weight);
      bone.quaternion.copy(base).multiply(delta);
    });
  }

  get object() {
    return this.root;
  }

  setCastShadow(enabled: boolean) {
    this.meshes.forEach((m) => (m.castShadow = enabled));
  }

  dispose() {
    this.root.userData.disposed = true;
    this.externalMixer?.stopAllAction();
    if (this.externalModel) this.externalMixer?.uncacheRoot(this.externalModel);
    const materials = new Set<THREE.Material>();
    this.root.traverse((object) => {
      const mesh = object as THREE.Mesh;
      if (!mesh.isMesh) return;
      mesh.geometry.dispose();
      if (Array.isArray(mesh.material)) mesh.material.forEach((material) => materials.add(material));
      else materials.add(mesh.material);
    });
    materials.forEach((material) => material.dispose());
    this.root.removeFromParent();
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
      this.updateExternalAnimation(dt, speed, airborne, sitting);
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
      this.updateExternalAnimation(dt, speed, airborne, sitting);
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
      this.updateExternalAnimation(dt, speed, airborne, sitting);
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
    this.updateExternalAnimation(dt, speed, airborne, sitting);
    void c;
  }
}
