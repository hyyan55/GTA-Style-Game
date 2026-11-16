import * as THREE from 'three';
import { Humanoid, DEFAULT_COLORS } from './Character';
import type { CityData } from './City';
import { resolveCircleBox, clamp, damp, dampAngle } from './utils';

const tmpPush = { x: 0, z: 0 };

export interface MoveIntent {
  x: number; // -1..1 strafe
  z: number; // -1..1 forward
  run: boolean;
  jump: boolean;
}

export class Player {
  rig = new Humanoid(DEFAULT_COLORS, true);
  pos = new THREE.Vector3(0, 0.24, 10);
  velX = 0;
  velZ = 0;
  velY = 0;
  yaw = 0;
  speed = 0;
  grounded = true;
  radius = 0.36;
  stepAccum = 0;
  onStep?: () => void;
  onJump?: () => void;
  onLand?: () => void;
  private lean = 0;

  constructor() {
    this.rig.object.position.copy(this.pos);
  }

  get position() {
    return this.pos;
  }

  get cameraTarget() {
    return new THREE.Vector3(this.pos.x, this.pos.y + 1.45, this.pos.z);
  }

  placeAt(x: number, z: number, yaw: number, city: CityData) {
    this.pos.set(x, city.groundHeightAt(x, z), z);
    this.yaw = yaw;
    this.velX = this.velZ = this.velY = 0;
    this.grounded = true;
    this.rig.object.position.copy(this.pos);
    this.rig.object.rotation.y = yaw;
  }

  update(dt: number, intent: MoveIntent, city: CityData, camYaw: number) {
    const fwdX = -Math.sin(camYaw);
    const fwdZ = -Math.cos(camYaw);
    const rightX = Math.cos(camYaw);
    const rightZ = -Math.sin(camYaw);

    let dx = fwdX * intent.z + rightX * intent.x;
    let dz = fwdZ * intent.z + rightZ * intent.x;
    const mag = Math.hypot(dx, dz);
    const analog = Math.min(1, mag);
    if (mag > 1e-4) {
      dx /= mag;
      dz /= mag;
    }

    const canRun = intent.run && analog > 0.2;
    const maxSpeed = (canRun ? 6.7 : 2.8) * analog;
    const targetVX = dx * maxSpeed;
    const targetVZ = dz * maxSpeed;
    const accel = this.grounded ? (canRun ? 11 : 13) : 3.5;
    this.velX = damp(this.velX, targetVX, accel, dt);
    this.velZ = damp(this.velZ, targetVZ, accel, dt);

    if (mag > 0.05) {
      const targetYaw = Math.atan2(dx, dz);
      this.yaw = dampAngle(this.yaw, targetYaw, this.grounded ? 13 : 5, dt);
    }

    // jump / gravity
    if (intent.jump && this.grounded) {
      this.velY = 7.0;
      this.grounded = false;
      this.onJump?.();
    }
    this.velY -= 20 * dt;
    this.pos.y += this.velY * dt;

    const ground = city.groundHeightAt(this.pos.x, this.pos.z);
    if (this.pos.y <= ground + 1e-3) {
      if (!this.grounded && this.velY < -3) this.onLand?.();
      this.pos.y = ground;
      this.velY = 0;
      this.grounded = true;
    } else if (this.pos.y > ground + 0.08) {
      this.grounded = false;
    }
    // step up onto curbs instantly to avoid clipping
    if (this.pos.y < ground) this.pos.y = ground;

    this.pos.x += this.velX * dt;
    this.pos.z += this.velZ * dt;

    // building collisions (circle vs AABBs)
    for (let i = 0; i < city.colliders.length; i++) {
      if (resolveCircleBox(this.pos.x, this.pos.z, this.radius, city.colliders[i], tmpPush)) {
        this.pos.x += tmpPush.x;
        this.pos.z += tmpPush.z;
        if (Math.abs(tmpPush.x) > Math.abs(tmpPush.z)) this.velX = 0;
        else this.velZ = 0;
      }
    }

    // stay inside the world
    const limit = 172;
    this.pos.x = clamp(this.pos.x, -limit, limit);
    this.pos.z = clamp(this.pos.z, -limit, limit);

    this.speed = Math.hypot(this.velX, this.velZ);

    // rig
    this.rig.object.position.copy(this.pos);
    this.rig.object.rotation.y = this.yaw;
    this.rig.animate(dt, this.speed, !this.grounded);

    // subtle lean into movement
    this.lean = damp(this.lean, clamp(-this.velX * 0.01, -0.06, 0.06), 6, dt);
    this.rig.torso.rotation.z = this.lean;

    // footsteps
    if (this.grounded && this.speed > 0.6) {
      this.stepAccum += this.speed * dt;
      const stride = this.speed > 4 ? 2.5 : 1.9;
      if (this.stepAccum > stride) {
        this.stepAccum = 0;
        this.onStep?.();
      }
    } else {
      this.stepAccum = 0;
    }
  }
}
