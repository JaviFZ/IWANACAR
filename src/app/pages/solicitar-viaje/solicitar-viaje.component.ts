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
export class SolicitarViajeComponent implements OnInit{
  public coche:any;
  public preferencias:any;
  constructor(public router:Router, public usuarioServices: UsuarioService, public viajeService:ViajeService,public mapa:MapaService){
  }
  public ngOnInit(){
    setTimeout(()=>{
      this.mapa.iniciarMapSolicitarViaje(document.getElementById('mapa'));
    },50)
  }
  solicitarViaje(){
    // this.router.navigateByUrl(`/ChatsAbiertos?id_usuario1=${this.usuarioServices.usuario.id_usuario}&id_usuario2=2&id_viaje=24`
    this.router.navigateByUrl(`/ChatsAbiertos?id_usuario1=${this.usuarioServices.usuario.id_usuario}&id_usuario2=${this.viajeService.solicitarViaje[0].id_usuario}&id_viaje=${this.viajeService.solicitarViaje[0].id_viaje}}`
    );
  }

}

