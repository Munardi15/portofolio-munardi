/**
 * ProjectDrawerManager (Interactive Accordion Controller)
 * Manages expanding and collapsing technical case-study drawers
 * across all employment milestones with keyboard accessibility.
 */
export class ProjectDrawerManager {
  constructor(audioSynth = null) {
    this.audioSynth = audioSynth;
    this.allExpanded = false;
  }

  init() {
    const toggles = document.querySelectorAll('.drawer-toggle-btn');
    toggles.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        this.toggleDrawer(btn, !expanded);
      });
    });

    const toggleAllBtn = document.getElementById('btnToggleAllExpDrawers');
    if (toggleAllBtn) {
      toggleAllBtn.addEventListener('click', () => {
        this.allExpanded = !this.allExpanded;
        toggles.forEach((btn) => this.toggleDrawer(btn, this.allExpanded));

        const enSpan = toggleAllBtn.querySelector('.lang-en');
        const idSpan = toggleAllBtn.querySelector('.lang-id');
        if (enSpan) enSpan.textContent = this.allExpanded ? 'Collapse All Projects' : 'Expand All Projects';
        if (idSpan) idSpan.textContent = this.allExpanded ? 'Tutup Semua Proyek' : 'Buka Semua Proyek';

        if (this.audioSynth) this.audioSynth.playSelect();
      });
    }
  }

  toggleDrawer(btn, expand) {
    btn.setAttribute('aria-expanded', String(expand));
    const drawerId = btn.getAttribute('aria-controls');
    const drawer = document.getElementById(drawerId);
    if (!drawer) return;

    if (expand) {
      drawer.classList.add('open');
      drawer.style.maxHeight = `${drawer.scrollHeight + 50}px`;
      if (this.audioSynth) this.audioSynth.playHover();
    } else {
      drawer.classList.remove('open');
      drawer.style.maxHeight = '0px';
    }
  }
}

export default ProjectDrawerManager;
