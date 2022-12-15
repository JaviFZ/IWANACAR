import { Component } from '@angular/core';
import { Coche } from 'src/app/models/coche';
import { Router } from '@angular/router';
@Component({
  selector: 'app-solicitar-viaje',
  templateUrl: './solicitar-viaje.component.html',
  styleUrls: ['./solicitar-viaje.component.css']
})
export class SolicitarViajeComponent {
  public coche:any;
  public preferencias:any;
  constructor(public router:Router){
    this.coche = {
      marca:"SEAT",
      color: "Azul",
      matricula: "2356LGB",
      modelo: "Ibiza",
      combustible: "Diesel"
    };
    this.preferencias = {
      mascotas:true,
      paradas:false,
      fumar:true,
      tiempoMax:true
    }
  }
  solicitarViaje(){
    this.router.navigateByUrl('/ChatsAbiertos');
  }
}
