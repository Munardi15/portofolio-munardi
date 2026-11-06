import * as THREE from 'three';

/**
 * RaycastController (Interactive 3D Mouse & Touch Raycaster)
 * Detects hover and click interactions with 3D nodes, core components,
 * and orbital satellites, updating visual cues and playing spatial audio.
 */
export class RaycastController {
  constructor(camera, domElement, audioSynth = null) {
    this.camera = camera;
    this.domElement = domElement;
    this.audioSynth = audioSynth;

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(-999, -999);
    this.interactiveObjects = [];

    this.hoveredObject = null;
    this.onHoverCallback = null;
    this.onClickCallback = null;

    this.initListeners();
  }

  setInteractiveObjects(objects = []) {
    this.interactiveObjects = objects;
  }

  onHover(fn) {
    this.onHoverCallback = fn;
  }

  onClick(fn) {
    this.onClickCallback = fn;
  }

  initListeners() {
    this.domElement.addEventListener('mousemove', (e) => {
      const rect = this.domElement.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    });

    this.domElement.addEventListener('click', () => {
      if (this.hoveredObject && this.onClickCallback) {
        if (this.audioSynth) this.audioSynth.playSelect();
        this.onClickCallback(this.hoveredObject);
      }
    });

    this.domElement.addEventListener('mouseleave', () => {
      this.mouse.set(-999, -999);
      if (this.hoveredObject) {
        this.setHovered(null);
      }
    });
  }

  setHovered(obj) {
    if (this.hoveredObject === obj) return;

    if (this.hoveredObject) {
      if (this.onHoverCallback) this.onHoverCallback(this.hoveredObject, false);
    }

    this.hoveredObject = obj;

    if (this.hoveredObject) {
      document.body.style.cursor = 'pointer';
      if (this.audioSynth) this.audioSynth.playHover();
      if (this.onHoverCallback) this.onHoverCallback(this.hoveredObject, true);
    } else {
      document.body.style.cursor = 'default';
    }
  }

  update() {
    if (this.interactiveObjects.length === 0) return;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.interactiveObjects, true);

    if (intersects.length > 0) {
      // Find highest interactive ancestor
      let hit = intersects[0].object;
      while (hit && !hit.userData.isInteractive && hit.parent) {
        if (hit.userData.stationParent) {
          hit = hit.userData.stationParent;
          break;
        }
        hit = hit.parent;
      }

      if (hit && hit.userData.isInteractive) {
        this.setHovered(hit);
      } else {
        this.setHovered(null);
      }
    } else {
      this.setHovered(null);
    }
  }
}

export default RaycastController;
