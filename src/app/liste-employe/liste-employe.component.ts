import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Classe/Employee';

@Component({
  selector: 'app-liste-employe',
  templateUrl: './liste-employe.component.html',
  styleUrls: ['./liste-employe.component.scss']
})
export class ListeEmployeComponent implements OnInit {

  listeEmploye:Employee[];

  constructor(private EmployeeService:EmployeeService) { 

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
       data =>{this.listeEmploye=data},
       error =>{console.log(this.listeEmploye)},
 
       ()=>{console.log('errer chargement des donnés')}
       );
     }


     deleteEmploye()
     {

     }
     editeEmploye()
     {
       
     }



}
