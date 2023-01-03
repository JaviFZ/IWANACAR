import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Viaje } from 'src/app/models/viaje';
import { CrearViajeComponent } from 'src/app/pages/crear-viaje/crear-viaje.component';
import { PublicarViajeComponent } from 'src/app/pages/publicar-viaje/publicar-viaje.component';
import { ViajePublicadoComponent } from 'src/app/pages/viaje-publicado/viaje-publicado.component';
import { CocheService } from 'src/shared/coche.service';
import { UsuarioService } from 'src/shared/usuario.service';
import { ViajeService } from 'src/shared/viaje.service';
import { Coche } from 'src/app/models/coche';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-crear-viaje3',
  templateUrl: './crear-viaje3.component.html',
  styleUrls: ['./crear-viaje3.component.css']
})
export class CrearViaje3Component {
  public paginaActual:number
  public viaje:Viaje;
  public coches:Coche[]
  public usuario: Usuario
  constructor(public viajes:ViajeService,public componente:CrearViajeComponent,public coche:CocheService,public usuarioService:UsuarioService){  
    this.paginaActual = 3;
    this.coches = coche.coche;
    this.coche.get(this.usuarioService.usuario.id_usuario).subscribe((coches:Coche[])=>this.coches = coches);
  }
  public getCoche(){
    this.coches = this.coche.coche;
  }
  public paginaAnt(){
    this.paginaActual = this.paginaActual - 1;
    this.componente.paginaActual = this.paginaActual
    if(this.paginaActual == 0){
      this.paginaActual = 1;
    }
  }
  public guardarDat(coche:number,plazas:number,precio:number){
      this.viajes.viaje.id_coche = coche;
      this.viajes.viaje.pasajeros = plazas;
      this.viajes.viaje.precio = precio
  }
}
