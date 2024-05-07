import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  jwtToken = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }


  handleRegister() {
    this.submitted = true;

    let regFrom = this.registrationForm.value;

    if (regFrom.password !== regFrom.confirmPassword) {
      this.error = 'Passwords do not match';
      alert('Passwords do not match');
      return;
    }
    
    this.loading = true;
    this.authService.register(this.registrationForm.value)
      .subscribe({
        next: (data) => {
          this.loading = false;
          this.jwtToken = data;
          console.log(this.jwtToken);
          this.registrationForm.reset();
          alert('Registration successful' + this.jwtToken);
        },
        error: error => {
          this.error = error;
          this.loading = false;
        }
      });
  }
}
