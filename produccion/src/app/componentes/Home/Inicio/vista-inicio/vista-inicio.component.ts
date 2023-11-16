import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ElementosService } from 'src/app/services/elementos.service';


@Component({
  selector: 'app-vista-inicio',
  templateUrl: './vista-inicio.component.html',
  styleUrls: ['./vista-inicio.component.css']
})
export class VistaInicioComponent implements OnInit {
 
  constructor(private elementosService: ElementosService,
              private router: Router,
              private authService: AuthService
             ) {}
 
  flagBusqueda: Boolean | undefined;

  ngOnInit(): void {
    this.authService.setAuthenticated(true);
  }

  async  handleTerminoBusqueda(termino:string){   
    console.log(termino)
    this.flagBusqueda = await this.elementosService.getExistenciaBuscado(termino)

    if(this.flagBusqueda)
    {
      this.router.navigate(['/Encontrado', termino]);
      
    }else
    {
      this.router.navigate(['/NoEncontrado', termino]);
    }
    
  }
 
}


