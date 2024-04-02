import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, MatButtonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  skills: Skill[] = [
    { name: 'Angular', icon: 'assets/images/icons-skills/angular.svg' },
    {
      name: 'TypeScript',
      icon: 'assets/images/icons-skills/typescript.svg',
    },
    {
      name: 'JavaScript',
      icon: 'assets/images/icons-skills/javascript.svg',
    },
    { name: 'HTML', icon: 'assets/images/icons-skills/html.svg' },
    {
      name: 'Firebase',
      icon: 'assets/images/icons-skills/firebase.svg',
    },
    { name: 'Git', icon: 'assets/images/icons-skills/git.svg' },
    { name: 'CSS', icon: 'assets/images/icons-skills/css.svg' },
    { name: 'Rest-Api', icon: 'assets/images/icons-skills/api.svg' },
    { name: 'Scrum', icon: 'assets/images/icons-skills/scrum.svg' },
    {
      name: 'Material design',
      icon: 'assets/images/icons-skills/materialUi.svg',
    },
  ];

  constructor() {}
}
