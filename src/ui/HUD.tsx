import type { MutableRefObject } from 'react';
import type { Game } from '../game/Game';
import type { GameNotification, HudState } from '../game/types';
import Joystick from './Joystick';
import Minimap from './Minimap';

interface Props {
  hud: HudState;
  gameRef: MutableRefObject<Game | null>;
  showTouch: boolean;
  onPause: () => void;
  notifications: GameNotification[];
}

export default function HUD({ hud, gameRef, showTouch, onPause, notifications }: Props) {
  const stars = Array.from({ length: 5 }, (_, i) => i < hud.wanted);
  const healthColor = hud.health > 60 ? '#8ed08a' : hud.health > 30 ? '#e5c062' : '#e0685f';

  return (
    <div className="hud">
      <div className="vignette" />
      <div className="hud-top-left">
        <div className="brand">
          SHADOW<span>CITY</span>
        </div>
        <div className="subline">
          <span className="zone-tag">{hud.zone}</span>
          <span className="sep" />
          <span className="clock">{hud.clock}</span>
          <span className={`daytag ${hud.isNight ? 'night' : ''}`}>{hud.isNight ? 'NIGHT' : 'DAY'}</span>
        </div>

        <div className="status">
          <div className="money">
            <span className="money-sign">$</span>
            {hud.money.toLocaleString('en-US')}
          </div>
          <div className="health">
            <div className="health-bar">
              <div className="health-fill" style={{ width: `${hud.health}%`, background: healthColor }} />
            </div>
            <span className="health-value">{hud.health}</span>
          </div>
        </div>

        {hud.missionActive && (
          <div className="mission-card">
            <div className="mission-eyebrow">OBJECTIVE</div>
            <div className="mission-title">{hud.missionTitle}</div>
            <div className="mission-objective">{hud.missionObjective}</div>
            <div className="mission-distance">
              <span className="chev">◤</span>
              {Math.round(hud.missionDistance)} m
            </div>
          </div>
        )}
      </div>

      <div className="hud-top-right">
        <div className="top-right-row">
          <div className="wanted" aria-label={`wanted level ${hud.wanted}`}>
            {stars.map((on, i) => (
              <span key={i} className={on ? 'star on' : 'star'}>
                ★
              </span>
            ))}
          </div>
          <button className="icon-btn" onClick={onPause} aria-label="Pause">
            <span className="pause-bars">
              <i />
              <i />
            </span>
          </button>
        </div>
        <Minimap game={gameRef} />
        <div className="mini-meta">
          <span>{hud.fps} FPS</span>
        </div>
      </div>

      {hud.inVehicle && (
        <div className="speedo">
          <div className="speed-value">{Math.round(hud.speed)}</div>
          <div className="speed-unit">KM/H</div>
          <div className="speed-bar">
            <div className="speed-bar-fill" style={{ width: `${Math.min(100, (hud.speed / 180) * 100)}%` }} />
          </div>
        </div>
      )}

      {!hud.inVehicle && hud.nearVehicle && (
        <div className="prompt">
          {showTouch ? 'Press ENTER to take the car' : 'Press E to take the car'}
        </div>
      )}
      {hud.inVehicle && hud.speed < 6 && (
        <div className="prompt subtle">{showTouch ? 'EXIT to get out' : 'E — exit vehicle'}</div>
      )}

      <div className="toasts">
        {notifications.map((n) => (
          <div key={n.id} className={`toast ${n.kind}`}>
            <div className="toast-title">{n.title}</div>
            <div className="toast-text">{n.text}</div>
          </div>
        ))}
      </div>

      {showTouch && (
        <>
          <Joystick
            onChange={(x, z, active) => gameRef.current?.setJoystick(x, z, active)}
          />
          <div className="touch-actions">
            <button
              className="round-btn interact"
              onPointerDown={(e) => {
                e.preventDefault();
                gameRef.current?.interact();
              }}
              aria-label="Interact"
            >
              <span className="glyph">{hud.inVehicle ? '↧' : '↥'}</span>
              <span className="btn-label">{hud.inVehicle ? 'EXIT' : 'ENTER'}</span>
            </button>
            <div className="action-column">
              <button
                className="round-btn jump"
                onPointerDown={(e) => {
                  e.preventDefault();
                  gameRef.current?.jump();
                }}
                aria-label="Jump"
              >
                <span className="glyph">⤒</span>
              </button>
              <button
                className="round-btn run"
                onPointerDown={(e) => {
                  e.preventDefault();
                  gameRef.current?.setRun(true);
                }}
                onPointerUp={() => gameRef.current?.setRun(false)}
                onPointerCancel={() => gameRef.current?.setRun(false)}
                onPointerLeave={() => gameRef.current?.setRun(false)}
                aria-label="Run"
              >
                <span className="glyph">»</span>
              </button>
            </div>
          </div>
        </>
      )}

      {!showTouch && (
        <div className="keyhint">
          <span>
            <b>WASD</b> move
          </span>
          <span>
            <b>Drag</b> look
          </span>
          <span>
            <b>Shift</b> run
          </span>
          <span>
            <b>Space</b> jump
          </span>
          <span>
            <b>E</b> enter / exit
          </span>
        </div>
      )}
    </div>
  );
}
