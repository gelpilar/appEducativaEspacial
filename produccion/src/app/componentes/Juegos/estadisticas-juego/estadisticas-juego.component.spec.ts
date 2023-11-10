import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasJuegoComponent } from './estadisticas-juego.component';

describe('EstadisticasJuegoComponent', () => {
  let component: EstadisticasJuegoComponent;
  let fixture: ComponentFixture<EstadisticasJuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadisticasJuegoComponent]
    });
    fixture = TestBed.createComponent(EstadisticasJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
