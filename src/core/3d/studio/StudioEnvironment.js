import * as THREE from 'three';
import { StudioMaterials } from './StudioMaterials.js';
import { RoomArchitecture } from './RoomArchitecture.js';
import { DeveloperWorkstation } from './DeveloperWorkstation.js';
import { ServerRackStation } from './ServerRackStation.js';
import { WallAccessories } from './WallAccessories.js';

/**
 * StudioEnvironment (Master Developer Studio & Mission-Control Coordinator)
 * Synthesizes the tactile 3D world inspired by Bruno Simon and Rishit Tandon:
 * - Real low-poly furniture, desk, chair, monitors, server rack, books, diploma
 * - Soft PCF shadow mapping and studio directional lighting
 * - Live dynamic terminal code & AS400 queries
 * - Interactive server blades that slide forward on hover and trigger Blueprints
 */
export class StudioEnvironment {
  constructor(scene) {
    this.scene = scene;
    this.materials = new StudioMaterials();

    this.architecture = null;
    this.workstation = null;
    this.serverRack = null;
    this.wallAccessories = null;

    this.lights = [];
    this.interactiveObjects = [];

    this.init();
  }

  init() {
    this.initLighting();

    // 1. Physical Room Architecture
    this.architecture = new RoomArchitecture(this.scene, this.materials);

    // 2. Developer Workstation (Desk, Dual Monitors, Chair, Laptop, Peripherals)
    this.workstation = new DeveloperWorkstation(this.scene, this.materials);

    // 3. Enterprise Server Rack (42U Cabinet, 4 Interactive Server Blades)
    this.serverRack = new ServerRackStation(this.scene, this.materials);

    // 4. Wall Accessories (Diploma Cum Laude, Bookshelf)
    this.wallAccessories = new WallAccessories(this.scene, this.materials);

    // Register all interactive targets for Raycaster
    this.interactiveObjects = [
      ...this.serverRack.getInteractiveObjects()
    ];
  }

  initLighting() {
    // 1. Soft Warm Studio Ambient Fill
    const ambientLight = new THREE.AmbientLight(0x1e293b, 2.2);
    this.scene.add(ambientLight);
    this.lights.push(ambientLight);

    // 2. Key Studio Directional Sun (Warm Daylight with Soft Contact Shadows)
    const keyLight = new THREE.DirectionalLight(0xffedd5, 3.2);
    keyLight.position.set(8.0, 12.0, 9.0);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 32;
    keyLight.shadow.camera.left = -10;
    keyLight.shadow.camera.right = 10;
    keyLight.shadow.camera.top = 10;
    keyLight.shadow.camera.bottom = -10;
    keyLight.shadow.bias = -0.0005;
    keyLight.shadow.radius = 2.0; // Soft PCF contact shadows
    this.scene.add(keyLight);
    this.lights.push(keyLight);

    // 3. Cool Studio Fill Light (Electric Cyan Tint from Left)
    const fillLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    fillLight.position.set(-9.0, 6.0, 5.0);
    this.scene.add(fillLight);
    this.lights.push(fillLight);

    // 4. Server Rack Telemetry Glow (Terminal Emerald & Cyan Accent)
    const rackGlow = new THREE.PointLight(0x10b981, 2.5, 6.0);
    rackGlow.position.set(3.6, 2.8, -0.6);
    this.scene.add(rackGlow);
    this.lights.push(rackGlow);

    // 5. Academic Diploma Frame Accent Light
    const diplomaGlow = new THREE.PointLight(0xf59e0b, 1.5, 4.0);
    diplomaGlow.position.set(-2.4, 4.2, -4.2);
    this.scene.add(diplomaGlow);
    this.lights.push(diplomaGlow);
  }

  getInteractiveObjects() {
    return this.interactiveObjects;
  }

  setHoveredObject(obj, isHovered) {
    if (!obj || !obj.userData) return;
    if (obj.userData.type === 'server-blade') {
      this.serverRack.setHoveredBlade(obj, isHovered);
    }
  }

  setExplosionFactor(factor) {
    // Physical teardown: server blades slide out of rack cabinet proportionally
    if (!this.serverRack || !this.serverRack.interactiveBlades) return;
    this.serverRack.interactiveBlades.forEach((bladeHit, idx) => {
      const parent = bladeHit.userData.bladeParent;
      if (parent) {
        // Slide out up to 0.7 units along Z
        parent.position.z = 0.2 + factor * (0.4 + idx * 0.12);
      }
    });
  }

  update(delta, time) {
    if (this.workstation) this.workstation.update(delta, time);
    if (this.serverRack) this.serverRack.update(delta, time);
  }

  destroy() {
    if (this.architecture) this.architecture.destroy();
    if (this.workstation) this.workstation.destroy();
    if (this.serverRack) this.serverRack.destroy();
    if (this.wallAccessories) this.wallAccessories.destroy();

    this.lights.forEach((light) => {
      this.scene.remove(light);
      if (light.dispose) light.dispose();
    });
  }
}

export default StudioEnvironment;
