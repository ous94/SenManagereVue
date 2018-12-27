import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray,FormControl } from '@angular/forms';
import { element } from '@angular/core/src/render3';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../Classe/Employee';
import { Pays } from '../Classe/Pays';
import { TypeIdentification } from '../Classe/TypeIdentification';
import { Localite } from '../Classe/Localite';
import { Ethnies } from '../Classe/Ethnies';
import { Niveauetude } from '../Classe/Niveauetude';
import { Competence } from '../Classe/Competence';
import { Langue } from '../Classe/Langue';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',       
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  tableauLangue: Array<String> =['Wolof','française','Anglais','Chinois','pheul','Serere'];
  tableauCompetence: Array<String> =['Ménage','Linge','Garde d enfants','Repassage','Cuisine'];

  selectedLanguevalues=[];
  selectedCompetenceevalues=[];

  favLangueErreur: boolean=true;
  favCompetenceErreur: boolean=true;
  //nestedForm:FormGroup;
  //liste sugestion
  niveauetudeliste:any;
  ethniesListe :any;
  competenceListe:any;
  identificationListe:any;
  paysliste:any;
  localiteListe:any;
  employee1 : Employee = new Employee();
  employee2 : Employee = new Employee();



  nestedForm= new FormGroup({
    idemploye:new FormControl(''),
    adresse :new FormControl(''),
    dateNaissance :new FormControl(''),
    email :new FormControl(''),
    identification :new FormControl(''),
    nom :new FormControl(''),
    observation :new FormControl(''),
    photo :new FormControl(''),
    prenom :new FormControl(''),
    religion :new FormControl(''),
    situationMatrimoniale :new FormControl(''),
    telephoneFixe :new FormControl(''),
    telephoneMobile :new FormControl(''),
    competences :new FormControl(''),
    demandes :new FormControl(''),
    disponibilites :new FormControl(''),
    documents :new FormControl(''),
    localite :new FormControl(''),
    pay :new FormControl(''),
    typeIdentification :new FormControl(''),
    niveauetude :new FormControl(''),
    ethnies :new FormControl(''),
    experiences :new FormControl(''),
    formations :new FormControl(''),
    langues :new FormControl(''),
    



  });




  constructor(private EmployeeService:EmployeeService,private router:Router,private fb:FormBuilder) {

    setTimeout(() => {
      this.getdataEtude();
      this.getdatapays();
      this.getdataTypeIdentification();
      this.getdtataEthnies();
      this.getdtataLocalite();

      
    }, 2000
     );
   }

  ngOnInit() {

    this.nestedForm= this.fb.group({
      idemploye:[null,Validators.required],
      prenom:[null,Validators.required],
      nom:[null,Validators.required],
      adresse:[null,Validators.required],
      dateNaissance :[null,Validators.required],
      telephoneFixe:[null,Validators.required],
      telephoneMobile:[null,Validators.required],
      email:[null,Validators.required],
      niveauetude :[null,Validators.required],
      pay:[null,Validators.required],
      typeidentification:[null,Validators.required],
      identification:[null,Validators.required],
      ethnies:[null,Validators.required],
      religion:[null,Validators.required],
      situationMatrimoniale:[null,Validators.required],
      langues: this.addlanguecontrole(),
      competences: this.addCompetencecontrole(),
      localite:[null,Validators.required],


     // address: this.fb.array([this.addAddressGroup()]),

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
    return <FormArray>this.nestedForm.get('adresse  ');
  }
  //ajout nouveau adresss

  addAdress(){
    this.addresArray.push(this.addAddressGroup())
  }

  // recuperation prenom
  get prenom()
  {
    return this.nestedForm.get('prenom');
  }
  //recuperation nom
  get nom()
  {
    return this.nestedForm.get('nom');
  }
  //recuperation Adress
  get adresse()
  {
    return this.nestedForm.get('adresse');
  }
  //recuperation dateNaissance
  get dateNaissance()
  {
    return this.nestedForm.get('dateNaissance');
  }
  //recuperation Telephone fixe
  get telephoneFixe()
  {
    return this.nestedForm.get('telephoneFixe');
  }
  //recuperation TelephoneMobile
  get telephoneMobile()
  {
    return this.nestedForm.get('telephoneMobile');
  }
  //recuperation Èmail
  get email()
  {
    return this.nestedForm.get('email');
  }
  //pour niveau etude etude
  get niveauetude()
  {
    return this.nestedForm.get('niveauetude');
  }
  //pour pays
  get pay()
  {
    return this.nestedForm.get('pay');
  }
  //pour Type Identification
  get typeidentification()
  {
    return this.nestedForm.get('typeidentification');
  }
  //recuperation identification 
  get identification()
  {
    return this.nestedForm.get('identification');
  }
  //recuperation Ethnies 
  get ethnies()
  {
    return this.nestedForm.get('ethnies');
  }
  //recuperation Religion 
  get religion()
  {
    return this.nestedForm.get('religion');
  }
  //recuperation situationmatrimoniale 
  get situationMatrimoniale()
  {
    return this.nestedForm.get('situationMatrimoniale');
  }
  //localité
  get localite()
  {
    return this.nestedForm.get('localite');
  }


  //mise a jour Niveau Etudes
  getdataEtude()
  {
    this.EmployeeService.getNiveauEtude().subscribe(
      data =>{this.niveauetudeliste=data},
      error =>{console.log(this.niveauetudeliste)},
  
      ()=>{console.log('errer chargement des donnés')}
      );
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
  //recupertion de Ethnies
  getdtataEthnies() {
  
    //misea ajour Ethnies
     this.EmployeeService.getEthnies().subscribe(
       data =>{this.ethniesListe=data},
       error =>{console.log(this.ethniesListe)},
 
       ()=>{console.log('errer chargement des donnés')}
       );
     }

     //recupertion de Ethnies
  getdtataLocalite() {
  
    //misea ajour Ethnies
     this.EmployeeService.getLocalite().subscribe(
       data =>{this.localiteListe=data},
       error =>{console.log(this.localiteListe)},
 
       ()=>{console.log('errer chargement des donnés')}
       );
     }
 

 



  // recuperation langue array
  get langueArray(){
    return <FormArray>this.nestedForm.get('langues');
  }
  // recuperation Competence array
  get competenceArray(){
    return <FormArray>this.nestedForm.get('competences');
  }
  //controle Langue
  addlanguecontrole()
  {
    const arr = this.tableauLangue.map( element   =>{
      return this.fb.control(false);
    });  
    return this.fb.array(arr);

  }
  //controle competences
  addCompetencecontrole()
  {
    const arr = this.tableauCompetence.map( element   =>{
      return this.fb.control(false);
    });  
    return this.fb.array(arr);

  }
  //la langue checked
  getselectedLanguevalues(){
    this.selectedLanguevalues =[];
    this.langueArray.controls.forEach((control , i)=>{
      if( control.value){
        this.selectedLanguevalues.push(this.tableauLangue[i]);
         
      }

    });
    console.log(this.selectedLanguevalues);
    this.favLangueErreur = this.selectedLanguevalues.length >0 ? false :true;
    
  }
//la langue checked Competence
getselectedCompetencevalues(){
  this.selectedCompetenceevalues =[];
  this.competenceArray.controls.forEach((control , i)=>{
    if( control.value){
      this.selectedCompetenceevalues.push(this.tableauCompetence[i]);
       
    }

  });
  console.log(this.selectedCompetenceevalues);
  this.favCompetenceErreur = this.selectedCompetenceevalues.length >0 ? false :true;
  
}

  checkLangueTouched(){
    let flg = false;   
    this.langueArray.controls.forEach(control =>{
      if(control.touched )
      {
        flg =true;
      }

    });
    return flg;   
  }

submithandle()
{
   const newItemlangu =this.selectedLanguevalues;
   const newitemCompetence=this.selectedCompetenceevalues;
   
   //this.employee = new Employee();
   this.employee1= this.nestedForm.value;
   this.employee2= this.nestedForm.value;

   //recuperation idEmploye
   this.employee1.idemploye = this.employee1.telephoneMobile+2018;
   //recuperation competences
   //this.employee2.competences = this.selectedCompetenceevalues;
   //recuperation langue
   this.employee1.langues = this.selectedLanguevalues;

   let pays =new Pays();
   pays.nom=this.pay.value;
   this.employee1.pay=pays;

   let typeID=new TypeIdentification();
   typeID.nom=this.typeidentification.value;
   this.employee1.typeIdentification=typeID;

   let loc=new Localite();
   loc.nom=this.localite.value;
   this.employee1.localite=loc;


   let ethni=new Ethnies();
   ethni.nom=this.ethnies.value;
   this.employee1.ethny=ethni;

  let niveauEt= new Niveauetude();
  niveauEt.niveau=this.niveauetude.value;
  this.employee1.niveauetude=niveauEt;

this.employee1.competences=[];
  for(let i:number=0;i<this.selectedCompetenceevalues.length;i++)
  {
    let comp=new Competence();
    comp.description=this.selectedCompetenceevalues[i];
    console.log(comp);
    this.employee1.competences[i]=comp;
  }

  this.employee1.langues=[];
  for(let i:number=0;i<this.selectedLanguevalues.length;i++)
  {
    let langue=new Langue();
    langue.nom=this.selectedLanguevalues[i];
    console.log(langue);
    this.employee1.langues[i]=langue;
  }
  

   

   //recuperation pays
   console.log(this.employee1);
  this.EmployeeService.addEmployer2(this.employee1).
  subscribe(data => console.log(data), 
  error => console.log(error));




  // this.EmployeeService.getpaysbyNom("mali");
   //this.employee2. = this.employee1.;``
   //console.log(this.employee2.pay);
   
   





  // console.log(this.employee1.pay);
   
    //console.log({...this.nestedForm.value, newItemlangu,newitemCompetence});
 
  //console.log(this.nestedForm.value);
  //this.EmployeeService.addEmployee(this.nestedForm.value).
  //subscribe(data => console.log(data), error => console.log(error));
 



  
  
}
}
