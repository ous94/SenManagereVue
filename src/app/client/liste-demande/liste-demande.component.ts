import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { DemandeService } from 'src/app/service/demande.service';
import {Client} from 'src/app/Classe/Client';
import {Competence} from 'src/app/Classe/Competence';
import {Employee} from 'src/app/Classe/Employee';
import { Demande } from 'src/app/Classe/Demande';
import { RechercheDemande } from 'src/app/Classe/RechercheDemande';

@Component({
  selector: 'app-liste-demande',
  templateUrl: './liste-demande.component.html',
  styleUrls: ['./liste-demande.component.scss']
})
export class ListeDemandeComponent implements OnInit {

  listeEmployeeDemande:Array<Employee>=[];
  listeCompetenceDemande :Array<Competence>=[];
  listeDemande:Array<Demande>=[];
  clientConnecter:Client=new Client();
  offset :number=0;
  vsuivant :boolean=false;
  vprecedent:boolean=false
  rechercheDemande :RechercheDemande=new RechercheDemande();


  constructor(private localStorage :LocalStorage ,private demandeService :DemandeService) 
  {
  
     this.localStorage.getItem<Client>("client").subscribe((
       data:Client)=>{
         this.clientConnecter=data;
         this.rechercheDemande.client=this.clientConnecter;
         this.rechercheDemande.offset=this.offset;
         this.demandeService.getDemandeClientPagination(this.rechercheDemande).subscribe(
           (data:Demande[])=>{
             this.listeDemande=data;
             if(this.listeDemande.length>=5)
             {
               this.vsuivant=true;
             }
           });
      });
   }

  ngOnInit() {
  }
  annulerDemande(demande:Demande)
  {
     this.demandeService.deleteDemandeId(demande.iddemande).subscribe(
       (data)=>{
         if(data=="1")
         {
            alert("Votre demande a été bien annulé");
            this.offset=0;
            this.rechercheDemande.client=this.clientConnecter;
            this.rechercheDemande.offset=this.offset;
            this.demandeService.getDemandeClientPagination(this.rechercheDemande).subscribe(
              (data:Demande[])=>{
                this.listeDemande=data;
                if(this.listeDemande.length>=5)
                {
                  this.vsuivant=true;
                }
              });
         }
         else if(data=="0")
         {
          alert("La suppression a échoué ,Veillez réessayer plus tard");
         } 
      });
  }
  suivant($event)
  {
    if(this.listeDemande.length>=5)
    {
      this.offset++;
      this.vsuivant=true;
      this.vprecedent=true;
      this.rechercheDemande.offset=this.offset
      this.demandeService.getDemandeClientPagination(this.rechercheDemande).subscribe(
        (data:Demande[])=>{
          this.listeDemande=data;
          if(this.listeDemande.length<5)
          {
            this.vsuivant=false;
          }
        });
    }
    else
    {
      this.vsuivant=false;
      this.vprecedent=true;
    }
  }
  precedent($event)
  {
    if(this.offset>=0)
    {
      this.offset--;
      this.vsuivant=true;
      this.rechercheDemande.offset=this.offset;
      this.demandeService.getDemandeClientPagination(this.rechercheDemande).subscribe(
        (data:Demande[])=>{
          this.listeDemande=data;
          if(this.offset==0)
          {
            this.vprecedent=false;
          }
        });
      }
  }
  
}
