import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TareaJuego';
  public listObb: number[] = [];
  public listEven: number[] = [];


  onChildData(number: number){    
    if(number % 2 === 0){
      this.listEven.push(number);
    }
    else{
      this.listObb.push(number);
    }
  }
}
