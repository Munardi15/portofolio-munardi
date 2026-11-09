import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/**
 * CameraRig (Cinematic Spline, Interactive Orbit & Double-Click Teleport)
 * Seamlessly manages camera position, optical focal zoom (FOV),
 * lookAt targets, mouse parallax dampening, and full free room navigation:
 * - Left drag: Orbit 360° around focused target
 * - Right drag / two-finger: Pan across the entire studio room
 * - Scroll wheel / pinch: Smooth zoom in/out
 * - Double-click / Double-tap: Smoothly flies and zooms straight into that target point!
 * - WASD / Arrow Keys: Walk freely around the studio room in 3D
 */
export class CameraRig {
  constructor(camera, domElement, scene = null, audioSynth = null) {
    this.camera = camera;
    this.domElement = domElement;
    this.scene = scene;
    this.audioSynth = audioSynth;

    // Modes: 'CINEMATIC' | 'FREE_ORBIT'
    this.mode = 'CINEMATIC';

    // Current & Target Vectors (Inertial Lerp)
    this.currentPos = new THREE.Vector3(1.2, 2.25, 1.15);
    this.targetPos = new THREE.Vector3(1.2, 2.25, 1.15);

    this.currentLookAt = new THREE.Vector3(1.2, 2.15, -0.6);
    this.targetLookAt = new THREE.Vector3(1.2, 2.15, -0.6);

    this.currentFov = 38;
    this.targetFov = 38;

    // Mouse Parallax Offset
    this.mouse = { x: 0, y: 0 };
    this.targetMouse = { x: 0, y: 0 };

    // Active Keyboard Keys for Room Walking
    this.keysDown = {};

    // OrbitControls for Room Navigation
    this.controls = null;
    this.initOrbitControls();

    // Raycaster for Double-Click Target Focus
    this.raycaster = new THREE.Raycaster();

    // Smooth Flight state for Double-Click Zoom
    this.isFlying = false;
    this.flyProgress = 0;
    this.flyDuration = 0.75;
    this.flyStartPos = new THREE.Vector3();
    this.flyEndPos = new THREE.Vector3();
    this.flyStartLookAt = new THREE.Vector3();
    this.flyEndLookAt = new THREE.Vector3();

    // Visual Ping Marker on Hit Target
    this.pingMesh = null;
    this.pingTimer = 0;

    // Mobile double-tap tracking
    this.lastTouchTime = 0;
    this.lastTouchPos = { x: 0, y: 0 };

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

  initOrbitControls() {
    if (!this.domElement || !this.camera) return;

    this.controls = new OrbitControls(this.camera, this.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.screenSpacePanning = true; // Allows panning across the entire room!
    this.controls.minPolarAngle = 0.05; // Can look from above
    this.controls.maxPolarAngle = Math.PI * 0.58; // Allows looking slightly upwards at monitors/racks/diplomas
    this.controls.minDistance = 0.5;
    this.controls.maxDistance = 25.0;
    this.controls.target.set(1.2, 2.15, -0.6);
    this.controls.enabled = false; // Enabled only in FREE_ORBIT mode
  }

  initListeners() {
    // Mouse movement for parallax in Cinematic mode
    window.addEventListener('mousemove', (e) => {
      this.targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Keyboard walking keys tracking (WASD, Arrow Keys, Q, E)
    window.addEventListener('keydown', (e) => {
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      if (activeTag === 'input' || activeTag === 'textarea' || document.activeElement.isContentEditable) {
        return;
      }
      this.keysDown[e.code] = true;
    });

    window.addEventListener('keyup', (e) => {
      this.keysDown[e.code] = false;
    });

    // Double-click on canvas: smoothly fly and zoom into target point!
    if (this.domElement) {
      this.domElement.addEventListener('dblclick', (e) => this.onDoubleClick(e));
    }

    // Global double-click support when in 3D orbit mode
    window.addEventListener('dblclick', (e) => {
      if (this.mode === 'FREE_ORBIT') {
        this.onDoubleClick(e);
      }
    });

    // Mobile / Touchscreen double-tap detection
    window.addEventListener('touchend', (e) => {
      if (this.mode !== 'FREE_ORBIT') return;
      const now = performance.now();
      if (e.changedTouches && e.changedTouches.length === 1) {
        const touch = e.changedTouches[0];
        const dt = now - this.lastTouchTime;
        const dx = touch.clientX - this.lastTouchPos.x;
        const dy = touch.clientY - this.lastTouchPos.y;
        const distSq = dx * dx + dy * dy;

        if (dt > 40 && dt < 380 && distSq < 900) {
          // Double-tap detected
          this.onDoubleClick(touch);
        }

        this.lastTouchTime = now;
        this.lastTouchPos.x = touch.clientX;
        this.lastTouchPos.y = touch.clientY;
      }
    }, { passive: true });
  }

  onDoubleClick(e) {
    if (!this.domElement || !this.camera) return;

    const rect = this.domElement.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), this.camera);

    const targets = this.scene ? this.scene.children : [];
    const intersects = this.raycaster.intersectObjects(targets, true);

    if (intersects.length > 0) {
      // Find the first visible solid mesh (ignore grid, helpers, particles)
      const hit = intersects.find(
        (i) =>
          i.object.visible &&
          !(i.object instanceof THREE.GridHelper) &&
          !(i.object instanceof THREE.LineSegments) &&
          !(i.object instanceof THREE.Points) &&
          i.object !== this.pingMesh
      );

      if (!hit) return;

      const hitPoint = hit.point;

      // Auto-activate 3D view mode if in cinematic scrollytelling
      if (this.mode !== 'FREE_ORBIT') {
        const btnMode = document.getElementById('btnToggle3DMode');
        if (btnMode) btnMode.click();
      }

      this.zoomToPoint(hitPoint, hit.object);
    }
  }

  spawnTargetPing(targetPoint) {
    if (!this.scene) return;

    if (!this.pingMesh) {
      const pingGeo = new THREE.RingGeometry(0.04, 0.14, 32);
      const pingMat = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        transparent: true,
        opacity: 0.95,
        side: THREE.DoubleSide,
        depthTest: false
      });
      this.pingMesh = new THREE.Mesh(pingGeo, pingMat);
      this.pingMesh.renderOrder = 999;
      this.scene.add(this.pingMesh);
    }

    this.pingMesh.position.copy(targetPoint);
    this.pingMesh.lookAt(this.camera.position);
    this.pingMesh.scale.set(0.2, 0.2, 0.2);
    this.pingMesh.material.opacity = 0.95;
    this.pingMesh.visible = true;
    this.pingTimer = 0.5;
  }

