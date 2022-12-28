import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-publicar-viaje',
  templateUrl: './publicar-viaje.component.html',
  styleUrls: ['./publicar-viaje.component.css']
})
export class PublicarViajeComponent {
  public tarjetaResumen: any;
    constructor(public viaje:ViajeService){
      this.tarjetaResumen = {
        fecha: viaje.viaje.fecha,
        hora: viaje.viaje.hora,
        calle1: viaje.viaje.origen,
        calle2: viaje.viaje.destino,
        coche: viaje.viaje.id_coche,
        precio: viaje.viaje.precio,
        pasajeros: viaje.viaje.pasajeros,
      }
    }
  iniciarMap(){
    var coord = {lat:40.4167754,lng:-3.7037902};
    var DirectionsRequest = {
      origin: 'Chicago, IL',
      destination: 'Los Angeles, CA',
      waypoints: [
        {
          location: 'Joplin, MO',
          stopover: false
        },{
          location: 'Oklahoma City, OK',
          stopover: true
        }],
      provideRouteAlternatives: false,
      travelMode: 'DRIVING',
      drivingOptions: {
        departureTime: new Date(/* now, or future date */),
        trafficModel: 'pessimistic'
      },
      unitSystem: google.maps.UnitSystem.IMPERIAL
    }
    var map = new google.maps.Map(document.getElementById('mapa'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  }
}
