import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  public urlAlumnos="http://localhost:3000/mostrar";
  constructor(public http:HttpClient) { }
  public getdata():Observable<any>{
    return this.http.get<any>(this.urlAlumnos);
  }
}
