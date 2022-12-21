import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url: string = "http://localhost:3000"
  public logueado: boolean = false
  public usuario: Usuario;


  constructor(private http: HttpClient) {}

  // **********metodo para register**************

    public register(user: Usuario) {

      return this.http.post(this.url + "registro", user)
    }
  
    // **********metodo para login**************
  
    public login(user: Usuario) {
  
      return this.http.post(this.url + "login", user)
    }

    public editarPerfil(user: Usuario) {
  
      return this.http.post(this.url + "editarPerfil", user)
    }


  }

