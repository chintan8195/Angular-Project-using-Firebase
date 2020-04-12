import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  username = ""
  constructor() { }

  ngOnInit(): void {
  }
  onChangeUserName(event: Event){
    this.username = (<HTMLInputElement>event.target).value;
  }
  
  onCreateUserName(){
    this.username = "";
    (<HTMLInputElement>event.target).value = ""
  }
}
