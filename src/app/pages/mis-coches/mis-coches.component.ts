import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Coche } from 'src/app/models/coche';
import { CocheService } from 'src/app/shared/coche.service';
import  { UsuarioService } from 'src/app/shared/usuario.service'



@Component({
  selector: 'app-mis-coches',
  templateUrl: './mis-coches.component.html',
  styleUrls: ['./mis-coches.component.css']
})
export class MisCochesComponent {

  public coches: Coche[];



  constructor(private cocheService: CocheService, public usuarioService: UsuarioService) { 

      this.cocheService.get(this.usuarioService.usuario.id_usuario).subscribe((coches:Coche[])=>this.coches = coches);
  }
      deleteCoche(id_coche: number){
        this.cocheService.delete(id_coche).subscribe(()=>{
          this.coches = this.coches.filter( coche => coche.id_coche !=id_coche)
       });
      }
    }