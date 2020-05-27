import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stringPipe' })
export class StringPipe implements PipeTransform {
  private map = {
    â: 'a',
    Â: 'A',
    à: 'a',
    À: 'A',
    á: 'a',
    Á: 'A',
    ã: 'a',
    Ã: 'A',
    ê: 'e',
    Ê: 'E',
    è: 'e',
    È: 'E',
    é: 'e',
    É: 'E',
    î: 'i',
    Î: 'I',
    ì: 'i',
    Ì: 'I',
    í: 'i',
    Í: 'I',
    õ: 'o',
    Õ: 'O',
    ô: 'o',
    Ô: 'O',
    ò: 'o',
    Ò: 'O',
    ó: 'o',
    Ó: 'O',
    ü: 'u',
    Ü: 'U',
    û: 'u',
    Û: 'U',
    ú: 'u',
    Ú: 'U',
    ù: 'u',
    Ù: 'U',
    ç: 'c',
    Ç: 'C'
  };

  transform(value: string, args?: any): any {
    if (args.removerAcentos) {
      value = value.replace(/[\W\[\] ]/g, a => this.map[a] || a);
    }

    return value;
  }
}
