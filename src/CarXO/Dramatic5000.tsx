import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, Audio } from 'remotion';

export const Dramatic5000: React.FC = () => {
  const frame = useCurrentFrame();
  
  const scale = interpolate(
    frame,
    [0, 30, 45, 60],
    [0.01, 2.5, 2, 2.2],
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
    [30, 45, 60],
    [3, 2, 1.5],
    {
      extrapolateRight: 'clamp',
    }
  );

  const xOffset = interpolate(
    frame,
    [0, 30],
    [2000, 0],
    {
      extrapolateRight: 'clamp',
      easing: (t) => t * t * (3 - 2 * t),
    }
  );

  const rotation = interpolate(
    frame,
    [0, 30, 45],
    [360, -10, 0],
    {
      extrapolateRight: 'clamp',
    }
  );

  const glow = interpolate(
    frame,
    [20, 30, 45, 60],
    [0, 80, 40, 30],
    {
      extrapolateRight: 'clamp',
    }
  );

  const shake = frame > 30 && frame < 45 
    ? Math.sin(frame * 2) * (45 - frame) * 1
    : 0;

  const textScale = 1 + Math.sin(frame * 0.3) * 0.05;

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
        backgroundColor: '#0A1929',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Audio
        src="/audio/dramatic-impact.mp3"
        volume={volume}
      />
      <div
        style={{
          transform: `
            perspective(1000px)
            translateX(${xOffset + shake}px) 
            scale(${scale}) 
            rotate(${rotation}deg)
            rotateY(${frame > 30 ? Math.sin(frame * 0.2) * 10 : 0}deg)
          `,
          filter: `
            brightness(${brightness}) 
            blur(${frame > 25 && frame < 35 ? 2 : 0}px)
            contrast(${frame > 30 ? 1.2 : 1})
          `,
          position: 'relative',
        }}
      >
        <div
          style={{
            fontSize: '180px',
            fontFamily: 'Arial Black, sans-serif',
            fontWeight: 'bold',
            color: '#fff',
            textShadow: `
              0 0 ${glow}px rgba(0,144,255,0.8),
              0 0 ${glow * 1.5}px rgba(0,144,255,0.5)
            `,
            letterSpacing: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            transform: `scale(${textScale})`,
          }}
        >
          <span 
            style={{ 
              color: '#0090ff',
              animation: 'pulse 0.5s infinite',
            }}
          >
            Car
          </span>
          <span
            style={{
              background: 'linear-gradient(45deg, #FF0000, #CC0000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: `
                drop-shadow(0 0 ${glow * 0.3}px #FF0000)
                drop-shadow(0 0 ${glow * 0.5}px #FF0000)
              `,
              textShadow: `0 0 ${glow * 0.3}px #FF0000`,
            }}
          >
            XO
          </span>
        </div>
      </div>
      {frame > 30 && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle, transparent 0%, rgba(0,144,255,${Math.sin(frame * 0.2) * 0.15}) 100%)`,
            mixBlendMode: 'overlay',
          }}
        />
      )}
    </AbsoluteFill>
  );
};