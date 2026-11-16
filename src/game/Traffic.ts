import * as THREE from 'three';
import { Humanoid } from './Character';
import { Vehicle } from './Vehicle';
import type { CityData } from './City';
import { clamp, shortestAngle, mulberry32 } from './utils';

const CAR_COLORS = [
  '#8f8f97',
  '#2c3a4a',
  '#7a1f24',
  '#1d4b3b',
  '#c9c2b2',
  '#3b3b40',
  '#5c4a2e',
  '#22303b',
];

/** Simple lane-following traffic. Cars wrap around the city grid. */
export class TrafficCar {
  vehicle: Vehicle;
  axis: 'x' | 'z';
  dir: 1 | -1;
  lane: number;
  along: number;
  cruise: number;
  private wobble: number;

  constructor(axis: 'x' | 'z', dir: 1 | -1, lane: number, along: number, rnd: () => number) {
    this.axis = axis;
    this.dir = dir;
    this.lane = lane;
    this.along = along;
    this.cruise = 8 + rnd() * 5;
    this.wobble = rnd() * 10;
    const kind = rnd() < 0.2 ? 'van' : rnd() < 0.45 ? 'suv' : 'sedan';
    const color = CAR_COLORS[Math.floor(rnd() * CAR_COLORS.length)];
    const heading = axis === 'z' ? (dir > 0 ? 0 : Math.PI) : dir > 0 ? Math.PI / 2 : -Math.PI / 2;
    const x = axis === 'z' ? lane : along;
    const z = axis === 'z' ? along : lane;
    this.vehicle = new Vehicle(kind, color, x, z, heading);
  }

  private setForward() {
    const s = this.dir * this.cruise;
    this.vehicle.speed = s;
  }

  update(dt: number, city: CityData, playerCar: Vehicle | null) {
    const v = this.vehicle;
    let target = this.cruise;
    // yield to the player's car if it blocks the lane ahead
    if (playerCar) {
      const dx = playerCar.pos.x - v.pos.x;
      const dz = playerCar.pos.z - v.pos.z;
      const dist = Math.hypot(dx, dz);
      if (dist < 13) {
        const ahead =
          this.axis === 'z' ? Math.sign(dz) === this.dir && Math.abs(dx) < 4 : Math.sign(dx) === this.dir && Math.abs(dz) < 4;
        if (ahead) target = dist < 7 ? 0 : 3.5;
      }
    }
    this.wobble += dt;
    this.setForward();
    v.speed = Math.min(v.speed, target) * (this.dir > 0 ? 1 : -1);
    if (target < 0.2) v.speed = 0;
    v.update(dt, { throttle: 0, brake: 0, steer: 0, handbrake: false }, city);

    const lim = 166;
    if (this.axis === 'z') {
      if (v.pos.z > lim) v.pos.z = -lim;
      if (v.pos.z < -lim) v.pos.z = lim;
    } else {
      if (v.pos.x > lim) v.pos.x = -lim;
      if (v.pos.x < -lim) v.pos.x = lim;
    }
    v.group.position.set(v.pos.x, 0, v.pos.z);
  }
}

export class Pedestrian {
  rig: Humanoid;
  pos = new THREE.Vector3();
  loop: THREE.Vector3[];
  index = 0;
  speed = 1.15 + Math.random() * 0.5;
  yaw = 0;
  alive = true;
  downTimer = 0;
  private waitTimer = 0;

  constructor(loop: THREE.Vector3[], startIndex: number) {
    this.loop = loop;
    this.index = startIndex % loop.length;
    const colors = {
      skin: [0xc99a72, 0x8d6244, 0xe0b48c, 0x6f4a31][Math.floor(Math.random() * 4)],
      shirt: [0xdad6cd, 0x33556e, 0x8c3a3a, 0x3c6b52][Math.floor(Math.random() * 4)],
      jacket: [0x24272e, 0x3b3f47, 0x4a3a2e, 0x20303a][Math.floor(Math.random() * 4)],
      pants: [0x2a3038, 0x3c3f44, 0x22303f][Math.floor(Math.random() * 3)],
      shoes: 0x15171a,
      hair: [0x1a1a1c, 0x3a2a1c, 0x5a4a30][Math.floor(Math.random() * 3)],
    };
    this.rig = new Humanoid(colors, false);
    const p = this.loop[this.index];
    this.pos.copy(p);
    this.pos.x += (Math.random() - 0.5) * 2;
    this.pos.z += (Math.random() - 0.5) * 2;
    this.rig.object.position.copy(this.pos);
  }

