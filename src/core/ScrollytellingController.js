import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * ============================================================================
 * ScrollytellingController (Cinematic Scroll Storytelling Engine)
 * ============================================================================
 * Coordinates the scroll-driven storytelling across all 6 sections:
 * - Hero exit camera pullback (scale 1.0 -> 0.94 + fade)
 * - About Bento Grid focal pop & verified metrics count-up (05+, 13+, 3.71, 20+)
 * - Skills staggered architecture cards (scale 0.96 -> 1.00)
 * - Experience laser progress rail & active focal node zoom (scale 1.02)
 * - Sequential project dataflow illumination
 * - Full reduced-motion respect & zero layout shift (CLS 0)
 *
 * @class ScrollytellingController
 */
export class ScrollytellingController {
  constructor(options = {}) {
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.triggers = [];
    this.tweens = [];
    this.hasCountedUp = false;
  }

  /**
   * Initializes all cinematic scroll-driven storytelling triggers.
   */
  init() {
    if (this.prefersReducedMotion) {
      this._initReducedMotion();
      return;
    }

    this._initHeroPullback();
    this._initAboutBentoAndCounters();
    this._initSkillsCards();
    this._initExperienceTimeline();
    this._initEducationAndContact();
  }

  /**
   * Hero Exit Transition: Camera Pullback & Opacity Fade
   */
  _initHeroPullback() {
    const hero = document.getElementById('hero');
    const heroLayout = document.querySelector('.hero-layout');
    if (!hero || !heroLayout) return;

    const heroTrigger = ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: 'bottom 25%',
      scrub: 0.6,
      onUpdate: (self) => {
        const p = self.progress;
        const scale = 1.0 - p * 0.06; // 1.0 -> 0.94
        const opacity = Math.max(1.0 - p * 0.85, 0.15); // 1.0 -> 0.15
        const yOffset = p * 40; // Subtle parallax drop
        heroLayout.style.transform = `scale3d(${scale.toFixed(4)}, ${scale.toFixed(4)}, 1) translate3d(0, ${yOffset.toFixed(1)}px, 0)`;
        heroLayout.style.opacity = opacity.toFixed(3);
      }
    });

    this.triggers.push(heroTrigger);
  }

  /**
   * About Section: Bento Grid Subtle Focal Pop & Real Number Count-Up
   */
  _initAboutBentoAndCounters() {
    const aboutSection = document.getElementById('about');
    const bentoCards = document.querySelectorAll('.about-bento-grid .bento-card');
    const statCards = document.querySelectorAll('.stat-card');
    if (!aboutSection) return;

    // 1. Bento Card Subtle Focal Entrance
    if (bentoCards.length) {
      const bentoTween = gsap.fromTo(bentoCards,
        { scale: 0.94, opacity: 0.35 },
        {
          scale: 1.0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-bento-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
      this.tweens.push(bentoTween);
    }

    // 2. Verified Metrics Dynamic Count-Up
    // Targets: 05+ (Institutions), 13+ (BRI Pipelines), 3.71 (GPA), 20+ (Projects)
    const statNumbers = document.querySelectorAll('.stat-num');
    if (statNumbers.length) {
      const counterTrigger = ScrollTrigger.create({
        trigger: '.about-stats-grid',
        start: 'top 85%',
        once: true,
        onEnter: () => {
          if (this.hasCountedUp) return;
          this.hasCountedUp = true;

          statNumbers.forEach((el) => {
            const rawText = el.textContent.trim();
            
            if (rawText.includes('3.71')) {
              // GPA decimal counter
              const obj = { val: 0.0 };
              gsap.to(obj, {
                val: 3.71,
                duration: 1.3,
                ease: 'power2.out',
                onUpdate: () => {
                  el.textContent = obj.val.toFixed(2);
                }
              });
            } else if (rawText.includes('05+') || rawText.includes('5+')) {
              const obj = { val: 0 };
              gsap.to(obj, {
                val: 5,
                duration: 1.2,
                ease: 'power2.out',
                onUpdate: () => {
                  const n = Math.floor(obj.val);
                  el.textContent = `${n < 10 ? '0' + n : n}+`;
                }
              });
            } else if (rawText.includes('13+')) {
              const obj = { val: 0 };
              gsap.to(obj, {
                val: 13,
                duration: 1.2,
                ease: 'power2.out',
                onUpdate: () => {
                  el.textContent = `${Math.floor(obj.val)}+`;
                }
              });
            } else if (rawText.includes('20+')) {
              const obj = { val: 0 };
              gsap.to(obj, {
                val: 20,
                duration: 1.2,
                ease: 'power2.out',
                onUpdate: () => {
                  el.textContent = `${Math.floor(obj.val)}+`;
                }
              });
            }
          });
        }
      });
      this.triggers.push(counterTrigger);
    }
  }

  /**
   * Skills Section: Staggered Architecture Cards Entrance
   */
  _initSkillsCards() {
    const skillCards = document.querySelectorAll('.skill-card');
    if (!skillCards.length) return;

    const skillsTween = gsap.fromTo(skillCards,
      { y: 24, scale: 0.96, opacity: 0.4 },
      {
        y: 0,
        scale: 1.0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
    this.tweens.push(skillsTween);
  }

  /**
   * Experience Section: Laser Progress Rail & Active Node Focal Zoom
   */
  _initExperienceTimeline() {
    const laser = document.querySelector('#timelineLaser');
    const wrapper = document.querySelector('.timeline-wrapper');
    const blocks = document.querySelectorAll('.exp-block');

    if (!laser || !wrapper) return;

    // 1. Laser beam tracks vertical focal scroll position
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

    // 2. Active focal zoom on the company node at focal eye height (50% center)
    blocks.forEach((block) => {
      const blockTrigger = ScrollTrigger.create({
        trigger: block,
        start: 'top 60%',
        end: 'bottom 25%',
        onEnter: () => this._activateFocalBlock(block),
        onEnterBack: () => this._activateFocalBlock(block),
        onLeave: () => this._deactivateFocalBlock(block),
        onLeaveBack: () => this._deactivateFocalBlock(block)
      });
      this.triggers.push(blockTrigger);
    });
  }

  _activateFocalBlock(activeBlock) {
    activeBlock.classList.add('active', 'focal-in');
    activeBlock.classList.remove('focal-dim');
  }

  _deactivateFocalBlock(block) {
    block.classList.remove('active', 'focal-in');
    block.classList.add('focal-dim');
  }

  /**
   * Education & Contact: Cinematic Section Transitions
   */
  _initEducationAndContact() {
    const eduCards = document.querySelectorAll('.edu-card');
    if (eduCards.length) {
      const eduTween = gsap.fromTo(eduCards,
        { y: 20, scale: 0.96, opacity: 0.5 },
        {
          y: 0,
          scale: 1.0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#education',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
      this.tweens.push(eduTween);
    }

    const contactDeck = document.querySelector('.contact-deck');
    if (contactDeck) {
      const contactTween = gsap.fromTo(contactDeck,
        { scale: 0.96, opacity: 0.6 },
        {
          scale: 1.0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#contact',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
      this.tweens.push(contactTween);
    }
  }

  /**
   * Cascading Sequential Flow Step Lighting Animation for Project Case Studies
   * Called whenever an accordion drawer is expanded.
   * @param {HTMLElement} drawerElement
   */
  animateProjectFlowSteps(drawerElement) {
    if (this.prefersReducedMotion || !drawerElement) return;

    const flowSteps = drawerElement.querySelectorAll('.flow-step');
    if (!flowSteps.length) return;

    gsap.killTweensOf(flowSteps);
    gsap.fromTo(flowSteps,
      { opacity: 0.25, x: -6 },
      {
        opacity: 1,
        x: 0,
        duration: 0.35,
        stagger: 0.04,
        ease: 'power2.out',
        delay: 0.1
      }
    );
  }

  /**
   * Safe Reduced Motion Fallback (WCAG AAA)
   */
  _initReducedMotion() {
    const heroLayout = document.querySelector('.hero-layout');
    if (heroLayout) {
      heroLayout.style.transform = 'none';
      heroLayout.style.opacity = '1';
    }

    const laser = document.querySelector('#timelineLaser');
    if (laser) {
      laser.style.height = '100%';
    }

    const blocks = document.querySelectorAll('.exp-block');
    blocks.forEach((b) => b.classList.add('active'));
  }

  /**
   * Refreshes all active ScrollTriggers on dynamic DOM updates.
   */
  refresh() {
    ScrollTrigger.refresh();
  }

  /**
   * Cleanly destroys and unmounts all triggers and tweens.
   */
  destroy() {
    this.triggers.forEach((t) => t.kill());
    this.triggers = [];

    this.tweens.forEach((tw) => tw.kill());
    this.tweens = [];
  }
}

export default ScrollytellingController;
