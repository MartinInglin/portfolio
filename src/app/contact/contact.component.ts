import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm, } from '@angular/forms';
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
export class ContactComponent implements OnInit {
  @ViewChild('contactForm') ngForm!: NgForm;
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

  ngOnInit() {
    this.enableSendMessageButton();
  }

  onSubmit(ngForm: NgForm) {
    this.dataService.contactData = this.contactData;

    if (this.formCompleted(ngForm) && ngForm.submitted) {
      this.openDialog();
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.privacyPolicy = false;
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
          complete: () => console.info('send post complete'),
        });
    }
  }

  checkPrivacyPolicy() {
    this.privacyPolicy = !this.privacyPolicy;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContactComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  enableSendMessageButton() {
    if (this.ngForm) {
      this.ngForm.valueChanges?.subscribe(() => {
        this.formComplete = this.formCompleted(this.ngForm);
      });
    }
  }

  formCompleted(ngForm: NgForm): boolean {
    return ngForm.form.valid && this.privacyPolicy;
  }
}
