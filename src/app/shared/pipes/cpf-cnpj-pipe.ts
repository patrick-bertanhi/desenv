import { Pipe, PipeTransform } from '@angular/core';
import { CpfPipe } from './cpf-pipe';
import { CnpjPipe } from './cnpj-pipe';

@Pipe({ name: 'cpfCnpjPipe' })
export class CpfCnpjPipe implements PipeTransform {
  private cpfPipe: CpfPipe;
  private cnpjPipe: CnpjPipe;

  /**
   * Construtor da classe.
   */
  constructor() {
    this.cpfPipe = new CpfPipe();
    this.cnpjPipe = new CnpjPipe();
  }

  //  Formata um CPF/CNPJ ou retorna seu valor passado caso inválido.
  //  O CPF/CNPJ informado deve ser composto por 11 ou 14 caracteres
  //  numéricos respectivamente.

  transform(cpfCnpj: string): string {
    if (!cpfCnpj || cpfCnpj.length <= 0) {
      return '';
    }

    // Pega todos os digitos sem (.|,| - |...) para contar no if
    const cpfCnpjValor = cpfCnpj.replace(/\D/g, '');

    if (cpfCnpjValor.length <= 11) {
      cpfCnpj = this.cpfPipe.transform(cpfCnpjValor);
    } else if (cpfCnpjValor.length > 11) {
      cpfCnpj = this.cnpjPipe.transform(cpfCnpjValor);
    }
    return cpfCnpj;
  }
}
