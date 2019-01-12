import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { FormBuilder, FormGroup, FormControl,Validators, FormArray,} from '@angular/forms';
import {MessagesService} from '../service/messages.service'
import { Messages } from '../Classe/Messages';

@Component({
  selector: 'app-conctact',
  templateUrl: './conctact.component.html',
  styleUrls: ['./conctact.component.scss']
})
export class ConctactComponent implements OnInit {

  messages :Messages=new Messages();
  contactForm= new FormGroup({
    email:new FormControl(''),
    numero:new FormControl(''),
    message :new FormControl(''),
    nom :new FormControl('')
  });
  constructor(private httpClient :HttpClient,private fb:FormBuilder ,private messagesService :MessagesService ) { }

  ngOnInit() {

    this.contactForm= this.fb.group({
      email:[null,Validators.required],
      numero:[null,Validators.required],
      message :[null,Validators.required],
      nom :[null,Validators.required]
    });
  }
  envoyerEmail()
  {
     this.messages=this.contactForm.value;
     
     this.messagesService.sendMessages(this.messages).subscribe(
        (data)=>{console.log("Reponse sans erreur :"+data);},
        (error)=>{console.log("Reponse avec Erreur :"+error)}
     );
      
    console.log(this.messages);
  }

}
