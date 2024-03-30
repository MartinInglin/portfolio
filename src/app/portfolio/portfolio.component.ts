import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { CommonModule } from '@angular/common';

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
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Join',
      technologies: 'HTML | CSS | JavaScript',
      description:
        'Ein Organisationstool im Stile eines Kanban-Boards. Tasks lassen sich per drag and drop verschieben, User können einem Task zugewiesen und Subtasks definiert werden.',
      link: 'https://linkToJoin',
      github: 'https://linkToGithub',
      imagePath: './../../assets/images/PC-Mokups/join.png',
      isImageLeft: true,
    },
    {
      title: 'El Pollo Loco',
      technologies: 'HTML | CSS | JavaScript',
      description:
        'Ein Jump and Run Game um die Figur Pepe. Object Oriented Programming stand bei der Entwicklung im Vordergrund.',
      link: 'https://linkToJoin',
      github: 'https://linkToGithub',
      imagePath: './../../assets/images/PC-Mokups/el-pollo-loco.png',
      isImageLeft: false,
    },
    {
      title: 'Pokedex',
      technologies: 'HTML | CSS | JavaScript | API',
      description:
        'Daten von einer öffentlichen API herunterladen und rendern, das war das Ziel dieses Projekts.',
      link: 'https://linkToJoin',
      github: 'https://linkToGithub',
      imagePath: './../../assets/images/PC-Mokups/pokedex.png',
      isImageLeft: true,
    },
    {
      title: 'Simple CRM',
      technologies: 'Angular | Firebase',
      description:
        'Ein einfaches Customer Relationship Management System mit Create, Read, Update und Delete (CRUD) Funktionalitäten.',
      link: 'https://linkToJoin',
      github: 'https://linkToGithub',
      imagePath: './../../assets/images/PC-Mokups/simple-crm.png',
      isImageLeft: false,
    },
    {
      title: 'BackEnd',
      technologies: 'Angular | Firebase',
      description:
        'Ein einfaches Customer Relationship Management System mit Create, Read, Update und Delete (CRUD) Funktionalitäten.',
      link: 'https://linkToJoin',
      github: 'https://linkToGithub',
      imagePath: './../../assets/images/PC-Mokups/pokedex.png',
      isImageLeft: true,
    },
  ];
}
