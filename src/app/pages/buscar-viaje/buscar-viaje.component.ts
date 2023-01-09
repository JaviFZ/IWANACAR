import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from 'src/app/models/viaje';
import { MapaService } from 'src/shared/mapa.service';
import { ViajeService } from 'src/shared/viaje.service';
import { TarjetaViaje } from 'src/app/models/tarjeta-viaje';

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
    this.viajes.viaje.origen = origen;
    this.viajes.viaje.destino = destino;
    this.viajes.viaje.codigoPostalOrigen = this.mapaService.codPostalOr;
    this.viajes.viaje.codigoPostalDestino = this.mapaService.codPostalDes;
    this.viajes.viaje.fecha = fecha;
    this.viajes.viaje.pasajeros = pasajeros;
    console.log(this.viaje)
    this.router.navigateByUrl('/resultadosBusqueda');
    this.viajes.buscarViaje(this.viajes.viaje).subscribe((data:TarjetaViaje[])=>{
      this.viajes.viajesArray = data;
      console.log(this.viajes.viajesArray);
    });    
  }

  public autocompletarOrigen(){
    this.mapaService.autocompletar(document.getElementById('inputOrigen') as HTMLInputElement);
  }
  public autocompletarDestino(){
    this.mapaService.autocompletar1(document.getElementById('inputDestino') as HTMLInputElement);
  }

  

}

