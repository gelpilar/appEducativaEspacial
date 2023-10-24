import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEncontradoComponent } from './vista-encontrado.component';

describe('VistaEncontradoComponent', () => {
  let component: VistaEncontradoComponent;
  let fixture: ComponentFixture<VistaEncontradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaEncontradoComponent]
    });
    fixture = TestBed.createComponent(VistaEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
