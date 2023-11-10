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
import { IncioComponent } from './incio/incio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from './formulario/formulario.component';
import { OfertaComponent } from './oferta/oferta.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IncioComponent,
    AcercaComponent,
    FooterComponent,
    FormularioComponent,
    OfertaComponent,
    LoginComponent,
    AdminComponent,
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
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
