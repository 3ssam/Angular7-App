import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styles: [`
  .coloron{
    color:white
  }
  `]
})
export class AssignmentComponent implements OnInit {

  username:string = "";
  actualname:string = "noname";
  flag: boolean = false;
  logclick=[];
  color:string = "off"
  count:number = 0;

  constructor() { }

  ngOnInit() {
  }

  onDisplayDetails(){
    if (!(this.username.length === 0))
    this.actualname = this.username;
    console.log(this.actualname);
    this.flag = !this.flag;
    this.logclick.push(this.logclick.length+1);
    //this.logclick.push("item");
    this.color = (this.logclick.length <= 4) ? 'off' : 'on';
    this.count = this.count + 1;
    //console.log(this.actualname);
  }

  getcolor(){
    return (this.color === 'off') ? 'white' : 'blue';
  }

}
