import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicar-viaje',
  templateUrl: './publicar-viaje.component.html',
  styleUrls: ['./publicar-viaje.component.css']
})
export class PublicarViajeComponent {
  public tarjetaResumen: any;
  
    constructor(){
      this.tarjetaResumen = {
        fecha: "14/12/2022",
        hora: "7:15",
        calle1: "Calle Hermanos Rodriguez nº34",
        calle2: "Calle Paz nº12",
        coche: "coche1",
        precio: "5€",
        pasajeros: 3,

      }

    }

}
