import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  showHideClient:boolean=false;
  showHideInscription:boolean=false;
  showHideRecherche:boolean=false;








  constructor() { }

  ngOnInit() {
  }







  visibilitClient($event)
  {
        this.showHideClient=!this.showHideClient
       this.showHideInscription=false;
       this.showHideRecherche=false;
  }

  visibiliteInscription($event)
  {
    this.showHideInscription=!this.showHideInscription
       this.showHideClient=false;
       this.showHideRecherche=false;
  }
  visibiliteRecherche($event)
  {
    this.showHideInscription=false
       this.showHideClient=false;
       this.showHideRecherche=!this.showHideRecherche;
  }

}
