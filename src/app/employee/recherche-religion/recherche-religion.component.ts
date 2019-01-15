import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Classe/Employee';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
import { UploadFileService } from 'src/app/upload-file.service';

@Component({
  selector: 'app-recherche-religion',
  templateUrl: './recherche-religion.component.html',
  styleUrls: ['./recherche-religion.component.scss']
})
export class RechercheReligionComponent implements OnInit {

  rechercherReligion : Employee[];
  religion:String;

//private baseurl: string = 'http://localhost:4201/api/customers';
constructor(private EmployeeService:EmployeeService,private router:Router,private UploadFileService:UploadFileService) {
  setTimeout(() => {

    
  }, 2000
   );
 }

  ngOnInit() {
    this.religion=null;
  }

   // rechercher par age
   private searchCustomers() {
    this.EmployeeService.getEmployerByAdresse(this.religion)
      .subscribe(rechercherReligion => this.rechercherReligion =rechercherReligion);
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
        this.rechercherReligion.splice(this.rechercherReligion.indexOf(employee),1);
        
      },
      error => console.log(error));
     
}
//edite emplo
editeEmploye()
     {
       
     }


}

