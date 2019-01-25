import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Competence } from '../Classe/Competence';
import { Employee } from '../Classe/Employee';
import { RechercheCompetence } from '../Classe/RechercherCompetence';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  private baseUrl='http://localhost:8000/api';

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
  getListeEmployes (listeCompetence: Competence[]): Observable<Employee[]> {
    return this.http.post<Employee[]>(this.baseUrl+ '/competence/description/employes', listeCompetence);
  }

  getListeEmployesPagination (rechercheCompetence:RechercheCompetence): Observable<Employee[]> {
    return this.http.post<Employee[]>(this.baseUrl+ '/competence/description/employes/pagination', rechercheCompetence);
  }
  //ajout
  addCompetence(competence:Competence): Observable<any>{
    return this.http.post<Competence>(this.baseUrl+"/competence/create",competence);
  }
// competencePagination
getAllCompetencePagination(offset:number):Observable<any>
  {
    return this.http.get(this.baseUrl+"/competences/pagination/"+offset);
}
updateCompetence(id:number,competence:Competence): Observable<Object>{
  return this.http.put(`${this.baseUrl}/competence/edite/${id}`,competence);
}
}
