import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TarjetaViaje } from 'src/app/models/tarjeta-viaje';
import { Viaje } from 'src/app/models/viaje';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {
  public url:string;
  public viaje:Viaje;
  public pasajeras: [];
  public viajesArray:TarjetaViaje[];
  public tarjeta_viaje:TarjetaViaje =undefined;
  public solicitarViaje:any;
  public opinarPasajeroViaje: Number = 0;
  constructor(public http:HttpClient, public usuario:UsuarioService) {
    this.viajesArray = [];
    this.viaje = new Viaje();
    this.url = "https://apiwana-nz8zei982-javifz.vercel.app/";
  }
  public crearViaje(viaje:Viaje): Observable<object>{
    console.log(viaje);
    return this.http.post(this.url + "viajes?id_usuarios="+this.usuario.usuario.id_usuario,viaje);
  }
  public buscarViaje(viaje: Viaje){
    console.log(viaje);
    
    return this.http.get(this.url + `viajes?codigoPostalOrigen=${this.viaje.codigoPostalOrigen}&codigoPostalDestino=${this.viaje.codigoPostalDestino}&fecha=${this.viaje.fecha}`)
  }

  public datosUsuarioViaje(id_viaje:number){
    console.log(id_viaje);
    
    return this.http.get(this.url + "viaje?id_viaje=" + id_viaje)
  }

  public viajesPublicados(id_usuario: number){
    return this.http.get(this.url + "viajePublicado?id_usuario=" + id_usuario)
  }

  public pasajeros(id_usuario: number){
    console.log(id_usuario);
    
    return this.http.get(this.url + "viajesPublicados?id_usuario=" + id_usuario)
    
  }

  public historicoViajes(id_usuario: number){
    return this.http.get(this.url + "misViajes?id_pasajero=" + id_usuario)
  }
  deleteViaje(id_viaje:number) {
    return this.http.delete("https://apiwana-production.up.railway.app/viajesPublicados",{body:{id_viaje: id_viaje}})

  }
  deletePasajero(id_chat:number) {
    return this.http.delete("https://apiwana-production.up.railway.app/misViajes",{body:{id_chat: id_chat}})

  }
}
