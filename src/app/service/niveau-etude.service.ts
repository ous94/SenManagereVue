import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { BaseUrl } from '../ConfigProjet/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class NiveauEtudeService {

  base:BaseUrl = new BaseUrl();
  baseUrl:String=this.base.baseUrl;

  constructor(private http:HttpClient) { }

  getNiveauEtudeByNiveau(niveau :String) :Observable<any>
  {
    return this.http.get(this.baseUrl+"/nniveauEtudes/niveau/"+niveau);
  }
}
