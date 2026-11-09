import * as THREE from 'three';

/**
 * DeveloperWorkstation (Physical Engineering Desk, Dual Monitors, Chair, Peripherals)
 * The tactile physical heart of the portfolio. Features:
 * - Live dynamic CanvasTexture monitors (Golang terminal & AS400 green-screen queries)
 * - Physical desk lamp with cast-shadow spotlight
 * - Mechanical keyboard with individually modeled keycaps
 * - Ergonomic developer chair & laptop
 */
export class DeveloperWorkstation {
  constructor(scene, materials) {
    this.scene = scene;
    this.materials = materials;
    this.group = new THREE.Group();
    this.group.name = 'DeveloperWorkstation';
    this.group.position.set(1.2, 0, -0.6);

    // Dynamic Screen Textures & Canvases
    this.terminalCanvas = null;
    this.terminalCtx = null;
    this.terminalTexture = null;

    this.as400Canvas = null;
    this.as400Ctx = null;
    this.as400Texture = null;

    this.terminalLines = [
      'munardi@core-infra:~$ go run cmd/scheduler/main.go',
      '[INIT] sch-log-activity-briva: central logging hub active',
      '[BRIVA] sch-parse-file-merah-putih: MinIO parameter synced',
      '[ETL] Clean Architecture: ZIP archive extracted & parsed',
      '[DB] SQL Server batch workflow: transaction committed OK',
      '[K8s] Health check probe: HTTP 200 OK (Pod replica ready)',
      '[AUDIT] File reconciliation verified • Status flagged DONE',
      '[INFO] Waiting next cron tick (interval: 300s)...'
    ];
    this.currentTermLine = 0;
    this.termUpdateTimer = 0;

    this.as400Lines = [
      'IBM iSeries AS400 - QUERY INSPECTION',
      '====================================',
      'SELECT RECON_ID, ATM_ID, AMT, STATUS',
      'FROM PROD_LIB.PROREKON_ATM',
      'WHERE RECON_DATE = CURRENT_DATE',
      '------------------------------------',
      'ATM-0491 | BRIVA-NET | $1,200 | OK',
      'ATM-1082 | HITACHI-EJ| $4,500 | OK',
      'ATM-2219 | CASH-DISP | $3,000 | OK',
      'TOTAL BALANCED: 100% RECONCILED'
    ];

    this.init();
    this.scene.add(this.group);
  }

  init() {
    this.buildDesk();
    this.buildMonitors();
    this.buildKeyboardAndMouse();
    this.buildDeskLamp();
    this.buildChair();
    this.buildLaptopAndAccessories();
  }

  buildDesk() {
    // 1. Desk Top (Smooth Dark Slate Finish)
    const topGeo = new THREE.BoxGeometry(4.2, 0.1, 2.0);
    const topMesh = new THREE.Mesh(topGeo, this.materials.deskTopMat);
    topMesh.position.set(0, 1.45, 0);
    topMesh.castShadow = true;
    topMesh.receiveShadow = true;
    this.group.add(topMesh);

    // 2. Desk Metal Frame (Legs & Crossbeams)
    const legGeo = new THREE.BoxGeometry(0.1, 1.4, 0.1);
    const legPositions = [
      [-1.95, 0.7, -0.85],
      [1.95, 0.7, -0.85],
      [-1.95, 0.7, 0.85],
      [1.95, 0.7, 0.85]
    ];

    legPositions.forEach(([x, y, z]) => {
      const leg = new THREE.Mesh(legGeo, this.materials.metalFrameMat);
      leg.position.set(x, y, z);
      leg.castShadow = true;
      leg.receiveShadow = true;
      this.group.add(leg);
    });

    // Crossbars for structural realism
    const crossbarGeo = new THREE.BoxGeometry(3.8, 0.08, 0.08);
    const crossbar = new THREE.Mesh(crossbarGeo, this.materials.metalFrameMat);
    crossbar.position.set(0, 0.35, -0.85);
    crossbar.castShadow = true;
    this.group.add(crossbar);
  }

