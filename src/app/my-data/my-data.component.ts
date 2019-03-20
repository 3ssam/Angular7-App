import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css']
})
export class MyDataComponent implements OnInit {

  name: string = "Essam";
  username: string = "Can`t add new user";
  users: string = "";
  age: number = 23;
  flag: boolean = false;
  UserEnter: boolean = false;


  getMyAge() {
    return this.age;
  }

  constructor() {
    setTimeout(() => {
      this.flag = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onAddUser(){
    this.username = this.users;
    this.UserEnter = true;
  }

  onCreateUser(event:any){
    this.users = (<HTMLInputElement>event.target).value;
  }

}