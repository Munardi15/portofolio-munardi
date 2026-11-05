/**
 * ============================================================================
 * MarqueeComponent
 * ============================================================================
 * Renders dual-direction infinite velocity text ticker marquees.
 */
export class MarqueeComponent {
  /**
   * @param {Object} config - Full portfolio configuration
   * @returns {string} HTML markup
   */
  static render(config) {
    const { marquee } = config;

    const renderItems = (items) =>
      items
        .map((item) => `<span class="marquee-item">${item} <span class="marquee-sep"></span></span>`)
        .join('');

    const track1Html = renderItems(marquee.track1) + renderItems(marquee.track1);
    const track2Html = renderItems(marquee.track2) + renderItems(marquee.track2);

    return `
    <div class="marquee-container" aria-hidden="true">
      <div class="marquee-row">
        <div class="marquee-track marquee-left" id="marqueeTrack1">
          ${track1Html}
        </div>
      </div>

      <div class="marquee-row">
        <div class="marquee-track marquee-right" id="marqueeTrack2">
          ${track2Html}
        </div>
      </div>
    </div>
    `;
  }
}
