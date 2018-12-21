import { Component, OnInit } from '@angular/core';
import { Ethenies } from '../Ethenies';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import {FormGroup,FormBuilder,Validators, FormControl   } from '@angular/forms';
import { Employee } from '../Classe/Employee';

@Component({
  selector: 'app-demande-employee',
  templateUrl: './demande-employee.component.html',
  styleUrls: ['./demande-employee.component.scss']
})
export class DemandeEmployeeComponent implements OnInit {

  malisteethnies :any;
  niveauetudeliste:any;
  langueliste:any;
  competenceListe:any;
  identificationListe:any;
  paysliste:any;


  //controllr de 

  employee: Employee = new Employee();

  Employyes: Observable<Employee[]>;


  newEmployee= new FormGroup({
    idemplyee:new FormControl(''),
    idlangue:new FormControl(''),
    idpays:new FormControl(''),
    idlocalite:new FormControl(''),
    idethnies:new FormControl(''),
    idnationalite:new FormControl(''),
    nom:new FormControl(''),
    prenom:new FormControl(''),
    dateNaissance:new FormControl(''),
    telephonefixe:new FormControl(''),
    telephoneMobile:new FormControl(''),
    email:new FormControl(''),
    idniveauEtude:new FormControl(''),
    ididentification:new FormControl(''),
    situationmatrimoniale:new FormControl(''),
    religion:new FormControl(''),
    adresse:new FormControl(''),
    photo:new FormControl(''),
    observation:new FormControl(''),



  });



  constructor( private EmployeeService:EmployeeService,private router:Router,private fb: FormBuilder) { 

    setTimeout(() => {
      this.reloadData();

      
    }, 2000
     );
  }

  

  ngOnInit() {
    this.reloadData();
   /*  for(let i=0;i<this.listEthnies.length;i++)
       {
       this.malisteethnies[i]=this.listEthnies[i].nom;
       console.log(this.malisteethnies);
       
         
       }; */
  }

  onSubmitform()
  {
    console.log(this.newEmployee.value);
     this.EmployeeService.addHero(this.newEmployee.value).
     subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
  

  }

  reloadData() {
  
    //misea ajour Ethnies
     this.EmployeeService.getEthnies().subscribe(
       data =>{this.malisteethnies=data},
       error =>{console.log(this.malisteethnies)},
 
       ()=>{console.log('errer chargement des donnés')}
       );
       //mise a jour Niveau Etudes
       this.EmployeeService.getNiveauEtude().subscribe(
        data =>{this.niveauetudeliste=data},
        error =>{console.log(this.niveauetudeliste)},
  
        ()=>{console.log('errer chargement des donnés')}
        );

         //mise a jour  Langues
       this.EmployeeService.getLangue().subscribe(
        data =>{this.langueliste=data},
        error =>{console.log(this.langueliste)},
  
        ()=>{console.log('errer chargement des donnés')}
        );

        //mise a jour  Competences
       this.EmployeeService.getCompetence().subscribe(
        data =>{this.competenceListe=data},
        error =>{console.log(this.competenceListe)},
  
        ()=>{console.log('errer chargement des donnés')}
        );

         //mise a jour  TypeIdentification
       this.EmployeeService.getIdentification().subscribe(
        data =>{this.identificationListe=data},
        error =>{console.log(this.identificationListe)},
  
        ()=>{console.log('errer chargement des donnés')}
        );
         //mise a jour  pays
       this.EmployeeService.getpays().subscribe(
        data =>{this.paysliste=data},
        error =>{console.log(this.paysliste)},
  
        ()=>{console.log('errer chargement des donnés')}
        );


       


   }

}
