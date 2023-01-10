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

  public modifiedUser: Usuario;
  public usuario: Usuario;

  constructor(public usuarioService: UsuarioService, private router: Router) {
    this.modifiedUser = usuarioService.usuario;

    this.usuarioService.showDataUser(this.usuarioService.usuario.id_usuario).subscribe((result: Usuario) => {
      console.log(result);
      this.usuario = result[0]
    })
  }

  public modificar(newName: string, newSurname: string, newPhoto: string, newAddress: string, newPhone: string, newGender: string, newBirthDate: string, newTimeOfWaiting: string, newAboutMe: string) {
    this.modifiedUser.nombre = (newName == '' ? null : newName);
    this.modifiedUser.apellidos = (newSurname == '' ? null : newSurname);
    this.modifiedUser.foto = (newPhoto == '' ? null : newPhoto);
    this.modifiedUser.direccion = (newAddress == '' ? null : newAddress);
    this.modifiedUser.telefono = (newPhone == '' ? null : newPhone);
    this.modifiedUser.genero = (newGender == '' ? null : newGender);
    this.modifiedUser.fechaDeNacimiento = (newBirthDate == '' ? null : newBirthDate);
    this.modifiedUser.tiempoDeEspera = (newTimeOfWaiting == '' ? null : newTimeOfWaiting);
    this.modifiedUser.sobreMi = (newAboutMe == '' ? null : newAboutMe);
    console.log(this.modifiedUser);

    this.usuarioService.editarPerfil(this.modifiedUser).subscribe((data: any) => {
      console.log(data);
    })
    setTimeout(() => {
      this.router.navigateByUrl('/perfil');
    }, 500);
  }




}