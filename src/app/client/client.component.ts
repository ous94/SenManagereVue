import { Component, OnInit } from '@angular/core';
import { TypeIdentification } from '../Classe/TypeIdentification';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl,Validators, FormArray,} from '@angular/forms';
import { Client } from '../Classe/Client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  identificationListe: any;
  paysliste:any;
  localiteListe:any;
  client : Client = new Client();
  clientForm= new FormGroup({
    idclient:new FormControl(''),
    adresse :new FormControl(''),
    dateNaissance :new FormControl(''),
    email :new FormControl(''),
    identification :new FormControl(''),
    nom :new FormControl(''),
    observation :new FormControl(''),
    prenom :new FormControl(''),
    sexe :new FormControl(''),
    telephoneFixe :new FormControl(''),
    telephoneMobile :new FormControl(''),
    localite :new FormControl(''),
    pay :new FormControl(''),
    typeidentification :new FormControl(''),
    



  });


  constructor(private EmployeeService:EmployeeService,private router:Router,private fb:FormBuilder) {

    setTimeout(() => {
     // this.getdataEtude();
     this.getdatapays();
      this.getdataTypeIdentification();
     // this.getdtataEthnies();
      this.getdtataLocalite();
    this.paysliste=this.EmployeeService.getpays;
    this.localiteListe=this.EmployeeService.getLocalite;
    this.identificationListe=this.EmployeeService.getIdentification;

      
    }, 2000
     );
   }
  ngOnInit() {

    this.clientForm= this.fb.group({
      idclient:[null,Validators.required],
      prenom:[null,Validators.required],
      nom:[null,Validators.required],
      adresse:[null,Validators.required],
      dateNaissance :[null,Validators.required],
      telephoneFixe:[null,Validators.required],
      telephoneMobile:[null,Validators.required],
      email:[null,Validators.required],
      pay:[null,Validators.required],
      sexe:[null,Validators.required],
      typeidentification:[null,Validators.required],
      identification:[null,Validators.required],
      localite:[null,Validators.required],
      observation:[null,Validators.required],
  });
}


addAddressGroup(){
  return this.fb.group({
    primaryFlg:[],
    stresAddress :[null,Validators.required],
    state:[null,Validators.required],
    zipcode:[null,[Validators.required,Validators.pattern('^[0-9]{5}$')]], 
  });
}

//recuperation d'adresss
get addresArray(){
  return <FormArray>this.clientForm.get('adresse  ');
}
//ajout nouveau adresss

addAdress(){
  this.addresArray.push(this.addAddressGroup())
}

// recuperation prenom
get prenom()
{
  return this.clientForm.get('prenom');
}
//recuperation nom
get nom()
{
  return this.clientForm.get('nom');
}
//recuperation Adress
get adresse()
{
  return this.clientForm.get('adresse');
}
//recuperation dateNaissance
get dateNaissance()
{
  return this.clientForm.get('dateNaissance');
}
//recuperation Telephone fixe
get telephoneFixe()
{
  return this.clientForm.get('telephoneFixe');
}
//recuperation TelephoneMobile
get telephoneMobile()
{
  return this.clientForm.get('telephoneMobile');
}
//recuperation Èmail
get email()
{
  return this.clientForm.get('email');
}

//pour pays
get pay()
{
  return this.clientForm.get('pay');
}
//mise a jour Nationalité
getdatapays()
{
   //mise a jour  pays
   this.EmployeeService.getpays().subscribe(
    data =>{this.paysliste=data},
    error =>{console.log(this.paysliste)},

    ()=>{console.log('errer chargement des donnés')}
    );
}
//pour Type Identification
get typeidentification()
{
  return this.clientForm.get('typeidentification');
}

//recuperation identification 
get identification()
{
  return this.clientForm.get('identification');
}


//recuperation Sexe 
get sexe()
{
  return this.clientForm.get('sexe');
}

//recuperation Observation 
get observation()
{
  return this.clientForm.get('observation');
}

//localité
get localite()
{
  return this.clientForm.get('localite');
}
getdtataLocalite() :void{
  
  //misea ajour Localité
   this.EmployeeService.getLocalite().subscribe(
     data =>{this.localiteListe=data},
     error =>{console.log(this.localiteListe)},
     ()=>{console.log('errer chargement des donnés')}
     );
   }

//misa jour Type Identification
getdataTypeIdentification()
{
   //mise a jour  TypeIdentification
   this.EmployeeService.getIdentification().subscribe(
    data =>{this.identificationListe=data},
    error =>{console.log(this.identificationListe)},

    ()=>{console.log('errer chargement des donnés')}
    );
}
submithandle()
//s'enregistrer
{
  this.client= this.clientForm.value;
  console.log(this.client);
  
  
}
}
