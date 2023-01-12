import { Injectable } from '@angular/core';
import { ViajeService } from './viaje.service';

@Injectable({
  providedIn: 'root'
})
export class MapaService {
  origen_coord:any;
  destino_coord:any;
  public codPostalOr:string;
  public codPostalDes:string;
  constructor(public viajeService:ViajeService) {}
  public autocompletar(id:HTMLInputElement){
    let origen:any;
    let autocomplete:any;
    autocomplete = new google.maps.places.Autocomplete(id, {
        types: ['geocode'],
        componentRestrictions: {
        country: "ES"
        }
    });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      let near_place = autocomplete.getPlace();
      console.log(near_place);
      this.origen_coord = {lat:near_place.geometry.viewport.Wa.lo,lng:near_place.geometry.viewport.Ia.lo}
      this.codPostalOr = near_place.address_components[6].long_name;
      console.log(this.origen_coord);
      console.log(this.codPostalOr);
      
    });
  }

  public autocompletar1(id:HTMLInputElement){
    let autocomplete:any;
    autocomplete = new google.maps.places.Autocomplete(id, {
        types: ['geocode'],
        componentRestrictions: {
        country: ["ES","MD"]
        }
    });
    google.maps.event.addListener(autocomplete, 'place_changed',  () => {
      let near_place = autocomplete.getPlace();
      console.log(near_place)
      this.destino_coord = {lat:near_place.geometry.viewport.Wa.lo,lng:near_place.geometry.viewport.Ia.lo}
      this.codPostalDes = near_place.address_components[6].long_name;
      console.log(this.codPostalDes);
    });
    
  }
  iniciarMapResult(id:HTMLElement){
    let coord = this.origen_coord;
    let map = new google.maps.Map(id,{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  }
  iniciarMap(id:HTMLElement){
    console.log(this.origen_coord);
    
    // var coord = {lat:40.05,lng:-32.54}
    let coord = this.origen_coord;
    let map = new google.maps.Map(id,{
      zoom: 15,
      center: coord,
      scrollwheel: false,
      zoomControl: true,
      rotateControl : false,
      mapTypeControl: true,
      streetViewControl: false,
    });
    let objConfigDR = {
      map:map
    }
    let objConfigDS = {
      origin: this.origen_coord,
      destination:this.destino_coord,
      travelMode:google.maps.TravelMode.DRIVING
    }
    let ds = new google.maps.DirectionsService();
    let dr = new google.maps.DirectionsRenderer(objConfigDR);
    ds.route(objConfigDS,function (resultados,status){
      if (status == "OK"){
        dr.setDirections(resultados);
      }else{
        alert("ERROR"+status);
      }
    });
    
  }
  public getCoords(id:HTMLElement){
    let map = new google.maps.Map(id,{
      zoom: 10,
      minZoom: 7,
      center:{lat:40.41831,lng: -3.70275},
      scrollwheel: true,
      zoomControl: false,
      rotateControl : false,
      mapTypeControl: false,
      streetViewControl: false,
    });
    let address;
    let geocoder = new google.maps.Geocoder();
    let coord;
    let markers = [new google.maps.Marker({
      position: {lat:0,lng:0},
      map: map
    }),];
    setTimeout(()=>{
      for(let i:number = 0;i<this.viajeService.viajesArray.length;i++){
        address = this.viajeService.viajesArray[i].origen;
        if(address!=''){
          geocoder.geocode({ 'address': address}, function(results, status){
            coord = {lat:results[0].geometry.location.lat(),lng:results[0].geometry.location.lng()}
            if (status == 'OK'){
              map.setCenter(coord);
              markers.push(new google.maps.Marker({
                position: {lat:0,lng:0},
                map: map
              }),);
              markers[i].setPosition(coord);
            } 
          });
        }
    }
    },200)
  }
  iniciarMapSolicitarViaje(id:HTMLElement){
    let geocoder = new google.maps.Geocoder();
    let address_origen = this.viajeService.solicitarViaje[0].origen;
    let address_destino = this.viajeService.solicitarViaje[0].destino;
    let coord_origen ={lat:0,lng:0};
    let coord_destino = {lat:0,lng:0};
      if(address_origen!=''){
        geocoder.geocode({ 'address': address_origen}, function(results, status){
          coord_origen = {lat:results[0].geometry.location.lat(),lng:results[0].geometry.location.lng()}
          if(status == 'OK'){
            console.log({lat:results[0].geometry.location.lat(),lng:results[0].geometry.location.lng()});
          }
        });
      }
      if(address_destino!=''){
        geocoder.geocode({ 'address': address_destino}, function(results, status){
          coord_destino = {lat:results[0].geometry.location.lat(),lng:results[0].geometry.location.lng()}
          if(status == 'OK'){
            console.log({lat:results[0].geometry.location.lat(),lng:results[0].geometry.location.lng()});
          }
        });
      }
      console.log(address_destino);
      setTimeout(()=>{
        let map = new google.maps.Map(id,{
          zoom: 15,
          minZoom: 7,
          center: coord_origen,
          scrollwheel: true,
          zoomControl: false,
          rotateControl : false,
          mapTypeControl: false,
          streetViewControl: false,
        });
        let objConfigDR = {
          map:map
        }
        let objConfigDS = {
          origin: coord_origen,
          destination:coord_destino,
          travelMode:google.maps.TravelMode.DRIVING
        }
        let ds = new google.maps.DirectionsService();
        let dr = new google.maps.DirectionsRenderer(objConfigDR);
        ds.route(objConfigDS,function (resultados,status){
          if (status == "OK"){
            dr.setDirections(resultados);
          }else{
            alert("ERROR"+status);
          }
        });
      },200);
  }
}
