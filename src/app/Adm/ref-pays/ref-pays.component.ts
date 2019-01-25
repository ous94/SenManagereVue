import { Component, OnInit } from '@angular/core';
import { Pays } from 'src/app/Classe/Pays';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaysService } from 'src/app/service/pays.service';

@Component({
  selector: 'app-ref-pays',
  templateUrl: './ref-pays.component.html',
  styleUrls: ['./ref-pays.component.scss']
})
export class RefPaysComponent implements OnInit {

  ajoutercompetence:Boolean=false;
  listerCompetence:Boolean=false;
  vsuivant:boolean=false;
  vprecedant:boolean=false;
  vEdite:boolean=false;
  vajout:boolean=false;
  offset:number=0;
  listePays:Array<Pays>;
  pays: Pays = new Pays();
  paysEdite:Pays;
 

  compForm=new FormGroup({
    nom:new FormControl(''),
  });



  constructor(private ToastrService:ToastrService,private compservice:PaysService,private fb:FormBuilder) { }

  ngOnInit() {
    
    this.compForm= this.fb.group({
      nom:[null,Validators.required],

    });
  }

  visibiliteLister()
  {
    this.ajoutercompetence=false;
    this.listerCompetence=!this.listerCompetence;
    this.compservice.getAllPaysPagination(this.offset).subscribe((data)=>
    {
      this.listePays=data;
      if(this.listePays.length>0)
      {
        this.vsuivant=true;
      }
      console.log(this.listePays);
      
    });

  }

  visibiliteAjouter()
  {
    this.listerCompetence=false;
    this.ajoutercompetence=!this.ajoutercompetence;

  }
  validerPays()
  {
   this.pays = this.compForm.value;
   this.pays.employees=null;
   console.log(this.compForm.value);
   if(this.pays.nom==null || this.pays.nom=="")
   {
     this.showError();
   }
   else if(!this.vajout){

    this.compservice.addPays(this.pays).subscribe((data)=>
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
     this.compservice.updatePays(this.paysEdite.idpays,this.pays).
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
  deletePays(pays:Pays) {
    //alert('confirmer Suppression');
    confirm('confirmer Suppression');
    if(confirm)
  this.compservice.deletepaysById(pays.idpays)
    .subscribe(
      data => {
        console.log(data);
        this.listePays.splice(this.listePays.indexOf(pays),1);
        
      },
      error => console.log(error));
}
  editePays(pays:Pays)
  {
    this.paysEdite=pays;
    console.log(this.paysEdite);
    this.vEdite=true;
    this.vajout=true;
  }
  suivant(){
    if(this.listePays.length>0)
    {
      this.offset++;
      this.vprecedant=true;
      this.compservice.getAllPaysPagination(this.offset).subscribe((data)=>
    {
      this.listePays=data;
      if(this.listePays.length<=0)
      {
        this.vsuivant=false;
      }
      console.log(this.listePays);
      
    });
    }
  

  }
  precedant(){
    if(this.offset>0)
    {
      this.offset--;
      this.vsuivant=true;
      this.compservice.getAllPaysPagination(this.offset).subscribe((data)=>
    {
      this.listePays=data;
      console.log(this.listePays);
      
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