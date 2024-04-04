import { Component } from '@angular/core';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; // Import TranslateService

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatButtonToggleModule, TranslateModule], // No need to import TranslateModule here
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  selectedLanguage: string = 'en';

  constructor(private translate: TranslateService) {} // Inject TranslateService

  onLanguageChange(event: MatButtonToggleChange) {
    this.selectedLanguage = event.value;
    this.translate.use(this.selectedLanguage); // Use the injected service
  }
}