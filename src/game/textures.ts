import * as THREE from 'three';
import { mulberry32 } from './utils';

/** Procedural canvas textures so the game ships with zero external assets. */

function makeCanvas(w: number, h: number) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return { c, ctx: c.getContext('2d')! };
}

function tex(c: HTMLCanvasElement, repeat = true, srgb = true) {
  const t = new THREE.CanvasTexture(c);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  t.needsUpdate = true;
  return t;
}

const cache = new Map<string, THREE.Texture>();

export function asphaltTexture(): THREE.Texture {
  if (cache.has('asphalt')) return cache.get('asphalt')!;
  const { c, ctx } = makeCanvas(512, 512);
  const rnd = mulberry32(7);
  ctx.fillStyle = '#34373d';
  ctx.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 9000; i++) {
    const g = 30 + Math.floor(rnd() * 40);
    ctx.fillStyle = `rgba(${g},${g + 2},${g + 4},${0.35 + rnd() * 0.4})`;
    const s = 1 + rnd() * 2.5;
    ctx.fillRect(rnd() * 512, rnd() * 512, s, s);
  }
  // patches / repairs
  for (let i = 0; i < 9; i++) {
    ctx.fillStyle = `rgba(24,25,28,${0.1 + rnd() * 0.12})`;
    ctx.beginPath();
    ctx.ellipse(rnd() * 512, rnd() * 512, 20 + rnd() * 60, 14 + rnd() * 40, rnd() * 3, 0, Math.PI * 2);
    ctx.fill();
  }
  // faint tire streaks
  for (let i = 0; i < 5; i++) {
    ctx.strokeStyle = 'rgba(20,20,22,0.08)';
    ctx.lineWidth = 8 + rnd() * 12;
    ctx.beginPath();
    ctx.moveTo(rnd() * 512, 0);
    ctx.bezierCurveTo(rnd() * 512, 170, rnd() * 512, 340, rnd() * 512, 512);
    ctx.stroke();
  }
  const t = tex(c);
  cache.set('asphalt', t);
  return t;
}

export function concreteTexture(): THREE.Texture {
  if (cache.has('concrete')) return cache.get('concrete')!;
  const { c, ctx } = makeCanvas(256, 256);
  const rnd = mulberry32(21);
  ctx.fillStyle = '#6a6a63';
  ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 5000; i++) {
    const g = 86 + Math.floor(rnd() * 62);
    ctx.fillStyle = `rgba(${g},${g},${g - 4},${0.15 + rnd() * 0.35})`;
    ctx.fillRect(rnd() * 256, rnd() * 256, 1 + rnd() * 2, 1 + rnd() * 2);
  }
  ctx.strokeStyle = 'rgba(48,48,46,0.85)';
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 0, 128, 128);
  ctx.strokeRect(128, 0, 128, 128);
  ctx.strokeRect(0, 128, 128, 128);
  ctx.strokeRect(128, 128, 128, 128);
  ctx.strokeStyle = 'rgba(190,190,185,0.25)';
  ctx.lineWidth = 1;
  ctx.strokeRect(2, 2, 124, 124);
  ctx.strokeRect(130, 130, 124, 124);
  const t = tex(c);
  cache.set('concrete', t);
  return t;
}

export function grassTexture(): THREE.Texture {
  if (cache.has('grass')) return cache.get('grass')!;
  const { c, ctx } = makeCanvas(256, 256);
  const rnd = mulberry32(99);
  ctx.fillStyle = '#3f5a30';
  ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 6000; i++) {
    const g = 50 + rnd() * 55;
    ctx.fillStyle = `rgba(${Math.floor(g * 0.7)},${Math.floor(g + 25)},${Math.floor(g * 0.55)},${0.2 + rnd() * 0.5})`;
    ctx.fillRect(rnd() * 256, rnd() * 256, 1 + rnd() * 3, 1 + rnd() * 4);
  }
  for (let i = 0; i < 30; i++) {
    ctx.fillStyle = `rgba(34,50,26,${0.15 + rnd() * 0.2})`;
    ctx.beginPath();
    ctx.ellipse(rnd() * 256, rnd() * 256, 10 + rnd() * 40, 8 + rnd() * 30, rnd() * 3, 0, Math.PI * 2);
    ctx.fill();
  }
  const t = tex(c);
  cache.set('grass', t);
  return t;
}

