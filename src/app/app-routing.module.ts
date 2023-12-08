import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IncioComponent } from './inicio/incio.component';

import { FormularioComponent } from './formulario/formulario.component';
import { AdminComponent } from './admin/admin.component';
import { LoginService } from './service/login.service';
import { EstudianteComponent } from './estudiante/estudiante.component';

const routes: Routes = [
  /*{path:"inicio",component:IncioComponent,canActivate:[LoginService]},
  {path:"form",component:FormularioComponent,canActivate:[LoginService]},
  {path:"admin",component:AdminComponent,canActivate:[LoginService]},*/
  {path:"login",component:AppComponent},
  {path:"estudiante",component:EstudianteComponent},
  {path:"**",component:AppComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
