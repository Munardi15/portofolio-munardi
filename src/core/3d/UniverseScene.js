import * as THREE from 'three';
import { StudioEnvironment } from './studio/StudioEnvironment.js';
import { CameraRig } from './CameraRig.js';
import { RaycastController } from './RaycastController.js';

/**
 * UniverseScene (Master 3D WebGL Architectural Environment)
 * Coordinates the 3D Developer Studio & Mission-Control Server Room,
 * soft PCF shadow maps, interactive raycasting, and camera transitions.
 */
export class UniverseScene {
  /**
   * Detects WebGL 1.0 or 2.0 availability in current runtime environment.
   */
  static isWebGLAvailable() {
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl') || canvas.getContext('webgl2'))
      );
    } catch {
      return false;
    }
  }

  constructor(container, audioSynth = null) {
    this.container = container;
    this.audioSynth = audioSynth;

    this.scene = null;
    this.camera = null;
    this.renderer = null;

    // Subsystems
    this.studio = null;
    this.cameraRig = null;
    this.raycaster = null;

    // Core proxy for backward compatibility with teardown slider
    this.core = {
      setExplosionFactor: (factor) => {
        if (this.studio) this.studio.setExplosionFactor(factor);
      }
    };

    // Accessibility & Motion settings
    this.prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Clock & RAF state
    this.lastTime = typeof performance !== 'undefined' ? performance.now() : Date.now();
    this.elapsedTime = 0;
    this.rafId = null;
    this.isRunning = false;
    this.isTabVisible = true;
    this.isWebGLFallback = false;

    this.init();
  }

  init() {
    // 0. Graceful WebGL Capability Check
    if (!UniverseScene.isWebGLAvailable()) {
      console.warn('WebGL is unavailable in this environment. Activating high-fidelity 2D architectural fallback.');
      this.initFallbackMode();
      return;
    }

    try {
      // 1. Scene with atmospheric studio background & depth fog
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x06090e); // Deep Obsidian Void
      this.scene.fog = new THREE.FogExp2(0x06090e, 0.025);

      // 2. Camera
      const aspect = this.container.clientWidth / this.container.clientHeight || 1;
      this.camera = new THREE.PerspectiveCamera(42, aspect, 0.1, 100);
      this.camera.position.set(4.8, 5.8, 8.2);

      // 3. Renderer with soft shadow maps and hardware tone mapping
      this.renderer = new THREE.WebGLRenderer({
        powerPreference: 'high-performance',
        antialias: true,
        alpha: false
      });
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.15;

      // Studio PCF Soft Shadow Mapping (Bruno Simon Quality)
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFShadowMap;

      this.container.appendChild(this.renderer.domElement);

      // 4. Instantiate Developer Studio & Server Room
      this.studio = new StudioEnvironment(this.scene);

      // 5. Camera Rig & Raycast Controller
      this.cameraRig = new CameraRig(this.camera, this.renderer.domElement);
      this.raycaster = new RaycastController(
        this.camera,
        this.renderer.domElement,
        this.audioSynth
      );

      // Register interactive server blades
      this.raycaster.setInteractiveObjects(this.studio.getInteractiveObjects());

      // Raycast hover response
      this.raycaster.onHover((obj, isHovered) => {
        this.studio.setHoveredObject(obj, isHovered);
      });

      // 6. Event Listeners
      this.onResize = this.handleResize.bind(this);
      window.addEventListener('resize', this.onResize);

      document.addEventListener('visibilitychange', () => {
        this.isTabVisible = !document.hidden;
        if (this.isTabVisible && this.isRunning) {
          this.lastTime = performance.now();
        }
      });
    } catch (e) {
      console.warn('WebGL initialization failed:', e);
      this.initFallbackMode();
    }
  }

  /**
   * Initializes high-fidelity 2D fallback mode when WebGL is unsupported.
   */
  initFallbackMode() {
    this.isWebGLFallback = true;
    if (this.container) {
      this.container.innerHTML = `
        <div class="webgl-fallback-stage" role="region" aria-label="WebGL 2D Fallback Telemetry">
          <div class="fallback-cyber-grid"></div>
          <div class="fallback-core-graphic">
            <div class="fallback-radar-ring outer"></div>
            <div class="fallback-radar-ring mid"></div>
            <div class="fallback-radar-ring inner"></div>
            <div class="fallback-radar-center"></div>
          </div>
          <div class="fallback-status-pill">
            <span class="fallback-pulse-dot"></span> 2D ARCHITECTURAL TELEMETRY &bull; ACCESSIBILITY FALLBACK ACTIVE
          </div>
        </div>
      `;
    }

    // Mock CameraRig
    this.cameraRig = {
      mode: 'CINEMATIC',
      setTargetWaypoint: () => {},
      toggleMode: () => 'CINEMATIC',
      setOrbitMode: () => {},
      update: () => {}
    };

    // Mock Raycaster
    this.raycaster = {
      setInteractiveObjects: () => {},
      onHover: () => {},
      onClick: () => {},
      update: () => {}
    };
  }

  handleResize() {
    if (this.isWebGLFallback) return;
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  start() {
    if (this.isWebGLFallback) return;
    if (this.isRunning) return;
    this.isRunning = true;
    this.lastTime = performance.now();

    const loop = () => {
      if (!this.isRunning) return;
      this.rafId = requestAnimationFrame(loop);

      if (!this.isTabVisible) return; // Save CPU when tab is hidden

      const now = performance.now();
      const delta = Math.min((now - this.lastTime) / 1000, 0.1);
      this.lastTime = now;
      this.elapsedTime += delta;
      const time = this.elapsedTime;

      // Motion factor dampening if reduced motion is requested
      const speedFactor = this.prefersReducedMotion ? 0.2 : 1.0;

      // Update studio environment & camera rig
      if (this.studio) this.studio.update(delta * speedFactor, time * speedFactor);
      if (this.cameraRig) this.cameraRig.update(delta);
      if (this.raycaster) this.raycaster.update();

      this.renderer.render(this.scene, this.camera);
    };

    loop();
  }

  stop() {
    this.isRunning = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  destroy() {
    this.stop();
    if (this.onResize) {
      window.removeEventListener('resize', this.onResize);
    }

    if (this.studio) this.studio.destroy();

    if (this.renderer) {
      this.renderer.dispose();
      if (this.renderer.domElement && this.renderer.domElement.parentNode) {
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
      }
    }
  }
}

export default UniverseScene;
