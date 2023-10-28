import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaContactoComponent } from './vista-contacto.component';

describe('VistaContactoComponent', () => {
  let component: VistaContactoComponent;
  let fixture: ComponentFixture<VistaContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaContactoComponent]
    });
    fixture = TestBed.createComponent(VistaContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