  zoomToPoint(targetPoint, hitObject = null) {
    const camToTarget = new THREE.Vector3().subVectors(this.camera.position, targetPoint);
    const currentDist = camToTarget.length();
    const dir = camToTarget.normalize();

    // Optimal viewing distance based on proximity:
    // If far (> 3m): dive into comfortable framing (1.5m to 2.5m)
    // If already close (<= 3m): dive into close inspection (0.85m to 1.5m)
    let viewDistance;
    if (currentDist > 3.0) {
      viewDistance = Math.max(1.4, Math.min(2.5, currentDist * 0.42));
    } else {
      viewDistance = Math.max(0.85, currentDist * 0.65);
    }

    const destPos = new THREE.Vector3().copy(targetPoint).addScaledVector(dir, viewDistance);

    // Keep camera comfortably above floor
    destPos.y = Math.max(destPos.y, 0.95);

    // Spawn visual feedback ring ping
    this.spawnTargetPing(targetPoint);

    // Smooth camera flight
    this.isFlying = true;
    this.flyProgress = 0;
    this.flyStartPos.copy(this.camera.position);
    this.flyEndPos.copy(destPos);

    const currentCenter = this.controls ? this.controls.target.clone() : this.currentLookAt.clone();
    this.flyStartLookAt.copy(currentCenter);
    this.flyEndLookAt.copy(targetPoint);

    if (this.controls) {
      this.controls.enabled = false;
    }

    if (this.audioSynth) {
      this.audioSynth.playSelect();
    }
  }

  setMode(mode) {
    this.mode = mode;
    if (mode === 'FREE_ORBIT') {
      if (this.controls) {
        this.controls.target.copy(this.currentLookAt);
        this.controls.update();
        this.controls.enabled = true;
      }
    } else {
      if (this.controls) {
        this.controls.enabled = false;
      }
      this.isFlying = false;
      this.currentPos.copy(this.camera.position);
    }
  }

  toggleMode() {
    this.setMode(this.mode === 'CINEMATIC' ? 'FREE_ORBIT' : 'CINEMATIC');
    return this.mode;
  }

