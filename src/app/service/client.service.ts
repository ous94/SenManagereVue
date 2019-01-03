import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Client } from '../Classe/Client';
import { Observable } from 'rxjs/internal/Observable';
import { BaseUrl } from '../ConfigProjet/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  base:BaseUrl = new BaseUrl();
  baseUrl:String=this.base.baseUrl;
  constructor(private httpClient :HttpClient) { }

  //Methode Pour ajouter un Client
  addClient (client: Client): Observable<Client> {
    return this.httpClient.post<Client>(`${this.baseUrl}` + `/clients/create`, client);
  }
   
  //Methode Pour lister les clients
  getClients(): Observable<any> {
    return this.httpClient.get(this.baseUrl+'/clients'); 
  }
}
