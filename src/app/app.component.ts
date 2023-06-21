import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIzquierdo = "../assets/dados/dice1.png";
  dadoDerecho = "../assets/dados/dice4.png";
  
  winner = false;

  makeToggleDice(){
    const dice1 = Math.round(Math.random()*5 + 1)
    const dice2 = Math.round(Math.random()*5 + 1)
    this.dadoIzquierdo = `../assets/dados/dice${dice1}.png`
    this.dadoDerecho = `../assets/dados/dice${dice2}.png`

    if (dice1 === dice2){
      this.winner = true
    }else{
      this.winner = false
    }
  }
}
