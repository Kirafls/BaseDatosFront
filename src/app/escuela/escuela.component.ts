import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../service/aletify.service';

@Component({
  selector: 'app-escuela',
  templateUrl: './escuela.component.html',
  styleUrls: ['./escuela.component.css']
})
export class EscuelaComponent implements OnInit {
  ngOnInit(): void {
    this.alertify.success("Contenido cargado");
    console.log(this.formAlumno.invalid);
  }
  constructor(private httpform: HttpClient, public alertify: AlertifyService) { }
  //Escuela
  get nombreEscuela() {
    return this.formAlumno.get('nombreEscuela') as FormControl;
  }
  get direccionEscuela() {
    return this.formAlumno.get('direccionEscuela') as FormControl;
  }
  formAlumno = new FormGroup({
    //Escuela
    'nombreEscuela': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/),]),
    'direccionEscuela': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]*$/),]),
  });
  nuevoAspirante() {
    let paramsEscuela = {
      // Escuela
      Nombre_Escuela: this.nombreEscuela.value,
      Direccion: this.direccionEscuela.value,
    };
    this.httpform.post("http://localhost:3000/escuela", paramsEscuela).subscribe(result => {
      console.log(result)
    });
    this.alertify.success("Los datos se han guardado correctamente");
  }
}
