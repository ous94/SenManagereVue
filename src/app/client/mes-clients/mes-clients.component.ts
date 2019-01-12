import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Classe/Client';
import { ClientService } from 'src/app/service/client.service';
import { UploadFileService } from 'src/app/upload-file.service';

@Component({
  selector: 'app-mes-clients',
  templateUrl: './mes-clients.component.html',
  styleUrls: ['./mes-clients.component.scss']
})
export class MesClientsComponent implements OnInit {

  listeClient:Client[];

  constructor(private ClientService:ClientService, private UploadFileService:UploadFileService) { 

    setTimeout(() => {
      this.reloadData();

      
    }, 2000
     );
   }

  ngOnInit() {
    this.reloadData();
  }


  reloadData() {
  
    //misea ajour Ethnies
     this.ClientService.getClients().subscribe(
       data =>{this.listeClient=data;console.log(data)},
       error =>{console.log(this.listeClient)},
 
       ()=>{console.log('errer chargement des donnés')}
       );
     }


// delete client
deleteClient(client:Client) {
  this.ClientService.deleteClientid(client.idclient)
    .subscribe(
      data => {
        console.log(data);
        this.listeClient.splice(this.listeClient.indexOf(client),1);
        
      },
      error => console.log(error));
      this.reloadData();
}


     ///edite
     editeClient(client:Client) {
      this.ClientService.deleteClientid(client.idclient)
        .subscribe(
          data => {
            console.log(data);
            this.listeClient.splice(this.listeClient.indexOf(client),1);
            
          },
          error => console.log(error));
          this.reloadData();
    }



    uploadPhotoEmployer(photo:String): String
    {
      return this.UploadFileService.getPhoto(photo);
  }


}