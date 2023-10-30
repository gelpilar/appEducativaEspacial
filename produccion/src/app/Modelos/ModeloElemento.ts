import { Datos, Elemento } from "src/interfaces/interface";

export class ModeloElemento implements Elemento
{
    nombre: string;
    parrafoPrincial: string;
    parrafoSecundario: string;
    imagen: string;
    categoria: string;
    datos: Datos[];
    id: number;

    constructor(nombre:string,parrafo:string,imagen:string,categoria:string)
    {
        this.nombre=nombre;
        this.parrafoPrincial= parrafo;
        this.parrafoSecundario="";
        this.imagen=imagen;
        this.categoria=categoria;
        this.datos=[];
        this.id=0;
    }

}