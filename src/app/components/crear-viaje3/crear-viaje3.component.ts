import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Viaje } from 'src/app/models/viaje';
import { CrearViajeComponent } from 'src/app/pages/crear-viaje/crear-viaje.component';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-crear-viaje3',
  templateUrl: './crear-viaje3.component.html',
  styleUrls: ['./crear-viaje3.component.css']
})
export class CrearViaje3Component {
  public paginaActual:number
  public viaje:Viaje;
  
  constructor(public viajes:ViajeService,public componente:CrearViajeComponent){  
    this.paginaActual = 3;
  }

  public paginaAnt(){
    this.paginaActual = this.paginaActual - 1;
    this.componente.paginaActual = this.paginaActual
    if(this.paginaActual == 0){
      this.paginaActual = 1;
    }
  }
  public guardarDat(coche:number,plazas:number,precio:number){
      this.viajes.viaje.id_coche = coche;
      this.viajes.viaje.pasajeros = plazas;
      this.viajes.viaje.precio = precio
  }
}
