import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

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
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Join',
      technologies: 'HTML | CSS | JavaScript',
      description: {
        en: 'An organization tool similar to a Kanban board. Tasks can be dragged and dropped, users can be assigned to a task, and subtasks can be defined.',
        de: 'Ein Organisationstool im Stile eines Kanban-Boards. Tasks lassen sich per drag and drop verschieben, User können einem Task zugewiesen und Subtasks definiert werden.',
      },
      link: 'https://linkToJoin',
      github: 'https://github.com/MartinInglin/join',
      imagePath: 'assets/images/PC-Mokups/join.png',
      isImageLeft: true,
    },
    {
      title: 'El Pollo Loco',
      technologies: 'HTML | CSS | JavaScript',
      description: {
        en: 'A jump and run game around the character Pepe. Object oriented programming was the main task of the development.',
        de: 'Ein Jump and Run Game um die Figur Pepe. Object Oriented Programming stand bei der Entwicklung im Vordergrund.',
      },
      link: 'https://linkToJoin',
      github: 'https://github.com/MartinInglin/el-pollo-loco',
      imagePath: 'assets/images/PC-Mokups/el-pollo-loco.png',
      isImageLeft: false,
    },
    {
      title: 'Pokedex',
      technologies: 'HTML | CSS | JavaScript | API',
      description: {
        en: 'To goal was to render data from a public API.',
        de: 'Daten von einer öffentlichen API herunterladen und rendern, das war das Ziel dieses Projekts.',
      },
      link: 'https://linkToJoin',
      github: 'https://github.com/MartinInglin/pokedex',
      imagePath: 'assets/images/PC-Mokups/pokedex.png',
      isImageLeft: true,
    },
    {
      title: 'Simple CRM',
      technologies: 'Angular | Firebase',
      description: {
        en: 'A simple custom relationship management system with create, read, update and delete (CRUD) functionalities.',
        de: 'Ein einfaches Customer Relationship Management System mit Create, Read, Update und Delete (CRUD) Funktionalitäten.',
      },
      link: 'https://linkToJoin',
      github: 'https://linkToGithub',
      imagePath: 'assets/images/PC-Mokups/simple-crm.png',
      isImageLeft: false,
    },
    {
      title: 'Back End',
      technologies: 'Angular | Firebase',
      description: {
        en: 'Here goes a back end project.',
        de: 'Hier wird ein back end Projekt seinen Platz finden.',
      },
      link: 'https://linkToJoin',
      github: 'https://linkToGithub',
      imagePath: 'assets/images/PC-Mokups/pokedex.png',
      isImageLeft: true,
    },
  ];
}
