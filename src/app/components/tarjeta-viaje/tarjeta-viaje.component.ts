import { Component } from '@angular/core';
import { BuscarViajeComponent } from 'src/app/pages/buscar-viaje/buscar-viaje.component';
import { UsuarioService } from 'src/shared/usuario.service';
import { ViajeService } from 'src/shared/viaje.service';


@Component({
  selector: 'app-tarjeta-viaje',
  templateUrl: './tarjeta-viaje.component.html',
  styleUrls: ['./tarjeta-viaje.component.css']
})
export class TarjetaViajeComponent {
  public tarjeta_viaje:any;
  constructor(public usuarioService: UsuarioService, public viajeService: ViajeService){

    this.tarjeta_viaje = {
      foto:viajeService.viaje.id_usuario,
      nombre:usuarioService.usuario.nombre,
      origen:viajeService.viaje.origen,
      destino:viajeService.viaje.destino,
      fecha:viajeService.viaje.fecha,
      hora:viajeService.viaje.hora,
      precio:viajeService.viaje.precio,
      pasajeros:viajeService.viaje.pasajeros,
      valoracion:usuarioService
    }
  }

  // public usuarioViaje(){
  // let usuario =   this.viajeService.datosUsuarioViaje()

  //   console.log(usuario);
    
    
  // }
}
