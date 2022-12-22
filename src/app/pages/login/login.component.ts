import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/shared/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public email : string;
  public password : string;
  public usuarioConectado : boolean;
  public dataOk : boolean;

    constructor(private router : Router , private usuarioService : UsuarioService) {}
    
    public userValidate(email:string, password:string){
      let user = new Usuario("","","",email,password,"","","","","","","",[], 0,-1,-1)
      // this.usuarioService.login(user).subscribe((result: any) => {
      //   console.log(result);
      //   if (result.error) {
      //     console.log("Usuario no encontrado");
      //   } else {
      //     this.usuarioService.usuario = new Usuario(result.nombre, result.apellidos, result.fechaDeNacimiento, result.email, result.password, result.direccion, result.telefono, result.genero, result.foto, result.sobreMi, result.fechaDealta, result.tiempoDeEspera, result.coches, result.puntuacionMedia, result.id_usuario, result.id_opinion)
      //     this.usuarioService.logueado = true;
      //     this.router.navigateByUrl('buscarViaje')
        
//       }
//     })
this.usuarioService.login(user).subscribe((user: any)=>{
  if (typeof user !== 'string'){
   this.usuarioService.logueado = true;
   this.usuarioService.usuario = user;
   this.router.navigateByUrl("libros")
 }else console.log("datos erroneos")
},
   ()=>{ this.usuarioService.logueado = false});

// }
// }
 }
}
