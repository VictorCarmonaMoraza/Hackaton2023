import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { ObtenerProjectService } from 'src/app/services/obtener-project.service';


interface dataResp {
  id: string;
  nombre: string;
  descripcion: string;
  estado: number;
  pasos: string[]

}

@Component({
  selector: 'app-faseproject',
  templateUrl: './faseproject.component.html',
  styleUrls: ['./faseproject.component.css']
})
export class FaseprojectComponent implements OnInit {


  public nombreUsuario: string = 'Victor'
  public titulo: string = '';
  public menuNew: string[] = [];
  dataResp!: any;
  public elementoSeleccionado!: string;
  @Output() outputEmiter = new EventEmitter<string>();

  constructor(private hhtp: ObtenerProjectService) {

  }


  ngOnInit(): void {
    this.titulo = 'Nombre Project';

    this.hhtp.getProject()
      .subscribe(resp => {
        this.dataResp = resp;
        //this.menuNew = resp;
        this.obtenerNombres(resp);
      })
  }

  obtenerNombres(resp: any) {
    for (let index = 0; index < resp.length; index++) {
      this.menuNew.push(resp[index]['nombre']);

    }
  }


  DataProject(data: any) {
    let proyecto = this.dataResp.find((d:any) => d.nombre == data);
    this.crearTareas(proyecto);
    this.elementoSeleccionado = data;
  }

  crearTareas(proyecto:any) {
    console.log(proyecto);
    let lt = document.querySelector("#listado_tareas") ?? document.createElement("DIV");
    lt.setAttribute("id_proyecto", proyecto.id);
    let contenido = "";
    proyecto.pasos.forEach((paso:any) => {
        let c = "<div class='tarea' id_tarea='"+paso.id+"' estado='"+paso.estado+"'><span class='titulo_tarea'>"+paso.nombre+"</span><span class='descripcion_tarea'>"+paso.descripcion+"</span></div>";
        contenido+=c;
    });
    lt.innerHTML = contenido;
    /*
    let div = document.createElement("DIV");
    div.classList.add("tarea");
    lt.appendChild(div);
    */
  }

}
