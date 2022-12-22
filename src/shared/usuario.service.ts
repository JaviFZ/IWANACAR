import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url: string = "https://apiwana-production.up.railway.app/"
  public logueado: boolean = false
  public usuario: Usuario;


  constructor(private http: HttpClient) { }

  // **********metodo para register**************

  public register(usuario: Usuario) {

    return this.http.post(this.url + "registro", usuario)
  }

  // **********metodo para login**************

  public login(user: Usuario): Observable<object> {

    return this.http.post(this.url + "login", user)
  }

  public editarPerfil(user: Usuario): Observable<object> {
    console.log(user);
    return this.http.put(this.url + "editarPerfil", user)
  }


}

