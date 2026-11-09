/**
 * ChapterViews (Holographic Glass Narrative Layer)
 * Compiles the 6 canonical portfolio chapters into floating, high-readability
 * glass panels seamlessly synchronized with the 3D Universe.
 */
export class ChapterViews {
  /**
   * Renders the complete 6 chapters.
   * @param {Object} config
   * @returns {string} HTML markup
   */
  static render(config) {
    return `
      ${this.renderHero(config)}
      ${this.renderAbout(config)}
      ${this.renderSkills(config)}
      ${this.renderExperience(config)}
      ${this.renderEducation(config)}
      ${this.renderContact(config)}
    `;
  }

  /* ==========================================================================
   * CHAPTER 01 — HERO / THE ENTRY POINT
   * ========================================================================== */
  static renderHero(config) {
    const { personal } = config;
    const cvPrimary = (personal.cvDownloads || []).find((c) => c.primary) || {
      file: './MUNARDI-CV_SoftwareEngineer.pdf'
    };

    return `
    <section class="chapter-section chapter-hero" id="hero" data-chapter="0">
      <div class="holographic-panel hero-panel">
        <div class="panel-eyebrow">
          <span class="status-indicator-dot"></span>
          <span class="lang-en">${personal.status.en}</span>
          <span class="lang-id">${personal.status.id}</span>
        </div>

        <h1 class="hero-name">
          Munardi<span class="accent-cyan">.</span>
        </h1>

        <div class="hero-role-headline">
          <span class="role-primary">${personal.rolePrimary}</span>
          ${personal.roleBadge ? `<span class="role-separator">&bull;</span><span class="role-sub">${personal.roleBadge}</span>` : ''}
        </div>

        <p class="hero-pitch">
          <span class="lang-en">${personal.pitch.en}</span>
          <span class="lang-id">${personal.pitch.id}</span>
        </p>

        <div class="hero-cta-deck">
          <a href="${cvPrimary.file}" download="MUNARDI-CV_SoftwareEngineer.pdf" class="btn btn-primary" id="heroDownloadCvBtn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span class="lang-en">Download CV (PDF)</span>
            <span class="lang-id">Unduh CV (PDF)</span>
          </a>

          <a href="#experience" class="btn btn-secondary">
            <span class="lang-en">Explore Career Journey &rarr;</span>
            <span class="lang-id">Jelajahi Riwayat Karier &rarr;</span>
          </a>

          <a href="${personal.contact.whatsappUrlEn}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost" id="heroWaDirectBtn">
            <span class="lang-en">WhatsApp Direct</span>
            <span class="lang-id">Hubungi WhatsApp</span>
          </a>
        </div>

        <div class="scroll-down-hint">
          <span class="scroll-mouse-icon">
            <span class="scroll-wheel"></span>
          </span>
          <span class="scroll-text">
            <span class="lang-en">Scroll to traverse technical systems &amp; experience</span>
            <span class="lang-id">Gulir untuk menelusuri sistem teknis &amp; pengalaman</span>
          </span>
        </div>
      </div>
    </section>
    `;
  }

  /* ==========================================================================
   * CHAPTER 02 — ABOUT / THE HUMAN BEHIND THE SYSTEM
   * ========================================================================== */
  static renderAbout(config) {
    const { about, stats } = config;

    const statsHtml = stats
      .map(
        (st) => `
        <div class="stat-capsule">
          <div class="stat-value">${st.value}</div>
          <div class="stat-label">
            <span class="lang-en">${st.label.en}</span>
            <span class="lang-id">${st.label.id}</span>
          </div>
        </div>
      `
      )
      .join('');

    const badgesHtml = about.badges
      .map((b) => `<span class="badge-tag">${b}</span>`)
      .join('');

    return `
    <section class="chapter-section chapter-about" id="about" data-chapter="1">
      <div class="holographic-panel about-panel">
        <div class="section-topline">
          <div class="section-tag">
            <span class="lang-en">${about.eyebrow.en}</span>
            <span class="lang-id">${about.eyebrow.id}</span>
          </div>
          <h2 class="section-heading">
            <span class="lang-en">${about.title.en}</span>
            <span class="lang-id">${about.title.id}</span>
          </h2>
        </div>

        <div class="about-narrative-box">
          <p class="about-text">
            <span class="lang-en">${about.narrative.en}</span>
            <span class="lang-id">${about.narrative.id}</span>
          </p>

          <div class="about-badges-deck">
            ${badgesHtml}
          </div>
        </div>

        <div class="stats-matrix-grid">
          ${statsHtml}
        </div>
      </div>
    </section>
    `;
  }

