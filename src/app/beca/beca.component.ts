import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../service/aletify.service';

@Component({
  selector: 'app-beca',
  templateUrl: './beca.component.html',
  styleUrls: ['./beca.component.css']
})
export class BecaComponent implements OnInit{
  ngOnInit(): void {
    this.alertify.success("Contenido cargado");
    console.log(this.formAlumno.invalid);
  }
  constructor(private httpform: HttpClient, public alertify: AlertifyService) { }
   //Beca
   get fechaSolicitud() {
    return this.formAlumno.get('fechaSolicitud') as FormControl;
  }
  get estadoSolicitud() {
    return this.formAlumno.get('estadoSolicitud') as FormControl;
  }
  get comentarios() {
    return this.formAlumno.get('comentarios') as FormControl;
  }
  formAlumno = new FormGroup({
   //Beca
   'fechaSolicitud': new FormControl('', [Validators.required]),
   'estadoSolicitud': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/),]),
   'comentarios': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/),]),
  });
  nuevoAspirante() {
    let paramsBeca = {
      // Beca
      Fecha_Solicitud: this.fechaSolicitud.value,
      Estado_Solicitud: this.estadoSolicitud.value,
      Comentarios: this.comentarios.value,
    };
    this.httpform.post("http://localhost:3000/beca", paramsBeca).subscribe(result => {
      console.log(result)
    });
    this.alertify.success("Los datos se han guardado correctamente");
  }
}
