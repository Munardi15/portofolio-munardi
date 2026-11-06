/**
 * KeyboardController (Spatial & Narrative Keyboard Navigation)
 * Inspired by creative 3D portfolios (Bruno Simon, etc.),
 * enables power users and recruiters to navigate the 3D Universe via keyboard.
 *
 * Supported keys:
 * - '1' - '6': Direct jump to Chapters (Hero, About, Skills, Experience, Education, Contact)
 * - 'i' / 'I': Toggle 3D Free Inspect (360° Orbit)
 * - 'm' / 'M': Toggle Audio SFX (Mute / Unmute)
 * - 'l' / 'L': Toggle Language (EN / ID)
 * - 'e' / 'E': Toggle Core Teardown Explode
 * - '?' / 'h': Toggle Keyboard Shortcuts HUD Legend
 * - 'Escape': Close modals or exit Free Orbit mode
 */
export class KeyboardController {
  constructor(app) {
    this.app = app;
    this.chapters = ['hero', 'about', 'skill', 'experience', 'education', 'contact'];
    this.isExploded = false;
    this.listener = null;
  }

  init() {
    this.listener = this.handleKeyDown.bind(this);
    window.addEventListener('keydown', this.listener);
  }

  handleKeyDown(e) {
    // Ignore key presses inside input fields, textareas, or contenteditables
    if (typeof document === 'undefined') return;
    const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
    if (activeTag === 'input' || activeTag === 'textarea' || document.activeElement.isContentEditable) {
      return;
    }

    const key = e.key;

    // 1. Chapters 1-6 Navigation
    if (['1', '2', '3', '4', '5', '6'].includes(key)) {
      e.preventDefault();
      const index = parseInt(key, 10) - 1;
      this.navigateToChapter(index);
      return;
    }

    // 2. 'I' or 'i': Toggle 3D Free Inspect Mode
    if (key === 'i' || key === 'I') {
      e.preventDefault();
      const btn = document.getElementById('btnToggle3DMode');
      if (btn) btn.click();
      return;
    }

    // 3. 'M' or 'm': Toggle Audio SFX
    if (key === 'm' || key === 'M') {
      e.preventDefault();
      const btn = document.getElementById('btnToggleAudio');
      if (btn) btn.click();
      return;
    }

    // 4. 'L' or 'l': Toggle Language
    if (key === 'l' || key === 'L') {
      e.preventDefault();
      const btn = document.getElementById('langToggleBtn');
      if (btn) btn.click();
      return;
    }

    // 5. 'E' or 'e': Toggle Core Teardown Explode
    if (key === 'e' || key === 'E') {
      e.preventDefault();
      this.toggleExplode();
      return;
    }

    // 6. 'Escape': Exit Orbit mode if active
    if (key === 'Escape') {
      if (document.body.classList.contains('orbit-mode-active')) {
        const btn = document.getElementById('btnToggle3DMode');
        if (btn) btn.click();
      }
    }
  }

  navigateToChapter(index) {
    if (typeof document === 'undefined') return;
    if (index < 0 || index >= this.chapters.length) return;
    const targetId = this.chapters[index];
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      if (this.app.lenis) {
        this.app.lenis.scrollTo(targetEl, { offset: -20, duration: 1.4 });
      } else {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }

      if (this.app.audioSynth) {
        this.app.audioSynth.playSelect();
      }
    }
  }

  toggleExplode() {
    this.isExploded = !this.isExploded;
    const targetValue = this.isExploded ? 0.75 : 0;
    const slider = typeof document !== 'undefined' ? document.getElementById('sliderExplodeCore') : null;
    if (slider) {
      slider.value = String(targetValue * 100);
    }
    if (this.app.scene && this.app.scene.core) {
      this.app.scene.core.setExplosionFactor(targetValue);
      if (this.app.audioSynth && this.app.audioSynth.playSweep) {
        this.app.audioSynth.playSweep();
      }
    }
  }

  destroy() {
    if (this.listener) {
      window.removeEventListener('keydown', this.listener);
      this.listener = null;
    }
  }
}

export default KeyboardController;
