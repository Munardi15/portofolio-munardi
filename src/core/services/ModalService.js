/**
 * ModalService (Project Technical Specification Inspector)
 * Opens an inspectable modal detailing system architecture, project
 * workflows, and technical specs when any 3D station or server blade is clicked.
 */
export class ModalService {
  constructor(config, audioSynth = null) {
    this.config = config;
    this.audioSynth = audioSynth;
    this.modalEl = null;

    this.initModalDOM();
  }

  initModalDOM() {
    this.modalEl = document.createElement('div');
    this.modalEl.className = 'blueprint-modal-backdrop';
    this.modalEl.id = 'blueprintModal';
    this.modalEl.setAttribute('aria-hidden', 'true');
    this.modalEl.setAttribute('data-lenis-prevent', 'true');

    this.modalEl.innerHTML = `
      <div class="blueprint-modal-dialog" role="dialog" aria-modal="true" data-lenis-prevent="true">
        <div class="blueprint-modal-header">
          <div class="blueprint-modal-tag">
            <span class="status-pulse-dot"></span>
            <span id="modalSectorTag">
              <span class="lang-en">PROJECT TECHNICAL SPECIFICATION</span>
              <span class="lang-id">SPESIFIKASI TEKNIS &amp; ALUR SISTEM</span>
            </span>
          </div>
          <button class="blueprint-modal-close" id="btnCloseBlueprintModal" aria-label="Close modal">&times;</button>
        </div>
        <div class="blueprint-modal-body" id="modalBlueprintBody">
          <!-- Dynamically populated -->
        </div>
      </div>
    `;

    document.body.appendChild(this.modalEl);

    // Prevent wheel/touch events inside dialog from bubbling to global smooth scroll
    const dialog = this.modalEl.querySelector('.blueprint-modal-dialog');
    if (dialog) {
      dialog.addEventListener('wheel', (e) => {
        e.stopPropagation();
      }, { passive: true });
      dialog.addEventListener('touchmove', (e) => {
        e.stopPropagation();
      }, { passive: true });
    }

    // Event listeners for close
    this.modalEl.querySelector('#btnCloseBlueprintModal').addEventListener('click', () => {
      this.close();
    });

    this.modalEl.addEventListener('click', (e) => {
      if (e.target === this.modalEl) this.close();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalEl.classList.contains('active')) {
        this.close();
      }
    });
  }

  openWithObject(obj) {
    const data = obj.userData || {};
    const company = data.company || 'Engineering Node';
    const title = data.title || 'System Component';
    const desc = data.desc || 'Active production service workflow';

    // Find matching experience in config
    const matchingExp = (this.config.experiences || []).find((e) =>
      e.company.toLowerCase().includes(company.toLowerCase().split(' ')[0])
    );

    let projectsHtml = '';
    if (matchingExp && matchingExp.projects) {
      projectsHtml = matchingExp.projects
        .map((p) => {
          const flowPills = (p.flow || [])
            .map(
              (f, i) =>
                `<span class="flow-pill-mini">${i + 1}. ${f}</span>`
            )
            .join(' &rarr; ');

          return `
          <div class="blueprint-proj-item">
            <div class="bp-proj-name">${p.codeName}</div>
            <p class="bp-proj-desc">${p.role.en}</p>
            ${flowPills ? `<div class="bp-flow-row">${flowPills}</div>` : ''}
          </div>
        `;
        })
        .join('');
    }

    const body = document.getElementById('modalBlueprintBody');
    body.innerHTML = `
      <h3 class="blueprint-title">${title}</h3>
      <div class="blueprint-company-badge">${company}</div>
      <p class="blueprint-desc">${desc}</p>
      ${
        projectsHtml
          ? `<div class="blueprint-projects-list">
              <h4 class="bp-list-head">
                <span class="lang-en">KEY PROJECTS &amp; TECHNICAL FLOW</span>
                <span class="lang-id">PROYEK TERVERIFIKASI &amp; ALUR KERJA</span>
              </h4>
              ${projectsHtml}
            </div>`
          : ''
      }
    `;

    // Stop global Lenis smooth scroll so the modal dialog can scroll freely
    if (typeof window !== 'undefined' && window.app && window.app.lenis) {
      window.app.lenis.stop();
    }
    document.body.classList.add('blueprint-modal-open');

    // Reset dialog scroll position to top
    const dialog = this.modalEl.querySelector('.blueprint-modal-dialog');
    if (dialog) dialog.scrollTop = 0;

    this.modalEl.classList.add('active');
    this.modalEl.setAttribute('aria-hidden', 'false');
    if (this.audioSynth) this.audioSynth.playSelect();
  }

  close() {
    this.modalEl.classList.remove('active');
    this.modalEl.setAttribute('aria-hidden', 'true');

    // Resume global Lenis smooth scroll
    if (typeof window !== 'undefined' && window.app && window.app.lenis) {
      window.app.lenis.start();
    }
    document.body.classList.remove('blueprint-modal-open');

    if (this.audioSynth) this.audioSynth.playHover();
  }
}

export default ModalService;
