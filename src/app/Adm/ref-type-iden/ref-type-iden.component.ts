import { Component, OnInit } from '@angular/core';
import { TypeIdentification } from 'src/app/Classe/TypeIdentification';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TypeIdentificationService } from 'src/app/service/type-identification.service';

@Component({
  selector: 'app-ref-type-iden',
  templateUrl: './ref-type-iden.component.html',
  styleUrls: ['./ref-type-iden.component.scss']
})
export class RefTypeIdenComponent implements OnInit {

  ajoutercompetence:Boolean=false;
  listerCompetence:Boolean=false;
  vsuivant:boolean=false;
  vprecedant:boolean=false;
  vEdite:boolean=false;
  vajout:boolean=false;
  offset:number=0;
  listeEthnie:Array<TypeIdentification>;
  ethnies: TypeIdentification = new TypeIdentification();
  ethnieEdite:TypeIdentification;
 

  compForm=new FormGroup({
    nom:new FormControl(''),
  });



  constructor(private ToastrService:ToastrService,private compservice:TypeIdentificationService,private fb:FormBuilder) { }

  ngOnInit() {
    
    this.compForm= this.fb.group({
      nom:[null,Validators.required],

    });
  }

  visibiliteLister()
  {
    this.ajoutercompetence=false;
    this.listerCompetence=!this.listerCompetence;
    this.compservice.getAllTypeIdentificationPagination(this.offset).subscribe((data)=>
    {
      this.listeEthnie=data;
      if(this.listeEthnie.length>0)
      {
        this.vsuivant=true;
      }
      console.log(this.listeEthnie);
      
    });

  }

  visibiliteAjouter()
  {
    this.listerCompetence=false;
    this.ajoutercompetence=!this.ajoutercompetence;

  }
  validerEthnies()
  {
   this.ethnies = this.compForm.value;
   this.ethnies.employees=null;
   console.log(this.compForm.value);
   if(this.ethnies.nom=="" || this.ethnies.nom==null)
   {
     this.showError();
   }
   else if(!this.vajout){

    this.compservice.addTypeidentiificton(this.ethnies).subscribe((data)=>
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
     this.compservice.updateTypeIdent(this.ethnieEdite.ididentification,this.ethnies).
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
  deleteEthnie(ethnies:TypeIdentification) {
    //alert('confirmer Suppression');
    confirm('confirmer Suppression');
    if(confirm)
  this.compservice.deleteTypeidentificationById(ethnies.ididentification)
    .subscribe(
      data => {
        console.log(data);
        this.listeEthnie.splice(this.listeEthnie.indexOf(ethnies),1);
        
      },
      error => console.log(error));
}
  editeEthnie(ethnies:TypeIdentification)
  {
    this.ethnieEdite=ethnies;
    console.log(this.ethnieEdite);
    this.vEdite=true;
    this.vajout=true;
  }
  suivant(){
    if(this.listeEthnie.length>0)
    {
      this.offset++;
      this.vprecedant=true;
      this.compservice.getAllTypeIdentificationPagination(this.offset).subscribe((data)=>
    {
      this.listeEthnie=data;
      if(this.listeEthnie.length<=0)
      {
        this.vsuivant=false;
      }
      console.log(this.listeEthnie);
      
    });
    }
  

  }
  precedant(){
    if(this.offset>0)
    {
      this.offset--;
      this.vsuivant=true;
      this.compservice.getAllTypeIdentificationPagination(this.offset).subscribe((data)=>
    {
      this.listeEthnie=data;
      console.log(this.listeEthnie);
      
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
    this.ToastrService.error('Verifiez votre saisie !', 'Echec Enregistrement !');
  } 
  showErrorEdite() {
    this.ToastrService.error('Veuillez recommencer !', 'Echec Enregistrement !');
  } 

  showSuccessedite() {
    this.ToastrService.success('Avec succès !', 'Modification réussie !');
  }
}