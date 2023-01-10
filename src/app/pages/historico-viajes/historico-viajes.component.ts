import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsuarioService } from 'src/shared/usuario.service';

@Component({
  selector: 'app-historico-viajes',
  templateUrl: './historico-viajes.component.html',
  styleUrls: ['./historico-viajes.component.css']
})
export class HistoricoViajesComponent {
  public tarjetas_viaje = [];
  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService){
    this.httpClient.get("https://apiwana-production.up.railway.app/misViajes?id_pasajero="+this.usuarioService.usuario.id_usuario)
    .subscribe((result:any[])=>{this.tarjetas_viaje=result})
  }
}

