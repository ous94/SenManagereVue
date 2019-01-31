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

  deleteTypeidentificationById(idetheni :number) : Observable<any>
  {
      console.log("Suppression des ethnies choisi");
      return this.http.delete(this.baseUrl+"/ethnies/delete/"+idetheni, { responseType: 'text' });
  }

   //ajout
addTypeidentiificton(ethnies:TypeIdentification): Observable<any>{
    return this.http.post<TypeIdentification>(this.baseUrl+"/typeIdentification/create",ethnies);
  }
// competencePagination
getAllTypeIdentificationPagination(offset:number):Observable<any>
  {
    return this.http.get(this.baseUrl+"/typeIdentification/pagination/"+offset);
}
updateTypeIdent(id:number,ethnies:TypeIdentification): Observable<Object>{
  return this.http.put(`${this.baseUrl}/typeIdentification/edite/${id}`,ethnies);
}
conterTypeien():Observable<any>
{
  return this.http.get<any>(this.baseUrl+"/typeIdentification/nombre/");
}
}


