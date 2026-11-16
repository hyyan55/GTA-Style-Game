import * as THREE from 'three';
import { buildCity, CITY_SIZE, ROAD_CENTERS, ROAD, BLOCK, ORIGIN, CELL, N, type CityData } from './City';
import { Player } from './Player';
import { Vehicle, type CarKind } from './Vehicle';
import { Input } from './Input';
import { GameAudio } from './Audio';
import { createTraffic, Pedestrian, PoliceUnit, TrafficCar } from './Traffic';
import { DEFAULT_HUD, type GameNotification, type HudState, type SaveData } from './types';
import { clamp, damp, dampAngle } from './utils';
import { setTextureQuality, cloudTexture } from './textures';

export type Quality = 'low' | 'medium' | 'high';

const SAVE_KEY = 'shadowcity.save.v2';
const DAY_LENGTH = 780; // seconds for a full day/night cycle

interface GameOptions {
  onHud: (state: HudState) => void;
  onNotify: (n: GameNotification) => void;
  quality: Quality;
  sensitivity: number;
  audio: boolean;
}

export class Game {
  private container: HTMLElement;
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private clock = new THREE.Clock();
  private input: Input;
  private audio = new GameAudio();

  private city!: CityData;
  private player!: Player;
  private vehicles: Vehicle[] = [];
  private traffic!: { cars: TrafficCar[]; peds: Pedestrian[]; playerNear: (p: THREE.Vector3) => TrafficCar | null };
  private police!: PoliceUnit;

  private sun!: THREE.DirectionalLight;
  private hemi!: THREE.HemisphereLight;
  private ambient!: THREE.AmbientLight;
  private headlight!: THREE.SpotLight;
  private renderScale = 1;
  private slowFrames = 0;
  private skyMat!: THREE.ShaderMaterial;
  private stars!: THREE.Points;
  private clouds: THREE.Sprite[] = [];
  private marker!: THREE.Group;
  private pickupMeshes: { mesh: THREE.Object3D; pos: THREE.Vector3; active: boolean; timer: number }[] = [];

  private camYaw = 0;
  private camPitch = 0.3;
  private camDist = 4.9;
  private camPos = new THREE.Vector3();
  private lookTimer = 0;
  private driving: Vehicle | null = null;
  private nearVehicle: Vehicle | null = null;

  timeOfDay = 0.66;
  money = 0;
  health = 100;
  wanted = 0;
  private heatTimer = 0;

  private missionStage: 'offer' | 'deliver' | 'complete' | 'cooldown' = 'offer';
  private missionTarget: THREE.Vector3 | null = null;
  private missionTitle = 'MISSION 01 · THE FIRST DELIVERY';
  private missionObjective = 'Meet the dispatcher at the Nightline depot';
  private missionReward = 750;
  private completedMissions = 0;
  private missionCooldown = 0;

  paused = false;
  private quality: Quality;
  private sensitivity: number;
  private audioEnabled: boolean;
  private hudTimer = 0;
  private saveTimer = 0;
  private fpsSmooth = 60;
  private disposed = false;
  private markerTime = 0;
  private onHud: (s: HudState) => void;
  private onNotify: (n: GameNotification) => void;
  private notifyId = 1;

  constructor(container: HTMLElement, opts: GameOptions) {
    this.container = container;
    this.onHud = opts.onHud;
    this.onNotify = opts.onNotify;
    this.quality = opts.quality;
    this.sensitivity = opts.sensitivity;
    this.audioEnabled = opts.audio;

    const saved = this.loadSave();

    this.renderer = new THREE.WebGLRenderer({
      antialias: this.quality !== 'low',
      powerPreference: 'high-performance',
      stencil: false,
    });
    this.renderer.setPixelRatio(this.pixelRatioFor(this.quality));
    this.renderer.setSize(container.clientWidth || window.innerWidth, container.clientHeight || window.innerHeight);
    this.renderer.shadowMap.enabled = this.quality !== 'low';
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.domElement.style.display = 'block';
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.renderer.domElement.style.touchAction = 'none';
    container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 900);
    this.camera.position.set(0, 6, -8);

    this.input = new Input(this.renderer.domElement);
    setTextureQuality(this.quality);

    this.buildWorld();
    this.buildEnvironment();
    this.buildVehicles();
    this.buildMarker();
    this.buildPickups();

    if (saved) this.applySave(saved);
    if (!saved || this.completedMissions === 0) this.startMission01();

