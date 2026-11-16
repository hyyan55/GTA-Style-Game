/** Fully synthesised audio - no external files to fail loading. */
export class GameAudio {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private engineGain: GainNode | null = null;
  private engineFilter: BiquadFilterNode | null = null;
  private engineOsc: OscillatorNode | null = null;
  private engineOsc2: OscillatorNode | null = null;
  private tyreGain: GainNode | null = null;
  private tyreFilter: BiquadFilterNode | null = null;
  private ambientGain: GainNode | null = null;
  private sirenGain: GainNode | null = null;
  private sirenOsc: OscillatorNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;
  enabled = true;
  volume = 0.7;

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') void this.ctx.resume();
      return;
    }
    const Ctx: typeof AudioContext | undefined =
      window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    this.ctx = ctx;
    const master = ctx.createGain();
    master.gain.value = this.enabled ? this.volume : 0;
    master.connect(ctx.destination);
    this.master = master;

    // noise buffer shared by tyres / footsteps / ambience
    const len = Math.floor(ctx.sampleRate * 2);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.5 + white * 0.25;
    }
    this.noiseBuffer = buf;

    // engine
    const eg = ctx.createGain();
    eg.gain.value = 0.0001;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 520;
    filter.Q.value = 1.2;
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 60;
    const osc2 = ctx.createOscillator();
    osc2.type = 'square';
    osc2.frequency.value = 30;
    const g2 = ctx.createGain();
    g2.gain.value = 0.4;
    osc.connect(eg);
    osc2.connect(g2);
    g2.connect(eg);
    eg.connect(filter);
    filter.connect(master);
    osc.start();
    osc2.start();
    this.engineGain = eg;
    this.engineFilter = filter;
    this.engineOsc = osc;
    this.engineOsc2 = osc2;

    // tyres
    const tyreGain = ctx.createGain();
    tyreGain.gain.value = 0.0001;
    const tyreFilter = ctx.createBiquadFilter();
    tyreFilter.type = 'bandpass';
    tyreFilter.frequency.value = 2600;
    tyreFilter.Q.value = 0.9;
    const tyreNoise = ctx.createBufferSource();
    tyreNoise.buffer = buf;
    tyreNoise.loop = true;
    tyreNoise.connect(tyreFilter);
    tyreFilter.connect(tyreGain);
    tyreGain.connect(master);
    tyreNoise.start();
    this.tyreGain = tyreGain;
    this.tyreFilter = tyreFilter;

    // ambience
    const amb = ctx.createGain();
    amb.gain.value = 0.05;
    const ambFilter = ctx.createBiquadFilter();
    ambFilter.type = 'lowpass';
    ambFilter.frequency.value = 420;
    const ambNoise = ctx.createBufferSource();
    ambNoise.buffer = buf;
    ambNoise.loop = true;
    ambNoise.playbackRate.value = 0.6;
    ambNoise.connect(ambFilter);
    ambFilter.connect(amb);
    amb.connect(master);
    ambNoise.start();
    this.ambientGain = amb;

    // siren
    const sg = ctx.createGain();
    sg.gain.value = 0.0001;
    const so = ctx.createOscillator();
    so.type = 'square';
    so.frequency.value = 780;
    so.connect(sg);
    sg.connect(master);
    so.start();
    this.sirenGain = sg;
    this.sirenOsc = so;
  }

  setEnabled(on: boolean) {
    this.enabled = on;
    if (this.master && this.ctx) {
      this.master.gain.setTargetAtTime(on ? this.volume : 0, this.ctx.currentTime, 0.05);
    }
  }

  setVolume(v: number) {
    this.volume = v;
    if (this.master && this.ctx && this.enabled) {
      this.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.05);
    }
  }

  setEngine(rpm: number, load: number) {
    if (!this.ctx || !this.engineGain || !this.engineOsc || !this.engineOsc2 || !this.engineFilter) return;
    const t = this.ctx.currentTime;
    const norm = Math.max(0, Math.min(1, rpm));
    const f = 52 + norm * 150;
    this.engineOsc.frequency.setTargetAtTime(f, t, 0.08);
    this.engineOsc2.frequency.setTargetAtTime(f * 0.5, t, 0.08);
    this.engineFilter.frequency.setTargetAtTime(360 + norm * 1500, t, 0.1);
    this.engineGain.gain.setTargetAtTime(load > 0.01 ? 0.01 + load * 0.055 : 0.0001, t, 0.1);
  }

  setTyre(amount: number) {
    if (!this.ctx || !this.tyreGain || !this.tyreFilter) return;
    const t = this.ctx.currentTime;
    this.tyreGain.gain.setTargetAtTime(Math.min(0.09, amount * 0.09), t, 0.07);
    this.tyreFilter.frequency.setTargetAtTime(1800 + amount * 2400, t, 0.1);
  }

  setSiren(on: boolean) {
    if (!this.ctx || !this.sirenGain || !this.sirenOsc) return;
    const t = this.ctx.currentTime;
    this.sirenGain.gain.setTargetAtTime(on ? 0.045 : 0.0001, t, 0.15);
    if (on) this.sirenOsc.frequency.setTargetAtTime(760 + (Math.sin(t * 3.2) * 0.5 + 0.5) * 320, t, 0.25);
  }

  private noiseBurst(dur: number, filterFreq: number, gain: number, type: BiquadFilterType = 'bandpass') {
    if (!this.ctx || !this.noiseBuffer || !this.master) return;
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = filterFreq;
    const g = ctx.createGain();
    const t = ctx.currentTime;
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f);
    f.connect(g);
    g.connect(this.master);
    src.start(t, Math.random() * 1.2, dur + 0.05);
    src.stop(t + dur + 0.05);
  }

  private tone(freq: number, dur: number, type: OscillatorType = 'sine', gain = 0.09, slideTo?: number) {
    if (!this.ctx || !this.master) return;
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    const t = ctx.currentTime;
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(this.master);
    o.start(t);
    o.stop(t + dur + 0.02);
  }

  footstep() {
    this.noiseBurst(0.12, 900 + Math.random() * 400, 0.035, 'lowpass');
  }

  jump() {
    this.noiseBurst(0.1, 700, 0.03, 'lowpass');
  }

  land() {
    this.noiseBurst(0.16, 400, 0.05, 'lowpass');
  }

  ui() {
    this.tone(880, 0.06, 'sine', 0.05);
  }

  notification() {
    this.tone(660, 0.16, 'sine', 0.08);
    setTimeout(() => this.tone(990, 0.24, 'sine', 0.07), 110);
  }

  missionComplete() {
    this.tone(523, 0.18, 'triangle', 0.08);
    setTimeout(() => this.tone(659, 0.18, 'triangle', 0.08), 140);
    setTimeout(() => this.tone(784, 0.4, 'triangle', 0.08), 290);
  }

  money() {
    this.tone(1180, 0.09, 'sine', 0.06);
    setTimeout(() => this.tone(1560, 0.14, 'sine', 0.05), 70);
  }

  pickup() {
    this.tone(720, 0.12, 'sine', 0.05, 1180);
  }

  crash() {
    this.noiseBurst(0.3, 260, 0.16, 'lowpass');
    this.tone(90, 0.22, 'square', 0.05);
  }

  hurt() {
    this.noiseBurst(0.2, 320, 0.1, 'lowpass');
  }

  door() {
    this.noiseBurst(0.14, 220, 0.06, 'lowpass');
  }

  dispose() {
    try {
      this.ctx?.close();
    } catch {
      /* ignore */
    }
    this.ctx = null;
  }
}
