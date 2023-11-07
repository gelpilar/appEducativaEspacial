import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatBotService } from 'src/app/services/chat-bot.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-cuerpo',
  templateUrl: './chat-cuerpo.component.html',
  styleUrls: ['./chat-cuerpo.component.css']
})
export class ChatCuerpoComponent implements OnInit {

  @Output() childEvent = new EventEmitter<string>();
  preguntas:Pregunta[]=[];


  respuesta: string | void = undefined;
  pregUsuario: string | void = undefined;
  resChat: string = '';
  pregunta: string = '';
  nombre: string | undefined;



  ngOnInit(): void {
  }

  constructor(private chatBotService: ChatBotService,private route: ActivatedRoute) {

  }

  onInputChange(event: any) {
    this.pregunta = event.target.value;
  }

  cerrar() {
    this.childEvent.emit("hola");
    this.reiniciarArreglo();
    
  }
   //funcion que pasa cuando pregunta el usario
  async preguntaUsuario() {
    if(this.pregunta.trim()!=""){
      this.agregarAlArreglo(this.pregunta,"usuario");
      this.pregunta="";
      
      
      try {
       const response: Object| undefined|any= await this.chatBotService.query({ "in-0": this.pregunta });
  
        if (typeof(response["out-0"])!=undefined) {
    
          this.agregarAlArreglo(response["out-0"],"chat");
  
        } else {
          
          this.agregarAlArreglo("Lo siento por el momento no te puedo responder :(","chat");
        }
        
      } catch (error) {
        
        this.agregarAlArreglo("Lo siento por el momento no te puedo responder :(","chat");
      }
  
    }
    
  }

  
 
  
  agregarAlArreglo(pregunta:string,categoria:string) {
    this.preguntas.push({pregunta,categoria});
  }

  reiniciarArreglo(){

    this.preguntas=[];
  }

  }

  interface Pregunta{
    pregunta:string;
    categoria:string;
  }

