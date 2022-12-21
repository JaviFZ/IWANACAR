import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/shared/usuario.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent {
  constructor(public usuarioService: UsuarioService, private router : Router){    }

  public editar(nombre:string, apellidos:string,foto:string,direccion:string, telefono:string,genero:string, fechaDeNacimiento:string,sobreMi:string){
    let usuarioEditado = new Usuario(nombre, apellidos, fechaDeNacimiento,"","",direccion, telefono, genero, foto, sobreMi, "", "", [], -1,-1,-1 )
    this.usuarioService.editarPerfil(usuarioEditado).subscribe((respuesta)=>{
      this.router.navigateByUrl("perfil")
      console.log(respuesta);
    })
  }
}
