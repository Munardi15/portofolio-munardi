/**
 * UniverseHUD (Minimalist Ambient Spatial Indicators)
 * Renders the top laser progress rail and subtle right-side waypoint rail.
 * All actions are cleanly integrated into the top navbar, keeping the viewport 100% unobstructed.
 */
export class UniverseHUD {
  static render(config) {
    return `
      <!-- Top Dynamic Laser Progress Line -->
      <div class="hud-top-progress-container" aria-hidden="true">
        <div class="hud-top-progress-bar" id="scrollLaserBar"></div>
      </div>

      <!-- Right Side Story Waypoint Navigation Rail -->
      <nav class="hud-waypoint-rail" id="hudWaypointRail" aria-label="3D Universe Waypoints">
        <div class="waypoint-rail-line"></div>
        <button class="hud-waypoint-dot active" data-step="0" aria-label="Sector 01: Hero Studio">
          <span class="dot-num">01</span>
          <span class="dot-tooltip">Sector 01: Studio</span>
        </button>
        <button class="hud-waypoint-dot" data-step="1" aria-label="Sector 02: About Archive">
          <span class="dot-num">02</span>
          <span class="dot-tooltip">Sector 02: About</span>
        </button>
        <button class="hud-waypoint-dot" data-step="2" aria-label="Sector 03: Skills Toolkit">
          <span class="dot-num">03</span>
          <span class="dot-tooltip">Sector 03: Skills</span>
        </button>
        <button class="hud-waypoint-dot" data-step="3" aria-label="Sector 04: Experience Server Rack">
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
