import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, NotFoundRoutingModule, TranslateModule],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class NotFoundModule {}
