import { ChangeDetectorRef, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private changeDetector: ChangeDetectorRef){}
  //creamos una variable qaue va a tener una clase llamada BehaviorSubject que realiza el guardado del estado (esta valiable que estamos realizando es un obserbable)
  //BehaviorSubject le indicamos que el es estado que guarda es boolean (pero podria ser de cualquier tipo, incluso una clase creada por nosotros) y el valor que tendra de base ese boolean es false.
  menuAbierto = new BehaviorSubject<boolean>(false)
  onMenuClic = () => {
    // aqui cambiaremos el estado de BehaviorSubject con la funcion next, en este caso al ser un dato booleano le podemos indicar por parametro que su nuevo valor es contrario (!) a su valor actual (getValue())
    this.menuAbierto.next(!this.menuAbierto.getValue())
    this.changeDetector.detectChanges()
  }
}