export function roofTexture(): THREE.Texture {
  if (cache.has('roof')) return cache.get('roof')!;
  const { c, ctx } = makeCanvas(128, 128);
  const rnd = mulberry32(55);
  ctx.fillStyle = '#4d4c49';
  ctx.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 2600; i++) {
    const g = 55 + rnd() * 45;
    ctx.fillStyle = `rgba(${g},${g},${g - 2},${0.3 + rnd() * 0.4})`;
    ctx.fillRect(rnd() * 128, rnd() * 128, 1 + rnd() * 2, 1 + rnd() * 2);
  }
  const t = tex(c);
  cache.set('roof', t);
  return t;
}

export function woodTexture(): THREE.Texture {
  if (cache.has('wood')) return cache.get('wood')!;
  const { c, ctx } = makeCanvas(128, 128);
  const rnd = mulberry32(77);
  ctx.fillStyle = '#6b4a2c';
  ctx.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 40; i++) {
    ctx.strokeStyle = `rgba(${40 + rnd() * 40},${25 + rnd() * 25},${15 + rnd() * 15},0.4)`;
    ctx.lineWidth = 1 + rnd() * 2;
    ctx.beginPath();
    ctx.moveTo(0, rnd() * 128);
    ctx.bezierCurveTo(40, rnd() * 128, 90, rnd() * 128, 128, rnd() * 128);
    ctx.stroke();
  }
  const t = tex(c);
  cache.set('wood', t);
  return t;
}

export interface FacadeTextures {
  map: THREE.Texture;
  emissive: THREE.Texture;
  style: 'stone' | 'brick' | 'glass' | 'panel' | 'residential';
}

type FacadeStyle = FacadeTextures['style'];

const PALETTES: Record<FacadeStyle, { wall: string; wall2: string; trim: string; glass: string }> = {
  stone: { wall: '#8d8579', wall2: '#7a7268', trim: '#b6ada0', glass: '#2b3742' },
  brick: { wall: '#7c4a3c', wall2: '#6a3d31', trim: '#c9bda9', glass: '#28323c' },
  glass: { wall: '#5d6f80', wall2: '#48586a', trim: '#93a3b3', glass: '#38505f' },
  panel: { wall: '#b9b7b0', wall2: '#a3a29c', trim: '#d5d3cc', glass: '#31414d' },
  residential: { wall: '#a8977f', wall2: '#93836d', trim: '#d3c7b1', glass: '#2b3742' },
};

