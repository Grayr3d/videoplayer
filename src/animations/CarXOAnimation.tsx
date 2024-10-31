import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

interface CarXOAnimationProps {
  titleText: string;
  titleColor: string;
  backgroundColor: string;
}

export const CarXOAnimation: React.FC<CarXOAnimationProps> = ({
  titleText,
  titleColor,
  backgroundColor
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: {
      mass: 0.5,
      damping: 200,
    }
  });

  const opacity = interpolate(
    frame,
    [0, 20, durationInFrames - 20, durationInFrames],
    [0, 1, 1, 0]
  );

  const xPosition = interpolate(
    frame,
    [0, 30],
    [-1000, 0],
    {
      extrapolateRight: 'clamp'
    }
  );

  return (
    <AbsoluteFill style={{ backgroundColor }}>
      <AbsoluteFill
        style={{
          opacity,
          transform: `translateX(${xPosition}px) scale(${scale})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ 
            color: titleColor,
            fontSize: 200,
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
          }}>
            Car
          </span>
          <span style={{ 
            color: '#ff0000',
            fontSize: 200,
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
          }}>
            XO
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}