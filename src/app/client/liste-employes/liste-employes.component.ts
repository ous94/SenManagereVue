import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { UploadFileService } from 'src/app/upload-file.service';
import { Employee } from 'src/app/Classe/Employee';

@Component({
  selector: 'app-liste-employes',
  templateUrl: './liste-employes.component.html',
  styleUrls: ['./liste-employes.component.scss']
})
export class ListeEmployesComponent implements OnInit {
  listeEmployes:Array<Employee>;
  tableauVisibiliteDetail:boolean[]=[];
  offset:number=0;
  vsuivant:boolean=false;
  vprecedent:boolean=false;

  constructor(private employeService:EmployeeService ,private uploadFileService :UploadFileService) { 

    this.employeService.getAllEmployesPagination(this.offset).subscribe(
      (data)=>{
        this.listeEmployes=data;
        if(this.listeEmployes.length>=2)
        {
             this.vsuivant=true;
        }
        console.log(this.listeEmployes);
        for(let i:number=0;i<this.listeEmployes.length;i++)
        {
                 this.tableauVisibiliteDetail[i]=false;
        }
    });
  }


  ngOnInit() {
  }

  getPhotoEmploye(photo:String): String
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
  suivant($event)
  {
    if(this.listeEmployes.length>=2)
    {
      this.offset++;
      this.vsuivant=true;
      this.vprecedent=true;
      this.employeService.getAllEmployesPagination(this.offset).subscribe(
        (data)=>{
          this.listeEmployes=data;
          if(this.listeEmployes.length<=0)
          {
            this.vsuivant=false;
          }
          console.log(this.listeEmployes);
          for(let i:number=0;i<this.listeEmployes.length;i++)
          {
             this.tableauVisibiliteDetail[i]=false;
          }
        } );
    }
    else
    {
      this.vsuivant=false;
      this.vprecedent=true;
    }
  }
  precedent($event)
  {
    if(this.offset>=0)
    {
      this.offset--;
      this.vsuivant=true;
      this.employeService.getAllEmployesPagination(this.offset).subscribe(
        (data)=>{
          this.listeEmployes=data;
          if(this.offset==0)
          {
            this.vprecedent=false;
          }
          console.log(this.listeEmployes);
          for(let i:number=0;i<this.listeEmployes.length;i++)
          {
             this.tableauVisibiliteDetail[i]=false;
          }
        });
    }
  }
}
