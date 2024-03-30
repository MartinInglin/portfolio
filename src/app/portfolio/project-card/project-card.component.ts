import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

interface Project {
  title: string;
  technologies: string;
  description: string;
  link: string;
  github: string;
  imagePath: string;
  isImageLeft: boolean;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project: Project = {} as Project;
}
