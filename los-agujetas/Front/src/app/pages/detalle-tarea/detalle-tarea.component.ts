import { Element } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ObtenerProjectService } from 'src/app/services/obtener-project.service';

@Component({
  selector: 'app-detalle-tarea',
  templateUrl: './detalle-tarea.component.html',
  styleUrls: ['./detalle-tarea.component.css']
})
export class DetalleTareaComponent implements OnInit {
  @Input() dataTitulo!:string;

  public dataService!:any;

  constructor(private sewrviceData:ObtenerProjectService){

  }

  clickTarea(e:any) {
    let id_tarea = Number(e.target.closest("DIV.tarea")?.getAttribute("id_tarea"));
    if (id_tarea > 0) {
      let lt = document.querySelector("#listado_tareas") ?? document.createElement("DIV");
      let id_proyecto = Number(lt.getAttribute("id_proyecto"));
      this.mostrarDetalles(id_proyecto, id_tarea);
    }
  }

  ngOnInit(): void {
    //this.crearTareas([1,2,3,4,5]);
    this.dataTitulo ='Descripcion Proyecto';
    this.sewrviceData.getProject().subscribe(resp=>{
        this.dataService = resp;
        //this.crearTareas(resp);
    })
  }

  ngAfterViewInit() {
  }

  mostrarDetalles(id_proyecto:number, id_tarea:number) {
    let proyecto = this.dataService.find((d:any) => d.id == id_proyecto);
    let paso = proyecto.pasos.find((p:any) => p.id == id_tarea);
    let trabajadores = paso.trabajadores;
    //validadores
    let listado_oper = document.querySelector("#listado_validadores") ?? document.createElement("DIV");
    let contenido = "";
    trabajadores.filter((t:any) => t.rol == 0).forEach((tr:any) => {
      let c='<div class="form-check"><input class="form-check-input" type="checkbox" '+ (tr.estado == 1 ? "checked" : "")+' ><label class="form-check-label">' + tr.usuario.first_name + '</label></div>';
      contenido+=c;
    });
    listado_oper.innerHTML = contenido;

    //observadores
    let listado_ob = document.querySelector("#listado_observadores") ?? document.createElement("DIV");
    contenido = "";
    trabajadores.filter((t:any) => t.rol == 1).forEach((tr:any) => {
      let c='<div><label class="form-check-label">' + tr.usuario.first_name + '</label></div>';
      contenido+=c;
    });
    listado_ob.innerHTML = contenido;

    //trabajadores
    let listado_trab = document.querySelector("#listado_trabajadores") ?? document.createElement("DIV");
    contenido = "";
    trabajadores.filter((t:any) => t.rol == 2).forEach((tr:any) => {
      let c='<div><label class="form-check-label">' + tr.usuario.first_name + '</label></div>';
      contenido+=c;
    });
    listado_trab.innerHTML = contenido;


  }

}
