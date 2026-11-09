import * as THREE from 'three';

/**
 * ServerRackStation (42U Enterprise Infrastructure & Server Rack)
 * Represents Munardi's 6+ years of banking & financial systems backend engineering.
 * Features:
 * - 4 interactive server blades corresponding to verified employers (BRI, Hitachi, OCBC, KNusantara)
 * - Animated status LEDs & blinking telemetry indicators
 * - Exhaust cooling fans with slow rotation
 * - Full raycast click support linking directly to the Blueprint Modal
 */
export class ServerRackStation {
  constructor(scene, materials) {
    this.scene = scene;
    this.materials = materials;
    this.group = new THREE.Group();
    this.group.name = 'ServerRackStation';
    this.group.position.set(4.8, 0, -1.4);

    this.interactiveBlades = [];
    this.fanBlades = [];
    this.leds = [];
    this.blinkTimer = 0;

    this.init();
    this.scene.add(this.group);
  }

  init() {
    this.buildCabinet();
    this.buildServerBlades();
    this.buildCoolingFans();
    this.buildPatchCables();
  }

  buildCabinet() {
    // 42U Server Rack Outer Enclosure (Matte Black Steel)
    const cabinetWidth = 1.6;
    const cabinetHeight = 4.8;
    const cabinetDepth = 1.8;

    // Corner Posts
    const postGeo = new THREE.BoxGeometry(0.08, cabinetHeight, 0.08);
    const postPositions = [
      [-cabinetWidth / 2, cabinetHeight / 2, -cabinetDepth / 2],
      [cabinetWidth / 2, cabinetHeight / 2, -cabinetDepth / 2],
      [-cabinetWidth / 2, cabinetHeight / 2, cabinetDepth / 2],
      [cabinetWidth / 2, cabinetHeight / 2, cabinetDepth / 2]
    ];

    postPositions.forEach(([x, y, z]) => {
      const post = new THREE.Mesh(postGeo, this.materials.serverRackFrameMat);
      post.position.set(x, y, z);
      post.castShadow = true;
      post.receiveShadow = true;
      this.group.add(post);
    });

    // Top and Bottom Plates
    const plateGeo = new THREE.BoxGeometry(cabinetWidth, 0.08, cabinetDepth);
    const topPlate = new THREE.Mesh(plateGeo, this.materials.serverRackFrameMat);
    topPlate.position.set(0, cabinetHeight, 0);
    topPlate.castShadow = true;
    this.group.add(topPlate);

    const bottomPlate = new THREE.Mesh(plateGeo, this.materials.serverRackFrameMat);
    bottomPlate.position.set(0, 0.04, 0);
    bottomPlate.receiveShadow = true;
    this.group.add(bottomPlate);

    // Side Panels (Perforated Sheet Metal)
    const sidePanelGeo = new THREE.BoxGeometry(0.04, cabinetHeight - 0.2, cabinetDepth - 0.16);
    const leftSide = new THREE.Mesh(sidePanelGeo, this.materials.serverChassisMat);
    leftSide.position.set(-cabinetWidth / 2, cabinetHeight / 2, 0);
    leftSide.castShadow = true;
    this.group.add(leftSide);

    const rightSide = new THREE.Mesh(sidePanelGeo, this.materials.serverChassisMat);
    rightSide.position.set(cabinetWidth / 2, cabinetHeight / 2, 0);
    rightSide.castShadow = true;
    this.group.add(rightSide);

    // Front Tinted Glass / Acrylic Door
    const doorGeo = new THREE.BoxGeometry(cabinetWidth - 0.1, cabinetHeight - 0.2, 0.03);
    const door = new THREE.Mesh(doorGeo, this.materials.serverGlassDoorMat);
    door.position.set(0, cabinetHeight / 2, cabinetDepth / 2 + 0.02);
    this.group.add(door);
  }

