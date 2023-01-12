import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Opinion } from 'src/app/models/opinion';
import { CocheService } from 'src/shared/coche.service';
import { UsuarioService } from 'src/shared/usuario.service';

@Component({
  selector: 'app-historico-chats',
  templateUrl: './historico-chats.component.html',
  styleUrls: ['./historico-chats.component.css']
})
export class HistoricoChatsComponent {

  url = "https://iwanacar.cv6m2ktduioy.us-east-1.rds.amazonaws.com";
  chats = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService, public router:Router,public coche:CocheService) {
    this.httpClient.get(`${this.url}/chats?id_usuario=${this.usuarioService.usuario.id_usuario}`)
    .subscribe((chats: any[]) => this.chats.next(chats));
  }
  public datosUsuario2(id_usuario1:number,id_usuario2:number){
    if(this.usuarioService.usuario.id_usuario != id_usuario1){
    setTimeout(()=>{
          this.usuarioService.datosUsuario(id_usuario1).subscribe((data)=>{
            console.log(data[0]);
            
            this.usuarioService.usuario2 = data[0];
          });
          this.coche.getCocheOtherUser(id_usuario1).subscribe((data) => {
            console.log(data[0]);
            
            this.usuarioService.coches2= data[0]
          })
          this.usuarioService.showOpinionOtherUser(id_usuario1).subscribe((result: Opinion[]) => {
            console.log(result);
            this.usuarioService.opiniones2 = result
          })
        },50)
        this.router.navigateByUrl("/perfil2")
      }else{
        setTimeout(()=>{
          this.usuarioService.datosUsuario(id_usuario2).subscribe((data)=>{
            console.log(data[0]);
            
            this.usuarioService.usuario2 = data[0];
          });
          this.coche.getCocheOtherUser(id_usuario2).subscribe((data) => {
            console.log(data[0]);
            
            this.usuarioService.coches2= data[0]
          })
          this.usuarioService.showOpinionOtherUser(id_usuario2).subscribe((result: Opinion[]) => {
            console.log(result);
            this.usuarioService.opiniones2 = result
          })
        },50)
        this.router.navigateByUrl("/perfil2")
      }
    

    
  }
}
