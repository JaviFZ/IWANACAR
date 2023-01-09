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
  @Input() tarjet_viaje:any;
  constructor(public usuarioService: UsuarioService, public viajeService: ViajeService){
    this.viajeService.tarjeta_viaje = this.tarjet_viaje;
    // for(let i:number = 0;i<this.tarjetas.length;i++){
    //   this.tarjeta_viaje = this.tarjetas[i];
    // }
    // }
  }
  public igualarTarjetas(){
    this.viajeService.tarjeta_viaje = this.tarjet_viaje;
  }
}

  // public usuarioViaje(){
  // let usuario =   this.viajeService.datosUsuarioViaje()

  //   console.log(usuario);
    
    
  // }

