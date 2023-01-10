import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Coche } from 'src/app/models/coche';
import { CocheService } from 'src/shared/coche.service';
import  { UsuarioService } from 'src/shared/usuario.service'

@Component({
  selector: 'app-anadir-coche',
  templateUrl: './anadir-coche.component.html',
  styleUrls: ['./anadir-coche.component.css']
})
export class AnadirCocheComponent {
  constructor(private router:Router, private cochesService: CocheService, private usuarioService: UsuarioService){}

  
  addCoche(nombreCoche:string, marca:string, modelo:string, matricula:string, combustible:string, color:string, fumar:string, mascotas:string){
    const nuevoCoche = new Coche(nombreCoche, marca, modelo, matricula, combustible, color, fumar, mascotas, this.usuarioService.usuario.id_usuario);
    this.cochesService.add(nuevoCoche).subscribe()
    setTimeout(() => {
      this.router.navigateByUrl('/misCoches');
    }, 1000);
    
  }
}

//hacer que todos los campos sean obligatorios
