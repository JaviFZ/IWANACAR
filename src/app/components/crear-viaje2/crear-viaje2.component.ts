import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Viaje } from 'src/app/models/viaje';
import { BuscarViajeComponent } from 'src/app/pages/buscar-viaje/buscar-viaje.component';
import { CrearViajeComponent } from 'src/app/pages/crear-viaje/crear-viaje.component';
import { ViajeService } from 'src/shared/viaje.service';
@Component({
  selector: 'app-crear-viaje2',
  templateUrl: './crear-viaje2.component.html',
  styleUrls: ['./crear-viaje2.component.css']
})
export class CrearViaje2Component {
  public opcion : string;
  public viaje:Viaje;
  public paginaActual:number;
  
    constructor(public viajes:ViajeService,public componente:CrearViajeComponent){
      this.opcion = "no";
      this.paginaActual = 2;
     
    }
    public paginaSig(){
      this.paginaActual = this.paginaActual + 1;
      this.componente.paginaActual = this.paginaActual
    }
    public paginaAnt(){
      this.paginaActual = this.paginaActual - 1;
      this.componente.paginaActual = this.paginaActual;
      if(this.paginaActual == 0){
        this.paginaActual = 1;
      }
    }
    public guardarDato(habitual:string,diasSemana?:string,fecha?:string,hora?:string){
        this.viajes.viaje.habitual = habitual;
        this.viajes.viaje.hora = hora;
        // this.viajes.viaje.dia= diasSemana;
        this.viajes.viaje.fecha = fecha;
    }
  //   public guardarDatos(habitual:string,fecha:Date,hora:string){
  //     this.viajes.viaje.habitual = habitual;
  //     this.viajes.viaje.fecha = fecha;
  //     console.log(fecha)
  //     this.viajes.viaje.hora = hora;
  // }
}
