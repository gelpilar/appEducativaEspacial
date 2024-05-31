import { Injectable } from '@angular/core';
import { Elemento } from 'src/interfaces/interface';
import { ModeloElemento } from '../Modelos/ModeloElemento';

@Injectable({
  providedIn: 'root'
})

export class ElementosService {

  urlElementos: string = 'https://json-api-q4il.onrender.com/elementos';
  elementos: Elemento[] = [];
  elementosFiltrados: Elemento[] = [];
  elementosAleatorios: Elemento[] = [];

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

  async getExistenciaBuscado(buscado: string): Promise<boolean | undefined> {
    try {
      const nombreBuscado = buscado.charAt(0).toUpperCase() + buscado.slice(1);
      const url: string = this.urlElementos + "?nombre=" + nombreBuscado;
      const resultado = await fetch(url);
      const elemento = await resultado.json();

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
      const nombreBuscado = buscado.charAt(0).toUpperCase() + buscado.slice(1);
      const url: string = this.urlElementos + "?nombre=" + nombreBuscado;
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

  async getPlaneta(): Promise<Elemento | undefined> {
    try {
      const resultado = await fetch(this.urlElementos);
      this.elementos = await resultado.json();
      this.filtrarElementosPorCategoria('planeta')
      const aux = this.seleccionarElementoAleatorio();
      const rta = new ModeloElemento(String(aux?.nombre), String(aux?.parrafoPrincial), String(aux?.imagen), String(aux?.categoria))
      return rta;
    } catch (error) {
      console.log(error);
    }
    return undefined;
  }

  async getEstrella(): Promise<Elemento | undefined> {
    try {
      const resultado = await fetch(this.urlElementos);
      this.elementos = await resultado.json();
      this.filtrarElementosPorCategoria('estrella')
      const aux = this.seleccionarElementoAleatorio();
      const rta = new ModeloElemento(String(aux?.nombre), String(aux?.parrafoPrincial), String(aux?.imagen), String(aux?.categoria))
      return rta;
    } catch (error) {
      console.log(error);
    }
    return undefined;
  }

  async getGalaxia(): Promise<Elemento | undefined> {
    try {
      const resultado = await fetch(this.urlElementos);
      this.elementos = await resultado.json();
      this.filtrarElementosPorCategoria('galaxia')
      const aux = this.seleccionarElementoAleatorio();
      const rta = new ModeloElemento(String(aux?.nombre), String(aux?.parrafoPrincial), String(aux?.imagen), String(aux?.categoria))
      return rta;
    } catch (error) {
      console.log(error);
    }
    return undefined;
  }

  async getOtros(): Promise<Elemento | undefined> {
    try {
      const resultado = await fetch(this.urlElementos);
      this.elementos = await resultado.json();
      this.filtrarElementosPorCategoria('otros')
      const aux = this.seleccionarElementoAleatorio();
      const rta = new ModeloElemento(String(aux?.nombre), String(aux?.parrafoPrincial), String(aux?.imagen), String(aux?.categoria))
      return rta;
    } catch (error) {
      console.log(error);
    }
    return undefined;
  }

  filtrarElementosPorCategoria(categoria: string) {
    this.elementosFiltrados = this.elementos.filter(elemento => elemento.categoria === categoria) as Elemento[];
  }

  seleccionarElementoAleatorio(): Elemento | undefined {
    if (this.elementosFiltrados.length > 0) {
      const indiceAleatorio = Math.floor(Math.random() * this.elementosFiltrados.length);
      return this.elementosFiltrados[indiceAleatorio];
    } else {
      return undefined;
    }
  }

  async obtenerAletorios(): Promise<Elemento[] | undefined> {
    try {
      this.elementosAleatorios = [];
      const planeta = await this.getPlaneta();
      const estrella = await this.getEstrella();
      const galaxia = await this.getGalaxia();
      const otros = await this.getOtros();
      this.elementosAleatorios.push(Object(planeta), Object(estrella), Object(galaxia), Object(otros));
      return this.elementosAleatorios;
    } catch (error) {
      console.log(error);
    }
    return undefined;
  }
}
