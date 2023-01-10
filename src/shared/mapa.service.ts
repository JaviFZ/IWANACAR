import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapaService {
  origen_coord:any;
  destino_coord:any;
  public codPostalOr:string;
  public codPostalDes:string;
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
  // public getCoords(id:HTMLElement){
  //   let map = new google.maps.Map(id,{
  //     zoom: 15,
  //     center: coord,
  //     scrollwheel: false,
  //     zoomControl: true,
  //     rotateControl : false,
  //     mapTypeControl: true,
  //     streetViewControl: false,
  //   });
  // let geocoder = new google.maps.Geocoder();

  // let address = document.getElementById('search').value;
  // if(address!='')
  // {
  //   // Llamamos a la función geodecode pasandole la dirección que hemos introducido en la caja de texto.
  // geocoder.geocode({ 'address': address}, function(results, status)
  // {
  //   if (status == 'OK')
  //   {
  // // Mostramos las coordenadas obtenidas en el p con id coordenadas
  //   document.getElementById("coordenadas").innerHTML='Coordenadas:   '+results[0].geometry.location.lat()+', '+results[0].geometry.location.lng();
  // // Posicionamos el marcador en las coordenadas obtenidas
  //   map.marker.setPosition(results[0].geometry.location);
  // // Centramos el mapa en las coordenadas obtenidas
  //   map.map.setCenter(map.marker.getPosition());
  //   agendaForm.showMapaEventForm();
  //   }
  //   });
  // }
  // }
}
