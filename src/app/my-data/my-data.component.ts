import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-my-data]',          //attribute 
  //selector: '.app-my-data',           //class
  selector: 'app-my-data',              //tag
  //templateUrl: './my-data.component.html',
  template: '<p style="text-align: center">My-Data-Component</p>',
  styleUrls: ['./my-data.component.css']
  //styles: [`  p{  color: blue;  } `]
})
export class MyDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
