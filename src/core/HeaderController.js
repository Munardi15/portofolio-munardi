import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * ============================================================================
 * HeaderController (Sticky Header, Mobile Drawer & Active Link Observer)
 * ============================================================================
 * Tracks scroll positions to toggle sticky header styling, manages the mobile
 * navigation drawer, coordinates back-to-top scrolling, and highlights active links.
 * 
 * @class HeaderController
 */
export class HeaderController {
  /**
   * @param {Object} [options]
   * @param {ScrollManager} [options.scrollManager]
   */
  constructor(options = {}) {
    this.scrollManager = options.scrollManager || null;
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.triggers = [];
    this._listeners = [];
  }

  init() {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const backToTopBtn = document.getElementById('backToTopBtn');

    // 1. Sticky Header Background
    if (header) {
      const scrollHandler = () => {
        if (window.scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      };
      window.addEventListener('scroll', scrollHandler, { passive: true });
      this._listeners.push({ el: window, event: 'scroll', handler: scrollHandler });
    }

    // 2. Mobile Menu Toggle
    if (mobileBtn && mobileNav) {
      const toggleMobile = () => {
        mobileNav.classList.toggle('open');
      };
      mobileBtn.addEventListener('click', toggleMobile);
      this._listeners.push({ el: mobileBtn, event: 'click', handler: toggleMobile });

      const closeLinks = mobileNav.querySelectorAll('.nav-link');
      closeLinks.forEach((link) => {
        const linkHandler = () => mobileNav.classList.remove('open');
        link.addEventListener('click', linkHandler);
        this._listeners.push({ el: link, event: 'click', handler: linkHandler });
      });
    }

    // 3. Active Link Highlight with ScrollTrigger
    sections.forEach((sec) => {
      const trigger = ScrollTrigger.create({
        trigger: sec,
        start: 'top 45%',
        end: 'bottom 45%',
        onToggle: (self) => {
          if (self.isActive) {
            const id = sec.getAttribute('id');
            navLinks.forEach((l) => {
              const href = l.getAttribute('href');
              if (href === `#${id}`) {
                l.classList.add('active');
              } else {
                l.classList.remove('active');
              }
            });
          }
        }
      });
      this.triggers.push(trigger);
    });

    // 4. Back To Top Smooth Scroll
    if (backToTopBtn) {
      const topHandler = (e) => {
        e.preventDefault();
        if (this.scrollManager) {
          this.scrollManager.scrollTo(0);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
      backToTopBtn.addEventListener('click', topHandler);
      this._listeners.push({ el: backToTopBtn, event: 'click', handler: topHandler });
    }
  }

  destroy() {
    this.triggers.forEach((t) => t.kill());
    this.triggers = [];
    this._listeners.forEach(({ el, event, handler }) => {
      el.removeEventListener(event, handler);
    });
    this._listeners = [];
  }
}
