import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { ClientService } from 'src/app/service/client.service';
import { MessagesService } from 'src/app/service/messages.service';
import { DemandeService } from 'src/app/service/demande.service';
import { Pays } from 'src/app/Classe/Pays';
import { LangueService } from 'src/app/service/langue.service';
import { LocaliteService } from 'src/app/service/localite.service';
import { EthniesService } from 'src/app/service/ethnies.service';
import { CompetenceService } from 'src/app/service/competence.service';
import { PaysService } from 'src/app/service/pays.service';
import { TypeIdentificationService } from 'src/app/service/type-identification.service';
import { NiveauEtudeService } from 'src/app/service/niveau-etude.service';

@Component({
  selector: 'app-ref-lang',
  templateUrl: './ref-lang.component.html',
  styleUrls: ['./ref-lang.component.scss']
})
export class RefLangComponent implements OnInit {

  afficheReferences:boolean=false;
  afficheClients:boolean=false;
  afficheEmployes:boolean=false;
  affichemessages:boolean=false;
  accueilAdmin:boolean=true;
////////////////////////////////Employes
 EmployesListes:boolean=false;
 EmployesNew:boolean=false;
 EmployesRecherche:boolean=false;
 EmployeStatistique:boolean=false;
 employeNombre:number=0;
 ////////////////////////////////Clients
 ClientsListes:boolean=false;
 ClientsNew:boolean=false;
 ClientsRecherche:boolean=false;
 clientNombre:number=0;
 clientStatistique:boolean=false;
 ////////////Conteur
 messageNombre:number=0;
 demandeNombre:number=0;
 paysNombre:number=0;
 localiteNombre:number=0;
 niveauNombre:number=0;
 ethnieNombre:number=0;
 typeINombre:number=0;
 langueNombre:number=0;
 compNombre:number=0;


 ////////////////////////////////Reference
 Paysref:boolean=false;
 localiteref:boolean=false;
 niveauEtuderef:boolean=false;
 Languesref:boolean=false;
 competenceref:boolean=false;
 Ethnieref:boolean=false;
 typeIdentificationref:boolean=false;
 referenceStatistique:boolean=false;

  constructor(private EmployeeService:EmployeeService,private ClientService:ClientService,private MessagesService:MessagesService,private DemandeService:DemandeService,private niveauEt:NiveauEtudeService,
    private pays:PaysService,private langue:LangueService,private loc:LocaliteService,private eth:EthniesService,private compet:CompetenceService,private type:TypeIdentificationService) { 
    this.EmployeeService.conterEmployes().subscribe((data)=>
    {
      console.log(data);
      
      this.employeNombre=data;

    });
    ///client
    this.ClientService.conterClient().subscribe((data)=>
    {
      console.log(data);
      
      this.clientNombre=data;

    });
    //messages
    this.MessagesService.conterMeassages().subscribe((data)=>
    {
      console.log(data);
      
      this.messageNombre=data;

    });
    ///demande
    this.DemandeService.conterDemande().subscribe((data)=>
    {
      console.log(data);
      
      this.demandeNombre=data;

    });
    ///pays
    this.pays.conterPays().subscribe((data)=>
    {
      console.log(data);
      
      this.paysNombre=data;

    });
     ///Localite
     this.loc.conterClient().subscribe((data)=>
     {
       console.log(data);
       
       this.localiteNombre=data;
 
     });
      ///ethnies
    this.eth.conterEthnie().subscribe((data)=>
    {
      console.log(data);
      
      this.ethnieNombre=data;

    });
     ///langue
     this.langue.conterLangue().subscribe((data)=>
     {
       console.log(data);
       
       this.langueNombre=data;
 
     });
      ///niveau
    this.niveauEt.conterNiveau().subscribe((data)=>
    {
      console.log(data);
      
      this.niveauNombre=data;

    });
     ///competence
     this.compet.conterCompet().subscribe((data)=>
     {
       console.log(data);
       
       this.compNombre=data;
 
     });
      ///typiden
    this.type.conterTypeien().subscribe((data)=>
    {
      console.log(data);
      
      this.typeINombre=data;

    });
  }
  


  ngOnInit() {
  }

