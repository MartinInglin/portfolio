import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatButtonModule, FormsModule],
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

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
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
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest && this.privacyPolicy) {
      this.http.post(this.post.endPoint, null, this.post.options).subscribe({
        next: (response) => {
          console.info('Test email sent successfully!');
          ngForm.resetForm();
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
}
