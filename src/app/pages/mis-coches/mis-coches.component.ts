import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Coche } from 'src/app/models/coche';
import { Usuario } from 'src/app/models/usuario';
import { CocheService } from 'src/shared/coche.service';
import  { UsuarioService } from 'src/shared/usuario.service'



@Component({
  selector: 'app-mis-coches',
  templateUrl: './mis-coches.component.html',
  styleUrls: ['./mis-coches.component.css']
})
export class MisCochesComponent {

  public coches: Coche[];
  public id_coche : number;
  public usuario: Usuario;
  public isOpen = false;

  constructor(private cocheService: CocheService, public usuarioService: UsuarioService) { 

      this.cocheService.get(this.usuarioService.usuario.id_usuario).subscribe((coches:Coche[])=>this.coches = coches);

      this.usuarioService.showDataUser(this.usuarioService.usuario.id_usuario).subscribe((result: Usuario) => {
        console.log(result);
        this.usuario = result[0]
      })

  }
      deleteCoche(id_coche: number){
        
        this.cocheService.delete(id_coche).subscribe(()=>{
          this.coches = this.coches.filter( coche => coche.id_coche !=id_coche)
          this.isOpen= false;
       });
      }
    }