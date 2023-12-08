import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../service/aletify.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  ngOnInit(): void {
    this.alertify.success("Contenido cargado");
    console.log(this.formAlumno.invalid);
  }
  constructor(private httpform: HttpClient, public alertify: AlertifyService) { }
  //Estudiante
  get nombre() {
    return this.formAlumno.get("nombre") as FormControl;
  }
  get apellido() {
    return this.formAlumno.get("apellido") as FormControl;
  }
  get curp() {
    return this.formAlumno.get("curp") as FormControl;
  }
  get fechan() {
    return this.formAlumno.get("fechan") as FormControl;
  }
  get genero() {
    return this.formAlumno.get("genero") as FormControl;
  }
  //Tutor
  get nombreTutor() {
    return this.formAlumno.get('nombreTutor') as FormControl;
  }
  get apellidoTutor() {
    return this.formAlumno.get('apellidoTutor') as FormControl;
  }
  get telefonoTutor() {
    return this.formAlumno.get('telefonoTutor') as FormControl;
  }
  get correoTutor() {
    return this.formAlumno.get('correoTutor') as FormControl;
  }
  //Escuela
  get nombreEscuela() {
    return this.formAlumno.get('nombreEscuela') as FormControl;
  }
  get direccionEscuela() {
    return this.formAlumno.get('direccionEscuela') as FormControl;
  }
  //Medio de comunicacion
  get correoMedioComunicacion() {
    return this.formAlumno.get('correoMedioComunicacion') as FormControl;
  }
  get telefonoMedioComunicacion() {
    return this.formAlumno.get('telefonoMedioComunicacion') as FormControl;
  }
  get telefonoAlternoMedioComunicacion() {
    return this.formAlumno.get('telefonoAlternoMedioComunicacion') as FormControl;
  }
  //Estado, Municipio y localidad
  get nombreEstado() {
    return this.formAlumno.get('nombreEstado') as FormControl;
  }
  get nombreMunicipio() {
    return this.formAlumno.get('nombreMunicipio') as FormControl;
  }
  get nombreLocalidad() {
    return this.formAlumno.get('nombreLocalidad') as FormControl;
  }
  //Direccion
  get calle() {
    return this.formAlumno.get('calle') as FormControl;
  }
  get noExt() {
    return this.formAlumno.get('noExt') as FormControl;
  }
  get noInt() {
    return this.formAlumno.get('noInt') as FormControl;
  }
  get fraccionamiento() {
    return this.formAlumno.get('fraccionamiento') as FormControl;
  }
  //Beca
  get fechaSolicitud() {
    return this.formAlumno.get('fechaSolicitud') as FormControl;
  }
  get estadoSolicitud() {
    return this.formAlumno.get('estadoSolicitud') as FormControl;
  }
  get comentarios() {
    return this.formAlumno.get('comentarios') as FormControl;
  }
  //Documentos
  get nombreDocumento() {
    return this.formAlumno.get('nombreDocumento') as FormControl;
  }
  get descripcionDocumento() {
    return this.formAlumno.get('descripcionDocumento') as FormControl;
  }
  //Tipo de Beca
  get nombreTipoBeca() {
    return this.formAlumno.get('nombreTipoBeca') as FormControl;
  }
  get descripcionTipoBeca() {
    return this.formAlumno.get('descripcionTipoBeca') as FormControl;
  }

  formAlumno = new FormGroup({
    //Alumno
    "nombre": new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z]+$/),]),
    "apellido": new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z]+$/),]),
    "curp": new FormControl("", [Validators.required, Validators.pattern(/^[A-Z]{4}[0-9]{6}[HM]{1}[A-Z]{5}[0-9]{2}$/),]),
    "fechan": new FormControl("", Validators.required),
    "genero": new FormControl("", Validators.required),
    //Tutor
    'nombreTutor': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/),]),
    'apellidoTutor': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/),]),
    'telefonoTutor': new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/),]),
    'correoTutor': new FormControl('', [Validators.required, Validators.email,]),
    //Escuela
    'nombreEscuela': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/),]),
    'direccionEscuela': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]*$/),]),
    //Medio de comunicacion
    'correoMedioComunicacion': new FormControl('', [Validators.required, Validators.email,]),
    'telefonoMedioComunicacion': new FormControl('', [Validators.required, Validators.pattern(/^\d{10,}$/),]),
    'telefonoAlternoMedioComunicacion': new FormControl('', [Validators.pattern(/^\d{10,}$/),]),
    //Estado, Municipio, Localidad
    'nombreEstado': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/),]),
    'nombreMunicipio': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/),]),
    'nombreLocalidad': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/),]),
    //Direccion
    'calle': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]+$/),]),
    'noExt': new FormControl('', [Validators.required, Validators.pattern(/^\d+$/),]),
    'noInt': new FormControl('', [Validators.pattern(/^\d+$/),]),
    'fraccionamiento': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]+$/),]),
    //Beca
    'fechaSolicitud': new FormControl('', [Validators.required]),
    'estadoSolicitud': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/),]),
    'comentarios': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/),]),
    //Alumno
    'nombreDocumento': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/),]),
    'descripcionDocumento': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/),]),
    //Tipo de Beca
    'nombreTipoBeca': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/),]),
    'descripcionTipoBeca': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/),]),
  });
  nuevoAspirante() {
    let paramsEstudiante = {
      // Estudiante
      Nombre: this.nombre.value,
      Apellidos: this.apellido.value,
      Fecha_Nacimiento: this.fechan.value,
      Sexo: this.genero.value,
      Curp: this.curp.value,
    };
    let paramsTutor = {
      // Tutor
      Nombre: this.nombreTutor.value,
      Apellido: this.apellidoTutor.value,
      Telefono: this.telefonoTutor.value,
      Correo: this.correoTutor.value,
    };
    let paramsEscuela = {
      // Escuela
      Nombre_Escuela: this.nombreEscuela.value,
      Direccion: this.direccionEscuela.value,
    };
    let paramsMedioCom = {
      // Medio de Comunicación
      correo: this.correoMedioComunicacion.value,
      telefono: this.telefonoMedioComunicacion.value,
      telefono_Alterno: this.telefonoAlternoMedioComunicacion.value,
    };
    let paramsEstado = {
      // Estado
      Nombre: this.nombreEstado.value,
    };
    let paramsMunicipio = {
      //Municipio
      Nombre: this.nombreMunicipio.value,
    };
    let paramsLocalidad = {
      //Localidad
      Nombre: this.nombreLocalidad.value,
    };
    let paramsDireccion = {
      // Direccion
      Calle: this.calle.value,
      No_Ext: this.noExt.value,
      No_Int: this.noInt.value,
      Fraccionamiento: this.fraccionamiento.value,
    };
    let paramsBeca = {
      // Beca
      Fecha_Solicitud: this.fechaSolicitud.value,
      Estado_Solicitud: this.estadoSolicitud.value,
      Comentarios: this.comentarios.value,
    };
    let paramsDocumentos = {
      // Documentos
      Nombre: this.nombreDocumento.value,
      Descripcion: this.descripcionDocumento.value,
    };
    let paramsTipoBeca = {
      // Tipo de Beca
      Nombre: this.nombreTipoBeca.value,
      Descripcion: this.descripcionTipoBeca.value,
    };

    this.httpform.post("http://localhost:3000/estudiante", paramsEstudiante).subscribe(result => {
      console.log(result)
    });
    this.httpform.post("http://localhost:3000/tutor", paramsTutor).subscribe(result => {
      console.log(result)
    });
    this.httpform.post("http://localhost:3000/escuela", paramsEscuela).subscribe(result => {
      console.log(result)
    });
    this.httpform.post("http://localhost:3000/medio_comunicacion", paramsMedioCom).subscribe(result => {
      console.log(result)
    });
    this.httpform.post("http://localhost:3000/estado", paramsEstado).subscribe(result => {
      console.log(result)
    });
    this.httpform.post("http://localhost:3000/municipio", paramsMunicipio).subscribe(result => {
      console.log(result)
    });
    this.httpform.post("http://localhost:3000/localidad", paramsLocalidad).subscribe(result => {
      console.log(result)
    });
    this.httpform.post("http://localhost:3000/direccion", paramsDireccion).subscribe(result => {
      console.log(result)
    });
    this.httpform.post("http://localhost:3000/beca", paramsBeca).subscribe(result => {
      console.log(result)
    });
    this.httpform.post("http://localhost:3000/documentos", paramsDocumentos).subscribe(result => {
      console.log(result)
    });
    this.httpform.post("http://localhost:3000/tipo_beca", paramsTipoBeca).subscribe(result => {
      console.log(result)
    });
    this.alertify.success("Los datos se han guardado correctamente");
  }
}
