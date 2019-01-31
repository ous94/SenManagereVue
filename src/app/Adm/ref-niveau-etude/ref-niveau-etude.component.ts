import { Component, OnInit } from '@angular/core';
import { Niveauetude } from 'src/app/Classe/Niveauetude';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EthniesService } from 'src/app/service/ethnies.service';
import { NiveauEtudeService } from 'src/app/service/niveau-etude.service';

@Component({
  selector: 'app-ref-niveau-etude',
  templateUrl: './ref-niveau-etude.component.html',
  styleUrls: ['./ref-niveau-etude.component.scss']
})
export class RefNiveauEtudeComponent implements OnInit {

  ajoutercompetence:Boolean=false;
  listerCompetence:Boolean=false;
  vsuivant:boolean=false;
  vprecedant:boolean=false;
  vEdite:boolean=false;
  vajout:boolean=false;
  offset:number=0;
  listeNiveauetude:Array<Niveauetude>;
  niveauetude: Niveauetude = new Niveauetude();
  niveauetudeEdite:Niveauetude;
 

  compForm=new FormGroup({
    niveau:new FormControl(''),
  });



  constructor(private ToastrService:ToastrService,private compservice:NiveauEtudeService,private fb:FormBuilder) { }

  ngOnInit() {
    
    this.compForm= this.fb.group({
      niveau:[null,Validators.required],

    });
  }

  visibiliteLister()
  {
    this.ajoutercompetence=false;
    this.listerCompetence=!this.listerCompetence;
    this.compservice.getAllNiveauetudePagination(this.offset).subscribe((data)=>
    {
      this.listeNiveauetude=data;
      if(this.listeNiveauetude.length>0)
      {
        this.vsuivant=true;
      }
      console.log(this.listeNiveauetude);
      
    });

  }

  visibiliteAjouter()
  {
    this.listerCompetence=false;
    this.ajoutercompetence=!this.ajoutercompetence;

  }
  validerNiveau()
  {
   this.niveauetude = this.compForm.value;
   this.niveauetude.employees=null;
   console.log(this.compForm.value);

   if(this.niveauetude.niveau=="" || this.niveauetude.niveau==null)
   {
     this.showError();
   }
   else if(!this.vajout){

    this.compservice.addNiveauetude(this.niveauetude).subscribe((data)=>
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

   }
   else
   {     
     this.compservice.updateNiveauetude(this.niveauetudeEdite.idniveau,this.niveauetude).
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
  deleteNiveauetude(niveauetude:Niveauetude) {
    //alert('confirmer Suppression');
    confirm('confirmer Suppression');
    if(confirm)
  this.compservice.deleteNiveauetudeById(niveauetude.idniveau)
    .subscribe(
      data => {
        console.log(data);
        this.listeNiveauetude.splice(this.listeNiveauetude.indexOf(niveauetude),1);
        
      },
      error => console.log(error));
}
  editeNiveauetude(niveauetude:Niveauetude)
  {
    this.niveauetudeEdite=niveauetude;
    console.log(this.niveauetudeEdite);
    this.vEdite=true;
    this.vajout=true;
  }
  suivant(){
    if(this.listeNiveauetude.length>0)
    {
      this.offset++;
      this.vprecedant=true;
      this.compservice.getAllNiveauetudePagination(this.offset).subscribe((data)=>
    {
      this.listeNiveauetude=data;
      if(this.listeNiveauetude.length<=0)
      {
        this.vsuivant=false;
      }
      console.log(this.listeNiveauetude);
      
    });
    }
  

  }
  precedant(){
    if(this.offset>0)
    {
      this.offset--;
      this.vsuivant=true;
      this.compservice.getAllNiveauetudePagination(this.offset).subscribe((data)=>
    {
      this.listeNiveauetude=data;
      console.log(this.listeNiveauetude);
      
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