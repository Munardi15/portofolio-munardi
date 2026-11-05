import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * ============================================================================
 * TimelineController (Experience Laser Rail & Focal Node Illumination)
 * ============================================================================
 * Controls the vertical laser progress rail in the experience section and
 * illuminates company nodes when they enter the eye's central focal zone (50%).
 * 
 * @class TimelineController
 */
export class TimelineController {
  /**
   * @param {Object} [options]
   * @param {string} [options.laserSelector='#timelineLaser']
   * @param {string} [options.wrapperSelector='.timeline-wrapper']
   * @param {string} [options.blockSelector='.exp-block']
   */
  constructor(options = {}) {
    this.laserSelector = options.laserSelector || '#timelineLaser';
    this.wrapperSelector = options.wrapperSelector || '.timeline-wrapper';
    this.blockSelector = options.blockSelector || '.exp-block';
    this.triggers = [];
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  init() {
    const laser = document.querySelector(this.laserSelector);
    const wrapper = document.querySelector(this.wrapperSelector);
    const blocks = document.querySelectorAll(this.blockSelector);

    if (!laser || !wrapper) return;

    if (!this.prefersReducedMotion) {
      // 1. Aligns laser head with the vertical center of the user's viewport (50%)
      const laserTrigger = ScrollTrigger.create({
        trigger: wrapper,
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 0.2,
        onUpdate: (self) => {
          const pct = Math.min(Math.max(self.progress * 100, 0), 100);
          laser.style.height = `${pct}%`;
        }
      });
      this.triggers.push(laserTrigger);

      // 2. Illuminates the specific job node currently at the eye's focal center
      blocks.forEach((block) => {
        const blockTrigger = ScrollTrigger.create({
          trigger: block,
          start: 'top 60%',
          end: 'bottom 25%',
          onEnter: () => block.classList.add('active'),
          onEnterBack: () => block.classList.add('active'),
          onLeave: () => block.classList.remove('active'),
          onLeaveBack: () => block.classList.remove('active'),
        });
        this.triggers.push(blockTrigger);
      });
    } else {
      laser.style.height = '100%';
      blocks.forEach((b) => b.classList.add('active'));
    }
  }

  refresh() {
    ScrollTrigger.refresh();
  }

  destroy() {
    this.triggers.forEach((t) => t.kill());
    this.triggers = [];
  }
}
