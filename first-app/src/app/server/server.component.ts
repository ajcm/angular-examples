import { Component } from "@angular/core";

@Component ({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number= 999
    serverStatus: boolean = false
    serverName: string = ""


 

    setName(str: string) {
        this.serverName = str;
    }

    changeStatus() {
        this.serverStatus = !this.serverStatus;
    }



}