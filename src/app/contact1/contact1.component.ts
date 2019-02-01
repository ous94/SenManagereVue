import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from 'selenium-webdriver/http';
import { MessagesService } from '../service/messages.service';
import { Router } from '@angular/router';
import { Messages } from '../Classe/Messages';

@Component({
  selector: 'app-contact1',
  templateUrl: './contact1.component.html',
  styleUrls: ['./contact1.component.scss']
})
export class Contact1Component implements OnInit {

  messages :Messages=new Messages();
  contactForm= new FormGroup({
    email:new FormControl(''),
    telClient:new FormControl(''),
    message :new FormControl(''),
    nomClient :new FormControl('')
  });
  constructor(private ToastrService: ToastrService,private httpClient :HttpClient,private fb:FormBuilder,private messagesService :MessagesService,private router:Router) { }

  ngOnInit() {

    this.contactForm= this.fb.group({
      email:[null,Validators.required],
      telClient:[null,Validators.required],
      message :[null,Validators.required],
      nomClient :[null,Validators.required]
    });
  }
  envoyerEmail()
  {
     this.messages=this.contactForm.value;
     
     this.messagesService.sendMessages(this.messages).subscribe(
        (data)=>{console.log("Reponse sans erreur :"+data);
                alert(" Votre message a été  envoyé");
                this.router.navigate(['']);
         },
        (error)=>{console.log("Reponse avec Erreur :"+error); this.showError();}
     );
    console.log(this.messages);
  }

  //methode toastr
showSuccess() {

  this.ToastrService.success('Avec succès !', 'Envoie message réussi !');
}
showError() {
  this.ToastrService.error('Veuillez recommencer !', 'Echec de connexion !');
} 
showWarning() {
  this.ToastrService.warning('Erreur fatal !', 'Attention !');
} 
}