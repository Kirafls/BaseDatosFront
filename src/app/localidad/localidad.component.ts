import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../service/aletify.service';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.css']
})
export class LocalidadComponent implements OnInit{
  ngOnInit(): void {
    this.alertify.success("Contenido cargado");
    console.log(this.formAlumno.invalid);
  }
  constructor(private httpform: HttpClient, public alertify: AlertifyService) { }
  //Localidad
  get nombreLocalidad() {
    return this.formAlumno.get('nombreLocalidad') as FormControl;
  }
  formAlumno = new FormGroup({
    ///Localidad
    'nombreLocalidad': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/),]),
  });
  nuevoAspirante() {
    let paramsLocalidad = {
      //Localidad
      Nombre: this.nombreLocalidad.value,
    };
    this.httpform.post("http://localhost:3000/localidad", paramsLocalidad).subscribe(result => {
      console.log(result)
    });
    this.alertify.success("Los datos se han guardado correctamente");
  }
}
