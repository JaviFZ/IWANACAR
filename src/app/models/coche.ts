export class Coche {
    public marca:string;
    public modelo:string;
    public matricula:string;
    public color:string;
    public combustible:string;
    public preferencias:[];
    constructor(){
        this.preferencias = [];
    }
}
