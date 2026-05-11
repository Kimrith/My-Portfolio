import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './header.html',
})
export class Header {
  isMenuOpen = false;
  isDarkMode = false;

  ngOnInit() {
    localStorage.getItem('lang')
      ? this.changeLang(localStorage.getItem('lang')!)
      : this.changeLang('en');

    if (localStorage.getItem('darkMode') === 'enabled') {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'disabled');
    }
  }

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en', 'km']);
    this.translate.setDefaultLang('en');
    this.translate.use('en'); // This triggers the HTTP call
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
