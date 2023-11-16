import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { ElementosService } from 'src/app/services/elementos.service';
import { Datos, Elemento } from 'src/interfaces/interface';

@Component({
  selector: 'app-vista-encontrado',
  templateUrl: './vista-encontrado.component.html',
  styleUrls: ['./vista-encontrado.component.css']
})
export class VistaEncontradoComponent implements OnInit {

  elemento: Elemento | undefined;
  datosAleatorios: Datos[] = [];

  constructor(private elementosService: ElementosService,
    private route: ActivatedRoute,
    private router: Router,
    private authGuard: AuthGuard
  ) { }

  ngOnInit(): void {
    if (!this.authGuard.canActivate()) {
      this.router.navigate(['/Home']);
    }
    this.mostrarElemento()
  }

  volver() {
    this.router.navigate(['/']);
  }

  async mostrarElemento() {
    this.route.params.subscribe(async param => {
      const nombre = param['nombre'];
      this.elemento = await this.elementosService.getElemento(nombre);
      console.log(this.elemento);
      /* Datos aleatorios */
      if (this.elemento) {
        const datosOriginales = this.elemento.datos;
        const datosElegidos = [];
        while (datosElegidos.length < 3 && datosOriginales.length > 0) {
          const index = Math.floor(Math.random() * datosOriginales.length);
          datosElegidos.push(datosOriginales.splice(index, 1)[0]);
        }
        this.datosAleatorios = datosElegidos;
      }
    });
  }
}