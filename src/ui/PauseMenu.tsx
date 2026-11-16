import { useState } from 'react';
import type { Quality } from '../game/Game';

interface Props {
  onResume: () => void;
  quality: Quality;
  setQuality: (q: Quality) => void;
  sensitivity: number;
  setSensitivity: (v: number) => void;
  audioOn: boolean;
  setAudioOn: (v: boolean) => void;
  touch: 'auto' | 'on' | 'off';
  setTouch: (v: 'auto' | 'on' | 'off') => void;
  onReset: () => void;
}

export default function PauseMenu({
  onResume,
  quality,
  setQuality,
  sensitivity,
  setSensitivity,
  audioOn,
  setAudioOn,
  touch,
  setTouch,
  onReset,
}: Props) {
  const [confirmReset, setConfirmReset] = useState(false);

  return (
    <div className="overlay">
      <div className="pause-panel">
        <div className="pause-header">
          <div>
            <div className="pause-eyebrow">PAUSED</div>
            <h2>SHADOW CITY</h2>
          </div>
          <button className="close-btn" onClick={onResume} aria-label="Resume">
            ✕
          </button>
        </div>

        <button className="resume-btn" onClick={onResume}>
          RESUME
        </button>

        <div className="settings">
          <div className="settings-title">GRAPHICS</div>
          <div className="segmented">
            {(['low', 'medium', 'high'] as Quality[]).map((q) => (
              <button key={q} className={quality === q ? 'active' : ''} onClick={() => setQuality(q)}>
                {q.toUpperCase()}
              </button>
            ))}
          </div>
          <p className="setting-note">
            Low removes shadows and lowers resolution — best for older Android phones.
          </p>

          <div className="settings-title">CAMERA SENSITIVITY</div>
          <input
            className="slider"
            type="range"
            min={0.4}
            max={2.2}
            step={0.1}
            value={sensitivity}
            onChange={(e) => setSensitivity(parseFloat(e.target.value))}
          />

          <div className="settings-title">TOUCH CONTROLS</div>
          <div className="segmented">
            {(['auto', 'on', 'off'] as const).map((t) => (
              <button key={t} className={touch === t ? 'active' : ''} onClick={() => setTouch(t)}>
                {t.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="row-between">
            <span className="settings-title inline">AUDIO</span>
            <button className={`toggle ${audioOn ? 'on' : ''}`} onClick={() => setAudioOn(!audioOn)}>
              {audioOn ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>

        <div className="pause-footer">
          <button
            className={`reset-btn ${confirmReset ? 'confirm' : ''}`}
            onClick={() => {
              if (!confirmReset) {
                setConfirmReset(true);
                return;
              }
              onReset();
              setConfirmReset(false);
            }}
          >
            {confirmReset ? 'TAP AGAIN TO WIPE PROGRESS' : 'RESET PROGRESS'}
          </button>
          <span className="autosave">Progress saves automatically</span>
        </div>
      </div>
    </div>
  );
}
