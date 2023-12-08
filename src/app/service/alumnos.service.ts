import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  public urlAlumnos="http://localhost:3000";
  constructor(public http:HttpClient) { }

  public getdata():Observable<any>{
    return this.http.get<any>(this.urlAlumnos);
  }

  
  agregarDocumento(documentoData: any): Observable<any> {
    return this.http.post("http://localhost:3000/agregarDocumento", documentoData);
  }

  public getDocumentos(): Observable<any> {
    return this.http.get<any>(`${this.urlAlumnos}/mostrarDocumentos`);
  }
  eliminarDocumento(idDocumento: string): Observable<any> {
    return this.http.post(`${this.urlAlumnos}/eliminarDocumento`, { idDocumento });
  }
  

}
