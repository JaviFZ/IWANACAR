import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // public nuevoUsuario : string[];

    constructor(public usuarioService: UsuarioService, private router : Router){    }
    public registrar(nombre:string, apellidos:string, fechaDeNacimiento:string, email:string, password:string, password2:string){
      if(nombre=="" || apellidos=="" || fechaDeNacimiento == "" || email == "" || password== ""){
        console.log("faltan campos por rellenar");
        
      }
      else if(password != password2){
       alert("Las contraseñas no coinciden");
      }
      else{
         let nuevoUsuario = new Usuario(nombre,apellidos,fechaDeNacimiento, email, password,"","","","","","","",[],-1,-1,-1)
         this.usuarioService.register(nuevoUsuario).subscribe((respuesta) => {
          this.router.navigateByUrl("login")
         console.log(respuesta);
       })
      }
    }
}
