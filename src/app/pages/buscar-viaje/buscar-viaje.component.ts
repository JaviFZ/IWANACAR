import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> pablo-funcionalidades
import { Viaje } from 'src/app/models/viaje';

@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.component.html',
  styleUrls: ['./buscar-viaje.component.css']
})
export class BuscarViajeComponent {
  public viaje:Viaje;
<<<<<<< HEAD
  constructor(){
=======
  constructor(public router:Router){
>>>>>>> pablo-funcionalidades
    this.viaje = new Viaje();
  }
  buscarViaje(origen:string,destino:string,radioBusqueda:number,fecha:Date,pasajeros:number){
    this.viaje.origen = origen;
    this.viaje.destino = destino;
    this.viaje.radio_busqueda = radioBusqueda;
    this.viaje.fecha = fecha;
    this.viaje.pasajeros = pasajeros;
    console.log(this.viaje)
<<<<<<< HEAD
=======
    this.router.navigateByUrl('/resultadosBusqueda');
>>>>>>> pablo-funcionalidades
  }
}

