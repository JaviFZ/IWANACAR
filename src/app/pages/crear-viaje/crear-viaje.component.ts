import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.css']
})
export class CrearViajeComponent {
  paginaActual: number;
    constructor(){
      this.paginaActual = 1;
    }
    public paginaSig(){
      this.paginaActual = this.paginaActual + 1;
    }
    public paginaAnt(){
      this.paginaActual = this.paginaActual - 1;
      if(this.paginaActual == 0){
        this.paginaActual = 1;
      }
    }

}
