import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public correo : string;
  public password : string;
  public usuarioConectado : boolean;
  public dataOk : boolean;

    constructor(private router : Router){
      this.correo="jferzap@gmail.com";
      this.password="1234";
      this.usuarioConectado=false;
      this.dataOk=true;
    }
    
    public userValidate(correo, password){
      if(correo==this.correo && password==this.password){

        this.router.navigateByUrl('/buscarViaje');
        this.usuarioConectado=true;
      }
      else{

        console.log("Usuario o contraseña no coinciden");
        this.usuarioConectado = false;
        this.dataOk = false;
        
      }
    }

}
