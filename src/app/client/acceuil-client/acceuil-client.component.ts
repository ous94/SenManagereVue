import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {Router} from '@angular/router';
import { Client } from 'src/app/Classe/Client';
import {NgModel,FormsModule, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { RechercheCompetenceComponent } from 'src/app/employee/recherche-competence/recherche-competence.component';

@Component({
  selector: 'app-acceuil-client',
  templateUrl: './acceuil-client.component.html',
  styleUrls: ['./acceuil-client.component.scss']
})
export class AcceuilClientComponent implements OnInit {
  
  vpage :boolean =false;
  vEmploye:boolean=false;
  vDemandes:boolean=false;
  vProfile:boolean=false
  vMessages:boolean=false;
  vDefaut:boolean=true;
  vrecherche:boolean=false;
  rechercheForm= new FormGroup({
    recherche:new FormControl(''),
    
  });

  constructor(private localStorage:LocalStorage,private router :Router,private fb:FormBuilder) { 

    this.localStorage.getItem<Client>("client").subscribe((data:Client)=>
                        {
                             if(data==null)
                              { 
                                this.router.navigate(['test']);
                              }
                              else
                              {
                                this.vpage=true;
                              }
                        });
  }

  ngOnInit() {

    this.localStorage.getItem<Client>("client").subscribe((data:Client)=>
    {
         if(data==null)
          { 
            this.router.navigate(['test']);
          }
    });
    this.rechercheForm=this.fb.group({ recherche:[null,Validators.required]});
  }

  visibiliteEmploye($event)
  {
      this.vEmploye=!this.vEmploye;
      this.vDefaut=!this.vEmploye;
      this.vDemandes=false;
      this.vMessages=false;
      this.vProfile=false;
  }

  visibiliteProfile($event)
  {
    this.vProfile=!this.vProfile
    this.vDefaut=!this.vProfile;
    this.vEmploye=false;
    this.vDemandes=false;
    this.vMessages=false;
  }
  visibiliteMessages($event)
  {
    this.vMessages=!this.vMessages;
    this.vDefaut=!this.vMessages;
    this.vProfile=false;
    this.vEmploye=false;
    this.vDemandes=false;
  }
  visibiliteDemandes($event)
  {
    this.vDemandes=!this.vDemandes;
    this.vDefaut=!this.vDemandes;
    this.vMessages=false;
    this.vProfile=false;
    this.vEmploye=false;
  }
  deconnexion($event)
  {
       this.localStorage.removeItem("client").subscribe(()=>{});
       this.localStorage.clear().subscribe(()=>{});
       this.router.navigate(['test']);
  }
  touchRecherche($event)
  {
    this.vrecherche=true;
    let test:string=this.rechercheForm.value;
    console.log(test);
  }
}

