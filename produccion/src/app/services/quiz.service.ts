import { Injectable } from '@angular/core';
import { Preguntas } from 'src/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  urlQuiz: string = 'https://json-api-q4il.onrender.com/quiz';

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