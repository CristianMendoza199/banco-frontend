import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-user.component.html'
})
export class RegistroComponent {
  formulario: FormGroup;
  errorMsg = '';
  successMsg = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rol: ['cliente'], // fijo por ahora
      cliente_id: [null, Validators.required]
    });
  }

  registrar() {
    if (this.formulario.valid) {
      this.auth.register(this.formulario.value).subscribe({
        next: () => {
          this.successMsg = 'Usuario registrado correctamente';
          setTimeout(() => this.router.navigate(['/login']), 1500);
        },
        error: err => {
          this.errorMsg = err.error?.status_desc || 'Error al registrar usuario';
        }
      });
    }
  }
}