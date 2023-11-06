import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatBotService } from 'src/app/services/chat-bot.service';


@Component({
  selector: 'app-chat-cuerpo',
  templateUrl: './chat-cuerpo.component.html',
  styleUrls: ['./chat-cuerpo.component.css']
})
export class ChatCuerpoComponent implements OnInit{
   @Output() childEvent = new EventEmitter<string>();
  
   preg: string | void = undefined;
   
  
  ngOnInit(): void {
    
  }

  constructor(private chatBotService: ChatBotService){}


  cerrar()
  {
    this.childEvent.emit("hola");
  }


  async preguntaUsuario(pregunta: string) {
    
    console.log(pregunta);
    try {
      const response: Object | undefined | any= await this.chatBotService.query({"in-0": pregunta});
    
      if (response) {
        console.log(response["out-0"])
/*         this.preg = response["out-0"]; */
      } else {
        console.warn("La respuesta de la API es undefined.");
      }
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
    }
    
    
    
    
    if (this.preg) {
      console.log(this.preg);
    }
  }
  
  
  
  





}

