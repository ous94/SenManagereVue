import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Classe/Employee';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { UploadFileService } from 'src/app/upload-file.service';

@Component({
  selector: 'app-recherche-employee',
  templateUrl: './recherche-employee.component.html',
  styleUrls: ['./recherche-employee.component.scss']
})
export class RechercheEmployeeComponent implements OnInit {

  rechercherAdress : Employee[];
  adress:String;

//private baseurl: string = 'http://localhost:4201/api/customers';
constructor(private EmployeeService:EmployeeService,private router:Router,private UploadFileService:UploadFileService) {
  setTimeout(() => {

    
  }, 2000
   );
 }

  ngOnInit() {
    this.adress=null;
  }

   // rechercher par age
   private searchCustomers() {
    this.EmployeeService.getEmployerByAdresse(this.adress)
      .subscribe(rechercherAdress => this.rechercherAdress = rechercherAdress);
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
        this.rechercherAdress.splice(this.rechercherAdress.indexOf(employee),1);
        
      },
      error => console.log(error));
     
}
//edite emplo
editeEmploye()
     {
       
     }


}
