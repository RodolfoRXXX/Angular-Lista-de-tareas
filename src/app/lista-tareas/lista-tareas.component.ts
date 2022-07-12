import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas = [
    {id:1, nombre:"Aprender Angular", done:false},
    {id:2, nombre:"Aprender Javascript", done:false},
    {id:3, nombre:"Aprender Python", done:false}
  ]

  tareaNueva: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  modificarTarea( event:any ){
    if(event.key === "Enter"){
      this.agregarTareaNueva();
    } else{
      this.tareaNueva = event.target.value;
    }
  }

  agregarTareaNueva(){

    if(this.tareaNueva.length > 0){
      this.tareas.push({
        id:Math.max(...this.tareas.map(t=>t.id),0) + 1, //map, devuelve un arreglo cambiado a ids, y los ... le quita los corchetes al arreglo y los devuelve como parámetros
        nombre:this.tareaNueva,
        done:false
      })
      this.tareaNueva = "";
    }
  }

  cambiarEstadotarea( tarea:any ){
    tarea.done = !tarea.done;
  }

  eliminarTarea(id:number){
    if(confirm("Seguro de eliminar la tarea?")){
      this.tareas = this.tareas.filter(t => t.id != id);
    }
  }

}
