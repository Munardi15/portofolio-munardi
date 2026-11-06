/**
 * LocalizationService (Bilingual Language Switcher)
 * Toggles between English (EN) and Indonesian (ID) seamlessly
 * with localStorage persistence.
 */
export class LocalizationService {
  constructor() {
    this.currentLang = localStorage.getItem('munardi_universe_lang') || 'en';
  }

  init() {
    this.applyLanguage(this.currentLang);

    const toggleBtn = document.getElementById('langToggleBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const nextLang = this.currentLang === 'en' ? 'id' : 'en';
        this.setLanguage(nextLang);
      });
    }
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('munardi_universe_lang', lang);
    this.applyLanguage(lang);
  }

  applyLanguage(lang) {
    document.body.setAttribute('data-lang', lang);

    const label = document.getElementById('currentLangLabel');
    if (label) {
      label.textContent = lang.toUpperCase();
    }
  }

  getLanguage() {
    return this.currentLang;
  }
}

export default LocalizationService;
