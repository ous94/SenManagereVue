import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Messages } from '../Classe/Messages';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private baseUrl='http://localhost:8000/api';
  constructor(private httpClient :HttpClient) { }

  sendMessages(messages: Messages): Observable<String> {
    return this.httpClient.post<String>(this.baseUrl+ '/messages/send', messages);
  }
}
