import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cepPipe' })
export class CepPipe implements PipeTransform {
  transform(value: number | string, option: string): string {
    if (value) {
      const cep = '00000' + value.toString();
      return cep.slice(-8).replace(/^(\d{5})(\d{3})/, '$1-$2');
    } else {
      return '';
    }
  }
}
