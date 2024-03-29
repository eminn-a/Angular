import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailVallidator } from 'src/app/shared/utils/emailValidator';
import { matchPasswordsValidator } from 'src/app/shared/utils/match-password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  //
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailVallidator(EMAIL_DOMAINS)]],
    tel: ['', [Validators.required]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required]],
        rePassword: ['', [Validators.required]],
      },
      { validators: [matchPasswordsValidator('password', 'rePassword')] }
    ),
  });

  constructor(private fb: FormBuilder) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
  }
}
