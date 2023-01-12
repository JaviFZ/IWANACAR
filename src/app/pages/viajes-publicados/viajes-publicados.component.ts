import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TarjetaViajesPublicados } from 'src/app/models/tarjeta-viajes-publicados';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/shared/usuario.service';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-viajes-publicados',
  templateUrl: './viajes-publicados.component.html',
  styleUrls: ['./viajes-publicados.component.css']
})
export class ViajesPublicadosComponent implements OnInit{
  public viajes_publicados: [];
  public pasajeros: [];
  constructor(private router:Router, private httpClient: HttpClient, private usuarioService: UsuarioService, public viajeService: ViajeService){
  
  }
  public ngOnInit(): void {
    this.viajeService.viajesPublicados(this.usuarioService.usuario.id_usuario).subscribe((data:[])=>{
      console.log(data);
      this.viajes_publicados = data
    })
    this.anadirPasajeros();
  }
  public anadirPasajeros(){
    this.viajeService.pasajeros(this.usuarioService.usuario.id_usuario).subscribe((result:[])=>{
      console.log(result);
      if(result != undefined){
        this.pasajeros = result
      }
      console.log(this.pasajeros);
      })
  }

  public puntuarPasajero(viaje:any, pasajero:Usuario){
    if (viaje.activo === 0){
      console.log(pasajero);
      
      this.viajeService.solicitarViaje = viaje
      this.usuarioService.usuario2 = pasajero
      this.viajeService.opinarPasajeroViaje = 1;
      console.log(this.usuarioService.usuario2);
      this.router.navigateByUrl("/escribirOpinion") 
    }
  }
  
}

