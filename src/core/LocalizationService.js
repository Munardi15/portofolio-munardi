import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * ============================================================================
 * LocalizationService (Bilingual EN / ID State & Link Manager)
 * ============================================================================
 * Manages active language state across the DOM, updates dynamic WhatsApp
 * links with localized introductory messages, and synchronizes with storage.
 * 
 * @class LocalizationService
 */
export class LocalizationService {
  /**
   * @param {Object} [options]
   * @param {string} [options.defaultLang='en']
   * @param {string} [options.storageKey='munardi_portfolio_lang']
   */
  constructor(options = {}) {
    this.storageKey = options.storageKey || 'munardi_portfolio_lang';
    this.defaultLang = options.defaultLang || 'en';
    this.currentLang = this._loadInitialLanguage();

    this.waEn = "Hi Ards, I'm interested in discussing a project or recruitment opportunity with you!";
    this.waId = "Halo Ards, saya tertarik untuk diskusi masalah project atau rekrutmen dengan Anda!";

    this.callbacks = new Set();
  }

  _loadInitialLanguage() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved === 'en' || saved === 'id') return saved;
    } catch (_) {}
    return this.defaultLang;
  }

  init() {
    this.applyLanguage(this.currentLang);

    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.toggle();
      });
    }
  }

  getLanguage() {
    return this.currentLang;
  }

  toggle() {
    const nextLang = this.currentLang === 'en' ? 'id' : 'en';
    this.setLanguage(nextLang);
  }

  setLanguage(lang) {
    if (lang !== 'en' && lang !== 'id') return;
    this.currentLang = lang;

    try {
      localStorage.setItem(this.storageKey, lang);
    } catch (_) {}

    this.applyLanguage(lang);
    this.callbacks.forEach((cb) => cb(lang));

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);
  }

  applyLanguage(lang) {
    document.body.setAttribute('data-lang', lang);

    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
      toggleBtn.innerText = lang === 'en' ? 'ID' : 'EN';
    }

    // Dynamic WhatsApp channel links
    const waChannel = document.getElementById('waChannel');
    const heroWaBtn = document.getElementById('heroWaBtn');
    const msg = lang === 'en' ? this.waEn : this.waId;
    const waUrl = `https://wa.me/6289665241717?text=${encodeURIComponent(msg)}`;

    if (waChannel) waChannel.href = waUrl;
    if (heroWaBtn) heroWaBtn.href = waUrl;
  }

  onLanguageChange(callback) {
    this.callbacks.add(callback);
    return () => this.callbacks.delete(callback);
  }
}
