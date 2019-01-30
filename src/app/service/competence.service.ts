import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { BaseUrl } from '../ConfigProjet/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  base:BaseUrl = new BaseUrl();
  baseUrl:String=this.base.baseUrl;

  constructor(private http:HttpClient ) {}
  getAllCompetences():Observable<any>
  {
    return this.http.get(this.baseUrl+"/competences");
  }
  getAllCompetenceDescription():Observable<any>
  {
    return this.http.get(this.baseUrl+"/competence/description");
  }
  getCompetenceByDescription(description :String) : Observable<any>
  {
    return this.http.get(this.baseUrl+"/competence/description/"+description);
  }
  deleteCompetenceById(idCompetence :number) : Observable<any>
  {
      console.log("Suppression des competences choisi par l'employe");
      return this.http.delete(this.baseUrl+"/competence/"+idCompetence, { responseType: 'text' });
  }
}
