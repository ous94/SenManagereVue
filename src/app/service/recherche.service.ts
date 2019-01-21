import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Employee } from '../Classe/Employee';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {
  private baseUrl='http://localhost:8000/api';

  constructor(private httClient:HttpClient) { }
  rechercheTous(recherche:string):Observable<Employee[]>
  {
    return this.httClient.get<Employee[]>(this.baseUrl+"/recherche/tous/"+recherche);
  }
}