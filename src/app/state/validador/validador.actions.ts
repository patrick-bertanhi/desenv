import { Action } from '@ngrx/store';

export enum ValidadorActionsTypes {
    VALIDAR_CPF = '[Validador] Validar Cpf',
    VALIDAR_CPF_SUCESSO = '[Validador] Validar Cpf sucesso',

    VALIDAR_CNPJ = '[Validador] Validar Cnpj',
    VALIDAR_CNPJ_SUCESSO = '[Validador] Validar Cnpj sucesso',

    VALIDAR_CNS = '[Validador] Validar Cns',
    VALIDAR_CNS_SUCESSO = '[Validador] Validar Cns sucesso',

    LIMPAR_REGISTRO = '[LIMPAR] Limpando Registros',
    LIMPAR_REGISTRO_SUCESSO = '[LIMPAR] Limpando Registros Sucesso'

}

export class ValidarCpf implements Action {
    readonly type = ValidadorActionsTypes.VALIDAR_CPF;
    constructor(public payload: {cpf: string}) { }
}

export class ValidarCpfSucesso implements Action {
    readonly type = ValidadorActionsTypes.VALIDAR_CPF_SUCESSO;
    constructor(public payload: any) { }
}

export class ValidarCnpj implements Action {
  readonly type = ValidadorActionsTypes.VALIDAR_CNPJ;
  constructor(public payload: {cnpj: string}) { }
}

export class ValidarCnpjSucesso implements Action {
  readonly type = ValidadorActionsTypes.VALIDAR_CNPJ_SUCESSO;
  constructor(public payload: any) { }
}

export class ValidarCns implements Action {
  readonly type = ValidadorActionsTypes.VALIDAR_CNS;
  constructor(public payload: {cns: string}) { }
}

export class ValidarCnsSucesso implements Action {
  readonly type = ValidadorActionsTypes.VALIDAR_CNS_SUCESSO;
  constructor(public payload: any) { }
}

export class LimparRegistros implements Action {
  readonly type = ValidadorActionsTypes.LIMPAR_REGISTRO;
  constructor() { }
}

export class LimparRegistrosSucesso implements Action {
  readonly type = ValidadorActionsTypes.LIMPAR_REGISTRO_SUCESSO;
  constructor() { }
}

export type ValidadorActions =
ValidarCpf |
ValidarCpfSucesso |
ValidarCnpj |
ValidarCnpjSucesso |
ValidarCns |
ValidarCnsSucesso |
LimparRegistros |
LimparRegistrosSucesso;
