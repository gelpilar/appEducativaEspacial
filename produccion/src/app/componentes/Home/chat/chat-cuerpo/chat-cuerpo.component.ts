import { Component, EventEmitter, OnInit, Output, ElementRef, ViewChild } from '@angular/core';
import { ChatBotService } from 'src/app/services/chat-bot.service';


@Component({
  selector: 'app-chat-cuerpo',
  templateUrl: './chat-cuerpo.component.html',
  styleUrls: ['./chat-cuerpo.component.css']
})
export class ChatCuerpoComponent implements OnInit {
 
  @Output() childEvent = new EventEmitter<string>();
  @ViewChild('chatContainer', { read: ElementRef }) chatContainer: ElementRef | undefined;


  respuesta: string | void = undefined;
  pregUsuario: string | void = undefined;

  ngOnInit(): void {
  
  }

  constructor(private chatBotService: ChatBotService) {
      
   }

  cerrar() {
    this.childEvent.emit("hola");
  }

  async preguntaUsuario(pregunta: string) {
    this.pregUsuario = pregunta;
    try {
      const response: Object | undefined | any = await this.chatBotService.query({ "in-0": pregunta });
  
      if (response) {
        this.respuesta = response["out-0"];
      } else {
        console.warn("La respuesta de la API es undefined.");
      }  
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
    }
  
    if (this.chatContainer) {
      this.chatContainer.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
  

 

}

