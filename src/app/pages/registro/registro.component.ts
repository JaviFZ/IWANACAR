import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  public nuevoUsuario : string[];

    constructor(private router : Router){

      this.nuevoUsuario = [];
    }
    public registrar(nombre:string, apellidos:string, fechaNac:string, email:string, password:string, password2:string){
      if(password === password2){
        this.nuevoUsuario.push(nombre, apellidos, fechaNac, email, password);
        this.router.navigateByUrl('/login');
        console.log(this.nuevoUsuario);
        
      }
      else{
        console.log("Las contraseñas no coinciden");
        
      }
    }
}
