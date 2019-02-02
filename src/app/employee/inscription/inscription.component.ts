import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Classe/Employee';
import { Disponibilite } from 'src/app/Classe/Disponibilite';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
import { CompetenceService } from 'src/app/service/competence.service';
import { EthniesService } from 'src/app/service/ethnies.service';
import { LocaliteService } from 'src/app/service/localite.service';
import { LangueService } from 'src/app/service/langue.service';
import { PaysService } from 'src/app/service/pays.service';
import { NiveauEtudeService } from 'src/app/service/niveau-etude.service';
import { TypeIdentificationService } from 'src/app/service/type-identification.service';
import { UploadFileService } from 'src/app/upload-file.service';
import { DisponibiliteService } from 'src/app/service/disponibilite.service';
import { ToastrService } from 'ngx-toastr';
import {trigger,state,style,animate,transition,} from '@angular/animations';


///new version

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  tableauLangue: Array<String> =['Française','Arabe','Anglais','Chinois','Pheul','Serere','Wolof'];
  selectedLanguevalues=[];

  tableauCompetence: Array<String> =['Garde d enfants','Ménage','Linge','Gepassage','Cuisine','Baby-Syster','Nounou'];
  selectedCompetenceevalues=[];

  //disponiblité
  tableauDisponiblite: Array<String> =['Matin','Midi','Soir'];
  selectedDisponiblitevalues=[];

//Parametre pour la photo
  fichierChoisi: FileList;
  fichierCharger: File;
  nomFichier :String;

  favLangueErreur: boolean=true;
  favCompetenceErreur: boolean=true;
  favDisponibliteErreur: boolean=true;

  //nestedForm:FormGroup;
  //liste sugestion
  niveauetudeliste:any;
  ethniesListe :any;
  competenceListe:any;
  identificationListe:any;
  paysliste:any;
  localiteListe:any;
  employee1 : Employee = new Employee();
  employeeTest : Employee = new Employee();

  employe :Employee=new Employee();
  employeRetour :Employee=new Employee();
  disponibilite :Disponibilite= new Disponibilite();
  momentdisponible:String;
//
  nestedForm= new FormGroup({
    //idemploye:new FormControl(''),
    adresse :new FormControl(''),
    dateNaissance :new FormControl(''),
    email :new FormControl(''),
    identification :new FormControl(''),
    nom :new FormControl(''),
    observation :new FormControl(''),
    //photo :new FormControl(''),
    prenom :new FormControl(''),
    religion :new FormControl(''),
    situationMatrimoniale :new FormControl(''),
    telephoneFixe :new FormControl(''),
    telephoneMobile :new FormControl(''),
    competences :new FormControl(''),
   // demandes :new FormControl(''),
    disponibilites :new FormControl(''),
    //documents :new FormControl(''),
    localite :new FormControl(''),
    pay :new FormControl(''),
    typeIdentification :new FormControl(''),
    niveauetude :new FormControl(''),
    ethnies :new FormControl(''),
    //experiences :new FormControl(''),
    //formations :new FormControl(''),
    langues :new FormControl(''),
    //
    horaire :new FormControl(''),

  
    
  });

  //
  constructor(private service : ToastrService, private ToastrService:ToastrService,private EmployeeService:EmployeeService,private router:Router,private fb:FormBuilder,private competenceService: CompetenceService,private ethniesService :EthniesService,private langueService :LangueService ,private localiteService :LocaliteService,private niveauEtudeService :NiveauEtudeService,private paysService :PaysService,private typeIdentificationService :TypeIdentificationService,private uploadFileService :UploadFileService ,private disponibiliteService:DisponibiliteService) {
   
    setTimeout(() => {
      this.getdataEtude();
      this.getdatapays();
      this.getdataTypeIdentification();
      this.getdtataEthnies();
      this.getdtataLocalite();
    }, 2000
     );
    
    
   }
