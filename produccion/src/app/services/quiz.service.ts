import { Injectable } from '@angular/core';
import { Preguntas } from 'src/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  urlQuiz: string = 'http://localhost:4000/quiz';

  constructor() { }

  async getPreguntas(): Promise<Preguntas[] | undefined> {
    try {
      const resultado = await fetch(this.urlQuiz);
      const elementos = await resultado.json();
      return elementos;
    } catch (error) {
      console.log(error);
    }
    return undefined;
  }
}