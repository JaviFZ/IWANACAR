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
    this.url = "http://localhost:3000";
  }
  crearViaje(){
    return this.http.post(this.url + "/viajes",this.viaje);
  }
}
