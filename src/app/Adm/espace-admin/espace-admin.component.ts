import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.scss']
})
export class EspaceAdminComponent implements OnInit {
  afficheEmployes:boolean=false;
  afficheMessagerie:boolean=false;
  afficheConfiguration:boolean=false;
  afficheDemande:boolean=false;
  afficheClient:boolean=false;
  afficheAccueil:boolean=true;
  ///////////////
  listeEmployer:boolean= false;
  newEmployer:boolean=false;
  statique:boolean=false;
  recherche:boolean=false;


  constructor() { }

  ngOnInit() {
  }

  visibiliteEmployes(){
    this.afficheEmployes=!this.afficheEmployes;
    this.afficheClient=false;
    this.afficheConfiguration=false;
    this.afficheMessagerie=false;
    this.afficheDemande=false;
    this.afficheAccueil=false;
  }
  visibiliteAccuile()
  {
    this.afficheEmployes=false
    this.afficheClient=false;
    this.afficheConfiguration=false;
    this.afficheMessagerie=false;
    this.afficheDemande=false;
    this.afficheAccueil=true;

  }
  nouvelEmployer()
  {
    this.listeEmployer=false
    this.statique=false;
    this.recherche=false
    this.newEmployer=!this.newEmployer;

  }
  listEmployer(){
    this.statique=false;
    this.recherche=false
    this.newEmployer=false;
    this.listeEmployer=!this.listeEmployer;
  }
  rechercheEmployer(){
    this.statique=false;
    this.listeEmployer=false
    this.newEmployer=false;
    this.recherche=!this.recherche;

  }
  statiqueEmployer(){
    this.listeEmployer=false;
    this.recherche=false
    this.newEmployer=false;
    this.statique=!this.statique;
    
  }

}
