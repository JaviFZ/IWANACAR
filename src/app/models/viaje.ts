import { Time } from "@angular/common";

export class Viaje {
    public origen:string;
    public destino:string;
    public radio_busqueda:number;
    public habitual:boolean;
    public dia:string;
    public hora:string;
    public id_usuario:number;
    public id_coche:number;
    public precio:number;
    public fecha:Date;
    public pasajeros:Number;
    public paradas:boolean;
    public direccion_parada:string;

    constructor(){}
    
}