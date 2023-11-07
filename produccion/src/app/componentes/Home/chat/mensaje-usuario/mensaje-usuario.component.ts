import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje-usuario',
  templateUrl: './mensaje-usuario.component.html',
  styleUrls: ['./mensaje-usuario.component.css']
})
export class MensajeUsuarioComponent {
  @Input() mensaje:string="...";

}