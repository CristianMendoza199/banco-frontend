import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../services/cuenta.service';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-cuenta',
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './crear-cuenta.component.html',
  styleUrl: './crear-cuenta.component.css'
})

 export class CrearCuentaComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder, private cuentaService: CuentaService) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      cliente_id: [0, Validators.required],
      tipo_cuenta_id: ['', Validators.required],
      saldo: [0, Validators.required]
    });
  }

  guardar() {
    if (this.formulario.valid) {
      this.cuentaService.crearCuenta(this.formulario.value).subscribe({
        next: (res) => alert('cuenta creada exitosamente'),
        error: (err) => alert('Error al crear la cuenta: ' + err.error?.detalles)
      });
    } else {
      alert('Formulario incompleto o inválido');
    }
  }
}

