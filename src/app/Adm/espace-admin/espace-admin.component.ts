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
///////////////Employer
  listeEmployer:boolean= false;
  newEmployer:boolean=false;
  statique:boolean=false;
  recherche:boolean=false;
/////////////////Client
listeClients:boolean= false;
statiqueClients:boolean=false;
rechercheClients:boolean=false;
demandeClients:boolean=false;
nouveauClients:Boolean=false;
////////////////Messagerie
listeMessagerie:boolean= false;
rechemessageries:boolean= false;
//////////////Reference
refpays:Boolean=false;
refethnies:Boolean=false;
reftype:Boolean=false;
refloc:Boolean=false;
refLang:Boolean=false;
refComp:Boolean=false;
refNiveauEtudes:Boolean=false;





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
  visibiliteReferenciel(){
    this.afficheConfiguration=!this.afficheConfiguration;
    this.afficheClient=false;
    this.afficheEmployes=false;
    this.afficheMessagerie=false;
    this.afficheDemande=false;
    this.afficheAccueil=false;

  }
  
  visibiliteMessage()
  {
    this.afficheEmployes=false
    this.afficheClient=false;
    this.afficheConfiguration=false;
    this.afficheMessagerie=false;
    this.afficheDemande=false;
    this.afficheMessagerie=true;
    this.afficheAccueil=false;


  }
  visibiliteClients(){
    this.afficheEmployes=false;
    this.afficheClient=!this.afficheClient;
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
//partie cliente

demandeClient()
  {
    this.demandeClients=!this.demandeClients;
    this.rechercheClients=false;
    this.statiqueClients=false;
    this.listeClients=false;
    this.nouveauClients=false;


  }
  listeClient(){
    this.listeClients=!this.listeClients;
    this.rechercheClients=false;
    this.statiqueClients=false;
    this.demandeClients=false;
    this.nouveauClients=false;


    
  }
  rechercheClient(){
    this.rechercheClients=!this.rechercheClients;
    this.listeClients=false;
    this.statiqueClients=false;
    this.demandeClients=false;
    this.nouveauClients=false;
    
  }
  statistiqueClient(){
    this.statiqueClients=!this.statiqueClients;
    this.listeClients=false;
    this.rechercheClients=false;
    this.demandeClients=false;
    this.nouveauClients=false;
    
  }
  newClient(){
    this.statiqueClients=!this.statiqueClients;
    this.listeClients=false;
    this.rechercheClients=false;
    this.demandeClients=false;
    this.nouveauClients=false;
    
  }
  ///partieMessagerie

  mesmessage(){
    this.rechemessageries=false;
    this.listeMessagerie=!this.listeMessagerie;
  }
  rechermessage(){
    this.listeMessagerie=false;
    this.rechemessageries=!this.rechemessageries;
  }
//Referenciel
referencePays(){
  this.refpays=!this.refpays;
  this.reftype = false;
  this.refloc = false;
  this.refLang = false;
  this.refNiveauEtudes = false;
  this.refComp = false;
  this.refethnies = false;

}
referenceEthnies(){
  this.refethnies=!this.refethnies;
  this.reftype = false;
  this.refloc = false;
  this.refLang = false;
  this.refNiveauEtudes = false;
  this.refComp = false;
  this.refpays = false;

}
referenceTypes(){
  this.reftype=!this.reftype;
  this.refpays = false;
  this.refloc = false;
  this.refLang = false;
  this.refNiveauEtudes = false;
  this.refComp = false;
  this.refethnies = false;

}
referenceLoaclites(){
  this.refloc=!this.refloc;
  this.reftype = false;
  this.refpays = false;
  this.refLang = false;
  this.refNiveauEtudes = false;
  this.refComp = false;
  this.refethnies = false;

}
referenceCompetences(){
  this.refComp=!this.refComp;
  this.reftype = false;
  this.refloc = false;
  this.refLang = false;
  this.refNiveauEtudes = false;
  this.refpays = false;
  this.refethnies = false;
}
referenceLangues(){
  this.refLang=!this.refLang;
  this.reftype = false;
  this.refloc = false;
  this.refpays = false;
  this.refNiveauEtudes = false;
  this.refComp = false;
  this.refethnies = false;
}
referenceNiveauEtudes(){
  this.refNiveauEtudes=!this.refNiveauEtudes;
  this.reftype = false;
  this.refloc = false;
  this.refLang = false;
  this.refethnies = false;
  this.refComp = false;
  this.refpays = false;

}


  

}
