import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitaComponent } from './orbita.component';

describe('OrbitaComponent', () => {
  let component: OrbitaComponent;
  let fixture: ComponentFixture<OrbitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrbitaComponent]
    });
    fixture = TestBed.createComponent(OrbitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
