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

  constructor(private employeService:EmployeeService ,private uploadFileService :UploadFileService) { 

    this.employeService.getAllEmployes().subscribe(
      (data)=>{this.listeEmployes=data;
               console.log(this.listeEmployes);
               for(let i:number=0;i<this.listeEmployes.length;i++)
               {
                 this.tableauVisibiliteDetail[i]=false;
               }}
  );
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

}
