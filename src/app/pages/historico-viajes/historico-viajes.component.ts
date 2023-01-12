import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/shared/usuario.service';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-historico-viajes',
  templateUrl: './historico-viajes.component.html',
  styleUrls: ['./historico-viajes.component.css']
})
export class HistoricoViajesComponent {
  public tarjetas_viaje = [];
  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService, private viajeService: ViajeService, private router: Router){
    this.viajeService.historicoViajes(this.usuarioService.usuario.id_usuario)
    .subscribe((result:any[])=>{
      this.tarjetas_viaje=result
      console.log(result);
    })
  }
  opinarViaje = (viaje) =>{
    if (viaje.activo === 0){
    this.viajeService.solicitarViaje = viaje
    this.viajeService.opinarPasajeroViaje = 0;
    this.router.navigateByUrl("/escribirOpinion") 
  }
  }
  deleteViajePasajero(id_chat: number){
    this.viajeService.deletePasajero(id_chat).subscribe(()=>{
      this.tarjetas_viaje = this.tarjetas_viaje.filter( pasajero => pasajero.id_chat !=id_chat)
   });
  }
}
