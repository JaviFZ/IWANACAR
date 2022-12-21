import { Component } from '@angular/core';
import { Coche } from 'src/app/models/coche';


@Component({
  selector: 'app-mis-coches',
  templateUrl: './mis-coches.component.html',
  styleUrls: ['./mis-coches.component.css']
})
export class MisCochesComponent {
  public coche: Coche[];
  constructor() {
  }
  deleteCar(i:number){
    this.coche.splice(i,1);
  }
}
// export class LibrosComponent {
//   libros:Libro[];
//   // Inyectamos el serviceLibros en nuestro componento donde lo vamos a usar, para ello se indica en el contructor como un parametro 

//   constructor(private libroService: LibrosService, private usuarioService: UsuarioService) {
//     this.libroService.getAll(this.usuarioService.usuario.id_usuario).subscribe((libros:Libro[])=>this.libros = libros)
//    }
//   getlibros(id_libro: string) {
//     const userId= this.usuarioService.usuario.id_usuario;
//     if (id_libro === undefined || id_libro === "") {
//       this.libroService.getAll(userId).subscribe((libros:Libro[])=>this.libros = libros)
//     } else {
//      this.libroService.getOne(userId, parseInt(id_libro)).subscribe((libros:Libro[])=>this.libros = libros);
//     }
//   }
//   // quitamos los libros a mano ya que la llamada no los devuelve.
//   deleteLibro(id_libro: number){
//     this.libroService.delete(id_libro).subscribe(()=>{
//       // const indice= this.libros.findIndex((libro)=> libro.id_libro == id_libro)
//       // this.libros.splice(indice, 1)
//       this.libros = this.libros.filter( libro => libro.id_libro !=id_libro)
//    });
//   }
// }