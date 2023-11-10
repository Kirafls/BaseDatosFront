import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../service/aletify.service';
@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit{
  
  constructor(private http:HttpClient,public alertifyService:AlertifyService){

  }
  ngOnInit(): void {
    this.alertifyService.success("Contenido cargado")
  }
  get nombre(){
    return this.formUser.get("nombre") as FormControl; 
  }
  get apellido(){
    return this.formUser.get("apellido") as FormControl; 
  }
  get email(){
    return this.formUser.get("email") as FormControl; 
  }  
  formUser=new FormGroup({
      "nombre":new FormControl("",Validators.required),
      "apellido":new FormControl("",Validators.required),
      "email":new FormControl("",[Validators.required,Validators.email]),
    })
    /*nombre=new FormControl("",Validators.required);
    apellido=new FormControl("",Validators.required);
    email=new FormControl("",[Validators.required,Validators.email]);*/
    enviar(){
      //this.alertifyService.success("Tu correo ha sido enviado")
      let params={
        email:this.email.value,
      }
      this.http.post("http://localhost:3000/envio",params).subscribe(result=>{
        console.log(result);
      });
      this.alertifyService.success("Se ha enviado un correo a la cuenta:  "+this.email.value);
      this.formUser.clearValidators;
   }
}
