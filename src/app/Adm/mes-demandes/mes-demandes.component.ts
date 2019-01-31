import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/Classe/Demande';
import { DemandeService } from 'src/app/service/demande.service';
import { UploadFileService } from 'src/app/upload-file.service';
import { Route, Router } from '@angular/router';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { log } from 'util';

@Component({
  selector: 'app-mes-demandes',
  templateUrl: './mes-demandes.component.html',
  styleUrls: ['./mes-demandes.component.scss']
})
export class MesDemandesComponent implements OnInit {


  demandes: any;
  demandeEdite:Demande = new Demande();

  maDemande: Demande = {
    iddemande :0,
    date : new Date,
    salairePropose :null,
    salaireRetenue :null,
    services :'',
    competences :[],
    client :null,
    employees :[],
    documents :[],
  };

  listeDemande:Demande[];
  showdetail:boolean=false;
  showdedite:boolean=false;

  constructor(private DemandeService:DemandeService,private UploadFileService:UploadFileService,private router:Router) { 

    setTimeout(() => {
      this.reloadData();

    }, 2000
     );
   }

  ngOnInit() {
    this.reloadData();
       

       
  }

  initiermodifier()
  {
  this.demandes =this.DemandeService.getterDemande();  
  console.log(this.demandes);     
  }
   validerModification(form : NgForm)
   {
     this.demandeEdite=form.value;
    // this.demandes.iddemande=this.demandeEdite.iddemande;
     this.demandes.salairePropose=this.demandeEdite.salairePropose;
     this.demandes.salaireRetenue=this.demandeEdite.salaireRetenue;
     
    console.log(this.demandes);
     this.DemandeService.updateDemander(this.demandes.iddemande,this.demandes).
     subscribe(data => console.log(data), error => console.log(error));
    ///this.customer = new Customer();
    //this.router.navigate(['']);

   }


  reloadData() {
  
    //misea ajour Ethnies
     this.DemandeService.getAllDemande().subscribe(
       data =>{this.listeDemande=data;console.log(data)},
       error =>{console.log(this.listeDemande)},
 
       ()=>{console.log('errer chargement des donnés')}
       );
     }


// delete client
deleteDemande(demande:Demande) {
  this.DemandeService.deleteDemandeId(demande.iddemande)
    .subscribe(
      data => {
        console.log(data);
        this.listeDemande.splice(this.listeDemande.indexOf(demande),1);
        
      },
      error => console.log(error));
      this.reloadData();
}
    ///edite
   editeDemande(demande:Demande) {
    console.log(demande);
     this.demandes= this.DemandeService.setteDemande(demande);
      console.log(this.demandes);

      this.showdedite=!this.showdedite;
      //this.router.navigate(['/edite'])
    }



    uploadPhotoEmployer(photo:String): String
    {
      return this.UploadFileService.getPhoto(photo);
  }
  //
  visibiliteDetail()
{
  this.showdetail=!this.showdetail;
  
}


}