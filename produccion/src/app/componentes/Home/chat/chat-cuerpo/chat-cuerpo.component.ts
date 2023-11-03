import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-cuerpo',
  templateUrl: './chat-cuerpo.component.html',
  styleUrls: ['./chat-cuerpo.component.css']
})
export class ChatCuerpoComponent {

  @Output() childEvent = new EventEmitter<string>();
  entrada:string=""


  cerrar()
  {
    this.childEvent.emit("hola");
  }

  enviar()
  {
  

  }
}

