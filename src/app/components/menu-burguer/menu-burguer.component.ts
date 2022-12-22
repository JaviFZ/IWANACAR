import { Component } from '@angular/core';
import { UsuarioService } from 'src/shared/usuario.service';


@Component({
  selector: 'app-menu-burguer',
  templateUrl: './menu-burguer.component.html',
  styleUrls: ['./menu-burguer.component.css']
})
export class MenuBurguerComponent {
  constructor(public usuarioServices: UsuarioService) {
    if (this.usuarioServices.logueado == true) {
    }
  }
}
