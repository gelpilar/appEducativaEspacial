import { Component, Renderer2, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logica-juego',
  templateUrl: './logica-juego.component.html',
  styleUrls: ['./logica-juego.component.css']
})
export class LogicaJuegoComponent {

  tarjetasDestapadas: number = 0;
  tarjeta1: HTMLElement | undefined;
  tarjeta2: HTMLElement | undefined;
  primerResultado: number | null = null;
  segundoResultado: number | null = null;
  miValor: number | void;
  movimientos: number = 0;
  aciertos: number = 0;
  @Input() valorAciertos: number = 0;
  @Input() valorMovimientos: number = 0;




  numeros: number[] = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

  constructor(private renderer: Renderer2,
    private el: ElementRef,
    private quizService: QuizService,
    private router: Router,
    private localstorageService: LocalstorageService) {

    this.numeros.sort(() => Math.random() - 0.5);
    this.miValor = Number(this.localstorageService.get('movimientosMemotest')) || 0;
  }

  async destapar(id: number): Promise<void> {

    this.tarjetasDestapadas++;

    if (this.tarjetasDestapadas === 1) {
      const element = document.getElementById(id.toString());
      console.log("------------------------------------");
      console.log(element);
      if (element) {
        this.tarjeta1 = element;
        this.primerResultado = this.numeros[id];
        this.renderer.setProperty(element, 'innerHTML', `<img src="../assets/imagenesJuego/${this.primerResultado.toString()}.png">`);
        this.renderer.setProperty(element, 'disabled', true);

      }
    } else if (this.tarjetasDestapadas === 2) {
      const element = document.getElementById(id.toString());
      if (element) {
        this.tarjeta2 = element;
        this.segundoResultado = this.numeros[id];
        this.renderer.setProperty(element, 'innerHTML', `<img src="../assets/imagenesJuego/${this.segundoResultado.toString()}.png">`);
        this.renderer.setProperty(element, 'disabled', true);

      }
      this.movimientos++;

      if (this.primerResultado === this.segundoResultado) {
        this.tarjetasDestapadas = 0;
        this.aciertos++;
        this.renderer.setStyle(this.tarjeta1, "background-color", "#53A75D");
        this.renderer.setStyle(this.tarjeta2, "background-color", "#53A75D");
        if (this.aciertos === 8) {

          if (this.movimientos < Number(this.miValor) || Number(this.miValor) === 0) {
            this.localstorageService.set('movimientosMemotest', this.movimientos);
          }

          await Swal.fire({
            title: "Juego terminado",
            text: `Los movimientos realizados fueron: ` + this.movimientos,
            showDenyButton: true,
            confirmButtonText: "Inicio",
            denyButtonText: "Volver a jugar",
            confirmButtonColor: "#09244B",
            denyButtonColor: "#11468F"
          }).then((result: any) => {
            if (result.isConfirmed) {
              this.router.navigate(['/Home']);
            } else if (result.isDenied) {
              window.location.reload();
            }
          });

        }


      }
      else {
        setTimeout(() => {
          if (this.tarjeta1 && this.tarjeta2) {

            this.renderer.setStyle(this.tarjeta1, "background-color", "#D65C5C");
            this.renderer.setStyle(this.tarjeta2, "background-color", "#D65C5C");
          }
        }, 1);
        setTimeout(() => {
          if (this.tarjeta1 && this.tarjeta2) {

            this.renderer.setProperty(this.tarjeta1, 'innerHTML', '');
            this.renderer.removeStyle(this.tarjeta1, 'background-color');
            this.renderer.setProperty(this.tarjeta2, 'innerHTML', '');
            this.renderer.removeStyle(this.tarjeta2, 'background-color');
            this.renderer.setProperty(this.tarjeta1, 'disabled', false);
            this.renderer.setProperty(this.tarjeta2, 'disabled', false);
            this.tarjetasDestapadas = 0;
          }
        }, 1000);
      }
    }
  }


  bloquearTarjetas() {
    for (let index = 0; index <= 15; index++) {
      const element = document.getElementById(index.toString());
      if (element) {
        this.renderer.setProperty(element, 'innerHTML', this.numeros[index]);
        this.renderer.setProperty(element, 'disabled', true);
      }

    }
  }


}