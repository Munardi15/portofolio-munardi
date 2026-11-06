import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { portfolioConfig } from './config/portfolio.config.js';

// Core Services & Controllers (OOP)
import { ScrollytellingController } from './core/ScrollytellingController.js';
import { ScrollManager } from './core/ScrollManager.js';
import { TimelineController } from './core/TimelineController.js';
import { AccordionManager } from './core/AccordionManager.js';
import { LocalizationService } from './core/LocalizationService.js';
import { ThemeService } from './core/ThemeService.js';
import { HeaderController } from './core/HeaderController.js';

// MVC View Components
import { NavbarComponent } from './components/NavbarComponent.js';
import { HeroComponent } from './components/HeroComponent.js';
import { MarqueeComponent } from './components/MarqueeComponent.js';
import { AboutComponent } from './components/AboutComponent.js';
import { SkillsComponent } from './components/SkillsComponent.js';
import { ExperienceComponent } from './components/ExperienceComponent.js';
import { EducationComponent } from './components/EducationComponent.js';
import { ContactComponent } from './components/ContactComponent.js';
import { FooterComponent } from './components/FooterComponent.js';

gsap.registerPlugin(ScrollTrigger);

/**
 * ============================================================================
 * PortfolioApp (Main Application Controller & Lifecycle Coordinator)
 * ============================================================================
 * Orchestrates the Model (portfolio.config.js), Views (components),
 * and Controllers (3D engine, inertial scroll, laser timeline, accordions,
 * localization, theme).
 * 
 * @class PortfolioApp
 */
export class PortfolioApp {
  /**
   * @param {Object} [options]
   * @param {Object} [options.config] - Custom configuration override
   * @param {string|HTMLElement} [options.mountPoint='#app'] - Target root container
   */
  constructor(options = {}) {
    this.config = options.config || portfolioConfig;
    this.mountPoint = typeof options.mountPoint === 'string'
      ? document.querySelector(options.mountPoint)
      : (options.mountPoint || document.getElementById('app'));

    // Service references
    this.themeService = null;
    this.localizationService = null;
    this.scrollManager = null;
    this.scrollytellingController = null;
    this.timelineController = null;
    this.accordionManager = null;
    this.headerController = null;
  }

  /**
   * Bootstraps the entire application.
   */
  init() {
    this.render();
    this.initServices();
    this.initLifecycle();
  }

  /**
   * Compiles and mounts all view components into the DOM.
   */
  render() {
    if (!this.mountPoint) {
      console.error('Mount point not found. Check if #app exists in index.html');
      return;
    }

    const html = `
      ${NavbarComponent.render(this.config)}
      <main>
        ${HeroComponent.render(this.config)}
        ${MarqueeComponent.render(this.config)}
        ${AboutComponent.render(this.config)}
        ${SkillsComponent.render(this.config)}
        ${ExperienceComponent.render(this.config)}
        ${EducationComponent.render(this.config)}
        ${ContactComponent.render(this.config)}
      </main>
      ${FooterComponent.render(this.config)}
    `;

    this.mountPoint.innerHTML = html;
  }

  /**
   * Initializes all OOP controllers and services.
   */
  initServices() {
    // 1. Theme Manager (Dark / Light)
    this.themeService = new ThemeService();
    this.themeService.init();

    // 2. Localization Manager (EN / ID)
    this.localizationService = new LocalizationService();
    this.localizationService.init();

    // 3. Lenis Inertial Scroll Engine
    this.scrollManager = new ScrollManager();
    this.scrollManager.init();

    // 4. Cinematic Scrollytelling Engine (Scroll-Driven Hero, Bento, Skills, Experience)
    this.scrollytellingController = new ScrollytellingController();
    this.scrollytellingController.init();

    // 5. Work Experience Timeline Laser & 50% Center Node Illumination
    this.timelineController = new TimelineController();
    this.timelineController.init();

    // 6. Interactive Project Accordion Drawers (GSAP Tweens)
    this.accordionManager = new AccordionManager({
      getLanguage: () => this.localizationService.getLanguage(),
      onDrawerOpen: (drawer) => {
        if (this.scrollytellingController) {
          this.scrollytellingController.animateProjectFlowSteps(drawer);
        }
      }
    });
    this.accordionManager.init();

    // Update accordion button label on language toggle
    this.localizationService.onLanguageChange(() => {
      this.accordionManager.updateToggleAllLabel();
    });

    // 7. Header Scroll, Mobile Drawer & Active Section Links
    this.headerController = new HeaderController({
      scrollManager: this.scrollManager
    });
    this.headerController.init();
  }

  /**
   * Post-mount layout settlement & ScrollTrigger refresh.
   */
  initLifecycle() {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
  }

  /**
   * Cleanly destroys and unmounts all listeners and controllers.
   */
  destroy() {
    if (this.scrollytellingController) this.scrollytellingController.destroy();
    if (this.scrollManager) this.scrollManager.destroy();
    if (this.timelineController) this.timelineController.destroy();
    if (this.accordionManager) this.accordionManager.destroy();
    if (this.headerController) this.headerController.destroy();
  }
}

export default PortfolioApp;
