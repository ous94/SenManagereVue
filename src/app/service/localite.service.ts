import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Localite } from '../Classe/Localite';

@Injectable({
  providedIn: 'root'
})
export class LocaliteService {

  private baseUrl='http://localhost:8000/api';
  constructor(private http:HttpClient) { }

  getLocaliteByNom(nom :String) :Observable<any>
  {
    return this.http.get(this.baseUrl+"/llocalite/nom/"+nom);
  }

  deletelocaliteById(idlocalite :number) : Observable<any>
  {
      console.log("Suppression des localite choisi");
      return this.http.delete(this.baseUrl+"/localite/"+idlocalite, { responseType: 'text' });
  }

   //ajout
addlocalitetude(localite:Localite): Observable<any>{
    return this.http.post<Localite>(this.baseUrl+"/localites/create",localite);
  }
// competencePagination
getAlllocalitePagination(offset:number):Observable<any>
  {
    return this.http.get(this.baseUrl+"/localites/pagination/"+offset);
}
updatelocalitetude(id:number,localite:Localite): Observable<Object>{
  return this.http.put(`${this.baseUrl}/localites/edite/${id}`,localite);
}
}
