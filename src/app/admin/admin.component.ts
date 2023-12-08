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
 
  constructor(public alertify:AlertifyService,public alumnos:AlumnosService,public http:HttpClient){
  }
    
  ngOnInit(): void {
    
  }
  
}
