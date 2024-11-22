import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:8090/api/clientes';

  constructor(private http: HttpClient) {}

  consultarCliente(tipoDocumento: string, numeroDocumento: string) {
    const body = { tipoDocumento, numeroDocumento };
    return this.http.post(`${this.apiUrl}/consultar`, body);
  }

  obtenerTodosLosClientes() {
    return this.http.get(`${this.apiUrl}/todos`);
  }
  
}
