import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-estadisticas-juego',
  templateUrl: './estadisticas-juego.component.html',
  styleUrls: ['./estadisticas-juego.component.css']
})
export class EstadisticasJuegoComponent {

  @Input() aciertos: number = 0;
  @Input() movimientos: number = 0;
  @Input() miValor: number = 0;

  constructor() { }
}