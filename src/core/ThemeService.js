/**
 * ============================================================================
 * ThemeService (Dark / Light Architectural Theme State Manager)
 * ============================================================================
 * Manages color schemes, body data-theme attributes, SVG iconography,
 * and remembers preferences via localStorage.
 * 
 * @class ThemeService
 */
export class ThemeService {
  /**
   * @param {Object} [options]
   * @param {string} [options.defaultTheme='dark']
   * @param {string} [options.storageKey='munardi_portfolio_theme']
   */
  constructor(options = {}) {
    this.storageKey = options.storageKey || 'munardi_portfolio_theme';
    this.defaultTheme = options.defaultTheme || 'dark';
    this.currentTheme = this._loadInitialTheme();
  }

  _loadInitialTheme() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved === 'dark' || saved === 'light') return saved;
    } catch (_) {}
    return this.defaultTheme;
  }

  init() {
    this.applyTheme(this.currentTheme);

    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.toggle();
      });
    }
  }

  getTheme() {
    return this.currentTheme;
  }

  toggle() {
    const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  setTheme(theme) {
    if (theme !== 'dark' && theme !== 'light') return;
    this.currentTheme = theme;

    try {
      localStorage.setItem(this.storageKey, theme);
    } catch (_) {}

    this.applyTheme(theme);
  }

  applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);

    const iconSun = document.getElementById('themeIconSun');
    const iconMoon = document.getElementById('themeIconMoon');

    if (iconSun && iconMoon) {
      if (theme === 'light') {
        iconSun.style.display = 'none';
        iconMoon.style.display = 'block';
      } else {
        iconSun.style.display = 'block';
        iconMoon.style.display = 'none';
      }
    }
  }
}
