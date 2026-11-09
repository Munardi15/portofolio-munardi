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

    // Modes: 'CINEMATIC' (3D View Aktif: Full Scrollytelling) | 'SIMPLE' (3D View Non-Aktif: Maju Mundur Linear)
    this.mode = 'CINEMATIC';

    // Current & Target Vectors (Inertial Lerp)
    // Starts close to the developer computer terminal (cockpit view)
    this.currentPos = new THREE.Vector3(1.2, 2.25, 1.2);
    this.targetPos = new THREE.Vector3(1.2, 2.25, 1.2);

    this.currentLookAt = new THREE.Vector3(1.2, 2.15, -0.6);
    this.targetLookAt = new THREE.Vector3(1.2, 2.15, -0.6);

    this.currentFov = 38;
    this.targetFov = 38;

    // Mouse Parallax Offset
    this.mouse = { x: 0, y: 0 };
    this.targetMouse = { x: 0, y: 0 };

    // Free Orbit state variables
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.orbitAngles = { theta: 0.3, phi: Math.PI / 2.6, radius: 9.5 };

    // 7 Keyframes along the 3D Studio Scrollytelling Trajectory
    // Mapped cleanly to scroll progress with guaranteed dwell plateaus:
    // 0.0 (Hero) -> 0.20 (About) -> 0.40 (Skill) -> 0.60 (Exp Top) -> 0.72 (Exp Bottom) -> 0.84 (Education) -> 1.0 (Contact)
    this.storyKeyframes = [
      // 0: Hero — Terminal Cockpit directly facing the ultrawide screen
      {
        t: 0.0,
        pos: new THREE.Vector3(1.2, 2.25, 1.15),
        lookAt: new THREE.Vector3(1.2, 2.15, -0.6),
        fov: 38
      },
      // 1: About — Diagonal zoom-out revealing the engineer's desk, chair, lamp, and workspace
      {
        t: 0.20,
        pos: new THREE.Vector3(3.4, 3.8, 5.2),
        lookAt: new THREE.Vector3(0.4, 1.6, -0.6),
        fov: 46
      },
      // 2: Skill — Close dive to the Dual-Screen Terminal Toolkit (ultrawide + AS400 green screen on right)
      {
        t: 0.40,
        pos: new THREE.Vector3(0.1, 2.25, 1.15),
        lookAt: new THREE.Vector3(1.5, 2.15, -0.75),
        fov: 38
      },
      // 3: Experience Top — Sweeps to the right side, framing top blades of 42U Server Rack (BRI BRIVA)
      {
        t: 0.60,
        pos: new THREE.Vector3(2.8, 3.4, 1.8),
        lookAt: new THREE.Vector3(4.8, 3.2, -1.4),
        fov: 42
      },
      // 4: Experience Bottom — Tracking smoothly down the server blades (Hitachi, OCBC, KNusantara)
      {
        t: 0.72,
        pos: new THREE.Vector3(2.8, 1.9, 1.8),
        lookAt: new THREE.Vector3(4.8, 1.7, -1.4),
        fov: 42
      },
      // 5: Education — Pulls back across the room, rotates 180° to back wall, zooms into framed Cum Laude Diploma!
      {
        t: 0.84,
        pos: new THREE.Vector3(1.6, 4.2, -2.2),
        lookAt: new THREE.Vector3(-0.2, 4.2, -4.9),
        fov: 36
      },
      // 6: Contact — Elevated grand panoramic pullback of the complete illuminated studio
      {
        t: 1.0,
        pos: new THREE.Vector3(2.8, 5.2, 7.8),
        lookAt: new THREE.Vector3(1.2, 1.8, -0.6),
        fov: 48
      }
    ];

    // Maintain backward-compatibility for waypoints array (6 canonical chapters)
    this.waypoints = [
      this.storyKeyframes[0],
      this.storyKeyframes[1],
      this.storyKeyframes[2],
      this.storyKeyframes[3],
      this.storyKeyframes[5], // Education
      this.storyKeyframes[6]  // Contact
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
    // Toggles between 3D View Aktif (CINEMATIC) and 3D View Non-Aktif (SIMPLE)
    this.setMode(this.mode === 'CINEMATIC' ? 'SIMPLE' : 'CINEMATIC');
    return this.mode;
  }

  /**
   * Smoothly interpolate waypoint along scroll progress (0.0 to 1.0)
   * In CINEMATIC mode: Multi-keyframe 3D flight trajectory with section plateaus
   * In SIMPLE mode: Linear dolly along Z axis ("cuma maju mundur aja sesuai arah scroll")
   * @param {number} progress
   */
  setScrollProgress(progress) {
    const clamped = Math.max(0, Math.min(1, progress));

    if (this.mode === 'SIMPLE') {
      // 3D View Non-Aktif: "cuma maju mundur aja sesuai arah scroll"
      // Camera stays aligned with developer workstation and smoothly dollys along Z axis
      const startPos = new THREE.Vector3(1.2, 2.25, 1.15);
      const endPos = new THREE.Vector3(1.2, 3.4, 6.2);
      const fixedLookAt = new THREE.Vector3(1.2, 2.0, -0.6);

      const interpolatedPos = new THREE.Vector3().lerpVectors(startPos, endPos, clamped);
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        interpolatedPos.y += 0.4;
        interpolatedPos.z += 1.0;
      }

      this.targetPos.copy(interpolatedPos);
      this.targetLookAt.copy(fixedLookAt);
      this.targetFov = 38 + clamped * 8;
      return;
    }

    if (this.mode === 'CINEMATIC') {
      const kfs = this.storyKeyframes;
      const n = kfs.length;

      let kfA = kfs[0];
      let kfB = kfs[1];

      for (let i = 0; i < n - 1; i++) {
        if (clamped >= kfs[i].t && clamped <= kfs[i + 1].t) {
          kfA = kfs[i];
          kfB = kfs[i + 1];
          break;
        }
      }

      const span = kfB.t - kfA.t;
      const rawFrac = span > 0 ? (clamped - kfA.t) / span : 0;
      // Cubic smoothstep (3x^2 - 2x^3) gives organic ease-in-out flight acceleration
      const frac = rawFrac * rawFrac * (3 - 2 * rawFrac);

      const interpolatedPos = new THREE.Vector3().lerpVectors(kfA.pos, kfB.pos, frac);
      const interpolatedLookAt = new THREE.Vector3().lerpVectors(kfA.lookAt, kfB.lookAt, frac);
      const interpolatedFov = kfA.fov + (kfB.fov - kfA.fov) * frac;

      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        interpolatedPos.y += 0.4;
        interpolatedPos.z += 1.2;
      }

      this.targetPos.copy(interpolatedPos);
      this.targetLookAt.copy(interpolatedLookAt);
      this.targetFov = interpolatedFov;
    }
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

    if (this.mode === 'CINEMATIC' || this.mode === 'SIMPLE') {
      // 1. Inertial lerp camera towards target waypoint (responsive 0.16 lerp prevents sluggish lag)
      this.currentPos.lerp(this.targetPos, 0.16);
      this.currentLookAt.lerp(this.targetLookAt, 0.16);
      this.currentFov += (this.targetFov - this.currentFov) * 0.16;

      // 2. Add organic ambient breathing drift (ensures 3D world is always alive, never statically dead)
      this.ambientTimer = (this.ambientTimer || 0) + delta;
      const breathX = Math.sin(this.ambientTimer * 0.75) * 0.04;
      const breathY = Math.cos(this.ambientTimer * 0.55) * 0.03;
      const breathZ = Math.sin(this.ambientTimer * 0.35) * 0.02;

      // 3. Add subtle parallax offset + breathing
      const parallaxX = this.mouse.x * 0.35 + breathX;
      const parallaxY = this.mouse.y * 0.25 + breathY;

      this.camera.position.set(
        this.currentPos.x + parallaxX,
        this.currentPos.y + parallaxY,
        this.currentPos.z + breathZ
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
