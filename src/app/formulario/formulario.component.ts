import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/aletify.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  ngOnInit(): void {
    this.alertify.success("Contenido cargado");
    console.log(this.formAlumno.invalid);
  }

  constructor(private httpform: HttpClient, public alertify: AlertifyService,private router: Router ) {}

  get id_estudiante() {
    return this.formAlumno.get('id_estudiante');
  }

  get contraseña() {
    return this.formAlumno.get('contraseña');
  }

  get validacion() {
    return this.formAlumno.get('validacion');
  }

  formAlumno = new FormGroup({
    "id_estudiante": new FormControl("", Validators.required),
    "contraseña": new FormControl("", Validators.required),
    "validacion": new FormControl("", Validators.required),
  });
  salir(){
    this.router.navigate(['/login']);
    localStorage.setItem('sesion', 'false');
  }
  registro() {
    if (this.contraseña.value === this.validacion.value) {
      let params = {
        id_Estudiante: this.id_estudiante.value,
        contraseña: this.contraseña.value
      };

      this.httpform.post("http://localhost:3000/registro", params).subscribe(
        result => {
          console.log(result);
          this.alertify.success("Registro realizado correctamente");
          this.router.navigate(['/login']);
          this.alertify.success("Puedes iniciar secion");          
        },
        error => {
          console.error('Error en la solicitud HTTP:', error);
          // Puedes agregar lógica adicional para manejar el error
          this.alertify.error("Error al realizar el registro");
        }
      );
    } else {
      this.alertify.error("Las contraseñas no coinciden");
    }
  }
}
