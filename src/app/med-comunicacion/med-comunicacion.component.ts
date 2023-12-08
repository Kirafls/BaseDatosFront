import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../service/aletify.service';

@Component({
  selector: 'app-med-comunicacion',
  templateUrl: './med-comunicacion.component.html',
  styleUrls: ['./med-comunicacion.component.css']
})
export class MedComunicacionComponent implements OnInit{
  ngOnInit(): void {
    this.alertify.success("Contenido cargado");
    console.log(this.formAlumno.invalid);
  }
  constructor(private httpform: HttpClient, public alertify: AlertifyService) { }
  //Medio de comunicacion
  get correoMedioComunicacion() {
    return this.formAlumno.get('correoMedioComunicacion') as FormControl;
  }
  get telefonoMedioComunicacion() {
    return this.formAlumno.get('telefonoMedioComunicacion') as FormControl;
  }
  get telefonoAlternoMedioComunicacion() {
    return this.formAlumno.get('telefonoAlternoMedioComunicacion') as FormControl;
  }
  formAlumno = new FormGroup({
    //Medio de comunicacion
    'correoMedioComunicacion': new FormControl('', [Validators.required, Validators.email,]),
    'telefonoMedioComunicacion': new FormControl('', [Validators.required, Validators.pattern(/^\d{10,}$/),]),
    'telefonoAlternoMedioComunicacion': new FormControl('', [Validators.pattern(/^\d{10,}$/),]),
  });
  nuevoAspirante() {
    let paramsMedioCom = {
      // Medio de Comunicación
      correo: this.correoMedioComunicacion.value,
      telefono: this.telefonoMedioComunicacion.value,
      telefono_Alterno: this.telefonoAlternoMedioComunicacion.value,
    };
    this.httpform.post("http://localhost:3000/medio_comunicacion", paramsMedioCom).subscribe(result => {
      console.log(result)
    });
    this.alertify.success("Los datos se han guardado correctamente");
  }
}
