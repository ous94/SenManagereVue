import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  showHideClient:boolean=false;
  showHideInscription:boolean=false;







  constructor() { }

  ngOnInit() {
  }







  visibilitClient($event)
  {
        this.showHideClient=!this.showHideClient
       this.showHideInscription=false;
  }

  visibiliteInscription($event)
  {
    this.showHideInscription=!this.showHideInscription
       this.showHideClient=false;
  }

}
