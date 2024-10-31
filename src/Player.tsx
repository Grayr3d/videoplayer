import React, { useState, lazy, Suspense } from 'react';
import { Player } from '@remotion/player';
import { useTheme } from './contexts/ThemeContext';
import { AuthModal } from './components/AuthModal';
import { UserMenu } from './components/UserMenu';
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