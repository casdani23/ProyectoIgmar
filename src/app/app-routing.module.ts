import { NgModule } from '@angular/core';
import {RouterModule,Routes } from '@angular/router';
import {AppComponent } from './app.component';
import {RegistroComponent} from './componentes/registro/registro.component';
import {LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component'
import {CrudComponent} from './componentes/crud/crud.component'
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import {AdministradorComponent} from './componentes/administrador/administrador.component';
import {MostrarCComponent} from './componentes/mostrar-c/mostrar-c.component';
import { MostrarPComponent} from './componentes/mostrar-p/mostrar-p.component'
import { GuardGuard} from './guard.guard'




const routes: Routes = [
  // a path le pasamos una cadena que debe coincidir con la url del navegador
  //component le pasamos el componente que queremos que muestre path coincida con la url
  //en este caso mostrara lo que tiene el componente app.component
  {path:'inicio',component:InicioComponent},
  { path: 'app', component: AppComponent },
  { path:'registro',component:RegistroComponent},
  {path:'login',component:LoginComponent},
  {path: 'Producto',component:CrudComponent,canActivate:[GuardGuard]},
  {path:'administradorcategoria',component:CategoriasComponent},
  {path:
    'administrador',
    data:{
      rol:'administrador'
    },

    component:AdministradorComponent,
    canActivate:[GuardGuard]
},
  {path:'mostrarcategoria',component:MostrarCComponent,canActivate:[GuardGuard]},
  {path:'mostrarproducto',component:MostrarPComponent,canActivate:[GuardGuard]},





];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
