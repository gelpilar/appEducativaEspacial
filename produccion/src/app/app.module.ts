import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaInicioComponent } from './componentes/Home/Inicio/vista-inicio/vista-inicio.component';
import { VistaSobreElProyectoComponent } from './componentes/Home/sobreElProyecto/vista-sobre-el-proyecto/vista-sobre-el-proyecto.component';
import { VistaSistemaSolarComponent } from './componentes/Home/sistemaSolar/vista-sistema-solar/vista-sistema-solar.component';
import { VistaCalendarioComponent } from './componentes/Home/calendario/vista-calendario/vista-calendario.component';
import { VistaChatComponent } from './componentes/Home/chat/vista-chat/vista-chat.component';
import { VistaNoEncontradoComponent } from './componentes/NoEncontrado/vista-no-encontrado/vista-no-encontrado.component';
import { VistaEncontradoComponent } from './componentes/encontrado/vista-encontrado/vista-encontrado.component';
import { VistaFooterComponent } from './componentes/shared/vista-footer/vista-footer.component';
import { AlertaComponent } from './componentes/NoEncontrado/alerta/alerta.component';
import { BotonesAuxComponent } from './componentes/encontrado/botones-aux/botones-aux.component';
import { InformacionComponent } from './componentes/encontrado/informacion/informacion.component';
import { TarjetaDeElementoComponent } from './componentes/shared/tarjeta-de-elemento/tarjeta-de-elemento.component';
import { BuscadorComponent } from './componentes/shared/buscador/buscador.component';
import { VolverComponent } from './componentes/shared/volver/volver.component';
import { HomeComponent } from './paginas/home/home.component';
import { NoEncontradoComponent } from './paginas/no-encontrado/no-encontrado.component';
import { EncontradoComponent } from './paginas/encontrado/encontrado.component';
import { ErrorComponent } from './paginas/error/error.component';
import { BotonLogoComponent } from './componentes/shared/boton-logo/boton-logo.component';
import { NavBarComponent } from './componentes/Home/Inicio/nav-bar/nav-bar.component';
import { BotonesNavComponent } from './componentes/Home/Inicio/botones-nav/botones-nav.component';
import { BotonCircularComponent } from './componentes/shared/boton-circular/boton-circular.component';
import { FormsModule } from '@angular/forms';
import { VistaContactoComponent } from './componentes/Home/contacto/vista-contacto/vista-contacto.component';
import { OrbitaComponent } from './componentes/Home/sistemaSolar/orbita/orbita.component';
import { TarjetaPlanetaComponent } from './componentes/Home/sistemaSolar/tarjeta-planeta/tarjeta-planeta.component';
import { TarjetaElemetoImagenComponent } from './componentes/NoEncontrado/tarjeta-elemeto-imagen/tarjeta-elemeto-imagen.component';
import { MemotestComponent } from './paginas/memotest/memotest.component';
import { LogicaJuegoComponent } from './componentes/Juegos/logica-juego/logica-juego.component';
import { ChatCuerpoComponent } from './componentes/Home/chat/chat-cuerpo/chat-cuerpo.component';
import { MensajeComponent } from './componentes/Home/chat/mensaje/mensaje.component';
import { MensajeChatComponent } from './componentes/Home/chat/mensaje-chat/mensaje-chat.component';
import { MensajeUsuarioComponent } from './componentes/Home/chat/mensaje-usuario/mensaje-usuario.component';
import { QuizComponent } from './paginas/quiz/quiz.component';
import { LogicaJuegoQuizComponent } from './componentes/Juegos/logica-juego-quiz/logica-juego-quiz.component';
import { EstadisticasJuegoComponent } from './componentes/Juegos/estadisticas-juego/estadisticas-juego.component';
import { LocalstorageService } from './services/localstorage.service';
import { NaveComponent } from './paginas/nave/nave.component';
import { LogicaJuegoNaveComponent } from './componentes/Juegos/logica-juego-nave/logica-juego-nave.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';



@NgModule({
  declarations: [
    AppComponent,
    VistaInicioComponent,
    VistaSobreElProyectoComponent,
    VistaSistemaSolarComponent,
    VistaCalendarioComponent,
    VistaChatComponent,
    VistaNoEncontradoComponent,
    VistaEncontradoComponent,
    VistaFooterComponent,
    AlertaComponent,
    BotonesAuxComponent,
    InformacionComponent,
    TarjetaDeElementoComponent,
    BuscadorComponent,
    VolverComponent,
    HomeComponent,
    NoEncontradoComponent,
    EncontradoComponent,
    ErrorComponent,
    BotonLogoComponent,
    NavBarComponent,
    BotonesNavComponent,
    BotonCircularComponent,
    VistaContactoComponent,
    OrbitaComponent,
    TarjetaPlanetaComponent,
    TarjetaElemetoImagenComponent, 
    MemotestComponent, 
    LogicaJuegoComponent, 
    ChatCuerpoComponent, 
    MensajeComponent, 
    MensajeChatComponent, 
    MensajeUsuarioComponent, 
    QuizComponent, 
    LogicaJuegoQuizComponent, 
    EstadisticasJuegoComponent, NaveComponent, LogicaJuegoNaveComponent, AudioPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule {

  title = 'localStore';

  constructor(){
  }

 }
