import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TarjetaViajesPublicados } from 'src/app/models/tarjeta-viajes-publicados';
import { UsuarioService } from 'src/shared/usuario.service';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-viajes-publicados',
  templateUrl: './viajes-publicados.component.html',
  styleUrls: ['./viajes-publicados.component.css']
})
export class ViajesPublicadosComponent implements OnInit{
  public viajes_publicados: any[];
  public pasajeros: any[];
  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService, public viajeService: ViajeService){
  
  }
  public ngOnInit(): void {
    this.viajeService.viajesPublicados(this.usuarioService.usuario.id_usuario).subscribe((data:any[])=>{
      console.log(data);
      this.viajes_publicados = data
    })
    this.anadirPasajeros();
  }
  public anadirPasajeros(){
    this.viajeService.pasajeros(this.usuarioService.usuario.id_usuario).subscribe((result:any[])=>{
      console.log(result);
      if(result != undefined){
        this.pasajeros = result
      }
      console.log(this.pasajeros);
      })
  }
  
  public deleteViajePublicado(id_viaje: number){
    this.viajeService.deleteViaje(id_viaje).subscribe(()=>{
      this.viajes_publicados = this.viajes_publicados.filter( pasajero => pasajero.id_viaje !=id_viaje)
   });
  }

}

