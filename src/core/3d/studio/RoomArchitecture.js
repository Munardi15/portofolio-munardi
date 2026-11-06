import * as THREE from 'three';

/**
 * RoomArchitecture (Physical Studio Foundation & Walls)
 * Constructs the isometric architectural stage with real shadow receivers,
 * acoustic slat wall treatments, and subtle studio bevels.
 */
export class RoomArchitecture {
  constructor(scene, materials) {
    this.scene = scene;
    this.materials = materials;
    this.group = new THREE.Group();
    this.group.name = 'RoomArchitecture';

    this.init();
    this.scene.add(this.group);
  }

  init() {
    // 1. Isometric Base Platform (Main Floor)
    const floorGeo = new THREE.BoxGeometry(16, 0.4, 16);
    const floorMesh = new THREE.Mesh(floorGeo, this.materials.floorMat);
    floorMesh.position.set(0, -0.2, 0);
    floorMesh.receiveShadow = true;
    this.group.add(floorMesh);

    // Subtle Floor Mat / Rug under Desk
    const rugGeo = new THREE.BoxGeometry(6.4, 0.02, 5.0);
    const rugMesh = new THREE.Mesh(rugGeo, this.materials.floorAccentMat);
    rugMesh.position.set(-0.8, 0.01, -0.8);
    rugMesh.receiveShadow = true;
    this.group.add(rugMesh);

    // 2. Back Wall
    const backWallGeo = new THREE.BoxGeometry(16, 9, 0.4);
    const backWallMesh = new THREE.Mesh(backWallGeo, this.materials.wallMat);
    backWallMesh.position.set(0, 4.3, -5.2);
    backWallMesh.receiveShadow = true;
    this.group.add(backWallMesh);

    // Acoustic Wood Slats along Back Wall (Behind Workstation)
    const slatWidth = 0.08;
    const slatDepth = 0.06;
    const slatHeight = 7.5;
    const slatGeo = new THREE.BoxGeometry(slatWidth, slatHeight, slatDepth);

    const slatsCount = 28;
    const startX = -5.0;
    const spacing = 0.22;

    for (let i = 0; i < slatsCount; i++) {
      const slat = new THREE.Mesh(slatGeo, this.materials.woodAcousticSlatMat);
      slat.position.set(startX + i * spacing, 4.0, -4.96);
      slat.castShadow = true;
      slat.receiveShadow = true;
      this.group.add(slat);
    }

    // 3. Left Wall
    const leftWallGeo = new THREE.BoxGeometry(0.4, 9, 16);
    const leftWallMesh = new THREE.Mesh(leftWallGeo, this.materials.wallMat);
    leftWallMesh.position.set(-8.2, 4.3, 0);
    leftWallMesh.receiveShadow = true;
    this.group.add(leftWallMesh);

    // Baseboard Trim along walls
    const baseboardBackGeo = new THREE.BoxGeometry(16, 0.25, 0.08);
    const baseboardBack = new THREE.Mesh(baseboardBackGeo, this.materials.metalFrameMat);
    baseboardBack.position.set(0, 0.125, -4.95);
    this.group.add(baseboardBack);

    const baseboardLeftGeo = new THREE.BoxGeometry(0.08, 0.25, 16);
    const baseboardLeft = new THREE.Mesh(baseboardLeftGeo, this.materials.metalFrameMat);
    baseboardLeft.position.set(-7.95, 0.125, 0);
    this.group.add(baseboardLeft);

    // Subtle Linear Floor Grid Lines
    const gridHelper = new THREE.GridHelper(16, 16, 0x1f2937, 0x111827);
    gridHelper.position.set(0, 0.005, 0);
    gridHelper.material.opacity = 0.35;
    gridHelper.material.transparent = true;
    this.group.add(gridHelper);
  }

  destroy() {
    this.scene.remove(this.group);
  }
}

export default RoomArchitecture;
