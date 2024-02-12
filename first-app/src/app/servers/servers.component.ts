import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //template:'<app-server></app-server>',
  styleUrl: './servers.component.css'
})
export class ServersComponent  implements OnInit {

  servers:[{id:"id",name:"server", status:"false"}]
  

  ngOnInit(): void {
   
  }




}
