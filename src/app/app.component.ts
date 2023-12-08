import { Component, OnInit } from '@angular/core';
import { AlertifyService } from './service/aletify.service';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Becas del bienestar';
  sesion: boolean=false;
  route="/inicio";
  ngOnInit(): void {
    this.alertify.modal("Bienvenido");
    this.setlogin(false);
    localStorage.setItem('sesion', 'false');
    
  }
  constructor(public alertify:AlertifyService,private loginservice:LoginService){

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
      this.route="/inicio";
      this.alertify.success("La contraseña y el usuario son correctos");
      this.sesion=true;
      localStorage.setItem('sesion', 'true');
    }
    else{
      this.alertify.error("La contraseña o usuario es incorrecto")
    }

  }
  login():boolean{
    return this.sesion;
  }
  setlogin(estado:boolean){
    this.sesion=estado;
    
  }
  
}
