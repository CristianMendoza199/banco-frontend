import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CreditoService } from '../../services/credito.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-credito',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './credito.component.html'
})
export class CreditoComponent {
  
  creditoForm: FormGroup;

    constructor(private fb: FormBuilder, private creditoService: CreditoService) {
    this.creditoForm = this.fb.group({
      cliente_id: ['', Validators.required],
      monto: ['', Validators.required],
      tasa_interes: ['', Validators.required],
      estado: ['pendiente'] // valor por defecto
    });
  }

    enviar() {
    if (this.creditoForm.valid) {
      this.creditoService.crearCredito(this.creditoForm.value).subscribe({
        next: (res) => {
          alert(' Crédito asignado correctamente');
          this.creditoForm.reset({ estado: 'pendiente' });
        },
        error: (err) => {
          console.error('Error al crear crédito:', err);
          alert(' Ocurrió un error al asignar el crédito');
        }
      });
    }
  }
}


