import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IncioComponent } from './inicio/incio.component';

import { FormularioComponent } from './formulario/formulario.component';
import { AdminComponent } from './admin/admin.component';
import { LoginService } from './service/login.service';
import { EstudianteComponent } from './estudiante/estudiante.component';

const routes: Routes = [
  {path:"inicio",component:IncioComponent,canActivate:[LoginService]},
  {path:"form",component:FormularioComponent},
  {path:"admin",component:AdminComponent,canActivate:[LoginService]},
  {path:"estudiante",component:EstudianteComponent,canActivate:[LoginService]},
  {path:"escuela",component:EstudianteComponent,canActivate:[LoginService]},
  
  {path:"login",component:AppComponent},
  {path:"**",component:AppComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
