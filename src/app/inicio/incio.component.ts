import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/aletify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incio',
  templateUrl: './incio.component.html',
  styleUrls: ['./incio.component.css']
})
export class IncioComponent implements OnInit {
  
  ngOnInit(): void {
    this.confirmar();
  }
  constructor(public alertifyService:AlertifyService,public router:Router){

  }
  confirmar(){
    this.alertifyService.success("Inicio Cargado");
  }
  boton(){
    this.alertifyService.modal("Llena el formulario");
  }
    
}
