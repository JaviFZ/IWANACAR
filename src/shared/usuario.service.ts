import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViajeService } from './viaje.service';
import { Opinion } from 'src/app/models/opinion';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url: string = "https://apiwana-production.up.railway.app/"
  public logueado: boolean = false
  public usuario: Usuario;
  public opinion: Opinion;


  constructor(private http: HttpClient) { }

  // **********metodo para register**************

  public register(usuario: Usuario) {

    return this.http.post(this.url + "registro", usuario)
  }

  // **********metodo para login**************

  public login(user: Usuario): Observable<object> {

    return this.http.post(this.url + "login", user)
  }
  // **********metodo para editar perfil**************

  public editarPerfil(user: Usuario): Observable<object> {
    console.log(user);
    return this.http.put(this.url + "editarPerfil", user)
  }

  // **********metodo para mostrar datos del usuario**************

  public showDataUser(id_usuario: number) {
    // console.log(id_usuario);

    return this.http.get(this.url + "perfil?id_usuario=" + id_usuario)
  }

 // **********metodo para enviar opinion**************

  public publicarOpinion(opinion: Opinion){

    return this.http.post(this.url + "escribir-opinion", opinion)
  }


   // **********metodo para mostrar opinion**************

   public showOpinion (id_opiniones : number): Observable<object> {
    console.log(id_opiniones);
    console.log(this.url + "mostrarOpinion" + id_opiniones);
    
    return this.http.get(this.url + "mostrarOpinion?id_pasajero=" + id_opiniones)

   }


  
  


}

