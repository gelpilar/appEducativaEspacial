import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { Preguntas } from 'src/interfaces/interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logica-juego-quiz',
  templateUrl: './logica-juego-quiz.component.html',
  styleUrls: ['./logica-juego-quiz.component.css']
})
export class LogicaJuegoQuizComponent implements OnInit {

  preguntas: Preguntas[] = [];
  currentQuestion: Preguntas | undefined;
  userAnswer: string = '';
  score: number = 0;

  constructor(private quizService: QuizService,
    private router: Router) { }

  ngOnInit() {
    this.quizService.getPreguntas().then((data) => {
      if (data) {
        this.preguntas = data;
        this.iniciarJuego();
      }
    });
  }

  iniciarJuego() {
    this.reiniciarJuego();
    this.mostrarSiguientePregunta();
  }

  async mostrarSiguientePregunta() {
    if (this.preguntas.length > 0) {
      this.currentQuestion = this.preguntas.pop();
      this.userAnswer = '';
    } else {
      await Swal.fire({
        title: "Juego terminado",
        text: `Tu puntaje fue de ${this.score}/10`,
        showDenyButton: true,
        confirmButtonText: "Inicio",
        denyButtonText: "Volver a jugar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/Home']);
        } else if (result.isDenied) {
          window.location.reload();
        }
      });
      
    }
  }


  
  
  async verificarRespuesta(opcion: string) {
    if (this.currentQuestion && opcion.toLowerCase() === this.currentQuestion.respuesta.toLowerCase()) {
     await Swal.fire({
        title: "Respuesta correcta",
        text: "La respuesta ha sido correcta",
        icon: "success",  
      });
      this.score++;
    }
    else {
      const respuestaCorrecta = this.currentQuestion ? this.currentQuestion.respuesta : "No disponible";
      await Swal.fire({
        title: "Respuesta incorrecta",
        text: `La respuesta correcta es: "${respuestaCorrecta}"`,
        icon: "error",  // Cambié "success" a "error" para mostrar un icono de error en caso de respuesta incorrecta.
      });
    }

    this.mostrarSiguientePregunta();
  }
  
  /* CAMBIARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR */
  mostrarAyuda(opcion: string | undefined) {
    Swal.fire({
      title: 'Ayuda',
      text: opcion,
      customClass: {
        container: 'my-custom-container',
        title: 'my-custom-title',
        confirmButton: 'my-custom-confirm-button', 
      }
    });
  }
  
  shuffleArray(array: Preguntas[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  reiniciarJuego() {
    this.score = 0;
    this.preguntas = this.shuffleArray(this.preguntas).slice(0, 3);
    this.mostrarSiguientePregunta();
  }  
}


