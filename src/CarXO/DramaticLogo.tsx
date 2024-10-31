import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, Audio } from 'remotion';

export const DramaticLogo: React.FC = () => {
  const frame = useCurrentFrame();
  
  const scale = interpolate(
    frame,
    [0, 45, 60],
    [0.1, 2.5, 2],
    {
      extrapolateRight: 'clamp',
      easing: (t) => {
        const elastic = (x: number) => {
          const c4 = (2 * Math.PI) / 3;
          return x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
        };
        return elastic(t);
      },
    }
  );

  const brightness = interpolate(
    frame,
    [45, 60],
    [2, 1.5],
    {
      extrapolateRight: 'clamp',
    }
  );

  const xOffset = interpolate(
    frame,
    [0, 45],
    [2000, 0],
    {
      extrapolateRight: 'clamp',
    }
  );

  const glow = interpolate(
    frame,
    [30, 45, 60],
    [0, 40, 20],
    {
      extrapolateRight: 'clamp',
    }
  );

  const volume = interpolate(
    frame,
    [0, 10, 140, 150],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Audio
        src="/audio/dramatic-whoosh.mp3"
        volume={volume}
      />
      <div
        style={{
          transform: `translateX(${xOffset}px) scale(${scale})`,
          filter: `brightness(${brightness}) blur(${frame > 30 ? 1 : 0}px)`,
        }}
      >
        <div
          style={{
            fontSize: '180px',
            fontFamily: 'Arial Black, sans-serif',
            fontWeight: 'bold',
            color: '#fff',
            textShadow: `
              0 0 ${glow}px rgba(255,255,255,0.8),
              0 0 ${glow * 2}px rgba(255,255,255,0.5)
            `,
            letterSpacing: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <span style={{ color: '#ff3e3e' }}>Car</span>
          <span
            style={{
              background: 'linear-gradient(45deg, #ff3e3e, #ffffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: `drop-shadow(0 0 ${glow/2}px rgba(255,62,62,0.8))`,
            }}
          >
            XO
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};