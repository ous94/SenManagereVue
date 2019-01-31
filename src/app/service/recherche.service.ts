import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Employee } from '../Classe/Employee';
import { Client } from '../Classe/Client';
import {RechercheTous} from '../Classe/RechercheTous';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {
  private baseUrl='http://localhost:8000/api';

  constructor(private httpClient:HttpClient) { }
  rechercheTous(recherche:string):Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(this.baseUrl+"/recherche/tous/"+recherche);
  }
  rechercheTousClient(recherche:string):Observable<Client[]>
  {
    return this.httpClient.get<Client[]>(this.baseUrl+"/recherche/tousClients/"+recherche);
  }
  rechercheFromEmployePagination(rechercheTous :RechercheTous):Observable<Employee[]>
  {
     return this.httpClient.post<Employee[]>(this.baseUrl+ '/recherche/allEmploye/pagination', rechercheTous);
  }
  //
}
