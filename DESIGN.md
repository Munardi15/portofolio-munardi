# DESIGN CONTRACT: MUNARDI PORTFOLIO 2.0
**Design Philosophy:** Swiss Technical High-Density Engineering  
**Target Identity:** High-Scale Backend, Distributed Systems & Financial Infrastructure Engineer  
**Aesthetic Standard:** Taste Skill 2.5 — Anti-Slop, Zero Generic AI Templates, Editorial Precision

---

## 1. BRAND & ART DIRECTION

### 1.1 Aesthetic Persona
- **Concept:** Mission-Control Financial Telemetry & Institutional Engineering.
- **Tone:** Methodical, high-conviction, mathematically precise, production-grade.
- **Anti-Patterns Rejected:**
  - No purple/blue neon blur gradients or generic generic SaaS hero blobs.
  - No identical floating 3-card grids with meaningless icons.
  - No bloated 3D canvas libraries (Three.js/Spline) that consume 80% CPU and stutter on M1 Mac.
  - No external CDN dependencies (`cdnjs.cloudflare.com`) that break offline or in restricted networks.

### 1.2 Layout & Grid Discipline
- **Max Container:** `1280px` (`max-w-7xl`) with generous `px-6` to `px-8` edge padding.
- **Rhythm:** Consistent vertical spacing (`py-20` on desktop, `py-12` on mobile).
- **Surface Elevation:**
  - Base Background: `#080C10` (Obsidian Void)
  - Card Surface: `#0E141C` (Carbon Steel)
  - Card Surface Hover / Elevated: `#141C27` (Deep Slate)
  - Interactive Accents: Terminal Emerald (`#10B981`), Kinetic Amber (`#F59E0B`), Electric Cyan (`#06B6D4`).
  - Structural Borders: `#1E2838` (Hairline Steel, 1px solid).
  - Text Hierarchy: Primary `#F8FAFC`, Secondary `#94A3B8`, Muted `#64748B`.

---

## 2. TYPOGRAPHIC SYSTEM

- **Display & Headings:** `Syne` / `Space Grotesk` (clean, technical, bold, tight letter-spacing `-0.03em`).
- **Body & Editorial:** `Inter` / `IBM Plex Sans` (neutral, legible, high contrast, optimal line height `1.6`).
- **Telemetry & Systems Data:** `JetBrains Mono` (tabular numbers, execution logs, pipeline flows, tags).

---

## 3. COLOR TOKENS & ELEVATION

```css
:root {
  --bg-base: #080C10;
  --bg-surface: #0E141C;
  --bg-elevated: #141C27;
  --border-subtle: #1E2838;
  --border-active: #33435C;
  --text-primary: #F8FAFC;
  --text-secondary: #94A3B8;
  --text-muted: #64748B;
  --accent-emerald: #10B981;
  --accent-amber: #F59E0B;
  --accent-cyan: #06B6D4;
}
```

---

## 4. COMPONENT ARCHITECTURE & INTERACTION

1. **Navigation Bar:** Fixed top blur header (`backdrop-blur-md`), live status badge ("System Normal // Open for Senior Backend Roles"), smooth section jumps, language switch (EN/ID), quick CV download trigger.
2. **Hero:** Asymmetric architectural layout. Left: Hero typography, institutional headline, quick stats badge. Right: Interactive Live Architecture Pipeline Diagram (`MinIO S3` -> `Stream Decryption` -> `Worker Pool` -> `Batch Bulk Insert` -> `Audit Log Hook`).
3. **Telemetry & Impact Metrics:** 4 verifiable quantitative markers:
   - `8+` Core Banking Schedulers Built
   - `3` Legacy SSIS Packages Replaced with Go Clean Architecture
   - `10M+` Daily Transaction Rows Reconciled
   - `3.71` GPA Cum Laude (Information Systems)
4. **Signature Enterprise Case Studies:** Deep-dive cards for BRI, Hitachi, and OCBC with architecture diagrams, problem statements, real technical solutions, and verified outcomes.
5. **Interactive Project Matrix:** Filter by domain (All, Go / Systems, Banking & FinTech, Python & Automation, Full-Stack Web). Interactive modal or detail expander with code-block flow and stack tags.
6. **Career Timeline:** Vertical timeline with company badges, role titles, verified dates, and core architectural responsibilities.
7. **Tech Stack & System Competencies:** Visual radar / categorized grid with proficiency telemetry.
8. **Academic Credentials & Verifications:** Universitas Mercu Buana (GPA 3.71, Cum Laude), certifications, and security practices.
9. **Interactive Terminal / Contact Drawer:** Functional terminal CLI interface (`help`, `cv`, `contact`, `clear`, `stack`) + downloadable CV buttons + direct email & social links.
10. **Zero-PII Guarantee:** Only professional channels (`dira20590@gmail.com`, LinkedIn, GitHub). No home address or personal government IDs exposed.

---

## 5. ACCESSIBILITY & PERFORMANCE CONTRACT

- **Zero CDN Dependencies:** All scripts, fonts, and icons bundled locally via Vite.
- **Lighthouse Targets:** Performance ≥ 95, Accessibility = 100, Best Practices = 100, SEO = 100.
- **Touch Targets:** Minimum 44x44px for all mobile interactive elements.
- **Focus States:** High-visibility `:focus-visible` emerald ring (`outline: 2px solid #10B981`).
- **Reduced Motion:** Full `@media (prefers-reduced-motion: reduce)` support.
