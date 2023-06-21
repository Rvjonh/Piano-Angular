import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  listaTareas: Tarea[] = []
  nombreTarea: string = '';

  constructor(){}

  agrearTarea(){
    const newTarea = new Tarea(this.nombreTarea, false);
    this.listaTareas.push(newTarea);
    this.nombreTarea = '';
  }

  updateEstate(num:number){
    this.listaTareas[num].estado = !this.listaTareas[num].estado;
  }

  deleteEstate(num:number){
    const value = confirm("Quieres eliminar la tarea?")
    if(value){
      this.listaTareas = this.listaTareas.filter((item, index)=> index != num)
    }
  }
}
