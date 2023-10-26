export interface Elemento {
    nombre: string,
    parrafoPrincipal: string,
    parrafoSecundario: string,
    imagen: string,
    categoria: string,
    datos: Datos[],
    id: number
}


export interface Datos {
    id: number;
    dato: string;
}
