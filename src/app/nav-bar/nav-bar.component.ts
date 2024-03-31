import { Component } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatButtonToggleModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
}
