import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { BaseUrl } from '../ConfigProjet/baseUrl';
import { Niveauetude } from '../Classe/Niveauetude';

@Injectable({
  providedIn: 'root'
})
export class NiveauEtudeService {

  base:BaseUrl = new BaseUrl();
  baseUrl:String=this.base.baseUrl;

  constructor(private http:HttpClient) { }

  getNiveauEtudeByNiveau(niveau :String) :Observable<any>
  {
    return this.http.get(this.baseUrl+"/nniveauEtudes/niveau/"+niveau);
  }

  deleteNiveauetudeById(idetheni :number) : Observable<any>
  {
      console.log("Suppression des ethnies choisi");
      return this.http.delete(this.baseUrl+"/niveauEtude/"+idetheni, { responseType: 'text' });
  }

   //ajout
addNiveauetude(niveauetude:Niveauetude): Observable<any>{
    return this.http.post<Niveauetude>(this.baseUrl+"/niveauEtudes/create",niveauetude);
  }
// competencePagination
getAllNiveauetudePagination(offset:number):Observable<any>
  {
    return this.http.get(this.baseUrl+"/niveauEtudes/pagination/"+offset);
}
updateNiveauetude(id:number,niveauetude:Niveauetude): Observable<Object>{
  return this.http.put(`${this.baseUrl}/niveauEtudes/edite/${id}`,niveauetude);
}
conterNiveau():Observable<any>
{
  return this.http.get<any>(this.baseUrl+"/niveauEtude/nombre/");
}
}
