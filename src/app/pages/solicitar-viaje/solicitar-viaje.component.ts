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
  constructor(public router:Router, public usuarioServices: UsuarioService){
  }
  solicitarViaje(){
    this.router.navigateByUrl('/ChatsAbiertos');
  }
}
