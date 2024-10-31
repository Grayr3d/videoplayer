import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

export const BrandText: React.FC = () => {
  const frame = useCurrentFrame();

  const textOpacity = interpolate(frame, [30, 45], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <text
      x="200"
      y="120"
      textAnchor="middle"
      fill="#fff"
      fontSize="48"
      fontFamily="Arial Black"
      style={{
        opacity: textOpacity,
      }}
    >
      XO
    </text>
  );
};