  buildMonitors() {
    // 1. Setup Canvas 1: Golang Backend Terminal
    this.terminalCanvas = document.createElement('canvas');
    this.terminalCanvas.width = 1024;
    this.terminalCanvas.height = 512;
    this.terminalCtx = this.terminalCanvas.getContext('2d');
    this.renderTerminalContent();

    this.terminalTexture = new THREE.CanvasTexture(this.terminalCanvas);
    this.terminalTexture.minFilter = THREE.LinearFilter;
    const terminalScreenMat = new THREE.MeshBasicMaterial({
      map: this.terminalTexture
    });

    // Main Ultrawide Monitor (Center)
    const monitorArmGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.6, 12);
    const monitorArm = new THREE.Mesh(monitorArmGeo, this.materials.metalFrameMat);
    monitorArm.position.set(0, 1.75, -0.6);
    monitorArm.castShadow = true;
    this.group.add(monitorArm);

    const mainBezelGeo = new THREE.BoxGeometry(2.4, 1.1, 0.06);
    const mainBezel = new THREE.Mesh(mainBezelGeo, this.materials.bezelMat);
    mainBezel.position.set(0, 2.2, -0.55);
    mainBezel.castShadow = true;
    this.group.add(mainBezel);

    const mainScreenGeo = new THREE.PlaneGeometry(2.34, 1.04);
    const mainScreen = new THREE.Mesh(mainScreenGeo, terminalScreenMat);
    mainScreen.position.set(0, 2.2, -0.518);
    this.group.add(mainScreen);

    // 2. Setup Canvas 2: AS400 Green-Screen Query Terminal
    this.as400Canvas = document.createElement('canvas');
    this.as400Canvas.width = 512;
    this.as400Canvas.height = 768;
    this.as400Ctx = this.as400Canvas.getContext('2d');
    this.renderAS400Content();

    this.as400Texture = new THREE.CanvasTexture(this.as400Canvas);
    this.as400Texture.minFilter = THREE.LinearFilter;
    const as400ScreenMat = new THREE.MeshBasicMaterial({
      map: this.as400Texture
    });

    // Secondary Portrait Monitor (Angled on Left)
    const portBezelGeo = new THREE.BoxGeometry(0.85, 1.35, 0.06);
    const portBezel = new THREE.Mesh(portBezelGeo, this.materials.bezelMat);
    portBezel.position.set(-1.6, 2.25, -0.38);
    portBezel.rotation.y = 0.38; // Angled inward
    portBezel.castShadow = true;
    this.group.add(portBezel);

