import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { recuperarCep } from './../types/query-types';
import { throwError, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  tokenApi = '11c21a0da6ac3ea14fa3ef685774904f';
  constructor(private http: HttpClient) { }

  getCep(cep) {
   return this.http.get(`http://geradorapp.com/api/v1/cep/search/${cep}?token=${this.tokenApi}`).pipe(
     map(r => {
       // tslint:disable-next-line: no-string-literal
       return r['data'];
     }),
     catchError(err => throwError(err))
   );
  }

  getNewCpf() {
    return this.http.get(`http://geradorapp.com/api/v1/cpf/generate?token=${this.tokenApi}`);
  }

  validaCpf(cpf) {
    return this.http.get(`http://geradorapp.com/api/v1/cpf/validate/${cpf}?token=${this.tokenApi}`);
  }

  getNewCnpj() {
    return this.http.get(`http://geradorapp.com/api/v1/cnpj/generate?token=${this.tokenApi}`);
  }

  validaCnpj(cnpj) {
    return this.http.get(`http://geradorapp.com/api/v1/cnpj/validate/${cnpj}?token=${this.tokenApi}`);
  }

  getNewCns() {
    return this.http.get(`http://geradorapp.com/api/v1/cns/generate?token=${this.tokenApi}`);
  }

  validaCns(cns) {
    return this.http.get(`http://geradorapp.com/api/v1/cns/validate/${cns}?token=${this.tokenApi}`);
  }

  listarCidadesBr() {
    return this.http.get(`http://geradorapp.com/api/v1/cities?token=${this.tokenApi}`);
  }

  listarCidadesBrFilter(siglaEstado) {
    return this.http.get(`http://geradorapp.com/api/v1/cities/${siglaEstado}?token=${this.tokenApi}`);
  }

  listarRegioes() {
    return this.http.get(`http://geradorapp.com/api/v1/regions?token=${this.tokenApi}`);
  }

  listarEstados() {
    return this.http.get(`http://geradorapp.com/api/v1/states?token=${this.tokenApi}`);
  }

  listarEstadosPorRegiao(sigla) {
    return this.http.get(`http://geradorapp.com/api/v1/states/${sigla}?token=${this.tokenApi}`);
  }

}
