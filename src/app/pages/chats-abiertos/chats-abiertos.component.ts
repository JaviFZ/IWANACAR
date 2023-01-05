import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UsuarioService } from 'src/shared/usuario.service';

@Component({
  selector: 'app-chats-abiertos',
  templateUrl: './chats-abiertos.component.html',
  styleUrls: ['./chats-abiertos.component.css']
})
export class ChatsAbiertosComponent implements OnInit {

  url = "https://apiwana-production.up.railway.app";
  idUsuario2: string;
  idViaje: string;
  chat = new BehaviorSubject(undefined);

constructor(private activatedRoute: ActivatedRoute, 
            private usuarioService: UsuarioService,
            private httpClient: HttpClient) {}

ngOnInit(): void {
  this.idUsuario2 = this.activatedRoute.snapshot.queryParams.id_usuario2;
  this.idViaje = this.activatedRoute.snapshot.queryParams.id_viaje;
  this.getChat();
}

getChat() {
  this.httpClient.post(`${this.url}/chat`,{id_viaje: parseInt(this.idViaje), id_usuario1: this.usuarioService.usuario.id_usuario, id_usuario2: parseInt(this.idUsuario2, 10)})
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
  
 