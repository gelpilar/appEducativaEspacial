import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonLogoComponent } from './boton-logo.component';

describe('BotonLogoComponent', () => {
  let component: BotonLogoComponent;
  let fixture: ComponentFixture<BotonLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonLogoComponent]
    });
    fixture = TestBed.createComponent(BotonLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
