/**
 * ============================================================================
 * EducationComponent
 * ============================================================================
 * Renders the Academic Background section with degrees, institutions,
 * GPA achievements, and graduation honors.
 */
export class EducationComponent {
  /**
   * @param {Object} config - Full portfolio configuration
   * @returns {string} HTML markup
   */
  static render(config) {
    const { education } = config;

    const eduCardsHtml = education
      .map((edu, idx) => {
        const isCumLaude = edu.details.some((d) => d.includes('Cum Laude'));
        const badgeClass = isCumLaude ? 'edu-badge-cumlaude' : 'edu-year';

        const iconSvg = idx === 0
          ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`
          : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`;

        return `
        <div class="edu-card">
          <div class="edu-card-top">
            <div class="edu-icon-seal">
              ${iconSvg}
            </div>
            <div>
              <h3 class="edu-degree">
                <span class="lang-en">${edu.degree.en}</span>
                <span class="lang-id">${edu.degree.id}</span>
              </h3>
              <div class="edu-school">${edu.school}</div>
            </div>
          </div>
          <div class="edu-footer">
            <span class="edu-year">${edu.details[0]}</span>
            <span class="${badgeClass}">${edu.details[1]}</span>
          </div>
        </div>
      `;
      })
      .join('');

    return `
    <section class="section" id="education">
      <div class="wrap">
        <div class="sec-head">
          <div>
            <div class="sec-eyebrow"><span class="lang-en">Education</span><span class="lang-id">Pendidikan</span></div>
            <div class="sec-title"><span class="lang-en">Academic Background.</span><span class="lang-id">Latar Belakang Akademis.</span></div>
          </div>
          <p class="sec-desc">
            <span class="lang-en">Formal education grounded in information systems engineering, computational logic, and administrative systems.</span>
            <span class="lang-id">Pendidikan formal berlandaskan rekayasa sistem informasi, logika komputasi, dan sistem administrasi.</span>
          </p>
        </div>

        <div class="edu-grid">
          ${eduCardsHtml}
        </div>
      </div>
    </section>
    `;
  }
}
