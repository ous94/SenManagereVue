import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Classe/Employee';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
import { UploadFileService } from 'src/app/upload-file.service';

@Component({
  selector: 'app-recherche-niveau-etudes',
  templateUrl: './recherche-niveau-etudes.component.html',
  styleUrls: ['./recherche-niveau-etudes.component.scss']
})
export class RechercheNiveauEtudesComponent implements OnInit {

  rechercherNiveau : Employee[];
  niveauEtudes:String;

//private baseurl: string = 'http://localhost:4201/api/customers';
constructor(private EmployeeService:EmployeeService,private router:Router,private UploadFileService:UploadFileService) {
  setTimeout(() => {

    
  }, 2000
   );
 }

  ngOnInit() {
    this.niveauEtudes=null;
  }

   // rechercher par age
   private searchCustomers() {
    this.EmployeeService.getEmployerByAdresse(this.niveauEtudes)
      .subscribe(rechercherNiveau => this.rechercherNiveau =rechercherNiveau);
  }
  //button de validation
  rechercher() {
    this.searchCustomers();
  }

  uploadPhotoEmployer(photo:String): String
  {
    return this.UploadFileService.getPhoto(photo);
  }

  // delete employee
deleteEmploye(employee:Employee) {
  this.EmployeeService.deleteEmployeeid(employee.idemploye)
    .subscribe(
      data => {
        console.log(data);
        this.rechercherNiveau.splice(this.rechercherNiveau.indexOf(employee),1);
        
      },
      error => console.log(error));
     
}
//edite emplo
editeEmploye()
     {
       
     }


}
