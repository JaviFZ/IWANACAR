import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Viaje } from 'src/app/models/viaje';
import { ViajeService } from 'src/shared/viaje.service';

@Component({
  selector: 'app-crear-viaje1',
  templateUrl: './crear-viaje1.component.html',
  styleUrls: ['./crear-viaje1.component.css']
})
export class CrearViaje1Component {
 constructor(public viaje:ViajeService){}
}
