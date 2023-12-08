import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../service/aletify.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit{
  ngOnInit(): void {
    this.alertify.success("Contenido cargado");
    console.log(this.formAlumno.invalid);
  }
  constructor(private httpform: HttpClient, public alertify: AlertifyService) { }
  //Estado
  get nombreEstado() {
    return this.formAlumno.get('nombreEstado') as FormControl;
  }
  formAlumno = new FormGroup({
    ///Estado
    'nombreEstado': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/),]),
  });
  nuevoAspirante() {
    let paramsEstado = {
      // Estado
      Nombre: this.nombreEstado.value,
    };
    this.httpform.post("http://localhost:3000/estado", paramsEstado).subscribe(result => {
      console.log(result)
    });
    this.alertify.success("Los datos se han guardado correctamente");
  }
}
