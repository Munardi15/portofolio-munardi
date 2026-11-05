/**
 * ============================================================================
 * SkillsComponent
 * ============================================================================
 * Renders the Technical Expertise section with categorized skill cards,
 * SVG icons, and capability chips.
 */
export class SkillsComponent {
  /**
   * Returns an SVG icon corresponding to the skill category index.
   * @param {number} index
   * @returns {string} SVG string
   */
  static getCategoryIcon(index) {
    const icons = [
      // 0: Backend & Frontend (Code brackets)
      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      // 1: Frameworks & Libraries (App window)
      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
      // 2: Database Engineering (Database cylinder)
      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
      // 3: DevOps & Infra (Server / container)
      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`,
      // 4: Integration & Security (Shield / lock)
      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`
    ];
    return icons[index % icons.length];
  }

  /**
   * @param {Object} config - Full portfolio configuration
   * @returns {string} HTML markup
   */
  static render(config) {
    const { skills } = config;

    const cardsHtml = skills
      .map((skillGroup, idx) => {
        const icon = SkillsComponent.getCategoryIcon(idx);
        const tagsHtml = skillGroup.tags
          .map((tag) => `<span class="skill-tag">${tag}</span>`)
          .join('');

        return `
        <div class="skill-card">
          <div class="skill-head">
            <div class="skill-icon-box">
              ${icon}
            </div>
            <div class="skill-title">
              <span class="lang-en">${skillGroup.title.en}</span>
              <span class="lang-id">${skillGroup.title.id}</span>
            </div>
          </div>
          <div class="skill-tags">
            ${tagsHtml}
          </div>
        </div>
      `;
      })
      .join('');

    return `
    <section class="section" id="skill">
      <div class="wrap">
        <div class="sec-head">
          <div>
            <div class="sec-eyebrow"><span class="lang-en">Skills</span><span class="lang-id">Keahlian</span></div>
            <div class="sec-title"><span class="lang-en">Technical Expertise.</span><span class="lang-id">Keahlian Teknis.</span></div>
          </div>
          <p class="sec-desc">
            <span class="lang-en">Proven multi-stack capabilities across backend systems, database tuning, infrastructure, and secure integrations.</span>
            <span class="lang-id">Kemampuan multi-stack teruji melintasi sistem backend, optimasi database, infrastruktur, dan integrasi aman.</span>
          </p>
        </div>

        <div class="skills-grid">
          ${cardsHtml}
        </div>
      </div>
    </section>
    `;
  }
}
