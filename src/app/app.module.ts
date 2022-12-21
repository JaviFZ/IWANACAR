import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { BuscarViajeComponent } from './pages/buscar-viaje/buscar-viaje.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { TarjetaViajeComponent } from './components/tarjeta-viaje/tarjeta-viaje.component';
import { ResultadosBusquedaComponent } from './pages/resultados-busqueda/resultados-busqueda.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SolicitarViajeComponent } from './pages/solicitar-viaje/solicitar-viaje.component';
import { HistoricoViajesComponent } from './pages/historico-viajes/historico-viajes.component';
import { ViajesPublicadosComponent } from './pages/viajes-publicados/viajes-publicados.component';
import { MenuHamburguesaComponent } from './pages/menu-hamburguesa/menu-hamburguesa.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { MisCochesComponent } from './pages/mis-coches/mis-coches.component';
import { AnadirCocheComponent } from './pages/anadir-coche/anadir-coche.component';
import { CrearViajeComponent } from './pages/crear-viaje/crear-viaje.component';
import { CrearViaje1Component } from './components/crear-viaje1/crear-viaje1.component';
import { CrearViaje2Component } from './components/crear-viaje2/crear-viaje2.component';
import { CrearViaje3Component } from './components/crear-viaje3/crear-viaje3.component';
import { PublicarViajeComponent } from './pages/publicar-viaje/publicar-viaje.component';
import { ViajePublicadoComponent } from './pages/viaje-publicado/viaje-publicado.component';
import { HistoricoChatsComponent } from './pages/historico-chats/historico-chats.component';
import { ChatsAbiertosComponent } from './pages/chats-abiertos/chats-abiertos.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MenuBurguerComponent } from './components/menu-burguer/menu-burguer.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        RegistroComponent,
        BuscarViajeComponent,
        MapaComponent,
        TarjetaViajeComponent,
        ResultadosBusquedaComponent,
        PerfilComponent,
        SolicitarViajeComponent,
        HistoricoViajesComponent,
        ViajesPublicadosComponent,
        MenuHamburguesaComponent,
        EditarPerfilComponent,
        MisCochesComponent,
        AnadirCocheComponent,
        CrearViajeComponent,
        CrearViaje1Component,
        CrearViaje2Component,
        CrearViaje3Component,
        PublicarViajeComponent,
        ViajePublicadoComponent,
        HistoricoChatsComponent,
        ChatsAbiertosComponent,
        SobreNosotrosComponent,
        ContactoComponent,
        MenuBurguerComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ]
})
export class AppModule { }
