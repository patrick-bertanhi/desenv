import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'extNumber'
})
export class ExtNumberPipe extends DecimalPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let result;

    if (isNaN(value)) {
      return value;
    }

    result = super.transform(value, args);

    return result;
  }
}
