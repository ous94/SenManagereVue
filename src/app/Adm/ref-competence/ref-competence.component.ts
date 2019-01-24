import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CompetenceService } from 'src/app/service/competence.service';
import { Competence } from 'src/app/Classe/Competence';

@Component({
  selector: 'app-ref-competence',
  templateUrl: './ref-competence.component.html',
  styleUrls: ['./ref-competence.component.scss']
})
export class RefCompetenceComponent implements OnInit {

  ajoutercompetence:Boolean=false;
  listerCompetence:Boolean=false;
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

}
