import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { DemandeService } from 'src/app/service/demande.service';
import {Client} from 'src/app/Classe/Client';
import {Competence} from 'src/app/Classe/Competence';
import {Employee} from 'src/app/Classe/Employee';

@Component({
  selector: 'app-liste-demande',
  templateUrl: './liste-demande.component.html',
  styleUrls: ['./liste-demande.component.scss']
})
export class ListeDemandeComponent implements OnInit {

  listeEmployeeDemande:Array<Employee>=[];
  listeCompetenceDemande :Array<Competence>=[];
  clientConnecter:Client=new Client();


  constructor(private localStorage :LocalStorage ,private demandeService :DemandeService) 
  {
     this.localStorage.getItem<Client>("client").subscribe((data:Client)=>{this.clientConnecter=data;});
   }

  ngOnInit() {
  }

}
