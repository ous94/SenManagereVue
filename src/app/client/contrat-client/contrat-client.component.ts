import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/Classe/Contrat';
import { ContratService } from 'src/app/service/contrat.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Client } from 'src/app/Classe/Client';
import { Router } from '@angular/router';
import { RechercheContrat } from 'src/app/Classe/RechercheContrat';

@Component({
  selector: 'app-contrat-client',
  templateUrl: './contrat-client.component.html',
  styleUrls: ['./contrat-client.component.scss']
})
export  class ContratClientComponent implements OnInit {
   listeContrats:Array<Contrat>=[];
   clientConnecte:Client;
  constructor(private contratService :ContratService,private localStorage :LocalStorage ,private router:Router) { 

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
          let rechercheContrat:RechercheContrat=new RechercheContrat();
          rechercheContrat.client=this.clientConnecte;
          rechercheContrat.offset=0;
          this.contratService.listeContratClient(rechercheContrat).subscribe(
            (data:Contrat[])=>{this.listeContrats=data;})
        }
      });
  }

  ngOnInit() {
  }

}
