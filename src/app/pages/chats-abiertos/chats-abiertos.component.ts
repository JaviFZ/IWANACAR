import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, first } from 'rxjs';
import { UsuarioService } from 'src/shared/usuario.service';

@Component({
  selector: 'app-chats-abiertos',
  templateUrl: './chats-abiertos.component.html',
  styleUrls: ['./chats-abiertos.component.css']
})
export class ChatsAbiertosComponent implements OnInit, OnDestroy {

  url = "https://apiwana-production.up.railway.app";
  idUsuario1: string;
  idUsuario2: string;
  idViaje: string;
  chat = new BehaviorSubject(undefined);
  interval: NodeJS.Timer;

constructor(private activatedRoute: ActivatedRoute, 
            private usuarioService: UsuarioService,
            private httpClient: HttpClient) {}
  

ngOnInit(): void {
  this.idUsuario2 = this.activatedRoute.snapshot.queryParams.id_usuario2;
  this.idUsuario1 = this.activatedRoute.snapshot.queryParams.id_usuario1;
  this.idViaje = this.activatedRoute.snapshot.queryParams.id_viaje;
  this.getChat();
  this.realtimeChat();
}

ngOnDestroy(): void {
  clearInterval(this.interval);
}

realtimeChat(): void {
  this.interval = setInterval(() => {
    this.getChat();
  }, 5000);
}



getChat() {
  this.httpClient.post(`${this.url}/chat`,{
    id_viaje: parseInt(this.idViaje),
    id_usuario1: parseInt(this.idUsuario1, 10),
    id_usuario2: parseInt(this.idUsuario2, 10),
    usuario_actual: this.usuarioService.usuario.id_usuario
  })
  .pipe(first())
  .subscribe((chat) => this.chat.next(chat));
}

mensajePropio(mensaje){
  return mensaje.id_usuario === this.usuarioService.usuario.id_usuario;
}

public nuevoMensaje(mensaje:string){
 const chatActual = this.chat.getValue(); 
  this.httpClient.post(`${this.url}/mensaje`, {id_chat: chatActual.id_chat, id_usuario: this.usuarioService.usuario.id_usuario, fecha: new Date().toISOString(), mensaje})
  .subscribe(() => this.getChat())
}
}
  
 