  vreference(){
    this.afficheReferences=!this.afficheReferences;
    this.afficheClients=false;
    this.afficheEmployes=false;
    this.affichemessages=false;
    this.accueilAdmin=false;
    this.referenceStatistique=true;
    this.Paysref=false;
  }
  vClient(){
    this.afficheClients=!this.afficheClients;
    this.afficheReferences=false;
    this.afficheEmployes=false;
    this.affichemessages=false;
    this.accueilAdmin=false;
    this.clientStatistique=true;
    this.EmployeStatistique=false;
    this.EmployesListes=false;
    this.EmployesRecherche=false;
    this.EmployesNew=false;
     //
     this.Paysref=false;
     this.Ethnieref=false;
     this.Languesref=false;
     this.localiteref=false;
     this.competenceref=false;
     this.typeIdentificationref=false;
     this.niveauEtuderef=false;
  }
  vEmploye(){
    this.afficheEmployes=!this.afficheEmployes;
    this.afficheClients=false;
    this.afficheReferences=false;
    this.affichemessages=false;
    this.EmployeStatistique=true;
    this.clientStatistique=false;
    this.accueilAdmin=false;
    this.ClientsListes=false;
    this.ClientsRecherche=false;
    this.ClientsNew=false;
     //
     this.Paysref=false;
     this.Ethnieref=false;
     this.Languesref=false;
     this.localiteref=false;
     this.competenceref=false;
     this.typeIdentificationref=false;
     this.niveauEtuderef=false;
    
  }
  vemessage(){
    this.affichemessages=!this.affichemessages;
    this.afficheClients=false;
    this.afficheEmployes=false;
    this.afficheReferences=false;
    this.accueilAdmin=false;
   //
   this.Paysref=false;
   this.Ethnieref=false;
   this.Languesref=false;
   this.localiteref=false;
   this.competenceref=false;
   this.typeIdentificationref=false;
   this.niveauEtuderef=false;

    
  }

