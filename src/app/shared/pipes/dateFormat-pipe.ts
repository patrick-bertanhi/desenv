import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'dateFormatPipe',
  pure: false
})
export class DateFormatPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(value: any, args?: any): any {
    const dateFormat = this.translate.currentLang === 'pt' ? 'dd/MM/yyyy' : 'yyyy-MM-dd';
    const datePipe: DatePipe = new DatePipe('en');
    return datePipe.transform(value, dateFormat);
  }
}