  update(dt: number) {
    if (!this.alive) {
      this.downTimer -= dt;
      if (this.downTimer <= 0) {
        this.alive = true;
        this.rig.object.rotation.z = 0;
        this.rig.object.position.y = this.pos.y;
        const p = this.loop[this.index];
        this.pos.set(p.x, p.y, p.z);
      }
      return;
    }
    if (this.waitTimer > 0) {
      this.waitTimer -= dt;
      this.rig.animate(dt, 0, false);
      return;
    }
    const target = this.loop[(this.index + 1) % this.loop.length];
    const dx = target.x - this.pos.x;
    const dz = target.z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 0.7) {
      this.index = (this.index + 1) % this.loop.length;
      if (Math.random() < 0.2) this.waitTimer = 1 + Math.random() * 2.5;
      return;
    }
    const nx = dx / dist;
    const nz = dz / dist;
    this.pos.x += nx * this.speed * dt;
    this.pos.z += nz * this.speed * dt;
    this.yaw = Math.atan2(nx, nz);
    this.rig.object.position.copy(this.pos);
    this.rig.object.rotation.y = this.yaw;
    this.rig.animate(dt, this.speed, false);
  }

  knockDown() {
    if (!this.alive) return;
    this.alive = false;
    this.downTimer = 9;
    this.rig.object.rotation.z = Math.PI / 2;
    this.rig.object.position.y = this.pos.y - 0.7;
  }
}

export class PoliceUnit {
  vehicle: Vehicle;
  active = false;
  spawn = new THREE.Vector3();

  constructor(spawn: THREE.Vector3) {
    this.spawn.copy(spawn);
    this.vehicle = new Vehicle('police', '#1b1e24', spawn.x, spawn.z, 0);
    this.vehicle.group.visible = false;
  }

  activate(playerPos: THREE.Vector3) {
    const angle = Math.atan2(playerPos.x, playerPos.z) + Math.PI;
    this.vehicle.pos.set(
      playerPos.x + Math.sin(angle) * 70,
      0,
      playerPos.z + Math.cos(angle) * 70
    );
    this.vehicle.pos.x = clamp(this.vehicle.pos.x, -150, 150);
    this.vehicle.pos.z = clamp(this.vehicle.pos.z, -150, 150);
    this.vehicle.heading = Math.atan2(playerPos.x - this.vehicle.pos.x, playerPos.z - this.vehicle.pos.z);
    this.vehicle.speed = 0;
    this.vehicle.group.visible = true;
    this.active = true;
  }

  deactivate() {
    this.active = false;
    this.vehicle.group.visible = false;
  }

  update(dt: number, target: THREE.Vector3, city: CityData) {
    if (!this.active) return;
    const v = this.vehicle;
    const dx = target.x - v.pos.x;
    const dz = target.z - v.pos.z;
    const dist = Math.hypot(dx, dz);
    const desired = Math.atan2(dx, dz);
    const diff = shortestAngle(v.heading, desired);
    const steer = clamp(diff * 1.8, -1, 1);
    const throttle = dist > 14 ? 1 : dist > 7 ? 0.45 : 0;
    const brake = Math.abs(diff) > 1.3 && v.speed > 9 ? 1 : dist < 6 ? 0.7 : 0;
    v.update(dt, { throttle, brake, steer, handbrake: false }, city);
  }
}

export function createTraffic(
  city: CityData,
  count: number,
  scene: THREE.Scene
): { cars: TrafficCar[]; peds: Pedestrian[]; playerNear: (pos: THREE.Vector3) => TrafficCar | null } {
  const rnd = mulberry32(2024);
  const cars: TrafficCar[] = [];
  const roads = city.trafficRoads;
  let attempts = 0;
  while (cars.length < count && attempts < count * 12) {
    attempts++;
    const axis: 'x' | 'z' = rnd() < 0.5 ? 'x' : 'z';
    const road = roads[1 + Math.floor(rnd() * (roads.length - 2))];
    const dir: 1 | -1 = rnd() < 0.5 ? 1 : -1;
    const lane = road + dir * 3.5;
    const along = -150 + rnd() * 300;
    // keep clear of the spawn area
    if (Math.hypot(axis === 'z' ? lane : along, axis === 'z' ? along : lane) < 45) continue;
    const car = new TrafficCar(axis, dir, lane, along, rnd);
    cars.push(car);
    scene.add(car.vehicle.group);
  }

  const peds: Pedestrian[] = [];
  const loops = city.pedLoops;
  for (let i = 0; i < Math.min(loops.length, 10); i++) {
    const ped = new Pedestrian(loops[i], Math.floor(rnd() * 4));
    peds.push(ped);
    scene.add(ped.rig.object);
  }

  return {
    cars,
    peds,
    playerNear: (pos: THREE.Vector3) => {
      let best: TrafficCar | null = null;
      let bestD = 1e9;
      for (const c of cars) {
        const d = Math.hypot(c.vehicle.pos.x - pos.x, c.vehicle.pos.z - pos.z);
        if (d < bestD) {
          bestD = d;
          best = c;
        }
      }
      return bestD < 4 ? best : null;
    },
  };
}