  /////////////////////Employer
  vEmployeRecherche(){
    this.EmployeStatistique=false;
    this.EmployesListes=false;
    this.EmployesNew=false;
    this.EmployesRecherche=!this.EmployesRecherche;
    this.ClientsListes=false;
    this.ClientsRecherche=false;
    this.ClientsNew=false;
   //
   this.Paysref=false;
   this.Ethnieref=false;
   this.Languesref=false;
   this.localiteref=false;
   this.competenceref=false;
   this.typeIdentificationref=false;
   this.niveauEtuderef=false;
  }
  vEmployeListe(){
    this.EmployeStatistique=false;
    this.EmployesRecherche=false;
    this.EmployesNew=false;
    this.EmployesListes=!this.EmployesListes;
    this.ClientsListes=false;
    this.ClientsRecherche=false;
    this.ClientsNew=false;
     //
     this.Paysref=false;
     this.Ethnieref=false;
     this.Languesref=false;
     this.localiteref=false;
     this.competenceref=false;
     this.typeIdentificationref=false;
     this.niveauEtuderef=false;

  }
  vEmployenew(){
    this.EmployeStatistique=false;
    this.EmployesListes=false;
    this.EmployesRecherche=false;
    this.EmployesNew=!this.EmployesNew;
    this.ClientsListes=false;
    this.ClientsRecherche=false;
    this.ClientsNew=false;
     //
     this.Paysref=false;
     this.Ethnieref=false;
     this.Languesref=false;
     this.localiteref=false;
     this.competenceref=false;
     this.typeIdentificationref=false;
     this.niveauEtuderef=false;
  }
  ///////////////////client
  vClientsRecherche(){
    this.ClientsListes=false;
    this.ClientsRecherche=!this.ClientsRecherche;
    this.ClientsNew=false;
    this.EmployeStatistique=false;
    this.EmployesListes=false;
    this.EmployesRecherche=false;
    this.EmployesNew=false;
     //
     this.Paysref=false;
     this.Ethnieref=false;
     this.Languesref=false;
     this.localiteref=false;
     this.competenceref=false;
     this.typeIdentificationref=false;
     this.niveauEtuderef=false;

  }
  vClientListe(){
    this.ClientsListes=false;
    this.ClientsRecherche=!this.ClientsRecherche;
    this.ClientsNew=false;
    this.EmployeStatistique=false;
    this.EmployesListes=false;
    this.EmployesRecherche=false;
    this.EmployesNew=false;
     //
     this.Paysref=false;
     this.Ethnieref=false;
     this.Languesref=false;
     this.localiteref=false;
     this.competenceref=false;
     this.typeIdentificationref=false;
     this.niveauEtuderef=false;
    
  }
  vClientsNew(){
    this.ClientsListes=false;
    this.ClientsRecherche=false;
    this.ClientsNew=!this.ClientsNew;
    this.EmployeStatistique=false;
    this.EmployesListes=false;
    this.EmployesRecherche=false;
    this.EmployesNew=false;
    //
    this.Paysref=false;
    this.Ethnieref=false;
    this.Languesref=false;
    this.localiteref=false;
    this.competenceref=false;
    this.typeIdentificationref=false;
    this.niveauEtuderef=false;
  }
  /////////////////////Reference
  vpaysref(){
    this.Paysref=!this.Paysref;
    this.Ethnieref=false;
    this.Languesref=false;
    this.localiteref=false;
    this.competenceref=false;
    this.typeIdentificationref=false;
    this.niveauEtuderef=false;
    this.referenceStatistique=false;
    //
    this.ClientsListes=false;
    this.ClientsRecherche=false;
    this.ClientsNew=false;
    this.clientStatistique=false;
    this.EmployeStatistique=false;
    this.EmployesListes=false;
    this.EmployesRecherche=false;
    this.EmployesNew=false;

  }
  vlocaliteref(){
    this.localiteref=!this.localiteref;
    this.Ethnieref=false;
    this.Languesref=false;
    this.Paysref=false;
    this.competenceref=false;
    this.typeIdentificationref=false;
    this.niveauEtuderef=false;
    this.referenceStatistique=false;

    //
    this.ClientsListes=false;
    this.ClientsRecherche=false;
    this.ClientsNew=false;
    this.clientStatistique=false;
    this.EmployeStatistique=false;
    this.EmployesListes=false;
    this.EmployesRecherche=false;
    this.EmployesNew=false;

  }
  vethnieref(){
    this.Ethnieref=!this.Ethnieref;
    this.Paysref=false;
    this.Languesref=false;
    this.Paysref=false;
    this.competenceref=false;
    this.typeIdentificationref=false;
    this.niveauEtuderef=false;
    this.referenceStatistique=false;

    //
    this.ClientsListes=false;
    this.ClientsRecherche=false;
    this.ClientsNew=false;
    this.clientStatistique=false;
    this.EmployeStatistique=false;
    this.EmployesListes=false;
    this.EmployesRecherche=false;
    this.EmployesNew=false;

  }
  vniveauEtuderef(){
    this.niveauEtuderef=!this.niveauEtuderef;
    this.Ethnieref=false;
    this.Languesref=false;
    this.Paysref=false;
    this.competenceref=false;
    this.typeIdentificationref=false;
    this.localiteref=false;
    this.referenceStatistique=false;

    //
    this.ClientsListes=false;
    this.ClientsRecherche=false;
    this.ClientsNew=false;
    this.clientStatistique=false;
    this.EmployeStatistique=false;
    this.EmployesListes=false;
    this.EmployesRecherche=false;
    this.EmployesNew=false;

  }
  vlangueref(){
    this.Languesref=!this.Languesref;
    this.Ethnieref=false;
    this.localiteref=false;
    this.Paysref=false;
    this.competenceref=false;
    this.typeIdentificationref=false;
    this.niveauEtuderef=false;
    this.referenceStatistique=false;

    //
    this.ClientsListes=false;
    this.ClientsRecherche=false;
    this.ClientsNew=false;
    this.clientStatistique=false;
    this.EmployeStatistique=false;
    this.EmployesListes=false;
    this.EmployesRecherche=false;
    this.EmployesNew=false;
  }
  vcompetenceref(){
    this.competenceref=!this.competenceref;
    this.Ethnieref=false;
    this.Languesref=false;
    this.Paysref=false;
    this.localiteref=false;
    this.typeIdentificationref=false;
    this.niveauEtuderef=false;
    this.referenceStatistique=false;

    //
    this.ClientsListes=false;
    this.ClientsRecherche=false;
    this.ClientsNew=false;
    this.clientStatistique=false;
    this.EmployeStatistique=false;
    this.EmployesListes=false;
    this.EmployesRecherche=false;
    this.EmployesNew=false;

  }
  vtypeIdentificationref(){
    this.typeIdentificationref=!this.typeIdentificationref;
    this.Ethnieref=false;
    this.Languesref=false;
    this.Paysref=false;
    this.competenceref=false;
    this.localiteref=false;
    this.niveauEtuderef=false;
    this.referenceStatistique=false;

    //
    this.ClientsListes=false;
    this.ClientsRecherche=false;
    this.ClientsNew=false;
    this.clientStatistique=false;
    this.EmployeStatistique=false;
    this.EmployesListes=false;
    this.EmployesRecherche=false;
    this.EmployesNew=false;

  }
}
