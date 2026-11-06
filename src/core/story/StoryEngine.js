/**
 * StoryEngine (3D Scrollytelling & Chapter Coordinator)
 * Links browser scroll position to the 3D CameraRig, drives the
 * procedural explosion teardown of the computational core,
 * and updates floating HUD telemetry metrics.
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
  }

  initScrollListener() {
    this.onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      this.targetProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    };

    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();
  }

  scrollToChapter(index) {
    if (this.chapterSections[index]) {
      this.chapterSections[index].scrollIntoView({ behavior: 'smooth' });
    }
  }

  update() {
    // 1. Inertial dampening for camera scroll
    this.currentProgress += (this.targetProgress - this.currentProgress) * 0.08;

    // 2. Drive Camera Rig
    if (this.scene && this.scene.cameraRig) {
      this.scene.cameraRig.setScrollProgress(this.currentProgress);
    }

    // 3. Update top laser progress bar
    if (this.progressBar) {
      this.progressBar.style.width = `${this.currentProgress * 100}%`;
    }

    // 4. Calculate current chapter index (0 to 5)
    const totalChapters = 6;
    const activeIndex = Math.min(
      Math.floor(this.currentProgress * totalChapters + 0.15),
      totalChapters - 1
    );

    if (activeIndex !== this.currentChapterIndex) {
      this.currentChapterIndex = activeIndex;
      this.onChapterChange(activeIndex);
    }

    // 5. Procedural explosion factor on the Core
    if (this.scene && this.scene.core) {
      // Dynamic explosion based on story arc
      let factor = 0.0;
      if (this.currentProgress > 0.15 && this.currentProgress < 0.45) {
        factor = (this.currentProgress - 0.15) / 0.3; // Opens up in About
      } else if (this.currentProgress >= 0.45 && this.currentProgress < 0.75) {
        factor = 1.0 - (this.currentProgress - 0.45) / 0.3 * 0.4; // Slightly contracts for Skills
      } else if (this.currentProgress >= 0.75) {
        factor = 0.2; // Stable orbit for Education & Contact
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
  }
}

export default StoryEngine;
