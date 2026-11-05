/**
 * ============================================================================
 * HeroComponent
 * ============================================================================
 * Renders the Hero landing section, WebGL 3D spatial canvas mount point,
 * status badge, headline, role tags, architectural summary, and CTAs.
 */
export class HeroComponent {
  /**
   * @param {Object} config - Full portfolio configuration
   * @returns {string} HTML markup
   */
  static render(config) {
    const { personal } = config;
    const primaryCv = personal.cvDownloads.find((c) => c.primary) || personal.cvDownloads[0];

    return `
    <section class="hero" id="hero">
      <!-- WebGL Spatial 3D Canvas Mount Point -->
      <canvas id="heroCanvas3D"></canvas>

      <div class="wrap">
        <div class="hero-layout">
          <div class="hero-content">
            <div class="hero-status-pill">
              <span class="hero-status-dot"></span>
              <span class="lang-en">${personal.status.en}</span>
              <span class="lang-id">${personal.status.id}</span>
            </div>

            <h1 class="hero-name">${personal.name}<span class="dot">${personal.surnameDot}</span></h1>

            <div class="hero-role-block">
              <span class="role-primary">${personal.rolePrimary}</span>
              <span class="role-badge">${personal.roleBadge}</span>
            </div>

            <p class="hero-pitch">
              <span class="lang-en">${personal.pitch.en}</span>
              <span class="lang-id">${personal.pitch.id}</span>
            </p>

            <div class="hero-actions">
              <a href="#experience" class="btn btn-primary">
                <span class="lang-en">Explore Work History &darr;</span>
                <span class="lang-id">Jelajahi Riwayat Kerja &darr;</span>
              </a>
              <a href="${primaryCv.file}" download="${primaryCv.file.replace('./', '')}" class="btn btn-secondary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span class="lang-en">Download CV (PDF)</span>
                <span class="lang-id">Unduh CV (PDF)</span>
              </a>
              <a id="heroWaBtn" href="${personal.contact.whatsappUrlEn}" target="_blank" class="btn btn-ghost">
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div class="hero-spacer"></div>

          <!-- Floating Interactive Dive Pill -->
          <div class="hero-dive-container">
            <a href="#about" class="hero-dive-pill" aria-label="Scroll to dive in">
              <span class="dive-dot"></span>
              <span class="lang-en">Scroll to dive into architecture</span>
              <span class="lang-id">Scroll untuk jelajahi arsitektur</span>
              <svg class="dive-arrow" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}
