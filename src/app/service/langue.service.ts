import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Langue } from '../Classe/Langue';

@Injectable({
  providedIn: 'root'
})
export class LangueService {

  private baseUrl='http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  getLangueByNom(nom:String):Observable<any>
  {
     return this.http.get(this.baseUrl+"/langue/nom/"+nom);
  }
  getAllLangueNom():Observable<any>
  {
    return this.http.get(this.baseUrl+"/langues");
  }

  updateLangue(id:number,langue:Langue): Observable<Object>{
    return this.http.put(`${this.baseUrl}/langue/edite/${id}`,langue);
  }
  deleteLangueById(langue :number) : Observable<any>
  {
      console.log("Suppression des ethnies choisi");
      return this.http.delete(this.baseUrl+"/langue/delete/"+langue, { responseType: 'text' });
  }
  getALLlanguePagianation(offset :number) : Observable<any>
  {
      console.log("get langue pagination");
      return this.http.get(this.baseUrl+"/langue/pagination/"+offset);
  }
  conterLangue():Observable<any>
{
  return this.http.get<any>(this.baseUrl+"/langue/nombre/");
}
}
