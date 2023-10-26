import { Component, OnInit } from '@angular/core';
import { ElementosService } from 'src/app/services/elementos.service';
import { Elemento } from 'src/interfaces/interface';

@Component({
  selector: 'app-vista-inicio',
  templateUrl: './vista-inicio.component.html',
  styleUrls: ['./vista-inicio.component.css']
})
export class VistaInicioComponent implements OnInit {
  elemento: Elemento | undefined;

  constructor(private elementosService: ElementosService) {}

  ngOnInit() {
    // Aquí no necesitas realizar la búsqueda en este momento.
    // La búsqueda se activará cuando se emita el término desde el componente hijo.
  }

  onBuscarTermino(termino: string) {
    // Captura el término de búsqueda y realiza la búsqueda en el servicio
    this.elementosService.getElemento(termino).then((elemento) => {
      this.elemento = elemento;
    });
  }
}









