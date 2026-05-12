import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translate: TranslateService) {}

  init() {
    this.translate.addLangs(['en', 'km']);
    this.translate.setDefaultLang('en');

    const lang = localStorage.getItem('lang') || 'en';
    this.setLang(lang);
  }

  setLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);

    document.documentElement.classList.toggle('khmer', lang === 'km');
  }

  get currentLang() {
    return this.translate.currentLang;
  }
}
