import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PreguntasGuardadas } from 'src/app/preguntasGuardadas/preguntasGuardadas';
import { ChatBotService } from 'src/app/services/chat-bot.service';


@Component({
  selector: 'app-chat-cuerpo',
  templateUrl: './chat-cuerpo.component.html',
  styleUrls: ['./chat-cuerpo.component.css']
})
export class ChatCuerpoComponent implements OnInit {

  @Output() childEvent = new EventEmitter<string>();


  respuesta: string | void = undefined;
  pregUsuario: string | void = undefined;
  resChat: string = '';
  preguntasYrespuestas: PreguntasGuardadas[] = [];


  ngOnInit(): void {

  }

  constructor(private chatBotService: ChatBotService) {

  }

  cerrar() {
    this.childEvent.emit("hola");
  }

  async preguntaUsuario(pregunta: string) {

    this.pregUsuario = pregunta;
/*     const pregunta1 = new PreguntasGuardadas("pregunta", this.pregUsuario);
    this.preguntasYrespuestas.push(pregunta1); */


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

  }




}

