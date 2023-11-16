import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './paginas/home/home.component'
import { NoEncontradoComponent } from './paginas/no-encontrado/no-encontrado.component';
import { EncontradoComponent } from './paginas/encontrado/encontrado.component';
import { ErrorComponent } from './paginas/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { MemotestComponent } from './paginas/memotest/memotest.component';
import { QuizComponent } from './paginas/quiz/quiz.component';
import { NaveComponent } from './paginas/nave/nave.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'NoEncontrado/:nombre',component:NoEncontradoComponent, canActivate: [AuthGuard]},
  {path:'Encontrado/:nombre',component:EncontradoComponent, canActivate: [AuthGuard]},
  {path:'error',component: ErrorComponent},
  {path:'Juego',component: MemotestComponent},
  {path:'Quiz',component: QuizComponent},
  {path:"Nave",component:NaveComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
