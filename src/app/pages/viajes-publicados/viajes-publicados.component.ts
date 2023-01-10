import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TarjetaViajesPublicados } from 'src/app/models/tarjeta-viajes-publicados';
import { UsuarioService } from 'src/shared/usuario.service';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-viajes-publicados',
  templateUrl: './viajes-publicados.component.html',
  styleUrls: ['./viajes-publicados.component.css']
})
export class ViajesPublicadosComponent {
  public viajes_publicados: [];
  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService, public viajeService: ViajeService){
    this.httpClient.get("https://apiwana-production.up.railway.app/viajesPublicados?id_conductor="+this.usuarioService.usuario.id_usuario)
    .subscribe((result:[])=>{this.viajes_publicados=result})
  }
  }

