import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Ethnies } from '../Classe/Ethnies';

@Injectable({
  providedIn: 'root'
})
export class EthniesService {

  private baseUrl='http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  getEthniesByNom(nom:String): Observable<any>
  {
       return this.http.get(this.baseUrl+"/eethnies/nom/"+nom);
  }
  
  deleteEthniesById(idetheni :number) : Observable<any>
  {
      console.log("Suppression des ethnies choisi");
      return this.http.delete(this.baseUrl+"/ethnies/delete/"+idetheni, { responseType: 'text' });
  }

   //ajout
addEthnies(ethnies:Ethnies): Observable<any>{
    return this.http.post<Ethnies>(this.baseUrl+"/ethnies/create",ethnies);
  }
// competencePagination
getAllEthniesPagination(offset:number):Observable<any>
  {
    return this.http.get(this.baseUrl+"/ethnies/pagination/"+offset);
}
updateEthnies(id:number,ethnies:Ethnies): Observable<Object>{
  return this.http.put(`${this.baseUrl}/ethnies/edite/${id}`,ethnies);
}
conterEthnie():Observable<any>
{
  return this.http.get<any>(this.baseUrl+"/ethnie/nombre/");
}


}
