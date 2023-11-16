import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-elemeto-imagen',
  templateUrl: './tarjeta-elemeto-imagen.component.html',
  styleUrls: ['./tarjeta-elemeto-imagen.component.css']
})
export class TarjetaElemetoImagenComponent {

  @Input() nombre: string | undefined = '';
  @Input() parrafo: string | undefined = '';
  @Input() url: string | undefined = "";
  @Input() categoria: string | undefined = "";

  constructor(private router: Router) { }

  verMas() {
    this.router.navigate(['/Encontrado', this.nombre])
  }
}
