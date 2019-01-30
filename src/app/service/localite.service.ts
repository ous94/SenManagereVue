import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import { BaseUrl } from '../ConfigProjet/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class LocaliteService {


  base:BaseUrl = new BaseUrl();
  baseUrl:String=this.base.baseUrl;
  constructor(private http:HttpClient) { }

  getLocaliteByNom(nom :String) :Observable<any>
  {
    return this.http.get(this.baseUrl+"/llocalite/nom/"+nom);
  }
}
