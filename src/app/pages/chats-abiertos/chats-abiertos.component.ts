import { Component } from '@angular/core';

@Component({
  selector: 'app-chats-abiertos',
  templateUrl: './chats-abiertos.component.html',
  styleUrls: ['./chats-abiertos.component.css']
})
export class ChatsAbiertosComponent {
chat ={
  nombre: "Francisco Javier Miquel Leal",
  foto: "https://imgs.search.brave.com/UCaHk0ot7wjzmDQAV_lBrpmwsOM-jFTwY9encY5QYhs/rs:fit:375:375:1/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0M1/NjAzQVFHYW1XZTNL/QU5OT1EvcHJvZmls/ZS1kaXNwbGF5cGhv/dG8tc2hyaW5rXzgw/MF84MDAvMC8xNTg5/NDUzMTQxMTkxP2U9/MjE0NzQ4MzY0NyZ2/PWJldGEmdD15ZlJH/M1BnZENZdzZaOG92/M2tKYkY2NDc2Tm5l/N0RmOXJyTkxubHZ0/dS0w",
  mensajes:[{texto:" Hola, ¿a qué hora sales mañana?", fecha:"21:29", propio:false},
            {texto:" buenos tardes, saldre a las 6 AM", fecha:"21:30", propio:true},
            {texto:" perfecto", fecha:"21:33", propio:false},
            {texto:" podrias recogerme una manzana despues", fecha:"21:33", propio:false},
            {texto:" seria en Calle Hermanas Ramirez Nº3 en lugar de Calle Hermanos Rodriguez Nº34", fecha:"21:34", propio:false},
            {texto:" Vale, no habria problema", fecha:"21:36", propio:true},
            {texto:" Genia! muchas gracias.", fecha:"21:37", propio:false},
            {texto:" Buenos dias, llego 5 minutos tarde, por el atasco", fecha:"05:56", propio:true},
            {texto:" Ok! gracias por habisar", fecha:"05:58", propio:false},
            {texto:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aperiam impedit tempora quos nam officiis nesciunt explicabo harum perspiciatis reprehenderit, architecto sequi adipisci, voluptatem qui assumenda inventore odio quae ex.", fecha:"6:07", propio:true},
            {texto:" Ups disculpa, se me ha escapado un Lorem.", fecha:"06:07", propio:true},
],

}
public nuevoMensaje(mensaje:string){
  this.chat.mensajes.push({texto: mensaje, fecha:"06:07", propio:true});
}
}
  
