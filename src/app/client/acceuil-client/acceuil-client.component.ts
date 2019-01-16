import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil-client',
  templateUrl: './acceuil-client.component.html',
  styleUrls: ['./acceuil-client.component.scss']
})
export class AcceuilClientComponent implements OnInit {

  vEmploye:boolean=false;
  vDemandes:boolean=false;
  vProfile:boolean=false
  vMessages:boolean=false;
  vDefaut:boolean=true;

  constructor() { }

  ngOnInit() {
  }

  visibiliteEmploye($event)
  {
      this.vEmploye=!this.vEmploye;
      this.vDefaut=!this.vEmploye;
      this.vDemandes=false;
      this.vMessages=false;
      this.vProfile=false;
  }

  visibiliteProfile($event)
  {
    this.vProfile=!this.vProfile
    this.vDefaut=!this.vProfile;
    this.vEmploye=false;
    this.vDemandes=false;
    this.vMessages=false;
  }
  visibiliteMessages($event)
  {
    this.vMessages=!this.vMessages;
    this.vDefaut=!this.vMessages;
    this.vProfile=false;
    this.vEmploye=false;
    this.vDemandes=false;
  }
  visibiliteDemandes($event)
  {
    this.vDemandes=!this.vDemandes;
    this.vDefaut=!this.vDemandes;
    this.vMessages=false;
    this.vProfile=false;
    this.vEmploye=false;
  }

}

