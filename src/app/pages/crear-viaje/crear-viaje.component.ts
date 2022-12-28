import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.css']
})
export class CrearViajeComponent {
  paginaActual: number;
    constructor(public viajes:ViajeService){
      this.paginaActual = 1;
    }
}
