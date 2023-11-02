import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicaJuegoComponent } from './logica-juego.component';

describe('LogicaJuegoComponent', () => {
  let component: LogicaJuegoComponent;
  let fixture: ComponentFixture<LogicaJuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogicaJuegoComponent]
    });
    fixture = TestBed.createComponent(LogicaJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
