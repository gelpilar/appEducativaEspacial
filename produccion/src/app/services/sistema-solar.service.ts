import { Injectable } from '@angular/core';
import { SistemaSolar } from 'src/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class SistemaSolarService {

  constructor() { }

  urlSistemaSolar: string = 'http://localhost:4000/sistemaSolar';

  async getSistemaSolarAleatorio(): Promise<SistemaSolar | undefined> {
    try {
      const resultado = await fetch(this.urlSistemaSolar);
      const sistemaSolar = await resultado.json();

      if (Array.isArray(sistemaSolar) && sistemaSolar.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * sistemaSolar.length);
        return sistemaSolar[indiceAleatorio];
      }
    } catch (error) {
      console.log(error);
    }
    return undefined;
  }
}
