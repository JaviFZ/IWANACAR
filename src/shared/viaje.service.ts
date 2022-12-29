import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Viaje } from 'src/app/models/viaje';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {
  public url:string;
  public viaje:Viaje;
  constructor(public http:HttpClient, public usuario:UsuarioService) {
    this.viaje = new Viaje();
    this.url = "https://apiwana-production.up.railway.app/";
  }
  public crearViaje(viaje:Viaje): Observable<object>{
    console.log(viaje);
    return this.http.post(this.url + "viajes?id_usuarios="+this.usuario.usuario.id_usuario,viaje);
  }
  buscarViaje(viaje: Viaje){
    console.log(viaje);
    
    return this.http.get(`${this.url}/viajes?origen=${viaje.origen}&destino=${viaje.destino}
    &radio=${viaje.radio_busqueda}&fecha=${viaje.fecha}&pasajeros=${viaje.pasajeros}`)
  }
}
