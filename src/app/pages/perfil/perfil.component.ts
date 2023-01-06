import { Component } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { Coche } from 'src/app/models/coche';
import { Usuario } from 'src/app/models/usuario';
import { CocheService } from 'src/shared/coche.service';
import { UsuarioService } from 'src/shared/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  public usuario: Usuario;
  public opiniones: any;
  public coches: Coche;

  arrayEstrella = Array(5).fill('');

  constructor(public usuarioService: UsuarioService, public cocheService: CocheService) {

    this.cocheService.get(this.usuarioService.usuario.id_usuario).subscribe((coches: Coche[]) => {
      console.log(coches);
      this.coches = coches[0]
    });

    this.usuarioService.showDataUser(this.usuarioService.usuario.id_usuario).subscribe((result: Usuario) => {
      console.log(result);
      this.usuario = result[0]
    })

  }

  //  *************Metodo para convertir la fecha de nacimiento en una edad*******

  public convertAge(birthDate: string): number {
    const birthDateParsed = new Date(birthDate);
    const currentYear = new Date().getFullYear();
    let age = currentYear - birthDateParsed.getFullYear();

    // Si la fecha de hoy es anterior al mes y día de cumpleaños de la persona, se debe restar un año más , con el condicional de abajo

    if (new Date().getMonth() < birthDateParsed.getMonth() ||
      (new Date().getMonth() === birthDateParsed.getMonth() && new Date().getDate() < birthDateParsed.getDate())) {
      age--;
    }


    console.log(age);

    return age;

  }

  // ***************Metodo para convertir fecha de alta en miembro desde ...***

  public convertDate(date: string): string {
    const monthNames = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const dateParsed = new Date(date)
    const day = dateParsed.getDate();
    const monthIndex = dateParsed.getMonth();
    const year = dateParsed.getFullYear();

    return `Miembro desde ${day} de ${monthNames[monthIndex]} de ${year}`;
  }


  
}

