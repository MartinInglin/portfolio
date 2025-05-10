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
      title: 'Videoflix',
      technologies: 'Angular | Django | Docker | Redis',
      description: {
        en: 'This is a Netflix-Clone with a fully functional registration, authentication and video player.',
        de: 'Dieser Netflix-Klon bietet neben einem Videoplayer eine voll funktionsfähige Registrierung und Authentifizierung.',
      },
      video: 'assets/video/videoflix.mp4',
      link: 'https://videoflix.martin-inglin.ch',
      github: 'https://github.com/MartinInglin/videoflix-backend',
      imagePath: 'assets/images/PC-Mokups/videoflix.png',
      isImageLeft: true,
    },
    {
      title: 'didacto',
      technologies: 'React | Firebase',
      description: {
        en: 'An app for teachers to create math exams. Please contact me for a test account.',
        de: 'Mit dieser App können Lehrpersonen Mathematikprüfungen erstellen. Gerne stelle ich Ihnen auf Anfrage einen Test Account zu.',
      },
      video: 'assets/video/didacto.mp4',
      link: 'https://didacto-d.firebaseapp.com/',
      github: null,
      imagePath: 'assets/images/PC-Mokups/didacto.png',
      isImageLeft: false,
    },
    {
      title: 'DA-Bubble',
      technologies: 'Angular | Firebase',
      description: {
        en: 'A simple custom relationship management system with create, read, update, and delete (CRUD) functionalities.',
        de: 'Ein einfaches Customer Relationship Management System mit Create-, Read-, Update- und Delete-Funktionalitäten (CRUD).',
      },
      video: 'assets/video/da-bubble.mp4',
      link: 'https://da-bubble.martin-inglin.ch',
      github: 'https://github.com/MartinInglin/da-bubble',
      imagePath: 'assets/images/PC-Mokups/da-bubble.png',
      isImageLeft: true,
    },
    {
      title: 'Join',
      technologies: 'HTML | CSS | JavaScript',
      description: {
        en: 'An organization tool similar to a Kanban board. Drag and drop functionalities are implemented, you can assign users to tasks and define subtasks.',
        de: 'Ein Organisationstool im Stile eines Kanban-Boards. Tasks lassen sich per Drag and Drop verschieben, User können einem Task zugewiesen und Subtasks definiert werden.',
      },
      video: 'assets/video/join.mp4',
      link: 'https://join.martin-inglin.ch',
      github: 'https://github.com/MartinInglin/join',
      imagePath: 'assets/images/PC-Mokups/join.png',
      isImageLeft: false,
    },
    {
      title: 'El Pollo Loco',
      technologies: 'HTML | CSS | JavaScript',
      description: {
        en: 'A jump and run game around the character Pepe based on object-oriented programming. Help him defeat evil Cluck-Zilla.',
        de: 'Ein Jump and Run Game basierend auf objekt-orientierter Programmierung. Hilf Pepe, die böse Cluck-Zilla zu besiegen.',
      },
      video: 'assets/video/el-pollo-loco.mp4',
      link: 'https://el-pollo-loco.martin-inglin.ch',
      github: 'https://github.com/MartinInglin/el-pollo-loco',
      imagePath: 'assets/images/PC-Mokups/el-pollo-loco.png',
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
  github: string | null;
  imagePath: string;
  isImageLeft: boolean;
}
