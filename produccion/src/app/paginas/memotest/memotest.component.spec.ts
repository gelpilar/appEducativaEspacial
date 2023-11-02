import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemotestComponent } from './memotest.component';

describe('MemotestComponent', () => {
  let component: MemotestComponent;
  let fixture: ComponentFixture<MemotestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemotestComponent]
    });
    fixture = TestBed.createComponent(MemotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
