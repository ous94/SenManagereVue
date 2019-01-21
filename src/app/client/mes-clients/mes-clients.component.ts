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

  //listeEmploye:Employee[];


  listeClients:Array<Client>;
  tableauVisibiliteDetail:boolean[]=[];
  selectedClientvalues=[];
  //favCompetenceErreur:boolean=true;
  //favEmployeErreur:boolean=true;

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

    this.ClientService.getAllClient().subscribe(
      (data)=>{this.listeClients=data;
               console.log(this.listeClients);
               for(let i:number=0;i<this.listeClients.length;i++)
               {
                 this.tableauVisibiliteDetail[i]=false;
               }}
  );
 /*  this.comptenceService.getAllCompetences().subscribe(
     (data)=>{this.listeCompetences=data;}
  ); */
 

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
      this.reloadData();
}
//edite emplo
editeEmploye()
     {
       
     }
    


    uploadPhotoClient(photo:String): String
    {
      return this.uploadFileService.getPhoto(photo);
    }
  }