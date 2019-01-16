import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tape-plus',
  templateUrl: './tape-plus.component.html',
  styleUrls: ['./tape-plus.component.scss']
})
export class TapePlusComponent implements OnInit {

  showListerRechercheFormation:boolean=false;
  showListerRechercheNiveauEtude:boolean=false;
  showListerRecherchePays:boolean=false;
  showListerRechercheLocalite:boolean=false;
  showListerRechercheCompetence:boolean=false;
  showListerRechercheEthnies:boolean=false;

  constructor() { }

  ngOnInit() {
  }
  visibiliteRechercheLocalite()
  {
    this.showListerRechercheLocalite=!this.showListerRechercheLocalite;
    this.showListerRechercheFormation=false;
    this.showListerRechercheNiveauEtude=false;
    this.showListerRecherchePays=false;
    this.showListerRechercheCompetence=false;
    this.showListerRechercheEthnies=false;



  }
  visibiliteRecherchePays()
  {
    this.showListerRechercheLocalite=false;
    this.showListerRechercheFormation=false;
    this.showListerRechercheNiveauEtude=false;
    this.showListerRecherchePays=!this.showListerRecherchePays;
    this.showListerRechercheEthnies=false;


  }
  visibiliteRechercheNiveauEtude()
  {
    this.showListerRechercheNiveauEtude=!this.showListerRechercheNiveauEtude;
    this.showListerRechercheFormation=false;
    this.showListerRechercheLocalite=false;
    this.showListerRecherchePays=false;
    this.showListerRechercheEthnies=false;


  }
  visibiliteRechercheFormation()
  {
    this.showListerRechercheFormation=!this.showListerRechercheFormation;
    this.showListerRechercheLocalite=false;
    this.showListerRechercheNiveauEtude=false;
    this.showListerRecherchePays=false;
    this.showListerRechercheEthnies=false;
  }
  visibiliteRechercheCompetence()
  {
    this.showListerRechercheCompetence=!this.showListerRechercheCompetence;
    this.showListerRechercheLocalite=false;
    this.showListerRechercheNiveauEtude=false;
    this.showListerRecherchePays=false;
    this.showListerRechercheEthnies=false;
  }
  visibiliteRechercheEthenies()
  {
    this.showListerRechercheEthnies=!this.showListerRechercheEthnies;
    this.showListerRechercheLocalite=false;
    this.showListerRechercheNiveauEtude=false;
    this.showListerRecherchePays=false;
    this.showListerRechercheCompetence=false;
  }
  


}
