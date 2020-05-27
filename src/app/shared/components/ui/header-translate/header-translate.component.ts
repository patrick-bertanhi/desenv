import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-translate',
  templateUrl: './header-translate.component.html',
  styleUrls: ['./header-translate.component.css']
})
export class HeaderTranslateComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  useLanguage(language: string) {
    this.translate.use(language);
}

}
