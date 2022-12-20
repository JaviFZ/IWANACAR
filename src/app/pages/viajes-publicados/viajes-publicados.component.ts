import { Component } from '@angular/core';

@Component({
  selector: 'app-viajes-publicados',
  templateUrl: './viajes-publicados.component.html',
  styleUrls: ['./viajes-publicados.component.css']
})
export class ViajesPublicadosComponent {
  public tarjeta_viaje:any;
  constructor(){
    this.tarjeta_viaje = {
      foto:"assets/img/iguana.png",
      nombre:"user",
      origen:"calle alcala n9",
      destino:"Universidad Ponticifica de Comillas",
      fecha:"12/12/2022",
      hora:"07:30",
      precio:15,
      pasajeros:2,
      valoracion:3
    }
  }
}
