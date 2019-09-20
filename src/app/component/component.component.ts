import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
points=1
  constructor() { }

  ngOnInit() {
  }
  plus1() {
    this.points++;
  }

  reset() {
    this.points = 0;
  } 
}
