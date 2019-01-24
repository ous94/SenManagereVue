import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CompetenceService } from 'src/app/service/competence.service';
import { Competence } from 'src/app/Classe/Competence';
import { log } from 'util';

@Component({
  selector: 'app-ref-competence',
  templateUrl: './ref-competence.component.html',
  styleUrls: ['./ref-competence.component.scss']
})
export class RefCompetenceComponent implements OnInit {

  ajoutercompetence:Boolean=false;
  listerCompetence:Boolean=false;
  vsuivant:boolean=false;
  vprecedant:boolean=false;
  offset:number=0;
  listeCompences:Array<Competence>;
  competence: Competence = new Competence();
 

  compForm=new FormGroup({
    description:new FormControl(''),
  });



  constructor(private compservice:CompetenceService,private fb:FormBuilder) { }

  ngOnInit() {
    
    this.compForm= this.fb.group({
      description:[null,Validators.required],

    });
  }

  visibiliteLister()
  {
    this.ajoutercompetence=false;
    this.listerCompetence=!this.listerCompetence;
    this.compservice.getAllCompetencePagination(this.offset).subscribe((data)=>
    {
      this.listeCompences=data;
      if(this.listeCompences.length>0)
      {
        this.vsuivant=true;
      }
      console.log(this.listeCompences);
      
    });

  }

  visibiliteAjouter()
  {
    this.listerCompetence=false;
    this.ajoutercompetence=!this.ajoutercompetence;

  }
  validercompetence()
  {
   this.competence = this.compForm.value;
   this.competence.demandes=null;
   this.competence.employees=null;
   this.competence.idcompetence=null;
   console.log(this.compForm.value);
   
   this.compservice.addCompetence(this.competence).subscribe((data)=>
    {
    console.log(data);
    });
  }

  editeCompetence()
  {

  }
  deleteCompetence()
  {
    
  }
  suivant(){
    if(this.listeCompences.length>0)
    {
      this.offset++;
      this.vprecedant=true;
      this.compservice.getAllCompetencePagination(this.offset).subscribe((data)=>
    {
      this.listeCompences=data;
      if(this.listeCompences.length<=0)
      {
        this.vsuivant=false;
      }
      console.log(this.listeCompences);
      
    });
    }
  

  }
  precedant(){
    if(this.offset>0)
    {
      this.offset--;
      this.compservice.getAllCompetencePagination(this.offset).subscribe((data)=>
    {
      this.listeCompences=data;
      console.log(this.listeCompences);
      
    });
    }else{
      this.vsuivant=true;
      this.vprecedant=false;

    }

  }
}
