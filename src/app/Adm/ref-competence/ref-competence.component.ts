import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CompetenceService } from 'src/app/service/competence.service';
import { Competence } from 'src/app/Classe/Competence';
import { log } from 'util';
import { ToastrService } from 'ngx-toastr';

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
  vEdite:boolean=false;
  vajout:boolean=false;
  offset:number=0;
  listeCompences:Array<Competence>;
  competence: Competence = new Competence();
  compEdite:Competence;
 

  compForm=new FormGroup({
    description:new FormControl(''),
  });



  constructor(private ToastrService:ToastrService,private compservice:CompetenceService,private fb:FormBuilder) { }

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
   if(this.competence.description==null)
   {
     this.showError();
   }
   else if(!this.vajout){

    this.compservice.addCompetence(this.competence).subscribe((data)=>
    {
    console.log(data);
    if(data==null)
    {
      this.showError();

    }
    else{
      this.showSuccess();
    }
    });

   }else
   {     
     this.compservice.updateCompetence(this.compEdite.idcompetence,this.competence).
     subscribe((data)=>  {
    console.log(data);
    if(data==null)
    {
      this.showErrorEdite();

    }
      else{
      this.showSuccessedite();
      this.compForm.reset();
    }
    });
   }
   
  
  }

  // delete employee
  deleteCompetence(competence:Competence) {
    //alert('confirmer Suppression');
    confirm('confirmer Suppression');
    if(confirm)
  this.compservice.deleteCompetenceById(competence.idcompetence)
    .subscribe(
      data => {
        console.log(data);
        this.listeCompences.splice(this.listeCompences.indexOf(competence),1);
        
      },
      error => console.log(error));
}
  editeCompetence(competence:Competence)
  {
    this.compEdite=competence;
    console.log(this.compEdite);
    this.vEdite=true;
    this.vajout=true;
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
      this.vsuivant=true;
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

  showSuccess() {
    this.ToastrService.success('Avec succès !', 'Enregistrement réussie !');
  }
  showError() {
    this.ToastrService.error('Veuillez recommencer !', 'Echec Enregistrement !');
  } 
  showErrorEdite() {
    this.ToastrService.error('Veuillez recommencer !', 'Echec Enregistrement !');
  } 

  showSuccessedite() {
    this.ToastrService.success('Avec succès !', 'Modification réussie !');
  }
}
