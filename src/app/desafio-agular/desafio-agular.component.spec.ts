import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioAgularComponent } from './desafio-agular.component';

describe('DesafioAgularComponent', () => {
  let component: DesafioAgularComponent;
  let fixture: ComponentFixture<DesafioAgularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafioAgularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioAgularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
