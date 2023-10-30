import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

  terminoBusqueda: string = '';
  @Output() buscarTermino = new EventEmitter<string>();

  realizarBusqueda() {
    if (this.terminoBusqueda.trim() !== '') {
      this.buscarTermino.emit(this.terminoBusqueda);
    }
  }
}


