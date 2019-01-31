import { Component, OnInit } from '@angular/core';
import { Pays } from 'src/app/Classe/Pays';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Localite } from 'src/app/Classe/Localite';
import { ToastrService } from 'ngx-toastr';
import { PaysService } from 'src/app/service/pays.service';
import { LocaliteService } from 'src/app/service/localite.service';

@Component({
  selector: 'app-reflocalite',
  templateUrl: './reflocalite.component.html',
  styleUrls: ['./reflocalite.component.scss']
})
export class ReflocaliteComponent implements OnInit {

  ajoutercompetence:Boolean=false;
  listerCompetence:Boolean=false;
  vsuivant:boolean=false;
  vprecedant:boolean=false;
  vEdite:boolean=false;
  vajout:boolean=false;
  offset:number=0;
  listePays:Array<Localite>;
  pays: Localite = new Localite();
  paysEdite:Localite;
 

  compForm=new FormGroup({
    nom:new FormControl(''),
  });



  constructor(private ToastrService:ToastrService,private compservice:LocaliteService,private fb:FormBuilder) { }

  ngOnInit() {
    
    this.compForm= this.fb.group({
      nom:[null,Validators.required],

    });
  }

  visibiliteLister()
  {
    this.ajoutercompetence=false;
    this.listerCompetence=!this.listerCompetence;
    this.compservice.getAlllocalitePagination(this.offset).subscribe((data)=>
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
   this.pays.clients=null;
   console.log(this.compForm.value);
   if(this.pays.nom==null || this.pays.nom=="")
   {
     this.showError();
   }
   else if(!this.vajout){

    this.compservice.addlocalitetude(this.pays).subscribe((data)=>
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
     this.compservice.updatelocalitetude(this.paysEdite.idlocalite,this.pays).
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
  deletePays(pays:Localite) {
    //alert('confirmer Suppression');
    confirm('confirmer Suppression');
    if(confirm)
  this.compservice.deletelocaliteById(pays.idlocalite)
    .subscribe(
      data => {
        console.log(data);
        this.listePays.splice(this.listePays.indexOf(pays),1);
        
      },
      error => console.log(error));
}
  editePays(pays:Localite)
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
      this.compservice.getAlllocalitePagination(this.offset).subscribe((data)=>
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
      this.compservice.getAlllocalitePagination(this.offset).subscribe((data)=>
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