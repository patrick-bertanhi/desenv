import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cnpjPipe' })
export class CnpjPipe implements PipeTransform {
  transform(value: number | string): string {
    if (value) {
      return `00000000000000${value.toString()}`
        .slice(-14)
        .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    } else {
      return '';
    }
  }
}
