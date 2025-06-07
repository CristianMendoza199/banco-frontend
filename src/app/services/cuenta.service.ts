import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

    private apiUrl = 'http://localhost:3001/api/cuentas';
  constructor(private http: HttpClient) { }

  crearCuenta(cuentas: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/crear`,cuentas);
  }
}
