import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anadir-coche',
  templateUrl: './anadir-coche.component.html',
  styleUrls: ['./anadir-coche.component.css']
})
export class AnadirCocheComponent {

  public marca : string;
  public modelo : string;
  public matricula : string;
  public color : string;
  public combustible : string;
  public fumar : boolean;
  public mascotas : boolean;
  public desvios : boolean;
  public tiempo : string;

  constructor(private router : Router) { 
    this.marca = "Seat";
    this.modelo = "Ibiza";
    this.matricula = "1234ABC";
    this.color = "Rojo";
    this.combustible = "Gasolina";
    this.fumar = true;
    this.mascotas = true;
    this.desvios = true;
    this.tiempo = "5min";

}
public ValidateCar (marca, modelo, matricula, color, combustible, fumar, mascotas, desvios, tiempo){
  if(marca == this.marca && modelo == this.modelo && matricula == this.matricula && color == this.color && combustible == this.combustible && fumar == this.fumar && mascotas == this.mascotas && desvios == this.desvios && tiempo == this.tiempo){
    this.router.navigateByUrl('/misCoches');
  }
  else{
    console.log("Todos los Datos deben ser rellenados");
  }
}

}

//hacer que todos los campos sean obligatorios
