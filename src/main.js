import './styles/main.css';
import { App } from './App.js';

// DOM Content Loaded Bootstrap
document.addEventListener('DOMContentLoaded', () => {
  const app = new App('#app');
  window.app = app;
  app.init().catch((err) => {
    console.error('Fatal Universe Bootstrap Error:', err);
  });
});
