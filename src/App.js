import Lenis from 'lenis';
import { portfolioConfig } from './config/portfolio.config.js';

// Core 3D, Audio, and Interaction Systems
import { AudioSynth } from './core/audio/AudioSynth.js';
import { UniverseScene } from './core/3d/UniverseScene.js';
import { StoryEngine } from './core/story/StoryEngine.js';
import { KeyboardController } from './core/interaction/KeyboardController.js';

// UI & Services
import { UniverseHUD } from './ui/UniverseHUD.js';
import { Navbar } from './ui/Navbar.js';
import { ChapterViews } from './ui/ChapterViews.js';
import { ProjectDrawerManager } from './ui/ProjectDrawerManager.js';
import { LocalizationService } from './core/services/LocalizationService.js';
import { ModalService } from './core/services/ModalService.js';

/**
 * App (Master Orchestrator of The Engineering Universe)
 * Bridges the Three.js spatial canvas, Lenis inertial scroll,
 * GSAP story timelines, HUD controls, keyboard navigation, and verified portfolio content.
 */
export class App {
  constructor(mountPoint = '#app', config = portfolioConfig) {
    this.mountPoint = typeof mountPoint === 'string'
      ? document.querySelector(mountPoint)
      : mountPoint;
    this.config = config;

    // Subsystem references
    this.audioSynth = null;
    this.scene = null;
    this.storyEngine = null;
    this.lenis = null;
    this.drawerManager = null;
    this.localization = null;
    this.modalService = null;
    this.keyboard = null;
  }

  async init() {
    this.renderDOM();
    this.initServices();
    this.init3DScene();
    this.initScrollEngine();
    this.bindHUDControls();
    this.bindSmoothNavigation();
    this.initKeyboardControls();
  }

  renderDOM() {
    if (!this.mountPoint) return;

    this.mountPoint.innerHTML = `
      <!-- Fixed WebGL Universe Canvas Stage -->
      <div class="webgl-universe-stage" id="webglUniverseStage" aria-hidden="true"></div>

      <!-- Spatial HUD Command Deck -->
      <div class="hud-overlay-container" id="hudContainer">
        ${UniverseHUD.render(this.config)}
      </div>

      <!-- Navigation Header -->
      ${Navbar.render(this.config)}

      <!-- Main Spatial Narrative Scroll Chapters -->
      <main class="spatial-story-flow" id="storyFlow">
        ${ChapterViews.render(this.config)}
      </main>

      <!-- Minimalist Spatial Footer -->
      <footer class="universe-footer">
        <div class="footer-container">
          <p>&copy; ${new Date().getFullYear()} Munardi. All rights reserved &bull; Engineered with Three.js &amp; Clean Architecture</p>
          <a href="#hero" class="btn-back-to-top" aria-label="Return to top">
            <span>&uarr; Top of Universe</span>
          </a>
        </div>
      </footer>
    `;
  }

  initServices() {
    // 1. Audio Synthesizer
    this.audioSynth = new AudioSynth();

    // 2. Localization Service (EN / ID)
    this.localization = new LocalizationService();
    this.localization.init();

    // 3. Project Accordion Drawers
    this.drawerManager = new ProjectDrawerManager(this.audioSynth);
    this.drawerManager.init();

    // 4. Modal Blueprint Inspector
    this.modalService = new ModalService(this.config, this.audioSynth);
  }

  init3DScene() {
    const stage = document.getElementById('webglUniverseStage');
    if (!stage) return;

    try {
      this.scene = new UniverseScene(stage, this.audioSynth);
      this.scene.start();

      // Connect 3D raycast click to Blueprint Modal
      if (this.scene.raycaster) {
        this.scene.raycaster.onClick((obj) => {
          this.modalService.openWithObject(obj);
        });
      }
    } catch (e) {
      console.warn('3D WebGL scene initialization fallback:', e);
      document.body.classList.add('webgl-fallback');
    }
  }

  initScrollEngine() {
    // 1. Story Engine linking scroll to 3D camera
    if (this.scene) {
      this.storyEngine = new StoryEngine(this.scene, this.config);

      const progressBar = document.getElementById('scrollLaserBar');
      const hudSectorPill = document.getElementById('hudSectorPill');
      const hudStepDots = Array.from(document.querySelectorAll('.hud-waypoint-dot'));
      const chapterSections = Array.from(document.querySelectorAll('.chapter-section'));

      this.storyEngine.bindHUD({
        progressBar,
        hudSectorPill,
        hudStepDots,
        chapterSections
      });
    }

    // 2. Smooth Inertial Scroll with Lenis
    try {
      this.lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false
      });

