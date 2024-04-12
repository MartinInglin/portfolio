import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

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
        en: 'An organization tool similar to a Kanban board. Drag and drop functionalities are implemented, you can assign users to a tasks and define subtasks.',
        de: 'Ein Organisationstool im Stile eines Kanban-Boards. Tasks lassen sich per drag and drop verschieben, User können einem Task zugewiesen und Subtasks definiert werden.',
      },
      video: './../../assets/video/join.mp4',
      link: 'https://linkToJoin',
      github: 'https://github.com/MartinInglin/join',
      imagePath: 'assets/images/PC-Mokups/join.png',
      isImageLeft: true,
    },
    {
      title: 'El Pollo Loco',
      technologies: 'HTML | CSS | JavaScript',
      description: {
        en: 'A jump and run game around the character Pepe based on object oriented programming. Help him defeating evil Cluck-Zilla.',
        de: 'Ein Jump and Run Game basierend auf Objekt orientierter Programmierung. Helfen Sie Pepe, die böse Cluck-Zilla zu besiegen.',
      },
      video: './../../assets/video/el-pollo-loco.mp4',
      link: 'https://linkToJoin',
      github: 'https://github.com/MartinInglin/el-pollo-loco',
      imagePath: 'assets/images/PC-Mokups/el-pollo-loco.png',
      isImageLeft: false,
    },
    {
      title: 'Pokedex',
      technologies: 'HTML | CSS | JavaScript | API',
      description: {
        en: 'Based on the public PokéAPI you can find all Pokemons listed and filtered.',
        de: 'Alle Pokemon der öffentlichen PokéAPI werden gerendert und gefiltert.',
      },
      video: './../../assets/video/pokedex.mp4',
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
      video: './../../assets/video/el-pollo-loco.mp4',
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
      video: './../../assets/video/el-pollo-loco.mp4',
      link: 'https://linkToJoin',
      github: 'https://linkToGithub',
      imagePath: 'assets/images/PC-Mokups/pokedex.png',
      isImageLeft: true,
    },
  ];
}

export interface Project {
  title: string;
  technologies: string;
  description: { [key: string]: string };
  video: string;
  link: string;
  github: string;
  imagePath: string;
  isImageLeft: boolean;
}
