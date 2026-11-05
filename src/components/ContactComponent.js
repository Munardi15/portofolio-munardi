/**
 * ============================================================================
 * ContactComponent
 * ============================================================================
 * Renders the Contact Command Deck & Verified CV Download Center.
 */
export class ContactComponent {
  /**
   * @param {Object} config - Full portfolio configuration
   * @returns {string} HTML markup
   */
  static render(config) {
    const { personal } = config;
    const { contact, cvDownloads } = personal;

    const cvButtonsHtml = cvDownloads
      .map((cv) => {
        const btnClass = cv.primary
          ? 'btn btn-sm btn-primary'
          : cv.type === 'docx'
            ? 'btn btn-sm btn-ghost'
            : 'btn btn-sm btn-secondary';

        const downloadAttr = cv.file.replace('./', '');
        const iconSvg = cv.primary
          ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`
          : '';

        return `
        <a href="${cv.file}" download="${downloadAttr}" class="${btnClass}">
          ${iconSvg}
          <span>${cv.label}</span>
        </a>
      `;
      })
      .join('');

    return `
    <section class="section" id="contact">
      <div class="wrap">
        <div class="contact-deck">
          <div class="contact-left">
            <div>
              <div class="sec-eyebrow"><span class="lang-en">Contact</span><span class="lang-id">Kontak</span></div>
              <h2 class="contact-title"><span class="lang-en">Let's <span class="accent-cyan">talk.</span></span><span class="lang-id">Mari <span class="accent-cyan">Bicara.</span></span></h2>
              <p class="contact-desc" style="margin-top:16px;">
                <span class="lang-en">Available for Senior Software Engineer roles, high-concurrency backend consulting, and core banking infrastructure development.</span>
                <span class="lang-id">Terbuka untuk posisi Senior Software Engineer, konsultasi backend berkonkurensi tinggi, dan pengembangan infrastruktur core banking.</span>
              </p>
            </div>

            <div class="terminal-status-box">
              <div class="terminal-line">
                <span class="pulse-dot"></span>
                <span>STATUS: ONLINE &bull; READY FOR INTERVIEW</span>
              </div>
              <div class="terminal-line" style="color:var(--text-muted);">
                <span>LOCATION: ${personal.location.en}</span>
              </div>
            </div>
          </div>

          <div class="contact-grid">
            <!-- WhatsApp -->
            <a id="waChannel" href="${contact.whatsappUrlEn}" target="_blank" class="contact-channel-btn" aria-label="Chat on WhatsApp">
              <div class="contact-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </div>
              <div class="contact-channel-name">WhatsApp</div>
              <div class="contact-channel-val">${contact.whatsapp}</div>
            </a>

            <!-- LinkedIn -->
            <a href="${contact.linkedin}" target="_blank" class="contact-channel-btn" aria-label="View LinkedIn Profile">
              <div class="contact-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div class="contact-channel-name">LinkedIn</div>
              <div class="contact-channel-val">${contact.linkedinHandle}</div>
            </a>

            <!-- Email -->
            <a href="mailto:${contact.email}" class="contact-channel-btn" aria-label="Send Email">
              <div class="contact-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="contact-channel-name">Email</div>
              <div class="contact-channel-val">${contact.email}</div>
            </a>

            <!-- CV Download Direct Box -->
            <div class="cv-download-card">
              <div class="cv-info">
                <h4><span class="lang-en">Download Official Curriculum Vitae</span><span class="lang-id">Unduh Curriculum Vitae Resmi</span></h4>
                <p><span class="lang-en">Verified resume formats (Software Engineer, Backend, Full Stack) for HR &amp; Technical Leads</span><span class="lang-id">Format resume terverifikasi (Software Engineer, Backend, Full Stack) untuk HR &amp; Technical Lead</span></p>
              </div>
              <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
                ${cvButtonsHtml}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}
