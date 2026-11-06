/**
 * Navbar (Spatial Glass Command Header)
 * Renders the top navigation bar with live status badge, quick section links,
 * language toggle (EN/ID), and mobile navigation drawer.
 */
export class Navbar {
  static render(config) {
    const { personal } = config;
    const cvPrimary = (personal.cvDownloads || []).find((c) => c.primary) || {
      file: './MUNARDI-CV_SoftwareEngineer.pdf'
    };

    return `
      <header class="navbar-header" id="navbarHeader">
        <div class="navbar-container">
          <!-- Left: Identity & Beacon -->
          <a href="#hero" class="navbar-brand" aria-label="Munardi Home">
            <span class="brand-name">Munardi<span class="accent-cyan">.</span></span>
            <span class="brand-badge">
              <span class="beacon-dot"></span>
              <span>SR ENG</span>
            </span>
          </a>

          <!-- Center: Primary Nav Links -->
          <nav class="navbar-links" id="navbarLinks" aria-label="Main Navigation">
            <a href="#about" class="nav-link">
              <span class="lang-en">About</span>
              <span class="lang-id">Tentang</span>
            </a>
            <a href="#skill" class="nav-link">
              <span class="lang-en">Skills</span>
              <span class="lang-id">Keahlian</span>
            </a>
            <a href="#experience" class="nav-link">
              <span class="lang-en">Experience</span>
              <span class="lang-id">Pengalaman</span>
            </a>
            <a href="#education" class="nav-link">
              <span class="lang-en">Education</span>
              <span class="lang-id">Pendidikan</span>
            </a>
            <a href="#contact" class="nav-link">
              <span class="lang-en">Contact</span>
              <span class="lang-id">Kontak</span>
            </a>
          </nav>

          <!-- Right: Actions Deck -->
          <div class="navbar-actions">
            <!-- Language Switcher -->
            <button class="nav-btn-icon" id="langToggleBtn" title="Switch Language (EN / ID)" aria-label="Switch Language">
              <span class="lang-label" id="currentLangLabel">ID</span>
            </button>

            <!-- Download CV CTA -->
            <a href="${cvPrimary.file}" download="MUNARDI-CV_SoftwareEngineer.pdf" class="nav-btn-primary" id="navDownloadCvBtn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>CV (PDF)</span>
            </a>

            <!-- Mobile Hamburger Button -->
            <button class="nav-hamburger-btn" id="mobileMenuBtn" aria-label="Toggle Mobile Menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <!-- Mobile Drawer Menu -->
        <div class="mobile-drawer" id="mobileDrawer">
          <nav class="mobile-drawer-links">
            <a href="#hero" class="mobile-link"><span class="lang-en">Hero</span><span class="lang-id">Awal</span></a>
            <a href="#about" class="mobile-link"><span class="lang-en">About</span><span class="lang-id">Tentang</span></a>
            <a href="#skill" class="mobile-link"><span class="lang-en">Skills</span><span class="lang-id">Keahlian</span></a>
            <a href="#experience" class="mobile-link"><span class="lang-en">Experience</span><span class="lang-id">Pengalaman</span></a>
            <a href="#education" class="mobile-link"><span class="lang-en">Education</span><span class="lang-id">Pendidikan</span></a>
            <a href="#contact" class="mobile-link"><span class="lang-en">Contact</span><span class="lang-id">Kontak</span></a>
          </nav>
        </div>
      </header>
    `;
  }
}

export default Navbar;
