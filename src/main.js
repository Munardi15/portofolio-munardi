import './styles/style.css';
import { PortfolioApp } from './PortfolioApp.js';

/**
 * ============================================================================
 * Application Entry Point
 * ============================================================================
 * Instantiates the PortfolioApp and bootstraps the senior-grade architecture.
 */
document.addEventListener('DOMContentLoaded', () => {
  const app = new PortfolioApp();
  app.init();

  // Expose to window for debugging or extensions
  window.__PORTFOLIO_APP__ = app;
});
