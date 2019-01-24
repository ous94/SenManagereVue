import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators, FormArray } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';
import { CompetenceService } from 'src/app/service/competence.service';
import { DemandeService } from 'src/app/service/demande.service';
import { Employee } from 'src/app/Classe/Employee';
import { Competence } from 'src/app/Classe/Competence';
import { Demande } from 'src/app/Classe/Demande';
import { UploadFileService } from 'src/app/upload-file.service';
import { Client } from 'src/app/Classe/Client';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-nouvelle-demande',
  templateUrl: './nouvelle-demande.component.html',
  styleUrls: ['./nouvelle-demande.component.scss']
})
export class NouvelleDemandeComponent implements OnInit {

  client:Client=new Client();
  demande:Demande =new Demande();
  demandeFinal :Demande=new Demande();
  listeCompetences:Array<Competence>;
  selectedCompetencevalues:Array<Competence>=[];
  listeEmployes:Array<Employee>;
  tableauVisibiliteDetail:boolean[]=[];
  selectedEmployevalues:Array<Employee>=[];
  favCompetenceErreur:boolean=true;
  favEmployeErreur:boolean=true;
  demandeForm= new FormGroup({
    salairePropose:new FormControl(''),
    services :new FormControl(''),
    employes :new FormControl(''),
    competences :new FormControl(''),
  });
  //
   offset:number=0;
   vsuivant:boolean=false;
   vprecedent:boolean=false;

  constructor(private fb:FormBuilder ,private employeService:EmployeeService,private competenceService:CompetenceService,private demandeService:DemandeService,private uploadFileService :UploadFileService ,private localStorage :LocalStorage) { 
       this.employeService.getAllEmployesPagination(this.offset).subscribe(
         (data)=>{
            this.listeEmployes=data;
            if(this.listeEmployes.length>=2)
            {
               this.vsuivant=true;
            }
            console.log(this.listeEmployes);
            for(let i:number=0;i<this.listeEmployes.length;i++)
            {
               this.tableauVisibiliteDetail[i]=false;
            }
       });
       this.competenceService.getAllCompetences().subscribe(
          (data)=>{this.listeCompetences=data;}
       );
       for(let i:number=0;i<10;i++)
       {
         this.tableauVisibiliteDetail[i]=false;
       }
  }

  ngOnInit() {

    this.demandeForm= this.fb.group({
      salairePropose :[null,Validators.required],
      services:[null,Validators.required],
    });
  }
   //Employes Selectionnes
   getselectedEmployesvalues(employe:Employee,position :number){
    
    let index:number=this.selectedEmployevalues.indexOf(employe);
     if(index==-1)
    {
      this.selectedEmployevalues.push(employe);
      let element =document.getElementById(""+position); 
      element.style.backgroundColor="#40826D";
    }
   else
   {
     this.selectedEmployevalues.splice(index,index+1);
     let element =document.getElementById(""+position); 
     element.style.backgroundColor="#E0CDA9";
   }
   console.log(this.selectedEmployevalues);
   this.favEmployeErreur = this.selectedEmployevalues.length >0 ? false :true;
  }
  //Competences selectionnees
  getselectedCompetencevalues(competence:Competence){
   
    this.selectedEmployevalues=[];
   let index:number=this.selectedCompetencevalues.indexOf(competence);
   if(index==-1)
   {
    this.selectedCompetencevalues.push(competence);
    this.competenceService.getListeEmployes(this.selectedCompetencevalues).subscribe(
      (data)=>
      {this.listeEmployes=data;
          for(let i:number=0;i<this.listeEmployes.length;i++)
          {
            this.tableauVisibiliteDetail[i]=false;
         }
       }  
    );
    this.favCompetenceErreur=false;
   }
   else
   {
      this.selectedCompetencevalues.splice(index,index+1);
       if(this.selectedCompetencevalues.length>0)
       {
          console.log("taille superieur a 0");
          this.competenceService.getListeEmployes(this.selectedCompetencevalues).subscribe(
            (data)=>
                  {
                    this.listeEmployes=data;
                    for(let i:number=0;i<this.listeEmployes.length;i++)
                    {
                       this.tableauVisibiliteDetail[i]=false;
                    }
                  }  
           );
           this.favCompetenceErreur=false;
        }
       else 
       {
          console.log("liste Vide");
          this.employeService.getAllEmployes().subscribe(
            (data)=>
               {
                  this.listeEmployes=data;
                  console.log("liste Vide");
                  for(let i:number=0;i<this.listeEmployes.length;i++)
                  {
                    this.tableauVisibiliteDetail[i]=false;
                  }
               }
            );
           this.favCompetenceErreur=true;
       }
   }
   
  }
  //Chargement de la photo d'un Employe
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
  //
  validerDemande()
  {
    if(this.selectedEmployevalues.length==0)
    {
         console.log("Erreur aucun employe n'est associe a votre demande");
         alert("Erreur aucun employe n'est associe a votre demande");
    }
    else
    {
       this.demande=this.demandeForm.value;
       this.demandeFinal.salairePropose=this.demande.salairePropose;
       this.demandeFinal.services=this.demande.services;
       this.demandeFinal.competences=this.selectedCompetencevalues;
       this.demandeFinal.employees=this.selectedEmployevalues;
       this.localStorage.getItem<Client>("client").subscribe(
         (data:Client)=>{
            this.client=data;
            this.demandeFinal.client=this.client;
            this.demandeService.addDemande(this.demandeFinal).subscribe(
              (data)=>{console.log("Enregistrement demande reussi");},
              (error)=>{console.log("Une erreur est survenue  lors de l'enregistrement");
            });
          });  
   }   
  }
  suivant($event)
  {
    if(this.listeEmployes.length>=2)
    {
      this.offset++;
      this.vsuivant=true;
      this.vprecedent=true;
      this.employeService.getAllEmployesPagination(this.offset).subscribe(
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
        } );
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
      this.employeService.getAllEmployesPagination(this.offset).subscribe(
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
}
