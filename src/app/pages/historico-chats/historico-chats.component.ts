import { Component } from '@angular/core';

@Component({
  selector: 'app-historico-chats',
  templateUrl: './historico-chats.component.html',
  styleUrls: ['./historico-chats.component.css']
})
export class HistoricoChatsComponent {

  chat_1={
    nombre: "Maria del Carmen Casquillo Serrin",
    foto: "https://imgs.search.brave.com/20xd1mkifapS9HQxBx91AYfOLhqf1woGKK8BtyQTeng/rs:fit:1020:642:1/g:ce/aHR0cHM6Ly93d3cu/Y3ViYXBlcmlvZGlz/dGFzLmN1L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA3L1BP/UlRBREEtTWFyaWEt/ZGVsLUNhcm1lbi0x/MDIweDY0Mi5qcGc",
    puntoPartida: "Calle Hermanos Rodriguez Nº34",
    puntoDestino: "Calle Aguacate Nº41",
    fecha: "12-12-2012",
    ultimoMensaje: "Hola, ¿a qué hora sales mañana?"
  }
  chat_2={
    nombre: "Carlos Acerado Cabreira",
    foto: "https://as01.epimg.net/epik/imagenes/2017/12/27/portada/1514386873_804665_1514386914_noticia_normal_recorte1.jpg",
    puntoPartida: "Calle Hermanos Rodriguez Nº34",
    puntoDestino: "Calle Aguacate Nº41",
    fecha: "15:39",
    ultimoMensaje: "Ya he llegado espero a que bajes"
  }
  chat_3={
    nombre: "Francisco Javier Miquel Leal",
    foto: "https://imgs.search.brave.com/UCaHk0ot7wjzmDQAV_lBrpmwsOM-jFTwY9encY5QYhs/rs:fit:375:375:1/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0M1/NjAzQVFHYW1XZTNL/QU5OT1EvcHJvZmls/ZS1kaXNwbGF5cGhv/dG8tc2hyaW5rXzgw/MF84MDAvMC8xNTg5/NDUzMTQxMTkxP2U9/MjE0NzQ4MzY0NyZ2/PWJldGEmdD15ZlJH/M1BnZENZdzZaOG92/M2tKYkY2NDc2Tm5l/N0RmOXJyTkxubHZ0/dS0w",
    puntoPartida: "Calle Hermanos Rodriguez Nº34",
    puntoDestino: "Calle Aguacate Nº41",
    fecha: "29-02-2022",
    ultimoMensaje: "Llego 5 minutos tarde, por el atasco"
  }
   chats = [this.chat_1, this.chat_2, this.chat_3];
}
