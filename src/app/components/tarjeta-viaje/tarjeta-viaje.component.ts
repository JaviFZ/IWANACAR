import { Component, Input } from '@angular/core';
import { TarjetaViaje } from 'src/app/models/tarjeta-viaje';
import { BuscarViajeComponent } from 'src/app/pages/buscar-viaje/buscar-viaje.component';
import { UsuarioService } from 'src/shared/usuario.service';
import { ViajeService } from 'src/shared/viaje.service';


@Component({
  selector: 'app-tarjeta-viaje',
  templateUrl: './tarjeta-viaje.component.html',
  styleUrls: ['./tarjeta-viaje.component.css']
})
export class TarjetaViajeComponent {
  @Input() tarjet_viaje:TarjetaViaje;
  public tarjetasViaje:TarjetaViaje[];
  constructor(public usuarioService: UsuarioService, public viajeService: ViajeService){
    this.tarjetasViaje = viajeService.viajesArray;
    // for(let i:number = 0;i<this.tarjetas.length;i++){
    //   this.tarjeta_viaje = this.tarjetas[i];
    // }
    // }
  }
}
  // public usuarioViaje(){
  // let usuario =   this.viajeService.datosUsuarioViaje()

  //   console.log(usuario);
    
    
  // }

