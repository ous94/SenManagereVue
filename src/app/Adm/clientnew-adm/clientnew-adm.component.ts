import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Classe/Client';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { LocaliteService } from 'src/app/service/localite.service';
import { TypeIdentificationService } from 'src/app/service/type-identification.service';
import { PaysService } from 'src/app/service/pays.service';
import { ClientService } from 'src/app/service/client.service';
import { MessagesService } from 'src/app/service/messages.service';
import { Localite } from 'src/app/Classe/Localite';
import { TypeIdentification } from 'src/app/Classe/TypeIdentification';
import { Pays } from 'src/app/Classe/Pays';
import { MustMatch } from 'src/app/client/ValidationPassword';

@Component({
  selector: 'app-clientnew-adm',
  templateUrl: './clientnew-adm.component.html',
  styleUrls: ['./clientnew-adm.component.scss']
})
export class ClientnewAdmComponent implements OnInit {

  identificationListe: any;
  paysliste:any;
  localiteListe:any;
  suivant:Boolean=false;
  suivant2:Boolean=false;
  suivant3:Boolean=false;
  erreurEmail:Boolean=false;

  emaile:Boolean;
  tel:Boolean;


  password1:string='test';
  password2:string='test';
  //Definition des Clients pour  recuperer le contenu du formulaire
  client3 : Client = new Client();
  client1 : Client = new Client();
  client2 : Client = new Client();

  clientFinal :Client =new Client();

   clientForm1: FormGroup= new FormGroup({
    adresse :new FormControl(''),
    email :new FormControl(''),
    nom :new FormControl(''),
    prenom :new FormControl(''),
    sexe :new FormControl(''),
    
  });
//client2
  clientForm2= new FormGroup({
   
    observation :new FormControl(''),
    identification :new FormControl(''),
    telephoneFixe :new FormControl(''),
    telephoneMobile :new FormControl(''),
    localite :new FormControl(''),
    pay :new FormControl(''),
    typeidentification :new FormControl(''),
  });
//client3
  clientForm3= new FormGroup({
    login :new FormControl(''),
    password :new FormControl(''),
    confirmer :new FormControl('')
  });

  

