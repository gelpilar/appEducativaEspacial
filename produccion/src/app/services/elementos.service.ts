import { Injectable } from '@angular/core';
import { Elemento } from 'src/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ElementosService {

  urlElementos: string = 'http://localhost:4000/elementos';

  constructor() { }

  async getElementos(): Promise<Elemento[] | undefined>{
    try{
      const resultado = await fetch(this.urlElementos);
      const elementos = await resultado.json();
      return elementos;
    }catch(error){
      console.log(error);
    }

    return undefined;
  }



  async getElemento(id: number): Promise<Elemento | undefined>{
    try{
      const resultado = await fetch(`${this.urlElementos}/${id}`);
      const elemento = await resultado.json();
      return elemento;
    }catch(error){
      console.log(error);
    }

    return undefined;
  }
}
