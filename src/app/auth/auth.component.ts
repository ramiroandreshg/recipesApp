import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      // implement login

    } else { // then its signup mode
      this.authService.signup(email, password).subscribe(
        (responseData) => {
          console.log(responseData);
          this.isLoading = false;
        }, errorMessage => {
          this.isLoading = false;
          this.error = errorMessage;
        }
      );
    }
    form.reset();
  }
}
