import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  public Interval: any;  
  @Output() Emitter = new EventEmitter<number>();
  public IncrementalNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStarGame(){
    this.Interval = setInterval(()=>{
      this.Emitter.emit(this.IncrementalNumber++);      
    },1000);
  }

  onStopGame(){
    clearInterval(this.Interval);
  }

}
