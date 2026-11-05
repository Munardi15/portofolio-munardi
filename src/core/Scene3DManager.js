import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * ============================================================================
 * Scene3DManager (Three.js Spatial WebGL Architecture Engine)
 * ============================================================================
 * Manages the 3D interactive core in the Hero section.
 * Implements a hierarchical scene graph:
 * scene -> scrollPivot (Z/Y depth scrub) -> mousePivot (gyro tilt) -> coreGroup (spin & meshes)
 * 
 * @class Scene3DManager
 */
export class Scene3DManager {
  /**
   * @param {Object} options
   * @param {string|HTMLCanvasElement} options.canvas - Target canvas element or selector
   * @param {string|HTMLElement} [options.heroSection='#hero'] - Container element
   */
  constructor(options = {}) {
    this.canvas = typeof options.canvas === 'string'
      ? document.querySelector(options.canvas)
      : (options.canvas || document.getElementById('heroCanvas3D'));

    this.heroSection = typeof options.heroSection === 'string'
      ? document.querySelector(options.heroSection)
      : (options.heroSection || document.getElementById('hero'));

    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.animationFrameId = null;
    this.isDestroyed = false;

    // Pointer targets
    this.targetRotX = 0;
    this.targetRotY = 0;

    // Scroll targets
    this.targetScrollZ = 0;
    this.targetScrollY = 0;
    this.targetScrollRotY = 0;
    this.targetOpacity = 1;
    this.currentOpacity = 1;

    // Bound listeners for clean destruction
    this._onMouseMove = this._handleMouseMove.bind(this);
    this._onResize = this._handleResize.bind(this);
    this._onThemeChange = this._handleThemeChange.bind(this);
    this._animate = this._animateLoop.bind(this);
  }

  /**
   * Initializes the Three.js WebGL scene and starts the render loop.
   */
  init() {
    if (!this.canvas) return;

    this._setupScene();
    this._setupLighting();
    this._setupMeshes();
    this._setupInteractions();
    this._setupScrollScrub();

    // Check initial theme state
    const currentTheme = document.body.getAttribute('data-theme') || 'dark';
    if (currentTheme === 'light') {
      this.updateTheme('light');
    }

    // Start 60fps render loop
    this.animate();
  }

  _getWidth() {
    return this.heroSection ? this.heroSection.clientWidth : window.innerWidth;
  }

  _getHeight() {
    return this.heroSection ? this.heroSection.clientHeight : window.innerHeight;
  }

  _setupScene() {
    const width = this._getWidth();
    const height = this._getHeight();

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(0, 0, 11);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Hierarchical Scene Graph
    this.scrollPivot = new THREE.Group();
    this.scene.add(this.scrollPivot);

    const isDesktop = window.innerWidth >= 1024;
    this.scrollPivot.position.x = isDesktop ? 2.8 : 0;
    this.scrollPivot.position.y = 0;

    this.mousePivot = new THREE.Group();
    this.scrollPivot.add(this.mousePivot);

    this.coreGroup = new THREE.Group();
    this.mousePivot.add(this.coreGroup);
  }

  _setupLighting() {
    this.ambientLight = new THREE.AmbientLight(0x101625, 2.5);
    this.scene.add(this.ambientLight);

    this.cyanLight = new THREE.DirectionalLight(0x00F2FE, 4.5);
    this.cyanLight.position.set(6, 6, 6);
    this.scene.add(this.cyanLight);

    this.amberLight = new THREE.DirectionalLight(0xE8A33D, 3.2);
    this.amberLight.position.set(-6, -5, -4);
    this.scene.add(this.amberLight);

    this.coreLight = new THREE.PointLight(0x3FC6D6, 2.5, 8);
    this.coreLight.position.set(0, 0, 0);
    this.coreGroup.add(this.coreLight);
  }

  _setupMeshes() {
    // 1. Faceted Obsidian Polyhedral Core
    const coreGeo = new THREE.IcosahedronGeometry(2.3, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x090F1B,
      roughness: 0.18,
      metalness: 0.88,
      flatShading: true,
    });
    this.coreMesh = new THREE.Mesh(coreGeo, coreMat);
    this.coreGroup.add(this.coreMesh);

