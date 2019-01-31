import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/Classe/Demande';
import { DemandeService } from 'src/app/service/demande.service';
import { UploadFileService } from 'src/app/upload-file.service';
import { Route, Router } from '@angular/router';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { log } from 'util';
import { Employee } from 'src/app/Classe/Employee';
import { Contrat } from 'src/app/Classe/Contrat';
import { ContratService } from 'src/app/service/contrat.service';
import { RechercheDemande } from 'src/app/Classe/RechercheDemande';
import { Client } from 'src/app/Classe/Client';


@Component({
  selector: 'app-mes-demandes',
  templateUrl: './mes-demandes.component.html',
  styleUrls: ['./mes-demandes.component.scss']
})
export class MesDemandesComponent implements OnInit {


  demandes: any;
  demandeEdite:Demande = new Demande();

  //
  employeSelectionner :Employee=null;
  debutContrat:Date;
  finContrat:Date;
  salaire :number;
  listeVisibiliteCreatContrat:Array<boolean>=[];
  vDetailDemande :Array<boolean>=[];
  vsuivant:boolean=false;
  vprecedent:boolean=false;
  offset:number=0;
  rechercheNom:string;
  recherchePrenom:string;
  rechercheDate:Date;
  rechercheServices:string
  rechercheSalaire:number;
  rechercheDemande:RechercheDemande=new RechercheDemande();
  vrecherche:boolean =false;
  //
  maDemande: Demande = {
    iddemande :0,
    date : new Date,
    salairePropose :null,
    salaireRetenue :null,
    services :'',
    competences :[],
    client :null,
    employees :[],
    documents :[],
  };

  listeDemande:Demande[];
  showdetail:boolean=false;
  showdedite:boolean=false;

  constructor(private DemandeService:DemandeService,private UploadFileService:UploadFileService,private router:Router,private contratService :ContratService) { 

    setTimeout(() => {
     // this.reloadData();
     this.chargerDemandePagination();

    }, 2000
     );
   }

  ngOnInit() {
    this.reloadData();  
  }

  initiermodifier()
  {
  this.demandes =this.DemandeService.getterDemande();  
  console.log(this.demandes);     
  }
   validerModification(form : NgForm)
   {
     this.demandeEdite=form.value;
    // this.demandes.iddemande=this.demandeEdite.iddemande;
     this.demandes.salairePropose=this.demandeEdite.salairePropose;
     this.demandes.salaireRetenue=this.demandeEdite.salaireRetenue;
     
    console.log(this.demandes);
     this.DemandeService.updateDemander(this.demandes.iddemande,this.demandes).
     subscribe(data => console.log(data), error => console.log(error));
   }
  //
  reloadData() {
  
     this.DemandeService.getAllDemande().subscribe(
       data =>{this.listeDemande=data;
        console.log(data)
        for(let i:number=0;i<this.listeDemande.length;i++)
         {
           this.listeVisibiliteCreatContrat[i]=false;
           this.vDetailDemande[i]=false;
         }},
       error =>{console.log(this.listeDemande)},
 
       ()=>{console.log('errer chargement des donnés')}
       );
     }


// delete Demande
deleteDemande(demande:Demande) {
  this.DemandeService.deleteDemandeId(demande.iddemande)
    .subscribe(
      data => {
        console.log(data);
        this.listeDemande.splice(this.listeDemande.indexOf(demande),1); 
      },
      error => console.log(error));
      this.reloadData();
   }
    ///edite
   editeDemande(demande:Demande) {
    console.log(demande);
     this.demandes= this.DemandeService.setteDemande(demande);
      console.log(this.demandes);

      this.showdedite=!this.showdedite;
      //this.router.navigate(['/edite'])
    }

