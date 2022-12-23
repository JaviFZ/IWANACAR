import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-publicar-viaje',
  templateUrl: './publicar-viaje.component.html',
  styleUrls: ['./publicar-viaje.component.css']
})
export class PublicarViajeComponent {
  public tarjetaResumen: any;
  
    constructor(public viaje:ViajeService){
      this.tarjetaResumen = {
        fecha: viaje.viaje.fecha,
        hora: viaje.viaje.hora,
        calle1: viaje.viaje.origen,
        calle2: viaje.viaje.destino,
        coche: viaje.viaje.id_coche,
        precio: viaje.viaje.precio,
        pasajeros: viaje.viaje.pasajeros,
      }

    }

}
