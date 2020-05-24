import { EnderecoActions, EnderecoActionsTypes } from './endereco.actions';

export interface Endereco {
    id: string | null;
    abbreviated_address: string | null;
    abbreviated_district: string | null;
    address: string | null;
    address_name: string | null;
    city: string | null;
    city_code: string | null;
    district: string | null;
    message: string | null;
    number: string | null;
    number_formatted: string | null;
    state: string | null;
    state_name: string | null;
}

export interface EnderecoState {
    endereco: Endereco[];
}

export const initialState = {
    endereco: []
};

export function enderecoReducer(state = initialState, action: EnderecoActions): EnderecoState {
  switch (action.type) {
    case EnderecoActionsTypes.LISTAR_ENDERECO_SUCESSO: {
      return {
        ...state,
        endereco: action.payload.endereco
      };
    }

    default:
      return state;
  }
}
