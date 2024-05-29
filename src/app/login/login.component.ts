import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  jwtToken = '';
  loginForm: FormGroup | undefined;
  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}
    

  ngOnInit(): void {
    if (this.authService.isAuthenticated) {
      this.router.navigateByUrl('/home');
    }
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]]
    });
  }

  handleLogin() {
    if (this.loginForm?.invalid) {
      return;
    }
    this.authService.login(this.loginForm?.value)
      .subscribe({
        next: (data) => {
          this.loginForm?.reset();
          
          this.authService.loadProfile(data);
          this.router.navigateByUrl('/home');
          this.jwtToken = data;
          console.log(data);
        },
        error: error => {
          this.errorMessage = error.error.message;
          console.log(error);
        }
      });
  }

  toRegister() {
    this.router.navigateByUrl('/register');
}
    

}