    // 2. Inner Glowing Wireframe Matrix
    const wireGeo = new THREE.IcosahedronGeometry(2.32, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x3FC6D6,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    this.wireMesh = new THREE.Mesh(wireGeo, wireMat);
    this.coreGroup.add(this.wireMesh);

    // 3. Dual Orbital Energy Rings
    const ring1Geo = new THREE.TorusGeometry(3.6, 0.022, 16, 120);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x3FC6D6,
      transparent: true,
      opacity: 0.55
    });
    this.ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    this.ring1.rotation.x = Math.PI * 0.35;
    this.coreGroup.add(this.ring1);

    const ring2Geo = new THREE.TorusGeometry(4.3, 0.02, 16, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xE8A33D,
      transparent: true,
      opacity: 0.45
    });
    this.ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    this.ring2.rotation.x = -Math.PI * 0.28;
    this.ring2.rotation.y = Math.PI * 0.4;
    this.coreGroup.add(this.ring2);

    // 4. Particle Constellation
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const r = 4.5 + Math.random() * 6.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particlePositions[i] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = r * Math.cos(phi);
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x7C8798,
      size: 0.075,
      transparent: true,
      opacity: 0.65
    });
    this.particles = new THREE.Points(particleGeo, particleMat);
    this.coreGroup.add(this.particles);
  }

  _setupInteractions() {
    window.addEventListener('mousemove', this._onMouseMove, { passive: true });
    window.addEventListener('resize', this._onResize, { passive: true });
    window.addEventListener('themechange', this._onThemeChange);
  }

  _handleThemeChange(e) {
    if (e && e.detail && e.detail.theme) {
      this.updateTheme(e.detail.theme);
    }
  }

  updateTheme(theme) {
    if (!this.coreMesh) return;
    const isLight = theme === 'light';

    if (isLight) {
      if (this.ambientLight) {
        this.ambientLight.color.setHex(0xFFFFFF);
        this.ambientLight.intensity = 3.6;
      }
      if (this.cyanLight) {
        this.cyanLight.color.setHex(0x0284C7);
        this.cyanLight.intensity = 4.2;
      }
      if (this.amberLight) {
        this.amberLight.color.setHex(0xD97706);
        this.amberLight.intensity = 3.2;
      }
      if (this.coreLight) {
        this.coreLight.color.setHex(0x0284C7);
        this.coreLight.intensity = 3.0;
      }
      if (this.coreMesh && this.coreMesh.material) {
        // High-end lustrous Titanium / Pearl crystalline facet
        this.coreMesh.material.color.setHex(0xE2E8F0);
        this.coreMesh.material.roughness = 0.25;
        this.coreMesh.material.metalness = 0.65;
      }
      if (this.wireMesh && this.wireMesh.material) {
        this.wireMesh.material.color.setHex(0x0284C7);
        this.wireMesh.material.opacity = 0.45;
      }
      if (this.ring1 && this.ring1.material) {
        this.ring1.material.color.setHex(0x0284C7);
        this.ring1.material.opacity = 0.6;
      }
      if (this.ring2 && this.ring2.material) {
        this.ring2.material.color.setHex(0xD97706);
        this.ring2.material.opacity = 0.55;
      }
      if (this.particles && this.particles.material) {
        this.particles.material.color.setHex(0x64748B);
        this.particles.material.opacity = 0.5;
      }
    } else {
      if (this.ambientLight) {
        this.ambientLight.color.setHex(0x101625);
        this.ambientLight.intensity = 2.5;
      }
      if (this.cyanLight) {
        this.cyanLight.color.setHex(0x00F2FE);
        this.cyanLight.intensity = 4.5;
      }
      if (this.amberLight) {
        this.amberLight.color.setHex(0xE8A33D);
        this.amberLight.intensity = 3.2;
      }
      if (this.coreLight) {
        this.coreLight.color.setHex(0x3FC6D6);
        this.coreLight.intensity = 2.5;
      }
      if (this.coreMesh && this.coreMesh.material) {
        // Faceted Obsidian Polyhedral Core
        this.coreMesh.material.color.setHex(0x090F1B);
        this.coreMesh.material.roughness = 0.18;
        this.coreMesh.material.metalness = 0.88;
      }
      if (this.wireMesh && this.wireMesh.material) {
        this.wireMesh.material.color.setHex(0x3FC6D6);
        this.wireMesh.material.opacity = 0.35;
      }
      if (this.ring1 && this.ring1.material) {
        this.ring1.material.color.setHex(0x3FC6D6);
        this.ring1.material.opacity = 0.55;
      }
      if (this.ring2 && this.ring2.material) {
        this.ring2.material.color.setHex(0xE8A33D);
        this.ring2.material.opacity = 0.45;
      }
      if (this.particles && this.particles.material) {
        this.particles.material.color.setHex(0x7C8798);
        this.particles.material.opacity = 0.65;
      }
    }
  }

  _handleMouseMove(e) {
    const normX = (e.clientX / window.innerWidth - 0.5) * 2;
    const normY = (e.clientY / window.innerHeight - 0.5) * 2;
    this.targetRotY = normX * 0.35;
    this.targetRotX = normY * 0.25;
  }

  _handleResize() {
    if (!this.renderer || !this.camera) return;
    const width = this._getWidth();
    const height = this._getHeight();
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const desktop = window.innerWidth >= 1024;
    this.scrollPivot.position.x = desktop ? 2.8 : 0;
  }

  _setupScrollScrub() {
    if (this.prefersReducedMotion || !this.heroSection) return;

    this.scrollTriggerInstance = ScrollTrigger.create({
      trigger: this.heroSection,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        this.targetScrollZ = -p * 8.5;
        this.targetScrollY = -p * 3.2;
        this.targetScrollRotY = p * Math.PI * 0.75;
        this.targetOpacity = Math.max(1 - p * 1.25, 0);
      }
    });
  }

  _animateLoop() {
    if (this.isDestroyed) return;

    this.animationFrameId = requestAnimationFrame(this._animate);

    // 1. Idle rotational spin
    if (this.coreMesh) {
      this.coreMesh.rotation.y += 0.003;
      this.coreMesh.rotation.x += 0.0015;
    }
    if (this.wireMesh) {
      this.wireMesh.rotation.y -= 0.0025;
      this.wireMesh.rotation.z += 0.0015;
    }
    if (this.ring1) this.ring1.rotation.z += 0.005;
    if (this.ring2) this.ring2.rotation.z -= 0.004;
    if (this.particles) this.particles.rotation.y += 0.0008;

    // 2. Smooth mouse gyro interpolation (exponential lerp)
    if (this.mousePivot) {
      this.mousePivot.rotation.y += (this.targetRotY - this.mousePivot.rotation.y) * 0.06;
      this.mousePivot.rotation.x += (this.targetRotX - this.mousePivot.rotation.x) * 0.06;
    }

    // 3. Smooth scroll depth interpolation
    if (this.scrollPivot) {
      this.scrollPivot.position.z += (this.targetScrollZ - this.scrollPivot.position.z) * 0.08;
      this.scrollPivot.position.y += (this.targetScrollY - this.scrollPivot.position.y) * 0.08;
      this.scrollPivot.rotation.y += (this.targetScrollRotY - this.scrollPivot.rotation.y) * 0.08;
    }

    // 4. Smooth canvas opacity fade out
    if (this.renderer && this.renderer.domElement) {
      this.currentOpacity += (this.targetOpacity - this.currentOpacity) * 0.1;
      this.renderer.domElement.style.opacity = this.currentOpacity.toFixed(3);
      this.renderer.render(this.scene, this.camera);
    }
  }

  animate() {
    if (!this.animationFrameId) {
      this._animateLoop();
    }
  }

  destroy() {
    this.isDestroyed = true;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    window.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('resize', this._onResize);
    window.removeEventListener('themechange', this._onThemeChange);

    if (this.scrollTriggerInstance) {
      this.scrollTriggerInstance.kill();
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}
