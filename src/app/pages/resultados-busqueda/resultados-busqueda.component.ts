import { Component } from '@angular/core';
import { TarjetaViajeComponent } from 'src/app/components/tarjeta-viaje/tarjeta-viaje.component';
import { TarjetaViaje } from 'src/app/models/tarjeta-viaje';
import { Viaje } from 'src/app/models/viaje';
import { MapaService } from 'src/shared/mapa.service';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.css']
})
export class ResultadosBusquedaComponent {
  public viajes : Viaje[];
  public tarjetas_viaje:TarjetaViaje[];
  public tarjetaViaje:TarjetaViaje;
  constructor(public viajeService: ViajeService, public mapa:MapaService){
    this.tarjetas_viaje = viajeService.viajesArray;
  }
  public iniciarMap(){
    this.mapa.iniciarMap(document.getElementById("mapa"))
  }
  public iniciarMapResult(){
    this.mapa.iniciarMapResult(document.getElementById("mapa"))
  }
}