    this.audio.setEnabled(this.audioEnabled);
    this.resize();
    this.addListeners();
    this.tick(0);
    this.renderer.setAnimationLoop(this.animate);
    this.notify('SHADOW CITY', 'Welcome to the city. Find the depot marker.', 'info');
    (window as unknown as { __shadowCity?: Game }).__shadowCity = this;
  }

  // ---------------------------------------------------------------- setup
  private pixelRatioFor(q: Quality) {
    const dpr = window.devicePixelRatio || 1;
    const mobile = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const cap = mobile
      ? q === 'low' ? 0.9 : q === 'medium' ? 1.2 : 1.5
      : q === 'low' ? 1 : q === 'medium' ? 1.5 : 2;
    return Math.min(dpr, cap);
  }

  private buildWorld() {
    this.city = buildCity(this.scene, this.quality);
    this.player = new Player();
    this.player.placeAt(0, 15.5, 0, this.city);
    this.camYaw = Math.PI;
    this.scene.add(this.player.rig.object);

    this.player.onStep = () => this.audio.footstep();
    this.player.onJump = () => this.audio.jump();
    this.player.onLand = () => {
      this.audio.land();
    };

    this.audio.init();
  }

  private buildEnvironment() {
    // sky dome
    const uniforms = {
      topColor: { value: new THREE.Color(0x3f6ea8) },
      horizonColor: { value: new THREE.Color(0xc9d8e6) },
      groundColor: { value: new THREE.Color(0x1a1c22) },
      sunDir: { value: new THREE.Vector3(0.4, 0.7, 0.3) },
      sunColor: { value: new THREE.Color(0xfff0d0) },
      sunPower: { value: 1 },
    };
    this.skyMat = new THREE.ShaderMaterial({
      uniforms,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      vertexShader: `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 horizonColor;
        uniform vec3 groundColor;
        uniform vec3 sunDir;
        uniform vec3 sunColor;
        uniform float sunPower;
        varying vec3 vDir;
        void main() {
          vec3 dir = normalize(vDir);
          float h = clamp(dir.y, -1.0, 1.0);
          vec3 col = mix(horizonColor, topColor, pow(clamp(h, 0.0, 1.0), 0.62));
          col = mix(col, groundColor, smoothstep(0.02, -0.25, h));
          float sun = pow(max(dot(dir, normalize(sunDir)), 0.0), 900.0);
          float glow = pow(max(dot(dir, normalize(sunDir)), 0.0), 8.0);
          col += sunColor * sun * 3.0 * sunPower;
          col += sunColor * glow * 0.18 * sunPower;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    const sky = new THREE.Mesh(new THREE.SphereGeometry(620, 32, 18), this.skyMat);
    sky.frustumCulled = false;
    this.scene.add(sky);

    // stars
    const starGeo = new THREE.BufferGeometry();
    const count = 700;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random() * 2 - 1;
      const theta = Math.random() * Math.PI * 2;
      const r = 560;
      const s = Math.sqrt(1 - u * u);
      arr[i * 3] = Math.cos(theta) * s * r;
      arr[i * 3 + 1] = Math.abs(u) * r * 0.9 + 20;
      arr[i * 3 + 2] = Math.sin(theta) * s * r;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xdfe8ff,
      size: 2.2,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      fog: false,
    });
    this.stars = new THREE.Points(starGeo, starMat);
    this.stars.frustumCulled = false;
    this.scene.add(this.stars);

    // clouds
    const cloudTex = cloudTexture();
    for (let i = 0; i < 16; i++) {
      const mat = new THREE.SpriteMaterial({
        map: cloudTex,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
        fog: false,
      });
      const s = new THREE.Sprite(mat);
      s.position.set((Math.random() - 0.5) * 900, 130 + Math.random() * 90, (Math.random() - 0.5) * 900);
      const sc = 110 + Math.random() * 160;
      s.scale.set(sc, sc * 0.42, 1);
      this.scene.add(s);
      this.clouds.push(s);
    }

    // lights
    this.hemi = new THREE.HemisphereLight(0xbfd8f0, 0x2a2622, 0.55);
    this.scene.add(this.hemi);
    this.ambient = new THREE.AmbientLight(0x8fa6bd, 0.26);
    this.scene.add(this.ambient);

    this.sun = new THREE.DirectionalLight(0xfff0d8, 2.2);
    this.sun.castShadow = this.quality !== 'low';
    this.sun.shadow.mapSize.set(this.quality === 'high' ? 2048 : 1024, this.quality === 'high' ? 2048 : 1024);
    const cam = this.sun.shadow.camera as THREE.OrthographicCamera;
    cam.left = -70;
    cam.right = 70;
    cam.top = 70;
    cam.bottom = -70;
    cam.near = 1;
    cam.far = 260;
    this.sun.shadow.bias = -0.0006;
    this.sun.shadow.normalBias = 0.03;
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);

    this.scene.fog = new THREE.Fog(0xb9c9da, 110, 420);

    // one shared spotlight for the player vehicle's headlights
    this.headlight = new THREE.SpotLight(0xfff1d6, 0, 65, 0.52, 0.6, 1.3);
    this.headlight.visible = false;
    this.scene.add(this.headlight);
    this.scene.add(this.headlight.target);
  }

  private buildVehicles() {
    for (const spawn of this.city.vehicleSpawns) {
      const v = new Vehicle(spawn.kind as CarKind, spawn.color, spawn.x, spawn.z, spawn.heading);
      this.vehicles.push(v);
      this.scene.add(v.group);
    }
    const trafficCount = this.quality === 'low' ? 6 : this.quality === 'medium' ? 10 : 14;
    this.traffic = createTraffic(this.city, trafficCount, this.scene);
    this.police = new PoliceUnit(this.city.policeSpawn);
    this.scene.add(this.police.vehicle.group);
  }

  private buildMarker() {
    const group = new THREE.Group();
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffc45c,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.6, 0.16, 6, 40), ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.25;
    group.add(ring);

    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xffc45c,
      transparent: true,
      opacity: 0.16,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 22, 18, 1, true), beamMat);
    beam.position.y = 11;
    group.add(beam);
    group.visible = false;
    this.scene.add(group);
    this.marker = group;
  }

  private buildPickups() {
    const mat = new THREE.MeshStandardMaterial({
      color: 0xffe08a,
      emissive: 0xffc23a,
      emissiveIntensity: 1.6,
      roughness: 0.4,
      metalness: 0.4,
    });
    for (const spot of this.city.pickupSpots) {
      const g = new THREE.Group();
      const bundle = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.34, 0.75), mat);
      g.add(bundle);
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.7, 0.05, 6, 24),
        new THREE.MeshBasicMaterial({ color: 0xffd97a, transparent: true, opacity: 0.65, depthWrite: false })
      );
      ring.rotation.x = -Math.PI / 2;
      g.add(ring);
      g.position.set(spot.x, 0.75, spot.z);
      this.scene.add(g);
      this.pickupMeshes.push({ mesh: g, pos: spot.clone(), active: true, timer: 0 });
    }
  }

  private applySave(s: SaveData) {
    this.money = s.money;
    this.health = s.health;
    this.completedMissions = s.completedMissions;
    if (typeof s.timeOfDay === 'number') this.timeOfDay = s.timeOfDay;
    if (s.pos) this.player.placeAt(s.pos.x, s.pos.z, 0, this.city);
    if (this.completedMissions > 0) {
      this.startRandomDelivery(4);
    }
  }

  // ---------------------------------------------------------------- events
  private addListeners() {
    window.addEventListener('resize', this.resize);
    window.addEventListener('orientationchange', this.resize);
    document.addEventListener('visibilitychange', this.onVisibility);
  }

  private onVisibility = () => {
    if (document.hidden) this.save();
  };

  private resize = () => {
    const w = this.container.clientWidth || window.innerWidth;
    const h = this.container.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  };

  // ---------------------------------------------------------------- api
  setPaused(p: boolean) {
    this.paused = p;
    this.input.clearActions();
    if (p) this.save();
  }

  applyPixelRatio() {
    this.renderer.setPixelRatio(this.pixelRatioFor(this.quality) * this.renderScale);
    this.resize();
  }

  setQuality(q: Quality) {
    this.quality = q;
    setTextureQuality(q);
    this.renderScale = 1;
    this.renderer.setPixelRatio(this.pixelRatioFor(q));
    this.renderer.shadowMap.enabled = q !== 'low';
    this.sun.castShadow = q !== 'low';
    const size = q === 'high' ? 2048 : 1024;
    if (this.sun.shadow.mapSize.x !== size) {
      this.sun.shadow.mapSize.set(size, size);
      if (this.sun.shadow.map) {
        this.sun.shadow.map.dispose();
        this.sun.shadow.map = null;
      }
    }
    this.sun.shadow.camera.updateProjectionMatrix();
    this.vehicles.forEach((v) =>
      v.group.traverse((o) => {
        const m = o as THREE.Mesh;
        if (m.isMesh) m.castShadow = q !== 'low';
      })
    );
    this.player.rig.setCastShadow(q !== 'low');
    this.traffic.peds.forEach((p) => p.rig.setCastShadow(q !== 'low'));
    this.resize();
  }

  setSensitivity(v: number) {
    this.sensitivity = v;
  }

  setAudioEnabled(on: boolean) {
    this.audioEnabled = on;
    this.audio.setEnabled(on);
  }

  startAudio() {
    this.audio.init();
  }

  get state() {
    return {
      money: this.money,
      health: this.health,
      timeOfDay: this.timeOfDay,
      inVehicle: !!this.driving,
      paused: this.paused,
    };
  }

  /** Used by the React touch HUD. */
  get inputRef() {
    return this.input;
  }

  jump() {
    this.input.queueJump();
  }

  interact() {
    this.input.queueInteract();
  }

  setJoystick(x: number, z: number, active: boolean) {
    this.input.setJoystick(x, z, active);
  }

  setRun(on: boolean) {
    this.input.setRun(on);
  }

  togglePause() {
    this.setPaused(!this.paused);
  }

  private notify(title: string, text: string, kind: GameNotification['kind']) {
    this.onNotify({ id: this.notifyId++, title, text, kind });
  }

  // ---------------------------------------------------------------- interaction
  private findNearestVehicle(maxDist = 4.4): Vehicle | null {
    let best: Vehicle | null = null;
    let bestD = maxDist;
    for (const v of this.vehicles) {
      if (v.occupied) continue;
      const d = Math.hypot(v.pos.x - this.player.pos.x, v.pos.z - this.player.pos.z);
      if (d < bestD) {
        bestD = d;
        best = v;
      }
    }
    return best;
  }

  private enterVehicle(v: Vehicle) {
    this.driving = v;
    v.occupied = true;
    v.speed = 0;
    this.player.velX = this.player.velZ = 0;
    this.player.rig.object.visible = false;
    this.audio.door();
    this.camYaw = v.heading + Math.PI;
    this.notify('VEHICLE', 'W / joystick to drive · S to brake · E or the exit button to get out', 'info');
  }

  private exitVehicle() {
    const car = this.driving;
    if (!car) return;
    car.occupied = false;
    car.speed = 0;
    this.driving = null;
    const h = car.heading;
    const candidates: [number, number][] = [
      [-Math.cos(h) * 2.1, Math.sin(h) * 2.1],
      [Math.cos(h) * 2.1, -Math.sin(h) * 2.1],
      [-Math.sin(h) * (car.spec.length / 2 + 1.4), -Math.cos(h) * (car.spec.length / 2 + 1.4)],
    ];
    let placed = false;
    for (const [ox, oz] of candidates) {
      const x = car.pos.x + ox;
      const z = car.pos.z + oz;
      let blocked = false;
      for (const c of this.city.colliders) {
        if (x > c.minX - 0.4 && x < c.maxX + 0.4 && z > c.minZ - 0.4 && z < c.maxZ + 0.4) {
          blocked = true;
          break;
        }
      }
      if (!blocked) {
        this.player.placeAt(x, z, car.heading, this.city);
        placed = true;
        break;
      }
    }
    if (!placed) {
      this.player.placeAt(car.pos.x, car.pos.z + 2.6, car.heading, this.city);
    }
    this.player.rig.object.visible = true;
    this.audio.door();
    this.camYaw = car.heading + Math.PI;
  }

  // ---------------------------------------------------------------- loop
  private animate = () => {
    if (this.disposed) return;
    const raw = this.clock.getDelta();
    const dt = Math.min(raw, 0.083);
    if (dt > 0) this.fpsSmooth = this.fpsSmooth * 0.94 + (1 / dt) * 0.06;
    // adaptive resolution: keep slower phones playable
    if (dt > 0.045) this.slowFrames++;
    else this.slowFrames = Math.max(0, this.slowFrames - 0.6);
    if (this.slowFrames > 120 && this.renderScale > 0.62) {
      this.renderScale = Math.max(0.6, this.renderScale - 0.18);
      this.slowFrames = 0;
      this.applyPixelRatio();
    }
    if (!this.paused) this.update(dt);
    this.renderer.render(this.scene, this.camera);
  };

  private tick(_dt: number) {
    this.updateEnvironment();
  }

  private update(dt: number) {
    this.timeOfDay = (this.timeOfDay + dt / DAY_LENGTH) % 1;
    this.updateEnvironment();

    const look = this.input.consumeLook();
    const zoom = this.input.consumeZoom();
    const move = this.input.getMove();

    if (look.dx !== 0 || look.dy !== 0) {
      const sens = this.sensitivity * 0.0024;
      this.camYaw -= look.dx * sens;
      this.camPitch = clamp(this.camPitch + look.dy * sens * 0.8, 0.04, 1.15);
      this.lookTimer = 1.6;
    } else {
      this.lookTimer = Math.max(0, this.lookTimer - dt);
    }
    if (zoom !== 0) {
      this.camDist = clamp(this.camDist + zoom * (this.driving ? 1.2 : 0.7), 2.6, this.driving ? 15 : 9);
    }

    const jumpPressed = this.input.consumeJump();
    if (this.input.consumeInteract()) this.handleInteract();

    if (this.driving) {
      this.updateDriving(dt, move);
    } else {
      this.player.update(
        dt,
        { x: move.x, z: move.z, run: this.input.run, jump: jumpPressed },
        this.city,
        this.camYaw
      );
      this.audio.setEngine(0, 0);
      this.audio.setTyre(0);
      this.nearVehicle = this.findNearestVehicle();
    }

    this.updateTraffic(dt);
    this.updatePolice(dt);
    this.updateMission(dt);
    this.updatePickups(dt);
    this.updateCamera(dt);
    this.updateSun(dt);

    this.hudTimer += dt;
    if (this.hudTimer > 0.12) {
      this.hudTimer = 0;
      this.onHud(this.getHud());
    }

    this.saveTimer += dt;
    if (this.saveTimer > 15) {
      this.saveTimer = 0;
      this.save();
    }
  }

  private updateDriving(dt: number, move: { x: number; z: number }) {
    const car = this.driving!;
    const controls = {
      throttle: clamp(move.z, 0, 1),
      brake: clamp(-move.z, 0, 1),
      steer: clamp(move.x, -1, 1), // positive joystick X turns toward screen-right from the chase camera
      handbrake: this.input.run,
    };
    car.update(dt, controls, this.city);

    const rpm = clamp(Math.abs(car.speed) / car.spec.maxSpeed, 0, 1);
    this.audio.setEngine(0.12 + rpm * 0.88, 0.35 + Math.abs(controls.throttle) * 0.6);
    const slip = Math.abs(car.steer) * rpm * (controls.handbrake ? 2.4 : 1.1);
    this.audio.setTyre(slip > 0.35 ? Math.min(1, slip) : 0);

    this.player.pos.set(car.pos.x, 0, car.pos.z);

    // crash damage
    if (car.impact > 6) {
      const dmg = Math.min(35, (car.impact - 6) * 2.2);
      this.health = Math.max(0, this.health - dmg);
      this.audio.crash();
      this.shake = 0.35;
      if (this.health <= 0) this.respawn();
    }

    // run over pedestrians
    for (const ped of this.traffic.peds) {
      if (!ped.alive) continue;
      const d = Math.hypot(ped.pos.x - car.pos.x, ped.pos.z - car.pos.z);
      if (d < 2.7 && Math.abs(car.speed) > 2) {
        ped.knockDown();
        this.audio.hurt();
        this.wanted = Math.min(5, this.wanted + 1);
        this.heatTimer = 0;
        this.notify('WANTED', 'Civilian down. Police are responding.', 'danger');
      }
    }

    // bump traffic
    for (const tc of this.traffic.cars) {
      const d = Math.hypot(tc.vehicle.pos.x - car.pos.x, tc.vehicle.pos.z - car.pos.z);
      if (d < 2.6 && Math.abs(car.speed) > 9) {
        car.speed *= 0.55;
        this.health = Math.max(0, this.health - 1.6);
        this.audio.crash();
        break;
      }
    }

    this.nearVehicle = null;
  }

  private updateTraffic(dt: number) {
    const playerCar = this.driving;
    for (const c of this.traffic.cars) c.update(dt, this.city, playerCar);
    for (const p of this.traffic.peds) p.update(dt);

    if (!this.driving) {
      // pedestrians / traffic bumping into the player on foot
      for (const c of this.traffic.cars) {
        const dx = this.player.pos.x - c.vehicle.pos.x;
        const dz = this.player.pos.z - c.vehicle.pos.z;
        const d = Math.hypot(dx, dz);
        if (d < 2.2 && d > 0.001) {
          this.player.pos.x += (dx / d) * (2.2 - d);
          this.player.pos.z += (dz / d) * (2.2 - d);
        }
      }
    }
  }

  private updatePolice(dt: number) {
    const target = this.driving ? this.driving.pos : this.player.pos;
    if (this.wanted > 0) {
      if (!this.police.active) this.police.activate(target);
      this.police.update(dt, target, this.city);
      const d = Math.hypot(this.police.vehicle.pos.x - target.x, this.police.vehicle.pos.z - target.z);
      this.audio.setSiren(true);
      if (d < 7.5) {
        this.health = Math.max(0, this.health - 11 * dt);
        if (this.health <= 0) this.respawn();
      }
      if (d > 45) {
        this.heatTimer += dt;
        if (this.heatTimer > 18) {
          this.heatTimer = 0;
          this.wanted = Math.max(0, this.wanted - 1);
        }
      } else {
        this.heatTimer = 0;
      }
    } else {
      if (this.police.active) this.police.deactivate();
      this.audio.setSiren(false);
    }
  }

  private updatePickups(dt: number) {
    for (const p of this.pickupMeshes) {
      if (!p.active) {
        p.timer -= dt;
        if (p.timer <= 0) {
          p.active = true;
          p.mesh.visible = true;
        }
        continue;
      }
      p.mesh.rotation.y += dt * 1.6;
      p.mesh.position.y = 0.75 + Math.sin(performance.now() * 0.002 + p.pos.x) * 0.08;
      const d = Math.hypot(p.pos.x - this.player.pos.x, p.pos.z - this.player.pos.z);
      if (d < 2.2 && Math.abs(this.player.pos.y - p.pos.y) < 2.5) {
        p.active = false;
        p.timer = 50;
        p.mesh.visible = false;
        this.money += 120;
        this.audio.pickup();
        this.notify('CASH', 'Picked up $120', 'money');
      }
    }
  }

  // ---------------------------------------------------------------- mission
  private startMission01() {
    this.missionStage = 'offer';
    this.missionTitle = 'MISSION 01 · THE FIRST DELIVERY';
    this.missionObjective = 'Meet the dispatcher at the Nightline depot';
    this.missionReward = 750;
    this.missionTarget = this.city.depot.clone();
    this.marker.visible = true;
  }

  private startRandomDelivery(rewardBoost = 0) {
    const spot = this.city.deliverySpots[Math.floor(Math.random() * this.city.deliverySpots.length)];
    this.missionStage = 'deliver';
    this.missionTitle = 'DELIVERY CONTRACT';
    this.missionObjective = 'Deliver the package to the marked drop-off';
    this.missionReward = 500 + this.completedMissions * 120 + rewardBoost;
    this.missionTarget = spot.clone();
    this.marker.visible = true;
    this.marker.position.set(spot.x, 0, spot.z);
  }

  private updateMission(dt: number) {
    this.markerTime += dt;
    if (this.marker.visible) {
      this.marker.rotation.y += dt * 0.4;
      const s = 1 + Math.sin(this.markerTime * 2.4) * 0.06;
      this.marker.scale.set(s, 1, s);
    }
    if (this.driving) this.driving.speed;

    if (this.missionStage === 'cooldown') {
      this.missionCooldown -= dt;
      if (this.missionCooldown <= 0) this.startRandomDelivery();
      return;
    }
    if (!this.missionTarget) return;
    const pos = this.driving ? new THREE.Vector3(this.driving.pos.x, 0, this.driving.pos.z) : this.player.pos;
    const d = Math.hypot(pos.x - this.missionTarget.x, pos.z - this.missionTarget.z);

    if (this.missionStage === 'offer' && d < 5) {
      this.missionStage = 'deliver';
      this.audio.notification();
      this.notify('PACKAGE SECURED', 'A courier van is waiting. Take a vehicle to the drop-off.', 'mission');
      this.missionObjective = 'Get a vehicle and drive the package to the drop-off';
      const spot = this.city.deliverySpots[0];
      this.missionTarget = spot.clone();
      this.marker.position.set(spot.x, 0, spot.z);
      return;
    }

    if (this.missionStage === 'deliver' && d < 6.5 && this.driving) {
      this.missionStage = 'complete';
      this.completedMissions++;
      this.money += this.missionReward;
      this.audio.missionComplete();
      this.notify('MISSION COMPLETE', `Package delivered · +$${this.missionReward}`, 'mission');
      this.marker.visible = false;
      this.missionObjective = 'Delivery complete';
      this.missionTarget = null;
      this.missionCooldown = 10;
      this.missionStage = 'cooldown';
      this.save();
      return;
    }

    this.marker.position.set(this.missionTarget.x, 0.24, this.missionTarget.z);
  }

  private respawn() {
    this.health = 100;
    this.wanted = 0;
    this.money = Math.max(0, this.money - 250);
    if (this.driving) {
      this.driving.occupied = false;
      this.driving.speed = 0;
      this.driving = null;
      this.player.rig.object.visible = true;
    }
    this.player.placeAt(0, 15.5, 0, this.city);
    this.camYaw = Math.PI;
    this.audio.setSiren(false);
    this.notify('WASTED', 'You woke up at the plaza. Medical fees: $250', 'danger');
    this.save();
  }

  private shake = 0;

  // ---------------------------------------------------------------- camera
  private updateCamera(dt: number) {
    const car = this.driving;
    let target: THREE.Vector3;
    let dist: number;
    if (car) {
      target = new THREE.Vector3(car.pos.x, 1.15, car.pos.z);
      const base = 6.5 + car.spec.length * 0.5 + Math.min(2.4, Math.abs(car.speed) * 0.08);
      dist = base * (this.camDist / 4.9);
      if (this.lookTimer <= 0) {
        this.camYaw = dampAngle(this.camYaw, car.heading + Math.PI, 2.6, dt);
      }
      this.camPitch = damp(this.camPitch, 0.24, 2, dt);
    } else {
      target = this.player.cameraTarget;
      dist = this.camDist;
      if (this.lookTimer <= 0 && this.player.speed > 1.2) {
        this.camYaw = dampAngle(this.camYaw, this.player.yaw + Math.PI, 1.9, dt);
      }
    }

    const cp = Math.cos(this.camPitch);
    const desired = new THREE.Vector3(
      target.x + Math.sin(this.camYaw) * cp * dist,
      target.y + Math.sin(this.camPitch) * dist + 0.35,
      target.z + Math.cos(this.camYaw) * cp * dist
    );

    // shorten if a building is between the player and the camera
    const dx = desired.x - target.x;
    const dz = desired.z - target.z;
    const flat = Math.hypot(dx, dz) || 1;
    const nx = dx / flat;
    const nz = dz / flat;
    let limit = flat;
    for (const b of this.city.buildings) {
      if (desired.y > b.h + 0.6) continue;
      const t = this.rayBox(target.x, target.z, nx, nz, b.x - b.w / 2 - 0.5, b.x + b.w / 2 + 0.5, b.z - b.d / 2 - 0.5, b.z + b.d / 2 + 0.5, flat);
      if (t >= 0 && t < limit) limit = t;
    }
    if (limit < flat) {
      const k = Math.max(1.4, limit - 0.4) / flat;
      desired.x = target.x + dx * k;
      desired.z = target.z + dz * k;
      desired.y = target.y + Math.sin(this.camPitch) * dist * 0.55 + 0.35;
    }

    const smooth = 1 - Math.exp(-11 * dt);
    this.camPos.lerp(desired, smooth);
    if (this.camPos.lengthSq() === 0) this.camPos.copy(desired);

    if (this.shake > 0) {
      this.shake = Math.max(0, this.shake - dt * 1.6);
      this.camPos.x += (Math.random() - 0.5) * this.shake * 0.5;
      this.camPos.y += (Math.random() - 0.5) * this.shake * 0.4;
    }

    this.camera.position.copy(this.camPos);
    const lookAt = car
      ? new THREE.Vector3(car.pos.x, 1.5, car.pos.z)
      : new THREE.Vector3(this.player.pos.x, this.player.pos.y + 1.5, this.player.pos.z);
    this.camera.lookAt(lookAt);

    const fov = car ? 66 + Math.min(10, Math.abs(car.speed) * 0.22) : 60;
    if (Math.abs(this.camera.fov - fov) > 0.05) {
      this.camera.fov = damp(this.camera.fov, fov, 3, dt);
      this.camera.updateProjectionMatrix();
    }
  }

  private rayBox(
    ox: number,
    oz: number,
    dx: number,
    dz: number,
    minX: number,
    maxX: number,
    minZ: number,
    maxZ: number,
    maxDist: number
  ): number {
    let tmin = 0;
    let tmax = maxDist;
    if (Math.abs(dx) < 1e-6) {
      if (ox < minX || ox > maxX) return -1;
    } else {
      let t1 = (minX - ox) / dx;
      let t2 = (maxX - ox) / dx;
      if (t1 > t2) [t1, t2] = [t2, t1];
      tmin = Math.max(tmin, t1);
      tmax = Math.min(tmax, t2);
      if (tmin > tmax) return -1;
    }
    if (Math.abs(dz) < 1e-6) {
      if (oz < minZ || oz > maxZ) return -1;
    } else {
      let t1 = (minZ - oz) / dz;
      let t2 = (maxZ - oz) / dz;
      if (t1 > t2) [t1, t2] = [t2, t1];
      tmin = Math.max(tmin, t1);
      tmax = Math.min(tmax, t2);
      if (tmin > tmax) return -1;
    }
    return tmin;
  }

  // ---------------------------------------------------------------- environment
  private updateEnvironment() {
    const t = this.timeOfDay;
    const elev = Math.sin((t - 0.25) * Math.PI * 2);
    const dayF = clamp((elev + 0.09) / 0.32, 0, 1);
    const night = clamp((0.1 - elev) / 0.28, 0, 1);
    const dusk = clamp(1 - Math.abs(elev) / 0.32, 0, 1);

    const topDay = new THREE.Color(0x3d78bd);
    const topNight = new THREE.Color(0x05070f);
    const topDusk = new THREE.Color(0x2a2f55);
    const horDay = new THREE.Color(0xc3d8e8);
    const horNight = new THREE.Color(0x0d1524);
    const horDusk = new THREE.Color(0xff8a52);

    const top = new THREE.Color().lerpColors(topNight, topDay, dayF).lerp(topDusk, dusk * 0.75);
    const horizon = new THREE.Color().lerpColors(horNight, horDay, dayF).lerp(horDusk, dusk * 0.7);

    const u = this.skyMat.uniforms;
    (u.topColor.value as THREE.Color).copy(top);
    (u.horizonColor.value as THREE.Color).copy(horizon);
    (u.groundColor.value as THREE.Color).lerpColors(new THREE.Color(0x05060a), new THREE.Color(0x2b2b30), dayF);
    const ang = (t - 0.25) * Math.PI * 2;
    const sunDir = new THREE.Vector3(Math.cos(ang) * 0.8, Math.sin(ang), Math.cos(ang) * 0.45 + 0.2).normalize();
    (u.sunDir.value as THREE.Vector3).copy(sunDir);
    (u.sunColor.value as THREE.Color).lerpColors(new THREE.Color(0xff7a3c), new THREE.Color(0xfff2d8), dayF);
    u.sunPower.value = clamp(elev * 4 + 0.4, 0, 1);

    this.sun.color.lerpColors(new THREE.Color(0xffa068), new THREE.Color(0xfff4e2), dayF);
    this.sun.intensity = 0.32 + dayF * 2.6;
    this.hemi.intensity = 0.52 + dayF * 0.58;
    this.ambient.intensity = 0.3 + dayF * 0.1;
    (this.hemi.color as THREE.Color).lerpColors(new THREE.Color(0x415579), new THREE.Color(0xcfe2f4), dayF);
    (this.hemi.groundColor as THREE.Color).lerpColors(new THREE.Color(0x1c1d24), new THREE.Color(0x3a352e), dayF);

    const fog = this.scene.fog as THREE.Fog;
    fog.color.copy(horizon).lerp(top, 0.35);
    fog.near = 90;
    fog.far = 300 + dayF * 140;

    (this.stars.material as THREE.PointsMaterial).opacity = night * 0.9;
    this.clouds.forEach((c) => {
      (c.material as THREE.SpriteMaterial).opacity = 0.1 + dayF * 0.5;
      (c.material as THREE.SpriteMaterial).color.setRGB(
        0.35 + dayF * 0.65,
        0.35 + dayF * 0.65,
        0.4 + dayF * 0.6
      );
    });

    this.city.facadeMaterials.forEach((m) => {
      m.emissiveIntensity = night * 0.9;
    });
    this.city.lampMaterial.emissiveIntensity = 0.1 + night * 2.4;
    this.city.lightPoolMaterial.opacity = night * 0.85;

    const lightsOn = night > 0.35;
    if (this.driving && lightsOn) {
      const car = this.driving;
      const f = car.forward;
      this.headlight.visible = true;
      this.headlight.intensity = 95;
      this.headlight.position.set(
        car.pos.x + f.x * car.spec.length * 0.45,
        0.9,
        car.pos.z + f.z * car.spec.length * 0.45
      );
      this.headlight.target.position.set(car.pos.x + f.x * 26, 0, car.pos.z + f.z * 26);
      this.headlight.target.updateMatrixWorld();
    } else {
      this.headlight.visible = false;
    }
    if (this.driving) this.driving.setHeadlights(lightsOn);
    this.vehicles.forEach((v) => v.setHeadlights(lightsOn));
    this.traffic.cars.forEach((c) => c.vehicle.setHeadlights(lightsOn));
    this.police.vehicle.setHeadlights(lightsOn);
  }

  private updateSun(dt: number) {
    const focus = this.driving ? this.driving.pos : this.player.pos;
    const ang = (this.timeOfDay - 0.25) * Math.PI * 2;
    const dir = new THREE.Vector3(Math.cos(ang) * 0.8, Math.max(0.12, Math.sin(ang)), Math.cos(ang) * 0.45 + 0.2).normalize();
    this.sun.position.set(focus.x + dir.x * 90, dir.y * 90 + 10, focus.z + dir.z * 90);
    this.sun.target.position.set(focus.x, 0, focus.z);
    this.sun.target.updateMatrixWorld();
    this.stars.position.set(this.camera.position.x, 0, this.camera.position.z);
    this.clouds.forEach((c) => {
      c.position.x += 0.6 * dt;
      if (c.position.x > 480) c.position.x = -480;
    });
  }

  // ---------------------------------------------------------------- hud
  private getHud(): HudState {
    const car = this.driving;
    const pos = car ? car.pos : this.player.pos;
    const hours = Math.floor(this.timeOfDay * 24);
    const minutes = Math.floor((this.timeOfDay * 24 - hours) * 60);
    const clock = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    const markerDist = this.missionTarget
      ? Math.hypot(this.missionTarget.x - pos.x, this.missionTarget.z - pos.z)
      : 0;
    return {
      ...DEFAULT_HUD,
      health: Math.round(this.health),
      money: Math.round(this.money),
      speed: car ? car.speedKmh : 0,
      inVehicle: !!car,
      nearVehicle: !!this.nearVehicle,
      missionTitle: this.missionTitle,
      missionObjective: this.missionObjective,
      missionDistance: markerDist,
      missionActive: !!this.missionTarget,
      missionStage: this.missionStage,
      wanted: this.wanted,
      clock,
      isNight: this.timeOfDay < 0.27 || this.timeOfDay > 0.78,
      paused: this.paused,
      fps: Math.round(this.fpsSmooth),
      zone: this.city.zoneAt(pos.x, pos.z),
    };
  }

  // ---------------------------------------------------------------- minimap
  drawMinimap(ctx: CanvasRenderingContext2D, size: number) {
    const car = this.driving;
    const px = car ? car.pos.x : this.player.pos.x;
    const pz = car ? car.pos.z : this.player.pos.z;
    const yaw = car ? car.heading : this.player.yaw;
    const range = 110;
    const scale = size / range;

    ctx.clearRect(0, 0, size, size);
    ctx.save();
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 1, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = '#0a0e13';
    ctx.fillRect(0, 0, size, size);

    const sx = (x: number) => size / 2 + (x - px) * scale;
    const sz = (z: number) => size / 2 + (z - pz) * scale;

    // blocks
    ctx.fillStyle = '#1a232c';
    for (let bx = 0; bx < N; bx++) {
      for (let bz = 0; bz < N; bz++) {
        const x = ORIGIN + ROAD + bx * CELL;
        const z = ORIGIN + ROAD + bz * CELL;
        ctx.fillRect(sx(x), sz(z), BLOCK * scale, BLOCK * scale);
      }
    }
    // roads
    ctx.strokeStyle = '#3a4551';
    ctx.lineWidth = Math.max(2, ROAD * scale);
    for (const c of ROAD_CENTERS) {
      ctx.beginPath();
      ctx.moveTo(sx(c), 0);
      ctx.lineTo(sx(c), size);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, sz(c));
      ctx.lineTo(size, sz(c));
      ctx.stroke();
    }
    // buildings
    ctx.fillStyle = '#263340';
    for (const b of this.city.buildings) {
      const w = Math.max(1, b.w * scale);
      const h = Math.max(1, b.d * scale);
      ctx.fillRect(sx(b.x) - w / 2, sz(b.z) - h / 2, w, h);
    }

    // mission
    if (this.missionTarget) {
      const mx = sx(this.missionTarget.x);
      const mz = sz(this.missionTarget.z);
      const pulse = 3 + Math.sin(performance.now() * 0.005) * 1.4;
      ctx.fillStyle = '#ffc45c';
      ctx.beginPath();
      ctx.arc(mx, mz, pulse + 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#1a1207';
      ctx.beginPath();
      ctx.arc(mx, mz, pulse, 0, Math.PI * 2);
      ctx.fill();
    }
    // vehicles
    ctx.fillStyle = '#8fa4b8';
    for (const v of this.vehicles) {
      ctx.fillRect(sx(v.pos.x) - 1.5, sz(v.pos.z) - 1.5, 3, 3);
    }
    // pickups
    ctx.fillStyle = '#7bd88f';
    for (const p of this.pickupMeshes) {
      if (!p.active) continue;
      ctx.fillRect(sx(p.pos.x) - 1.5, sz(p.pos.z) - 1.5, 3, 3);
    }
    // police
    if (this.police.active) {
      ctx.fillStyle = '#ff5a5a';
      ctx.beginPath();
      ctx.arc(sx(this.police.vehicle.pos.x), sz(this.police.vehicle.pos.z), 3.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // player arrow (north up)
    ctx.save();
    ctx.translate(size / 2, size / 2);
    ctx.rotate(-yaw + Math.PI);
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = 'rgba(0,0,0,0.65)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, -9);
    ctx.lineTo(6.5, 7.5);
    ctx.lineTo(0, 4);
    ctx.lineTo(-6.5, 7.5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.restore();

    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 1, 0, Math.PI * 2);
    ctx.stroke();
  }

  // ---------------------------------------------------------------- save
  save() {
    const data: SaveData = {
      money: this.money,
      health: this.health,
      completedMissions: this.completedMissions,
      quality: this.quality,
      sensitivity: this.sensitivity,
      audio: this.audioEnabled,
      touchControls: 'auto',
      timeOfDay: this.timeOfDay,
      pos: { x: this.player.pos.x, z: this.player.pos.z },
    };
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    } catch {
      /* storage may be unavailable */
    }
  }

  private loadSave(): SaveData | null {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw) as SaveData;
      if (typeof parsed.money !== 'number') return null;
      return parsed;
    } catch {
      return null;
    }
  }

  resetProgress() {
    try {
      localStorage.removeItem(SAVE_KEY);
    } catch {
      /* ignore */
    }
    this.money = 0;
    this.health = 100;
    this.wanted = 0;
    this.completedMissions = 0;
    this.startMission01();
    this.player.placeAt(0, 10, 0, this.city);
    this.notify('PROGRESS RESET', 'A new night in Shadow City.', 'info');
  }

  // ---------------------------------------------------------------- misc
  private handleInteract() {
    if (this.driving) {
      this.exitVehicle();
      return;
    }
    const v = this.findNearestVehicle();
    if (v) {
      this.enterVehicle(v);
    }
  }

  dispose() {
    this.disposed = true;
    this.save();
    this.renderer.setAnimationLoop(null);
    window.removeEventListener('resize', this.resize);
    window.removeEventListener('orientationchange', this.resize);
    document.removeEventListener('visibilitychange', this.onVisibility);
    this.input.dispose();
    this.audio.dispose();
    this.vehicles.forEach((v) => v.dispose());
    this.traffic.cars.forEach((c) => c.vehicle.dispose());
    this.traffic.peds.forEach((ped) => ped.rig.dispose());
    this.police.vehicle.dispose();
    this.player.rig.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
