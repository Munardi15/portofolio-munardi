/**
 * ModalService (3D Architectural Blueprint Inspector)
 * Opens an inspectable holographic blueprint drawer when any 3D
 * station or core object is clicked in the universe.
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

    this.modalEl.innerHTML = `
      <div class="blueprint-modal-dialog" role="dialog" aria-modal="true">
        <div class="blueprint-modal-header">
          <div class="blueprint-modal-tag">
            <span class="status-pulse-dot"></span>
            <span id="modalSectorTag">3D ARCHITECTURAL BLUEPRINT</span>
          </div>
          <button class="blueprint-modal-close" id="btnCloseBlueprintModal" aria-label="Close modal">&times;</button>
        </div>
        <div class="blueprint-modal-body" id="modalBlueprintBody">
          <!-- Dynamically populated -->
        </div>
      </div>
    `;

    document.body.appendChild(this.modalEl);

    // Event listeners
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
    const company = data.company || 'Spatial Node';
    const title = data.title || 'Architectural Component';
    const desc = data.desc || 'Active microservice cluster';

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
              <h4 class="bp-list-head">VERIFIED ARCHITECTURAL DELIVERIES</h4>
              ${projectsHtml}
            </div>`
          : ''
      }
    `;

    this.modalEl.classList.add('active');
    this.modalEl.setAttribute('aria-hidden', 'false');
    if (this.audioSynth) this.audioSynth.playSelect();
  }

  close() {
    this.modalEl.classList.remove('active');
    this.modalEl.setAttribute('aria-hidden', 'true');
    if (this.audioSynth) this.audioSynth.playHover();
  }
}

export default ModalService;
