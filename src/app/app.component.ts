import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listEstudiante: any[] =[
    {name:"Carlos", estado:"Excelente"},
    {name:"Alberto", estado:"Libre"},
    {name:"Daniela", estado:"Excelente"},
    {name:"Maria", estado:"Pesimo"},
    {name:"Fernando", estado:"Libre"},
  ]
  mostrar = true

  toggle(){
    this.mostrar = !this.mostrar
  }
}
