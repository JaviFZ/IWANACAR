import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Viaje } from 'src/app/models/viaje';
import { CrearViajeComponent } from 'src/app/pages/crear-viaje/crear-viaje.component';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-crear-viaje1',
  templateUrl: './crear-viaje1.component.html',
  styleUrls: ['./crear-viaje1.component.css']
})
export class CrearViaje1Component {
  public viaje:Viaje;
  public paginaActual: number;
  constructor(public viajes:ViajeService,public componente:CrearViajeComponent){  
    this.paginaActual = 1;
  }
  public paginaSig(){
    this.paginaActual = this.paginaActual + 1;
    this.componente.paginaActual = this.paginaActual
  }
  public paginaAnt(){
    this.paginaActual = this.paginaActual - 1;
    this.componente.paginaActual = this.paginaActual
    if(this.paginaActual == 0){
      this.paginaActual = 1;
    }
  }
  public guardarDatos(origen:string,destino:string){
      this.viajes.viaje.origen = origen;
      this.viajes.viaje.destino = destino;
  }
}
