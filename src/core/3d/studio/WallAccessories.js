import * as THREE from 'three';

/**
 * WallAccessories (Academic Diploma, Bookshelf & Engineering Artifacts)
 * Represents Education & Intellectual Foundation:
 * - Universitas Mercu Buana S.Kom. (GPA 3.71 Cum Laude) framed diploma with CanvasTexture
 * - Bookshelf featuring essential backend & distributed systems reference books
 */
export class WallAccessories {
  constructor(scene, materials) {
    this.scene = scene;
    this.materials = materials;
    this.group = new THREE.Group();
    this.group.name = 'WallAccessories';

    this.diplomaCanvas = null;
    this.diplomaTexture = null;

    this.init();
    this.scene.add(this.group);
  }

  init() {
    this.buildFramedDiploma();
    this.buildBookshelf();
  }

  buildFramedDiploma() {
    // 1. Setup Canvas for Diploma
    this.diplomaCanvas = document.createElement('canvas');
    this.diplomaCanvas.width = 512;
    this.diplomaCanvas.height = 384;
    const ctx = this.diplomaCanvas.getContext('2d');

    // Parchment / Clean ivory paper background
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, 512, 384);

    // Elegant double gold border
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 6;
    ctx.strokeRect(16, 16, 480, 352);
    ctx.lineWidth = 2;
    ctx.strokeRect(26, 26, 460, 332);

    // Text Content
    ctx.textAlign = 'center';
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 18px "Georgia", serif';
    ctx.fillText('UNIVERSITAS MERCU BUANA', 256, 75);

    ctx.fillStyle = '#64748b';
    ctx.font = 'italic 13px "Georgia", serif';
    ctx.fillText('FAKULTAS ILMU KOMPUTER - TEKNIK INFORMATIKA', 256, 102);

    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 22px "Georgia", serif';
    ctx.fillText('MUNARDI, S.Kom.', 256, 155);

    ctx.fillStyle = '#059669';
    ctx.font = 'bold 15px "Georgia", serif';
    ctx.fillText('PREDIKAT: CUM LAUDE (GPA: 3.71 / 4.00)', 256, 195);

    ctx.fillStyle = '#64748b';
    ctx.font = '12px "Georgia", serif';
    ctx.fillText('Bachelor of Computer Science • Jakarta, Indonesia', 256, 230);

    // Gold embossed seal circle
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(256, 285, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 10px sans-serif';
    ctx.fillText('CUM LAUDE', 256, 289);

    this.diplomaTexture = new THREE.CanvasTexture(this.diplomaCanvas);
    this.diplomaTexture.minFilter = THREE.LinearFilter;

    // 2. Physical 3D Frame Mounted on Back Wall
    const frameGroup = new THREE.Group();
    frameGroup.position.set(0.4, 4.2, -4.9);

    // Outer Frame (Deep Walnut & Gold Accent)
    const frameGeo = new THREE.BoxGeometry(1.6, 1.25, 0.05);
    const frameMesh = new THREE.Mesh(frameGeo, this.materials.woodAcousticSlatMat);
    frameMesh.castShadow = true;
    frameGroup.add(frameMesh);

    // Diploma Face
    const docGeo = new THREE.PlaneGeometry(1.48, 1.14);
    const docMat = new THREE.MeshBasicMaterial({ map: this.diplomaTexture });
    const docMesh = new THREE.Mesh(docGeo, docMat);
    docMesh.position.set(0, 0, 0.027);
    frameGroup.add(docMesh);

    this.group.add(frameGroup);
  }

  buildBookshelf() {
    const shelfGroup = new THREE.Group();
    shelfGroup.position.set(-5.6, 3.8, -4.9);

    // Floating Shelf Planks
    const plankGeo = new THREE.BoxGeometry(2.0, 0.06, 0.35);
    const plank1 = new THREE.Mesh(plankGeo, this.materials.woodAcousticSlatMat);
    plank1.position.set(0, 0, 0.15);
    plank1.castShadow = true;
    shelfGroup.add(plank1);

    const plank2 = new THREE.Mesh(plankGeo, this.materials.woodAcousticSlatMat);
    plank2.position.set(0, 0.8, 0.15);
    plank2.castShadow = true;
    shelfGroup.add(plank2);

    // Low-poly Book Spines
    const bookColors = [0x06b6d4, 0x10b981, 0xf59e0b, 0x3b82f6, 0x6366f1, 0xec4899];
    bookColors.forEach((color, idx) => {
      const bookHeight = 0.42 + (idx % 3) * 0.06;
      const bookWidth = 0.065 + (idx % 2) * 0.02;
      const bookGeo = new THREE.BoxGeometry(bookWidth, bookHeight, 0.28);
      const bookMat = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.6,
        metalness: 0.1
      });
      const book = new THREE.Mesh(bookGeo, bookMat);
      book.position.set(-0.6 + idx * 0.14, 0.03 + bookHeight / 2, 0.15);
      book.castShadow = true;
      shelfGroup.add(book);
    });

    this.group.add(shelfGroup);
  }

  destroy() {
    this.scene.remove(this.group);
    if (this.diplomaTexture) this.diplomaTexture.dispose();
  }
}

export default WallAccessories;
