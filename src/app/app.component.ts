import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (){
    document.addEventListener('keydown', (e)=>{
      const key = parseInt(e.key)
      if (key > 0 && key < 8){
        this.makeClickHappen(key)
      }
    })
  }
  
  aplicarSonido(numero:number):void{
    const audio = new Audio();
    audio.src = '../assets/sonidos/note'+numero+'.wav';
    audio.load();
    audio.play();
    console.log(`note${numero}`)
  }

  makeClickHappen(numero:number):void{
    const btn = document.querySelector(`a[data-sound='${numero}']`)
    let evt = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
    btn?.dispatchEvent(evt);
  }
}
