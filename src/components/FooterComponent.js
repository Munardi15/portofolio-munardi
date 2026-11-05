/**
 * ============================================================================
 * FooterComponent
 * ============================================================================
 * Renders the page footer, copyright notice, and back-to-top trigger.
 */
export class FooterComponent {
  /**
   * @param {Object} config - Full portfolio configuration
   * @returns {string} HTML markup
   */
  static render(config) {
    const { personal } = config;

    return `
    <footer>
      <div class="wrap footer-inner">
        <div class="brand-name mono">
          ${personal.name}<span class="accent-cyan">${personal.surnameDot}</span>
        </div>
        <div class="footer-copy">
          &copy; ${new Date().getFullYear()} ${personal.name} &mdash; ${personal.rolePrimary}. Built with precision.
        </div>
        <a href="#hero" class="to-top-btn" id="backToTopBtn" aria-label="Back to top">
          <span>Back to top &uarr;</span>
        </a>
      </div>
    </footer>
    `;
  }
}
