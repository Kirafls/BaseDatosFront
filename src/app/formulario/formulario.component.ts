import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/aletify.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  ngOnInit(): void {
    this.alertify.success("Contenido cargado");
    console.log(this.formAlumno.invalid);
  }
  constructor(private httpform:HttpClient,public alertify:AlertifyService){
  }
  get nombre(){
    return this.formAlumno.get("nombre") as FormControl;
  }
  get apellido(){
    return this.formAlumno.get("apellido") as FormControl;
  }
  get promedio(){
    return this.formAlumno.get("promedio") as FormControl;
  }
  get prepa(){
    return this.formAlumno.get("prepa") as FormControl;
  }
  get fechan(){
    return this.formAlumno.get("fechan") as FormControl;
  }
  get carrera(){
    return this.formAlumno.get("carrera") as FormControl;
  }
  get genero(){
    return this.formAlumno.get("genero") as FormControl;
  }
  formAlumno=new FormGroup({
    "nombre":new FormControl("",Validators.required),
    "apellido":new FormControl("",Validators.required),
    "promedio":new FormControl("",Validators.required),
    "prepa": new FormControl("",Validators.required),
    "fechan": new FormControl("",Validators.required),
    "genero":new FormControl("",Validators.required),
    "carrera": new FormControl("",Validators.required),

  });
  nuevoAspirante(){
      let params={
        nombre:this.nombre.value,
        apellido:this.apellido.value,
        prepa:this.prepa.value,
        fecha:this.fechan.value,
        carrera:this.carrera.value,
        genero:this.genero.value,
        promedio:this.promedio.value
      }
      this.httpform.post("http://localhost:3000/nuevo",params).subscribe(result=>{
        console.log(result)
      });
      this.alertify.success("Los datos se han guardado correctamente");
      
    }
    
}