      // Synchronize Lenis interpolated scroll events directly with StoryEngine
      this.lenis.on('scroll', (e) => {
        if (this.storyEngine) {
          this.storyEngine.onScrollDirect(e.scroll, e.limit);
        }
      });

      window.addEventListener('pageHeightChanged', () => {
        if (this.lenis) this.lenis.resize();
      });

      const raf = (time) => {
        this.lenis.raf(time);
        if (this.storyEngine) this.storyEngine.update();
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    } catch (e) {
      console.warn('Lenis scroll init:', e);
    }
  }

  bindHUDControls() {
    // 1. 3D Mode Toggle (Cinematic vs Free Orbit)
    const btnMode = document.getElementById('btnToggle3DMode');
    const labelMode = document.getElementById('labelModeToggle');
    if (btnMode && this.scene && this.scene.cameraRig) {
      btnMode.addEventListener('click', () => {
        const newMode = this.scene.cameraRig.toggleMode();
        if (newMode === 'FREE_ORBIT') {
          btnMode.classList.add('active');
          if (labelMode) labelMode.textContent = 'EXIT 3D';
          document.body.classList.add('orbit-mode-active');
        } else {
          btnMode.classList.remove('active');
          if (labelMode) labelMode.textContent = '3D VIEW';
          document.body.classList.remove('orbit-mode-active');
        }
        if (this.audioSynth) this.audioSynth.playSelect();
      });
    }

    // 2. Audio SFX Toggle
    const btnAudio = document.getElementById('btnToggleAudio');
    const iconOff = document.getElementById('iconAudioOff');
    const iconOn = document.getElementById('iconAudioOn');

    if (btnAudio && this.audioSynth) {
      btnAudio.addEventListener('click', () => {
        const enabled = this.audioSynth.toggle();
        if (enabled) {
          btnAudio.classList.add('active');
          if (iconOff) iconOff.style.display = 'none';
          if (iconOn) iconOn.style.display = 'inline-block';
        } else {
          btnAudio.classList.remove('active');
          if (iconOff) iconOff.style.display = 'inline-block';
          if (iconOn) iconOn.style.display = 'none';
        }
      });
    }

    // 4. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        const open = mobileDrawer.classList.toggle('open');
        mobileBtn.setAttribute('aria-expanded', String(open));
        if (this.audioSynth) this.audioSynth.playHover();
      });

      // Close mobile drawer on link click
      mobileDrawer.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('open');
          mobileBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  bindSmoothNavigation() {
    const hashLinks = document.querySelectorAll('a[href^="#"]');
    hashLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || href === '#' || href.length <= 1) return;

        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();

          // Exit orbit mode if active so camera flows smoothly along timeline
          if (document.body.classList.contains('orbit-mode-active')) {
            const btnMode = document.getElementById('btnToggle3DMode');
            if (btnMode) btnMode.click();
          }

          // Close mobile menu if open
          const mobileDrawer = document.getElementById('mobileDrawer');
          const mobileBtn = document.getElementById('mobileMenuBtn');
          if (mobileDrawer && mobileDrawer.classList.contains('open')) {
            mobileDrawer.classList.remove('open');
            if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
          }

          if (this.lenis) {
            this.lenis.scrollTo(targetEl, {
              offset: -40,
              duration: 1.4,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
          } else {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }

          if (this.audioSynth) {
            this.audioSynth.playSelect();
          }

          // Update active link in navbar
          document.querySelectorAll('.navbar-links .nav-link').forEach((nl) => {
            if (nl.getAttribute('href') === href) {
              nl.classList.add('active');
            } else {
              nl.classList.remove('active');
            }
          });
        }
      });
    });
  }

  initKeyboardControls() {
    this.keyboard = new KeyboardController(this);
    this.keyboard.init();
  }

  destroy() {
    if (this.keyboard) this.keyboard.destroy();
    if (this.scene) this.scene.destroy();
    if (this.storyEngine) this.storyEngine.destroy();
    if (this.lenis) this.lenis.destroy();
  }
}

export default App;
