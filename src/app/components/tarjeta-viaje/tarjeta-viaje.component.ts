import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Opinion } from 'src/app/models/opinion';
import { TarjetaViaje } from 'src/app/models/tarjeta-viaje';
import { CocheService } from 'src/shared/coche.service';
import { UsuarioService } from 'src/shared/usuario.service';
import { ViajeService } from 'src/shared/viaje.service';


@Component({
  selector: 'app-tarjeta-viaje',
  templateUrl: './tarjeta-viaje.component.html',
  styleUrls: ['./tarjeta-viaje.component.css']
})
export class TarjetaViajeComponent {
  @Input() tarjet_viaje:any;
  constructor(public usuarioService: UsuarioService, public viajeService: ViajeService, public coche:CocheService, public router:Router){
    this.viajeService.tarjeta_viaje = this.tarjet_viaje;
    // for(let i:number = 0;i<this.tarjetas.length;i++){
    //   this.tarjeta_viaje = this.tarjetas[i];
    // }
    // }
  }
  public igualarTarjetas(){
    this.viajeService.tarjeta_viaje = this.tarjet_viaje;
  }
  public datosUsuario(id_usuario:number){
    this.usuarioService.datosUsuario(id_usuario).subscribe((data)=>{
      console.log(data[0]);
      
      this.usuarioService.usuario2 = data[0];
    });
    this.coche.getCocheOtherUser(id_usuario).subscribe((data) => {
      console.log(data[0]);
      
      this.usuarioService.coches2= data[0]
    })
     this.usuarioService.showOpinionOtherUser(id_usuario).subscribe((result: Opinion[]) => {
      console.log(result);
      this.usuarioService.opiniones2 = result
    })
    this.router.navigateByUrl("/perfil2")
  }
}

  // public usuarioViaje(){
  // let usuario =   this.viajeService.datosUsuarioViaje()

  //   console.log(usuario);
    
    
  // }

