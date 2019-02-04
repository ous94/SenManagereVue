import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Classe/Employee';
import { EmployeeService } from 'src/app/employee.service';
import { UploadFileService } from 'src/app/upload-file.service';

@Component({
  selector: 'app-mesemployes-adm',
  templateUrl: './mesemployes-adm.component.html',
  styleUrls: ['./mesemployes-adm.component.scss']
})
export class MesemployesAdmComponent implements OnInit {
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
  deleteEmploye(employee:Employee) {
    this.employeService.deleteEmployeeid(employee.idemploye).subscribe(
        (data) => { alert("L'employé a été bien supprimé");
           this.chargerListeEmployes();
        },
        (error) => {alert("Echec de la suppression");});
  }
  chargerListeEmployes()
  {
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
}