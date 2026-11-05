import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * ============================================================================
 * ScrollManager (Lenis Inertial Scroll Engine)
 * ============================================================================
 * Coordinates butter-smooth inertial scrolling and synchronizes with
 * the GSAP ticker and ScrollTrigger updates.
 * 
 * @class ScrollManager
 */
export class ScrollManager {
  constructor() {
    this.lenis = null;
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.rafId = null;
    this._tickerCallback = null;
  }

  /**
   * Initializes Lenis inertial scroll engine.
   */
  init() {
    if (this.prefersReducedMotion) return;

    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    const raf = (time) => {
      if (this.lenis) {
        this.lenis.raf(time);
        this.rafId = requestAnimationFrame(raf);
      }
    };
    this.rafId = requestAnimationFrame(raf);

    this.lenis.on('scroll', ScrollTrigger.update);

    this._tickerCallback = (time) => {
      if (this.lenis) {
        this.lenis.raf(time * 1000);
      }
    };
    gsap.ticker.add(this._tickerCallback);
    gsap.ticker.lagSmoothing(0, 0);
  }

  /**
   * Smoothly scrolls to target element or position.
   * @param {string|number|HTMLElement} target
   * @param {Object} [options]
   */
  scrollTo(target, options = {}) {
    if (this.lenis && !this.prefersReducedMotion) {
      this.lenis.scrollTo(target, { duration: 1.2, ...options });
    } else {
      if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'smooth' });
      } else if (typeof target === 'string') {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this._tickerCallback) {
      gsap.ticker.remove(this._tickerCallback);
    }
    if (this.lenis) {
      this.lenis.destroy();
      this.lenis = null;
    }
  }
}
