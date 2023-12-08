import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertifyService } from './service/aletify.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './navbar/navbar.component';
import { MatTabsModule } from '@angular/material/tabs'; 
import { HttpClientModule } from '@angular/common/http';
import { IncioComponent } from './inicio/incio.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AdminComponent } from './admin/admin.component';
import { LoginService } from './service/login.service';
import { RegistroComponent } from './registro/registro.component';
import { BecaComponent } from './beca/beca.component';
import { DireccionComponent } from './direccion/direccion.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { EscuelaComponent } from './escuela/escuela.component';
import { EstadoComponent } from './estado/estado.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { LocalidadComponent } from './localidad/localidad.component';
import { MedComunicacionComponent } from './med-comunicacion/med-comunicacion.component';
import { MunicipioComponent } from './municipio/municipio.component';
import { TipoBecaComponent } from './tipo-beca/tipo-beca.component';
import { TutorComponent } from './tutor/tutor.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IncioComponent,
    
    FooterComponent,
    FormularioComponent,
    AdminComponent,
    RegistroComponent,
    BecaComponent,
    DireccionComponent,
    DocumentosComponent,
    EscuelaComponent,
    EstadoComponent,
    EstudianteComponent,
    LocalidadComponent,
    MedComunicacionComponent,
    MunicipioComponent,
    TipoBecaComponent,
    TutorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatTabsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
  ],
  providers: [
    AlertifyService,
    HttpClientModule,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
