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



  async getExistenciaBuscado(buscado: string): Promise<Boolean|undefined>{
    try{
      const url:string= this.urlElementos+"?nombre="+buscado;
      const resultado = await fetch(url);
      const elemento = await resultado.json();
      // preguntar
      if(elemento[0]==null)
      {
        return false;
      }else
      {
        return true;
      }
     
      
    }catch(error){
      console.log(error);
    }

    return undefined;
  }
  async getElemento(buscado: string): Promise<Elemento | undefined>{
    try{
      const url:string= this.urlElementos+"?nombre="+buscado;
      const resultado = await fetch(url);
      const elemento = await resultado.json();
      // preguntar
      if(elemento[0]==null)
      {
        return undefined;
      }else
      {
        return elemento[0];
      }
     
      
    }catch(error){
      console.log(error);
    }

    return undefined;
  }
}
