import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPlanetaComponent } from './tarjeta-planeta.component';

describe('TarjetaPlanetaComponent', () => {
  let component: TarjetaPlanetaComponent;
  let fixture: ComponentFixture<TarjetaPlanetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetaPlanetaComponent]
    });
    fixture = TestBed.createComponent(TarjetaPlanetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
