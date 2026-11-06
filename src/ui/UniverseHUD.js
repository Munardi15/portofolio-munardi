/**
 * UniverseHUD (Interactive 3D Space Command Deck)
 * Renders the top laser progress rail, floating 3D controls (Orbit / Inspect mode,
 * Explode teardown slider, Audio SFX toggle), chapter telemetry tracker, and keyboard shortcuts indicator.
 */
export class UniverseHUD {
  static render(config) {
    return `
      <!-- Top Dynamic Laser Progress Line -->
      <div class="hud-top-progress-container" aria-hidden="true">
        <div class="hud-top-progress-bar" id="scrollLaserBar"></div>
      </div>

      <!-- Floating 3D Telemetry & Controls Dock -->
      <div class="hud-telemetry-dock" id="hudTelemetryDock">
        <div class="hud-dock-left">
          <span class="hud-sector-pill" id="hudSectorPill">SECTOR 01 // DEVELOPER STUDIO &amp; MISSION CONTROL</span>
          <span class="hud-fps-pill" id="hudFpsPill">60 FPS</span>
          <span class="hud-hotkeys-pill" id="hudHotkeysPill" title="Keyboard Navigation: 1-6 Jump Chapters, I Orbit 3D, M SFX, L Language, E Teardown">
            <span class="hotkey-kbd">1-6</span> NAV &bull; <span class="hotkey-kbd">I</span> 3D &bull; <span class="hotkey-kbd">M</span> SFX &bull; <span class="hotkey-kbd">L</span> EN/ID
          </span>
        </div>

        <div class="hud-dock-right">
          <!-- 3D Free Orbit Toggle Button -->
          <button class="hud-control-btn" id="btnToggle3DMode" title="Toggle Free 3D Orbit Mode (HotKey: I)">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span id="labelModeToggle">3D FREE INSPECT</span>
          </button>

          <!-- 3D Explode / Teardown Slider Control -->
          <div class="hud-teardown-control" id="hudTeardownControl" title="Teardown / Explode 3D Core View (HotKey: E)">
            <span class="hud-control-label">TEARDOWN</span>
            <input type="range" id="sliderExplodeCore" min="0" max="100" value="0" class="hud-range-slider" />
          </div>

          <!-- Audio SFX Toggle Button -->
          <button class="hud-control-btn" id="btnToggleAudio" title="Toggle Sci-Fi Audio FX (HotKey: M)">
            <svg id="iconAudioOff" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
            <svg id="iconAudioOn" style="display:none;" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
            <span id="labelAudioToggle">SFX OFF</span>
          </button>
        </div>
      </div>

      <!-- Right Side Story Waypoint Navigation Rail -->
      <nav class="hud-waypoint-rail" id="hudWaypointRail" aria-label="3D Universe Waypoints">
        <div class="waypoint-rail-line"></div>
        <button class="hud-waypoint-dot active" data-step="0" aria-label="Sector 01: Hero Core">
          <span class="dot-num">01</span>
          <span class="dot-tooltip">Sector 01: Core</span>
        </button>
        <button class="hud-waypoint-dot" data-step="1" aria-label="Sector 02: About Archive">
          <span class="dot-num">02</span>
          <span class="dot-tooltip">Sector 02: About</span>
        </button>
        <button class="hud-waypoint-dot" data-step="2" aria-label="Sector 03: Skills Matrix">
          <span class="dot-num">03</span>
          <span class="dot-tooltip">Sector 03: Skills</span>
        </button>
        <button class="hud-waypoint-dot" data-step="3" aria-label="Sector 04: Experience Nexus">
          <span class="dot-num">04</span>
          <span class="dot-tooltip">Sector 04: Experience</span>
        </button>
        <button class="hud-waypoint-dot" data-step="4" aria-label="Sector 05: Education Spire">
          <span class="dot-num">05</span>
          <span class="dot-tooltip">Sector 05: Education</span>
        </button>
        <button class="hud-waypoint-dot" data-step="5" aria-label="Sector 06: Transmission Array">
          <span class="dot-num">06</span>
          <span class="dot-tooltip">Sector 06: Contact</span>
        </button>
      </nav>
    `;
  }
}

export default UniverseHUD;
