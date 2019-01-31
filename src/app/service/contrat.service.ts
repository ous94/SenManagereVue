import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { BaseUrl } from '../ConfigProjet/baseUrl';
import { Contrat } from '../Classe/Contrat';
import { RechercheContrat } from '../Classe/RechercheContrat';
import { Client } from '../Classe/Client';

@Injectable({
  providedIn: 'root'
})
export class ContratService {
   base:BaseUrl=new BaseUrl();
   baseUrl:string=this.base.baseUrl;
  constructor(private httpClient:HttpClient) { }
  creatContrat(contrat:Contrat):Observable<Contrat>
  {
    return this.httpClient.post<Contrat>(this.baseUrl+"/contrat/create",contrat);
  }
  deleteContrat(idContrat:number):Observable<string>
  {
    return this.httpClient.delete<string>(this.baseUrl+"/contrat/delete/"+idContrat);
  }
  listeAllContratPagination(offset:number):Observable<Contrat[]>
  {
    return this.httpClient.get<Contrat[]>(this.baseUrl+"/contrat/liste/pagination/"+offset);
  }
  listeAllContrat() :Observable<Contrat[]>
  {
    return this.httpClient.get<Contrat[]>(this.baseUrl+"/contrat/liste");
  }
  listeContratEmploye(rechercheContrat :RechercheContrat):Observable<Contrat[]>
  {
    return this.httpClient.post<Contrat[]>(this.baseUrl+"/contrat/employee",rechercheContrat);
  }
  listeContratDemande(rechercheContrat :RechercheContrat):Observable<Contrat[]>
  {
    return this.httpClient.post<Contrat[]>(this.baseUrl+"/contrat/demande",rechercheContrat);
  }
  editeContrat(idContrat:number,contrat:Contrat) :Observable<any>
  {
    return this.httpClient.put<any>(this.baseUrl+"/contrat/edite/"+idContrat,contrat);
  }
  listeContratClient(rechercheContrat :RechercheContrat):Observable<Contrat[]>
  {
    return this.httpClient.post<Contrat[]>(this.baseUrl+"/client/demande/contrat",rechercheContrat);
  }
  contratRecherche(rechercheContrat:RechercheContrat):Observable<Contrat[]>
  {
    return this.httpClient.post<Contrat[]>(this.baseUrl+"/contrat/recherche",rechercheContrat);
  }
  countContratClient(client:Client):Observable<number>
{
  return this.httpClient.post<number>(this.baseUrl+"/contrat/client/count",client);
}


}
