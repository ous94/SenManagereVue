import { Component, OnInit } from '@angular/core';
import { Employee } from '../Classe/Employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {

  showHideSideBar:boolean=false;


 // rechercherSituation : Employee[];
  //situation: String;


  constructor( private EmployeeService:EmployeeService,private router:Router) {}

  ngOnInit() {
    //this.situation='';
  }


    // rechercher par age
   // private searchCustomers() {
     // this.EmployeeService.getCustomersBySituation(this.situation)
       // .subscribe(rechercherSituation => this.rechercherSituation = rechercherSituation);
   // }

    //button de validation
  //rechercher() {
    //this.searchCustomers();
 // }
  

}

