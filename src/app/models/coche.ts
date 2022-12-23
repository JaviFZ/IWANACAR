export class Coche {
    public id_coche:number;
    public id_conductor:number;
    public nombreCoche:string;
    public marca:string;
    public modelo:string;
    public matricula:string;
    public combustible:string;
    public color:string;
    public fumar:string;
    public mascotas:string;
    constructor(nombreCoche: string, marca: string, modelo: string, matricula: string, combustible: string, color: string, fumar: string, mascotas: string, id_conductor?:number, id_coche?:number) {
        this.nombreCoche = nombreCoche;
        this.marca = marca;
        this.modelo = modelo;
        this.matricula = matricula;
        this.combustible = combustible,
        this.color = color; 
        this.fumar = fumar;
        this.mascotas = mascotas;
        this.id_conductor = id_conductor;
        this.id_coche = id_coche;
    }
}
