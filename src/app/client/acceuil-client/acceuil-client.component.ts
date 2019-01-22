import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {Router} from '@angular/router';
import { Client } from 'src/app/Classe/Client';
import {NgModel,FormsModule, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { RechercheCompetenceComponent } from 'src/app/employee/recherche-competence/recherche-competence.component';
import { UploadFileService } from 'src/app/upload-file.service';
import { Employee } from 'src/app/Classe/Employee';
import { RechercheService } from 'src/app/service/recherche.service';

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

  constructor(private localStorage:LocalStorage,private router :Router,private uploadFileService :UploadFileService ,private rechercheService :RechercheService) { 

    this.localStorage.getItem<Client>("client").subscribe((data:Client)=>
                        {
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
  visibiliteMessages($event)
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
    this.rechercheService.rechercheTous(this.recherche).subscribe(
      (data)=>{this.listeEmployes=data;
               console.log(this.listeEmployes);
               for(let i:number=0;i<this.listeEmployes.length;i++)
               {
                 this.tableauVisibiliteDetail[i]=false;
               }}
  );
    console.log(this.recherche); 
  }
  
}