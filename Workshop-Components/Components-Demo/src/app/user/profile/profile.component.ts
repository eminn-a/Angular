import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailVallidator } from 'src/app/shared/utils/emailValidator';
import { ProfileDetalis } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  showEditMode: boolean = true;

  profileDetails: ProfileDetalis = {
    username: 'Jhon',
    email: 'jshn@gmail.com',
    tel: '123-123-123',
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailVallidator(EMAIL_DOMAINS)]],
    tel: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}
  onEditToggle(): void {
    this.showEditMode = !this.showEditMode;
  }

  saveProfileHandler(): void {
    if (this.form.invalid) {
      return;
    }
    this.profileDetails = this.form.value as ProfileDetalis;
    this.onEditToggle();
  }
}
