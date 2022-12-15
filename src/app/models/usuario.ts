import { Coche } from "./coche";

export class Usuario {
    public email:string;
    public nomnre:string;
    public apellido:string;
    public fecha_nacimiento:Date;
    public telefono:string;
    public genero:string;
    public valoracion:number;
    public descripcion:string;
    public coches:Coche[];
    
    constructor(){}
}
