import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje-chat',
  templateUrl: './mensaje-chat.component.html',
  styleUrls: ['./mensaje-chat.component.css']
})
export class MensajeChatComponent {
  @Input() mensaje:string="...";

}
