import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/aletify.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  ngOnInit(): void {
    this.alertify.success("Contenido cargado");
    console.log(this.formAlumno.invalid);
  }
  constructor(private httpform: HttpClient, public alertify: AlertifyService) { }
  //Estudiante
  get nombre() {
    return this.formAlumno.get("nombre") as FormControl;
  }
  get apellido() {
    return this.formAlumno.get("apellido") as FormControl;
  }
  get curp() {
    return this.formAlumno.get("curp") as FormControl;
  }
  get fechan() {
    return this.formAlumno.get("fechan") as FormControl;
  }
  get genero() {
    return this.formAlumno.get("genero") as FormControl;
  }
  formAlumno = new FormGroup({
    //Alumno
    "nombre": new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z]+$/),]),
    "apellido": new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z]+$/),]),
    "curp": new FormControl("", [Validators.required, Validators.pattern(/^[A-Z]{4}[0-9]{6}[HM]{1}[A-Z]{5}[0-9]{2}$/),]),
    "fechan": new FormControl("", Validators.required),
    "genero": new FormControl("", Validators.required),
  });
  nuevoAspirante() {
    let paramsEstudiante = {
      // Estudiante
      Nombre: this.nombre.value,
      Apellidos: this.apellido.value,
      Fecha_Nacimiento: this.fechan.value,
      Sexo: this.genero.value,
      Curp: this.curp.value,
    };
    this.httpform.post("http://localhost:3000/estudiante", paramsEstudiante).subscribe(result => {
      console.log(result)
    });
    this.alertify.success("Los datos se han guardado correctamente");
  }
}
