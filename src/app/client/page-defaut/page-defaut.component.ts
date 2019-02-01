import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Classe/Client';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';
import { ContratService } from 'src/app/service/contrat.service';
import { DemandeService } from 'src/app/service/demande.service';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-page-defaut',
  templateUrl: './page-defaut.component.html',
  styleUrls: ['./page-defaut.component.scss']
})
export class PageDefautComponent implements OnInit {
   clientConnecte:Client;
   countDemande:number=0;
   countContrat:number=0;
   countEmployeLibre:number=0;
   countNouveau:number=0;
  constructor(private localStorage:LocalStorage,private router:Router,private contratService:ContratService,private demandeService:DemandeService,private employeService :EmployeeService) {
    this.localStorage.getItem<Client>("client").subscribe(
      (data:Client)=>{
        if(data==null)
        { 
           this.clientConnecte=data;
           this.router.navigate(['']);
        }
        else
        {
          this.clientConnecte=data;
          this.demandeService.countDemandeClient(this.clientConnecte).subscribe((data:number)=>{this.countDemande=data;});
          this.contratService.countContratClient(this.clientConnecte).subscribe((data:number)=>{this.countContrat=data;});
          this.employeService.countEmployeLibre().subscribe((data:number)=>{this.countEmployeLibre=data;});
          this.employeService.countEmployeNouveau().subscribe((data:number)=>{this.countNouveau=data;});
          console.log(this.clientConnecte);
        }
      });
   }

  ngOnInit() {
  }

}
