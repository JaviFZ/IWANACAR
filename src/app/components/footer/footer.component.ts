import { Component } from '@angular/core';
import { UsuarioService } from 'src/shared/usuario.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(public usuario: UsuarioService){

  }
}
