/**
 * Navbar (Spatial Glass Command Header)
 * Renders the top navigation bar with live status badge, quick section links,
 * 3D Orbit inspect toggle, Audio SFX toggle, language toggle (EN/ID), and CV CTA.
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

          <!-- Right: Actions Deck (Clean & Minimalist) -->
          <div class="navbar-actions">
            <!-- 3D View Toggle Button (Aktif: Full 3D Cinematic / Non-Aktif: Maju Mundur Linear) -->
            <button class="nav-action-pill active" id="btnToggle3DMode" title="3D View: Aktif (Full Cinematic) / Non-Aktif (Maju Mundur Linear)" aria-label="Toggle 3D View">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span id="labelModeToggle">3D VIEW</span>
            </button>

            <!-- Audio SFX Toggle Button -->
            <button class="nav-btn-icon" id="btnToggleAudio" title="Toggle Audio FX (HotKey: M)" aria-label="Toggle Audio">
              <svg id="iconAudioOff" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
              <svg id="iconAudioOn" style="display:none;" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            </button>

            <!-- Language Switcher -->
            <button class="nav-btn-icon" id="langToggleBtn" title="Switch Language (EN / ID)" aria-label="Switch Language">
              <span class="lang-label" id="currentLangLabel">ID</span>
            </button>

            <!-- Download CV CTA (Desktop) -->
            <a href="${cvPrimary.file}" download="MUNARDI-CV_SoftwareEngineer.pdf" class="nav-btn-primary nav-cv-desktop" id="navDownloadCvBtn">
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
            <a href="#hero" class="mobile-link"><span class="lang-en">Home</span><span class="lang-id">Beranda</span></a>
            <a href="#about" class="mobile-link"><span class="lang-en">About</span><span class="lang-id">Tentang</span></a>
            <a href="#skill" class="mobile-link"><span class="lang-en">Skills</span><span class="lang-id">Keahlian</span></a>
            <a href="#experience" class="mobile-link"><span class="lang-en">Experience</span><span class="lang-id">Pengalaman</span></a>
            <a href="#education" class="mobile-link"><span class="lang-en">Education</span><span class="lang-id">Pendidikan</span></a>
            <a href="#contact" class="mobile-link"><span class="lang-en">Contact</span><span class="lang-id">Kontak</span></a>
          </nav>
          <div class="mobile-drawer-footer">
            <a href="${cvPrimary.file}" download="MUNARDI-CV_SoftwareEngineer.pdf" class="mobile-drawer-cv-btn" id="mobileDrawerCvBtn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>
      </header>
    `;
  }
}

export default Navbar;
