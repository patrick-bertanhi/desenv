import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, NotFoundRoutingModule, TranslateModule, BrowserAnimationsModule],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent]
})
export class NotFoundModule {}
