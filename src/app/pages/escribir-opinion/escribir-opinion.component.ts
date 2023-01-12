import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Opinion } from 'src/app/models/opinion';
import { Usuario } from 'src/app/models/usuario';
import { CocheService } from 'src/shared/coche.service';
import { UsuarioService } from 'src/shared/usuario.service';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-escribir-opinion',
  templateUrl: './escribir-opinion.component.html',
  styleUrls: ['./escribir-opinion.component.css']
})
export class EscribirOpinionComponent {
  public tarjetaResumen: any;
  public pasajero: Usuario = undefined;

  constructor(private router: Router, public viajeService: ViajeService, public cocheService: CocheService, public usuarioService: UsuarioService) {
    this.tarjetaResumen = this.viajeService.solicitarViaje;
    this.pasajero = this.usuarioService.usuario2

  }

  public escribirOpinion(opinion: string, puntuacion: number) {
    console.log(opinion, puntuacion)
    console.log(this.pasajero);
    
    if (!puntuacion) {
      console.log("puntua el viaje");
    } else {
      let nuevaOpinion = new Opinion(opinion, puntuacion, -1, this.usuarioService.usuario.id_usuario, this.tarjetaResumen.id_viaje,this.tarjetaResumen.id_usuarios);
      console.log(nuevaOpinion)
      this.usuarioService.publicarOpinion(nuevaOpinion).subscribe((respuesta) => {
        this.router.navigate(["historicoViajes"])
        console.log(respuesta);
      })
    }
  }
  public opinionPasajero(opinion: string, puntuacion: number) {
    console.log(opinion, puntuacion)
    if (!puntuacion) {
      console.log("puntua el viaje");
    } else {
      let nuevaOpinion = new Opinion(opinion, puntuacion, -1, this.pasajero.id_usuario, this.tarjetaResumen.id_viaje,this.tarjetaResumen.id_usuarios);
      console.log(nuevaOpinion)
      this.usuarioService.publicarOpinion(nuevaOpinion).subscribe((respuesta) => {
        this.router.navigate(["historicoViajes"])
        console.log(respuesta);
      })
    }
  }
}
