import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {Router} from '@angular/router';
import { Client } from 'src/app/Classe/Client';
import {NgModel,FormsModule, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { RechercheCompetenceComponent } from 'src/app/employee/recherche-competence/recherche-competence.component';
import { UploadFileService } from 'src/app/upload-file.service';
import { Employee } from 'src/app/Classe/Employee';
import { RechercheService } from 'src/app/service/recherche.service';
import { RechercheTous } from 'src/app/Classe/RechercheTous';

@Component({
  selector: 'app-acceuil-client',
  templateUrl: './acceuil-client.component.html',
  styleUrls: ['./acceuil-client.component.scss']
})
export class AcceuilClientComponent implements OnInit {
  
  clientConnecte:Client= new Client();
  vpage :boolean =false;
  vEmploye:boolean=false;
  vDemandes:boolean=false;
  vProfile:boolean=false;
  vMessages:boolean=false;
  vDefaut:boolean=true;
  vrecherche:boolean=false;
  vDemandesClient :boolean=false;
  recherche :string='';
  listeEmployes:Array<Employee>;
  tableauVisibiliteDetail:boolean[]=[];

  //
  offset:number=0;
  vsuivant:boolean=false;
  vprecedent:boolean=false;
  //

  constructor(private localStorage:LocalStorage,private router :Router,private uploadFileService :UploadFileService ,private rechercheService :RechercheService) { 

    this.localStorage.getItem<Client>("client").subscribe(
      (data:Client)=>{
        if(data==null)
        { 
           this.clientConnecte=data;
           this.router.navigate(['']);
        }
        else
        {
          this.clientConnecte=data;
          this.vpage=true;
        }
      });
  }

  ngOnInit() {

    this.localStorage.getItem<Client>("client").subscribe((data:Client)=>
    {
         if(data==null)
          { 
            this.router.navigate(['']);
          }
    });
  }

  visibiliteEmploye($event)
  {
      this.vEmploye=!this.vEmploye;
      this.vDefaut=!this.vEmploye;
      this.vDemandes=false;
      this.vMessages=false;
      this.vProfile=false;
      this.vrecherche=false;
      this.vDemandesClient=false;
  }
  visibiliteProfile($event)
  {
    this.vProfile=!this.vProfile
    this.vDefaut=!this.vProfile;
    this.vEmploye=false;
    this.vDemandes=false;
    this.vMessages=false;
    this.vrecherche=false;
    this.vDemandesClient=false;
  }
  visibiliteContrats($event)
  {
    this.vMessages=!this.vMessages;
    this.vDefaut=!this.vMessages;
    this.vProfile=false;
    this.vEmploye=false;
    this.vDemandes=false;
    this.vrecherche=false;
    this.vDemandesClient=false;
  }
  visibiliteDemandes($event)
  {
    this.vDemandes=!this.vDemandes;
    this.vDefaut=!this.vDemandes;
    this.vMessages=false;
    this.vProfile=false;
    this.vEmploye=false;
    this.vrecherche=false;
    this.vDemandesClient=false;
  }
  faireRecherche($event)
  {
    this.vrecherche=!this.vrecherche;
    this.vDefaut=!this.vrecherche;
    this.vDemandes=false;
    this.vMessages=false;
    this.vProfile=false;
    this.vEmploye=false;
    this.vDemandesClient=false;
  }
  visibiliteDemandesClient($event)
  {
    this.vDemandesClient=!this.vDemandesClient;
    this.vDefaut=!this.vDemandesClient;
    this.vrecherche=false;
    this.vDemandes=false;
    this.vMessages=false;
    this.vProfile=false;
    this.vEmploye=false;
  }
  deconnexion($event)
  {
       this.localStorage.removeItem("client").subscribe(()=>{});
       this.localStorage.clear().subscribe(()=>{});
       this.router.navigate(['']);
  }
  getPhotoEmploye(photo:String): String
  {
    return this.uploadFileService.getPhoto(photo);
  }
  //
  details(position :number)
  {
    console.log("Salut vous voulez plus de Details");
    this.tableauVisibiliteDetail[position]=true;
  }
  reduire(position :number)
  {
    console.log("Salut vous voulez reduire");
    this.tableauVisibiliteDetail[position]=false;
  }
  touchRecherche($event)
  {
     this.vrecherche=true;
     this.offset=0;
     let rechercheEmploye:RechercheTous=new RechercheTous();
     rechercheEmploye.offset=this.offset;
     rechercheEmploye.recherche=this.recherche;
     console.log(rechercheEmploye);
     this.rechercheService.rechercheFromEmployePagination(rechercheEmploye).subscribe(
      (data:Employee[])=>{
        this.listeEmployes=data;
        console.log(this.listeEmployes);
        if(this.listeEmployes.length>0)
        {
        this.vsuivant=true;
        }
        console.log(this.listeEmployes);
        for(let i:number=0;i<this.listeEmployes.length;i++)
        {
          this.tableauVisibiliteDetail[i]=false;
        }
      });
  }
  suivant($event)
  {
    
    if(this.listeEmployes.length>0)
    {
      console.log("Suivant Suivant"+this.offset);
      this.offset++;
      let rechercheEmploye:RechercheTous=new RechercheTous();
      rechercheEmploye.offset=this.offset;
      rechercheEmploye.recherche=this.recherche;
      console.log(rechercheEmploye);
      this.vsuivant=true;
      this.vprecedent=true;
      this.rechercheService.rechercheFromEmployePagination(rechercheEmploye).subscribe(
        (data)=>{
          this.listeEmployes=data;
          if(this.listeEmployes.length<=0)
          {
            this.vsuivant=false;
          }
          console.log(this.listeEmployes);
          for(let i:number=0;i<this.listeEmployes.length;i++)
          {
             this.tableauVisibiliteDetail[i]=false;
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
    console.log("Precedent");
    if(this.offset>0)
    {
      console.log("Precedent"+this.offset);
      this.offset--;
      if(this.offset>=0)
      {
         let rechercheEmploye:RechercheTous=new RechercheTous();
         rechercheEmploye.offset=this.offset;
         rechercheEmploye.recherche=this.recherche;
         console.log(rechercheEmploye);
         this.vsuivant=true;
         this.rechercheService.rechercheFromEmployePagination(rechercheEmploye).subscribe(
          (data)=>{
            this.listeEmployes=data;
            if(this.offset==0)
            {
               this.vprecedent=false;
            }
            console.log(this.listeEmployes);
            for(let i:number=0;i<this.listeEmployes.length;i++)
            {
               this.tableauVisibiliteDetail[i]=false;
            }
         });
       }
      }
      else
      {
        this.vprecedent=false;
      }
  }
}