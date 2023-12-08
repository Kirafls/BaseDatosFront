import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from '../service/aletify.service';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent {
  ngOnInit(): void {
    this.alertify.success("Contenido cargado");
    console.log(this.formAlumno.invalid);
  }
  constructor(private httpform: HttpClient, public alertify: AlertifyService) { }
   //Tutor
   get nombreTutor() {
    return this.formAlumno.get('nombreTutor') as FormControl;
  }
  get apellidoTutor() {
    return this.formAlumno.get('apellidoTutor') as FormControl;
  }
  get telefonoTutor() {
    return this.formAlumno.get('telefonoTutor') as FormControl;
  }
  get correoTutor() {
    return this.formAlumno.get('correoTutor') as FormControl;
  }
  formAlumno = new FormGroup({
    //Tutor
    'nombreTutor': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/),]),
    'apellidoTutor': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/),]),
    'telefonoTutor': new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/),]),
    'correoTutor': new FormControl('', [Validators.required, Validators.email,]),
  });
  nuevoAspirante() {
    let paramsTutor = {
      // Tutor
      Nombre: this.nombreTutor.value,
      Apellido: this.apellidoTutor.value,
      Telefono: this.telefonoTutor.value,
      Correo: this.correoTutor.value,
    };
    this.httpform.post("http://localhost:3000/tutor", paramsTutor).subscribe(result => {
      console.log(result)
    });
    this.alertify.success("Los datos se han guardado correctamente");
  }
}
