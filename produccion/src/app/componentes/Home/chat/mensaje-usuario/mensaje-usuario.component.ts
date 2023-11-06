import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mensaje-usuario',
  templateUrl: './mensaje-usuario.component.html',
  styleUrls: ['./mensaje-usuario.component.css']
})
export class MensajeUsuarioComponent implements OnInit {

  pregunta: string = '';
  nombre: string | undefined;

  ngOnInit(): void {
    this.mostrarPregunta();
  }

  constructor( private route: ActivatedRoute){}


  @Output() buscarTermino = new EventEmitter<string>();

  enviar() {
    if (this.pregunta.trim() !== '') {
      this.buscarTermino.emit(this.pregunta);
    }
  }

  mostrarPregunta() {
    this.route.params.subscribe((param) => {
      this.nombre = param['nombre'];
      this.pregunta = this.nombre || '';
    });
  }



}
