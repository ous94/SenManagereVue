import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../Classe/Client';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  showHideClient:boolean=false;
  showHideInscription:boolean=false;
  showHideDemande:boolean=false;
@Input()
client3:Client;


  constructor() { }

  ngOnInit() {
    console.log('bonjour');
    
    console.log(this.client3);
    
  }







  visibilitClient($event)
  {
        this.showHideClient=!this.showHideClient
       this.showHideInscription=false;
       this.showHideDemande=false;
  }

  visibiliteInscription($event)
  {
    this.showHideInscription=!this.showHideInscription
       this.showHideClient=false;
       this.showHideDemande=false;
  }
  visibiliteDemande($event)
  {
    this.showHideInscription=false
       this.showHideClient=false;
       this.showHideDemande=!this.showHideDemande;
  }

}