    const portScreenGeo = new THREE.PlaneGeometry(0.80, 1.30);
    const portScreen = new THREE.Mesh(portScreenGeo, as400ScreenMat);
    portScreen.position.set(-1.6, 2.25, -0.348);
    portScreen.rotation.y = 0.38;
    this.group.add(portScreen);
  }

  renderTerminalContent() {
    const ctx = this.terminalCtx;
    if (!ctx) return;

    // Dark sleek terminal background
    ctx.fillStyle = '#080c14';
    ctx.fillRect(0, 0, 1024, 512);

    // Window top title bar
    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, 1024, 44);

    // Mac window dots
    ctx.fillStyle = '#ef4444';
    ctx.beginPath(); ctx.arc(28, 22, 7, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath(); ctx.arc(52, 22, 7, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#10b981';
    ctx.beginPath(); ctx.arc(76, 22, 7, 0, Math.PI * 2); ctx.fill();

    // Title
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 16px "SF Mono", monospace';
    ctx.fillText('bash - munardi@briva-cluster (Go 1.22 / Clean Architecture)', 120, 28);

    // Terminal Code Lines
    ctx.font = '18px "SF Mono", "Fira Code", monospace';
    let y = 84;
    this.terminalLines.forEach((line) => {
      if (line.startsWith('munardi@')) {
        ctx.fillStyle = '#06b6d4';
      } else if (line.includes('[INIT]') || line.includes('[OK]')) {
        ctx.fillStyle = '#10b981';
      } else if (line.includes('[CRYPTO]') || line.includes('[DB]')) {
        ctx.fillStyle = '#38bdf8';
      } else if (line.includes('[K8s]')) {
        ctx.fillStyle = '#a855f7';
      } else {
        ctx.fillStyle = '#cbd5e1';
      }
      ctx.fillText(line, 28, y);
      y += 34;
    });

    // Blinking cursor block
    ctx.fillStyle = '#06b6d4';
    ctx.fillRect(28, y - 8, 12, 20);
  }

  renderAS400Content() {
    const ctx = this.as400Ctx;
    if (!ctx) return;

    // Classic deep green-screen terminal
    ctx.fillStyle = '#040d06';
    ctx.fillRect(0, 0, 512, 768);

    ctx.fillStyle = '#15803d';
    ctx.fillRect(0, 0, 512, 38);

    ctx.fillStyle = '#dcfce7';
    ctx.font = 'bold 16px monospace';
    ctx.fillText('AS400 TERMINAL 5250', 20, 25);

    ctx.fillStyle = '#22c55e';
    ctx.font = '16px monospace';
    let y = 74;
    this.as400Lines.forEach((line) => {
      ctx.fillText(line, 20, y);
      y += 30;
    });
  }

  buildKeyboardAndMouse() {
    // Keyboard Base
    const kbGeo = new THREE.BoxGeometry(0.9, 0.025, 0.32);
    const kbBase = new THREE.Mesh(kbGeo, this.materials.bezelMat);
    kbBase.position.set(-0.1, 1.515, 0.3);
    kbBase.castShadow = true;
    this.group.add(kbBase);

    // Keycaps Grid (Low-poly mechanical key aesthetic)
    const keyGeo = new THREE.BoxGeometry(0.05, 0.02, 0.045);
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 12; c++) {
        const mat = (r === 2 && c === 11) ? this.materials.keycapAccentMat : this.materials.keycapMat;
        const key = new THREE.Mesh(keyGeo, mat);
        key.position.set(-0.4 + c * 0.068, 1.53, 0.20 + r * 0.065);
        this.group.add(key);
      }
    }

    // Mousepad
    const padGeo = new THREE.BoxGeometry(1.6, 0.005, 0.65);
    const mousepad = new THREE.Mesh(padGeo, this.materials.chairLeatherMat);
    mousepad.position.set(0.1, 1.503, 0.3);
    mousepad.receiveShadow = true;
    this.group.add(mousepad);

    // Mouse
    const mouseGeo = new THREE.BoxGeometry(0.14, 0.035, 0.22);
    const mouse = new THREE.Mesh(mouseGeo, this.materials.bezelMat);
    mouse.position.set(0.68, 1.52, 0.32);
    mouse.castShadow = true;
    this.group.add(mouse);
  }

  buildDeskLamp() {
    // Desk Lamp Base
    const lampBaseGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.03, 16);
    const lampBase = new THREE.Mesh(lampBaseGeo, this.materials.metalFrameMat);
    lampBase.position.set(-1.8, 1.515, -0.7);
    lampBase.castShadow = true;
    this.group.add(lampBase);

    // Articulated Arm
    const armLowerGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.7, 8);
    const armLower = new THREE.Mesh(armLowerGeo, this.materials.metalFrameMat);
    armLower.position.set(-1.75, 1.85, -0.65);
    armLower.rotation.z = -0.3;
    armLower.castShadow = true;
    this.group.add(armLower);

    // Lamp Shade Cone
    const shadeGeo = new THREE.ConeGeometry(0.15, 0.22, 16, 1, true);
    const lampShade = new THREE.Mesh(shadeGeo, this.materials.metalFrameMat);
    lampShade.position.set(-1.45, 2.15, -0.4);
    lampShade.rotation.x = Math.PI * 0.75;
    lampShade.rotation.z = -0.4;
    lampShade.castShadow = true;
    this.group.add(lampShade);

    // Physical SpotLight casting warm pool onto desk surface
    const deskSpot = new THREE.SpotLight(0xffedd5, 2.8, 4.5, Math.PI / 4, 0.45, 1.2);
    deskSpot.position.set(-1.45, 2.15, -0.4);
    deskSpot.target.position.set(-0.3, 1.5, 0.1);
    deskSpot.castShadow = true;
    deskSpot.shadow.bias = -0.001;
    deskSpot.shadow.mapSize.width = 1024;
    deskSpot.shadow.mapSize.height = 1024;

    this.group.add(deskSpot);
    this.group.add(deskSpot.target);
  }

  buildChair() {
    const chairGroup = new THREE.Group();
    chairGroup.position.set(-0.1, 0, 1.1);

    // Star Base (5 legs)
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const legGeo = new THREE.BoxGeometry(0.48, 0.04, 0.06);
      const leg = new THREE.Mesh(legGeo, this.materials.metalFrameMat);
      leg.position.set(Math.cos(angle) * 0.24, 0.12, Math.sin(angle) * 0.24);
      leg.rotation.y = -angle;
      leg.castShadow = true;
      chairGroup.add(leg);

      // Caster wheel
      const wheelGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.04, 8);
      const wheel = new THREE.Mesh(wheelGeo, this.materials.bezelMat);
      wheel.position.set(Math.cos(angle) * 0.45, 0.04, Math.sin(angle) * 0.45);
      wheel.rotation.z = Math.PI / 2;
      chairGroup.add(wheel);
    }

    // Pneumatic Cylinder
    const cylGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.6, 12);
    const cyl = new THREE.Mesh(cylGeo, this.materials.metalFrameMat);
    cyl.position.set(0, 0.45, 0);
    cyl.castShadow = true;
    chairGroup.add(cyl);

    // Seat Cushion
    const seatGeo = new THREE.BoxGeometry(0.72, 0.1, 0.68);
    const seat = new THREE.Mesh(seatGeo, this.materials.chairLeatherMat);
    seat.position.set(0, 0.78, 0);
    seat.castShadow = true;
    chairGroup.add(seat);

    // Ergonomic Curved Mesh Backrest
    const backGeo = new THREE.BoxGeometry(0.68, 0.85, 0.08);
    const back = new THREE.Mesh(backGeo, this.materials.chairMeshMat);
    back.position.set(0, 1.25, 0.32);
    back.rotation.x = -0.1;
    back.castShadow = true;
    chairGroup.add(back);

    // Armrests
    const armGeo = new THREE.BoxGeometry(0.08, 0.28, 0.35);
    const armL = new THREE.Mesh(armGeo, this.materials.metalFrameMat);
    armL.position.set(-0.39, 0.98, 0.05);
    armL.castShadow = true;
    chairGroup.add(armL);

    const armR = new THREE.Mesh(armGeo, this.materials.metalFrameMat);
    armR.position.set(0.39, 0.98, 0.05);
    armR.castShadow = true;
    chairGroup.add(armR);

    this.group.add(chairGroup);
  }

  buildLaptopAndAccessories() {
    // Open Laptop on right side of desk
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(1.4, 1.505, -0.1);
    laptopGroup.rotation.y = -0.32; // Angled toward chair

    // Base chassis
    const baseGeo = new THREE.BoxGeometry(0.55, 0.015, 0.38);
    const base = new THREE.Mesh(baseGeo, this.materials.laptopAluminumMat);
    base.castShadow = true;
    laptopGroup.add(base);

    // Display lid tilted back
    const lidGeo = new THREE.BoxGeometry(0.55, 0.38, 0.012);
    const lid = new THREE.Mesh(lidGeo, this.materials.laptopAluminumMat);
    lid.position.set(0, 0.18, -0.19);
    lid.rotation.x = -0.22;
    lid.castShadow = true;
    laptopGroup.add(lid);

    // Glowing laptop screen with cyan accent
    const screenGeo = new THREE.PlaneGeometry(0.52, 0.35);
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 0.18, -0.182);
    screen.rotation.x = -0.22;
    laptopGroup.add(screen);

    this.group.add(laptopGroup);

    // Ceramic Coffee Mug with steam
    const mugGeo = new THREE.CylinderGeometry(0.07, 0.065, 0.14, 16);
    const mug = new THREE.Mesh(mugGeo, this.materials.mugMat);
    mug.position.set(0.95, 1.57, -0.6);
    mug.castShadow = true;
    this.group.add(mug);
  }

  update(delta) {
    // Dynamic terminal text line scrolling
    this.termUpdateTimer += delta;
    if (this.termUpdateTimer > 3.0) {
      this.termUpdateTimer = 0;
      this.currentTermLine = (this.currentTermLine + 1) % this.terminalLines.length;

      // Rotate terminal log lines
      const first = this.terminalLines.shift();
      this.terminalLines.push(first);
      this.renderTerminalContent();
      if (this.terminalTexture) {
        this.terminalTexture.needsUpdate = true;
      }
    }
  }

  destroy() {
    this.scene.remove(this.group);
    if (this.terminalTexture) this.terminalTexture.dispose();
    if (this.as400Texture) this.as400Texture.dispose();
  }
}

export default DeveloperWorkstation;
