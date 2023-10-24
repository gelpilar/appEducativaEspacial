import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSistemaSolarComponent } from './vista-sistema-solar.component';

describe('VistaSistemaSolarComponent', () => {
  let component: VistaSistemaSolarComponent;
  let fixture: ComponentFixture<VistaSistemaSolarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaSistemaSolarComponent]
    });
    fixture = TestBed.createComponent(VistaSistemaSolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
