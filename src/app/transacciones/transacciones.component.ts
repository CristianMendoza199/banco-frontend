import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TransaccionesService } from '../services/transacciones.service';

@Component({
  selector: 'app-transacciones',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './transacciones.component.html',
  styleUrl: './transacciones.component.css'
})
export class TransaccionesComponent {
    formulario: FormGroup;


    constructor(private fb:FormBuilder, private transaccionesService: TransaccionesService){
      this.formulario = this.fb.group({
        cuenta_id: [null, Validators.required],
        tipo: ['',Validators.required],
        monto: [0,[Validators.required, Validators.min(0.01)]]
      });
    }

    guardar(){
      if(this.formulario.valid){
        this.transaccionesService.registrarTransaccion(this.formulario.value).subscribe({
          next: res => alert(res.status_desc),
          error: err => alert('Error' +err.error?.error || 'no se pudo registrar la transacción')
        });
      }
    }
}
