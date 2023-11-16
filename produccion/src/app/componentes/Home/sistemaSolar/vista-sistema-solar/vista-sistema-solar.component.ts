import { Component } from '@angular/core';
import { SistemaSolarService } from 'src/app/services/sistema-solar.service';
import { SistemaSolar } from 'src/interfaces/interface';

@Component({
  selector: 'app-vista-sistema-solar',
  templateUrl: './vista-sistema-solar.component.html',
  styleUrls: ['./vista-sistema-solar.component.css']
})
export class VistaSistemaSolarComponent {

  dato: SistemaSolar | undefined;
  cartelAbierto = false;

  constructor(private sistemaSolarService: SistemaSolarService) { }

  async obtenerDatoAleatorio() {
    if (this.cartelAbierto) {
      this.cartelAbierto = false;
      this.dato = undefined
    } else {
      this.dato = await this.sistemaSolarService.getSistemaSolarAleatorio();
      this.cartelAbierto = true;
    }
  }
}