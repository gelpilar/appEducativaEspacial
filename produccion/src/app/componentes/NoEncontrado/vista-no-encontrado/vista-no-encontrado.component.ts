import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementosService } from 'src/app/services/elementos.service';

@Component({
  selector: 'app-vista-no-encontrado',
  templateUrl: './vista-no-encontrado.component.html',
  styleUrls: ['./vista-no-encontrado.component.css']
})
export class VistaNoEncontradoComponent implements OnInit {

  nombre: string | undefined;
  flagBusqueda: Boolean | undefined;

  constructor(
    private elementosService: ElementosService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit(): void {
     this.mostrarElemento();
  }

  async mostrarElemento() {
    this.route.params.subscribe(async param => {
      this.nombre = param['nombre'];
    });
  }

 async handleTerminoBusqueda(termino: string) {
  console.log(termino);
    this.flagBusqueda = await this.elementosService.getExistenciaBuscado(termino);

    if (this.flagBusqueda) {
      this.router.navigate(['/Encontrado', termino]);
    } else {
      this.router.navigate(['/NoEncontrado', termino]);
    }
  }
 
}