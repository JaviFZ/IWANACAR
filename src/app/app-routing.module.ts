import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearViaje1Component } from './components/crear-viaje1/crear-viaje1.component';
import { CrearViaje2Component } from './components/crear-viaje2/crear-viaje2.component';
import { CrearViaje3Component } from './components/crear-viaje3/crear-viaje3.component';
import { CrearViaje4Component } from './components/crear-viaje4/crear-viaje4.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { TarjetaViajeComponent } from './components/tarjeta-viaje/tarjeta-viaje.component';
import { AnadirCocheComponent } from './pages/anadir-coche/anadir-coche.component';
import { BuscarViajeComponent } from './pages/buscar-viaje/buscar-viaje.component';
import { ChatsAbiertosComponent } from './pages/chats-abiertos/chats-abiertos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CrearViajeComponent } from './pages/crear-viaje/crear-viaje.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { HistoricoChatsComponent } from './pages/historico-chats/historico-chats.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuHamburguesaComponent } from './pages/menu-hamburguesa/menu-hamburguesa.component';
import { MisCochesComponent } from './pages/mis-coches/mis-coches.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PublicarViajeComponent } from './pages/publicar-viaje/publicar-viaje.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ResultadosBusquedaComponent } from './pages/resultados-busqueda/resultados-busqueda.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { SolicitarViajeComponent } from './pages/solicitar-viaje/solicitar-viaje.component';
import { ViajePublicadoComponent } from './pages/viaje-publicado/viaje-publicado.component';
import { ViajesPublicadosComponent } from './pages/viajes-publicados/viajes-publicados.component';

const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "anadirCoche", component:AnadirCocheComponent},
  {path: "buscarViaje", component:BuscarViajeComponent},
  {path: "ChatsAbiertos", component:ChatsAbiertosComponent},
  {path: "contacto", component:ContactoComponent},
  {path: "crearViaje", component:CrearViajeComponent},
  {path: "editarPerfil", component:EditarPerfilComponent},
  {path: "historicoChats", component:HistoricoChatsComponent},
  {path: "home", component:HomeComponent},
  {path: "login", component:LoginComponent},
  {path: "menuHamburguesa", component:MenuHamburguesaComponent},
  {path: "misCoches", component:MisCochesComponent},
  {path: "perfil", component:PerfilComponent},
  {path: "publicarViaje", component:PublicarViajeComponent},
  {path: "registro", component:RegistroComponent},
  {path: "resultadosBusqueda", component:ResultadosBusquedaComponent},
  {path: "sobreNosotros", component:SobreNosotrosComponent},
  {path: "solicitarViaje", component:SolicitarViajeComponent},
  {path: "viajePublicado", component:ViajePublicadoComponent},
  {path: "viajesPublicados", component:ViajesPublicadosComponent},
  {path: "crearViaje1", component:CrearViaje1Component},
  {path: "crearViaje2", component:CrearViaje2Component},
  {path: "crearViaje3", component:CrearViaje3Component},
  {path: "crearViaje4", component:CrearViaje4Component},
  {path: "footer", component:FooterComponent},
  {path: "header", component:HeaderComponent},
  {path: "mapa", component:MapaComponent},
  {path: "tarjetaViaje", component:TarjetaViajeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }