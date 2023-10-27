import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './paginas/home/home.component'
import { NoEncontradoComponent } from './paginas/no-encontrado/no-encontrado.component';
import { EncontradoComponent } from './paginas/encontrado/encontrado.component';
import { ErrorComponent } from './paginas/error/error.component';


const routes: Routes = [
  
  {path:'NoEncontrado',component:NoEncontradoComponent},
  {path:'Encontrado/:id',component:EncontradoComponent},
  {path:'error',component: ErrorComponent},
  {path:'**', component:HomeComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
