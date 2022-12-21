import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url:string;
  public logueado:boolean;
  public usuario:Usuario;
  constructor(private http:HttpClient) { 
    this.url = "http://localhost:3000"
    this.logueado = false;
  }

}
