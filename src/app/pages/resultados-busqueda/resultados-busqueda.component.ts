import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(public viajeService: ViajeService, public mapa:MapaService, public router:Router){
    console.log(viajeService.viajesArray);
  }
  public iniciarMap(){
    this.mapa.iniciarMap(document.getElementById("mapa"))
  }
  public iniciarMapResult(){
    this.mapa.iniciarMapResult(document.getElementById("mapa"))
  }
  public solicitarIdViaje(){
    console.log(this.viajeService.tarjeta_viaje.id_viaje);
    
    this.viajeService.datosUsuarioViaje(this.viajeService.tarjeta_viaje.id_viaje).subscribe((data)=>{
      console.log(data);
      this.viajeService.solicitarViaje = data;
    })
    setTimeout(() => {
      this.router.navigateByUrl('/solicitarViaje');
    }, 500);
  }
  // deleteCoche(id_coche: number){
  //   this.cocheService.delete(id_coche).subscribe(()=>{
  //     this.coches = this.coches.filter( coche => coche.id_coche !=id_coche)
  //  });
  // }
}
