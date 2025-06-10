import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {


  private apiUrl = 'http://localhost:3001/api/transacciones';
  
  constructor(private http: HttpClient) { }

    registrarTransaccion(transaccion: any): Observable<any>{
      return this.http.post(`${this.apiUrl}/transaccion`, transaccion);
    }
}
