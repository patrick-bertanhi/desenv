import { Action } from '@ngrx/store';

export enum EnderecoActionsTypes {
    LISTAR_ENDERECO = '[Endereco] Listar',
    LISTAR_ENDERECO_SUCESSO = '[Endereco] Listar sucesso'
}

export class ListarEndereco implements Action {
    readonly type = EnderecoActionsTypes.LISTAR_ENDERECO;
    constructor(public payload: {cep: string}) { }
}

export class ListarEnderecoSucesso implements Action {
    readonly type = EnderecoActionsTypes.LISTAR_ENDERECO_SUCESSO;
    constructor(public payload: any) { }
}


export type EnderecoActions = ListarEndereco | ListarEnderecoSucesso;
