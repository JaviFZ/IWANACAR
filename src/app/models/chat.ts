import { Usuario } from "./usuario";

export interface Chat {
    id_chat: number;
    mensajes: Mensaje[];
    otroUsuario: Usuario;

}

export class Mensaje {
    id_mensaje: number;
    id_chat: number;
    id_usuario: number;
    fecha: string;
    mensaje: string;

    constructor(id_chat: number, id_usuario: number, fecha: string, mensaje: string) {
        this.id_chat = id_chat;
        this.id_usuario = id_usuario;
        this.fecha = fecha;
        this.mensaje = mensaje;
    }
}