import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/Classe/Demande';
import { DemandeService } from 'src/app/service/demande.service';
import { UploadFileService } from 'src/app/upload-file.service';
import { Route, Router } from '@angular/router';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-mes-demandes',
  templateUrl: './mes-demandes.component.html',
  styleUrls: ['./mes-demandes.component.scss']
})
export class MesDemandesComponent implements OnInit {


  demandes: any;
  demandeEdite:Demande;

  maDemande: Demande = {
    iddemande :0,
    date : new Date,
    salairePropose :0,
    salaireRetenue :0,
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
    this.initiermodifier();
       this.maDemande.iddemande=this.demandes.iddemande;
       this.maDemande.salaireRetenue=this.demandes.salaireRetenue;
       
  }

  initiermodifier()
  {
  this.demandes =this.DemandeService.getterDemande();       
  }
   validerModification(form : NgForm)
   {
     this.demandeEdite=form.value;
    console.log(this.demandeEdite);
        console.log(this.maDemande.iddemande);
     this.DemandeService.updateDemander(this.maDemande.iddemande,this.demandeEdite).
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
      this.DemandeService.setteDemande(demande);
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