  buildServerBlades() {
    const bladeConfigs = [
      {
        id: 'job-01',
        company: 'Bank Rakyat Indonesia (BRI)',
        title: 'BRIVA Modular Schedulers & SSIS Migration (Golang)',
        yPos: 3.4,
        accentColor: 0x10b981,
        ledCount: 5,
        ledMat: this.materials.ledGreenMat
      },
      {
        id: 'job-02',
        company: 'Hitachi Channel Solutions',
        title: 'IMHOTS ATM Monitoring & EJ Dashboard (Laravel)',
        yPos: 2.7,
        accentColor: 0x06b6d4,
        ledCount: 5,
        ledMat: this.materials.ledCyanMat
      },
      {
        id: 'job-03',
        company: 'PT Bank OCBC NISP Tbk',
        title: 'ProrRekonATM Desktop-to-Web Migration (React & Go)',
        yPos: 2.0,
        accentColor: 0xf59e0b,
        ledCount: 4,
        ledMat: this.materials.ledAmberMat
      },
      {
        id: 'job-04',
        company: 'PT Knusantara Semesta Madani',
        title: 'Backend API & System Analysis (Laravel)',
        yPos: 1.3,
        accentColor: 0xa855f7,
        ledCount: 4,
        ledMat: this.materials.ledPurpleMat
      }
    ];

    bladeConfigs.forEach((cfg) => {
      const bladeGroup = new THREE.Group();
      bladeGroup.position.set(0, cfg.yPos, 0.2);

      // Chassis Body (2U Server Form Factor)
      const chassisGeo = new THREE.BoxGeometry(1.4, 0.52, 1.3);
      const chassisMat = new THREE.MeshStandardMaterial({
        color: 0x131a24,
        roughness: 0.4,
        metalness: 0.75
      });
      const chassis = new THREE.Mesh(chassisGeo, chassisMat);
      chassis.castShadow = true;
      bladeGroup.add(chassis);

      // Front Bezel Plate with Accent Stripe
      const bezelGeo = new THREE.BoxGeometry(1.36, 0.48, 0.04);
      const bezelMat = new THREE.MeshStandardMaterial({
        color: 0x0a0f16,
        roughness: 0.3,
        metalness: 0.8
      });
      const bezel = new THREE.Mesh(bezelGeo, bezelMat);
      bezel.position.set(0, 0, 0.67);
      bladeGroup.add(bezel);

      // Status Indicator LED Bar
      const stripeGeo = new THREE.BoxGeometry(0.9, 0.02, 0.01);
      const stripeMat = new THREE.MeshBasicMaterial({ color: cfg.accentColor });
      const stripe = new THREE.Mesh(stripeGeo, stripeMat);
      stripe.position.set(-0.15, 0.16, 0.695);
      bladeGroup.add(stripe);

      // Interactive Click Target Plate
      const hitPlateGeo = new THREE.BoxGeometry(1.38, 0.5, 0.1);
      const hitPlateMat = new THREE.MeshBasicMaterial({
        color: cfg.accentColor,
        transparent: true,
        opacity: 0.0
      });
      const hitPlate = new THREE.Mesh(hitPlateGeo, hitPlateMat);
      hitPlate.position.set(0, 0, 0.7);

      // Store Metadata for Raycaster & Blueprint Modal
      hitPlate.userData = {
        isInteractive: true,
        type: 'server-blade',
        stationId: cfg.id,
        title: cfg.title,
        company: cfg.company,
        bladeParent: bladeGroup,
        defaultScale: 1.0
      };

      this.interactiveBlades.push(hitPlate);
      bladeGroup.add(hitPlate);

      // Activity Blinking LEDs
      for (let i = 0; i < cfg.ledCount; i++) {
        const ledGeo = new THREE.BoxGeometry(0.03, 0.03, 0.02);
        const led = new THREE.Mesh(ledGeo, cfg.ledMat);
        led.position.set(0.38 + i * 0.05, 0.15, 0.695);
        this.leds.push({ mesh: led, matOn: cfg.ledMat, baseFreq: 1 + i * 0.7 });
        bladeGroup.add(led);
      }

      this.group.add(bladeGroup);
    });
  }

  buildCoolingFans() {
    // 2 Top High-Flow Exhaust Ventilation Fans
    const fanGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.04, 16);
    const fanMat = new THREE.MeshStandardMaterial({
      color: 0x05070a,
      roughness: 0.5,
      metalness: 0.8
    });

    const fan1 = new THREE.Mesh(fanGeo, fanMat);
    fan1.position.set(-0.35, 4.82, 0);
    this.group.add(fan1);
    this.fanBlades.push(fan1);

    const fan2 = new THREE.Mesh(fanGeo, fanMat);
    fan2.position.set(0.35, 4.82, 0);
    this.group.add(fan2);
    this.fanBlades.push(fan2);
  }

  buildPatchCables() {
    // Curving patch cable bundles along front right rail
    const cableColors = [0x10b981, 0x06b6d4, 0xf59e0b];
    cableColors.forEach((col, idx) => {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.55, 3.4 - idx * 0.6, 0.7),
        new THREE.Vector3(0.68, 3.0 - idx * 0.5, 0.72),
        new THREE.Vector3(0.72, 2.2 - idx * 0.4, 0.74),
        new THREE.Vector3(0.65, 0.5, 0.7)
      ]);

      const tubeGeo = new THREE.TubeGeometry(curve, 20, 0.015, 8, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: col,
        roughness: 0.5,
        metalness: 0.3
      });
      const cable = new THREE.Mesh(tubeGeo, tubeMat);
      cable.castShadow = true;
      this.group.add(cable);
    });
  }

  getInteractiveObjects() {
    return this.interactiveBlades;
  }

  setHoveredBlade(bladeObject, isHovered) {
    if (!bladeObject || !bladeObject.userData || !bladeObject.userData.bladeParent) return;
    const parent = bladeObject.userData.bladeParent;

    if (isHovered) {
      parent.position.z = 0.32; // Blade slides forward slightly on hover
      bladeObject.material.opacity = 0.18; // Subtle energetic glow
    } else {
      parent.position.z = 0.2; // Return to slot
      bladeObject.material.opacity = 0.0;
    }
  }

  update(delta, time) {
    // 1. Rotate exhaust cooling fans
    this.fanBlades.forEach((fan) => {
      fan.rotation.y += delta * 6.0;
    });

    // 2. Animate server blade LED activity
    this.blinkTimer += delta;
    if (this.blinkTimer > 0.12) {
      this.blinkTimer = 0;
      this.leds.forEach((item) => {
        const shouldBlink = Math.sin(time * item.baseFreq * 5) > 0.1;
        item.mesh.material = shouldBlink ? item.matOn : this.materials.ledOffMat;
      });
    }
  }

  destroy() {
    this.scene.remove(this.group);
  }
}

export default ServerRackStation;