  /* ==========================================================================
   * CHAPTER 03 — SKILLS / THE ENGINEERING TOOLKIT
   * ========================================================================== */
  static renderSkills(config) {
    const { skills } = config;

    const skillCardsHtml = skills
      .map((group, idx) => {
        const tagsHtml = group.tags
          .map((tag) => `<span class="skill-chip">${tag}</span>`)
          .join('');

        return `
        <div class="skill-category-card">
          <div class="skill-cat-header">
            <span class="cat-num">0${idx + 1}</span>
            <h3 class="cat-title">
              <span class="lang-en">${group.title.en}</span>
              <span class="lang-id">${group.title.id}</span>
            </h3>
          </div>
          <div class="skill-chips-wrap">
            ${tagsHtml}
          </div>
        </div>
      `;
      })
      .join('');

    return `
    <section class="chapter-section chapter-skills" id="skill" data-chapter="2">
      <div class="holographic-panel skills-panel">
        <div class="section-topline">
          <div class="section-tag">
            <span class="lang-en">Technical Toolkit</span>
            <span class="lang-id">Keahlian &amp; Kapabilitas</span>
          </div>
          <h2 class="section-heading">
            <span class="lang-en">Architecture &amp; Tech Stack.</span>
            <span class="lang-id">Arsitektur &amp; Stack Teknologi.</span>
          </h2>
          <p class="section-subtitle">
            <span class="lang-en">Production-hardened across full-stack applications, database optimization, and high-reliability systems.</span>
            <span class="lang-id">Teruji di produksi untuk aplikasi full-stack, optimasi basis data, dan sistem dengan keandalan tinggi.</span>
          </p>
        </div>

        <div class="skills-cluster-grid">
          ${skillCardsHtml}
        </div>
      </div>
    </section>
    `;
  }

