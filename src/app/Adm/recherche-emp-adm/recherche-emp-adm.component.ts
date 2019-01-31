import { Component, OnInit } from '@angular/core';
import { RechercheService } from 'src/app/service/recherche.service';
import { UploadFileService } from 'src/app/upload-file.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Employee } from 'src/app/Classe/Employee';
import { EmployeeService } from 'src/app/employee.service';
import { CompetenceService } from 'src/app/service/competence.service';

@Component({
  selector: 'app-recherche-emp-adm',
  templateUrl: './recherche-emp-adm.component.html',
  styleUrls: ['./recherche-emp-adm.component.scss']
})
export class RechercheEmpAdmComponent implements OnInit {

 
  vrecherche:boolean=false;
  recherche :string='';
  listeEmployes:Array<Employee>;
  tableauVisibiliteDetail:boolean[]=[];
  ngOnInit() {
  }

  constructor(private rechercheService:RechercheService,private employeService:EmployeeService,private comptenceService:CompetenceService,private EmployeeService :EmployeeService,private uploadFileService :UploadFileService ,private localStorage :LocalStorage) { 
    
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
  faireRecherche($event)
  {
    /* this.vrecherche=true;
    this.vDemandes=false;
    this.vDefaut=false;
    this.vMessages=false;
    this.vProfile=false;
    this.vEmploye=false; */
  }
  // delete employee
deleteEmploye(employee:Employee) {
  this.EmployeeService.deleteEmployeeid(employee.idemploye)
    .subscribe(
      data => {
        console.log(data);
        this.listeEmployes.splice(this.listeEmployes.indexOf(employee),1);
        
      },
      error => console.log(error));
    
}
//edite emplo
editeEmploye()
     {
       
     }

}
