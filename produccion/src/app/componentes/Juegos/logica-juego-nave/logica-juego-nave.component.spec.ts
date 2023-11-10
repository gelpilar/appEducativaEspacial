import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicaJuegoNaveComponent } from './logica-juego-nave.component';

describe('LogicaJuegoNaveComponent', () => {
  let component: LogicaJuegoNaveComponent;
  let fixture: ComponentFixture<LogicaJuegoNaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogicaJuegoNaveComponent]
    });
    fixture = TestBed.createComponent(LogicaJuegoNaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
