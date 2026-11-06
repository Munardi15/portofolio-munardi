import * as THREE from 'three';

/**
 * CyberGridFloor (Infinite Spatial Floor & Cosmic Data Particles)
 * Generates an engineering reference grid plane on XZ and an instanced
 * field of 800+ ambient floating data particles with gentle spatial drift.
 */
export class CyberGridFloor {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'CyberGridFloor';

    this.grid = null;
    this.particles = null;
    this.particlePositions = [];
    this.particleCount = 600;

    this.initGrid();
    this.initParticles();
    this.scene.add(this.group);
  }

  initGrid() {
    // 1. Dual-tone technical grid (Emerald primary, Cyan fine divisions)
    const size = 60;
    const divisions = 60;
    const colorCenterLine = new THREE.Color(0x10b981);
    const colorGrid = new THREE.Color(0x0e2a32);

    this.grid = new THREE.GridHelper(size, divisions, colorCenterLine, colorGrid);
    this.grid.position.y = -3.5;
    this.grid.material.opacity = 0.45;
    this.grid.material.transparent = true;
    this.group.add(this.grid);

    // 2. Subtle radial glow circle beneath the main core
    const circleGeo = new THREE.RingGeometry(0.1, 8.5, 48);
    const circleMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide
    });
    const circleMesh = new THREE.Mesh(circleGeo, circleMat);
    circleMesh.rotation.x = -Math.PI / 2;
    circleMesh.position.y = -3.48;
    this.group.add(circleMesh);
  }

  initParticles() {
    const geo = new THREE.BufferGeometry();
    const posArray = new Float32Array(this.particleCount * 3);
    const colorsArray = new Float32Array(this.particleCount * 3);

    const cyan = new THREE.Color(0x06b6d4);
    const emerald = new THREE.Color(0x10b981);
    const amber = new THREE.Color(0xf59e0b);

    for (let i = 0; i < this.particleCount; i++) {
      const idx = i * 3;
      // Spread across 3D sphere/box
      posArray[idx] = (Math.random() - 0.5) * 35;
      posArray[idx + 1] = (Math.random() - 0.5) * 20;
      posArray[idx + 2] = (Math.random() - 0.5) * 35;

      // Color selection
      const r = Math.random();
      const col = r > 0.6 ? cyan : r > 0.25 ? emerald : amber;
      colorsArray[idx] = col.r;
      colorsArray[idx + 1] = col.g;
      colorsArray[idx + 2] = col.b;

      this.particlePositions.push({
        origY: posArray[idx + 1],
        speed: 0.2 + Math.random() * 0.4,
        drift: (Math.random() - 0.5) * 0.05
      });
    }

    geo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(geo, mat);
    this.group.add(this.particles);
  }

  update(delta = 0.016, time = 0) {
    // 1. Slow cosmic rotation of particle clouds
    if (this.particles) {
      this.particles.rotation.y = time * 0.015;

      const posAttr = this.particles.geometry.attributes.position;
      const arr = posAttr.array;
      for (let i = 0; i < this.particleCount; i++) {
        const idx = i * 3 + 1;
        arr[idx] += Math.sin(time * this.particlePositions[i].speed) * 0.003;
      }
      posAttr.needsUpdate = true;
    }

    // 2. Subtle pulse of ground grid opacity
    if (this.grid) {
      this.grid.material.opacity = 0.38 + Math.sin(time * 0.8) * 0.08;
    }
  }

  destroy() {
    if (this.grid) {
      this.grid.geometry.dispose();
      this.grid.material.dispose();
    }
    if (this.particles) {
      this.particles.geometry.dispose();
      this.particles.material.dispose();
    }
  }
}

export default CyberGridFloor;
