import { Component, OnInit } from '@angular/core';
import {Messages} from'src/app/Classe/Messages';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { MessagesService } from 'src/app/service/messages.service';

@Component({
  selector: 'app-messages-adm',
  templateUrl: './messages-adm.component.html',
  styleUrls: ['./messages-adm.component.scss']
})
export class MessagesAdmComponent implements OnInit {

  listeMessage:Array<Messages>;
  tableauVisibiliteDetail:boolean[]=[];

  constructor(private messagesService:MessagesService,private localStorage :LocalStorage) { 

      this.reloadData();    
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
  
      this.messagesService.getallMessage().subscribe(
        (data)=>{this.listeMessage=data;
                 console.log(this.listeMessage);
                 for(let i:number=0;i<this.listeMessage.length;i++)
                 {
                   this.tableauVisibiliteDetail[i]=false;
                 }}
    );
    for(let i:number=0;i<10;i++)
    {
      this.tableauVisibiliteDetail[i]=false;
    }
  
    }
  
  // delete message
  deleteMessage(message:Messages) {
    this.messagesService.deleteMessageid(message.numero)
      .subscribe(
        data => {
          console.log(data);
          this.listeMessage.splice(this.listeMessage.indexOf(message),1);
          
        },
        error => console.log(error));
        this.reloadData();
  }
  //edite message
  editeEmploye()
       {
         
       }

    }
  