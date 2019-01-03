import { Component, OnInit } from '@angular/core';
import { Client } from '../Classe/Client';
import { UploadFileService } from '../upload-file.service';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.scss']
})
export class ListeClientComponent implements OnInit {

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
