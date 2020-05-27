import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTranslateComponent } from './header-translate.component';

describe('HeaderTranslateComponent', () => {
  let component: HeaderTranslateComponent;
  let fixture: ComponentFixture<HeaderTranslateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTranslateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
