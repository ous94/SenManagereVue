import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { TypeIdentification } from '../Classe/TypeIdentification';

@Injectable({
  providedIn: 'root'
})
export class TypeIdentificationService {

  private baseUrl='http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  getTypeIdentificationByNom(nom:String):Observable<TypeIdentification>
  {
    return this.http.get<TypeIdentification>(this.baseUrl+"/ttypeIdentification/nom/"+nom);
  }
}
