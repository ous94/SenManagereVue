import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Classe/Employee';
import { EmployeeService } from 'src/app/employee.service';
import { UploadFileService } from 'src/app/upload-file.service';

@Component({
  selector: 'app-mes-emplyes',
  templateUrl: './mes-emplyes.component.html',
  styleUrls: ['./mes-emplyes.component.scss']
})
export class MesEmplyesComponent implements OnInit {

  listeEmploye:Employee[];

  showdetail:boolean=false;

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
//edite emplo
editeEmploye()
     {
       
     }


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

  }

    


    uploadPhotoEmployer(photo:String): String
    {
      return this.UploadFileService.getPhoto(photo);
    }
  }
