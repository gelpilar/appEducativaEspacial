import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaNoEncontradoComponent } from './vista-no-encontrado.component';

describe('VistaNoEncontradoComponent', () => {
  let component: VistaNoEncontradoComponent;
  let fixture: ComponentFixture<VistaNoEncontradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaNoEncontradoComponent]
    });
    fixture = TestBed.createComponent(VistaNoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
