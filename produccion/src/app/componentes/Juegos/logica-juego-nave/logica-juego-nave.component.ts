import { Component, Input } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logica-juego-nave',
  templateUrl: './logica-juego-nave.component.html',
  styleUrls: ['./logica-juego-nave.component.css']
})
export class LogicaJuegoNaveComponent {

  audio = new Audio('../../assets/sonidos/sonidoPistolita.mp3');
  audioA = new Audio('../../assets/sonidos/asteroide.mp3');
  canva: HTMLCanvasElement | null = null;
  puntajeActual = 1;
  ctx: CanvasRenderingContext2D | null = null;
  backgroundImage: HTMLImageElement = new Image();
  naveImage: HTMLImageElement = new Image();
  enemigo1: HTMLImageElement = new Image();
  enemigo2: HTMLImageElement = new Image();
  enemigo3: HTMLImageElement = new Image();
  bala: HTMLImageElement = new Image();
  arregloEnemigos: Enemigos[] = [];
  cH = 0;
  cW = 0;
  yNave = 440;
  xNave = 300;
  wNave = 100;
  hNave = 100;
  direccionNave: string = "";
  misiles: Misil[] = [];
  estadoJuego = false;
  finalizacion = false;
  alerta = false;
  @Input() puntajeHistorico: number;

  constructor(private localstorageService: LocalstorageService) {
    let ruta = "../../../../assets/imagenes/"
    this.backgroundImage.src = ruta + "fondoJuego.png"
    this.naveImage.src = ruta + "/naveJuego.png"
    this.enemigo1.src = ruta + "/enemigo1.png"
    this.enemigo2.src = ruta + "/enemigo2.png"
    this.enemigo3.src = ruta + "/enemigo3.png"
    this.bala.src = ruta + "/bala.png";
    this.cW = 700;
    this.cW = 550;
    this.puntajeHistorico = Number(this.localstorageService.get('puntajeNave')) || 1;
    document.addEventListener('keydown', (event) => this.escuchadoresAlta(event.keyCode));
    document.addEventListener('keyup', (event) => this.escuchadoresBaja(event.keyCode));
  }

  ngOnInit(): void {
    const canvas = document.getElementById("my_canvas") as HTMLCanvasElement;

    if (!canvas) {
      throw new Error("Canvas element with id 'my_canvas' not found.");
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("2D context is not supported on this canvas.");
    }

    this.canva = canvas;
    this.ctx = ctx;
    this.cW = this.ctx.canvas.width;
    this.cH = this.ctx.canvas.height;
    const vistaInterval = setInterval(() => this.render(), 5);
  }

  aviso() {
    this.alerta = !this.alerta;
  }

  recorrerEnemigos() {
    if (this.ctx)
      for (var i = 0; i < this.arregloEnemigos.length; i++) {
        this.impactarLinea()
        var enemy = this.arregloEnemigos[i];
        let velo = .1
        if (enemy.velo !== 1) {
          velo = enemy.velo * 0.005
        }

        this.ctx.drawImage(enemy.image, enemy.x, enemy.y += velo, enemy.w, enemy.h)
      }
  }

  impactarLinea() {
    for (var i = 0; i < this.arregloEnemigos.length; i++) {
      var e = this.arregloEnemigos[i];

      if (e.y >= this.yNave && this.estadoJuego) {
        this.finalizarJuego()
      }
    }
  }

  iniciarJuego() {
    if (!this.estadoJuego) {
      this.agregarEnemigo();
      this.estadoJuego = true;
    }
  }

  impactoMisil(m: Misil) {
    for (var i = 0; i < this.arregloEnemigos.length; i++) {
      var e = this.arregloEnemigos[i];

      if (m.x <= e.x + e.w && m.x + m.w >= e.x && m.y <= e.y + e.h) {
        this.arregloEnemigos.splice(i, 1);
        this.audioA.play()
        this.puntajeActual += (i + 1) * 10;
        this.agregarEnemigo();
      }
    }
  }

