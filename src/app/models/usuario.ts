import { Coche } from "./coche";

export class Usuario {
    public foto: string;
    public email: string;
    public nombre: string;
    public apellidos: string;
    public fechaDeNacimiento: string;
    public telefono: string;
    public genero: string;
    public puntuacionMedia: number;
    public sobreMi: string;
    public coches: Coche[];
    public id_usuario: number;
    public id_opinion: number;
    public password: string;
    public direccion: string;
    public fechaDeAlta: string;
    public tiempoDeEspera: string;



    constructor(nombre: string, apellidos: string, fechaDeNacimiento: string, email: string, password: string, direccion: string, telefono: string, genero: string, foto: string, sobreMi: string, fechaDeAlta: string, tiempoDeEspera: string, coches?: Coche[], puntuacionMedia?: number, id_usuario?: number, id_opinion?: number) {

        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.email = email;
        this.password = password;
        this.direccion = direccion;
        this.telefono = telefono;
        this.genero = genero;
        this.foto = foto;
        this.sobreMi = sobreMi;
        this.fechaDeAlta = fechaDeAlta;
        this.tiempoDeEspera = tiempoDeEspera;
        this.coches = coches;
        this.puntuacionMedia = puntuacionMedia;
        this.id_usuario = id_usuario;
        this.id_opinion = id_opinion;


    }



}
