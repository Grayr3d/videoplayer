import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

export const CarBody: React.FC = () => {
  const frame = useCurrentFrame();
  
  const pathProgress = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <path
      d="M 50 100 L 100 100 Q 150 100 200 80 Q 250 60 300 100 L 350 100 Q 360 100 360 110 L 360 140 Q 360 150 350 150 L 50 150 Q 40 150 40 140 L 40 110 Q 40 100 50 100"
      fill="#ff0000"
      strokeDasharray="1000"
      strokeDashoffset={1000 - pathProgress * 1000}
      stroke="#fff"
      strokeWidth="2"
    />
  );
};