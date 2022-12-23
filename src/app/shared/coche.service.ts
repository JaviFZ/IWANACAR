import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coche } from 'src/app/models/coche';

@Injectable({
  providedIn: 'root'
})
export class CocheService {
private coche: Coche[];

  constructor(private httpClient:HttpClient) {  }

  get(id_conductor:number){
    return this.httpClient.get("http://localhost:3000/coche",{params:{id_conductor}})
  }

add(coche: Coche) {
  return this.httpClient.post("http://localhost:3000/coche", coche)
  }

  delete(id_coche:number) {
    return this.httpClient.delete("http://localhost:3000/coche",{body:{id_coche: id_coche}})

  }
}
