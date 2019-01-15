import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tape-employer',
  templateUrl: './tape-employer.component.html',
  styleUrls: ['./tape-employer.component.scss']
})
export class TapeEmployerComponent implements OnInit {

  showAjouterEmployye:boolean=false;
  showActionEmployee:boolean=false;
  showListerEmployee:boolean=false;
  showListerRecherche:boolean=false;
  showListerRechercheSituation:boolean=false;
  showListerRechercheReligion:boolean=false;
  showListerRechercheEmail:boolean=false;










  constructor() { }

  ngOnInit() {
  }







  visibiliteLister($event)
  {
       this.showListerEmployee=!this.showListerEmployee;
       this.showActionEmployee=false;
       this.showAjouterEmployye=false;
       this.showListerRechercheSituation=false;
       this.showListerRechercheReligion=false;
       this.showListerRechercheEmail=false;


  }

  visibiliteAction($event)
  {
    this.showActionEmployee=!this.showActionEmployee;
       this.showAjouterEmployye=false;
       this.showListerEmployee=false;
       this.showListerRecherche=false;
       this.showListerRechercheSituation=false;
       this.showListerRechercheReligion=false;
       this.showListerRechercheEmail=false;


  }


  visibiliteAjouter($event)
  {
        this.showAjouterEmployye=!this.showAjouterEmployye;
       this.showActionEmployee=false;
       this.showListerEmployee=false;
       this.showListerRecherche=false;
       this.showListerRechercheSituation=false;
       this.showListerRechercheReligion=false;
       this.showListerRechercheEmail=false;

  }
  visibiliteRecherche($event)
  {
       this.showActionEmployee=false;
       this.showAjouterEmployye=false;
       this.showListerEmployee=false;
       this.showListerRecherche=!this.showListerRecherche;
       this.showListerRechercheSituation=false;
       this.showListerRechercheReligion=false;
       this.showListerRechercheEmail=false;


  }

  visibiliteSituation($event)
  {
       this.showListerEmployee=false;
       this.showActionEmployee=false;
       this.showAjouterEmployye=false;
       this.showListerRechercheSituation=!this.showListerRechercheSituation;
       this.showListerRechercheReligion=false;
       this.showListerRechercheEmail=false;
  }

  visibiliteReligion($event)
  {
       this.showListerEmployee=false;
       this.showActionEmployee=false;
       this.showAjouterEmployye=false;
       this.showListerRechercheSituation=false;
       this.showListerRechercheReligion=!this.showListerRechercheReligion;
       this.showListerRechercheEmail=false;
  }

  visibiliteEmail($event)
  {
       this.showListerEmployee=false;
       this.showActionEmployee=false;
       this.showAjouterEmployye=false;
       this.showListerRechercheSituation=false;
       this.showListerRechercheReligion=false;
       this.showListerRechercheEmail=!this.showListerRechercheEmail;
  }

}