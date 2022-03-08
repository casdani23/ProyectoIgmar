import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenusComponent } from './componentes/menus/menus.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RestServiceService } from './rest-service.service';
import { CrudComponent } from './componentes/crud/crud.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    MenusComponent,
    InicioComponent,
    CrudComponent,
    AdministradorComponent,
    
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
