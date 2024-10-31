import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, Audio } from 'remotion';
import { CarBody } from './components/CarBody';
import { Wheel } from './components/Wheel';
import { BrandText } from './components/BrandText';

export const CarLogo: React.FC = () => {
  const frame = useCurrentFrame();
  
  const progress = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const opacity = interpolate(frame, [0, 15], [0, 1]);
  
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
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      <Audio
        src="/audio/engine-rev.mp3"
        volume={volume}
      />
      <svg
        viewBox="0 0 400 200"
        style={{
          width: '80%',
          height: '80%',
          margin: 'auto',
          opacity,
          transform: `scale(${progress})`,
        }}
      >
        <CarBody />
        <Wheel cx={100} cy={150} frame={frame} />
        <Wheel cx={300} cy={150} frame={frame} />
        <BrandText />
      </svg>
    </AbsoluteFill>
  );
};