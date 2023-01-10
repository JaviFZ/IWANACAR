import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsuarioService } from 'src/shared/usuario.service';

@Component({
  selector: 'app-historico-chats',
  templateUrl: './historico-chats.component.html',
  styleUrls: ['./historico-chats.component.css']
})
export class HistoricoChatsComponent {

  url = "https://apiwana-production.up.railway.app";
  chats = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) {
    this.httpClient.get(`${this.url}/chats?id_usuario=${this.usuarioService.usuario.id_usuario}`)
    .subscribe((chats: any[]) => this.chats.next(chats));
  }
}
