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
 
  listaElementos: Elemento[] | undefined = [];

  ngOnInit(): void {
  this.mostrarElementos();
  }

  async mostrarElementos(){   
    this.listaElementos = await this.elementosService.getElementos()
    console.log(this.listaElementos)
  }


  resultadoBusqueda: string = '';

  handleTerminoBusqueda(termino: string) {
    this.resultadoBusqueda = termino;
    console.log(termino)
  }

 
}









