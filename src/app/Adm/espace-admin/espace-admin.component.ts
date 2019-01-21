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
////////////////Messagerie
listeMessagerie:boolean= false;
rechemessageries:boolean= false;




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

  }
  listeClient(){
    this.listeClients=!this.listeClients;
    this.rechercheClients=false;
    this.statiqueClients=false;
    this.demandeClients=false;

    
  }
  rechercheClient(){
    this.rechercheClients=!this.rechercheClients;
    this.listeClients=false;
    this.statiqueClients=false;
    this.demandeClients=false;
    
  }
  statistiqueClient(){
    
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
  

  

}
