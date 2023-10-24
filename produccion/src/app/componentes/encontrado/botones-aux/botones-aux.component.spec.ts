import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesAuxComponent } from './botones-aux.component';

describe('BotonesAuxComponent', () => {
  let component: BotonesAuxComponent;
  let fixture: ComponentFixture<BotonesAuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonesAuxComponent]
    });
    fixture = TestBed.createComponent(BotonesAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
