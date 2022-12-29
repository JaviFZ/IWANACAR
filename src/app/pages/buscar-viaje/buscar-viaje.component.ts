import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from 'src/app/models/viaje';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.component.html',
  styleUrls: ['./buscar-viaje.component.css']
})
export class BuscarViajeComponent {
  public viaje:Viaje;
  constructor(public router:Router,public viajes:ViajeService){
    this.viaje = new Viaje();
  }
  buscarViaje(origen:string,destino:string,radioBusqueda:number,fecha:Date,pasajeros:number){
    this.viaje.origen = origen;
    this.viaje.destino = destino;
    this.viaje.radio_busqueda = radioBusqueda;
    this.viaje.fecha = fecha;
    this.viaje.pasajeros = pasajeros;
    console.log(this.viaje)
    this.router.navigateByUrl('/resultadosBusqueda');
    this.viajes.buscarViaje(this.viaje)
  }
}

