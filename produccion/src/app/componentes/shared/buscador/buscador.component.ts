import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementosService } from 'src/app/services/elementos.service';
import { Elemento } from 'src/interfaces/interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  nombre: string | undefined;
  terminoBusqueda: string = '';
  listaFiltrada: Elemento[] = [];
  listaElementos: Elemento[] | undefined = [];

  myForm: FormGroup = this.fb.group({
    entrada: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]]
  });
  

  constructor(
    private route: ActivatedRoute,
    private elementoService: ElementosService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.mostrarElemento();
    this.cargarElementos();
  }

  @Output() buscarTermino = new EventEmitter<string>();

  realizarBusqueda() {
    if (this.myForm.invalid) return
    this.buscarTermino.emit(this.terminoBusqueda);
  }

  mostrarElemento() {
    this.route.params.subscribe((param) => {
      this.nombre = param['nombre'];
      this.terminoBusqueda = this.nombre || '';
      this.filtrarNombre(this.terminoBusqueda);
    });
  }

  filtrarNombre(text: string) {
    if (text.trim() !== '') {
      this.listaFiltrada = this.listaElementos?.filter((elemento) =>
        elemento.nombre.toLowerCase().includes(text.toLowerCase())
      ) || [];
    } else {
      this.listaFiltrada = [];
    }

  }

  async cargarElementos() {
    try {
      this.listaElementos = await this.elementoService.getElementos();
    } catch (error) {
      console.error('Error al cargar elementos:', error);
    }
  }

  seleccionarElemento(nombreRecibido: string) {
    this.terminoBusqueda = nombreRecibido;
  }
} 