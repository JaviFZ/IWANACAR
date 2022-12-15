import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-coches',
  templateUrl: './mis-coches.component.html',
  styleUrls: ['./mis-coches.component.css']
})
export class MisCochesComponent {
  public coche: any;
  constructor() {
    this.coche = {
      nombre: 'Mi lovely car',
      marca: 'Seat',
      modelo: 'Ibiza',
      color: 'Azul',
      matricula: '8536CWC',
      combustible: 'Gasolina',
      radio: true,
      aire: true,
      fumar: false,
      mascotas: true,
      desvios: true,
      tiempo: '20min',


    };
  }

}
