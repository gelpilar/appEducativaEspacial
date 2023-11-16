import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-circular',
  templateUrl: './boton-circular.component.html',
  styleUrls: ['./boton-circular.component.css']
})
export class BotonCircularComponent {

  @Input() categoria: string = "";
  url: string = "";

  ngOnInit() {
    this.url = `../../../../assets/imagenes/${this.categoria}.png`;
  }
}