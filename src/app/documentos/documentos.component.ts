import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../service/aletify.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit{
  ngOnInit(): void {
    this.alertify.success("Contenido cargado");
    console.log(this.formAlumno.invalid);
  }
  constructor(private httpform: HttpClient, public alertify: AlertifyService) { }
   //Documentos
  get nombreDocumento() {
    return this.formAlumno.get('nombreDocumento') as FormControl;
  }
  get descripcionDocumento() {
    return this.formAlumno.get('descripcionDocumento') as FormControl;
  }
  formAlumno = new FormGroup({
   //Documentos
   'nombreDocumento': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/),]),
   'descripcionDocumento': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/),]),
  });
  nuevoAspirante() {
    let paramsDocumentos = {
      // Documentos
      Nombre: this.nombreDocumento.value,
      Descripcion: this.descripcionDocumento.value,
    };
    this.httpform.post("http://localhost:3000/documentos", paramsDocumentos).subscribe(result => {
      console.log(result)
    });
    this.alertify.success("Los datos se han guardado correctamente");
  }
}
