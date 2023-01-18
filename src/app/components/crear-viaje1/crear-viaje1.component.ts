import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Viaje } from 'src/app/models/viaje';
import { CrearViajeComponent } from 'src/app/pages/crear-viaje/crear-viaje.component';
import { MapaService } from 'src/shared/mapa.service';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-crear-viaje1',
  templateUrl: './crear-viaje1.component.html',
  styleUrls: ['./crear-viaje1.component.css']
})
export class CrearViaje1Component {
  public viaje:Viaje;
  public paginaActual: number;
  constructor(public viajes:ViajeService,public componente:CrearViajeComponent,public mapaService:MapaService, public toast:HotToastService, public router:Router){  
    this.paginaActual = 1;
  }
  public paginaSig(){
    if(this.mapaService.codPostalOr == undefined || this.mapaService.codPostalDes == undefined){
      this.paginaActual = 1;
    }else{
    this.paginaActual = this.paginaActual + 1;
    this.componente.paginaActual = this.paginaActual
    }
  }
  public paginaAnt(){
    this.paginaActual = this.paginaActual - 1;
    this.componente.paginaActual = this.paginaActual
    if(this.paginaActual == 0){
      this.paginaActual = 1;
    }
  }
  public guardarDatos(origen:string,destino:string){
    if(this.mapaService.codPostalOr == undefined || this.mapaService.codPostalDes == undefined){
      this.toast.warning('Introduce el número de la calle en la dirección correspondiente, por favor');
    }else{
      this.viajes.viaje.origen = origen;
      this.viajes.viaje.destino = destino;
      this.viajes.viaje.codigoPostalOrigen = this.mapaService.codPostalOr;
      this.viajes.viaje.codigoPostalDestino= this.mapaService.codPostalDes;
      this.router.navigateByUrl('/crearViaje');
    }
  }
  public autocompletar(){
    this.mapaService.autocompletar(document.getElementById('origen') as HTMLInputElement);

  }
  public autocompletar1(){
    this.mapaService.autocompletar1(document.getElementById('destino') as HTMLInputElement);
  }
}
