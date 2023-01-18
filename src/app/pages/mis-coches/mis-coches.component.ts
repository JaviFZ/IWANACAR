import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '@ngneat/dialog';
import { ModalConfirmacionComponent } from 'src/app/components/modal-confirmacion/modal-confirmacion.component';
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
  private dialog = inject(DialogService);
  public coches: Coche[];

  public usuario: Usuario;

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
       });
      }

      abrirConfirmacion(coche:Coche){
        const dialogRef = this.dialog.open(ModalConfirmacionComponent, {
          data: {
            texto: `¿Desea eliminar ${coche.nombreCoche}?`
          },
        });
        dialogRef.afterClosed$.subscribe(result => {
          if (result === true) {
            this.deleteCoche(coche.id_coche);
          }
        })
      }
    }