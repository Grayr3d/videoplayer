import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

interface TechLetterProps {
  letter: string;
  index: number;
  baseDelay: number;
}

export const TechLetter: React.FC<TechLetterProps> = ({ letter, index, baseDelay }) => {
  const frame = useCurrentFrame();
  const delay = index * baseDelay;
  
  const opacity = interpolate(
    frame - delay,
    [0, 15],
    [0, 1],
    { extrapolateRight: 'clamp' }
  );

  const waveProgress = (frame - delay) / 5;
  const waveAmplitude = letter === 'O' ? 40 : 20;
  const translateY = interpolate(
    waveProgress,
    [0, 2, 4, 6, 8],
    [50, -waveAmplitude, 0, -waveAmplitude/2, 0],
    {
      extrapolateRight: 'clamp',
      extrapolateLeft: 'clamp',
    }
  );

  const isSpecial = letter === 'X' || letter === 'O';
  const color = isSpecial ? '#64FFDA' : '#E6F1FF';
  const fontWeight = isSpecial ? 'bold' : 'normal';
  
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: '120px',
        fontFamily: 'Arial',
        color,
        opacity,
        transform: `translateY(${translateY}px)`,
        margin: '0 2px',
        fontWeight,
        textShadow: isSpecial ? '0 0 10px rgba(100, 255, 218, 0.3)' : 'none',
        letterSpacing: '2px',
        transition: 'transform 0.3s ease',
      }}
    >
      {letter}
    </span>
  );
}