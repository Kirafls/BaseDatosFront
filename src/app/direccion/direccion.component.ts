import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../service/aletify.service';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit{
  ngOnInit(): void {
    this.alertify.success("Contenido cargado");
    console.log(this.formAlumno.invalid);
  }
  constructor(private httpform: HttpClient, public alertify: AlertifyService) { }
  //Direccion
  get calle() {
    return this.formAlumno.get('calle') as FormControl;
  }
  get noExt() {
    return this.formAlumno.get('noExt') as FormControl;
  }
  get noInt() {
    return this.formAlumno.get('noInt') as FormControl;
  }
  get fraccionamiento() {
    return this.formAlumno.get('fraccionamiento') as FormControl;
  }
  formAlumno = new FormGroup({
   //Direccion
   'calle': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]+$/),]),
   'noExt': new FormControl('', [Validators.required, Validators.pattern(/^\d+$/),]),
   'noInt': new FormControl('', [Validators.pattern(/^\d+$/),]),
   'fraccionamiento': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]+$/),]),
  });
  nuevoAspirante() {
    let paramsDireccion = {
      // Direccion
      Calle: this.calle.value,
      No_Ext: this.noExt.value,
      No_Int: this.noInt.value,
      Fraccionamiento: this.fraccionamiento.value,
    };
    this.httpform.post("http://localhost:3000/direccion", paramsDireccion).subscribe(result => {
      console.log(result)
    });
    this.alertify.success("Los datos se han guardado correctamente");
  }
}
