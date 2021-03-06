import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenusComponent } from './componentes/menus/menus.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RestServiceService } from './rest-service.service';
import { CrudComponent } from './componentes/crud/crud.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { MostrarPComponent } from './componentes/mostrar-p/mostrar-p.component';
import { MostrarCComponent } from './componentes/mostrar-c/mostrar-c.component';
import { LocalstorageComponent } from './localstorage/localstorage.component';
import { GuisosComponent } from './componentes/guisos/guisos.component';
import { MostrarGComponent } from './componentes/mostrar-g/mostrar-g.component';
import { VendedorComponent } from './componentes/vendedor/vendedor.component';
import { BebidasComponent } from './componentes/bebidas/bebidas.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { MenuprivadoComponent } from './componentes/menuprivado/menuprivado.component';
import { DulcesComponent } from './componentes/dulces/dulces.component';
import { PapasComponent } from './componentes/papas/papas.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    MenusComponent,
    InicioComponent,
    CrudComponent,
    AdministradorComponent,
    CategoriasComponent,
    MostrarPComponent,
    MostrarCComponent,
    LocalstorageComponent,
    GuisosComponent,
    MostrarGComponent,
    VendedorComponent,
    BebidasComponent,
    ChatComponent,
    MenuprivadoComponent,
    DulcesComponent,
    PapasComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
