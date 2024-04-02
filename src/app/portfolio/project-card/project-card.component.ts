import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Project {
  title: string;
  technologies: string;
  description: { [key: string]: string };
  link: string;
  github: string;
  imagePath: string;
  isImageLeft: boolean;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [MatButtonModule, CommonModule, TranslateModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project: Project = {} as Project;
  selectedLang: string = '';

  constructor(public translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.onLangChange.subscribe((event) => {
      this.selectedLang = event.lang;
    });
  }
}
