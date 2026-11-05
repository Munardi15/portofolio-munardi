/**
 * ============================================================================
 * ExperienceComponent
 * ============================================================================
 * Renders the Work History & Interactive Projects Timeline section.
 * Includes the GSAP laser progress rail, active center node markers,
 * accordion project drawers, and comprehensive project case studies.
 */
export class ExperienceComponent {
  /**
   * Renders a single project case study card.
   * @param {Object} project
   * @returns {string} HTML markup
   */
  static renderProjectCase(project) {
    const techPillsHtml = project.tags
      .map((tag) => `<span>${tag}</span>`)
      .join('');

    const flowNodesHtml = project.flow && project.flow.length > 0
      ? project.flow
          .map((step, idx) => {
            const isLast = idx === project.flow.length - 1;
            return `
              <div class="flow-step">
                <span class="flow-node"><span class="flow-step-num">${idx + 1}</span>${step}</span>
                ${isLast ? '' : '<span class="flow-arr" aria-hidden="true">&rarr;</span>'}
              </div>
            `;
          })
          .join('')
      : '';

    const flowSectionHtml = flowNodesHtml
      ? `
      <div class="proj-field">
        <div class="proj-label">
          <span class="lang-en">FLOW</span><span class="lang-id">ALUR</span>
          <span class="flow-scroll-hint"><span class="lang-en">‹ Swipe ↔ ›</span><span class="lang-id">‹ Geser ↔ ›</span></span>
        </div>
        <div class="proj-val">
          <div class="flow-diagram">
            ${flowNodesHtml}
          </div>
        </div>
      </div>
    `
      : '';

    return `
    <div class="proj-case">
      <div class="proj-case-header">
        <span class="proj-code-name">${project.codeName}</span>
        <div class="tech-pills">${techPillsHtml}</div>
      </div>
      <div class="proj-meta-grid">
        <div class="proj-field">
          <div class="proj-label"><span class="lang-en">PROBLEM</span><span class="lang-id">MASALAH</span></div>
          <div class="proj-val">
            <span class="lang-en">${project.problem.en}</span>
            <span class="lang-id">${project.problem.id}</span>
          </div>
        </div>
        ${flowSectionHtml}
        <div class="proj-field">
          <div class="proj-label"><span class="lang-en">ROLE</span><span class="lang-id">PERAN</span></div>
          <div class="proj-val">
            <span class="lang-en">${project.role.en}</span>
            <span class="lang-id">${project.role.id}</span>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  /**
   * Renders a company block with its interactive project accordion drawer.
   * @param {Object} exp
   * @returns {string} HTML markup
   */
  static renderCompanyBlock(exp) {
    const projectsHtml = exp.projects
      .map((p) => ExperienceComponent.renderProjectCase(p))
      .join('');

    return `
    <div class="exp-block" id="${exp.id}">
      <div class="exp-node">${exp.node}</div>
      <div class="exp-card">
        <div class="exp-card-header">
          <div>
            <h3 class="exp-company-title">${exp.company}</h3>
            <div class="exp-role-title">
              <span class="lang-en">${exp.role.en}</span>
              <span class="lang-id">${exp.role.id}</span>
            </div>
          </div>
          <span class="exp-date-pill">
            <span class="lang-en">${exp.period.en}</span>
            <span class="lang-id">${exp.period.id}</span>
          </span>
        </div>

        <div class="acc-toggle-wrap">
          <button class="acc-btn" aria-expanded="false" aria-controls="drawer-${exp.node}">
            <div class="acc-btn-left">
              <span>
                <span class="lang-en">${exp.drawerTitle.en}</span>
                <span class="lang-id">${exp.drawerTitle.id}</span>
              </span>
              <span class="acc-count-chip">${exp.projectCount} ${exp.projectCount === 1 ? 'Project' : 'Projects'}</span>
            </div>
            <svg class="acc-chevron" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
          </button>

          <div class="acc-drawer" id="drawer-${exp.node}">
            <div class="acc-drawer-inner">
              ${projectsHtml}
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  /**
   * @param {Object} config - Full portfolio configuration
   * @returns {string} HTML markup
   */
  static render(config) {
    const { experiences } = config;

    const companyBlocksHtml = experiences
      .map((exp) => ExperienceComponent.renderCompanyBlock(exp))
      .join('');

    return `
    <section class="section timeline-section-wrap" id="experience">
      <div class="wrap">
        <div class="timeline-header-row">
          <div class="sec-head" style="margin-bottom:0;">
            <div>
              <div class="sec-eyebrow"><span class="lang-en">Experience</span><span class="lang-id">Pengalaman</span></div>
              <div class="sec-title"><span class="lang-en">Work History &amp; Projects.</span><span class="lang-id">Riwayat Kerja &amp; Proyek.</span></div>
            </div>
            <p class="sec-desc">
              <span class="lang-en">Direct impact across 5 enterprise institutions. Expand any drawer to inspect architectural problems, pipeline flows, and specific roles.</span>
              <span class="lang-id">Dampak langsung di 5 institusi enterprise. Buka drawer untuk melihat masalah arsitektur, diagram alur pipeline, dan kontribusi nyata.</span>
            </p>
          </div>

          <div class="timeline-actions">
            <button id="toggleAllProjects" class="btn btn-secondary btn-sm" aria-label="Toggle all projects accordion drawers">
              <span class="lang-en">Expand All Projects</span>
              <span class="lang-id">Buka Semua Proyek</span>
            </button>
          </div>
        </div>

        <div class="timeline-wrapper">
          <div class="timeline-rail">
            <div class="timeline-laser" id="timelineLaser"></div>
          </div>

          ${companyBlocksHtml}
        </div>
      </div>
    </section>
    `;
  }
}
