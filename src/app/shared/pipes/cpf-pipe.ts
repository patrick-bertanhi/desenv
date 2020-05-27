import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cpfPipe' })
export class CpfPipe implements PipeTransform {
  transform(value: number | string): string {
    if (value) {
      return `00000000000${value.toString()}`.slice(-11).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
      return '';
    }
  }
}
