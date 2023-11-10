import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/aletify.service';
import { AlumnosService } from '../service/alumnos.service';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  data:any[]=[];
  constructor(public alertify:AlertifyService,public alumnos:AlumnosService,public http:HttpClient){
  }
  alumno=new FormControl("",Validators.required);  
  ngOnInit(): void {
    this.buscarAlumnos();
  }
  buscarAlumnos(){
      this.alumnos.getdata().subscribe(data=>{
      this.data=data;
      console.log(this.data);
      })
  }
  index=0;
  aux=0;
  buscarAlumno(){
    if(this.alumno.valid){    
      console.log(this.alumno.value);
      this.index= this.data.indexOf(this.data.find(x => x.ID ==this.alumno.value));
      console.log(this.data[this.index]);
      this.aux=this.data[this.index]
      if(this.index!=-1){
        this.alertify.success("Se encontro el alumno");
        let params={
          id:this.alumno.value
        }
        this.http.post("http://localhost:3000/eliminar",params).subscribe(result=>{
          console.log(result)
        });
        this.alertify.error("El Alumno ha sido eliminado Correctamente");
      }
      else{
        this.alertify.error("No se encontro el alumno");
      }  
    }
  }
}
