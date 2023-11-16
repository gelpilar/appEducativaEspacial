import { Component, OnInit } from '@angular/core';
import { ElementosService } from 'src/app/services/elementos.service';
import { Elemento } from 'src/interfaces/interface';

@Component({
  selector: 'app-orbita',
  templateUrl: './orbita.component.html',
  styleUrls: ['./orbita.component.css']
})
export class OrbitaComponent implements OnInit {

  nombre: string = '';
  mostrarElemento: boolean = false;
  elemento: Elemento | undefined;

  constructor(private elementosService: ElementosService) { }

  ngOnInit(): void {
  }

  cargarNombre(id: string) {
    if (this.nombre === id) {
      this.mostrarElemento = false;
      this.elemento = undefined;
      this.nombre = '';
    } else {
      this.nombre = id;
      this.mostrarCard();
    }
  }

  async mostrarCard() {
    this.elemento = await this.elementosService.getElemento(this.nombre);
    this.mostrarElemento = true;
  }
}
