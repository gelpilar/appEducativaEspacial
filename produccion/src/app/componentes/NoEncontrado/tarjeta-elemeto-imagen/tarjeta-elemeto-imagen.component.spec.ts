import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaElemetoImagenComponent } from './tarjeta-elemeto-imagen.component';

describe('TarjetaElemetoImagenComponent', () => {
  let component: TarjetaElemetoImagenComponent;
  let fixture: ComponentFixture<TarjetaElemetoImagenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetaElemetoImagenComponent]
    });
    fixture = TestBed.createComponent(TarjetaElemetoImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
