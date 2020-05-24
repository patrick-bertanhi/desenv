
/* tslint:disable */
 export interface recuperarCep {
  listarEmpreendimentos: recuperarCep_recuperarCep | null;
}
export interface recuperarCep_recuperarCep {
  __typename: 'Endereco';
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
