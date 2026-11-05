/**
 * ============================================================================
 * NavbarComponent
 * ============================================================================
 * Renders the top navigation bar, brand identity, navigation links,
 * theme toggle, language switch, and mobile navigation drawer.
 */
export class NavbarComponent {
  /**
   * @param {Object} config - Full portfolio configuration
   * @returns {string} HTML markup
   */
  static render(config) {
    const { personal, navigation } = config;

    const navLinksHtml = navigation
      .map(
        (item) => `
        <a href="${item.href}" class="nav-link">
          <span class="lang-en">${item.label.en}</span>
          <span class="lang-id">${item.label.id}</span>
        </a>
      `
      )
      .join('');

    return `
    <header id="header">
      <div class="header-inner">
        <a href="#hero" class="brand-link" aria-label="${personal.name} Home">
          <span class="brand-name">${personal.name}<span class="accent-cyan">${personal.surnameDot}</span></span>
          <div class="brand-badge">
            <span class="pulse-dot"></span>
            <span>SR ENG</span>
          </div>
        </a>

        <nav class="nav-links">
          ${navLinksHtml}
        </nav>

        <div class="header-ctrls">
          <button id="langToggle" class="ctrl-btn" aria-label="Toggle Language">ID</button>
          
          <button id="themeToggle" class="ctrl-btn" aria-label="Toggle Theme">
            <svg id="themeIconSun" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg id="themeIconMoon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
          
          <button id="mobileMenuBtn" class="mobile-menu-btn" aria-label="Open navigation menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobileNav" class="mobile-nav">
        ${navLinksHtml}
      </div>
    </header>
    `;
  }
}
