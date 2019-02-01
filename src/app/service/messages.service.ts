import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Messages } from '../Classe/Messages';
import { BaseUrl } from '../ConfigProjet/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {


  base:BaseUrl = new BaseUrl();
  baseUrl:String=this.base.baseUrl;
  constructor(private httpClient :HttpClient) { }

  sendMessages(messages: Messages): Observable<String> {
    return this.httpClient.post<String>(this.baseUrl+ '/messages/send', messages);
  }
  getallMessage():  Observable<any> {
    return this.httpClient.get(this.baseUrl+'/mesMessages');
  }
   // suppression de message
   deleteMessageid(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/employes/delete/${id}`, { responseType: 'text' });

  }
  /////conter
conterMeassages():Observable<any>
{
  return this.httpClient.get<any>(this.baseUrl+"/message/nombre/");
}
  

}
