import { TranslationService } from './core/services/translation.service';
import { Component, OnInit } from '@angular/core';

// language list
import { locale as enLang } from './config/i18n/en';
import { locale as viLang } from './config/i18n/vi';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'TouchScreen';

  constructor(private translationService: TranslationService) {
    this.translationService.loadTranslations(enLang, viLang);
  }

  ngOnInit(): void {
    let language = localStorage.getItem('language');
    if (language) {
      this.translationService.setLanguage(language);
      console.log(language)
    };
  }

}
