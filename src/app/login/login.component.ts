import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/aletify.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  route="/login";
  ngOnInit(): void {
    this.alertify.modal("Zona de administradores\nEn caso de no ser uno salir porfavor");
    
  }
  constructor(public alertify:AlertifyService){
    var bandera="false";
  }
  get user(){
    return this.formUser.get("user") as FormControl;
  }
  get passw(){
    return this.formUser.get("passw") as FormControl;
  }
  formUser=new FormGroup({
    user:new FormControl("",Validators.required),
    passw:new FormControl("",Validators.required),

  })
  validar(){
    if(this.user.value==="Admin"&&this.passw.value==="flath"){
      this.route="/admin";
      this.alertify.success("La contraseña y el ususario son correctos");
    }
    else{
      this.alertify.error("La contraseña o usuario es incorrecto")
    }
  }

}
