import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { Coche } from 'src/app/models/coche';
import { Opinion } from 'src/app/models/opinion';
import { Usuario } from 'src/app/models/usuario';
import { CocheService } from 'src/shared/coche.service';
import { UsuarioService } from 'src/shared/usuario.service';

@Component({
  selector: 'app-perfil2',
  templateUrl: './perfil2.component.html',
  styleUrls: ['./perfil2.component.css']
})
export class Perfil2Component implements OnInit{

  public usuario: Usuario;
  public opiniones: Opinion[];
  public coches: Coche;
  public usuario2 : any;
  
  arrayEstrella = Array.from({ length: 5 }, (_, i) => i+1);



  constructor(public usuarioService: UsuarioService, public cocheService: CocheService) {

 




  }
  public ngOnInit(): void {
    this.usuario2 = this.usuarioService.usuario2;
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


  // getInfoOtherUser () {
  //   const path = "usuarios"
  //   const id = this.usuario ; 
  //   this.usuarioService.showDataUser(path , id).subscribe(res =>{
  //     console.log("el usuario es",res);
      

  //   })
  // }




  
}

