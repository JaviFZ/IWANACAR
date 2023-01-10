import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from 'src/app/models/viaje';
import { MapaService } from 'src/shared/mapa.service';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-publicar-viaje',
  templateUrl: './publicar-viaje.component.html',
  styleUrls: ['./publicar-viaje.component.css']
})
export class PublicarViajeComponent implements OnInit{
  public tarjetaResumen: any;
  public viaje:Viaje;
    constructor(public viajeService:ViajeService,public mapa:MapaService){
      this.viaje = viajeService.viaje;
      this.tarjetaResumen = {
        fecha: viajeService.viaje.fecha,
        diasSemana: viajeService.viaje.dia,
        hora: viajeService.viaje.hora,
        calle1: viajeService.viaje.origen,
        calle2: viajeService.viaje.destino,
        coche: viajeService.viaje.id_coche,
        precio: viajeService.viaje.precio,
        pasajeros: viajeService.viaje.pasajeros,
        habitual: viajeService.viaje.habitual
      }
    }
    crearViaje(){
      let viaje = this.viajeService.viaje;
      console.log(this.viajeService.viaje);
      this.viajeService.crearViaje(viaje).subscribe((data:Viaje) =>{
        this.viaje = data;
        console.log(data)
      })
    }
  public ngOnInit(){
    setTimeout(()=>{
      this.mapa.iniciarMap(document.getElementById('mapa'));
    },50)
  }
}