  finalizarJuego() {
    if (this.puntajeActual > Number(this.puntajeHistorico) || Number(this.puntajeHistorico) === 0) {
      this.localstorageService.set('puntajeNave', this.puntajeActual);
      this.puntajeHistorico = Number(this.localstorageService.get('puntajeNave'));
    }

    this.finalizacion = true;
    this.mostrarTarjeta();
    this.arregloEnemigos = new Array<Enemigos>();
    this.misiles = new Array<Misil>();
    this.puntajeActual = 1;
    this.estadoJuego = false;
  }

  async mostrarTarjeta() {
    await Swal.fire({
      title: "Juego terminado",
      text: `Tu puntaje fue: ${this.puntajeActual - 1}
      Puntaje historico: ${this.puntajeHistorico - 1}`,
      confirmButtonColor: "#11468F",
    });
    this.finalizacion = false
  }

  agregarEnemigo() {
    var numAleatorio = Math.floor(Math.random() * 617) + 15;

    if (numAleatorio < 150) {
      this.arregloEnemigos.push(new Enemigos("2", numAleatorio, 50, 50, 50, (this.puntajeActual), this.enemigo1))
    } else if (numAleatorio >= 150 && numAleatorio <= 340) {
      this.arregloEnemigos.push(new Enemigos("1", numAleatorio, 50, 50, 50, (this.puntajeActual), this.enemigo2))
    } else {
      this.arregloEnemigos.push(new Enemigos("3", numAleatorio, 50, 50, 50, (this.puntajeActual), this.enemigo3))
    }
  }

  escuchadoresBaja(keyCode: number) {
    if (keyCode === 39 || keyCode === 68) {
      this.direccionNave = '';
    }
    if (keyCode === 37 || keyCode === 65) {
      this.direccionNave = '';
    }
  }

  escuchadoresAlta(keyCode: number) {
    if (keyCode === 39 || keyCode === 68) {
      if (this.xNave < 617) {
        this.direccionNave = "right"
      } else {
        this.direccionNave = '';
      }
    } else if (keyCode === 37 || keyCode === 65) {
      if (this.xNave > this.cW / 90) {
        this.direccionNave = "left"
      } else {
        this.direccionNave = '';
      }
    }

    if (keyCode === 32) {
      this.direccionNave = '';
      if (this.misiles.length < 10) {
        this.misiles.push(new Misil(this.xNave, this.yNave))
        this.audio.play()
      }
    }
  }

  render() {
    this.direccion();
    if (this.ctx != null) {
      this.ctx.drawImage(this.backgroundImage, 0, 0);
      this.ctx.strokeStyle = "white";
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(0, this.yNave - 15, this.cW, 4);
      this.ctx.drawImage(this.naveImage, this.xNave, this.yNave, 80, 90)
      this.misilesDisparar();
      this.recorrerEnemigos()
    }
  }

  misilesDisparar() {
    if (this.ctx) {
      for (var i = 0; i < this.misiles.length; i++) {
        var m = this.misiles[i];
        this.ctx.drawImage(this.bala, m.x, m.y -= 5, 10, 15);
        this.impactoMisil(m);
        if (m.y <= 0) {
          this.misiles.splice(i, 1);
        }
      }
    }
  }

  direccion() {
    if (this.direccionNave === 'left' && this.xNave > this.cW / 90) {
      if (this.puntajeActual < 150) {
        this.xNave -= 2
      } else if (this.puntajeActual >= 150 && this.puntajeActual < 250) {
        this.xNave -= 3
      } else {
        this.xNave -= 3.5
      }
    } else if (this.direccionNave === 'right' && this.xNave < 617) {
      if (this.puntajeActual < 150) {
        this.xNave += 2
      } else if (this.puntajeActual >= 150 && this.puntajeActual < 250) {
        this.xNave += 3
      } else {
        this.xNave += 3.5
      }
    }
  }

}
class Enemigos {
  id: any;
  x: any;
  y: any;
  w: any;
  h: any;
  velo: any;
  image: any;

  constructor(id: any, x: any, y: any, w: any, h: any, velo: any, image: any) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.velo = velo;
    this.image = image;
  }
}

class Misil {
  x: any;
  y: any;
  w: number = 3;
  h: number = 10;

  constructor(x: number, y: number) {
    this.x = x + 40;
    this.y = y
  }
}