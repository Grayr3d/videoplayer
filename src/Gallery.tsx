import React from 'react';
import { Player } from '@remotion/player';
import { Dramatic5000 } from './CarXO/Dramatic5000';
import { DramaticLogo } from './CarXO/DramaticLogo';
import { CarXOTech } from './CarXO/CarXOTech';
import { CarLogo } from './CarXO/CarLogo';

const videos = [
  {
    id: 'dramatic-5000',
    title: 'CarXO Dramatic 5000',
    description: 'High-impact dramatic animation with dynamic effects',
    component: Dramatic5000,
  },
  {
    id: 'dramatic-logo',
    title: 'CarXO Dramatic Logo',
    description: 'Bold and impactful logo animation',
    component: DramaticLogo,
  },
  {
    id: 'tech-logo',
    title: 'CarXO Tech',
    description: 'Modern tech-focused animation',
    component: CarXOTech,
  },
  {
    id: 'car-logo',
    title: 'CarXO Car Logo',
    description: 'Automotive-inspired logo animation',
    component: CarLogo,
  },
];

export const Gallery: React.FC = () => {
  return (
    <div className="gallery">
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-container">
            <Player
              component={video.component}
              durationInFrames={150}
              fps={30}
              compositionWidth={1920}
              compositionHeight={1080}
              style={{
                width: '100%',
                aspectRatio: '16/9',
              }}
              controls
              loop
              autoPlay={false}
              showVolumeControls={true}
            />
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}