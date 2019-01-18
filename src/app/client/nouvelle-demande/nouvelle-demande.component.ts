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
  selectedEmployevalues=[];
  favCompetenceErreur:boolean=true;
  favEmployeErreur:boolean=true;
  demandeForm= new FormGroup({
    salairePropose:new FormControl(''),
    services :new FormControl(''),
    employes :new FormControl(''),
    competences :new FormControl(''),
  });

  constructor(private fb:FormBuilder ,private employeService:EmployeeService,private comptenceService:CompetenceService,private demandeService:DemandeService,private uploadFileService :UploadFileService ,private localStorage :LocalStorage) { 
       this.employeService.getAllEmployes().subscribe(
           (data)=>{this.listeEmployes=data;
                    console.log(this.listeEmployes);}
       );
       this.comptenceService.getAllCompetences().subscribe(
          (data)=>{this.listeCompetences=data;}
       );
       for(let i:number=0;i<10;i++)
       {
        // console.log(this.tableauVisibiliteDetail.length);
         this.tableauVisibiliteDetail[i]=false;
       }
       
       //console.log(this.listeEmployes.length);
  }

  ngOnInit() {

    this.demandeForm= this.fb.group({
      salairePropose :[null,Validators.required],
      services:[null,Validators.required],
    });
  }
   //Employes Selectionnes
   getselectedEmployesvalues(employe:Employee){
    
    let index:number=this.selectedEmployevalues.indexOf(employe);
     if(index==-1)
    {
    this.selectedEmployevalues.push(employe);
    }
   else
   {
     this.selectedEmployevalues.splice(index,index+1);
   }
   console.log(this.selectedEmployevalues);
   this.favEmployeErreur = this.selectedEmployevalues.length >0 ? false :true;
  }
  //Competences selectionnees
  getselectedCompetencevalues(competence:Competence){
   
   let index:number=this.selectedCompetencevalues.indexOf(competence);
   if(index==-1)
   {
    this.selectedCompetencevalues.push(competence);
   }
   else
   {
     this.selectedCompetencevalues.splice(index,index+1);
   }
   this.comptenceService.getListeEmployes(this.selectedCompetencevalues).subscribe(
           (data)=>{this.listeEmployes=data;
                   console.log(this.listeEmployes);}
   )
   this.favCompetenceErreur = this.selectedCompetencevalues.length >0 ? false :true;
  
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
     
    this.demande=this.demandeForm.value;
    this.demandeFinal.salairePropose=this.demande.salairePropose;
    this.demandeFinal.services=this.demande.services;
    this.demandeFinal.competences=this.selectedCompetencevalues;
    this.demandeFinal.employees=this.selectedEmployevalues;
    this.localStorage.getItem<Client>("client").subscribe((data:Client)=>{
                                    this.client=data;
                                    this.demandeFinal.client=this.client;
                                     this.demandeService.addDemande(this.demandeFinal).subscribe(
                                           (data)=>{console.log("Enregistrement demande reussi");},
                                           (error)=>{console.log("Une erreur est survenue  lors de l'enregistrement");}
                                     );});
    
     
}

}
