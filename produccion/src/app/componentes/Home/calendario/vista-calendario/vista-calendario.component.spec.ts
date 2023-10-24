import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCalendarioComponent } from './vista-calendario.component';

describe('VistaCalendarioComponent', () => {
  let component: VistaCalendarioComponent;
  let fixture: ComponentFixture<VistaCalendarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaCalendarioComponent]
    });
    fixture = TestBed.createComponent(VistaCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
