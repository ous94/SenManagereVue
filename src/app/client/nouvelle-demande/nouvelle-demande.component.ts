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
import { RechercheCompetence } from 'src/app/Classe/RechercherCompetence';

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
  selectedEmployevaluesId:Array<number>=[];
  favCompetenceErreur:boolean=true;
  favEmployeErreur:boolean=true;
  demandeForm= new FormGroup({
    salairePropose:new FormControl(''),
    services :new FormControl(''),
    employes :new FormControl(''),
    competences :new FormControl(''),
  });
  //
  offset1:number=0;
   offset2:number=0;
   vsuivant:boolean=false;
   vprecedent:boolean=false;

  constructor(private fb:FormBuilder ,private employeService:EmployeeService,private competenceService:CompetenceService,private demandeService:DemandeService,private uploadFileService :UploadFileService ,private localStorage :LocalStorage) { 
       this.employeService.getAllEmployesPagination(this.offset1).subscribe(
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
   getselectedEmployesvalues(employe:Employee,position :number,$event:Event){
    
    let index:number=this.selectedEmployevaluesId.indexOf(employe.idemploye);
    //let index:number=this.selectedEmployevalues.indexOf(employe);
     if(index==-1)
    {
      if(this.selectedEmployevalues.length<=4)
      {
         this.selectedEmployevaluesId.push(employe.idemploye);
         this.selectedEmployevalues.push(employe);
         let element =document.getElementById(""+position); 
         element.style.backgroundColor="#40826D";
      }
      else
      {
         alert("Vous avez le nombre maximale d'employes à associer a votre demande");
         //document.getElementById("inlineCkeckbox"+position).setAttribute("unchecked","unchecked");
         var t=document.getElementById("inlineCkeckbox"+position);
         $event.stopPropagation();
         $event.stopImmediatePropagation();
         
      }
    }
   else
   {
     this.selectedEmployevaluesId.splice(index,index+1)
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
  this.offset1=0;
  this.offset2=0;
  this.vprecedent=false;
  this.vsuivant=false;
  if(index==-1)
  {
   this.selectedCompetencevalues.push(competence);
   let rechercheCompetence :RechercheCompetence =new RechercheCompetence();
   rechercheCompetence.offset=this.offset2;
   rechercheCompetence.listeCompetences=this.selectedCompetencevalues;
   this.competenceService.getListeEmployesPagination(rechercheCompetence).subscribe(
     (data)=>{
         this.listeEmployes=data;
         if(this.listeEmployes.length>=2)
         {
           this.vsuivant=true;
         }
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
         let rechercheCompetence :RechercheCompetence =new RechercheCompetence();
         rechercheCompetence.offset=this.offset2;
         rechercheCompetence.listeCompetences=this.selectedCompetencevalues;
         this.competenceService.getListeEmployesPagination(rechercheCompetence).subscribe(
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
        this.employeService.getAllEmployesPagination(this.offset1).subscribe(
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
    if(this.selectedCompetencevalues.length>0)
    {
       if(this.listeEmployes.length>=2)
      {
         this.offset2++;
         this.vsuivant=true;
         this.vprecedent=true;
         let rechercheCompetence :RechercheCompetence =new RechercheCompetence();
         rechercheCompetence.offset=this.offset2;
         rechercheCompetence.listeCompetences=this.selectedCompetencevalues;
         this.competenceService.getListeEmployesPagination(rechercheCompetence).subscribe(
           (data)=>{
              this.listeEmployes=data;
              if(this.listeEmployes.length<2)
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
      else
      {
        if(this.listeEmployes.length>=2)
        {
          this.offset1++;
          this.vsuivant=true;
          this.vprecedent=true;
          this.employeService.getAllEmployesPagination(this.offset1).subscribe(
            (data)=>{
              this.listeEmployes=data;
              if(this.listeEmployes.length<2)
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
      setTimeout(() => {
        for(let i:number=0;i<this.listeEmployes.length;i++)
        {
          let index:number=this.selectedEmployevaluesId.indexOf(this.listeEmployes[i].idemploye);
          if(index!=-1)
          {
            let element =document.getElementById(""+i); 
             element.style.backgroundColor="#40826D";
             console.log(element.innerHTML);
             document.getElementById("inlineCkeckbox"+i).setAttribute("checked","checked");
          }
          else
          {
                console.log("Salut Suivant"+i);
          }
         }
      }, 3000);
  }
  precedent($event)
  {
    if(this.selectedCompetencevalues.length>0)
    {
       if(this.offset2>=0)
       {
          this.offset2--;
          this.vsuivant=true;
          let rechercheCompetence :RechercheCompetence =new RechercheCompetence();
          rechercheCompetence.offset=this.offset2;
          rechercheCompetence.listeCompetences=this.selectedCompetencevalues;
          this.competenceService.getListeEmployesPagination(rechercheCompetence).subscribe(
            (data)=>{
              this.listeEmployes=data;
              if(this.offset2==0)
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
        if(this.offset1>=0)
        {
          this.offset1--;
          this.vsuivant=true;
          this.employeService.getAllEmployesPagination(this.offset1).subscribe(
            (data)=>{
              this.listeEmployes=data;
              if(this.offset1==0)
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
    
     setTimeout(() => {
      for(let i:number=0;i<this.listeEmployes.length;i++)
      {
         let index:number=this.selectedEmployevaluesId.indexOf(this.listeEmployes[i].idemploye);
         if(index!=-1)
         {
             let element =document.getElementById(""+i); 
            element.style.backgroundColor="#40826D";
            console.log(element.innerHTML);
            document.getElementById("inlineCkeckbox"+i).setAttribute("checked","checked");
         }
         else
         {
            console.log("Salut Precedent"+i);
         }
       }
     }, 3000);
  }  
}