    uploadPhotoEmployer(photo:String): String
    {
      return this.UploadFileService.getPhoto(photo);
  }
  //
  visibiliteDetail()
  {
     this.showdetail=!this.showdetail; 
  }
  changeEmploye(employe :Employee)
  {
    if(this.employeSelectionner)
   {
     if(employe.idemploye!=this.employeSelectionner.idemploye)
     {
       this.employeSelectionner=employe;
     }
     else
    {
      this.employeSelectionner=null;
    }
  }
  else
  {
    this.employeSelectionner=employe;
  }
  console.log(this.employeSelectionner);  
}
vCreateContrat(position:number)
{
  for(let i=0;i<this.listeVisibiliteCreatContrat.length;i++)
  {
    this.listeVisibiliteCreatContrat[i]=false;
    this.vDetailDemande[i]=false;
  }
  this.listeVisibiliteCreatContrat[position]=true;
  console.log(position);
}
detailDemande(position:number)
{
  for(let i=0;i<this.listeDemande.length;i++)
  {
    this.listeVisibiliteCreatContrat[i]=false;
    this.vDetailDemande[i]=false;
  }
  this.vDetailDemande[position]=true;
}
validerContrat(demande:Demande)
{
   console.log(this.debutContrat);
   console.log(this.finContrat);
   console.log(this.salaire);
   console.log(this.employeSelectionner);
   console.log(demande);
   if(this.debutContrat && this.salaire && this.employeSelectionner)
   {
      let contrat:Contrat=new Contrat();
      contrat.debut=this.debutContrat;
      contrat.fin=this.finContrat;
      contrat.employee=this.employeSelectionner;
      contrat.salaire=this.salaire;
      contrat.demande=demande;
      this.debutContrat=null;
      this.finContrat=null;
      this.salaire=null;
      console.log(contrat);
      this.contratService.creatContrat(contrat).subscribe(
        (data)=>{ console.log(data);
        if(data)
         {
             alert("le Contrat a été bien Valider");
             this.DemandeService.getAllDemande().subscribe(
               (data)=>{ setTimeout(() => {this.reloadData();}, 2000);
              })
         }
         else
        {
           alert("Une erreur c'est produite veillez reessayer plus tard");
           this.debutContrat=null;
           this.finContrat=null;
           this.salaire=null; 
        }},
        (error)=>{alert("Une erreur c'est produite veillez reessayer plus tard");
            this.debutContrat=null;
            this.finContrat=null;
             this.salaire=null;
           });
   }
   else
   {
     alert("Contrat invalide");
   }
 }
 suivant()
 {
    this.offset++;
    this.vprecedent=true;
    if(this.vrecherche)
    {
      this.chargerDemandeRecherhce();
    }
    else
    {
      this.chargerDemandePagination();
    }
    
 }
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
      this.chargerDemandeRecherhce();
    }
    else
    {
      this.chargerDemandePagination();
    }
   }
 }
 chargerDemandePagination()
 {
   this.DemandeService.getAllDemandePagination(this.offset).subscribe(
     (data:Demande[])=>{this.listeDemande=data;
       for(let i:number=0;i<this.listeDemande.length;i++)
         {
           this.listeVisibiliteCreatContrat[i]=false;
           this.vDetailDemande[i]=false;
         }
         if(this.listeDemande.length>=5)
         {
           this.vsuivant=true;
         }
    });
 }
 chargerDemandeRecherhce()
 {
  this.DemandeService.rechercheDemandeDetails(this.rechercheDemande).subscribe(
    (data:Demande[])=>{this.listeDemande=data;
     for(let i:number=0;i<this.listeDemande.length;i++)
       {
         this.listeVisibiliteCreatContrat[i]=false;
         this.vDetailDemande[i]=false;
       }
       if(this.listeDemande.length>=5)
       {
         this.vsuivant=true;
       }    
    });
 }
 recherche()
 {
   this.offset=0;
   this.vsuivant=false;
   this.vprecedent=false;
   if(this.rechercheNom==null && this.recherchePrenom==null && this.rechercheSalaire==null && this.rechercheServices==null && this.rechercheDate==null)
   {
     this.chargerDemandePagination();
     this.vrecherche=false;
   }
   else
   {
     this.vrecherche=true;
     let client:Client=new Client();
     let demande:Demande=new Demande();
     client.nom=this.rechercheNom;
     client.prenom=this.recherchePrenom;
     demande.salairePropose=this.rechercheSalaire;
     demande.services=this.rechercheServices;
     demande.date=this.rechercheDate;
     this.rechercheDemande.client=client;
     this.rechercheDemande.demande=demande;
     this.rechercheDemande.offset=this.offset;
     this.chargerDemandeRecherhce();
     this.rechercheNom=null;
     this.recherchePrenom=null;
     this.rechercheSalaire=null;
     this.rechercheServices=null;
     this.rechercheDate=null;
   }
   
 }
} 