export class Input {
  keys = new Set<string>();
  joystick = { x: 0, z: 0 };
  joystickActive = false;
  runHeld = false;
  lookDX = 0;
  lookDY = 0;
  zoomDelta = 0;
  private jumpQueued = false;
  private interactQueued = false;
  private el: HTMLElement;
  private dragging = false;
  private lastX = 0;
  private lastY = 0;
  private touchMode = false;

  private onKeyDown = (e: KeyboardEvent) => {
    const code = e.code;
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(code)) e.preventDefault();
    if (this.keys.has(code)) return;
    this.keys.add(code);
    if (code === 'Space') this.jumpQueued = true;
    if (code === 'KeyE' || code === 'Enter') this.interactQueued = true;
    if (code === 'ShiftLeft' || code === 'ShiftRight') this.runHeld = true;
  };

  private onKeyUp = (e: KeyboardEvent) => {
    this.keys.delete(e.code);
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.runHeld = false;
  };

  private onBlur = () => {
    this.keys.clear();
    this.runHeld = false;
    this.joystickActive = false;
    this.joystick.x = 0;
    this.joystick.z = 0;
  };

  private onPointerDown = (e: PointerEvent) => {
    if (e.button !== undefined && e.button !== 0 && e.button !== 2) return;
    this.dragging = true;
    this.touchMode = e.pointerType === 'touch';
    this.lastX = e.clientX;
    this.lastY = e.clientY;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  private onPointerMove = (e: PointerEvent) => {
    if (!this.dragging) return;
    const dx = e.clientX - this.lastX;
    const dy = e.clientY - this.lastY;
    this.lastX = e.clientX;
    this.lastY = e.clientY;
    const sens = e.pointerType === 'touch' ? 3.2 : 2.4;
    this.lookDX += dx * sens;
    this.lookDY += dy * sens;
  };

  private onPointerUp = () => {
    this.dragging = false;
  };

  private onWheel = (e: WheelEvent) => {
    e.preventDefault();
    this.zoomDelta += Math.sign(e.deltaY) * 0.6;
  };

  private onContextMenu = (e: Event) => e.preventDefault();

  constructor(el: HTMLElement) {
    this.el = el;
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('blur', this.onBlur);
    el.addEventListener('pointerdown', this.onPointerDown);
    window.addEventListener('pointermove', this.onPointerMove);
    window.addEventListener('pointerup', this.onPointerUp);
    window.addEventListener('pointercancel', this.onPointerUp);
    el.addEventListener('wheel', this.onWheel, { passive: false });
    el.addEventListener('contextmenu', this.onContextMenu);
  }

  get isTouch() {
    return this.touchMode;
  }

  getMove() {
    let x = 0;
    let z = 0;
    if (this.joystickActive) {
      x = this.joystick.x;
      z = this.joystick.z;
    }
    const k = this.keys;
    if (k.has('KeyW') || k.has('ArrowUp')) z += 1;
    if (k.has('KeyS') || k.has('ArrowDown')) z -= 1;
    if (k.has('KeyA') || k.has('ArrowLeft')) x -= 1;
    if (k.has('KeyD') || k.has('ArrowRight')) x += 1;
    // Prefer the joystick when it is being used
    if (this.joystickActive && (x !== 0 || z !== 0) && Math.hypot(x, z) > 1.01) {
      const m = Math.hypot(x, z);
      x /= m;
      z /= m;
    }
    return { x: Math.max(-1, Math.min(1, x)), z: Math.max(-1, Math.min(1, z)) };
  }

  get run() {
    return this.runHeld || this.keys.has('ShiftLeft') || this.keys.has('ShiftRight');
  }

  setJoystick(x: number, z: number, active: boolean) {
    this.joystick.x = x;
    this.joystick.z = z;
    this.joystickActive = active;
  }

  setRun(on: boolean) {
    this.runHeld = on;
  }

  queueJump() {
    this.jumpQueued = true;
  }

  queueInteract() {
    this.interactQueued = true;
  }

  consumeJump() {
    const v = this.jumpQueued;
    this.jumpQueued = false;
    return v;
  }

  consumeInteract() {
    const v = this.interactQueued;
    this.interactQueued = false;
    return v;
  }

  consumeLook() {
    const dx = this.lookDX;
    const dy = this.lookDY;
    this.lookDX = 0;
    this.lookDY = 0;
    return { dx, dy };
  }

  consumeZoom() {
    const z = this.zoomDelta;
    this.zoomDelta = 0;
    return z;
  }

  clearActions() {
    this.jumpQueued = false;
    this.interactQueued = false;
    this.lookDX = 0;
    this.lookDY = 0;
  }

  dispose() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('blur', this.onBlur);
    this.el.removeEventListener('pointerdown', this.onPointerDown);
    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerup', this.onPointerUp);
    window.removeEventListener('pointercancel', this.onPointerUp);
    this.el.removeEventListener('wheel', this.onWheel);
    this.el.removeEventListener('contextmenu', this.onContextMenu);
  }
}
