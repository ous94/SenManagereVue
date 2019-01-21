import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Classe/Client';
import { RechercheService } from 'src/app/service/recherche.service';
import { ClientService } from 'src/app/service/client.service';
import { UploadFileService } from 'src/app/upload-file.service';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-recherche-cli-adm',
  templateUrl: './recherche-cli-adm.component.html',
  styleUrls: ['./recherche-cli-adm.component.scss']
})
export class RechercheCliAdmComponent implements OnInit {

  vrecherche:boolean=false;
  recherche :string='';
  listeClients:Array<Client>;
  tableauVisibiliteDetail:boolean[]=[];
  ngOnInit() {
  }

  constructor(private rechercheService:RechercheService,private ClientService:ClientService,private uploadFileService :UploadFileService ,private localStorage :LocalStorage) { 
    
  }

  getPhotoClient(photo:String): String
  {
    return this.uploadFileService.getPhoto(photo);
  }
  //
  details(position :number)
  {
    console.log("Salut vous voulez plus de Details");
    this.tableauVisibiliteDetail[position]=true;
  }
  reduire(position :number)
  {
    console.log("Salut vous voulez reduire");
    this.tableauVisibiliteDetail[position]=false;
  }

  touchRecherche($event)
  {

    this.vrecherche=true;
    this.rechercheService.rechercheTousClient(this.recherche).subscribe(
      (data)=>{this.listeClients=data;
               console.log(this.listeClients);
               for(let i:number=0;i<this.listeClients.length;i++)
               {
                 this.tableauVisibiliteDetail[i]=false;
               }}
  );
    console.log(this.recherche); 
  }
  faireRecherche($event)
  {
    /* this.vrecherche=true;
    this.vDemandes=false;
    this.vDefaut=false;
    this.vMessages=false;
    this.vProfile=false;
    this.vEmploye=false; */
  }
  // delete employee
deleteClient(client:Client) {
  this.ClientService.deleteClientid(client.idclient)
    .subscribe(
      data => {
        console.log(data);
        this.listeClients.splice(this.listeClients.indexOf(client),1);
        
      },
      error => console.log(error));
    
}
//edite emplo
editeClient()
     {
       
     }

}
