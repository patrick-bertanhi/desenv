import { ValidadorActions, ValidadorActionsTypes } from './validador.actions';

export interface Validador {
  message: string | null;
}

export interface ValidadorState {
  cpf: Validador;
  cnpj: Validador;
  cns: Validador;
}

export const initialState = {
  cpf: {
    message: ''
  },
  cnpj: {
    message: ''
  },
  cns: {
    message: ''
  }
};

export function validadorReducer(state = initialState, action: ValidadorActions): ValidadorState {
  switch (action.type) {
    case ValidadorActionsTypes.VALIDAR_CPF_SUCESSO: {
      return {
        ...state,
        cpf: action.payload.cpfValidado
      };
    }

    case ValidadorActionsTypes.VALIDAR_CNPJ_SUCESSO: {
      return {
        ...state,
        cnpj: action.payload.cnpjValidado
      };
    }

    case ValidadorActionsTypes.VALIDAR_CNS_SUCESSO: {
      return {
        ...state,
        cns: action.payload.cnsValidado
      };
    }

    case ValidadorActionsTypes.LIMPAR_REGISTRO_SUCESSO: {
      return {
        ...state,
        cpf: null,
        cnpj: null,
        cns: null
      };
    }

    default:
      return state;
  }
}
