import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/shared/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // public nuevoUsuario : string[];

    constructor(public usuarioService: UsuarioService, private router : Router, public toast:HotToastService){    }
    public registrar(nombre:string, apellidos:string, fechaDeNacimiento:string, email:string, password:string, password2:string){
      if(nombre=="" || apellidos=="" || fechaDeNacimiento == "" || email == "" || password== ""){
        this.toast.warning("faltan campos por rellenar"); 
      }else if(!email.includes("@") || !email.includes(".com")){
        this.toast.warning("Introduce un email válido")
      }else if(password != password2){
        this.toast.warning("Las contraseñas no coinciden");
      }else{
        let nuevoUsuario = new Usuario(nombre,apellidos,fechaDeNacimiento, email, password,"","","","","","","",[],-1,-1,-1)
          this.usuarioService.register(nuevoUsuario).subscribe((respuesta) => {
          this.router.navigateByUrl("login")
          console.log(respuesta);
        })
        this.toast.error("error")
      }
    }
}
