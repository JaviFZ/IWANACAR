import { Component } from '@angular/core';
import { Viaje } from 'src/app/models/viaje';
import { UsuarioService } from 'src/shared/usuario.service';
import { ViajeService } from 'src/shared/viaje.service';


@Component({
  selector: 'app-tarjeta-viaje',
  templateUrl: './tarjeta-viaje.component.html',
  styleUrls: ['./tarjeta-viaje.component.css']
})
export class TarjetaViajeComponent {
  public viajesEncontrados:any;

  constructor(public viajeService: ViajeService, public usuarioService: UsuarioService){
    
    this.usuarioService.url = usuarioService.url
    
    
  }
}
