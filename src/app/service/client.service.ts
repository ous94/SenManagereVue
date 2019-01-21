import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Client } from '../Classe/Client';
import { Observable } from 'rxjs/internal/Observable';
import { BaseUrl } from '../ConfigProjet/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  client : Client = new Client();
  base:BaseUrl = new BaseUrl();
  baseUrl:String=this.base.baseUrl;
  constructor(private httpClient :HttpClient) { }

  //Methode Pour ajouter un Client
  addClient (client: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.baseUrl+ '/clients/create', client);
  }
   
  //Methode Pour lister les clients
  getClients(): Observable<any> {
    return this.httpClient.get(this.baseUrl+'/clients'); 
  }

  //Les  listes  client
getAllClient(): Observable<any> {
  return this.httpClient.get(this.baseUrl+"/clientall"); 
}


  // suppression d'un employee
  deleteClientid(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl+ '/clients/create', { responseType: 'text' });
  }
  //Methode Pour lister les clients
  getLoginClient(client:Client): Observable<Client> {
    return this.httpClient.post<Client>(this.baseUrl+ '/client/login',client); 
  }

  setteClient(client:Client)
  {
    return this.client=client;
    
  }
  

  //modification de customers
  updateClient(id: number, client: Client): Observable<Client> {
    return this.httpClient.put<Client>(`${this.baseUrl}/clients/edite/${id}`,client);
  }
 


}
