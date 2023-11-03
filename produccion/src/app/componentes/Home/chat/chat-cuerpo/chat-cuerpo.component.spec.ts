import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCuerpoComponent } from './chat-cuerpo.component';

describe('ChatCuerpoComponent', () => {
  let component: ChatCuerpoComponent;
  let fixture: ComponentFixture<ChatCuerpoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatCuerpoComponent]
    });
    fixture = TestBed.createComponent(ChatCuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
