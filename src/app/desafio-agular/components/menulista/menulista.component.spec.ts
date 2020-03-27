import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulistaComponent } from './menulista.component';

describe('MenulistaComponent', () => {
  let component: MenulistaComponent;
  let fixture: ComponentFixture<MenulistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenulistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenulistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
