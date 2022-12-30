import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapaService {
  origen_coord:any;
  destino_coord:any;
  public codPostalOr:number;
  public codPostalDes:number;
  constructor() {}
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
    });
    
  }
  iniciarMap(id:HTMLElement){
    console.log(this.origen_coord);
    
    // var coord = {lat:40.05,lng:-32.54}
    let coord = this.origen_coord;
    let map = new google.maps.Map(id,{
      zoom: 15,
      center: coord
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
    // var marker = new google.maps.Marker({
    //   position: coord,
    //   map: map
    // });
  }
}
