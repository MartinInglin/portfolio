import { Component } from '@angular/core';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslationService } from '../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatButtonToggleModule, TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  selectedLanguage: string = 'en';

  constructor(private translationService: TranslationService) {}

  onLanguageChange(event: MatButtonToggleChange) {
    this.selectedLanguage = event.value;
    this.translationService.setLanguage(this.selectedLanguage);
  }
}
