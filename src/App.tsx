import { useCallback, useEffect, useRef, useState } from 'react';
import { Game, type Quality } from './game/Game';
import { DEFAULT_HUD, type GameNotification, type HudState } from './game/types';
import HUD from './ui/HUD';
import StartScreen from './ui/StartScreen';
import PauseMenu from './ui/PauseMenu';

const SETTINGS_KEY = 'shadowcity.settings.v1';

interface Settings {
  quality: Quality;
  sensitivity: number;
  audio: boolean;
  touch: 'auto' | 'on' | 'off';
}

function loadSettings(): Settings {
  const fallback: Settings = { quality: 'medium', sensitivity: 1, audio: true, touch: 'auto' };
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<Settings>;
    return {
      quality: parsed.quality === 'low' || parsed.quality === 'high' ? parsed.quality : 'medium',
      sensitivity: typeof parsed.sensitivity === 'number' ? parsed.sensitivity : 1,
      audio: parsed.audio !== false,
      touch: parsed.touch === 'on' || parsed.touch === 'off' ? parsed.touch : 'auto',
    };
  } catch {
    return fallback;
  }
}

function saveSettings(s: Settings) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
}

export default function App() {
  const mountRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Game | null>(null);
  const initial = useRef<Settings>(loadSettings());

  const [started, setStarted] = useState(false);
  const [hud, setHud] = useState<HudState>(DEFAULT_HUD);
  const [notes, setNotes] = useState<GameNotification[]>([]);
  const [paused, setPaused] = useState(false);
  const [quality, setQuality] = useState<Quality>(initial.current.quality);
  const [sensitivity, setSensitivity] = useState(initial.current.sensitivity);
  const [audioOn, setAudioOn] = useState(initial.current.audio);
  const [touch, setTouch] = useState<'auto' | 'on' | 'off'>(initial.current.touch);
  const [isTouch] = useState(
    () => typeof window !== 'undefined' && (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window)
  );

  const pushNote = useCallback((n: GameNotification) => {
    setNotes((prev) => [...prev.slice(-3), n]);
    window.setTimeout(() => {
      setNotes((prev) => prev.filter((x) => x.id !== n.id));
    }, 4600);
  }, []);

  // create the game once the player presses start
  useEffect(() => {
    if (!started) return;
    const el = mountRef.current;
    if (!el) return;
    const game = new Game(el, {
      onHud: setHud,
      onNotify: pushNote,
      quality,
      sensitivity,
      audio: audioOn,
    });
    gameRef.current = game;
    game.startAudio();
    return () => {
      game.dispose();
      gameRef.current = null;
    };
    // settings are applied through the effects below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  useEffect(() => {
    gameRef.current?.setPaused(paused);
  }, [paused]);

  useEffect(() => {
    gameRef.current?.setQuality(quality);
  }, [quality]);

  useEffect(() => {
    gameRef.current?.setSensitivity(sensitivity);
  }, [sensitivity]);

  useEffect(() => {
    gameRef.current?.setAudioEnabled(audioOn);
  }, [audioOn]);

  useEffect(() => {
    saveSettings({ quality, sensitivity, audio: audioOn, touch });
  }, [quality, sensitivity, audioOn, touch]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!started) return;
      if (e.code === 'Escape') {
        e.preventDefault();
        setPaused((p) => !p);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [started]);

  const showTouch = touch === 'on' || (touch === 'auto' && isTouch);

  const handleStart = () => {
    gameRef.current?.startAudio();
    setStarted(true);
  };

  return (
    <div className="app">
      <div ref={mountRef} className="canvas-host" />

      {started && (
        <HUD
          hud={hud}
          gameRef={gameRef}
          showTouch={showTouch}
          onPause={() => setPaused(true)}
          notifications={notes}
        />
      )}

      {!started && <StartScreen onStart={handleStart} quality={quality} setQuality={setQuality} />}

      {started && paused && (
        <PauseMenu
          onResume={() => setPaused(false)}
          quality={quality}
          setQuality={setQuality}
          sensitivity={sensitivity}
          setSensitivity={setSensitivity}
          audioOn={audioOn}
          setAudioOn={setAudioOn}
          touch={touch}
          setTouch={setTouch}
          onReset={() => {
            gameRef.current?.resetProgress();
            setNotes([]);
          }}
        />
      )}
    </div>
  );
}
