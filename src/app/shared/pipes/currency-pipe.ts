import { Pipe, PipeTransform, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
// tslint:disable
export const currencyCodes = {
  pt: 'BRL',
  en: 'USD'
};

export const currencyLocales = {
  pt: 'pt-BR',
  en: 'en-US'
};

@Pipe({ name: 'currencyPipe' })
export class CurrencyPipe implements PipeTransform, OnDestroy {
  private changeSubs: any;
  private cache;

  constructor(private translateService: TranslateService, private cd: ChangeDetectorRef) {
    this.changeSubs = this.translateService.onLangChange.subscribe(($event: LangChangeEvent) => {
      (<any> this).locale = $event.lang;
      this.cache = null;
    });
  }

  transform(value: string | number): string {
    if (value || value === 0) {
      value = +value;

      const lang = this.translateService.currentLang;
      const valueInt = new Intl.NumberFormat(currencyLocales[lang], {
        style: 'currency',
        currency: currencyCodes[lang]
      }).format(value);

      return valueInt;
    }

    return '';
  }

  ngOnDestroy(): void {
    this.changeSubs.unsubscribe();
  }
}