  constructor(private ToastrService:ToastrService,private EmployeeService:EmployeeService,private router:Router,private fb:FormBuilder,private localiteService:LocaliteService,private typeIdentificationService:TypeIdentificationService ,private paysService :PaysService,private clientService :ClientService ,private messageService :MessagesService) {

    setTimeout(() => {
     // this.getdataEtude();
     this.getdatapays();
      this.getdataTypeIdentification();
     // this.getdtataEthnies();
      this.getdtataLocalite();
    this.EmployeeService.getpays().subscribe(
         (data)=> {this.paysliste=data;},
       (error) =>{console.log("erreur sur pays")} 
    );
    this.EmployeeService.getLocalite().subscribe(
      (data)=>{this.localiteListe=data}
    );
    this.EmployeeService.getIdentification().subscribe(
      (data)=>{this.identificationListe=data}
    );

      
    }, 2000
     );
   }
  ngOnInit() {

    this.clientForm1= this.fb.group({
      prenom:[null,Validators.compose([Validators.minLength(3),Validators.maxLength(50), Validators.required])],
      nom:[null,Validators.compose([Validators.minLength(3),Validators.maxLength(50), Validators.required])],
      adresse:[null,Validators.compose([,Validators.minLength(2),Validators.maxLength(20), Validators.required])],
      email:[null,Validators.compose([Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,3}$'),Validators.minLength(10),Validators.required])],
      sexe:[null,Validators.required]   });
      ///client2
  this.clientForm2= this.fb.group({
    telephoneFixe:[null,Validators.compose([Validators.minLength(9),Validators.maxLength(13),Validators.pattern('[0-9]*')])],
    telephoneMobile:[null,Validators.compose([Validators.minLength(9),Validators.maxLength(13), Validators.required,Validators.pattern('[0-9]*')])],
    pay:[null,Validators.required],
    typeidentification:[null,Validators.required],
    identification:[null,Validators.required],
    localite:[null,Validators.required],
    observation:[null],
});
//client3
 this.clientForm3= this.fb.group({
  login:[null,Validators.compose([Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$'),Validators.minLength(10),Validators.required])],
  password:[null,Validators.compose([Validators.minLength(8),Validators.required])],
  confirmer :[null,Validators.compose([Validators.required,Validators.pattern(this.password.value)])]
}, {
   validator: MustMatch('password', 'confirmer')
});



  
}



get f() { return this.clientForm3.controls; }



// recuperation prenom
get prenom()
{
  return this.clientForm1.get('prenom');
}
//recuperation nom
get nom()
{
  return this.clientForm1.get('nom');
}
//recuperation Adress
get adresse()
{
  return this.clientForm1.get('adresse');
}

//recuperation Èmail
get email()
{
  return this.clientForm1.get('email');
}
//recuperation Sexe 
get sexe()
{
  return this.clientForm1.get('sexe');
}

//recuperation Telephone fixe
get telephoneFixe()
{
  return this.clientForm2.get('telephoneFixe');
}
//recuperation TelephoneMobile
get telephoneMobile()
{
  return this.clientForm2.get('telephoneMobile');
}
//pour pays
get pay()
{
  return this.clientForm2.get('pay');
}
//recuperation Observation 
get observation()
{
  return this.clientForm2.get('observation');
}

//localité
get localite()
{
  return this.clientForm2.get('localite');
}

//pour Type Identification
get typeidentification()
{
  return this.clientForm2.get('typeidentification');
}

//recuperation identification 
get identification()
{
  return this.clientForm2.get('identification');
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
  return this.clientForm3.get('login');
}
get password()
{
  return this.clientForm3.get('password');
}
get confirmer()
{
  return this.clientForm3.get('confirmer');
}

submithandle1()
{
  this.client1= this.clientForm1.value;
  console.log(this.client1);
  

}
submithandle2(){
  this.client2=this.clientForm2.value;

}
submithandle()
//Fonction pour Enregister un Client
{

       this.client1= this.clientForm1.value;
       this.client3=this.clientForm3.value;
       this.client2=this.clientForm2.value;

       let typeid:string=this.typeidentification.value;
       let paysSelect:string=this.pay.value;
       console.log("typeId :"+typeid+"  Pays :"+paysSelect);
       console.log(this.client1+','+this+'.'+this.client2+','+this.client3);
      //Recuperation des  valeurs des champs Simple a partir des valeurs renseigner sur le formulaire
      this.clientFinal.adresse=this.client1.adresse;
      this.clientFinal.email=this.client1.email;
      this.clientFinal.prenom=this.client1.prenom;
      this.clientFinal.sexe=this.client1.sexe;
      this.clientFinal.nom=this.client1.nom;

      this.clientFinal.identification=this.client2.identification;
      this.clientFinal.observation=this.client2.observation;
      this.clientFinal.telephoneFixe=this.client2.telephoneFixe;
      this.clientFinal.telephoneMobile=this.client2.telephoneMobile;

      this.clientFinal.login=this.client3.login;
      this.clientFinal.password=this.client3.password
      console.log("pour client final"+this.clientFinal);
      console.log("pour client client1"+this.client1);
      console.log("pour client client2"+this.client2);

      console.log(this.client2);


      this.clientService.getEmailClient(this.clientFinal.email).subscribe((data:boolean)=>{
        this.emaile=data;
        this.clientService.getTelephoneClient(this.clientFinal.telephoneMobile).subscribe((data:boolean)=>{
          this.tel=data;
          if(this.tel && this.emaile)
      {
        this.showError();
        console.log("Double"+this.tel+" popo "+this.emaile);
        
      }

      else if(this.tel)
      {
        console.log("telephone :"+this.tel);
        this.showErrortel();
        this.afficheSuivant4();
        

      }else if(this.emaile)
      {
        this.showErrorEmail();
        console.log("Emailllllll"+this.emaile);
        this.afficheSuivant();
        this.suivant3=false;
        this.erreurEmail=true;


      }
      else
    {  

      console.log("Default");

      
      //Recuperation des valeurs des Champs qui sont de Objet un peut complexe
      this.localiteService.getLocaliteByNom(this.localite.value).subscribe(
          (data:Localite)=>
          {
            this.clientFinal.localite=data
            console.log("//Recuperation du Type d'Identification "+typeid);
            this.typeIdentificationService.getTypeIdentificationByNom(typeid).subscribe(
             (data:TypeIdentification) =>
             {
               this.clientFinal.typeIdentification=data;
               console.log("// Recupration du Pays"+paysSelect);
              this.paysService.getPaysByNom(paysSelect).subscribe(
              (data:Pays)=>
              {
                this.clientFinal.pay=data;
                console.log(this.clientFinal);
               
                console.log("//Sauvegarde du Client");
                this.clientService.addClient(this.clientFinal).subscribe(
                (data:Client) => 
                {
                  console.log(data)
                  if(data==null)
                  {
                    this.showError();
                  }else{
                    this.showSuccess()
                    this.clientForm3.reset();
                    this.clientForm2.reset();
                  this.clientForm1.reset();

                  }

                }, 
                (error) =>
                {
                  console.log(error);
                } );
              },
              (error)=>
              {
                console.log(error);
              });  
            },
            (error) =>
            {
              console.log("erreur sur le TypeIdentification");
            });        
          },
          (error) =>
          {
            console.log("Erreur sur la localite");
          });
          console.log(this.clientFinal);
     }

          
        });
        
      });
      

      
      /* 
          
 */
    
}
  emailLogin()
  {
    console.log(this.email.value);
    this.login.setValue(this.email.value);
  }

  afficheSuivant()
  {
    this.suivant =!this.suivant;
    this.suivant2=false;

  }
  afficheSuivant2()
  {
    this.suivant2 =!this.suivant2;
    this.suivant=!this.suivant;
    this.submithandle1();
  }
  afficheSuivant3()
  {
    this.suivant3 = true;
    this.suivant2=!this.suivant2;
    this.emailLogin();
    this.submithandle2();
  }
  afficheSuivant4(){
    this.suivant2=!this.suivant2;
    this.suivant3=!this.suivant3;

  }
  showSuccess() {
    this.ToastrService.success('Avec succès !', 'Inscription réussie !');
  }
  showErrortel() {
    this.ToastrService.error('verifiez votre  TelephoneMobile  !', 'Inscription non réussie !');
  } 
  showErrorEmail() {
    this.ToastrService.error('verifiez votre Email  !', 'Inscription non réussie !');
  } 
  showError() {
    this.ToastrService.error('verifiez votre Email ou TelephoneMobile  !', 'Inscription non réussie !');
  } 
}