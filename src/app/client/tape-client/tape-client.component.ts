import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tape-client',
  templateUrl: './tape-client.component.html',
  styleUrls: ['./tape-client.component.scss']
})
export class TapeClientComponent implements OnInit {

  showAjouterEmployye:boolean=false;
  showActionEmployee:boolean=false;
  showListerEmployee:boolean=false;








  constructor() { }

  ngOnInit() {
  }







  visibiliteLister($event)
  {
       this.showListerEmployee=!this.showListerEmployee
       this.showActionEmployee=false;
       this.showAjouterEmployye=false;

  }

  visibiliteAction($event)
  {
    this.showActionEmployee=!this.showActionEmployee
       this.showAjouterEmployye=false;
       this.showListerEmployee=false;

  }


  visibiliteAjouter($event)
  {
        this.showAjouterEmployye=!this.showAjouterEmployye
       this.showActionEmployee=false;
       this.showListerEmployee=false;

  }

}