import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaEnderecosComponent } from './busca-enderecos.component';

describe('BuscaEnderecosComponent', () => {
  let component: BuscaEnderecosComponent;
  let fixture: ComponentFixture<BuscaEnderecosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaEnderecosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaEnderecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
