import { Component } from '@angular/core';
import {
  MatDialogRef,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataService } from '../services/data.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog-contact',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    TranslateModule,
  ],
  templateUrl: './dialog-contact.component.html',
  styleUrl: './dialog-contact.component.scss',
})
export class DialogContactComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogContactComponent>,
    public dataService: DataService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
