import type { Quality } from '../game/Game';

interface Props {
  onStart: () => void;
  quality: Quality;
  setQuality: (q: Quality) => void;
}

export default function StartScreen({ onStart, quality, setQuality }: Props) {
  return (
    <div className="start-screen">
      <div className="start-bg" />
      <div className="start-content">
        <div className="start-eyebrow">AN OPEN WORLD ACTION EXPERIENCE</div>
        <h1 className="start-title">
          SHADOW<span>CITY</span>
        </h1>
        <p className="start-tagline">
          A living city after dark. Walk it, drive it, run deliveries for the Nightline couriers.
        </p>

        <button className="play-btn" onClick={onStart}>
          <span className="play-icon">▶</span>
          ENTER THE CITY
        </button>

        <div className="quality-row">
          <span className="quality-label">GRAPHICS</span>
          {(['low', 'medium', 'high'] as Quality[]).map((q) => (
            <button
              key={q}
              className={`quality-pill ${quality === q ? 'active' : ''}`}
              onClick={() => setQuality(q)}
            >
              {q.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="start-controls">
          <div>
            <h4>TOUCH</h4>
            <p>Left joystick to move and steer · drag to look · buttons for run / handbrake, jump and enter / exit.</p>
          </div>
          <div>
            <h4>KEYBOARD</h4>
            <p>WASD move and steer · mouse drag to look · Shift run / handbrake · Space jump · E enter / exit · Esc pause.</p>
          </div>
        </div>
      </div>
      <div className="start-footer">All geometry, textures and audio are generated in real time — no downloads.</div>
    </div>
  );
}
