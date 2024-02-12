import { Component, OnInit } from '@angular/core';

import {Server} from './server.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  serverElements = [new Server("sss")];

  ngOnInit(): void {
    this.serverElements.push(new Server("sssss"));
  }

  onServerAdded(serverAdded:Server){
    this.serverElements.push(serverAdded);
  }

  

}
