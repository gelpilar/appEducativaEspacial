import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicaJuegoQuizComponent } from './logica-juego-quiz.component';

describe('LogicaJuegoQuizComponent', () => {
  let component: LogicaJuegoQuizComponent;
  let fixture: ComponentFixture<LogicaJuegoQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogicaJuegoQuizComponent]
    });
    fixture = TestBed.createComponent(LogicaJuegoQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
