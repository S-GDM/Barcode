import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { browser, by, element } from 'protractor';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
value = 2;
Barvalue="some Value"
  constructor(private router:Router) { }

  ngOnInit() {
    
  }

}
