import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/service/client.service';
import { Client } from 'src/app/Classe/Client';
import { Router } from '@angular/router';
import { log } from 'util';

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

  constructor(private fb: FormBuilder,private ClientService:ClientService,private router:Router) { 
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
    this.ClientService.getLoginClient(this.client2).subscribe((data)=>
    {
      this.client3=data;
      if(this.client3)
    {
      console.log('Connexion reussssssssss')
      this.router.navigate(['administration']);
      
    }else{
      console.log('Connexion echec')

    }
    });
    
    
    


  }

}
