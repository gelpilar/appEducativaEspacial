import { Component, OnInit } from '@angular/core';
import { ElementosService } from 'src/app/services/elementos.service';
import { Elemento } from 'src/interfaces/interface';

@Component({
  selector: 'app-vista-inicio',
  templateUrl: './vista-inicio.component.html',
  styleUrls: ['./vista-inicio.component.css']
})
export class VistaInicioComponent implements OnInit {
 
  constructor(private elementosService: ElementosService) {}
 
  listaElementos: Elemento | undefined ;

  ngOnInit(): void {
  }

  async mostrarElementos(termino:string){   
    this.listaElementos = await this.elementosService.getElemento(termino)
    console.log(this.listaElementos)
  }


  resultadoBusqueda: string = '';

  handleTerminoBusqueda(termino: string) {
    this.mostrarElementos(termino)
  }

 
}









