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
  showListerRechercheSituation:boolean=false;
  showListerRechercheReligion:boolean=false;
  showListerRechercheEmail:boolean=false;
  showListerRechercheAdresse:boolean=false;
  showListerRecherchePlus:boolean=false;
  










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
       this.showListerRechercheAdresse=false;
       this.showListerRecherchePlus=false


  }

  visibiliteAction($event)
  {
    this.showActionEmployee=!this.showActionEmployee;
       this.showAjouterEmployye=false;
       this.showListerEmployee=false;
       this.showListerRechercheAdresse=false;
       this.showListerRechercheSituation=false;
       this.showListerRechercheReligion=false;
       this.showListerRechercheEmail=false;
       this.showListerRechercheAdresse=false;
       this.showListerRecherchePlus=false


  }


  visibiliteAjouter($event)
  {
        this.showAjouterEmployye=!this.showAjouterEmployye;
       this.showActionEmployee=false;
       this.showListerEmployee=false;
       this.showListerRechercheAdresse=false;
       this.showListerRechercheSituation=false;
       this.showListerRechercheReligion=false;
       this.showListerRechercheEmail=false;
       this.showListerRecherchePlus=false

  }
  visibiliteRechercheAdresse($event)
  {
       this.showActionEmployee=false;
       this.showAjouterEmployye=false;
       this.showListerEmployee=false;
       this.showListerRechercheAdresse=!this.showListerRechercheAdresse;
       this.showListerRechercheSituation=false;
       this.showListerRechercheReligion=false;
       this.showListerRechercheEmail=false;
       this.showListerRecherchePlus=false


  }

  visibiliteRechercheSituation($event)
  {
       this.showListerEmployee=false;
       this.showActionEmployee=false;
       this.showAjouterEmployye=false;
       this.showListerRechercheSituation=!this.showListerRechercheSituation;
       this.showListerRechercheReligion=false;
       this.showListerRechercheEmail=false;
       this.showListerRechercheAdresse=false;
       this.showListerRecherchePlus=false
  }

  visibiliteRechercheReligion($event)
  {
       this.showListerEmployee=false;
       this.showActionEmployee=false;
       this.showAjouterEmployye=false;
       this.showListerRechercheSituation=false;
       this.showListerRechercheReligion=!this.showListerRechercheReligion;
       this.showListerRechercheEmail=false;
       this.showListerRechercheAdresse=false;
       this.showListerRecherchePlus=false
  }

  visibiliteRechercheEmail($event)
  {
       this.showListerEmployee=false;
       this.showActionEmployee=false;
       this.showAjouterEmployye=false;
       this.showListerRechercheSituation=false;
       this.showListerRechercheReligion=false;
       this.showListerRechercheEmail=!this.showListerRechercheEmail;
       this.showListerRechercheAdresse=false;
       this.showListerRecherchePlus=false
  }

  visibiliteRecherchePlus($event)
  {
       this.showListerEmployee=false;
       this.showActionEmployee=false;
       this.showAjouterEmployye=false;
       this.showListerRechercheSituation=false;
       this.showListerRechercheReligion=false;
       this.showListerRechercheEmail=false;
       this.showListerRechercheAdresse=false;
       this.showListerRecherchePlus=!this.showListerRecherchePlus;
  }

  

}