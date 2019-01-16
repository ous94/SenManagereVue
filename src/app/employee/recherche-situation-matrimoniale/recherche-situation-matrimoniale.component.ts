import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Classe/Employee';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
import { UploadFileService } from 'src/app/upload-file.service';

@Component({
  selector: 'app-recherche-situation-matrimoniale',
  templateUrl: './recherche-situation-matrimoniale.component.html',
  styleUrls: ['./recherche-situation-matrimoniale.component.scss']
})
export class RechercheSituationMatrimonialeComponent implements OnInit {

  rechercherSituation : Employee[];
  situationMatrimoniale:String;

//private baseurl: string = 'http://localhost:4201/api/customers';
constructor(private EmployeeService:EmployeeService,private router:Router,private UploadFileService:UploadFileService) {
  setTimeout(() => {

    
  }, 2000
   );
 }

  ngOnInit() {
    this.situationMatrimoniale=null;
  }

   // rechercher par age
   private searchCustomers() {
    this.EmployeeService.getCustomersBySituation(this.situationMatrimoniale)
      .subscribe(rechercherSituation => this.rechercherSituation = rechercherSituation);
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
        this.rechercherSituation.splice(this.rechercherSituation.indexOf(employee),1);
        
      },
      error => console.log(error));
     
}
//edite emplo
editeEmploye()
     {
       
     }


}
