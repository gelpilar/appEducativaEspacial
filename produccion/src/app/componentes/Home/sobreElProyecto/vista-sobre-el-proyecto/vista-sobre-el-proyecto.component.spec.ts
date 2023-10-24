import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSobreElProyectoComponent } from './vista-sobre-el-proyecto.component';

describe('VistaSobreElProyectoComponent', () => {
  let component: VistaSobreElProyectoComponent;
  let fixture: ComponentFixture<VistaSobreElProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaSobreElProyectoComponent]
    });
    fixture = TestBed.createComponent(VistaSobreElProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
