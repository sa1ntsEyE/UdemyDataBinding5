import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {RepeatComponent} from "./repeat/repeat.component";

interface ServerElement {
  type: string;
  name: string;
  content: string;
}


interface informationHuman {
  name:string,
  lastname:string,
  age: string,
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverElements: ServerElement[] = [{type: 'server', name:'serv', content:'serv2'}];

  onServerAdded(serverData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'changed!'
  }

  onDestroyirst() {
    this.serverElements.splice(0,1)
  }

  protected readonly console = console;
}
