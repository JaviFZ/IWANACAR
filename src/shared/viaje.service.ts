import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from 'src/app/models/viaje';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {
  public url:string;
  public viaje:Viaje;
  constructor(public http:HttpClient) {
    this.viaje = new Viaje();
    this.url = "http://containers-us-west-123.railway.app";
  }
  crearViaje(){
    return this.http.post(this.url + "/viajes",this.viaje);
  }
  buscarViaje(viaje: Viaje){
    console.log(viaje);
    
    return this.http.get(`${this.url}/viajes?origen=${viaje.origen}&destino=${viaje.destino}
    &radio=${viaje.radio_busqueda}&fecha=${viaje.fecha}&pasajeros=${viaje.pasajeros}`)
  }
}
