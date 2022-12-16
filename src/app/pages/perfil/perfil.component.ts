import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  public usuario: any;
  public opiniones:any;

  constructor() {
    this.usuario = {
      nombre: 'Marcial',
      apellidos: 'Ruiz Escribano',
      email: 'Marcial@gmail.com',
      edad: 34,
      antiguedad:'Miembro desde 13 May',
      bio :'',
  }
  this.opiniones = {
    mensaje1: 'Muy buen coche, lo recomiendo',
  }
}
}
