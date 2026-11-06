import * as THREE from 'three';

/**
 * LaserConduits (Dynamic 3D Distributed Data Buses)
 * Generates curved quadratic/cubic Bezier laser pipelines linking
 * the central core to all 5 satellite stations with animated
 * photon data packets streaming along the curves.
 */
export class LaserConduits {
  constructor(scene, satellites = []) {
    this.scene = scene;
    this.satellites = satellites;
    this.group = new THREE.Group();
    this.group.name = 'LaserConduits';

    this.conduits = [];
    this.photons = [];

    this.initConduits();
    this.scene.add(this.group);
  }

  initConduits() {
    const origin = new THREE.Vector3(0, 0, 0);

    const colors = [0x10b981, 0x06b6d4, 0xf59e0b, 0x8b5cf6, 0xeab308];

    this.satellites.forEach((sat, idx) => {
      const dest = sat.position;
      const mid = new THREE.Vector3()
        .addVectors(origin, dest)
        .multiplyScalar(0.5);
      mid.y += 1.2 + (idx % 2 === 0 ? 0.8 : -0.6); // Arced curvature

      const curve = new THREE.QuadraticBezierCurve3(origin, mid, dest);
      const points = curve.getPoints(36);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);

      const color = colors[idx % colors.length];

      // Laser tube line
      const lineMat = new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
      });
      const line = new THREE.Line(lineGeo, lineMat);
      this.group.add(line);

      // 2 Photon data packets per conduit
      for (let p = 0; p < 2; p++) {
        const photonGeo = new THREE.SphereGeometry(0.08, 8, 8);
        const photonMat = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: 0.95
        });
        const photonMesh = new THREE.Mesh(photonGeo, photonMat);
        this.group.add(photonMesh);

        this.photons.push({
          mesh: photonMesh,
          curve: curve,
          progress: p * 0.5,
          speed: 0.35 + (idx % 3) * 0.1
        });
      }

      this.conduits.push({ line, curve });
    });
  }

  update(delta = 0.016) {
    this.photons.forEach((item) => {
      item.progress += delta * item.speed;
      if (item.progress > 1.0) item.progress -= 1.0;

      const pt = item.curve.getPoint(item.progress);
      item.mesh.position.copy(pt);

      // Subtle pulse scale
      const scale = 0.8 + Math.sin(item.progress * Math.PI) * 0.5;
      item.mesh.scale.setScalar(scale);
    });
  }

  destroy() {
    this.group.traverse((child) => {
      if (child.isMesh || child.isLine) {
        child.geometry.dispose();
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => m.dispose());
        } else {
          child.material.dispose();
        }
      }
    });
  }
}

export default LaserConduits;
