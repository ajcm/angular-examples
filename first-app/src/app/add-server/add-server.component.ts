import { Component, EventEmitter, Output } from '@angular/core';

import {Server} from '../server.model'

@Component({
  selector: 'app-add-server',
  templateUrl:'add-server.component.html',
  styleUrl: './add-server.component.css'
})
export class AddServerComponent {
  addServer : Server;
  serverName = 'Testserver';


 @Output() serverCreated = new EventEmitter<Server>();


  onClick(){
    console.log("click" + this.serverName);

    this.serverCreated.emit(new Server(this.serverName))
  }


}
