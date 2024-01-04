import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})

export class CockpitComponent implements OnInit{
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>;
  @Output() bluePrintCreated = new EventEmitter<{serverName:string, serverContent:string}>;
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput!:ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onAddServer(nameInput:HTMLInputElement, contentInput:HTMLInputElement) {
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput:HTMLInputElement, contentInput:HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    })
  }
}
