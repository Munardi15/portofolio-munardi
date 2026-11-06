import * as THREE from 'three';

/**
 * StudioMaterials (Physical & Tactile Material Palette)
 * Inspired by the physical, warm, low-poly aesthetics of Bruno Simon
 * and the clean tactile lighting of modern 3D workspaces (Rishit Tandon, CodeofSagar).
 */
export class StudioMaterials {
  constructor() {
    // 1. Flooring & Walls
    this.floorMat = new THREE.MeshStandardMaterial({
      color: 0x0c1017, // Deep Obsidian Slate
      roughness: 0.75,
      metalness: 0.15
    });

    this.floorAccentMat = new THREE.MeshStandardMaterial({
      color: 0x111823,
      roughness: 0.8,
      metalness: 0.1
    });

    this.wallMat = new THREE.MeshStandardMaterial({
      color: 0x080c12, // Dark Carbon
      roughness: 0.9,
      metalness: 0.05
    });

    this.woodAcousticSlatMat = new THREE.MeshStandardMaterial({
      color: 0x241810, // Dark Walnut Warm Wood
      roughness: 0.65,
      metalness: 0.05
    });

    // 2. Workstation Furniture
    this.deskTopMat = new THREE.MeshStandardMaterial({
      color: 0x181e28, // Dark Slate Desk Surface
      roughness: 0.5,
      metalness: 0.2
    });

    this.metalFrameMat = new THREE.MeshStandardMaterial({
      color: 0x0a0d13, // Matte Black Aluminum
      roughness: 0.4,
      metalness: 0.8
    });

    this.chairLeatherMat = new THREE.MeshStandardMaterial({
      color: 0x121720,
      roughness: 0.6,
      metalness: 0.2
    });

    this.chairMeshMat = new THREE.MeshStandardMaterial({
      color: 0x161e2a,
      roughness: 0.7,
      metalness: 0.1
    });

    // 3. Hardware & Electronics
    this.bezelMat = new THREE.MeshStandardMaterial({
      color: 0x070a0e,
      roughness: 0.3,
      metalness: 0.85
    });

    this.keycapMat = new THREE.MeshStandardMaterial({
      color: 0x1f2735,
      roughness: 0.5,
      metalness: 0.1
    });

    this.keycapAccentMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4, // Electric Cyan Accent Key
      roughness: 0.35,
      metalness: 0.2
    });

    this.laptopAluminumMat = new THREE.MeshStandardMaterial({
      color: 0x28303d, // Space Gray Anodized Aluminum
      roughness: 0.25,
      metalness: 0.9
    });

    // 4. Server Hardware & Chassis
    this.serverRackFrameMat = new THREE.MeshStandardMaterial({
      color: 0x090c12,
      roughness: 0.4,
      metalness: 0.8
    });

    this.serverGlassDoorMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a1420,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.85,
      transparent: true,
      opacity: 0.45
    });

    this.serverChassisMat = new THREE.MeshStandardMaterial({
      color: 0x141b25,
      roughness: 0.45,
      metalness: 0.7
    });

    this.cableEmeraldMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.5,
      metalness: 0.2
    });

    this.cableCyanMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      roughness: 0.5,
      metalness: 0.2
    });

    this.cableAmberMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.5,
      metalness: 0.2
    });

    // 5. Emissive Status Elements
    this.ledGreenMat = new THREE.MeshBasicMaterial({
      color: 0x10b981
    });

    this.ledCyanMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4
    });

    this.ledAmberMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b
    });

    this.ledPurpleMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7
    });

    this.ledOffMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.8,
      metalness: 0.2
    });

    // 6. Accessories
    this.mugMat = new THREE.MeshStandardMaterial({
      color: 0x243042,
      roughness: 0.3,
      metalness: 0.1
    });

    this.goldSealMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.3,
      metalness: 0.85
    });
  }
}

export default StudioMaterials;
