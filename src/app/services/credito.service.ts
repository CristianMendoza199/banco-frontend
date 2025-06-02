import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CreditoService {

    private apiUrl = 'http://localhost:3001/api/creditos';

  constructor(private http: HttpClient) { }

crearCredito(credito:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/crear`, credito);
}

}
