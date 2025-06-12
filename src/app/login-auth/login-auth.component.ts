import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-auth.component.html',
})
export class LoginComponent {
  formulario: FormGroup;
  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.formulario.valid) {
      const { email, password } = this.formulario.value;
      this.auth.login(email, password).subscribe({
        next: () => this.router.navigate(['/transacciones']), // o donde prefieras
        error: err => {
          this.errorMsg = err.error?.status_desc || 'Error inesperado';
        }
      });
    }
  }
}