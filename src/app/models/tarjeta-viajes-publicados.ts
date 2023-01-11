import { Usuario } from "./usuario";

export class TarjetaViajesPublicados {
    public hora:string;
    public fecha:string;
    public precio:Number;
    public origen: string;
    public destino: string;
    public id_viaje:number;
    public pasajeros: [];
    public foto: string;
    public nombre: string;
    constructor(){}
}
