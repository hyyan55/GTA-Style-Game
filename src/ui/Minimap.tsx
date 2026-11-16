import { useEffect, useRef } from 'react';
import type { Game } from '../game/Game';

interface Props {
  game: React.MutableRefObject<Game | null>;
}

export default function Minimap({ game }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssSize = 118;
    canvas.width = cssSize * dpr;
    canvas.height = cssSize * dpr;
    canvas.style.width = `${cssSize}px`;
    canvas.style.height = `${cssSize}px`;
    let raf = 0;
    const loop = () => {
      const g = game.current;
      if (g) g.drawMinimap(ctx, canvas.width);
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, [game]);

  return <canvas ref={canvasRef} className="minimap" />;
}
