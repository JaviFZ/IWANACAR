import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-viaje4',
  templateUrl: './crear-viaje4.component.html',
  styleUrls: ['./crear-viaje4.component.css']
})
export class CrearViaje4Component {
  opcion : String;
  constructor(){
    this.opcion = "no";
  }
  public cambiarInput($event){
    if(this.opcion === "no"){
      this.opcion = "si";
    } else {
      this.opcion = "no";
    }
  }
}
