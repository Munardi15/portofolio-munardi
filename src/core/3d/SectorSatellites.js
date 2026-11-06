import * as THREE from 'three';

/**
 * SectorSatellites (Interactive 3D Architectural Stations)
 * Positions 5 distinct physical stations around the universe corresponding
 * to Munardi's authentic career chapters and technical contributions.
 */
export class SectorSatellites {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'SectorSatellites';
    this.satellites = [];

    this.initSatellites();
    this.scene.add(this.group);
  }

  initSatellites() {
    // 1. Station BRI (BRIVA Schedulers & SSIS Modernization Cluster)
    // Positioned at [-5.5, 0.8, -1.5]
    const briStation = this.createMonolithStation({
      id: 'sector-bri',
      chapter: 'experience',
      company: 'Bank Rakyat Indonesia (BRI)',
      title: 'BRIVA Schedulers & SSIS to Go Modernization',
      color: 0x10b981,
      emissive: 0x059669,
      pos: [-5.5, 0.8, -1.5],
      shape: 'stacked-towers'
    });
    this.satellites.push(briStation);
    this.group.add(briStation);

    // 2. Station Hitachi (IMHOTS Fleet Telemetry & DB Indexing Station)
    // Positioned at [-3.8, -2.0, 3.2]
    const hitachiStation = this.createMonolithStation({
      id: 'sector-hitachi',
      chapter: 'experience',
      company: 'Hitachi Channel Solutions',
      title: 'IMHOTS 8,000+ ATM Fleet Monitoring & DB Optimization',
      color: 0x06b6d4,
      emissive: 0x0891b2,
      pos: [-3.8, -1.8, 3.2],
      shape: 'telemetry-grid'
    });
    this.satellites.push(hitachiStation);
    this.group.add(hitachiStation);

    // 3. Station OCBC NISP (ProrRekonATM Web & AS400 Core Banking Gateway)
    // Positioned at [4.2, -1.6, 2.8]
    const ocbcStation = this.createMonolithStation({
      id: 'sector-ocbc',
      chapter: 'experience',
      company: 'OCBC NISP',
      title: 'ProrRekonATM Web Migration & AS400 Query Checks',
      color: 0xf59e0b,
      emissive: 0xd97706,
      pos: [4.2, -1.4, 2.8],
      shape: 'dual-gateway'
    });
    this.satellites.push(ocbcStation);
    this.group.add(ocbcStation);

    // 4. Station Enterprise (KNusantara & BRI Life Data Node)
    // Positioned at [5.4, 1.2, -2.0]
    const entStation = this.createMonolithStation({
      id: 'sector-enterprise',
      chapter: 'experience',
      company: 'KNusantara & BRI Life',
      title: 'Enterprise REST APIs & Insurance Policy Modeling',
      color: 0x8b5cf6,
      emissive: 0x7c3aed,
      pos: [5.4, 1.2, -2.0],
      shape: 'hex-matrix'
    });
    this.satellites.push(entStation);
    this.group.add(entStation);

    // 5. Station Education (Universitas Mercu Buana Foundation Obelisk)
    // Positioned at [0.0, 3.8, -3.5]
    const eduStation = this.createMonolithStation({
      id: 'sector-education',
      chapter: 'education',
      company: 'Universitas Mercu Buana',
      title: 'S1 Sistem Informasi (GPA 3.71 Cum Laude)',
      color: 0xeab308,
      emissive: 0xca8a04,
      pos: [0.0, 3.5, -3.5],
      shape: 'obelisk-spire'
    });
    this.satellites.push(eduStation);
    this.group.add(eduStation);
  }

  createMonolithStation({ id, chapter, company, title, color, emissive, pos, shape }) {
    const stationGroup = new THREE.Group();
    stationGroup.position.set(...pos);
    stationGroup.userData = {
      isInteractive: true,
      id,
      chapter,
      company,
      title,
      basePos: new THREE.Vector3(...pos),
      targetScale: 1.0,
      currentScale: 1.0
    };

    const mat = new THREE.MeshStandardMaterial({
      color: 0x080c10,
      emissive: emissive,
      emissiveIntensity: 0.5,
      metalness: 0.9,
      roughness: 0.2
    });

    const glowMat = new THREE.MeshBasicMaterial({
      color: color,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });

    if (shape === 'stacked-towers') {
      // 3 vertical server blocks
      for (let i = 0; i < 3; i++) {
        const h = 1.0 + i * 0.4;
        const geo = new THREE.BoxGeometry(0.5, h, 0.5);
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set((i - 1) * 0.6, h / 2 - 0.5, 0);
        stationGroup.add(mesh);

        const wire = new THREE.Mesh(geo, glowMat);
        wire.position.copy(mesh.position);
        stationGroup.add(wire);
      }
    } else if (shape === 'telemetry-grid') {
      // Cylindrical telemetry hub with radar dish
      const cylGeo = new THREE.CylinderGeometry(0.7, 0.9, 1.2, 16);
      const cyl = new THREE.Mesh(cylGeo, mat);
      stationGroup.add(cyl);

      const ringGeo = new THREE.TorusGeometry(1.1, 0.04, 8, 32);
      const ring = new THREE.Mesh(ringGeo, glowMat);
      ring.rotation.x = Math.PI / 2;
      stationGroup.add(ring);
    } else if (shape === 'dual-gateway') {
      // Dual monolithic pillars with laser crossbeam
      const p1 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.8, 0.4), mat);
      p1.position.set(-0.6, 0, 0);
      const p2 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.8, 0.4), mat);
      p2.position.set(0.6, 0, 0);
      stationGroup.add(p1, p2);

      const beam = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.06, 1.2, 8),
        new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.85 })
      );
      beam.rotation.z = Math.PI / 2;
      beam.position.y = 0.5;
      stationGroup.add(beam);
    } else if (shape === 'hex-matrix') {
      // Octahedron with surrounding satellite nodes
      const octGeo = new THREE.OctahedronGeometry(0.85, 0);
      const oct = new THREE.Mesh(octGeo, mat);
      stationGroup.add(oct);

      const wire = new THREE.Mesh(octGeo, glowMat);
      stationGroup.add(wire);
    } else if (shape === 'obelisk-spire') {
      // Sharp pyramid obelisk
      const coneGeo = new THREE.ConeGeometry(0.65, 2.2, 4);
      const cone = new THREE.Mesh(coneGeo, mat);
      cone.rotation.y = Math.PI / 4;
      stationGroup.add(cone);

      const wire = new THREE.Mesh(coneGeo, glowMat);
      wire.rotation.copy(cone.rotation);
      stationGroup.add(wire);
    }

    // Floating pulsing indicator beacon above station
    const beaconGeo = new THREE.SphereGeometry(0.12, 12, 12);
    const beaconMat = new THREE.MeshBasicMaterial({ color: color });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    beacon.position.y = 1.4;
    stationGroup.add(beacon);

    return stationGroup;
  }

  getInteractiveObjects() {
    const list = [];
    this.satellites.forEach((sat) => {
      sat.traverse((child) => {
        if (child.isMesh) {
          child.userData.stationParent = sat;
          list.push(child);
        }
      });
    });
    return list;
  }

  setHoveredStation(stationGroup, isHovered) {
    if (!stationGroup) return;
    stationGroup.userData.targetScale = isHovered ? 1.25 : 1.0;
    stationGroup.traverse((child) => {
      if (child.isMesh && child.material.emissiveIntensity !== undefined) {
        child.material.emissiveIntensity = isHovered ? 1.2 : 0.5;
      }
    });
  }

  update(delta = 0.016, time = 0) {
    this.satellites.forEach((sat, idx) => {
      // Gentle spatial hovering float
      const base = sat.userData.basePos;
      sat.position.y = base.y + Math.sin(time * 1.5 + idx * 1.2) * 0.15;
      sat.rotation.y += delta * 0.35;

      // Scale lerp on hover
      sat.userData.currentScale +=
        (sat.userData.targetScale - sat.userData.currentScale) * 0.12;
      sat.scale.setScalar(sat.userData.currentScale);
    });
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

export default SectorSatellites;
