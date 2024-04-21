import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  MatButtonToggleChange,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatButtonToggleModule, TranslateModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  @Input() isMobileMenuOpen = false;
  selectedLanguage: string = 'en';

  constructor(private translate: TranslateService) {}

  onLanguageChange(event: MatButtonToggleChange) {
    this.selectedLanguage = event.value;
    this.translate.use(this.selectedLanguage);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
