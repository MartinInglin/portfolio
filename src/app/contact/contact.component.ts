import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContactComponent } from './dialog-contact/dialog-contact.component';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatButtonModule, FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  privacyPolicy: boolean = false;
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyPolicy: false,
  };

  mailTest = false;

  post = {
    endPoint: 'https://martin-inglin.ch/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(public dialog: MatDialog, public dataService: DataService) {
  }

  onSubmit(ngForm: NgForm) {
    this.dataService.contactData = this.contactData;
    
    if (
      ngForm.submitted &&
      ngForm.form.valid &&
      !this.mailTest &&
      this.privacyPolicy
    ) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.privacyPolicy = false;
            const hiddenCheckbox = document.querySelector('.checkbox-container input[type="checkbox"]') as HTMLInputElement;
            if (hiddenCheckbox) {
              hiddenCheckbox.checked = false;
            }
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (
      ngForm.submitted &&
      ngForm.form.valid &&
      this.mailTest &&
      this.privacyPolicy
    ) {
      this.http.post(this.post.endPoint, null, this.post.options).subscribe({
        next: (response) => {
          console.info('Test email sent successfully!');
          ngForm.resetForm();
          this.privacyPolicy = false;
        },
        error: (error) => {
          console.error('Test email failed:', error);
        },
        complete: () => console.info('Test email complete'),
      });
    }
  }

  checkPrivacyPolicy() {
    this.privacyPolicy = !this.privacyPolicy;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContactComponent, {
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
