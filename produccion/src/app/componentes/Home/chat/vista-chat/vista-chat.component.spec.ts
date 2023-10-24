import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaChatComponent } from './vista-chat.component';

describe('VistaChatComponent', () => {
  let component: VistaChatComponent;
  let fixture: ComponentFixture<VistaChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaChatComponent]
    });
    fixture = TestBed.createComponent(VistaChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
