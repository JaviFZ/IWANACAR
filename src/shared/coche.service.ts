import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coche } from 'src/app/models/coche';

@Injectable({
  providedIn: 'root'
})
export class CocheService {
  public coche: Coche[];

  constructor(private httpClient:HttpClient) { 
   }

  get(id_conductor:number){
    return this.httpClient.get("https://iwanacar.cv6m2ktduioy.us-east-1.rds.amazonaws.com/coche",{params:{id_conductor}})
  }

  add(coche: Coche) {
  return this.httpClient.post("https://iwanacar.cv6m2ktduioy.us-east-1.rds.amazonaws.com/coche", coche)
  }

  delete(id_coche:number) {
    return this.httpClient.delete("https://iwanacar.cv6m2ktduioy.us-east-1.rds.amazonaws.com/coche",{body:{id_coche: id_coche}})

  }





// **************metodo para perfil2 **********************

  getCocheOtherUser(id_conductor:number){
    return this.httpClient.get("https://iwanacar.cv6m2ktduioy.us-east-1.rds.amazonaws.com/coche",{params:{id_conductor}})
  }

  // ************ fin metodos para el perfil2 *************
}
