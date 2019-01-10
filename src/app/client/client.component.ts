import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl,Validators, FormArray,} from '@angular/forms';
import { Client } from '../Classe/Client';
import { LocaliteService } from '../service/localite.service';
import { TypeIdentificationService } from '../service/type-identification.service';
import {PaysService} from '../service/pays.service';
import {ClientService} from '../service/client.service'
import { MessagesService } from '../service/messages.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  identificationListe: any;
  paysliste:any;
  localiteListe:any;
  suivant:Boolean=false;
  password1:string='test';
  password2:string='test';
  //Definition des Clients pour  recuperer le contenu du formulaire
  client : Client = new Client();
  clientFinal :Client =new Client();
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
    login :new FormControl(''),
    password :new FormControl(''),
    confirmer :new FormControl('')
  });

  constructor(private EmployeeService:EmployeeService,private router:Router,private fb:FormBuilder,private localiteService:LocaliteService,private typeIdentificationService:TypeIdentificationService ,private paysService :PaysService,private clientService :ClientService ,private messageService :MessagesService) {

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
      login:[null,Validators.required],
      password:[null,Validators.required],
      confirmer :[null,Validators.required]
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
get login()
{
  return this.clientForm.get('login');
}
get password()
{
  return this.clientForm.get('password');
}
get confirmer()
{
  return this.clientForm.get('confirmer');
}
submithandle()
//Fonction pour Enregister un Client
{
  this.password1=this.password.value;
  this.password2=this.confirmer.value;
  console.log("Password1 :"+this.password1);
  console.log("Password2 :"+this.password2);
   if(this.password.value.localeCompare(this.confirmer.value)==0)
   {
       this.client= this.clientForm.value;
       console.log(this.client);
      //Recuperation des  valeurs des champs Simple a partir des valeurs renseigner sur le formulaire
      this.clientFinal.adresse=this.client.adresse;
      this.clientFinal.email=this.client.email;
      this.clientFinal.identification=this.client.identification;
      this.clientFinal.nom=this.client.nom;
      this.clientFinal.observation=this.client.observation;
      this.clientFinal.prenom=this.client.prenom;
      this.clientFinal.sexe=this.client.sexe;
      this.clientFinal.telephoneFixe=this.client.telephoneFixe;
      this.clientFinal.telephoneMobile=this.client.telephoneMobile;
      this.clientFinal.login=this.client.login;
      this.clientFinal.password=this.client.password
      //Recuperation des valeurs des Champs qui sont de Objet un peut complexe
    /*  this.localiteService.getLocaliteByNom(this.localite.value).subscribe(
          (data)=>{this.clientFinal.localite=data},
          (error) =>{console.log("Erreur sur la localite");}
      );
      //Recuperation du Type d'Identification 
      this.typeIdentificationService.getTypeIdentificationByNom("CNI").subscribe(
         (data) =>{this.clientFinal.typeIdentification=data;},
         (error) =>{console.log("erreur sur le TypeIdentification");}
       );
      // Recupration du Pays
      this.paysService.getPaysByNom(this.pay.value).subscribe(
           (data)=>{this.clientFinal.pay=data;},
           (error)=>{console.log(error);}
       );
      console.log(this.clientFinal);
      //Sauvegarde du Client
      this.clientService.addClient(this.clientFinal).subscribe(
              (data) => {console.log(data)}, 
              (error) =>{console.log(error)} );
  */
       console.log(this.clientFinal);
    }
    else
    {
      console.log("erreur veillez confirmer le mot de Passe s'il vous  plait");
    }
}
  visibiliteDiv($event)
  {
       this.suivant=!this.suivant;
       var elements = document.getElementsByClassName("ativaction");
       for(let i:number=0;i<elements.length;i++)
       {
         
       }
  }
}
