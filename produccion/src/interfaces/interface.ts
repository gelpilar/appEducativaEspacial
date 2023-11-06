export interface Elemento {
    nombre: string,
    parrafoPrincial: string,
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


export interface SistemaSolar {
    dato: string,
    id: number
}

