import { Injectable } from '@angular/core';
import { Elemento } from 'src/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ElementosService {

  constructor() { }

  urlElementos: string = 'http://localhost:4000/elementos';


  async getElemento(nombre:string): Promise<Elemento | undefined>{
    try{
      const urlApi = `${this.urlElementos}/Encontrado/${nombre}`;
      const resultado = await fetch(urlApi);
      const elemento = await resultado.json();
      return elemento;
    }catch(error){
      console.log(error);
    }

    return undefined;
  }
}
