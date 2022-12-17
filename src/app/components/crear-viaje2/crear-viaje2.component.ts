import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-viaje2',
  templateUrl: './crear-viaje2.component.html',
  styleUrls: ['./crear-viaje2.component.css']
})
export class CrearViaje2Component {
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
