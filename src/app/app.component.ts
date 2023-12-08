import { Component, OnInit } from '@angular/core';
import { AlertifyService } from './service/aletify.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Becas del bienestar';
  sesion: boolean = false;

  constructor(public alertify: AlertifyService, private router: Router, private httpform: HttpClient) {}

  formUser = new FormGroup({
    user: new FormControl("", [Validators.required, Validators.pattern(/^\d+$/)]),
    passw: new FormControl("", Validators.required),
  });

  ngOnInit(): void {
    this.setLogin(false);
    localStorage.setItem('sesion', 'false');
  }

  get user() {
    return this.formUser.get("user") as FormControl;
  }

  get passw() {
    return this.formUser.get("passw") as FormControl;
  }

  validar() {
    let params = {
      id_Cuenta: this.user.value,
      contrasena: this.passw.value
    };

    this.httpform.post("http://localhost:3000/login", params).subscribe(
      ({ comfirm,id_estudiante}: any) => {
        console.log(comfirm);
        console.log(id_estudiante);
        if (confirm) {
          // Utiliza el servicio de Router para navegar a la nueva ruta
          this.router.navigate(['/inicio']);
          this.alertify.success("Bienvenido");
          this.setLogin(true);
          localStorage.setItem('sesion', 'true');
          localStorage.setItem('id_est', id_estudiante); // Se recupera de la consulta en base a esta se manejan los datos generales como la llave principal
        } else {
          this.alertify.error("La contraseña o usuario es incorrecto");
        }
      },
      (error) => {
        console.error('Error en la solicitud HTTP:', error);
        // Agrega lógica adicional si es necesario
      }
    );
  }

  registro() {
    // this.route=registro
    // se implementa después 
  }

  login(): boolean {
    return this.sesion;
  }

  setLogin(estado: boolean) {
    this.sesion = estado;
  }
}