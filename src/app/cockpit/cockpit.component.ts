import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('blueprintCreatedAliens') blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('LocalContent') Content:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(Server_Name,Server_Conttent) {
    console.log(Server_Name.value);
    this.serverCreated.emit({
      serverName:Server_Name.value,
      serverContent:Server_Conttent.value
    });
  }

  onAddBlueprint(Server_Name) {
    this.blueprintCreated.emit({
      serverName:Server_Name.value,
      serverContent:this.Content.nativeElement.value
    });
  }
}
