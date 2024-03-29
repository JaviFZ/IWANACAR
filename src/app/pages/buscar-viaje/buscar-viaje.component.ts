import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from 'src/app/models/viaje';
import { MapaService } from 'src/shared/mapa.service';
import { ViajeService } from 'src/shared/viaje.service';
import { TarjetaViaje } from 'src/app/models/tarjeta-viaje';
import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.component.html',
  styleUrls: ['./buscar-viaje.component.css']
})
export class BuscarViajeComponent {
  public viaje:Viaje;
  public button:number;
  constructor(public router:Router,public viajes:ViajeService, public mapaService: MapaService, public toast:HotToastService){
    this.viaje = new Viaje();
    this.button = 0;
  }
  buscarViaje(origen:string,destino:string,fecha:string,pasajeros:number){
    if(this.button == 0){
      if(this.mapaService.codPostalOr == undefined || this.mapaService.codPostalDes == undefined){
        this.toast.warning('Introduce el número de la calle en la dirección correspondiente, por favor')}else{
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
    }
  }
  public autocompletarOrigen(){
    this.mapaService.autocompletar(document.getElementById('inputOrigen') as HTMLInputElement);
  }
  public autocompletarDestino(){
    this.mapaService.autocompletar1(document.getElementById('inputDestino') as HTMLInputElement);
  }
}