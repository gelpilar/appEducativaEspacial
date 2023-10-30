import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementosService } from 'src/app/services/elementos.service';
import { Elemento } from 'src/interfaces/interface';

@Component({
  selector: 'app-vista-no-encontrado',
  templateUrl: './vista-no-encontrado.component.html',
  styleUrls: ['./vista-no-encontrado.component.css']
})
export class VistaNoEncontradoComponent implements OnInit {

  nombre: string | undefined;
  flagBusqueda: Boolean | undefined;
  sugerenciasAleatorias: Elemento[] | undefined = [];

  constructor(private elementosService: ElementosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  async ngOnInit(): Promise<void> {
    await this.mostrarElemento();
    this.sugerenciasAleatorias = await this.elementosService.obtenerAletorios();
    console.log(this.sugerenciasAleatorias);
  }
  


  async mostrarElemento() {
    this.route.params.subscribe(async param => {
      this.nombre = param['nombre'];
      console.log(this.nombre);
    })
  }


  async handleTerminoBusqueda(termino: string) {
    this.flagBusqueda = await this.elementosService.getExistenciaBuscado(termino)

    if (this.flagBusqueda) {
      this.router.navigate(['/Encontrado', termino]);

    } else {
      this.router.navigate(['/NoEncontrado', termino]);
    }

  }


  

}


