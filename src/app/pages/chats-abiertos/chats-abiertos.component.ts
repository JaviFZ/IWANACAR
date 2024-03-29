import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, first } from 'rxjs';
import { Chat, Mensaje } from 'src/app/models/chat';
import { UsuarioService } from 'src/shared/usuario.service';

@Component({
  selector: 'app-chats-abiertos',
  templateUrl: './chats-abiertos.component.html',
  styleUrls: ['./chats-abiertos.component.css']
})
export class ChatsAbiertosComponent implements OnInit, OnDestroy {

  url = "https://apiwana-nz8zei982-javifz.vercel.app";
  idUsuario1: string;
  idUsuario2: string;
  idViaje: string;
  chat = new BehaviorSubject<Chat>(undefined);
  interval: NodeJS.Timer;
  form:FormGroup

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
  }, 2000);
}



getChat() {
  this.httpClient.post(`${this.url}/chat`,{
    id_viaje: parseInt(this.idViaje),
    id_usuario1: parseInt(this.idUsuario1, 10),
    id_usuario2: parseInt(this.idUsuario2, 10),
    usuario_actual: this.usuarioService.usuario.id_usuario
  })
  .pipe(first())
  .subscribe((chat: Chat) => this.chat.next(chat));
}

mensajePropio(mensaje){
  return mensaje.id_usuario === this.usuarioService.usuario.id_usuario;
}

public nuevoMensaje(elemento){
 const chatActual = this.chat.getValue(); 
  this.httpClient.post(`${this.url}/mensaje`, new Mensaje(chatActual.id_chat, this.usuarioService.usuario.id_usuario, new Date().toISOString(), elemento.value))
  .subscribe(() => this.getChat())
  elemento.value = ""

  

}

// public cleaningForm() {
//   this.form.reset()

// }



}
  
 