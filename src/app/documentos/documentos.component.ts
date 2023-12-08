import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnosService } from '../service/alumnos.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
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
  
  

  
}
