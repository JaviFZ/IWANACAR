import { Component } from '@angular/core';
import { Coche } from 'src/app/models/coche';

@Component({
  selector: 'app-mis-coches',
  templateUrl: './mis-coches.component.html',
  styleUrls: ['./mis-coches.component.css']
})
export class MisCochesComponent {
  public coche: Coche[];
  constructor() {
    this.coche = [{
      nombre: 'Mi lovely car',
      marca: 'Seat',
      modelo: 'Ibiza',
      color: 'Azul',
      matricula: '8536CWC',
      combustible: 'Gasolina',
      fumar: false,
      mascotas: true,
      desvios: true,
      tiempoMax: '20min',
    },{
      nombre: 'Mi lovely car',
      marca: 'Seat',
      modelo: 'Ibiza',
      color: 'Azul',
      matricula: '8536CWC',
      combustible: 'Diesel',
      fumar: false,
      mascotas: true,
      desvios: true,
      tiempoMax: '20min',
    }];
  }
  deleteCar(i:number){
    this.coche.splice(i,1);
  }
}
