import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import { BaseUrl } from '../ConfigProjet/baseUrl';
import { Localite } from '../Classe/Localite';

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

  deletelocaliteById(idlocalite :number) : Observable<any>
  {
      console.log("Suppression des localite choisi");
      return this.http.delete(this.baseUrl+"/localite/delete/"+idlocalite, { responseType: 'text' });
  }

   //ajout
addlocalitetude(localite:Localite): Observable<any>{
    return this.http.post<Localite>(this.baseUrl+"/localite/create",localite);
  }
// competencePagination
getAlllocalitePagination(offset:number):Observable<any>
  {
    return this.http.get(this.baseUrl+"/localite/pagination/"+offset);
}
updatelocalitetude(id:number,localite:Localite): Observable<Object>{
  return this.http.put(`${this.baseUrl}/localite/edite/${id}`,localite);
}
/////conter
conterClient():Observable<any>
{
  return this.http.get<any>(this.baseUrl+"/localite/nombre/");
}

}
