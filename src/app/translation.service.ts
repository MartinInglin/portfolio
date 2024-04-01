import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private translate: TranslateService) {}

  getTranslation(key: string): string | undefined {
    return this.translate.instant(key);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }
}

