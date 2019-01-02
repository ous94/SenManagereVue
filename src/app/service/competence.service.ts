import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  private baseUrl='http://localhost:8000/api';

  constructor(private http:HttpClient ) {}

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
