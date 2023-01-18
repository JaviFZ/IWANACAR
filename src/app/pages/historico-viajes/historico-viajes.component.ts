import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ModalConfirmacionComponent } from 'src/app/components/modal-confirmacion/modal-confirmacion.component';
import { UsuarioService } from 'src/shared/usuario.service';
import { ViajeService } from 'src/shared/viaje.service';
import { DialogService } from '@ngneat/dialog';

@Component({
  selector: 'app-historico-viajes',
  templateUrl: './historico-viajes.component.html',
  styleUrls: ['./historico-viajes.component.css']
})
export class HistoricoViajesComponent {
  public tarjetas_viaje = [];
  private dialog = inject(DialogService);
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

  abrirConfirmacion(chat:any){
    const dialogRef = this.dialog.open(ModalConfirmacionComponent, {
      data: {
        texto: `¿Deseas darte de baja de este viaje?`
      },
    });
    dialogRef.afterClosed$.subscribe(result => {
      if (result === true) {
        this.deleteViajePasajero(chat.id_chat);
      }
    })
  }
}
