import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/aletify.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  ngOnInit(): void {
    this.alertify.success("Contenido cargado");
    console.log(this.formAlumno.invalid);
  }
  constructor(private httpform:HttpClient,public alertify:AlertifyService){

  }
  get nombre(){
    return this.formAlumno.get("nombre") as FormControl;
  }
  get apellido(){
    return this.formAlumno.get("apellido") as FormControl;
  }
  get promedio(){
    return this.formAlumno.get("promedio") as FormControl;
  }
  get prepa(){
    return this.formAlumno.get("prepa") as FormControl;
  }
  get fechan(){
    return this.formAlumno.get("fechan") as FormControl;
  }
  get carrera(){
    return this.formAlumno.get("carrera") as FormControl;
  }
  get genero(){
    return this.formAlumno.get("genero") as FormControl;
  }
  formAlumno=new FormGroup({
    "nombre":new FormControl("",Validators.required),
    "apellido":new FormControl("",Validators.required),
    "promedio":new FormControl("",Validators.required),
    "prepa": new FormControl("",Validators.required),
    "fechan": new FormControl("",Validators.required),
    "genero":new FormControl("",Validators.required),
    "carrera": new FormControl("",Validators.required),

  });
  nuevoAspirante(){
      let params={
        nombre:this.nombre.value,
        apellido:this.apellido.value,
        prepa:this.prepa.value,
        fecha:this.fechan.value,
        carrera:this.carrera.value,
        genero:this.genero.value,
        promedio:this.promedio.value
      }
      this.httpform.post("http://localhost:3000/nuevo",params).subscribe(result=>{
        console.log(result)
      });
      this.alertify.success("Los datos se han guardado correctamente");
      this.createPDF();
      
    }
    createPDF(){ 
      const pdfDefinition: any = {
        content: [
          {
            text: `Universidad Tecnologica Especializada para todos nuestro aspirantes:


            Hoy comienza un emocionante capítulo en sus vidas, y estamos encantados de tenerlos aquí. Quiero compartir algunas palabras que espero les inspiren y guíen en esta etapa de aprendizaje y crecimiento.

            La educación es un viaje en el que cada día es una oportunidad para descubrir, aprender y crecer. En este camino, encontrarán desafíos, pero recuerden que cada obstáculo es una oportunidad para superarse y fortalecerse.
            
            Mantengan la curiosidad viva. Pregunten, investiguen y exploren. El conocimiento no solo se encuentra en los libros, sino en las experiencias y las conversaciones que tendrán a lo largo de su vida académica.
            
            La perseverancia es clave. Habrá momentos en los que sientan que no pueden continuar, pero recuerden por qué comenzaron y visualicen el objetivo final. Cada pequeño paso los acercará a ese logro.
            
            No tengan miedo de cometer errores. En realidad, son valiosas oportunidades para aprender y mejorar. Aprovechen cada error como una lección que los llevará más cerca de la excelencia.
            
            La colaboración es esencial. Aprendan unos de otros, compartan sus ideas y construyan juntos. El intercambio de conocimientos enriquecerá su experiencia y les abrirá nuevas perspectivas.
            
            Creen sus propias metas y sueños. No se limiten por las expectativas de los demás. Ustedes son los arquitectos de su futuro, y cada esfuerzo que pongan los acercará a hacer realidad sus aspiraciones.
            
            Recuerden cuidarse a sí mismos. El equilibrio entre el estudio, el descanso y el cuidado personal es fundamental para su bienestar. No descuiden su salud física y mental en este viaje.
            
            Finalmente, celebren cada logro, por pequeño que sea. Cada paso adelante merece ser reconocido y celebrado. Disfruten el proceso y estén orgullosos de su dedicación y esfuerzo.
            
            Estamos emocionados de acompañarlos en esta travesía educativa. Sepan que cuentan con nuestro apoyo y estamos aquí para ayudarlos a alcanzar su máximo potencial. ¡Bienvenidos y mucho éxito en este nuevo inicio!
            
            
            Es importante imprimir este documeto ya que es el pase para el examen de admision

            Este pase es valido para el alumno ${this.nombre.value+" "+this.apellido.value} de la peparatoria de procedencia ${this.prepa.value}
            El examen sera aplicado en el campus principal.
            Con direccion: Universidad Tecnológica de la Excelencia (UTE) Avenida Innovación, 1234 Ciudad Progresar, CP 56789 País Modernia
            El alula en el cual sera aplicado es en 120H a las 10:00hr

            Cualquier duda o comentario:
            Principal: +123 456 7890
            Admisiones: +123 456 7891
            Departamento de Investigación: +123 456 7892
              `,
          }
        ]
      }
   
      const pdf = pdfMake.createPdf(pdfDefinition);
      pdf.open();
   
    }

}
