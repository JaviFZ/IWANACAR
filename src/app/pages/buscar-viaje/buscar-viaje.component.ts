import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from 'src/app/models/viaje';
import { MapaService } from 'src/shared/mapa.service';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.component.html',
  styleUrls: ['./buscar-viaje.component.css']
})
export class BuscarViajeComponent {
  public viaje:Viaje;
  
  constructor(public router:Router,public viajes:ViajeService, public mapaService: MapaService){
    this.viaje = new Viaje();
  }
  buscarViaje(origen:string,destino:string,fecha:string,pasajeros:number){
    this.viaje.origen = origen;
    this.viaje.destino = destino;
    this.viaje.codigoPostalOrigen = this.mapaService.codPostalOr;
    this.viaje.codigoPostalDestino = this.mapaService.codPostalDes;
    this.viaje.fecha = fecha;
    this.viaje.pasajeros = pasajeros;
    console.log(this.viaje)
    this.router.navigateByUrl('/resultadosBusqueda');
    this.viajes.buscarViaje(this.viaje)

  }

  public autocompletarOrigen(){
    this.mapaService.autocompletar(document.getElementById('inputOrigen') as HTMLInputElement);
  }
  public autocompletarDestino(){
    this.mapaService.autocompletar1(document.getElementById('inputDestino') as HTMLInputElement);
  }

  

}

