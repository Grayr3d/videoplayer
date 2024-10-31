import React from 'react';

interface WheelProps {
  cx: number;
  cy: number;
  frame: number;
}

export const Wheel: React.FC<WheelProps> = ({ cx, cy, frame }) => {
  return (
    <circle
      cx={cx}
      cy={cy}
      r="20"
      fill="#333"
      stroke="#fff"
      strokeWidth="2"
      style={{
        transform: `rotate(${frame * 5}deg)`,
        transformOrigin: `${cx}px ${cy}px`,
      }}
    />
  );
};