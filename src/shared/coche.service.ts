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
    return this.httpClient.get("https://apiwana-production.up.railway.app/coche",{params:{id_conductor}})
  }

  add(coche: Coche) {
  return this.httpClient.post("https://apiwana-production.up.railway.app/coche", coche)
  }

  delete(id_coche:number) {
    return this.httpClient.delete("https://apiwana-production.up.railway.app/coche",{body:{id_coche: id_coche}})

  }
}
