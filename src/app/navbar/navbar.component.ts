import { Component } from '@angular/core';
import { AlertifyService } from 'src/app/service/aletify.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public alertifyservice:AlertifyService) { }
  ngOnInit() {
    
  }
    alerr(mensaje:string){
      this.alertifyservice.error(mensaje);
    }
    alsuc(mensaje:string){
      this.alertifyservice.success(mensaje);
    }
}
