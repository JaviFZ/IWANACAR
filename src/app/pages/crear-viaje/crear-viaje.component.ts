import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { Viaje } from 'src/app/models/viaje';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.css']
})
export class CrearViajeComponent {
  paginaActual: number;
  viaje:Viaje;
    constructor(public viajes:ViajeService){
      this.paginaActual = 1;
    }
  
}
