import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementosService } from 'src/app/services/elementos.service';
import { Elemento } from 'src/interfaces/interface';

@Component({
  selector: 'app-tarjeta-de-elemento',
  templateUrl: './tarjeta-de-elemento.component.html',
  styleUrls: ['./tarjeta-de-elemento.component.css']
})
export class TarjetaDeElementoComponent implements OnInit {
  nombre: string | undefined;
  sugerenciasAleatorias: Elemento[] | undefined = [];

  constructor(
    private elementosService: ElementosService
  ) { }

  async ngOnInit(): Promise<void> {
    this.sugerenciasAleatorias = undefined;
    await this.elementosAleatorios();
  }

  async elementosAleatorios() {
    this.sugerenciasAleatorias = await this.elementosService.obtenerAletorios();
  }
}