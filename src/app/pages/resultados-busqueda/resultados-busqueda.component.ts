import { Component } from '@angular/core';
import { TarjetaViajeComponent } from 'src/app/components/tarjeta-viaje/tarjeta-viaje.component';
import { Viaje } from 'src/app/models/viaje';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.css']
})
export class ResultadosBusquedaComponent {
  public viajes : Viaje[]
  constructor(public viajeService: ViajeService){
    
  }
}
