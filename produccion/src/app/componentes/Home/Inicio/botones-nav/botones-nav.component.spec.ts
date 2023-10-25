import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesNavComponent } from './botones-nav.component';

describe('BotonesNavComponent', () => {
  let component: BotonesNavComponent;
  let fixture: ComponentFixture<BotonesNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonesNavComponent]
    });
    fixture = TestBed.createComponent(BotonesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
