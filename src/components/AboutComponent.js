/**
 * ============================================================================
 * AboutComponent
 * ============================================================================
 * Renders the About Me section, Engineering Philosophy bento grid,
 * core technical badges, and highlight quantitative metrics.
 */
export class AboutComponent {
  /**
   * @param {Object} config - Full portfolio configuration
   * @returns {string} HTML markup
   */
  static render(config) {
    const { about, stats } = config;

    const badgesHtml = about.badges
      .map((badge) => `<span class="about-badge">${badge}</span>`)
      .join('');

    const statsHtml = stats
      .map(
        (st) => `
        <div class="stat-card">
          <div class="stat-num">${st.value}</div>
          <div class="stat-label">
            <span class="lang-en">${st.label.en}</span>
            <span class="lang-id">${st.label.id}</span>
          </div>
        </div>
      `
      )
      .join('');

    return `
    <section class="section" id="about">
      <div class="wrap">
        <div class="sec-head">
          <div>
            <div class="sec-eyebrow"><span class="lang-en">${about.eyebrow.en}</span><span class="lang-id">${about.eyebrow.id}</span></div>
            <div class="sec-title"><span class="lang-en">${about.title.en}</span><span class="lang-id">${about.title.id}</span></div>
          </div>
          <p class="sec-desc">
            <span class="lang-en">${about.description.en}</span>
            <span class="lang-id">${about.description.id}</span>
          </p>
        </div>

        <div class="about-bento-grid">
          <div class="bento-card about-main-card">
            <p class="about-text">
              <span class="lang-en">${about.narrative.en}</span>
              <span class="lang-id">${about.narrative.id}</span>
            </p>

            <div class="about-badges">
              ${badgesHtml}
            </div>
          </div>

          <div class="about-stats-grid">
            ${statsHtml}
          </div>
        </div>
      </div>
    </section>
    `;
  }
}
