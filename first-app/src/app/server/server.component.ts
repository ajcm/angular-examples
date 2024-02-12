import { Component, Input } from "@angular/core";
import {Server} from '../server.model'

@Component ({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
   
    @Input() element: Server;

  constructor(){

  }
 



}