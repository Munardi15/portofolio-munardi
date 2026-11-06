# MASTER PROMPT: UNIVERSAL 3D INTERACTIVE WEB SHOWCASE
> **File Panduan & Template Prompt AI Generatif Universal**  
> Dirancang agar dapat dieksekusi dengan hasil sempurna oleh model AI apa pun (Gemini, Claude, GPT-4o, Cursor, Windsurf, Bolt, v0) tanpa halusinasi dan tanpa bergantung pada tema tertentu.

---

## DAFTAR ISI
1. [Cara Menggunakan Dokumen Ini](#1-cara-menggunakan-dokumen-ini)
2. [Panduan Menyiapkan Aset 3D Gratis (Rp0)](#2-panduan-menyiapkan-aset-3d-gratis-rp0)
3. [MASTER PROMPT (Tinggal Copy-Paste ke AI)](#3-master-prompt-copy-paste-ke-ai)
4. [Daftar Preset Tema Populer Siap Pakai](#4-daftar-preset-tema-populer-siap-pakai)

---

## 1. CARA MENGGUNAKAN DOKUMEN INI

1. Salin teks yang ada di dalam kotak **Bagian 3 (MASTER PROMPT)** di bawah.
2. Pada bagian **`[KONFIGURASI TEMA PROYEK]`**, sesuaikan nama proyek, warna, dan daftar objek 3D yang ingin Anda tampilkan (atau biarkan default untuk mode demo).
3. Kirimkan prompt tersebut ke AI (Gemini / Claude / ChatGPT / Cursor Composer).
4. AI akan menghasilkan file proyek lengkap (`index.html`, `style.css`, dan `main.js`) yang langsung bisa dijalankan dengan perintah `npm run dev`.

---

## 2. PANDUAN MENYIAPKAN ASET 3D GRATIS (RP0)

Website ini menggunakan model 3D berformat **`.glb`** (GL Transmission Format Binary). Anda memiliki 2 cara gratis untuk menyiapkannya:

### Opsi A: Generate dari Gambar via AI (Seperti di Video Reels)
* **Meshy AI (`meshy.ai`)**: Buat akun gratis. Pilih menu *Image-to-3D*, upload foto objek dari sudut depan/samping, tunggu 1-2 menit, lalu download file `.glb`.
* **Tripo3D (`tripo3d.ai`)**: Alternatif gratis tercepat untuk generate 3D dari teks prompt atau gambar ke format `.glb`.
* **Luma AI Genie (`lumalabs.ai`)**: Menghasilkan objek 3D realistis siap pakai dalam format `.glb`.

### Opsi B: Download Model 3D Jadi (Gratis & Berkualitas Tinggi)
* **Sketchfab (`sketchfab.com`)**: Cari objek (misal: *sneaker, watch, camera, drone, sword*), centang filter **Downloadable** dan lisensi **CC0 / Free**. Download format `.glb`.
* **Poly Pizza (`poly.pizza`)**: Ribuan model 3D low-poly & mid-poly gratis berformat `.glb`.
* **Kenney 3D Assets (`kenney.nl`)**: Koleksi ratusan aset 3D domain publik tanpa atribusi.

> **Tips Ukuran File:** Usahakan ukuran file `.glb` di bawah **5 MB** per objek agar website memuat secara instan tanpa lag.

---

## 3. MASTER PROMPT (COPY-PASTE KE AI)

*Salin seluruh blok di bawah garis ini dan tempelkan ke AI:*

---

```markdown
Anda adalah seorang "Principal Creative Technologist & Senior WebGL Architect" kelas dunia yang berpengalaman membangun website pemenang penghargaan Awwwards, FWA, dan Apple Showcase.

TUGAS ANDA:
Bangun sebuah aplikasi web interaktif 3D sinematik "Single Page Application (SPA)" modern menggunakan Vite, Vanilla JavaScript/TypeScript, dan Three.js (WebGL). Website ini menampilkan showcase produk/objek 3D interaktif di mana pengguna dapat melihat objek 3D melayang secara realistis, berinteraksi lewat gerakan mouse (parallax), dan memilih/mengganti objek 3D melalui dock menu interaktif di bagian bawah layar.

=============================================================================
[KONFIGURASI TEMA PROYEK] (Ubah variabel di bawah sesuai kebutuhan pengguna)
=============================================================================
- NAMA_PROYEK: "AURA // Next-Gen Spatial Showcase"
- SLUG_BRAND: "AURA SPATIAL"
- TAGLINE_HERO: "Redefining Physical Dimensions in Digital Space."
- DESKRIPSI_HERO: "Sebuah eksplorasi visual interaktif yang menyatukan rendering 3D real-time, pencahayaan sinematik, dan rekayasa antarmuka masa depan."
- TOMBOL_CTA_PRIMARY: "Eksplorasi Katalog"
- TOMBOL_CTA_SECONDARY: "Spesifikasi Teknis"

- PALET_WARNA:
  * Warna_Background: "#0A0A0C" (Deep Void Black)
  * Warna_Surface_Card: "rgba(18, 18, 22, 0.65)" (Glassmorphism Dark)
  * Warna_Aksen_Glow: "#00F0FF" (Electric Cyan / Neon)
  * Warna_Aksen_Secondary: "#FF0055" (Hot Magenta / Coral Accent)
  * Warna_Teks_Utama: "#FFFFFF" (Pure White)
  * Warna_Teks_Muted: "#8E8E9F" (Cool Slate Gray)

- DAFTAR_OBJEK_3D:
  [
    {
      "id": "item-01",
      "nama": "Cybernetic Core V1",
      "kategori": "Spatial Hardware",
      "fileGlb": "./assets/3d/model-1.glb",
      "skala": 1.8,
      "rotasiOffset": [0, 0, 0],
      "deskripsi": "Modul komputasi spasial generasi mutakhir dengan arsitektur pendingin cryogenic.",
      "tag": "FLAGSHIP",
      "fallbackPrimitive": "TorusKnot"
    },
    {
      "id": "item-02",
      "nama": "Aero Kinetic Capsule",
      "kategori": "Aerospace Prototype",
      "fileGlb": "./assets/3d/model-2.glb",
      "skala": 1.5,
      "rotasiOffset": [0, 0.5, 0],
      "deskripsi": "Kapsul aerodinamis berbahan serat karbon monocoque untuk efisiensi manuver atmosferik.",
      "tag": "EXPERIMENTAL",
      "fallbackPrimitive": "Icosahedron"
    },
    {
      "id": "item-03",
      "nama": "Quantum Relay Node",
      "kategori": "Sub-atomic Network",
      "fileGlb": "./assets/3d/model-3.glb",
      "skala": 1.6,
      "rotasiOffset": [0.2, 0, 0],
      "deskripsi": "Transceiver teleportasi data quantum berlatensi nol dengan pelindung fluks magnetik.",
      "tag": "SECURE",
      "fallbackPrimitive": "Octahedron"
    }
  ]
=============================================================================

PERSYARATAN ARSITEKTUR & REKAYASA SISTEM:

1. ZERO EXTERNAL FRAMEWORK LOCK-IN:
   Gunakan struktur Vite standar berbasis Vanilla JavaScript (atau TypeScript) murni agar kode bersih, memiliki performa 60 FPS konstan, dan mudah diintegrasikan ke framework apa pun (Next.js, React, Vue, Svelte, atau static HTML biasa).
   Dependencies yang diizinkan hanya:
   - `three`: ^0.160.0 (Core 3D Engine & GLTFLoader)
   - `vite`: ^5.0.0 (Development & Bundler)

2. ARSITEKTUR THREE.JS RESILIENCE & FALLBACK ENGINE (KRUSIAL):
   - Gunakan `THREE.WebGLRenderer` dengan parameter `{ alpha: true, antialias: true, powerPreference: 'high-performance' }`.
   - Setup Tone Mapping: `renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.2;`.
   - Setup Lighting Rig Sinematik 3-Titik:
     a. `AmbientLight` (intensitas 0.6) untuk dasar visual.
     b. `DirectionalLight` (key light putih, intensitas 2.5) dari sudut serong atas.
     c. `PointLight` (rim/accent light) dengan warna yang mengikuti `Warna_Aksen_Glow` (intensitas 3.5) untuk memberi siluet berkilau pada tepi objek 3D.
   - FALLBACK MEKANISME TANPA GAGAL:
     Jika file file `.glb` tidak ditemukan (misal pengguna belum meletakkan file 3D fisik), sistem TIDAK BOLEH eror atau menampilkan layar kosong! Sistem WAJIB otomatis membuat objek 3D prosedural menggunakan Three.js Mesh murni (`MeshPhysicalMaterial` dengan `metalness: 0.8`, `roughness: 0.2`, `clearcoat: 1.0`, `wireframe: false`) berdasarkan konfigurasi `fallbackPrimitive` (TorusKnotGeometry, IcosahedronGeometry, dll.). Dengan cara ini, website dijamin 100% langsung tampil memukau sejak pertama kali di-run!

3. REKAYASA ANIMASI SINEMATIK:
   - Floating Oscillation (Efek Mengambang Alami):
     Pada render loop, terapkan rumus osilasi harmonik:
     `model.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.12;`
     `model.rotation.y += 0.006;`
   - Parallax Mouse Tracking via Lerp (Linear Interpolation):
     Jangan menggerakkan kamera secara kaku. Tangkap koordinat mouse (`clientX / innerWidth - 0.5`) dan terapkan interpolasi lerp halus:
     `camera.position.x += (targetMouseX * 1.2 - camera.position.x) * 0.05;`
     `camera.position.y += (-targetMouseY * 1.2 - camera.position.y) * 0.05;`
     `camera.lookAt(0, 0, 0);`
   - Transisi Pergantian Objek Halus:
     Ketika pengguna memilih item lain di dock bawah:
     Model aktif melakukan animasi scaling down ke 0 (`scale -> 0`), lalu model baru di-swap dan di-scale up kembali (`scale -> target`) secara elegan, sementara data teks (nama, kategori, deskripsi) berganti dengan transisi fade-in.

4. USER INTERFACE & DOCK CAROUSEL:
   - Header: Brand logo/slug, status live indicator hijau berkedip, tombol toggle audio ambience / fullscreen.
   - Main Canvas: Kanvas WebGL 3D yang mengisi seluruh layar di belakang teks (z-index 1).
   - Dynamic Info Card (Overlay Kanan/Tengah):
     Menampilkan Badge Kategori, Judul Objek aktif, Deskripsi teknis, Tombol CTA Interaktif, dan pagination counter (misal: "01 / 03").
   - Bottom Dock Switcher (Bawah Layar):
     Menu dock melayang bergaya macOS/iOS glassmorphism (`backdrop-filter: blur(20px)`), menampilkan tombol/ikon setiap objek. Item yang aktif memiliki border menyala (`Warna_Aksen_Glow`) dan indikator titik bersinar.
   - Mobile Responsiveness & Touch Support:
     Pada layar smartphone (< 768px):
     - Ukuran kanvas 3D otomatis menyesuaikan viewport.
     - Dock bawah dapat di-scroll secara horizontal (`overflow-x: auto; -webkit-overflow-scrolling: touch;`).
     - Teks judul tidak saling bertumpuk dengan objek 3D.
     - Device Pixel Ratio dibatasi maksimal 2 (`Math.min(window.devicePixelRatio, 2)`) demi menghemat baterai HP dan mencegah frame drop.

5. STRUKTUR FILE OUTPUT YANG WAJIB ANDA BUAT:
   Buat dan sajikan kode lengkap tanpa potongan ("no placeholder, no TODO, fully implemented") untuk 4 file berikut:
   1. `package.json` (Konfigurasi dependencies Vite dan Three.js)
   2. `index.html` (Markup semantik, Google Fonts, dan container canvas)
   3. `style.css` (Desain glassmorphism, tipografi futuristik, animasi glowing, layout responsif mobile)
   4. `src/main.js` (Engine Three.js komplit: Scene, Camera, Renderer, Lights, GLTFLoader + Fallback Mesh, Parallax Lerp, Dynamic Dock Switcher Controller, Resize Handler)

Mulai eksekusi sekarang dan tuliskan seluruh kode lengkapnya langkah demi langkah!
```

---

## 4. DAFTAR PRESET TEMA POPULER SIAP PAKAI

Anda cukup mengganti blok `[KONFIGURASI TEMA PROYEK]` pada prompt di atas dengan salah satu preset di bawah ini:

### Preset 1: Luxury Automotive / Cyberpunk Vehicle
```yaml
NAMA_PROYEK: "APEX // Hyper-Electric Mobility"
SLUG_BRAND: "APEX VEHICLES"
Warna_Background: "#070709"
Warna_Aksen_Glow: "#FF5E00" # Radiant Neon Amber
Warna_Aksen_Secondary: "#00E5FF" # Cyan Beam
DAFTAR_OBJEK_3D:
  - nama: "Apex GT Stealth" (Kategori: Hypercar, fileGlb: "./assets/3d/car.glb")
  - nama: "Aero Turbine Rim" (Kategori: Carbon Wheel, fileGlb: "./assets/3d/rim.glb")
  - nama: "Quantum Steering Yoke" (Kategori: Cockpit Control, fileGlb: "./assets/3d/wheel.glb")
```

### Preset 2: Streetwear / Sneaker & Apparel
```yaml
NAMA_PROYEK: "STRIDE // Kinetic Footwear Lab"
SLUG_BRAND: "STRIDE 00"
Warna_Background: "#0D0D11"
Warna_Aksen_Glow: "#CCFF00" # Volt Acid Lime
Warna_Aksen_Secondary: "#7000FF" # Cyber Violet
DAFTAR_OBJEK_3D:
  - nama: "Strider Volt Runner" (Kategori: Footwear, fileGlb: "./assets/3d/sneaker.glb")
  - nama: "Modular Cargo Hoodie" (Kategori: Apparel, fileGlb: "./assets/3d/hoodie.glb")
  - nama: "Tactical Visor Goggles" (Kategori: Eyewear, fileGlb: "./assets/3d/visor.glb")
```

### Preset 3: Fintech & Modern Banking Hardware
```yaml
NAMA_PROYEK: "NEXUS // Enterprise Core Ledger"
SLUG_BRAND: "NEXUS BANKING"
Warna_Background: "#050B14"
Warna_Aksen_Glow: "#0066FF" # Royal Sapphire
Warna_Aksen_Secondary: "#00FFA3" # Fintech Mint
DAFTAR_OBJEK_3D:
  - nama: "Nexus Titanium Card" (Kategori: Smart Card, fileGlb: "./assets/3d/card.glb")
  - nama: "Biometric ATM Module" (Kategori: Cash Terminal, fileGlb: "./assets/3d/atm.glb")
  - nama: "Hardware Security Vault" (Kategori: Core Ledger, fileGlb: "./assets/3d/vault.glb")
```

### Preset 4: Mythological / Fantasy Cultural Showcase (Mirip Video 1)
```yaml
NAMA_PROYEK: "MYSTIKA // Nusantara Relics"
SLUG_BRAND: "MYSTIKA STUDIO"
Warna_Background: "#140A08" # Warm Candlelit Black
Warna_Aksen_Glow: "#E05A4E" # Crimson Coral
Warna_Aksen_Secondary: "#E8B33C" # Ancient Gold
DAFTAR_OBJEK_3D:
  - nama: "Keris Pusaka Naga" (Kategori: Ancient Blade, fileGlb: "./assets/3d/keris.glb")
  - nama: "Boneka Arwah Voodoo" (Kategori: Ritual Totem, fileGlb: "./assets/3d/voodoo.glb")
  - nama: "Kartu Tarot Mistis" (Kategori: Divination Deck, fileGlb: "./assets/3d/tarot.glb")
```

---

## 5. STRUKTUR DIREKTORI PROYEK REKOMENDASI

Ketika AI telah meng-generate kode dari prompt di atas, susun file proyek Anda seperti ini:

```
my-3d-showcase/
├── index.html
├── style.css
├── package.json
├── vite.config.js
├── src/
│   └── main.js
└── public/
    └── assets/
        └── 3d/
            ├── model-1.glb   (letakkan file 3D Anda di sini)
            ├── model-2.glb
            └── model-3.glb
```

Jalankan proyek dengan:
```bash
npm install
npm run dev
```
Website 3D interaktif kelas tinggi Anda langsung live di browser!
