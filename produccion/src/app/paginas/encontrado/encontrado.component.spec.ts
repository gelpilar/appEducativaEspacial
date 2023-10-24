import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontradoComponent } from './encontrado.component';

describe('EncontradoComponent', () => {
  let component: EncontradoComponent;
  let fixture: ComponentFixture<EncontradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncontradoComponent]
    });
    fixture = TestBed.createComponent(EncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
