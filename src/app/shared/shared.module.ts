import { NgSelectModule, NgSelectConfig } from '@ng-select/ng-select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPipesModule } from './pipes/shared-pipes.module';
import { HeaderComponent } from './components/ui/header/header.component';
import { TableComponent } from './components/ui/table/table.component';
import { HeaderTranslateComponent } from './components/ui/header-translate/header-translate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgxMaskModule } from 'ngx-mask';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderComponent,
    TableComponent,
    HeaderTranslateComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSnackBarModule,
    SharedPipesModule,
    HeaderComponent,
    TableComponent,
    HeaderTranslateComponent,
    NgSelectModule,
    TranslateModule,
    NgxMaskModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSnackBarModule,
    NgSelectModule,
    SharedPipesModule,
    TranslateModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}}
  ]
})
export class SharedModule {
  constructor(private translateService: TranslateService, private selectConfig: NgSelectConfig) {
    this.selectConfig.notFoundText = this.translateService.instant('No items found');
    this.selectConfig.placeholder = this.translateService.instant('Select');

    // library.add(faCity, faChevronDown, faChevronRight, faChevronLeft, faBars, faArrowLeft, faPencilAlt);
  }
}
