import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/service/client.service';
import { Client } from 'src/app/Classe/Client';
import { Router } from '@angular/router';
import { log } from 'util';
import { ToastrService } from 'ngx-toastr';
import { LocalStorage } from '@ngx-pwa/local-storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  client1:Client= new Client();
  client2:Client= new Client();
  @Output()
  client3:Client= new Client();
  


  loginForm= new FormGroup({
    login:new FormControl(''),
    password:new FormControl(''),
    
  });

  constructor(private ToastrService:ToastrService,private fb: FormBuilder,private ClientService:ClientService,private router:Router ,private localStorage :LocalStorage) { 
    this.loginForm=this.fb.group({
      login:[null,Validators.required],
      password:[null,Validators.required],

    })
  }
 
  ngOnInit() {
  }

  connexion()
  {
    this.client1= this.loginForm.value;
    console.log(this.client1);
    this.client2.login=this.client1.login;
    this.client2.password=this.client1.password;
    this.ClientService.getLoginClient(this.client2).subscribe(
      data =>{this.client3=data;console.log(data)
        if(!(this.client3==null))
        {
          this.localStorage.setItem("client",this.client3).subscribe((data)=>{console.log(this.client3);});
          console.log('Connexion reussssssssss')
           this.showSuccess();
           this.router.navigate(['client/acceuil']);
        }
        else
        {
          console.log('Connexion echec')
           this.showError();
           this.loginForm.reset();
           alert("login ou Mot de Passe incorrect");
         // this.router.navigate(['login']);
        
        }
        
         },
      error =>{console.log(this.client3)},

      ()=>{console.log('errer chargement des donnés')}
      );

     console.log(this.client3);
    
     
 }

  showSuccess() {
    this.ToastrService.success('Avec succès !', 'Connexion réussie !');
  }
  showError() {
    this.ToastrService.error('Veuillez recommencer !', 'Echec de connexion !');
  } 
  showWarning() {
    this.ToastrService.warning('Erreur fatal !', 'Attention !');
  } 

}