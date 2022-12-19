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
      foto:"https://as01.epimg.net/epik/imagenes/2017/12/27/portada/1514386873_804665_1514386914_noticia_normal_recorte1.jpg",
      nombre:"Pedro",
      origen:"Alcalá",
      destino:"Universidad Ponticifica de Comillas",
      fecha:"12/12/2022",
      hora:"07:30",
      precio:15,
      pasajeros:2,
      valoracion:3
    }
  }
}
