import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/models/coche';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/shared/usuario.service';
import { ViajeService } from 'src/shared/viaje.service';
import { MapaService } from 'src/shared/mapa.service';
@Component({
  selector: 'app-solicitar-viaje',
  templateUrl: './solicitar-viaje.component.html',
  styleUrls: ['./solicitar-viaje.component.css']
})
export class SolicitarViajeComponent{
  public coche:any;
  public preferencias:any;
  constructor(public router:Router, public usuarioServices: UsuarioService, public viajeService:ViajeService,public mapa:MapaService){
  }
  map(){
    this.mapa.iniciarMap(document.getElementById('mapa'));
  }
  solicitarViaje(){
    this.router.navigateByUrl(`/ChatsAbiertos?id_usuario1=${this.usuarioServices.usuario.id_usuario}&id_usuario2=2&id_viaje=24`);
  }

}