//
  ngOnInit() {


    this.nestedForm= this.fb.group({
     // idemploye:[1,Validators.required],
     prenom:[null,Validators.compose([Validators.minLength(3),Validators.maxLength(50),Validators.pattern('[a-zA-Z]*'), Validators.required])],
     nom:[null,Validators.compose([Validators.minLength(2),Validators.maxLength(30),Validators.pattern('[a-zA-Z]*'), Validators.required])],
     adresse:[null,Validators.compose([,Validators.minLength(2),Validators.maxLength(20), Validators.required])],
     telephoneFixe:[null,Validators.compose([Validators.minLength(9),Validators.maxLength(13),Validators.pattern('[0-9]*')])],
     telephoneMobile:[null,Validators.compose([Validators.minLength(9),Validators.maxLength(13), Validators.required,Validators.pattern('[0-9]*')])],
     email:[null,Validators.compose([Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$'),Validators.minLength(10),Validators.required])],

     ////
     /*  prenom:[null,Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.minLength(3)])],
      nom:[null,Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.minLength(2)])],
      adresse:[null,Validators.required],
      telephoneFixe:[null,Validators.compose([Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(9),Validators.maxLength(14)])],
      telephoneMobile:[null,Validators.compose([Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(9),Validators.maxLength(14)])],
      email:[null,Validators.compose([Validators.required,Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')])], */
      dateNaissance :[null,Validators.required],
      /*  */
      niveauetude :[null,Validators.required],
      pay:[null,Validators.required],
      typeidentification:[null,Validators.required],
      identification:[null,Validators.compose([Validators.required,Validators.pattern('[a-zA-Z0-9]*'),Validators.minLength(3),Validators.maxLength(14)])],
      ethnies:[null,Validators.required],
      religion:[null,Validators.required],
      situationMatrimoniale:[null,Validators.required],
      observation:[null,Validators.required],
      langues: this.addlanguecontrole(),
      competences: this.addCompetencecontrole(),
      disponibilites: this.addDisponiblitecontrole(),
      ///horaire
      horaire:[null,Validators.required],
      localite:[null,Validators.required],
    });
    this.competenceService.getAllCompetenceDescription().subscribe(
      (data)=>{this.tableauCompetence=data;},
      (error)=>{console.log(error);}
    );
    this.langueService.getAllLangueNom().subscribe(
      (data)=>{this.tableauLangue=data;},
      (error)=>{console.log(error);}
    );
   
  }

  get f() { return this.nestedForm.controls; }

  //
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

   //recuperation Horaire
   get horaire()
   {
     return this.nestedForm.get('horaire');
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

  // recuperation disponiblité array
  get disponibliteArray(){
    return <FormArray>this.nestedForm.get('disponibilites');
  }

  //controle Disponiblité
  addDisponiblitecontrole()
  {
    const arr = this.tableauDisponiblite.map( element   =>{
      return this.fb.control(false);
    });  
    return this.fb.array(arr);

  }
  //disponiblité checked
  //la langue checked
  getselectedDisponiblitevalues(){
    this.selectedDisponiblitevalues =[];
    this.disponibliteArray.controls.forEach((control , i)=>{
      if( control.value){
        this.selectedDisponiblitevalues.push(this.tableauDisponiblite[i]);
         
      }

    });
    console.log(this.selectedDisponiblitevalues);
    this.favDisponibliteErreur = this.selectedDisponiblitevalues.length >0 ? false :true;
    
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
  this.employee1= this.nestedForm.value;
  this.momentdisponible=this.horaire.value;
  //
  //Recuperation de Tyep d'Identification
  this.typeIdentificationService.getTypeIdentificationByNom(this.typeidentification.value).subscribe(
    (data) =>{this.employe.typeIdentification=data;},
    (error) =>{console.log("erreur sur le TypeIdentification");}
  );
  // Recuperation de la Localite
  this.localiteService.getLocaliteByNom(this.localite.value).subscribe(
    (data)=>{this.employe.localite=data},
    (error) =>{console.log("Erreur sur la localite");}
  );
  //Recuperation de L'ethnie
  this.ethniesService.getEthniesByNom(this.ethnies.value).subscribe(
    (data)=>{this.employe.ethny=data;},
    (error) =>{console.log("Erreur sur l ethnies");}
  );
  //Recuperation du Niveau d'etude
    this.niveauEtudeService.getNiveauEtudeByNiveau(this.niveauetude.value).subscribe(
   (data) =>{this.employe.niveauetude=data;},
   (error)=>{console.log("Erreur sur le niveauEtude");}
  );
  // Recuperation des =Competences
  this.employe.competences=[];
  for(let i:number=0;i<this.selectedCompetenceevalues.length;i++)
  {
    this.competenceService.getCompetenceByDescription(this.selectedCompetenceevalues[i]).subscribe(
      (data) =>{
                 this.employe.competences[i]=data;
               }
    );
  };
  // Recuperation des Langues
  this.employe.langues=[];
  for(let i:number=0;i<this.selectedLanguevalues.length;i++)
  {
    this.langueService.getLangueByNom(this.selectedLanguevalues[i]).subscribe(
      (data) =>{this.employe.langues[i]=data;}
    );
  };
  // Recuperation des disponibilites
  //
  console.log(this.employee1);
  this.employe.nom=this.employee1.nom;
  this.employe.prenom=this.employee1.prenom;
  this.employe.religion=this.employee1.religion;
  this.employe.adresse=this.employee1.adresse;
  this.employe.email=this.employee1.email
  //this.employe.observation=this.employee1.observation;
  this.employe.photo=this.employee1.photo;
  this.employe.situationMatrimoniale=this.employee1.situationMatrimoniale;
  // this.employe.dateNaissance=this.employee1.dateNaissance;
  this.employe.identification=this.employee1.identification;
  this.employe.telephoneFixe=this.employee1.telephoneFixe;
  this.employe.telephoneMobile=this.employee1.telephoneMobile;
  // 
  console.log("#### Employee1");
  console.log(this.employee1);
  console.log("### Fin Employee1")
  this.fichierCharger = this.fichierChoisi.item(0);
  this.employe.dateNaissance=this.dateNaissance.value;
  this.employe.observation=this.employee1.observation;
  this.paysService.getPaysByNom(this.pay.value).subscribe(
   (data)=>{
           this.employe.pay=data;
           //Sauvegarde de la photo de l'employe
            this.uploadFileService.uploadPhoto(this.fichierCharger).subscribe(
              (data)=>{
                    this.nomFichier=data;
                     this.employe.photo=this.nomFichier;
                     //Sauvegarde de l'employer
                     console.log(this.employe);
                     //this.showSuccess();
                     this.EmployeeService.addEmployee(this.employe).subscribe(
                       
                         (data) => { 
                                    //Sauvegarde des Disponibilites de l'employee
                                     this.employe.disponibilites=[];
                                     for(let i:number=0;i<this.selectedDisponiblitevalues.length;i++)
                                     {
                                         this.disponibilite=new Disponibilite();
                                         this.disponibilite.horaire=this.selectedDisponiblitevalues[i];
                                         this.disponibilite.moment=this.momentdisponible;
                                         console.log("matinnnnnnnnnnnnn");
                                         console.log(this.momentdisponible);
                                         console.log("matinnnnnnnnnnnnn");
;
                                         this.disponibilite.employee=data;
                                         console.log(this.disponibilite);
                                         this.disponibiliteService.addDisponibilite(this.disponibilite).subscribe(
                                             (data)=>{console.log(data);
                                              this.showSuccess();
                                              this.nestedForm.reset();
                                             },
                                             (error)=>{console.log(error);} );    
                                     }
                                     
                                     console.log(data)
                                 }, 
                         (error) =>{console.log(error); this.showError(); } );
                   },
             (error)=>{
               console.log(error);
             } );
      },
      (error)=> {console.log("erreur intervenant lors de la sauvegarde");});
  
      /////__________________________________

}
 selectFile(event) {
  const file = event.target.files.item(0)

  if (file.type.match('image.*')) {
    this.fichierChoisi = event.target.files;
  } else 
  {
    alert('Le format du Fichier choisi est Invalide!');
  }
}

//methode toastr
showSuccess() {

  this.ToastrService.success('Avec succès !', 'Enregistrement réussi !');
}
showError() {
  this.ToastrService.error('Veuillez recommencer !', 'Echec de connexion !');
} 
showWarning() {
  this.ToastrService.warning('Erreur fatal !', 'Attention !');
} 

//methode valider
validerSave() 
{
  console.log(this.nestedForm.value);
   // this.employeeTest= this.nestedForm.value;
   /*  this.employeeTest.prenom !=null && this.employeeTest.nom !=null && this.employeeTest.adresse !=null && this.employeeTest.dateNaissance !=null
    && this.employeeTest.telephoneFixe !=null && this.employeeTest.telephoneMobile!=null && this.employeeTest.email!=null && this.employeeTest.pay !=null
    && this.employeeTest.typeIdentification!=null && this.employeeTest.identification!=null && this.employeeTest.localite!=null && this.employeeTest.ethnies!=null
    && this.employeeTest.situationMatrimoniale!=null && this.employeeTest.nive auetude!=null && this.employeeTest.religion!=null && this.employeeTest.competences!=null
    && this.employeeTest.langues null && this.employeeTest.disponibilites!=null && this.employeeTest.horaire!=null  && this.employeeTest.observation!=null  && this.employeeTest.photo!=null && this.fichierChoisi!=null */
    //this.submithandle();
}

 // Success Type
 typeSuccess() {
  this.service.success('You are awesome!', 'Success!');
}

}
