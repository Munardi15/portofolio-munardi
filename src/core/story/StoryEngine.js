/**
 * StoryEngine (3D Scrollytelling & Chapter Coordinator)
 * Links browser scroll position to the 3D CameraRig, drives the
 * procedural explosion teardown of the computational core,
 * and updates floating HUD telemetry metrics with DOM-synchronized precision.
 */
export class StoryEngine {
  constructor(universeScene, config) {
    this.scene = universeScene;
    this.config = config;

    this.currentProgress = 0;
    this.targetProgress = 0;
    this.currentChapterIndex = 0;

    // HUD Elements
    this.progressBar = null;
    this.hudSectorPill = null;
    this.hudStepDots = [];
    this.chapterSections = [];

    // Dynamic section scroll anchors
    this.sectionAnchors = [];
    this.maxScroll = 1;

    this.initScrollListener();
  }

  bindHUD({ progressBar, hudSectorPill, hudStepDots = [], chapterSections = [] }) {
    this.progressBar = progressBar;
    this.hudSectorPill = hudSectorPill;
    this.hudStepDots = hudStepDots;
    this.chapterSections = chapterSections;

    // Click on HUD step dots jumps to chapter
    this.hudStepDots.forEach((dot, idx) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        this.scrollToChapter(idx);
      });
    });

    this.updateSectionAnchors();
  }

  updateSectionAnchors() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const maxScroll = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1
    );
    this.maxScroll = maxScroll;

    const sectionIds = ['hero', 'about', 'skill', 'experience', 'education', 'contact'];
    const scrollY = window.scrollY || window.pageYOffset || 0;

    this.sectionsData = sectionIds.map((id, idx) => {
      const el = document.getElementById(id);
      if (!el) {
        return {
          id,
          top: (maxScroll * idx) / (sectionIds.length - 1),
          height: maxScroll / (sectionIds.length - 1)
        };
      }
      const rect = el.getBoundingClientRect();
      const top = scrollY + rect.top;
      const height = el.offsetHeight || rect.height;
      return { id, top, height };
    });

    // Backward-compatible sectionAnchors array
    this.sectionAnchors = this.sectionsData.map((s) => s.top);
  }

  calculateProgressFromScroll(scrollY) {
    if (!this.sectionsData || this.sectionsData.length < 6) {
      this.updateSectionAnchors();
    }

    const maxScroll = this.maxScroll || Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1
    );
    const clamped = Math.min(Math.max(scrollY, 0), maxScroll);

    if (clamped <= 0) return 0.0;
    if (clamped >= maxScroll) return 1.0;

    const s = this.sectionsData;
    if (!s || s.length < 6) return clamped / maxScroll;

    const hero = s[0];
    const about = s[1];
    const skill = s[2];
    const exp = s[3];
    const edu = s[4];
    const contact = s[5];

    // Helper: Hermite smoothstep for organic flight transitions between stations
    const smoothstep = (edge0, edge1, x) => {
      if (edge1 <= edge0) return 0;
      const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
      return t * t * (3 - 2 * t);
    };

    // 1. HERO STATION (0.0): Terminal Cockpit directly facing the code monitor
    // Locked at 0.0 while in Hero, then flies smoothly to About over final 380px before About
    const heroTransStart = Math.max(about.top - 380, 200);
    if (clamped < heroTransStart) {
      return 0.0;
    }
    if (clamped < about.top) {
      const frac = smoothstep(heroTransStart, about.top, clamped);
      return 0.0 + frac * 0.20;
    }

    // 2. ABOUT STATION (0.20): Workspace Overview (Desk, Chair, Lamp, Laptop)
    // Locked at 0.20 while in About, then flies smoothly to Skill over final 380px before Skill
    const aboutTransStart = Math.max(skill.top - 380, about.top + 150);
    if (clamped < aboutTransStart) {
      return 0.20;
    }
    if (clamped < skill.top) {
      const frac = smoothstep(aboutTransStart, skill.top, clamped);
      return 0.20 + frac * 0.20;
    }

    // 3. SKILL STATION (0.40): Dual-Screen Terminal Toolkit
    // Locked at 0.40 while in Skill, then flies smoothly to Experience over final 380px before Experience
    const skillTransStart = Math.max(exp.top - 380, skill.top + 150);
    if (clamped < skillTransStart) {
      return 0.40;
    }
    if (clamped < exp.top) {
      const frac = smoothstep(skillTransStart, exp.top, clamped);
      return 0.40 + frac * 0.20;
    }

    // 4. EXPERIENCE STATION (0.60 -> 0.72): 42U Server Rack (BRI -> Hitachi -> OCBC -> KNusantara)
    // Tracks vertically down the server blades from Top Blade (0.60) to Bottom Blade (0.72)
    // Final 450px smoothly executes backward flight, 180° rotation to back wall, zooming into Diploma
    const expTransStart = Math.max(edu.top - 450, exp.top + 300);
    if (clamped < expTransStart) {
      const frac = (clamped - exp.top) / (expTransStart - exp.top);
      return 0.60 + frac * (0.72 - 0.60);
    }
    if (clamped < edu.top) {
      const frac = smoothstep(expTransStart, edu.top, clamped);
      return 0.72 + frac * (0.84 - 0.72);
    }

    // 5. EDUCATION STATION (0.84): FRAMED CUM LAUDE DIPLOMA (Mercu Buana, GPA 3.71, Gold Seal)!
    // Locked rock-solid at 0.84 while the user reads Education credentials!
    const eduTransStart = Math.max(contact.top - 350, edu.top + 200);
    if (clamped < eduTransStart) {
      return 0.84;
    }
    if (clamped < contact.top) {
      const frac = smoothstep(eduTransStart, contact.top, clamped);
      return 0.84 + frac * (1.00 - 0.84);
    }

    // 6. CONTACT STATION (1.00): Grand Panoramic Studio Pullback
    return 1.0;
  }

  onScrollDirect(scrollY, maxScroll) {
    if (maxScroll && maxScroll > 0) {
      this.maxScroll = maxScroll;
    }
    this.targetProgress = this.calculateProgressFromScroll(scrollY);
  }

  initScrollListener() {
    this.onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      this.targetProgress = this.calculateProgressFromScroll(scrollY);
    };

    this.onResize = () => {
      this.updateSectionAnchors();
      this.onScroll();
    };

    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onResize, { passive: true });
    window.addEventListener('pageHeightChanged', this.onResize);

    this.updateSectionAnchors();
    this.onScroll();
  }

  scrollToChapter(index) {
    if (this.chapterSections && this.chapterSections[index]) {
      this.chapterSections[index].scrollIntoView({ behavior: 'smooth' });
    }
  }

  detectActiveChapter() {
    if (!this.chapterSections || this.chapterSections.length === 0) return;

    const viewportFocal = window.innerHeight * 0.42;
    let foundIndex = -1;

    for (let i = 0; i < this.chapterSections.length; i++) {
      const sec = this.chapterSections[i];
      const rect = sec.getBoundingClientRect();
      if (rect.top <= viewportFocal && rect.bottom >= viewportFocal) {
        foundIndex = i;
        break;
      }
    }

    // Edge check: near top or bottom
    const maxScroll = this.maxScroll || 1;
    const scrollY = window.scrollY || window.pageYOffset || 0;
    if (maxScroll - scrollY < 80) {
      foundIndex = this.chapterSections.length - 1;
    } else if (scrollY < 60) {
      foundIndex = 0;
    }

    if (foundIndex !== -1 && foundIndex !== this.currentChapterIndex) {
      this.currentChapterIndex = foundIndex;
      this.onChapterChange(foundIndex);
    }
  }

  update() {
    // 1. Direct progress binding (Lenis already provides smooth interpolated scrolling,
    // avoiding sluggish double-inertial lag so CameraRig tracks sections instantly)
    this.currentProgress = this.targetProgress;

    // 2. Drive Camera Rig along full trajectory
    if (this.scene && this.scene.cameraRig) {
      this.scene.cameraRig.setScrollProgress(this.currentProgress);
    }

    // 3. Update top laser progress bar (0% to 100%)
    if (this.progressBar) {
      const pct = Math.min(100, Math.max(0, this.currentProgress * 100));
      this.progressBar.style.width = `${pct.toFixed(2)}%`;
    }

    // 4. Detect active chapter based on real viewport intersection
    this.detectActiveChapter();

    // 5. Procedural explosion & server blade slide across the full story arc
    if (this.scene && this.scene.core) {
      let factor = 0.0;
      if (this.currentProgress > 0.15 && this.currentProgress < 0.40) {
        factor = ((this.currentProgress - 0.15) / 0.25) * 0.25; // Opens up in About/Skill
      } else if (this.currentProgress >= 0.40 && this.currentProgress < 0.80) {
        // Active server rack inspection during Experience (pulses smoothly through all jobs)
        const expT = (this.currentProgress - 0.40) / 0.40;
        factor = 0.25 + Math.sin(expT * Math.PI) * 0.45;
      } else if (this.currentProgress >= 0.80) {
        // Settles smoothly for Education & Contact
        const restT = (this.currentProgress - 0.80) / 0.20;
        factor = 0.2 * (1.0 - restT * 0.8);
      }
      this.scene.core.setExplosionFactor(factor);
    }
  }

  onChapterChange(index) {
    // Update HUD step dots active state
    this.hudStepDots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Update navbar active link state
    const navHrefs = ['#hero', '#about', '#skill', '#experience', '#education', '#contact'];
    const activeHref = navHrefs[index];
    const navLinks = document.querySelectorAll('.navbar-links .nav-link');
    navLinks.forEach((nl) => {
      if (nl.getAttribute('href') === activeHref) {
        nl.classList.add('active');
      } else {
        nl.classList.remove('active');
      }
    });

    // Update telemetry 3D focus target in HUD
    const targetEl = document.getElementById('hudFocusTarget');
    const focusNames = [
      'TERMINAL COCKPIT // DEV WORKSTATION',
      'WORKSPACE ARCHIVE // DESK & HARDWARE',
      'DUAL-SCREEN TOOLKIT // GO & LINUX',
      '42U SERVER RACK // BRI BRIVA & BLADES',
      'ACADEMIC CREDENTIAL // MERCU BUANA CUM LAUDE',
      'STUDIO OVERVIEW // COMPLETE 3D PANORAMA'
    ];
    if (targetEl) {
      targetEl.textContent = focusNames[index] || `STATION 0${index + 1}`;
    } else if (this.hudSectorPill) {
      this.hudSectorPill.textContent = focusNames[index] || `STATION 0${index + 1}`;
    }
  }

  destroy() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('pageHeightChanged', this.onResize);
  }
}

export default StoryEngine;
