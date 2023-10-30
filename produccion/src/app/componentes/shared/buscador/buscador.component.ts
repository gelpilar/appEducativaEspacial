import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  nombre: string | undefined;
 terminoBusqueda: string = '';


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.mostrarElemento()
  }

  

  @Output() buscarTermino = new EventEmitter<string>();

  realizarBusqueda() {
    if (this.terminoBusqueda.trim() !== '') {
      this.buscarTermino.emit(this.terminoBusqueda);
    }
  }

  async mostrarElemento() {
    this.route.params.subscribe(async param => {
      this.nombre = param['nombre'];
      this.terminoBusqueda = this.nombre || ''; 
  });
  }
  
  
}
