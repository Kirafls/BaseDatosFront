import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../service/aletify.service';

@Component({
  selector: 'app-tipo-beca',
  templateUrl: './tipo-beca.component.html',
  styleUrls: ['./tipo-beca.component.css']
})
export class TipoBecaComponent implements OnInit{
  ngOnInit(): void {
    this.alertify.success("Contenido cargado");
    console.log(this.formAlumno.invalid);
  }
  constructor(private httpform: HttpClient, public alertify: AlertifyService) { }
    //Tipo de Beca
  get nombreTipoBeca() {
    return this.formAlumno.get('nombreTipoBeca') as FormControl;
  }
  get descripcionTipoBeca() {
    return this.formAlumno.get('descripcionTipoBeca') as FormControl;
  }
  formAlumno = new FormGroup({
   //Tipo de Beca
   'nombreTipoBeca': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/),]),
   'descripcionTipoBeca': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/),]),
  });
  nuevoAspirante() {
    let paramsTipoBeca = {
      // Tipo de Beca
      Nombre: this.nombreTipoBeca.value,
      Descripcion: this.descripcionTipoBeca.value,
    };
    this.httpform.post("http://localhost:3000/tipo_beca", paramsTipoBeca).subscribe(result => {
      console.log(result)
    });
    this.alertify.success("Los datos se han guardado correctamente");
  }
}
