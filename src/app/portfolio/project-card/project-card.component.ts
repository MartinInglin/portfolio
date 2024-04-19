import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Project } from "./../portfolio.component";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [MatButtonModule, CommonModule, TranslateModule, MatProgressSpinnerModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project: Project = {} as Project;
  selectedLanguage: string = '';
  isMobileView = isSmallScreen();

  constructor(public translateService: TranslateService ) {}

  ngOnInit() {
    this.selectedLanguage = 'en';
    this.translateService.onLangChange.subscribe((event) => {
      this.selectedLanguage = event.lang;
    });
    window.addEventListener('resize', () => {
      this.isMobileView = isSmallScreen();
    });
  }
}

function isSmallScreen() {
  return window.innerWidth < 769;
}
