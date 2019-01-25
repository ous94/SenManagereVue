import { Component, OnInit } from '@angular/core';
import { Ethnies } from 'src/app/Classe/Ethnies';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EthniesService } from 'src/app/service/ethnies.service';

@Component({
  selector: 'app-ref-ethnie',
  templateUrl: './ref-ethnie.component.html',
  styleUrls: ['./ref-ethnie.component.scss']
})
export class RefEthnieComponent implements OnInit {

  ajoutercompetence:Boolean=false;
  listerCompetence:Boolean=false;
  vsuivant:boolean=false;
  vprecedant:boolean=false;
  vEdite:boolean=false;
  vajout:boolean=false;
  offset:number=0;
  listeEthnie:Array<Ethnies>;
  ethnies: Ethnies = new Ethnies();
  ethnieEdite:Ethnies;
 

  compForm=new FormGroup({
    nom:new FormControl(''),
  });



  constructor(private ToastrService:ToastrService,private compservice:EthniesService,private fb:FormBuilder) { }

  ngOnInit() {
    
    this.compForm= this.fb.group({
      nom:[null,Validators.required],

    });
  }

  visibiliteLister()
  {
    this.ajoutercompetence=false;
    this.listerCompetence=!this.listerCompetence;
    this.compservice.getAllEthniesPagination(this.offset).subscribe((data)=>
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
   if(this.ethnies.nom=="")
   {
     this.showError();
   }
   else if(!this.vajout){

    this.compservice.addEthnies(this.ethnies).subscribe((data)=>
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
     this.compservice.updateEthnies(this.ethnieEdite.idethnies,this.ethnies).
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
  deleteEthnie(ethnies:Ethnies) {
    //alert('confirmer Suppression');
    confirm('confirmer Suppression');
    if(confirm)
  this.compservice.deleteEthniesById(ethnies.idethnies)
    .subscribe(
      data => {
        console.log(data);
        this.listeEthnie.splice(this.listeEthnie.indexOf(ethnies),1);
        
      },
      error => console.log(error));
}
  editeEthnie(ethnies:Ethnies)
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
      this.compservice.getAllEthniesPagination(this.offset).subscribe((data)=>
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
      this.compservice.getAllEthniesPagination(this.offset).subscribe((data)=>
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