import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Classe/Employee';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
import { UploadFileService } from 'src/app/upload-file.service';

@Component({
  selector: 'app-recherche-localite',
  templateUrl: './recherche-localite.component.html',
  styleUrls: ['./recherche-localite.component.scss']
})
export class RechercheLocaliteComponent implements OnInit {
  rechercherLocalite : Employee[];
  localite:String;

//private baseurl: string = 'http://localhost:4201/api/customers';
constructor(private EmployeeService:EmployeeService,private router:Router,private UploadFileService:UploadFileService) {
  setTimeout(() => {

    
  }, 2000
   );
 }

  ngOnInit() {
    this.localite=null;
  }

   // rechercher par age
   private searchCustomers() {
    this.EmployeeService.getEmployerByLocalite(this.localite)
      .subscribe(rechercherLocalite => this.rechercherLocalite =rechercherLocalite);
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
        this.rechercherLocalite.splice(this.rechercherLocalite.indexOf(employee),1);
        
      },
      error => console.log(error));
     
}
//edite emplo
editeEmploye()
     {
       
     }
}