import { Component } from '@angular/core';
import { BuscarViajeComponent } from 'src/app/pages/buscar-viaje/buscar-viaje.component';

@Component({
  selector: 'app-tarjeta-viaje',
  templateUrl: './tarjeta-viaje.component.html',
  styleUrls: ['./tarjeta-viaje.component.css']
})
export class TarjetaViajeComponent {
<<<<<<< HEAD
  
  constructor(){}
=======
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
>>>>>>> pablo-funcionalidades
}
