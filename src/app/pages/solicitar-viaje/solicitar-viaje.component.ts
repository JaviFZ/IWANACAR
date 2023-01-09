import { Component } from '@angular/core';
import { Coche } from 'src/app/models/coche';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/shared/usuario.service';
@Component({
  selector: 'app-solicitar-viaje',
  templateUrl: './solicitar-viaje.component.html',
  styleUrls: ['./solicitar-viaje.component.css']
})
export class SolicitarViajeComponent {
  public coche:any;
  public preferencias:any;
  constructor(public router:Router, public usuarioServices: UsuarioService){
    this.coche = {
      marca:"SEAT",
      color: "Azul",
      matricula: "2356LGB",
      modelo: "Ibiza",
      combustible: "Diesel"
    };
    this.preferencias = {
      mascotas:true,
      paradas:false,
      fumar:true,
      tiempoMax:"20min"
    }
  }


  solicitarViaje(){
    this.router.navigateByUrl('/ChatsAbiertos?id_usuario2=2&id_viaje=24');
  }

}
