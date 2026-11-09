/**
 * UniverseHUD (Minimalist Ambient Spatial Indicators)
 * Renders the top laser progress rail, subtle right-side waypoint rail,
 * and floating interactive 3D navigation guide pill.
 */
export class UniverseHUD {
  static render(config) {
    return `
      <!-- Top Dynamic Laser Progress Line -->
      <div class="hud-top-progress-container" aria-hidden="true">
        <div class="hud-top-progress-bar" id="scrollLaserBar"></div>
      </div>

      <!-- 3D Camera Realtime Telemetry Badge -->
      <aside class="hud-telemetry-badge" id="hudSectorPill" aria-label="3D Camera Telemetry">
        <span class="telemetry-bracket">[</span>
        <span class="telemetry-label">3D FOCUS:</span>
        <span class="telemetry-target" id="hudFocusTarget">TERMINAL COCKPIT // DEV WORKSTATION</span>
        <span class="telemetry-bracket">]</span>
      </aside>

      <!-- Right Side Story Waypoint Navigation Rail -->
      <nav class="hud-waypoint-rail" id="hudWaypointRail" aria-label="3D Universe Waypoints">
        <div class="waypoint-rail-line"></div>
        <button class="hud-waypoint-dot active" data-step="0" aria-label="Waypoint 01: Dev Workstation">
          <span class="dot-num">01</span>
          <span class="dot-tooltip">01: Dev Workstation</span>
        </button>
        <button class="hud-waypoint-dot" data-step="1" aria-label="Waypoint 02: Workspace &amp; Repo">
          <span class="dot-num">02</span>
          <span class="dot-tooltip">02: Workspace</span>
        </button>
        <button class="hud-waypoint-dot" data-step="2" aria-label="Waypoint 03: Terminal Toolkit">
          <span class="dot-num">03</span>
          <span class="dot-tooltip">03: Toolkit</span>
        </button>
        <button class="hud-waypoint-dot" data-step="3" aria-label="Waypoint 04: 42U Server Rack">
          <span class="dot-num">04</span>
          <span class="dot-tooltip">04: Server Rack</span>
        </button>
        <button class="hud-waypoint-dot" data-step="4" aria-label="Waypoint 05: Academic Credential">
          <span class="dot-num">05</span>
          <span class="dot-tooltip">05: Credential</span>
        </button>
        <button class="hud-waypoint-dot" data-step="5" aria-label="Waypoint 06: Contact &amp; Overview">
          <span class="dot-num">06</span>
          <span class="dot-tooltip">06: Contact</span>
        </button>
      </nav>

      <!-- 3D Room Exploration Guide Pill (Appears in Orbit Mode) -->
      <div class="hud-3d-guide-banner" id="hud3DGuide" aria-live="polite">
        <span class="guide-item"><span class="guide-key">DRAG</span> <span class="lang-en">Orbit 360°</span><span class="lang-id">Putar 360°</span></span>
        <span class="guide-sep">&bull;</span>
        <span class="guide-item"><span class="guide-key">WASD / RIGHT-DRAG</span> <span class="lang-en">Walk Room</span><span class="lang-id">Jelajah Ruang</span></span>
        <span class="guide-sep">&bull;</span>
        <span class="guide-item"><span class="guide-key">SCROLL</span> <span class="lang-en">Zoom</span><span class="lang-id">Zoom</span></span>
        <span class="guide-sep">&bull;</span>
        <span class="guide-item"><span class="guide-key">DOUBLE-CLICK</span> <span class="lang-en">Target Focus</span><span class="lang-id">Fokus Objek</span></span>
      </div>
    `;
  }
}

export default UniverseHUD;
