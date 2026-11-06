# MASTER PROMPT: UNIVERSAL 3D INTERACTIVE WEB SHOWCASE
> **Enterprise-Grade Creative Engineering & Clean Architecture Edition**  
> Dirancang oleh Principal Software Engineer & WebGL Specialist agar dapat dieksekusi dengan hasil sempurna oleh model AI apa pun (Gemini, Claude 3.7, GPT-4o, Cursor Composer, Windsurf, Bolt, v0). Menghasilkan kode berstandar industri tinggi: **Modular MVC, Clean Code (SOLID/DRY), Zero Memory Leaks, Built-in Automated QA Diagnostics, dan UI/UX Sinematik**.

---

## DAFTAR ISI
1. [Panduan Penggunaan Cepat](#1-panduan-penggunaan-cepat)
2. [Panduan Menyiapkan Aset 3D Gratis (Rp0)](#2-panduan-menyiapkan-aset-3d-gratis-rp0)
3. [MASTER PROMPT (Tinggal Salin ke AI)](#3-master-prompt-copy-paste-ke-ai)
4. [Daftar Preset Tema Industri Siap Pakai](#4-daftar-preset-tema-industri-siap-pakai)
5. [Standar Struktur Folder Enterprise (Clean MVC)](#5-standar-struktur-folder-enterprise-clean-mvc)

---

## 1. PANDUAN PENGGUNAAN CEPAT

1. Salin seluruh teks di dalam blok **Bagian 3 (MASTER PROMPT)**.
2. Ubah variabel pada blok **`[KONFIGURASI TEMA PROYEK]`** sesuai produk atau ide yang ingin Anda buat (atau biarkan default untuk demo instan).
3. Kirim ke AI (Gemini / Claude / ChatGPT / Cursor Composer).
4. AI akan menyusun proyek modular lengkap dengan arsitektur MVC, komponen reusable, pengujian otomatis (QA self-test), dan Three.js WebGL engine.
5. Jalankan `npm run dev` untuk melihat tampilan web, atau `npm test` untuk memvalidasi seluruh fungsionalitas arsitektur.

---

## 2. PANDUAN MENYIAPKAN ASET 3D GRATIS (RP0)

Website ini menggunakan model 3D berformat **`.glb`** (GL Transmission Format Binary). Anda memiliki 2 opsi gratis:

### Opsi A: Generate dari Gambar/Teks via AI (Seperti di Video Reels)
* **Meshy AI (`meshy.ai`)**: Buat akun gratis. Pilih menu *Image-to-3D*, upload foto objek dari sudut depan/samping, tunggu 1-2 menit, lalu download file `.glb`.
* **Tripo3D (`tripo3d.ai`)**: Alternatif gratis tercepat untuk generate 3D dari teks prompt atau gambar ke format `.glb`.
* **Luma AI Genie (`lumalabs.ai`)**: Menghasilkan objek 3D realistis siap pakai dalam format `.glb`.

### Opsi B: Download Model 3D Jadi (Gratis & Berkualitas Tinggi)
* **Sketchfab (`sketchfab.com`)**: Cari objek (misal: *sneaker, watch, camera, drone, sword, car*), centang filter **Downloadable** dan lisensi **CC0 / Free**. Download format `.glb`.
* **Poly Pizza (`poly.pizza`)**: Ribuan model 3D low-poly & mid-poly gratis berformat `.glb`.
* **Kenney 3D Assets (`kenney.nl`)**: Koleksi ratusan aset 3D domain publik tanpa atribusi.

> **Tips Ukuran File:** Usahakan ukuran file `.glb` di bawah **5 MB** per objek agar website memuat secara instan tanpa lag.

---

## 3. MASTER PROMPT (COPY-PASTE KE AI)

*Salin seluruh blok di bawah garis ini dan tempelkan ke AI:*

---

```markdown
Anda adalah seorang "Principal Fullstack Software Engineer & Creative Technologist" kelas dunia dengan pengalaman mendalam di bidang Clean Architecture, Sistem Terdistribusi, dan Rekayasa WebGL/Three.js performa tinggi. Anda telah memenangkan berbagai penghargaan desain web kelas atas (Awwwards Site of the Year, FWA of the Day) dan dikenal selalu menulis kode yang elegan, modular, bebas duplikasi (DRY), serta mudah diaudit oleh tim QA maupun Senior Tech Recruiter.

TUGAS UTAMA:
Bangun sebuah aplikasi web interaktif 3D sinematik "Single Page Application (SPA)" modern dengan arsitektur Modular MVC / Clean Architecture menggunakan Vite, Vanilla JavaScript (ES Modules), dan Three.js. Website ini menampilkan showcase produk/objek 3D interaktif di mana pengguna dapat melihat objek 3D melayang secara realistis, berinteraksi melalui mouse parallax yang mulus, dan memilih/mengganti objek 3D lewat dock menu melayang di bawah layar.

KUALITAS KODE HARUS MEMENUHI STANDAR SENIOR SOFTWARE ENGINEER:
1. Single Responsibility Principle (SRP): Pisahkan UI Renderer, State Management, Asset Loader, dan 3D Scene Controller ke file/modul terpisah. DILARANG membuat file monolitik raksasa ("spaghetti code").
2. Don't Repeat Yourself (DRY): Gunakan komponen yang reusable dan konfigurasi terpusat (Single Source of Truth).
3. Zero Memory Leak (Resource Lifecycle Management): Setiap kali model 3D diganti, wajib dilakukan pembersihan eksplisit pada memori GPU (`geometry.dispose()`, `material.dispose()`, pembersihan tekstur).
4. Built-in QA Self-Testing: Sediakan test suite unit terotomatisasi (`tests/showcase.test.js`) serta modul diagnostik runtime di browser (`window.__RUN_QA_DIAGNOSTICS__()`).
5. Dual Audience Satisfaction:
   - User Awam: Tampilan visual sinematik, navigasi sangat intuitif, animasi halus 60 FPS, teks mudah dibaca, ada petunjuk swipe di mobile.
   - Senior Recruiter / Lead Architect: Arsitektur folder rapi, type-safety logic, penanganan error tangguh (fallback 3D jika file hilang), performa optimal (DPR clamped <= 2), dan test coverage terverifikasi.

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
  * Warna_Surface_Card: "rgba(18, 18, 22, 0.70)" (Glassmorphism Dark)
  * Warna_Border_Line: "rgba(255, 255, 255, 0.12)" (Subtle Edge)
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
      "deskripsi": "Modul komputasi spasial generasi mutakhir dengan arsitektur pendingin cryogenic terisolasi.",
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
      "deskripsi": "Transceiver teleportasi data quantum berlatensi nol dengan pelindung fluks magnetik ganda.",
      "tag": "SECURE",
      "fallbackPrimitive": "Octahedron"
    }
  ]
=============================================================================

STRUKTUR DIREKTORI PROYEK YANG WAJIB ANDA HASILKAN:
Susun kode dalam arsitektur modular yang rapi berikut:

```
project-root/
├── index.html
├── package.json
├── vite.config.js
├── tests/
│   └── showcase.test.js          # Automated unit & schema test suite (Node test runner)
└── src/
    ├── config/
    │   └── theme.config.js       # Single source of truth untuk konfigurasi & metadata
    ├── core/
    │   ├── SceneManager.js       # Three.js lifecycle, renderer, lighting, resize handler
    │   ├── ModelLoader.js        # GLTF loader, memory disposal, procedural 3D fallback
    │   ├── AnimationEngine.js    # Harmonic floating oscillation, mouse parallax lerp
    │   └── StateController.js    # MVC Controller: state active item, event listeners, dispatch
    ├── components/
    │   ├── HeaderComponent.js    # Header bar, brand logo, status pulse, audio toggle
    │   ├── InfoCardComponent.js  # Dynamic overlay: title, category, description, CTAs
    │   └── DockComponent.js      # Bottom floating dock carousel & thumbnail buttons
    ├── styles/
    │   ├── variables.css         # CSS custom properties (tokens, colors, typography)
    │   └── style.css             # Glassmorphism, layout grid, transitions, mobile swipe
    └── main.js                   # Entry point bootstrapping & QA runtime diagnostics
```

SPESIFIKASI TEKNIS SETIAP KOMPONEN & FILE:

1. `package.json`:
   - Gunakan type `"module"`.
   - Scripts: `"dev": "vite"`, `"build": "vite build"`, `"test": "node --test tests/*.test.js"`.
   - Dependencies: `three` (^0.160.0).
   - DevDependencies: `vite` (^5.0.0).

2. `src/config/theme.config.js`:
   - Ekspor objek `themeConfig` yang membungkus semua variabel konfigurasi dari blok `[KONFIGURASI TEMA PROYEK]` di atas, terstruktur dan siap dikonsumsi seluruh modul.

3. `src/core/SceneManager.js`:
   - Menginisialisasi `THREE.Scene`, `THREE.PerspectiveCamera` (FOV 45, near 0.1, far 100), dan `THREE.WebGLRenderer`.
   - Parameter renderer: `{ alpha: true, antialias: true, powerPreference: 'high-performance' }`.
   - Tone Mapping: `ACESFilmicToneMapping` dengan exposure 1.2.
   - Lighting Rig Sinematik 3-Titik:
     * `AmbientLight` (intensitas 0.6)
     * `DirectionalLight` (key light putih, intensitas 2.5) di posisi `(5, 8, 5)`
     * `PointLight` (rim accent light, mengikuti `Warna_Aksen_Glow`, intensitas 3.5) di posisi `(-4, 3, -2)`
   - Resize Listener: otomatis update aspect ratio kamera dan ukuran renderer. Batasi `devicePixelRatio` maksimal 2 (`Math.min(window.devicePixelRatio, 2)`).

4. `src/core/ModelLoader.js`:
   - Class pengelola pemuatan aset 3D.
   - Method `loadModel(itemConfig)`:
     * Coba muat file `.glb` menggunakan `THREE.GLTFLoader`.
     * FALLBACK TANGGUH (Zero Crash Guarantee): Jika file `.glb` gagal dimuat (file belum ada / 404), sistem WAJIB otomatis membuat geometri prosedural 3D Three.js murni (`TorusKnotGeometry`, `IcosahedronGeometry`, atau `OctahedronGeometry`) yang diberi material premium `MeshPhysicalMaterial` (`metalness: 0.85`, `roughness: 0.15`, `clearcoat: 1.0`, warna aksen).
   - Method `disposeCurrentModel(model)`:
     * Melakukan iterasi seluruh mesh anak (`traverse`), memanggil `geometry.dispose()`, `material.dispose()`, dan membersihkan tekstur dari memori GPU untuk mencegah memory leak.

5. `src/core/AnimationEngine.js`:
   - Mengelola loop animasi `requestAnimationFrame`.
   - Menerapkan osilasi mengambang (floating harmonic):
     `model.position.y = baseY + Math.sin(time * 1.5) * 0.12;`
     `model.rotation.y += 0.005;`
   - Menerapkan mouse parallax halus dengan Linear Interpolation (Lerp):
     `camera.position.x += (targetMouseX * 1.2 - camera.position.x) * 0.05;`
     `camera.position.y += (-targetMouseY * 1.2 - camera.position.y) * 0.05;`
     `camera.lookAt(0, 0, 0);`

6. `src/core/StateController.js`:
   - Mengelola state item aktif (`activeItemIndex`).
   - Ketika pengguna mengklik dock menu atau menekan tombol navigasi:
     * Update state aktif.
     * Panggil transisi keluar pada model lama (scale down halus).
     * Muat model baru via `ModelLoader`, lalu transisi masuk (scale up halus dengan easing).
     * Update konten DOM pada `InfoCardComponent` dan tandai tombol aktif pada `DockComponent`.

7. `src/components/` (`HeaderComponent.js`, `InfoCardComponent.js`, `DockComponent.js`):
   - Masing-masing kelas memiliki method `static render(config, activeIndex)` yang mengembalikan string HTML semantik dan method `static bindEvents(container, controller)` untuk event listener.
   - `DockComponent`: Menampilkan thumbnail/tombol untuk setiap item dalam konfigurasi. Tombol aktif memiliki class `.active` dengan efek glowing border. Di mobile, dock ini memiliki horizontal swipe yang mulus (`overflow-x: auto; -webkit-overflow-scrolling: touch;`).

8. `src/styles/` (`variables.css` & `style.css`):
   - Desain dark glassmorphism modern (`backdrop-filter: blur(16px)`).
   - Animasi transisi halus (CSS transition 0.3s cubic-bezier(0.16, 1, 0.3, 1)).
   - Responsif penuh: Desktop, Tablet, dan Mobile (< 768px). Pada layar mobile, teks dan dock tersusun rapi tanpa menutupi area pandang 3D secara berlebihan.

9. `tests/showcase.test.js`:
   - Suite test menggunakan Node.js native test runner (`node:test` dan `node:assert/strict`).
   - Menguji:
     a. Integritas konfigurasi skema tema (semua field wajib ada, palet warna valid hex/rgba).
     b. Daftar objek 3D memiliki ID unik, skala valid, dan fallback primitive yang valid.
     c. Renderers komponen menghasilkan HTML valid yang memuat elemen penampung kanvas dan tombol dock.
     d. Controller state transitions berfungsi dengan benar (berpindah indeks 0 -> 1 -> 2).

10. `src/main.js`:
    - Inisialisasi seluruh komponen (MVC Bootstrapping).
    - Memasang fungsi diagnostik runtime `window.__RUN_QA_DIAGNOSTICS__()` di konsol browser yang bisa dipanggil kapan saja untuk mengecek status WebGL context, frame rate FPS, jumlah objek yang aktif di memori scene, dan status event listener.

INSTRUKSI PENYAJIAN KODE:
Tuliskan seluruh kode sumber secara LENGKAP tanpa memotong bagian apa pun ("no placeholders, no TODOs, fully implemented and production-ready"). Sajikan file satu per satu dengan path yang jelas sesuai struktur direktori di atas.
```

---

## 4. DAFTAR PRESET TEMA INDUSTRI SIAP PAKAI

Anda cukup mengganti blok `[KONFIGURASI TEMA PROYEK]` pada prompt di atas dengan salah satu preset berikut:

### Preset 1: Luxury Automotive / Cyberpunk Vehicle
```yaml
NAMA_PROYEK: "APEX // Hyper-Electric Mobility"
SLUG_BRAND: "APEX VEHICLES"
Warna_Background: "#070709"
Warna_Aksen_Glow: "#FF5E00" # Radiant Neon Amber
Warna_Aksen_Secondary: "#00E5FF" # Cyan Beam
DAFTAR_OBJEK_3D:
  - nama: "Apex GT Stealth" (Kategori: Hypercar, fileGlb: "./assets/3d/car.glb", fallback: "TorusKnot")
  - nama: "Aero Turbine Rim" (Kategori: Carbon Wheel, fileGlb: "./assets/3d/rim.glb", fallback: "Cylinder")
  - nama: "Quantum Steering Yoke" (Kategori: Cockpit Control, fileGlb: "./assets/3d/wheel.glb", fallback: "Torus")
```

### Preset 2: Streetwear / Sneaker & Apparel (Mirip Video 2)
```yaml
NAMA_PROYEK: "STRIDE // Kinetic Footwear Lab"
SLUG_BRAND: "STRIDE 00"
Warna_Background: "#0D0D11"
Warna_Aksen_Glow: "#CCFF00" # Volt Acid Lime
Warna_Aksen_Secondary: "#7000FF" # Cyber Violet
DAFTAR_OBJEK_3D:
  - nama: "Strider Volt Runner" (Kategori: Footwear, fileGlb: "./assets/3d/sneaker.glb", fallback: "TorusKnot")
  - nama: "Modular Cargo Hoodie" (Kategori: Apparel, fileGlb: "./assets/3d/hoodie.glb", fallback: "Icosahedron")
  - nama: "Tactical Visor Goggles" (Kategori: Eyewear, fileGlb: "./assets/3d/visor.glb", fallback: "Octahedron")
```

### Preset 3: Fintech & Modern Banking Hardware
```yaml
NAMA_PROYEK: "NEXUS // Enterprise Core Ledger"
SLUG_BRAND: "NEXUS BANKING"
Warna_Background: "#050B14"
Warna_Aksen_Glow: "#0066FF" # Royal Sapphire
Warna_Aksen_Secondary: "#00FFA3" # Fintech Mint
DAFTAR_OBJEK_3D:
  - nama: "Nexus Titanium Card" (Kategori: Smart Card, fileGlb: "./assets/3d/card.glb", fallback: "Box")
  - nama: "Biometric ATM Module" (Kategori: Cash Terminal, fileGlb: "./assets/3d/atm.glb", fallback: "Icosahedron")
  - nama: "Hardware Security Vault" (Kategori: Core Ledger, fileGlb: "./assets/3d/vault.glb", fallback: "Dodecahedron")
```

### Preset 4: Mythological / Cultural Gaming (Mirip Video 1)
```yaml
NAMA_PROYEK: "MYSTIKA // Nusantara Relics"
SLUG_BRAND: "MYSTIKA STUDIO"
Warna_Background: "#140A08" # Warm Candlelit Black
Warna_Aksen_Glow: "#E05A4E" # Crimson Coral
Warna_Aksen_Secondary: "#E8B33C" # Ancient Gold
DAFTAR_OBJEK_3D:
  - nama: "Keris Pusaka Naga" (Kategori: Ancient Blade, fileGlb: "./assets/3d/keris.glb", fallback: "Cone")
  - nama: "Boneka Arwah Voodoo" (Kategori: Ritual Totem, fileGlb: "./assets/3d/voodoo.glb", fallback: "TorusKnot")
  - nama: "Kartu Tarot Mistis" (Kategori: Divination Deck, fileGlb: "./assets/3d/tarot.glb", fallback: "Box")
```

---

## 5. STANDAR STRUKTUR FOLDER ENTERPRISE (CLEAN MVC)

Ketika AI meng-generate proyek, pastikan struktur direktori mengikuti standar berikut:

```
my-3d-showcase/
├── index.html
├── package.json
├── vite.config.js
├── tests/
│   └── showcase.test.js          <-- Menjalankan QA Otomatis (npm test)
├── src/
│   ├── config/
│   │   └── theme.config.js       <-- Single Source of Truth Konfigurasi
│   ├── core/
│   │   ├── SceneManager.js       <-- Setup Three.js WebGL, Lampu, Kamera
│   │   ├── ModelLoader.js        <-- Load GLB + Fallback Geometri Prosedural
│   │   ├── AnimationEngine.js    <-- Floating Oscillation & Parallax Lerp
│   │   └── StateController.js    <-- MVC Controller & Event Dispatcher
│   ├── components/
│   │   ├── HeaderComponent.js    <-- Reusable UI Header & Controls
│   │   ├── InfoCardComponent.js  <-- Reusable UI Overlay Produk
│   │   └── DockComponent.js      <-- Reusable UI Bottom Dock Slider
│   ├── styles/
│   │   ├── variables.css         <-- Design Tokens & Color Palettes
│   │   └── style.css             <-- Glassmorphism & Mobile Responsive Rules
│   └── main.js                   <-- Bootstrapper & window.__RUN_QA_DIAGNOSTICS__()
└── public/
    └── assets/
        └── 3d/                   <-- Letakkan file .glb fisik di sini
            ├── model-1.glb
            ├── model-2.glb
            └── model-3.glb
```

### Cara Menjalankan & Memverifikasi:
1. Jalankan development server:
   ```bash
   npm install
   npm run dev
   ```
2. Jalankan test otomatis QA:
   ```bash
   npm test
   ```
3. Buka Console di Browser (tekan F12) lalu ketik:
   ```javascript
   window.__RUN_QA_DIAGNOSTICS__()
   ```
   Sistem akan mencetak laporan kesehatan scene 3D, memori WebGL, dan status interaktivitas secara instan!
