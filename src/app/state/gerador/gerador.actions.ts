import { Action } from '@ngrx/store';

export enum GeradorActionsTypes {
    GERAR_CPF = '[Gerador] Gerar Cpf',
    GERAR_CPF_SUCESSO = '[Gerador] Gerar Cpf sucesso',

    GERAR_CNPJ = '[Gerador] Gerar Cnpj',
    GERAR_CNPJ_SUCESSO = '[Gerador] Gerar Cnpj sucesso',

    GERAR_CNS = '[Gerador] Gerar Cns',
    GERAR_CNS_SUCESSO = '[Gerador] Gerar Cns sucesso'
}

export class GerarCpf implements Action {
    readonly type = GeradorActionsTypes.GERAR_CPF;
    constructor() { }
}

export class GerarCpfSucesso implements Action {
    readonly type = GeradorActionsTypes.GERAR_CPF_SUCESSO;
    constructor(public payload: any) { }
}

export class GerarCnpj implements Action {
  readonly type = GeradorActionsTypes.GERAR_CNPJ;
  constructor() { }
}

export class GerarCnpjSucesso implements Action {
  readonly type = GeradorActionsTypes.GERAR_CNPJ_SUCESSO;
  constructor(public payload: any) { }
}

export class GerarCns implements Action {
  readonly type = GeradorActionsTypes.GERAR_CNS;
  constructor() { }
}

export class GerarCnsSucesso implements Action {
  readonly type = GeradorActionsTypes.GERAR_CNS_SUCESSO;
  constructor(public payload: any) { }
}


export type GeradorActions = GerarCpf | GerarCpfSucesso | GerarCnpj | GerarCnpjSucesso | GerarCns | GerarCnsSucesso;
