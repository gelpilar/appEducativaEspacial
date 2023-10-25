import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCircularComponent } from './boton-circular.component';

describe('BotonCircularComponent', () => {
  let component: BotonCircularComponent;
  let fixture: ComponentFixture<BotonCircularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonCircularComponent]
    });
    fixture = TestBed.createComponent(BotonCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
