import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Demande} from '../Classe/Demande';
import {Client} from '../Classe/Client';
import {Employee} from '../Classe/Employee';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  private baseUrl='http://localhost:8000/api';

  constructor(private httpClient:HttpClient ) {}
 //Ajouter une Demande
  addDemande (demande: Demande): Observable<Demande> {
    return this.httpClient.post<Demande>(this.baseUrl+ '/demande/create', demande);
  }
  //Les Employes lies a  une Demande connaissant le Service
   getEmployeeDemandeByServices(service :String):Observable<any>{
     return this.httpClient.get(this.baseUrl+"/employeeDemande/services/"+service);
   }
  //Les Employes lies a  une Demande connaissant  le SalaireRetenue 
   getEmployeeDemandeBySalaireRetenue(salaireRetenue :number):Observable<any>{
     return this.httpClient.get(this.baseUrl+"/employeeDemande/salaireRetenue"+salaireRetenue); 
   }
   //Les Employes lies a  une Demande connaissant le SalairePropose
   getEmployeeDemandeBySalairePropose(salairePropose :number):Observable<any>{
    return this.httpClient.get(this.baseUrl+"/employeeDemande/salairePropose"+salairePropose); 
  }
  //Les Clients lies a  une Demande connaissant le Service
  getClientDemandeByServices(service :String):Observable<any>{
    return this.httpClient.get(this.baseUrl+"/clientDemande/services/"+service);
  }
  //Les Client lies a  une Demande connaissant le SalaireRetenue
  getClientDemandeBySalaireRetenue(salaireRetenue :number):Observable<any>{
    return this.httpClient.get(this.baseUrl+"/clientDemande/salaireRetenue"+salaireRetenue); 
  }
  //Les Clients lies a  une Demande connaissant le SalairePropose
  getClientDemandeBySalairePropose(salairePropose :number):Observable<any>{
   return this.httpClient.get(this.baseUrl+"/ClientDemande/salairePropose"+salairePropose); 
  }
  //Supprimer une  Demande connaissant son Identifiant
  deleteDemandeId(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/demande/"+id, { responseType: 'text' });
  }
  //Supprimer tous les Demandes
  deleteAllDemande():Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/disponibilite/delete", { responseType: 'text' });
  }
}
