import * as THREE from 'three';

/**
 * ComputationalCore (Central 3D Architectural Monument)
 * Features an inner crystalline transaction engine, triple concentric
 * gyroscopic gimbal rings, laser bus indicators, and a procedural
 * explosion / teardown mechanism for interactive 3D inspection.
 */
export class ComputationalCore {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'ComputationalCore';

    // Interactive components
    this.innerCore = null;
    this.innerWire = null;
    this.gimbals = [];
    this.dataPillars = [];
    this.busMarkers = [];

    // State parameters
    this.explosionFactor = 0.0;
    this.targetExplosion = 0.0;
    this.hovered = false;
    this.spinSpeedMultiplier = 1.0;

    this.initCore();
    this.initGimbals();
    this.initDataPillars();
    this.scene.add(this.group);
  }

  initCore() {
    // 1. Central Crystalline Engine (Icosahedron)
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x052e25,
      emissive: 0x10b981,
      emissiveIntensity: 0.45,
      roughness: 0.2,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.92
    });

    this.innerCore = new THREE.Mesh(coreGeo, coreMat);
    this.innerCore.name = 'CoreCrystal';
    this.innerCore.userData = {
      isInteractive: true,
      title: 'Core Banking Engine',
      desc: 'High-concurrency batch execution & ledger validation'
    };
    this.group.add(this.innerCore);

    // 2. Glowing Wireframe Shell
    const wireGeo = new THREE.IcosahedronGeometry(1.28, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.55
    });
    this.innerWire = new THREE.Mesh(wireGeo, wireMat);
    this.group.add(this.innerWire);

    // 3. Inner Energy Pulsar (Small point light inside core)
    this.pointLight = new THREE.PointLight(0x10b981, 2.5, 8);
    this.group.add(this.pointLight);
  }

  initGimbals() {
    // Gimbal 0: Inner Cyan Ring
    const ring0Geo = new THREE.TorusGeometry(1.85, 0.04, 16, 64);
    const ring0Mat = new THREE.MeshStandardMaterial({
      color: 0x0891b2,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.5,
      metalness: 0.9,
      roughness: 0.2
    });
    const ring0 = new THREE.Mesh(ring0Geo, ring0Mat);
    ring0.rotation.x = Math.PI / 4;
    ring0.userData = { normal: new THREE.Vector3(0, 1, 0), origScale: 1.0 };
    this.gimbals.push(ring0);
    this.group.add(ring0);

    // Gimbal 1: Middle Amber Laser Ring
    const ring1Geo = new THREE.TorusGeometry(2.45, 0.05, 16, 64);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.55,
      metalness: 0.85,
      roughness: 0.25
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.y = Math.PI / 3;
    ring1.userData = { normal: new THREE.Vector3(1, 0, 0), origScale: 1.0 };
    this.gimbals.push(ring1);
    this.group.add(ring1);

    // Gimbal 2: Outer Emerald Planetary Ring
    const ring2Geo = new THREE.TorusGeometry(3.1, 0.06, 16, 80);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x047857,
      emissive: 0x10b981,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.15
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.z = Math.PI / 6;
    ring2.userData = { normal: new THREE.Vector3(0, 0, 1), origScale: 1.0 };
    this.gimbals.push(ring2);
    this.group.add(ring2);
  }

  initDataPillars() {
    // 4 Satellite telemetry cubes attached to outer ring
    const pillarGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35);
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0x0e141c,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.4,
      metalness: 0.95,
      roughness: 0.1
    });

    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      const dist = 3.1;
      const mesh = new THREE.Mesh(pillarGeo, pillarMat);
      mesh.position.set(Math.cos(angle) * dist, 0, Math.sin(angle) * dist);
      mesh.userData = {
        isInteractive: true,
        angle: angle,
        baseDist: dist,
        title: `Pipeline Node 0${i + 1}`,
        desc: 'Concurrent worker pool execution channel'
      };
      this.dataPillars.push(mesh);
      this.group.add(mesh);
    }
  }

  setExplosionFactor(factor) {
    this.targetExplosion = Math.min(Math.max(factor, 0.0), 1.0);
  }

  setHoverState(hovered) {
    this.hovered = hovered;
    this.spinSpeedMultiplier = hovered ? 2.5 : 1.0;
    if (this.innerCore) {
      this.innerCore.material.emissiveIntensity = hovered ? 0.9 : 0.45;
    }
  }

  update(delta = 0.016, time = 0) {
    // Smooth lerp explosion factor
    this.explosionFactor += (this.targetExplosion - this.explosionFactor) * 0.08;

    // 1. Multi-axis rotation of inner core
    if (this.innerCore) {
      this.innerCore.rotation.x += delta * 0.4 * this.spinSpeedMultiplier;
      this.innerCore.rotation.y += delta * 0.6 * this.spinSpeedMultiplier;
    }
    if (this.innerWire) {
      this.innerWire.rotation.x -= delta * 0.25 * this.spinSpeedMultiplier;
      this.innerWire.rotation.y += delta * 0.35 * this.spinSpeedMultiplier;
    }

    // 2. Gimbal rotations (opposing speeds)
    if (this.gimbals.length === 3) {
      this.gimbals[0].rotation.z += delta * 0.5 * this.spinSpeedMultiplier;
      this.gimbals[1].rotation.x += delta * 0.4 * this.spinSpeedMultiplier;
      this.gimbals[2].rotation.y += delta * 0.3 * this.spinSpeedMultiplier;

      // Apply procedural explosion expansion
      const expOffset = this.explosionFactor * 1.6;
      this.gimbals[0].scale.setScalar(1.0 + expOffset * 0.35);
      this.gimbals[1].scale.setScalar(1.0 + expOffset * 0.7);
      this.gimbals[2].scale.setScalar(1.0 + expOffset * 1.1);
    }

    // 3. Orbit data pillars and apply explosion distance
    this.dataPillars.forEach((p, idx) => {
      const currentAngle = p.userData.angle + time * 0.3;
      const currentDist = p.userData.baseDist + this.explosionFactor * 2.2;
      p.position.x = Math.cos(currentAngle) * currentDist;
      p.position.z = Math.sin(currentAngle) * currentDist;
      p.position.y = Math.sin(time * 2 + idx) * 0.25;

      p.rotation.x += delta * 1.2;
      p.rotation.y += delta * 0.8;
    });

    // 4. Energy light pulse
    if (this.pointLight) {
      this.pointLight.intensity = 2.0 + Math.sin(time * 3.5) * 0.8;
    }
  }

  destroy() {
    this.group.traverse((child) => {
      if (child.isMesh) {
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

export default ComputationalCore;
