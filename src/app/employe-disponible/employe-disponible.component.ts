import { Component, OnInit } from '@angular/core';
import { Employee } from '../Classe/Employee';
import { EmployeeService } from '../employee.service';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-employe-disponible',
  templateUrl: './employe-disponible.component.html',
  styleUrls: ['./employe-disponible.component.scss']
})
export class EmployeDisponibleComponent implements OnInit {

 
  listeEmploye:Employee[];

  constructor(private EmployeeService:EmployeeService, private UploadFileService:UploadFileService) { 

    setTimeout(() => {
      this.reloadData();

      
    }, 2000
     );
   }

  ngOnInit() {
    this.reloadData();
  }


  reloadData() {
  
    //misea ajour Ethnies
     this.EmployeeService.getEmployes().subscribe(
       data =>{this.listeEmploye=data;console.log(data)},
       error =>{console.log(this.listeEmploye)},
 
       ()=>{console.log('errer chargement des donnés')}
       );
     }


// delete employee
deleteEmploye(employee:Employee) {
  this.EmployeeService.deleteEmployeeid(employee.idemploye)
    .subscribe(
      data => {
        console.log(data);
        this.listeEmploye.splice(this.listeEmploye.indexOf(employee),1);
        
      },
      error => console.log(error));
      this.reloadData();
}

    


    uploadPhotoEmployer(photo:String): String
    {
      return this.UploadFileService.getPhoto(photo);
  }
}
