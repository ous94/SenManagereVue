import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Classe/Employee';
import { EmployeeService } from 'src/app/employee.service';
import { UploadFileService } from 'src/app/upload-file.service';
import { Competence } from 'src/app/Classe/Competence';
import { CompetenceService } from 'src/app/service/competence.service';
import { DemandeService } from 'src/app/service/demande.service';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-mes-emplyes',
  templateUrl: './mes-emplyes.component.html',
  styleUrls: ['./mes-emplyes.component.scss']
})
export class MesEmplyesComponent implements OnInit {

//listeEmploye:Employee[];


  listeCompetences:Array<Competence>;
  selectedCompetencevalues:Array<Competence>=[];
  listeEmployes:Array<Employee>;
  tableauVisibiliteDetail:boolean[]=[];
  selectedEmployevalues=[];
  favCompetenceErreur:boolean=true;
  favEmployeErreur:boolean=true;

  //showdetail:boolean=false;

  /* constructor(private EmployeeService:EmployeeService, private UploadFileService:UploadFileService) { 

    setTimeout(() => {
      this.reloadData();

      
    }, 2000
     );
   }
 */

constructor(private employeService:EmployeeService,private comptenceService:CompetenceService,private EmployeeService :EmployeeService,private uploadFileService :UploadFileService ,private localStorage :LocalStorage) { 

  setTimeout(() => {
    this.reloadData();

    
  }, 10
   );
  
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

  ngOnInit() {
    //this.reloadData();
  }

  reloadData() {

    this.employeService.getAllEmployes().subscribe(
      (data)=>{this.listeEmployes=data;
               console.log(this.listeEmployes);
               for(let i:number=0;i<this.listeEmployes.length;i++)
               {
                 this.tableauVisibiliteDetail[i]=false;
               }}
  );
  this.comptenceService.getAllCompetences().subscribe(
     (data)=>{this.listeCompetences=data;}
  );
  for(let i:number=0;i<10;i++)
  {
    this.tableauVisibiliteDetail[i]=false;
  }

  }


 /*  reloadData() {
  
    //misea ajour Ethnies
     this.EmployeeService.getEmployes().subscribe(
       data =>{this.listeEmploye=data;console.log(data)},
       error =>{console.log(this.listeEmploye)},
 
       ()=>{console.log('errer chargement des donnés')}
       );
     } */


// delete employee
deleteEmploye(employee:Employee) {
  this.EmployeeService.deleteEmployeeid(employee.idemploye)
    .subscribe(
      data => {
        console.log(data);
        this.listeEmployes.splice(this.listeEmployes.indexOf(employee),1);
        
      },
      error => console.log(error));
      this.reloadData();
}
//edite emplo
editeEmploye()
     {
       
     }

/* 
visibiliteDetail()
{
  this.showdetail=!this.showdetail;
  
}
etteindre()
{
  this.showdetail=this.showdetail;

  
}

///ajout
visibiliteDiv($event)
  {
       this.showdetail=!this.showdetail;

  } */

    


    uploadPhotoEmployer(photo:String): String
    {
      return this.uploadFileService.getPhoto(photo);
    }
  }
