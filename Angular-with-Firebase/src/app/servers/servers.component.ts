import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
      .buttonLength{
          color:white;
      }
    `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer' , 'TestServer 2'];
  shouldDisplay = false;
  buttonCounter = [];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus = "Server was created! Name is " + this.serverName ;
    this.servers.push(this.serverName);
    this.serverCreated = true;

  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onDisplay(){
    this.shouldDisplay = !this.shouldDisplay;
    this.buttonCounter.push(this.buttonCounter.length + 1);
  }

  getColor(){
    return this.buttonCounter.length >4 ? 'blue': 'white'
  }
}
