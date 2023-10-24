import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolverComponent } from './volver.component';

describe('VolverComponent', () => {
  let component: VolverComponent;
  let fixture: ComponentFixture<VolverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolverComponent]
    });
    fixture = TestBed.createComponent(VolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
