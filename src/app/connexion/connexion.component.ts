import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  connexionForm = new FormGroup({
    email: new FormControl(''),
    pwd: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }
  //Method validation connexion
  connexion(){
    // TODO: Use EventEmitter with form value
  console.warn(this.connexionForm.value);
  }

}
