import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Opinion } from 'src/app/models/opinion';
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

  constructor(private router: Router, public viajeService: ViajeService, public cocheService: CocheService, public usuarioService: UsuarioService) {
    this.tarjetaResumen = {
      fecha: viajeService.viaje.fecha,
      hora: viajeService.viaje.hora,
      calle1: viajeService.viaje.origen,
      calle2: viajeService.viaje.destino,
      coche: "adad",
      precio: viajeService.viaje.precio,
      pasajeros: viajeService.viaje.pasajeros,
      id_viaje: 20

    }

  }

  public escibirOpinion(opinion: string, puntuacion: number) {
    console.log(opinion, puntuacion)
    if (!puntuacion) {
      console.log("puntua el viaje");
    } else {
      let nuevaOpinion = new Opinion(opinion, puntuacion, -1, this.usuarioService.usuario.id_usuario, this.tarjetaResumen.id_viaje);
      console.log(nuevaOpinion)
      this.usuarioService.publicarOpinion(nuevaOpinion).subscribe((respuesta) => {
        this.router.navigate(["historicoViajes"])
        console.log(respuesta);
      })
    }
  }
}
