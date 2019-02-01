import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Disponibilite } from '../Classe/Disponibilite';
import { BaseUrl } from '../ConfigProjet/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class DisponibiliteService {

  base:BaseUrl = new BaseUrl();
  baseUrl:String=this.base.baseUrl;

  constructor(private httpClient:HttpClient ) {}

  addDisponibilite (disponibilite: Disponibilite): Observable<Disponibilite> {
    return this.httpClient.post<Disponibilite>(this.baseUrl+ '/disponibilite/create', disponibilite);
  }

   getEmployeeDisponibiliteByMomemt(moment :String):Observable<any>{
     return this.httpClient.get(this.baseUrl+"/disponibilite/moment/"+moment);
   }
   
   getEmployeeDisponibiliteByHoraire(horaire :String):Observable<any>{
     return this.httpClient.get(this.baseUrl+"/disponibilite/horaire"+horaire); 
   }

   deleteDisponibiliteById(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/disponibilite/"+id, { responseType: 'text' });
   }

   deleteAllDisponibilite():Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/disponibilite/delete", { responseType: 'text' });
   }

}
