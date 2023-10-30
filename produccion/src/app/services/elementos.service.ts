import { Injectable } from '@angular/core';
import { Elemento } from 'src/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ElementosService {

  urlElementos: string = 'http://localhost:4000/elementos';
  elementos: Elemento[] = [];
  elementosFiltrados: Elemento[] = [];

  constructor() { }

  async getElementos(): Promise<Elemento[] | undefined> {
    try {

      const resultado = await fetch(this.urlElementos);
      const elementos = await resultado.json();
      return elementos;
    } catch (error) {
      console.log(error);
    }

    return undefined;
  }



  async getExistenciaBuscado(buscado: string): Promise<Boolean | undefined> {
    try {
      const url: string = this.urlElementos + "?nombre=" + buscado;
      const resultado = await fetch(url);
      const elemento = await resultado.json();
      // preguntar
      if (elemento[0] == null) {
        return false;
      } else {
        return true;
      }


    } catch (error) {
      console.log(error);
    }

    return undefined;
  }



  async getElemento(buscado: string): Promise<Elemento | undefined> {
    try {
      const url: string = this.urlElementos + "?nombre=" + buscado;
      const resultado = await fetch(url);
      const elemento = await resultado.json();


      if (elemento[0] == null) {
        return undefined;
      } else {
        return elemento[0];
      }


    } catch (error) {
      console.log(error);
    }

    return undefined;
  }



  async getPlaneta(): Promise<Elemento | undefined>{
    try {
      const resultado = await fetch(this.urlElementos);
      this.elementos = await resultado.json();
      this.filtrarElementosPorCategoria('planeta')
      console.log(this.seleccionarElementoAleatorio())
      return this.seleccionarElementoAleatorio();
    } catch (error) {
      console.log(error);
    }
    return undefined;
  }



  async getEstrella() {
    try {
      const resultado = await fetch(this.urlElementos);
      this.elementos = await resultado.json();
      this.filtrarElementosPorCategoria('estrella')
      console.log(this.seleccionarElementoAleatorio())
      return this.seleccionarElementoAleatorio();
    } catch (error) {
      console.log(error);
    }
    return undefined;
  }



  async getGalaxia() {
    try {
      const resultado = await fetch(this.urlElementos);
      this.elementos = await resultado.json();
      this.filtrarElementosPorCategoria('galaxia')
      console.log(this.seleccionarElementoAleatorio())
      return this.seleccionarElementoAleatorio();
    } catch (error) {
      console.log(error);
    }
    return undefined;
  }



  async getOtros() {
    try {
      const resultado = await fetch(this.urlElementos);
      this.elementos = await resultado.json();
      this.filtrarElementosPorCategoria('otros')
      console.log(this.seleccionarElementoAleatorio())
      return this.seleccionarElementoAleatorio();
    } catch (error) {
      console.log(error);
    }
    return undefined;
  }



  filtrarElementosPorCategoria(categoria: string) {
    this.elementosFiltrados = this.elementos.filter(elemento => elemento.categoria === categoria);
  }

  seleccionarElementoAleatorio(): Elemento | undefined {
    if (this.elementosFiltrados.length > 0) {
      const indiceAleatorio = Math.floor(Math.random() * this.elementosFiltrados.length);
      return this.elementosFiltrados[indiceAleatorio];
    } else {
      return undefined; 
    }
  }

}