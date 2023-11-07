import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './paginas/home/home.component'
import { NoEncontradoComponent } from './paginas/no-encontrado/no-encontrado.component';
import { EncontradoComponent } from './paginas/encontrado/encontrado.component';
import { ErrorComponent } from './paginas/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { MemotestComponent } from './paginas/memotest/memotest.component';
import { QuizComponent } from './paginas/quiz/quiz.component';


const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'NoEncontrado/:nombre',component:NoEncontradoComponent},
  {path:'Encontrado/:nombre',component:EncontradoComponent},
  {path:'error',component: ErrorComponent},
  {path:'Juego',component: MemotestComponent},
  {path:'Quiz',component: QuizComponent},
  {path:'**', component:HomeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
