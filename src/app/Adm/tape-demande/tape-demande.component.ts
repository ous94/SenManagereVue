import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tape-demande',
  templateUrl: './tape-demande.component.html',
  styleUrls: ['./tape-demande.component.scss']
})
export class TapeDemandeComponent implements OnInit {

  showAjouterDemande:boolean=false;
  showActionDemande:boolean=false;
  showListerDemande:boolean=false;








  constructor() { }

  ngOnInit() {
  }







  visibiliteLister($event)
  {
       this.showListerDemande=!this.showListerDemande
       this.showActionDemande=false;
       this.showAjouterDemande=false;

  }

  visibiliteAction($event)
  {
    this.showActionDemande=!this.showActionDemande
       this.showListerDemande=false;
       this.showAjouterDemande=false;

  }


  visibiliteAjouter($event)
  {
        this.showAjouterDemande=!this.showAjouterDemande;
       this.showActionDemande=false;
       this.showListerDemande=false;

  }

}
