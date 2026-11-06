import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * ============================================================================
 * AccordionManager (Interactive Project Drawers with Adaptive GSAP Tweens)
 * ============================================================================
 * Manages the collapsible project drawers under each company card.
 * Uses adaptive GSAP tweens (power3.out / power3.inOut) to eliminate CSS max-height
 * jitter, and cascades project cases with a subtle stagger.
 * 
 * @class AccordionManager
 */
export class AccordionManager {
  /**
   * @param {Object} [options]
   * @param {string} [options.blockSelector='.exp-block']
   * @param {string} [options.toggleAllSelector='#toggleAllProjects']
   * @param {Function} [options.getLanguage]
   */
  constructor(options = {}) {
    this.blockSelector = options.blockSelector || '.exp-block';
    this.toggleAllSelector = options.toggleAllSelector || '#toggleAllProjects';
    this.getLanguage = options.getLanguage || (() => document.body.getAttribute('data-lang') || 'en');
    this.allExpanded = false;
    this._listeners = [];
  }

  init() {
    const blocks = document.querySelectorAll(this.blockSelector);
    const toggleAllBtn = document.querySelector(this.toggleAllSelector);

    blocks.forEach((block) => {
      const btn = block.querySelector('.acc-btn');
      if (!btn) return;

      const clickHandler = () => {
        const isOpen = block.classList.contains('open');
        this.setDrawerState(block, !isOpen);
      };

      btn.addEventListener('click', clickHandler);
      this._listeners.push({ el: btn, event: 'click', handler: clickHandler });
    });

    if (toggleAllBtn) {
      const toggleAllHandler = () => {
        this.allExpanded = !this.allExpanded;

        blocks.forEach((block) => {
          this.setDrawerState(block, this.allExpanded);
        });

        this.updateToggleAllLabel(toggleAllBtn);

        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 500);
      };

      toggleAllBtn.addEventListener('click', toggleAllHandler);
      this._listeners.push({ el: toggleAllBtn, event: 'click', handler: toggleAllHandler });
    }
  }

  /**
   * Smoothly animates an accordion drawer open or closed.
   * @param {HTMLElement} block
   * @param {boolean} isOpen
   */
  setDrawerState(block, isOpen) {
    const btn = block.querySelector('.acc-btn');
    const drawer = block.querySelector('.acc-drawer');
    if (!btn || !drawer) return;

    gsap.killTweensOf(drawer);

    if (isOpen) {
      block.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      drawer.style.display = 'block';

      // Measure natural height for adaptive, smooth animation
      gsap.set(drawer, { height: 'auto' });
      const naturalHeight = drawer.offsetHeight;
      gsap.set(drawer, { height: 0, opacity: 0.5 });

      const dur = Math.min(Math.max(naturalHeight / 2400, 0.42), 0.72);

      gsap.to(drawer, {
        height: naturalHeight,
        opacity: 1,
        duration: dur,
        ease: 'power3.out',
        onUpdate: () => ScrollTrigger.update(),
        onComplete: () => {
          drawer.style.height = 'auto';
          ScrollTrigger.refresh();
        }
      });

      // Stagger project cases with subtle elevation
      const cases = drawer.querySelectorAll('.proj-case');
      if (cases.length) {
        gsap.fromTo(cases,
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, stagger: 0.02, ease: 'power2.out', delay: 0.06 }
        );
      }

      // Sequential flow steps illumination (Left -> Right architecture walkthrough)
      const flowSteps = drawer.querySelectorAll('.flow-step');
      if (flowSteps.length) {
        gsap.fromTo(flowSteps,
          { opacity: 0.25, x: -6 },
          { opacity: 1, x: 0, duration: 0.35, stagger: 0.035, ease: 'power2.out', delay: 0.12 }
        );
      }

      if (typeof this.onDrawerOpen === 'function') {
        this.onDrawerOpen(drawer);
      }
    } else {
      block.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');

      const currentHeight = drawer.offsetHeight;
      const dur = Math.min(Math.max(currentHeight / 2600, 0.35), 0.55);

      gsap.to(drawer, {
        height: 0,
        opacity: 0.2,
        duration: dur,
        ease: 'power3.inOut',
        onUpdate: () => ScrollTrigger.update(),
        onComplete: () => {
          drawer.style.display = 'none';
          drawer.style.height = '0px';
          ScrollTrigger.refresh();
        }
      });
    }
  }

  updateToggleAllLabel(btn) {
    if (!btn) btn = document.querySelector(this.toggleAllSelector);
    if (!btn) return;

    const lang = this.getLanguage();
    const hasOpenBlocks = document.querySelector(`${this.blockSelector}.open`) !== null;

    if (hasOpenBlocks) {
      btn.innerHTML = lang === 'en'
        ? '<span>Collapse All Projects</span>'
        : '<span>Tutup Semua Proyek</span>';
    } else {
      btn.innerHTML = lang === 'en'
        ? '<span>Expand All Projects</span>'
        : '<span>Buka Semua Proyek</span>';
    }
  }

  destroy() {
    this._listeners.forEach(({ el, event, handler }) => {
      el.removeEventListener(event, handler);
    });
    this._listeners = [];
  }
}
