export class Opinion {
    public id_opinion: number;
    public id_pasajero: number;
    public id_viaje: number;
    public opinion: string;
    public puntuacion: number;

        constructor(opinion: string, puntuacion: number, id_opinion: number, id_pasajero: number, id_viaje: number ){
            this.opinion = opinion,
            this.puntuacion = puntuacion,
            this.id_opinion = id_opinion,
            this.id_pasajero = id_pasajero,
            this.id_viaje = id_viaje
        }
}
