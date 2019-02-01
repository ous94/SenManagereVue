import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { BaseUrl } from '../ConfigProjet/baseUrl';
import { TypeIdentification } from '../Classe/TypeIdentification';

@Injectable({
  providedIn: 'root'
})
export class TypeIdentificationService {


  base:BaseUrl = new BaseUrl();
  baseUrl:String=this.base.baseUrl;

  constructor(private http:HttpClient) { }

  getTypeIdentificationByNom(nom:String):Observable<TypeIdentification>
  {
    return this.http.get<TypeIdentification>(this.baseUrl+"/ttypeIdentification/nom/"+nom);
  }
}




//////////



