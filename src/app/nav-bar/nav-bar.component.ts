import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatButtonToggleModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  selectedLanguage: string = 'english';

  constructor(private translationService: TranslationService) {}

  onLanguageChange(event: MatButtonToggleChange) {
    console.log("Hallo Welt")
    this.selectedLanguage = event.value;
    this.translationService.setLanguage(this.selectedLanguage);
  }
}
