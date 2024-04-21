import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContactComponent } from './dialog-contact/dialog-contact.component';
import { DataService } from './services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatButtonModule, FormsModule, TranslateModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  privacyPolicy: boolean = false;
  http = inject(HttpClient);
  formComplete: boolean = false;

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyPolicy: false,
  };

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

  constructor(public dialog: MatDialog, public dataService: DataService) {}

  onSubmit(ngForm: NgForm) {
    this.dataService.contactData = { ...this.contactData };

    if (this.formCompleted(ngForm) && ngForm.submitted) {
      this.openDialog();
      this.sendEmail(ngForm);
    }
  }

  checkPrivacyPolicy() {
    this.privacyPolicy = !this.privacyPolicy;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContactComponent, {});

    dialogRef.afterClosed().subscribe((result) => {});
  }

  sendEmail(ngForm: NgForm) {
    this.http
      .post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          this.privacyPolicy = false;
          ngForm.resetForm();

          const hiddenCheckbox = document.querySelector(
            '.checkbox-container input[type="checkbox"]'
          ) as HTMLInputElement;
          if (hiddenCheckbox) {
            hiddenCheckbox.checked = false;
          }
        },
        error: (error) => {
          console.error(error);
        },
      });
    setTimeout(() => {
      this.enableSendMessageButton();
    }, 500);
  }

  enableSendMessageButton() {
    if (
      this.contactData.name != '' &&
      this.contactData.email != '' &&
      this.contactData.message != '' &&
      this.privacyPolicy
    ) {
      this.formComplete = true;
    } else {
      this.formComplete = false;
    }
  }

  formCompleted(ngForm: NgForm): boolean {
    return ngForm.form.valid && this.privacyPolicy;
  }
}
