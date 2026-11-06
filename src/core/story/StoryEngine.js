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

    this.sectionAnchors = sectionIds.map((id, idx) => {
      if (idx === 0) return 0;
      if (idx === sectionIds.length - 1) return maxScroll;
      const el = document.getElementById(id);
      if (!el) return (maxScroll * idx) / (sectionIds.length - 1);
      
      const rect = el.getBoundingClientRect();
      const absoluteTop = scrollY + rect.top;
      // Focal anchor: when section is comfortably positioned in viewport
      return Math.min(Math.max(absoluteTop - 60, 0), maxScroll);
    });
  }

  calculateProgressFromScroll(scrollY) {
    if (!this.sectionAnchors || this.sectionAnchors.length < 2) {
      this.updateSectionAnchors();
    }

    const maxScroll = this.maxScroll || Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1
    );
    const clamped = Math.min(Math.max(scrollY, 0), maxScroll);

    if (clamped <= 0) return 0.0;
    if (clamped >= maxScroll) return 1.0;

    const anchors = this.sectionAnchors;
    const n = anchors.length; // 6

    for (let i = 0; i < n - 1; i++) {
      const a = anchors[i];
      const b = anchors[i + 1];
      if (clamped >= a && clamped <= b) {
        const seg = b > a ? (clamped - a) / (b - a) : 0;
        return (i + seg) / (n - 1);
      }
    }

    return clamped >= anchors[n - 1] ? 1.0 : 0.0;
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

    // Update telemetry sector name in HUD
    if (this.hudSectorPill) {
      const sectorNames = [
        'SECTOR 01 // DEVELOPER STUDIO & MISSION CONTROL',
        'SECTOR 02 // WORKSPACE ARCHIVE (ABOUT)',
        'SECTOR 03 // DUAL-SCREEN TOOLKIT (SKILLS)',
        'SECTOR 04 // 42U SERVER RACK (EXPERIENCE)',
        'SECTOR 05 // ACADEMIC SPIRE (EDUCATION)',
        'SECTOR 06 // TRANSMISSION ARRAY (CONTACT)'
      ];
      this.hudSectorPill.textContent = sectorNames[index] || `SECTOR 0${index + 1}`;
    }
  }

  destroy() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('pageHeightChanged', this.onResize);
  }
}

export default StoryEngine;
