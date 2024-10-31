import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, Audio } from 'remotion';
import { TechLetter } from './components/TechLetter';

export const CarXOTech: React.FC = () => {
  const frame = useCurrentFrame();
  
  const letters = ['C', 'a', 'r', 'X', 'O'];
  const baseDelay = 8;
  
  const backgroundOpacity = interpolate(
    frame,
    [0, 20],
    [0, 1],
    { extrapolateRight: 'clamp' }
  );

  const taglineOpacity = interpolate(
    frame,
    [80, 100],
    [0, 1],
    { extrapolateRight: 'clamp' }
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
        backgroundColor: '#0A192F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: backgroundOpacity,
      }}
    >
      <Audio
        src="/audio/tech-swoosh.mp3"
        volume={volume}
      />
      <div style={{ position: 'relative' }}>
        {letters.map((letter, index) => (
          <TechLetter
            key={letter}
            letter={letter}
            index={index}
            baseDelay={baseDelay}
          />
        ))}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            textAlign: 'center',
            color: '#64FFDA',
            fontFamily: 'Arial',
            fontSize: '24px',
            marginTop: '40px',
            opacity: taglineOpacity,
            letterSpacing: '2px',
          }}
        >
          DRIVING INNOVATION FORWARD
        </div>
      </div>
    </AbsoluteFill>
  );
};