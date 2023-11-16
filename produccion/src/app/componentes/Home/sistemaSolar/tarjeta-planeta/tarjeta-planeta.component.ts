import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-planeta',
  templateUrl: './tarjeta-planeta.component.html',
  styleUrls: ['./tarjeta-planeta.component.css']
})
export class TarjetaPlanetaComponent {
  @Input() nombre: string | undefined = '';
  @Input() parrafo: string | undefined = '';

  constructor(private router: Router) { }

  verMas() {
    this.router.navigate(['/Encontrado', this.nombre])
  }
}
