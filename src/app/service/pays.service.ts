import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  private baseUrl='http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  getPaysByNom(nom :String) :Observable<any>
  {
    return this.http.get(this.baseUrl+"/ppays/nompays/"+nom);
  }
}
