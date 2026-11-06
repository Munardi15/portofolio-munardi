import * as THREE from 'three';

/**
 * CameraRig (Cinematic Spline & Interactive Orbit Controller)
 * Seamlessly manages camera position, optical focal zoom (FOV),
 * lookAt targets, mouse parallax dampening, and free exploration mode.
 */
export class CameraRig {
  constructor(camera, domElement) {
    this.camera = camera;
    this.domElement = domElement;

    // Modes: 'CINEMATIC' | 'FREE_ORBIT'
    this.mode = 'CINEMATIC';

    // Current & Target Vectors (Inertial Lerp)
    this.currentPos = new THREE.Vector3(2.2, 4.2, 6.8);
    this.targetPos = new THREE.Vector3(2.2, 4.2, 6.8);

    this.currentLookAt = new THREE.Vector3(1.4, 1.8, -0.8);
    this.targetLookAt = new THREE.Vector3(1.4, 1.8, -0.8);

    this.currentFov = 44;
    this.targetFov = 44;

    // Mouse Parallax Offset
    this.mouse = { x: 0, y: 0 };
    this.targetMouse = { x: 0, y: 0 };

    // Free Orbit state variables
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.orbitAngles = { theta: 0.3, phi: Math.PI / 2.6, radius: 9.5 };

    // 6 Canonical Chapter Waypoints (Studio & Server Room Choreography)
    this.waypoints = [
      // 0: Hero / Developer Studio Isometric Overview
      {
        pos: new THREE.Vector3(2.2, 4.2, 6.8),
        lookAt: new THREE.Vector3(1.4, 1.8, -0.8),
        fov: 44
      },
      // 1: About / The Engineer's Workstation & Human Space
      {
        pos: new THREE.Vector3(1.2, 2.4, 2.8),
        lookAt: new THREE.Vector3(1.2, 1.7, -0.6),
        fov: 45
      },
      // 2: Skill / Dual Monitors & Live Terminal Stacks
      {
        pos: new THREE.Vector3(1.2, 2.1, 1.3),
        lookAt: new THREE.Vector3(1.2, 2.0, -0.6),
        fov: 46
      },
      // 3: Experience / 42U Enterprise Server Rack
      {
        pos: new THREE.Vector3(4.8, 2.8, 2.2),
        lookAt: new THREE.Vector3(4.8, 2.4, -0.8),
        fov: 45
      },
      // 4: Education / Academic Diploma & Foundations
      {
        pos: new THREE.Vector3(0.4, 4.2, -1.2),
        lookAt: new THREE.Vector3(0.4, 4.2, -4.9),
        fov: 38
      },
      // 5: Contact / Transmission Array & Complete Studio
      {
        pos: new THREE.Vector3(3.0, 4.6, 7.2),
        lookAt: new THREE.Vector3(2.0, 1.8, -0.4),
        fov: 44
      }
    ];

    this.initListeners();
  }

  initListeners() {
    // Mouse movement for parallax
    window.addEventListener('mousemove', (e) => {
      this.targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Mouse drag for Free Orbit mode
    this.domElement.addEventListener('mousedown', (e) => {
      if (this.mode === 'FREE_ORBIT') {
        this.isDragging = true;
        this.previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (this.mode === 'FREE_ORBIT' && this.isDragging) {
        const deltaX = e.clientX - this.previousMousePosition.x;
        const deltaY = e.clientY - this.previousMousePosition.y;

        this.orbitAngles.theta -= deltaX * 0.006;
        this.orbitAngles.phi = Math.max(
          0.15,
          Math.min(Math.PI - 0.15, this.orbitAngles.phi - deltaY * 0.006)
        );

        this.previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    });

    // Zoom wheel in Free Orbit mode
    this.domElement.addEventListener(
      'wheel',
      (e) => {
        if (this.mode === 'FREE_ORBIT') {
          this.orbitAngles.radius = Math.max(
            3.0,
            Math.min(18.0, this.orbitAngles.radius + e.deltaY * 0.01)
          );
        }
      },
      { passive: true }
    );
  }

  setMode(mode) {
    this.mode = mode;
    if (mode === 'FREE_ORBIT') {
      // Initialize orbit angles based on current camera position
      const r = this.camera.position.length();
      this.orbitAngles.radius = Math.max(3.5, Math.min(16.0, r));
      this.orbitAngles.theta = Math.atan2(this.camera.position.x, this.camera.position.z);
      this.orbitAngles.phi = Math.acos(this.camera.position.y / this.orbitAngles.radius);
    }
  }

  toggleMode() {
    this.setMode(this.mode === 'CINEMATIC' ? 'FREE_ORBIT' : 'CINEMATIC');
    return this.mode;
  }

  /**
   * Smoothly interpolate waypoint along scroll progress (0.0 to 1.0)
   * @param {number} progress
   */
  setScrollProgress(progress) {
    if (this.mode !== 'CINEMATIC') return;

    const clamped = Math.max(0, Math.min(1, progress));
    const totalWaypoints = this.waypoints.length;
    const scaled = clamped * (totalWaypoints - 1);
    const index = Math.floor(scaled);
    const frac = scaled - index;

    const wpA = this.waypoints[index];
    const wpB = this.waypoints[Math.min(index + 1, totalWaypoints - 1)];

    // Interpolate target vectors
    const isMobile = window.innerWidth < 768;
    const pos = new THREE.Vector3().lerpVectors(wpA.pos, wpB.pos, frac);
    if (isMobile) {
      pos.y += 0.8;
      pos.z += 1.8;
    }
    this.targetPos.copy(pos);
    this.targetLookAt.lerpVectors(wpA.lookAt, wpB.lookAt, frac);
    this.targetFov = wpA.fov + (wpB.fov - wpA.fov) * frac;
  }

  focusOnTarget(position, lookAt = new THREE.Vector3(0, 0, 0), fov = 35) {
    this.targetPos.copy(position);
    this.targetLookAt.copy(lookAt);
    this.targetFov = fov;
  }

  update(delta = 0.016) {
    // Smooth mouse parallax interpolation
    this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
    this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;

    if (this.mode === 'CINEMATIC') {
      // 1. Inertial lerp camera towards target waypoint
      this.currentPos.lerp(this.targetPos, 0.06);
      this.currentLookAt.lerp(this.targetLookAt, 0.06);
      this.currentFov += (this.targetFov - this.currentFov) * 0.06;

      // 2. Add subtle parallax offset
      const parallaxX = this.mouse.x * 0.35;
      const parallaxY = this.mouse.y * 0.25;

      this.camera.position.set(
        this.currentPos.x + parallaxX,
        this.currentPos.y + parallaxY,
        this.currentPos.z
      );
      this.camera.lookAt(this.currentLookAt);

      if (Math.abs(this.camera.fov - this.currentFov) > 0.01) {
        this.camera.fov = this.currentFov;
        this.camera.updateProjectionMatrix();
      }
    } else {
      // FREE ORBIT MODE: Spherical coordinate conversion
      const x =
        this.orbitAngles.radius *
        Math.sin(this.orbitAngles.phi) *
        Math.sin(this.orbitAngles.theta);
      const y = this.orbitAngles.radius * Math.cos(this.orbitAngles.phi);
      const z =
        this.orbitAngles.radius *
        Math.sin(this.orbitAngles.phi) *
        Math.cos(this.orbitAngles.theta);

      this.camera.position.set(x, y, z);
      this.camera.lookAt(0, 0, 0);
    }
  }
}

export default CameraRig;
