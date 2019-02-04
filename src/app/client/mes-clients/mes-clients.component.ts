import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Classe/Client';
import { ClientService } from 'src/app/service/client.service';
import { UploadFileService } from 'src/app/upload-file.service';
import { NgForm } from '@angular/forms';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-mes-clients',
  templateUrl: './mes-clients.component.html',
  styleUrls: ['./mes-clients.component.scss']
})
export class MesClientsComponent implements OnInit {

  offset:number=0;
  vsuivant:boolean=false;
  vprecedent:boolean=false;
  listeClients:Array<Client>;
  tableauVisibiliteDetail:boolean[]=[];
  selectedClientvalues=[];

constructor(private ClientService:ClientService,private uploadFileService :UploadFileService ,private localStorage :LocalStorage) { 
    this.reloadData();

}

 //Chargement de la photo d'un Employe
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

  ngOnInit() {
    //this.reloadData();
  }

  reloadData() {

    this.ClientService.getAllPagination(this.offset).subscribe(
      (data)=>{this.listeClients=data;
         for(let i:number=0;i<this.listeClients.length;i++)
        {
          this.tableauVisibiliteDetail[i]=false;
        }});
    if(this.listeClients.length>2)
    {
      this.vsuivant=true;
    }
  }

// delete Client
deleteClient(client:Client) {
  this.ClientService.deleteClientid(client.idclient).subscribe(
      (data) =>{alert("le Client a été bien supprimé");},
      error =>{alert("Echec de la suppression");});
  this.reloadData();
}
//edite emplo
  editeClient()
  {
       
  }
  uploadPhotoClient(photo:String): String
  {
    return this.uploadFileService.getPhoto(photo);
  }
  suivant($event)
  {
    if(this.listeClients.length>=2)
    {
      this.offset++;
      this.vprecedent=true;
      this.reloadData();
      if(this.listeClients.length<2)
      {
        this.vsuivant=false;
      } 
    }
    else
    {
      this.vsuivant=false;
      this.vprecedent=true;
    }
  }
  precedent($event)
  {
    if(this.offset>0)
    {
      this.offset--;
      this.vsuivant=true;
      this.reloadData();
      if(this.offset==0)
      {
         this.vprecedent=false;
      }
    }
  }
  }