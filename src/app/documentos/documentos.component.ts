<<<<<<< HEAD
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnosService } from '../service/alumnos.service';
=======
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../service/aletify.service';
>>>>>>> 4b3f9e8e957edc5319de625d09fe8f8482c98ad0

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
<<<<<<< HEAD
export class DocumentosComponent {
  documentoForm: FormGroup;
  documentos: any[] = [];


  constructor(private fb: FormBuilder, private documentoService: AlumnosService) {
    this.documentoForm = this.fb.group({
      nombreDocumento: ['', Validators.required],
      descripcionDocumento: ['', Validators.required],
      descripcionSolicitud: ['', Validators.required],
      fechaSolicitud: ['', Validators.required],
      comentarios: ['', Validators.required],
      idTipo: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.documentoForm.valid) {
      const documentoData = this.documentoForm.value;
      this.documentoService.agregarDocumento(documentoData).subscribe(
        response => {
          console.log('Documento agregado correctamente', response);
          // Puedes realizar acciones adicionales aquí, como mostrar un mensaje de éxito al usuario.
        },
        error => {
          console.error('Error al agregar el documento', error);
          // Puedes manejar el error y mostrar un mensaje al usuario.
        }
      );
    }
  }

  ngOnInit(): void {
    this.cargarDocumentos();
  }
  
  cargarDocumentos() {
    this.documentoService.getDocumentos().subscribe(
      (data: any) => {
        this.documentos = data;
      },
      (error) => {
        console.error('Error al cargar documentos:', error);
      }
    );
  }

  eliminarDocumento(idDocumento: string) {
    this.documentoService.eliminarDocumento(idDocumento).subscribe(
      (response) => {
        console.log('Documento eliminado correctamente');
        this.cargarDocumentos();
      },
      (error) => {
        console.error('Error al eliminar el documento:', error);
      }
    );
  }
  
  

  
=======
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
>>>>>>> 4b3f9e8e957edc5319de625d09fe8f8482c98ad0
}
