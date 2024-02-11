import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //template:'<app-server></app-server>',
  styleUrl: './servers.component.css'
})
export class ServersComponent  implements OnInit {

  servers: ServerComponent [] = [];
  

  ngOnInit(): void {
    let s1 = new ServerComponent(111,"aaa");
    s1.serverName = "banana";

    s1.setName("dddd")
  
    s1.changeStatus();

    this.servers.push(s1);
  }




}