export function facadeTextures(style: FacadeStyle, seed: number): FacadeTextures {
  const key = `facade-${style}-${seed}`;
  if (cache.has(key)) {
    return { map: cache.get(key)!, emissive: cache.get(key + '-e')! as any, style };
  }
  const { c, ctx } = makeCanvas(128, 128);
  const { c: ec, ctx: ectx } = makeCanvas(128, 128);
  const rnd = mulberry32(seed);
  const pal = PALETTES[style];

  ectx.fillStyle = '#000';
  ectx.fillRect(0, 0, 128, 128);

  if (style === 'brick') {
    ctx.fillStyle = pal.wall;
    ctx.fillRect(0, 0, 128, 128);
    for (let y = 0; y < 128; y += 8) {
      for (let x = (y / 8) % 2 ? -8 : 0; x < 128; x += 16) {
        ctx.fillStyle = `rgba(${100 + rnd() * 45},${58 + rnd() * 30},${46 + rnd() * 22},0.9)`;
        ctx.fillRect(x + 1, y + 1, 14, 6);
      }
    }
    ctx.fillStyle = 'rgba(30,20,16,0.12)';
    ctx.fillRect(0, 0, 128, 128);
  } else if (style === 'glass') {
    ctx.fillStyle = pal.glass;
    ctx.fillRect(0, 0, 128, 128);
    const grad = ctx.createLinearGradient(0, 0, 128, 128);
    grad.addColorStop(0, 'rgba(190,215,235,0.30)');
    grad.addColorStop(0.5, 'rgba(120,150,175,0.05)');
    grad.addColorStop(1, 'rgba(20,32,42,0.35)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);
  } else {
    ctx.fillStyle = pal.wall;
    ctx.fillRect(0, 0, 128, 128);
    for (let i = 0; i < 900; i++) {
      const g = 120 + rnd() * 60;
      ctx.fillStyle = `rgba(${g},${g - 3},${g - 8},${0.08 + rnd() * 0.16})`;
      ctx.fillRect(rnd() * 128, rnd() * 128, 1 + rnd() * 3, 1 + rnd() * 3);
    }
  }

  const drawWindow = (x: number, y: number, w: number, h: number, litChance: number) => {
    ctx.fillStyle = pal.trim;
    ctx.fillRect(x - 3, y - 3, w + 6, h + 6);
    const g = ctx.createLinearGradient(x, y, x + w, y + h);
    g.addColorStop(0, '#3b4a55');
    g.addColorStop(0.45, pal.glass);
    g.addColorStop(1, '#1e262e');
    ctx.fillStyle = g;
    ctx.fillRect(x, y, w, h);
    ctx.fillStyle = 'rgba(210,230,245,0.16)';
    ctx.beginPath();
    ctx.moveTo(x, y + h);
    ctx.lineTo(x + w * 0.55, y);
    ctx.lineTo(x + w * 0.8, y);
    ctx.lineTo(x + w * 0.2, y + h);
    ctx.fill();
    ctx.strokeStyle = 'rgba(30,34,38,0.65)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x + w / 2, y);
    ctx.lineTo(x + w / 2, y + h);
    ctx.stroke();
    if (rnd() < litChance) {
      const warm = rnd() < 0.8 ? '#ffd79a' : '#cfe3ff';
      ectx.fillStyle = warm;
      ectx.fillRect(x, y, w, h);
      ectx.fillStyle = 'rgba(0,0,0,0.35)';
      ectx.fillRect(x + w * 0.45, y, w * 0.55, h);
    }
  };

  if (style === 'glass') {
    for (let gy = 0; gy < 2; gy++) {
      for (let gx = 0; gx < 2; gx++) {
        const x = gx * 64 + 4;
        const y = gy * 64 + 4;
        if (rnd() < 0.55) {
          ectx.fillStyle = rnd() < 0.75 ? '#e8cf9d' : '#a9c6e6';
          ectx.fillRect(x, y, 56, 56);
          ectx.fillStyle = 'rgba(0,0,0,0.4)';
          ectx.fillRect(x, y + 32, 56, 24);
        }
      }
    }
    // mullions
    ctx.fillStyle = pal.trim;
    for (let i = 0; i <= 128; i += 64) {
      ctx.fillRect(i - 2, 0, 4, 128);
      ctx.fillRect(0, i - 2, 128, 4);
    }
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.fillRect(0, 0, 128, 8);
  } else if (style === 'panel') {
    // horizontal ribbon windows with balcony rail
    ctx.fillStyle = pal.wall2;
    ctx.fillRect(0, 0, 128, 22);
    drawWindow(8, 28, 112, 58, 0.5);
    ctx.fillStyle = pal.wall2;
    ctx.fillRect(0, 92, 128, 36);
    ctx.fillStyle = 'rgba(40,44,48,0.5)';
    ctx.fillRect(0, 96, 128, 3);
    for (let x = 4; x < 128; x += 8) {
      ctx.fillStyle = 'rgba(60,64,68,0.55)';
      ctx.fillRect(x, 86, 1.5, 10);
    }
  } else {
    drawWindow(28, 24, 72, 62, 0.55);
    ctx.fillStyle = 'rgba(0,0,0,0.10)';
    ctx.fillRect(0, 112, 128, 16);
    ctx.fillStyle = pal.wall2;
    ctx.fillRect(0, 120, 128, 8);
    if (style === 'residential') {
      ctx.fillStyle = 'rgba(20,16,12,0.25)';
      ctx.fillRect(22, 86, 84, 3);
    }
  }

  const map = tex(c);
  const emissive = tex(ec);
  cache.set(key, map);
  cache.set(key + '-e', emissive);
  return { map, emissive, style };
}

export function shopTexture(seed: number): THREE.Texture {
  const key = `shop-${seed}`;
  if (cache.has(key)) return cache.get(key)!;
  const { c, ctx } = makeCanvas(256, 128);
  const rnd = mulberry32(seed);
  ctx.fillStyle = '#2b2b2e';
  ctx.fillRect(0, 0, 256, 128);
  // glass bays
  for (let i = 0; i < 2; i++) {
    const x = 8 + i * 122;
    const g = ctx.createLinearGradient(x, 18, x, 104);
    g.addColorStop(0, '#3f4a52');
    g.addColorStop(0.6, '#26313a');
    g.addColorStop(1, '#151a20');
    ctx.fillStyle = g;
    ctx.fillRect(x, 18, 114, 92);
    ctx.fillStyle = 'rgba(220,235,250,0.15)';
    ctx.beginPath();
    ctx.moveTo(x, 110);
    ctx.lineTo(x + 60, 18);
    ctx.lineTo(x + 88, 18);
    ctx.lineTo(x + 22, 110);
    ctx.fill();
    ctx.strokeStyle = '#4a4a4d';
    ctx.lineWidth = 3;
    ctx.strokeRect(x, 18, 114, 92);
    // interior warm glow
    if (rnd() < 0.7) {
      ctx.fillStyle = 'rgba(255,205,140,0.35)';
      ctx.fillRect(x + 6, 26, 102, 46);
    }
  }
  // sign band
  ctx.fillStyle = '#17181b';
  ctx.fillRect(0, 0, 256, 18);
  const hue = Math.floor(rnd() * 360);
  ctx.fillStyle = `hsl(${hue},55%,52%)`;
  ctx.fillRect(96, 4, 64, 10);
  ctx.fillStyle = `hsl(${(hue + 40) % 360},60%,45%)`;
  ctx.fillRect(14, 6, 60, 6);
  // base
  ctx.fillStyle = '#3a3a3d';
  ctx.fillRect(0, 112, 256, 16);
  const t = tex(c);
  t.repeat.set(1, 1);
  cache.set(key, t);
  return t;
}

export function lightPoolTexture(): THREE.Texture {
  if (cache.has('pool')) return cache.get('pool')!;
  const { c, ctx } = makeCanvas(128, 128);
  const g = ctx.createRadialGradient(64, 64, 2, 64, 64, 62);
  g.addColorStop(0, 'rgba(255,226,170,0.85)');
  g.addColorStop(0.35, 'rgba(255,210,140,0.35)');
  g.addColorStop(1, 'rgba(255,200,120,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const t = tex(c, false, true);
  cache.set('pool', t);
  return t;
}

export function cloudTexture(): THREE.Texture {
  if (cache.has('cloud')) return cache.get('cloud')!;
  const { c, ctx } = makeCanvas(256, 128);
  const rnd = mulberry32(404);
  ctx.clearRect(0, 0, 256, 128);
  for (let i = 0; i < 22; i++) {
    const x = 30 + rnd() * 196;
    const y = 40 + rnd() * 44;
    const r = 14 + rnd() * 30;
    const g = ctx.createRadialGradient(x, y, 1, x, y, r);
    g.addColorStop(0, 'rgba(255,255,255,0.75)');
    g.addColorStop(0.6, 'rgba(240,244,252,0.35)');
    g.addColorStop(1, 'rgba(230,238,250,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  const t = tex(c, false, true);
  cache.set('cloud', t);
  return t;
}

export function signTexture(text: string, color = '#ffd9a0', bg = '#101216'): THREE.Texture {
  const key = `sign-${text}-${color}`;
  if (cache.has(key)) return cache.get(key)!;
  const { c, ctx } = makeCanvas(512, 128);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 512, 128);
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.strokeRect(8, 8, 496, 112);
  ctx.fillStyle = color;
  ctx.font = 'bold 52px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 256, 68);
  const t = tex(c, false);
  cache.set(key, t);
  return t;
}

export function setTextureQuality(level: 'low' | 'medium' | 'high') {
  const aniso = level === 'high' ? 8 : level === 'medium' ? 4 : 1;
  cache.forEach((t) => {
    t.anisotropy = aniso;
    t.needsUpdate = true;
  });
}
