import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl,Validators, FormArray,} from '@angular/forms';
import { Client } from '../../Classe/Client';
import { LocaliteService } from '../../service/localite.service';
import { TypeIdentificationService } from '../../service/type-identification.service';
import {PaysService} from '../../service/pays.service';
import {ClientService} from '../../service/client.service'
import { MessagesService } from '../../service/messages.service';
import { Observable } from 'rxjs';
import {MustMatch} from '../../client/ValidationPassword';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  //
  editer :boolean=false;
  clientConnecte:Client= new Client();
  //
  
  constructor(private EmployeeService:EmployeeService,private router:Router,private fb:FormBuilder,private localiteService:LocaliteService,private typeIdentificationService:TypeIdentificationService ,private paysService :PaysService,private clientService :ClientService ,private messageService :MessagesService,private localStorage:LocalStorage) {

    this.localStorage.getItem<Client>("client").subscribe(
        (data:Client)=>{this.clientConnecte=data;});
   }
   ngOnInit() {}
  editerProfile($event)
  {
    this.editer=true;
  }

}