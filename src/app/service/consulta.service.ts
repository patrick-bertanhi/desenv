import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }

  getCep(cep) {
   return this.http.get(`//viacep.com.br/ws/${cep}/json`);
  }
}
