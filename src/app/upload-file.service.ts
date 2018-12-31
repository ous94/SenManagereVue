import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private baseUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {}
  
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.baseUrl+'/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }
 
  getFiles(): Observable<String[]> {
    return this.http.get<String[]>(this.baseUrl+'/getallfiles')
  }
  getPhoto(nomFichier :String) :string
  {
    return this.baseUrl+"/files/"+nomFichier;
  }

  uploadPhoto(file:File) :Observable<String>
  {
    let formdata: FormData = new FormData();
       formdata.append('file', file);
       return this.http.post(this.baseUrl+'/post/uploadPhoto',formdata , {
        reportProgress: true,
        responseType: 'text'
      });
  }
}