  /* ==========================================================================
   * CHAPTER 04 — EXPERIENCE / THE PROFESSIONAL JOURNEY
   * ========================================================================== */
  static renderExperience(config) {
    const { experiences } = config;

    const companyNodesHtml = experiences
      .map((exp) => {
        const projectsHtml = exp.projects
          .map((proj) => {
            const tagsHtml = proj.tags
              .map((t) => `<span class="tech-tag">${t}</span>`)
              .join('');

            const flowStepsHtml = proj.flow && proj.flow.length > 0
              ? proj.flow
                  .map((step, idx) => {
                    const isLast = idx === proj.flow.length - 1;
                    return `
                    <div class="flow-pill">
                      <span class="step-num">${idx + 1}</span>
                      <span class="step-txt">${step}</span>
                      ${isLast ? '' : '<span class="flow-arrow">&rarr;</span>'}
                    </div>
                  `;
                  })
                  .join('')
              : '';

            return `
            <div class="project-case-card">
              <div class="proj-header-row">
                <h4 class="proj-name">${proj.codeName}</h4>
                <div class="proj-tags">${tagsHtml}</div>
              </div>

              <div class="proj-body-grid">
                <div class="proj-prop-row">
                  <span class="prop-label"><span class="lang-en">PROBLEM</span><span class="lang-id">MASALAH</span></span>
                  <p class="prop-value">
                    <span class="lang-en">${proj.problem.en}</span>
                    <span class="lang-id">${proj.problem.id}</span>
                  </p>
                </div>

                ${
                  flowStepsHtml
                    ? `
                <div class="proj-prop-row">
                  <span class="prop-label"><span class="lang-en">PIPELINE FLOW</span><span class="lang-id">ALUR SISTEM</span></span>
                  <div class="flow-steps-rail">
                    ${flowStepsHtml}
                  </div>
                </div>
                `
                    : ''
                }

                <div class="proj-prop-row">
                  <span class="prop-label"><span class="lang-en">ROLE &amp; CONTRIBUTION</span><span class="lang-id">PERAN &amp; KONTRIBUSI</span></span>
                  <p class="prop-value">
                    <span class="lang-en">${proj.role.en}</span>
                    <span class="lang-id">${proj.role.id}</span>
                  </p>
                </div>
              </div>
            </div>
          `;
          })
          .join('');

        return `
        <div class="experience-milestone-node" id="${exp.id}">
          <div class="milestone-bullet">
            <span class="bullet-inner">${exp.node}</span>
          </div>

          <div class="milestone-card">
            <div class="milestone-header">
              <div>
                <h3 class="milestone-company">${exp.company}</h3>
                <div class="milestone-role">
                  <span class="lang-en">${exp.role.en}</span>
                  <span class="lang-id">${exp.role.id}</span>
                </div>
              </div>
              <span class="milestone-period">
                <span class="lang-en">${exp.period.en}</span>
                <span class="lang-id">${exp.period.id}</span>
              </span>
            </div>

            <!-- Expandable Drawer Toggle -->
            <div class="drawer-container">
              <button class="drawer-toggle-btn" aria-expanded="false" aria-controls="drawer-${exp.id}">
                <div class="drawer-toggle-main">
                  <div class="drawer-meta-row">
                    <span class="project-count-badge">
                      <span class="badge-dot"></span>
                      <span>${exp.projectCount} ${exp.projectCount === 1 ? 'Project' : 'Projects'}</span>
                    </span>
                    <span class="drawer-action-hint">
                      <span class="action-hint-open lang-en">View Case Studies</span>
                      <span class="action-hint-open lang-id">Lihat Studi Kasus</span>
                      <span class="action-hint-close lang-en">Hide Case Studies</span>
                      <span class="action-hint-close lang-id">Tutup Studi Kasus</span>
                    </span>
                  </div>
                  <div class="drawer-btn-title">
                    <span class="lang-en">${exp.drawerTitle.en}</span>
                    <span class="lang-id">${exp.drawerTitle.id}</span>
                  </div>
                </div>
                <div class="drawer-chevron-box">
                  <svg class="drawer-chevron" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
                </div>
              </button>

              <div class="drawer-body" id="drawer-${exp.id}">
                <div class="drawer-body-inner">
                  ${projectsHtml}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      })
      .join('');

    return `
    <section class="chapter-section chapter-experience" id="experience" data-chapter="3">
      <div class="holographic-panel experience-panel">
        <div class="section-topline-with-actions">
          <div>
            <div class="section-tag">
              <span class="lang-en">Experience &amp; Track Record</span>
              <span class="lang-id">Pengalaman &amp; Rekam Jejak</span>
            </div>
            <h2 class="section-heading">
              <span class="lang-en">The Professional Journey.</span>
              <span class="lang-id">Riwayat Rekayasa Profesional.</span>
            </h2>
            <p class="section-subtitle">
              <span class="lang-en">Ground-level engineering execution across 5 institutions and early foundational initiatives.</span>
              <span class="lang-id">Eksekusi teknis nyata di 5 institusi finansial dan inisiatif fondasi awal karier.</span>
            </p>
          </div>

          <button class="btn btn-secondary btn-sm" id="btnToggleAllExpDrawers">
            <span class="lang-en">Expand All Projects</span>
            <span class="lang-id">Buka Semua Proyek</span>
          </button>
        </div>

        <div class="experience-timeline-rail">
          <div class="laser-vertical-line" id="expLaserLine"></div>
          ${companyNodesHtml}
        </div>
      </div>
    </section>
    `;
  }

  /* ==========================================================================
   * CHAPTER 05 — EDUCATION / THE FOUNDATION
   * ========================================================================== */
  static renderEducation(config) {
    const { education } = config;

    const eduCardsHtml = education
      .map((edu) => {
        const isCumLaude = edu.details.some((d) => d.includes('Cum Laude'));
        const badgeClass = isCumLaude ? 'edu-pill-cumlaude' : 'edu-pill';

        return `
        <div class="education-card">
          <div class="edu-card-head">
            <div class="edu-seal-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div>
              <h3 class="edu-degree-title">
                <span class="lang-en">${edu.degree.en}</span>
                <span class="lang-id">${edu.degree.id}</span>
              </h3>
              <div class="edu-school-name">${edu.school}</div>
            </div>
          </div>
          <div class="edu-card-footer">
            <span class="edu-pill">${edu.details[0]}</span>
            <span class="${badgeClass}">${edu.details[1]}</span>
          </div>
        </div>
      `;
      })
      .join('');

    return `
    <section class="chapter-section chapter-education" id="education" data-chapter="4">
      <div class="holographic-panel education-panel">
        <div class="section-topline">
          <div class="section-tag">
            <span class="lang-en">Academic Foundations</span>
            <span class="lang-id">Fondasi Akademis</span>
          </div>
          <h2 class="section-heading">
            <span class="lang-en">Education &amp; Credentials.</span>
            <span class="lang-id">Pendidikan &amp; Kredensial.</span>
          </h2>
        </div>

        <div class="education-matrix-grid">
          ${eduCardsHtml}
        </div>
      </div>
    </section>
    `;
  }

  /* ==========================================================================
   * CHAPTER 06 — CONTACT / THE CONNECTION
   * ========================================================================== */
  static renderContact(config) {
    const { personal } = config;
    const { contact, cvDownloads } = personal;

    const cvButtonsHtml = cvDownloads
      .map((cv) => {
        const btnClass = cv.primary
          ? 'btn btn-primary btn-sm'
          : 'btn btn-secondary btn-sm';
        return `
        <a href="${cv.file}" download class="${btnClass}">
          <span>${cv.label}</span>
        </a>
      `;
      })
      .join('');

    return `
    <section class="chapter-section chapter-contact" id="contact" data-chapter="5">
      <div class="holographic-panel contact-panel">
        <div class="contact-deck-grid">
          <div class="contact-statement-col">
            <div class="section-tag">
              <span class="lang-en">Direct Contact &amp; Roles</span>
              <span class="lang-id">Kontak &amp; Peluang Kerja</span>
            </div>
            <h2 class="contact-hero-heading">
              <span class="lang-en">Open for Software <span class="accent-cyan">Engineering Roles.</span></span>
              <span class="lang-id">Terbuka untuk Peran <span class="accent-cyan">Software Engineer.</span></span>
            </h2>
            <p class="contact-subtext">
              <span class="lang-en">Available for Software Engineer roles, web &amp; API development, and system integration initiatives in Jakarta (Hybrid/Remote).</span>
              <span class="lang-id">Tersedia untuk peran Software Engineer, pengembangan web &amp; API, serta integrasi sistem di Jakarta (Hybrid/Remote).</span>
            </p>

            <div class="direct-beacon-box">
              <div class="beacon-row">
                <span class="status-indicator-dot"></span>
                <span>STATUS: AVAILABLE FOR IMMEDIATE INTERVIEW</span>
              </div>
              <div class="beacon-row-sub">
                <span>LOCATION: ${personal.location.en}</span>
              </div>
            </div>
          </div>

          <div class="contact-channels-col">
            <!-- WhatsApp -->
            <a href="${contact.whatsappUrlEn}" target="_blank" rel="noopener noreferrer" class="contact-link-pill" id="contactWaBtn">
              <div class="pill-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </div>
              <div class="pill-info">
                <span class="pill-channel">WhatsApp</span>
                <span class="pill-val">${contact.whatsapp}</span>
              </div>
            </a>

            <!-- LinkedIn -->
            <a href="${contact.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-link-pill" id="contactLinkedInBtn">
              <div class="pill-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div class="pill-info">
                <span class="pill-channel">LinkedIn</span>
                <span class="pill-val">${contact.linkedinHandle}</span>
              </div>
            </a>

            <!-- Email -->
            <a href="mailto:${contact.email}" class="contact-link-pill" id="contactEmailBtn">
              <div class="pill-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div class="pill-info">
                <span class="pill-channel">Email</span>
                <span class="pill-val">${contact.email}</span>
              </div>
            </a>

            <!-- CV Download Deck -->
            <div class="cv-verified-card">
              <div class="cv-card-title">
                <span class="lang-en">Download Verified Curriculum Vitae</span>
                <span class="lang-id">Unduh Curriculum Vitae Terverifikasi</span>
              </div>
              <div class="cv-buttons-row">
                ${cvButtonsHtml}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

export default ChapterViews;
