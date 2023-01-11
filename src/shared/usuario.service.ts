import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViajeService } from './viaje.service';
import { Opinion } from 'src/app/models/opinion';
import { Coche } from 'src/app/models/coche';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url: string = "https://apiwana-production.up.railway.app/"
  public logueado: boolean = false
  public usuario: Usuario;
  public opinion: Opinion;
  public usuario2: any;
  public opiniones2: Opinion[];
  public coches2: Coche;

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

  public publicarOpinion(opinion: Opinion) {

    return this.http.post(this.url + "escribir-opinion", opinion)
  }


  // **********metodo para mostrar opinion**************

  public showOpinion(id_usuario: number): Observable<object> {
    console.log(id_usuario);

    return this.http.get(this.url + "mostrarOpinion?id_usuario=" + id_usuario)

  }




// ********metodos para el perfil2**********************************

public datosUsuario(id_usuario2:number){
  // console.log(id_usuario);

  return this.http.get(this.url + "perfil?id_usuario=" + id_usuario2)
}

public showOpinionOtherUser(id_usuario: number): Observable<object> {
  console.log(id_usuario);

  return this.http.get(this.url + "mostrarOpinion?id_usuario=" + id_usuario)

}
// *************** fin metodos para el perfil2 **********************






}

