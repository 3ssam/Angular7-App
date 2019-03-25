import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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

  onAddBlueprint(Server_Name,Server_Conttent) {
    this.blueprintCreated.emit({
      serverName:Server_Name.value,
      serverContent:Server_Conttent.value
    });
  }
}
