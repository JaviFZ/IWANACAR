import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.css']
})
export class CrearViajeComponent {
  paginaActual: number;
    constructor(public viajes:ViajeService){
      this.paginaActual = 1;
    }
    public paginaSig(){
      this.paginaActual = this.paginaActual + 1;
    }
    public paginaAnt(){
      this.paginaActual = this.paginaActual - 1;
      if(this.paginaActual == 0){
        this.paginaActual = 1;
      }
    }
    public guardarDatos(origen:string,destino:string){
      if (this.paginaActual == 1 || this.paginaActual == 0){
        this.viajes.viaje.origen = origen;
        this.viajes.viaje.destino = destino;
      }
    }
    public guardarDato(habitual:boolean,fecha_dia:Date,hora:string){
      if (this.paginaActual == 1 || this.paginaActual == 0){
        this.viajes.viaje.habitual = habitual;
        this.viajes.viaje.fecha = fecha_dia;
        this.viajes.viaje.hora = hora
      }
    }
    public guardarDat(coche:number,plazas:number,precio:number){
      if (this.paginaActual == 1 || this.paginaActual == 0){
        this.viajes.viaje.id_coche = coche;
        this.viajes.viaje.pasajeros = plazas;
        this.viajes.viaje.precio = precio
      }
    }

}
