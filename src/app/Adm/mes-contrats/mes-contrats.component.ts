import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/Classe/Contrat';
import { ContratService } from 'src/app/service/contrat.service';
import { RechercheContrat } from 'src/app/Classe/RechercheContrat';

@Component({
  selector: 'app-mes-contrats',
  templateUrl: './mes-contrats.component.html',
  styleUrls: ['./mes-contrats.component.scss']
})
export class MesContratsComponent implements OnInit {

  listeContrats :Array<Contrat>=[];
  offset:number =0;
  debutContrat:Date;
  finContrat :Date;
  salaire :number;
  rechercheFin :Date;
  rechercheDebut :Date;
  rechercheSalaire :number;
  vsuivant:boolean=false;
  vprecedent:boolean=false;
  rechercheContrat:RechercheContrat=new RechercheContrat();
  vrecherche:boolean=false;

  vediteContrat :Array<boolean>=[];
  constructor(private contratService :ContratService) {
    setTimeout(() => {
      this.chargerContrat();
    },200);
   }

  ngOnInit() {
  }
  //
  chargerContrat()
  {
      this.contratService.listeAllContratPagination(this.offset).subscribe(
        (data:Contrat[])=>{
          this.listeContrats=data;
          console.log(data);
          for(let i:number=0; i<this.listeContrats.length;i++)
          {
            this.vediteContrat[i]=false;
          }
          if(this.listeContrats.length<5)
          {
            this.vsuivant=false;
          }
          else
          {
            this.vsuivant=true;
          }
        });
  }
  chargerAllContrats()
  {
    this.contratService.listeAllContrat().subscribe(
      (data:Contrat[])=>{ 
        this.listeContrats=data;
        for(let i:number=0; i<this.listeContrats.length;i++)
          {
            this.vediteContrat[i]=false;
          }
          this.vsuivant=false;
          this.vprecedent=false;
      });
  }
  chargerContratRecherchePagination()
  {
    this.contratService.contratRecherche(this.rechercheContrat).subscribe(
      (data:Contrat[])=>{
        this.listeContrats=data;
        for(let i:number=0; i<this.listeContrats.length;i++)
        {
          this.vediteContrat[i]=false;
        }
        if(this.listeContrats.length<5)
        {
          this.vsuivant=false;
        }
        else
        {
          this.vsuivant=true;
        }
      });
  }
  //
  vediter(position:number,contrat:Contrat)
  {
    this.vediteContrat[position]=!this.vediteContrat[position];
    this.debutContrat=contrat.debut;
    this.finContrat=contrat.fin;
    this.salaire=contrat.salaire;
  }
  //
  editer(contrat:Contrat)
  {
     let contrt:Contrat=new Contrat();
     contrt.idContrat=contrat.idContrat;
     contrt.demande=contrat.demande;
     contrt.employee=contrat.employee;
     contrt.debut=this.debutContrat;
     contrt.fin=this.finContrat;
     contrt.salaire=this.salaire;
     this.contratService.editeContrat(contrat.idContrat,contrt).subscribe(
       (data)=>{if(data!=null)
         {
           alert("Le contrat a été bien Modifié");
           setTimeout(() => {this.chargerContrat();},200);
         }
         else
        {
          alert("Echec de la Modification du Contrat");
          setTimeout(() => {this.chargerContrat();},200);
        }}),
      (error)=>{
        alert("Une erreur c'est produite veillez réessayer plus tard");
        setTimeout(() => {this.chargerContrat();},200);
      }
  }
//
  annuler(contrat :Contrat)
  {
    this.contratService.deleteContrat(contrat.idContrat).subscribe(
      (data)=>{if(data=="1")
           {    
             alert("Le contrat a été bien annulé");
             setTimeout(() => {this.chargerContrat();},200);
           }
           else if(data=="0")
           {
             alert("Echec de la suppression");
           }
    },(error)=>{alert("une erreur c'est produite");});
  }
  //
  recherche()
  {
    this.offset=0;
    if(this.rechercheDebut==null && this.rechercheFin==null && this.rechercheSalaire==null)
    {
      this.vrecherche=false;
      this.vsuivant=false;
      this.vprecedent=false;
       this.chargerContrat();
    }
    else
    {
      this.vrecherche=true;
      let contrat :Contrat=new Contrat();
      contrat.debut=this.rechercheDebut;
      contrat.fin=this.rechercheFin;
      contrat.salaire=this.rechercheSalaire;
      this.rechercheContrat.contrat=contrat;
      this.rechercheContrat.offset=this.offset;
      this.rechercheDebut=null;
      this.rechercheFin=null;
      this.rechercheSalaire=null;
      this.chargerContratRecherchePagination();
    }
  }
  //
  suivant()
  {
     this.offset++;
     this.vprecedent=true;
     if(this.vrecherche)
     {
       this.chargerContratRecherchePagination();
     }
     else
     {
      this.chargerContrat();
     }
  }
  //
  precedent()
  {
    this.offset--;
    if(this.offset>=0)
    {
      if(this.offset==0)
      {
        this.vprecedent=false;
      }
      if(this.vrecherche)
      {
        this.chargerContratRecherchePagination();
      }
      else
      {
        this.chargerContrat();
      } 
    }
  }
}
