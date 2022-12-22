import { Component } from '@angular/core';

@Component({
  selector: 'app-escribir-opinion',
  templateUrl: './escribir-opinion.component.html',
  styleUrls: ['./escribir-opinion.component.css']
})
export class EscribirOpinionComponent {
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
