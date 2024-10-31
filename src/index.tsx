import React from 'react';
import { createRoot } from 'react-dom/client';
import { Gallery } from './Gallery';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Gallery />
    </React.StrictMode>
  );
}