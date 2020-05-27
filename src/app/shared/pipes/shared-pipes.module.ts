import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CnpjPipe } from './cnpj-pipe';
import { CpfPipe } from './cpf-pipe';
import { CepPipe } from './cep-pipe';
import { DateFormatPipe } from './dateFormat-pipe';
import { CurrencyPipe } from './currency-pipe';
import { StringPipe } from './string-pipe';
import { CpfCnpjPipe } from './cpf-cnpj-pipe';
import { ExtNumberPipe } from './extNumber-pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [CpfPipe, CnpjPipe, CepPipe, DateFormatPipe, CurrencyPipe, StringPipe, CpfCnpjPipe, ExtNumberPipe],
  exports: [CpfPipe, CnpjPipe, CepPipe, DateFormatPipe, CurrencyPipe, StringPipe, CpfCnpjPipe, ExtNumberPipe],
  providers: [StringPipe]
})
export class SharedPipesModule {}
