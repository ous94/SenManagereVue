import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { BaseUrl } from '../ConfigProjet/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class LangueService {


  base:BaseUrl = new BaseUrl();
  baseUrl:String=this.base.baseUrl;

  constructor(private http:HttpClient) { }

  getLangueByNom(nom:String):Observable<any>
  {
     return this.http.get(this.baseUrl+"/langue/nom/"+nom);
  }
  getAllLangueNom():Observable<any>
  {
    return this.http.get(this.baseUrl+"/langues");
  }
}
