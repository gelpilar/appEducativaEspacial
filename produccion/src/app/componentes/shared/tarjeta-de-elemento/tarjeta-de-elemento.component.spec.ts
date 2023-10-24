import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaDeElementoComponent } from './tarjeta-de-elemento.component';

describe('TarjetaDeElementoComponent', () => {
  let component: TarjetaDeElementoComponent;
  let fixture: ComponentFixture<TarjetaDeElementoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetaDeElementoComponent]
    });
    fixture = TestBed.createComponent(TarjetaDeElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
