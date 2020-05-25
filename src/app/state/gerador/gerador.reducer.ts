import { GeradorActions, GeradorActionsTypes } from './gerador.actions';

export interface Gerador {
  number: string | null;
  number_formatted: string | null;
  message: string | null;
}

export interface GeradorState {
    cpf: Gerador;
    cnpj: Gerador;
    cns: Gerador;

}

export const initialState = {
    cpf: {
      number: '',
      number_formatted: '',
      message: ''
    },
    cnpj: {
      number: '',
      number_formatted: '',
      message: ''
    },
    cns: {
      number: '',
      number_formatted: '',
      message: ''
    }
};

export function geradorReducer(state = initialState, action: GeradorActions): GeradorState {
  switch (action.type) {
    case GeradorActionsTypes.GERAR_CPF_SUCESSO: {
      return {
        ...state,
        cpf: action.payload.cpfGerado
      };
    }

    case GeradorActionsTypes.GERAR_CNPJ_SUCESSO: {
      return {
        ...state,
        cnpj: action.payload.cnpjGerado
      };
    }

    case GeradorActionsTypes.GERAR_CNS_SUCESSO: {
      return {
        ...state,
        cns: action.payload.cnsGerado
      };
    }

    default:
      return state;
  }
}
