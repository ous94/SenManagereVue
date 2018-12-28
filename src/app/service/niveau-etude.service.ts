import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NiveauEtudeService {

  private baseUrl='http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  getNiveauEtudeByNiveau(niveau :String) :Observable<any>
  {
    return this.http.get(this.baseUrl+"/nniveauEtudes/niveau"+niveau);
  }
}
