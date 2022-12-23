import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/shared/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  public usuario: Usuario;
  public opiniones:any;

  constructor( public usuarioService: UsuarioService ) {
    this.usuarioService.showDataUser(this.usuarioService.usuario.id_usuario).subscribe((result: Usuario) => {console.log(result);
     this.usuario = result })     

    this.usuario = new Usuario (this.usuarioService.usuario.nombre,this.usuarioService.usuario.apellidos,this.usuarioService.usuario.fechaDeNacimiento,this.usuarioService.usuario.email,this.usuarioService.usuario.password,this.usuarioService.usuario.direccion,this.usuarioService.usuario.telefono,this.usuarioService.usuario.genero,this.usuarioService.usuario.foto,this.usuarioService.usuario.sobreMi,this.usuarioService.usuario.fechaDealta,this.usuarioService.usuario.tiempoDeEspera,this.usuarioService.usuario.coches,this.usuarioService.usuario.puntuacionMedia,this.usuarioService.usuario.id_usuario,this.usuarioService.usuario.id_opinion)

    
   }
   
   
}

