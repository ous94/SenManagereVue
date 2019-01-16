import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Classe/Employee';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
import { UploadFileService } from 'src/app/upload-file.service';

@Component({
  selector: 'app-recherche-experience',
  templateUrl: './recherche-experience.component.html',
  styleUrls: ['./recherche-experience.component.scss']
})
export class RechercheExperienceComponent implements OnInit {

  rechercherExperience : Employee[];
  experience:String;

//private baseurl: string = 'http://localhost:4201/api/customers';
constructor(private EmployeeService:EmployeeService,private router:Router,private UploadFileService:UploadFileService) {
  setTimeout(() => {

    
  }, 2000
   );
 }

  ngOnInit() {
    this.experience=null;
  }

   // rechercher par age
   private searchCustomers() {
    this.EmployeeService.getEmployerByAdresse(this.experience)
      .subscribe(rechercherExperience => this.rechercherExperience =rechercherExperience);
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
        this.rechercherExperience.splice(this.rechercherExperience.indexOf(employee),1);
        
      },
      error => console.log(error));
     
}
//edite emplo
editeEmploye()
     {
       
     }


}
