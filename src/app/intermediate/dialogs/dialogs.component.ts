import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent implements OnInit {
  public status = "open";

  constructor() { }
  
  ngOnInit() {
  }
  
  public onClose() { this.status = "closed"; }
  public onAccept() { this.status = "accepted"; }
  public onDecline() { this.status = "declined"; }
  public opened = true;
  public dataSaved = false;

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public submit() {
      this.dataSaved = true;
      this.close();
  }
}
