import { Component, OnInit } from '@angular/core';
import { Competence } from 'src/app/Classe/Competence';
import { Employee } from 'src/app/Classe/Employee';
import { EmployeeService } from 'src/app/employee.service';
import { CompetenceService } from 'src/app/service/competence.service';
import { UploadFileService } from 'src/app/upload-file.service';

@Component({
  selector: 'app-mesemployes-adm',
  templateUrl: './mesemployes-adm.component.html',
  styleUrls: ['./mesemployes-adm.component.scss']
})
export class MesemployesAdmComponent implements OnInit {

  listeCompetences:Array<Competence>;
  selectedCompetencevalues:Array<Competence>=[];
  listeEmployes:Array<Employee>;
  tableauVisibiliteDetail:boolean[]=[];

   //
   offset1:number=0;
   offset2:number=0;
   vsuivant:boolean=false;
   vprecedent:boolean=false;


  constructor(private employeService:EmployeeService,private competenceService:CompetenceService,private uploadFileService :UploadFileService ) { }

  ngOnInit() {
  }

}
