import React from 'react';
import { Player } from '@remotion/player';

interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  component: React.ComponentType;
}

export const VideoCard: React.FC<VideoCardProps> = ({ title, description, component }) => {
  return (
    <div className="video-card">
      <div className="video-player-wrapper">
        <Player
          component={component}
          durationInFrames={150}
          fps={30}
          compositionWidth={1920}
          compositionHeight={1080}
          style={{
            width: '100%',
            aspectRatio: '16/9',
          }}
          controls
          autoPlay
          loop
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};