  /**
   * Smoothly interpolate waypoint along scroll progress (0.0 to 1.0)
   * Using multi-keyframe trajectory with cubic smoothstep easing
   * @param {number} progress
   */
  setScrollProgress(progress) {
    if (this.mode !== 'CINEMATIC') return;

    const clamped = Math.max(0, Math.min(1, progress));
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

  focusOnTarget(position, lookAt = new THREE.Vector3(0, 0, 0), fov = 35) {
    this.targetPos.copy(position);
    this.targetLookAt.copy(lookAt);
    this.targetFov = fov;
  }

  update(delta = 0.016) {
    // 0. Update visual target ping animation
    if (this.pingTimer > 0 && this.pingMesh) {
      this.pingTimer -= delta;
      const progress = 1.0 - Math.max(0, this.pingTimer) / 0.5;
      const scale = 0.2 + progress * 2.8;
      this.pingMesh.scale.set(scale, scale, scale);
      this.pingMesh.material.opacity = (1.0 - progress) * 0.95;
      this.pingMesh.lookAt(this.camera.position);
      if (this.pingTimer <= 0) {
        this.pingMesh.visible = false;
      }
    }

    // 1. Handle Smooth Flying Transition (Double-click zoom to point)
    if (this.isFlying) {
      this.flyProgress += delta / this.flyDuration;
      const clamped = Math.min(1.0, this.flyProgress);
      // Hermite cubic ease-in-out
      const ease = clamped * clamped * (3 - 2 * clamped);

      this.camera.position.lerpVectors(this.flyStartPos, this.flyEndPos, ease);
      const currentLook = new THREE.Vector3().lerpVectors(this.flyStartLookAt, this.flyEndLookAt, ease);
      this.camera.lookAt(currentLook);

      if (clamped >= 1.0) {
        this.isFlying = false;
        this.currentPos.copy(this.camera.position);
        this.currentLookAt.copy(this.flyEndLookAt);
        if (this.controls) {
          this.controls.target.copy(this.flyEndLookAt);
          this.controls.update();
          if (this.mode === 'FREE_ORBIT') {
            this.controls.enabled = true;
          }
        }
      }
      return;
    }

    // 2. Free Orbit Mode with OrbitControls + WASD Room Walking
    if (this.mode === 'FREE_ORBIT') {
      if (this.controls && this.controls.enabled) {
        // Keyboard room walking (WASD, Arrow Keys, Q, E)
        const hasMoveKey =
          this.keysDown['KeyW'] || this.keysDown['KeyS'] ||
          this.keysDown['KeyA'] || this.keysDown['KeyD'] ||
          this.keysDown['ArrowUp'] || this.keysDown['ArrowDown'] ||
          this.keysDown['ArrowLeft'] || this.keysDown['ArrowRight'] ||
          this.keysDown['KeyQ'] || this.keysDown['KeyE'];

        if (hasMoveKey) {
          const forward = new THREE.Vector3();
          this.camera.getWorldDirection(forward);
          forward.y = 0;
          forward.normalize();

          const right = new THREE.Vector3();
          right.crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

          const moveSpeed = 4.8 * delta;
          const moveVector = new THREE.Vector3();

          if (this.keysDown['KeyW'] || this.keysDown['ArrowUp']) moveVector.add(forward);
          if (this.keysDown['KeyS'] || this.keysDown['ArrowDown']) moveVector.sub(forward);
          if (this.keysDown['KeyD'] || this.keysDown['ArrowRight']) moveVector.add(right);
          if (this.keysDown['KeyA'] || this.keysDown['ArrowLeft']) moveVector.sub(right);
          if (this.keysDown['KeyE']) moveVector.y += 0.8;
          if (this.keysDown['KeyQ']) moveVector.y -= 0.8;

          if (moveVector.lengthSq() > 0) {
            moveVector.normalize().multiplyScalar(moveSpeed);

            // Apply studio room bounds (perimeter: -6.8 to 6.8 on X/Z, 0.4 to 6.5 on Y)
            const nextCamPos = this.camera.position.clone().add(moveVector);
            nextCamPos.x = Math.max(-6.8, Math.min(6.8, nextCamPos.x));
            nextCamPos.z = Math.max(-6.8, Math.min(6.8, nextCamPos.z));
            nextCamPos.y = Math.max(0.4, Math.min(6.5, nextCamPos.y));

            const actualDelta = nextCamPos.sub(this.camera.position);
            this.camera.position.add(actualDelta);
            this.controls.target.add(actualDelta);
          }
        }

        // Clamp camera comfortably above floor
        if (this.camera.position.y < 0.35) {
          this.camera.position.y = 0.35;
        }

        this.controls.update();
      }
      return;
    }

    // 3. Cinematic Scrollytelling Mode
    if (this.mode === 'CINEMATIC') {
      // Smooth mouse parallax interpolation
      this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
      this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;

      this.currentPos.lerp(this.targetPos, 0.16);
      this.currentLookAt.lerp(this.targetLookAt, 0.16);
      this.currentFov += (this.targetFov - this.currentFov) * 0.16;

      // Add organic ambient breathing drift
      this.ambientTimer = (this.ambientTimer || 0) + delta;
      const breathX = Math.sin(this.ambientTimer * 0.75) * 0.04;
      const breathY = Math.cos(this.ambientTimer * 0.55) * 0.03;
      const breathZ = Math.sin(this.ambientTimer * 0.35) * 0.02;

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
    }
  }

  destroy() {
    if (this.controls) {
      this.controls.dispose();
      this.controls = null;
    }
    if (this.pingMesh && this.scene) {
      this.scene.remove(this.pingMesh);
      if (this.pingMesh.geometry) this.pingMesh.geometry.dispose();
      if (this.pingMesh.material) this.pingMesh.material.dispose();
      this.pingMesh = null;
    }
  }
}

export default CameraRig;
