import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Pays } from '../Classe/Pays';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  private baseUrl='http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  getPaysByNom(nom :String) :Observable<any>
  {
    return this.http.get(this.baseUrl+"/ppays/nompays/"+nom);
  }
  deletepaysById(idlocalite :number) : Observable<any>
  {
      console.log("Suppression des localite choisi");
      return this.http.delete(this.baseUrl+"/pays/delete/"+idlocalite, { responseType: 'text' });
  }

   //ajout
addPays(pays:Pays): Observable<any>{
    return this.http.post<Pays>(this.baseUrl+"/pays/create",pays);
  }
// competencePagination

//  les  Moyens parles des Evenenments et les grand esprit parles des idées

getAllPaysPagination(offset:number):Observable<any>
{
    return this.http.get(this.baseUrl+"/pays/pagination/"+offset);
}
updatePays(id:number,pays:Pays): Observable<Object>{
    return this.http.put(`${this.baseUrl}/pays/edite/${id}`,pays);
}

}
