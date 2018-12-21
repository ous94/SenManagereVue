import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Ethenies } from './Ethenies';
import { Observable } from 'rxjs';
import { Niveauetude } from './Classe/Niveauetude';
import { Langue } from './Classe/Langue';
import { TypeIdentification } from './Classe/TypeIdentification';
import { Pays } from './Classe/Pays';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  headers:HttpHeaders=new HttpHeaders({'Content-Type': 'application/json'});
  private baseUrl: string = 'http://localhost:8000/api';
  //private baseurleditte: string = 'http://localhost:4201/api/custumeredit';



  //creation liste Ethinies

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    // return this.httpClient.get(this.baseurl).subscribe(response =>{ this.listcustomer = response; console.log(typeof this.listcustomer);
    // }); 
 
   }
 // methode pour recuperer les  Ethnies   
   getEthnies(): Observable<any> {
     return this.httpClient.get<Ethenies[]>(`${this.baseUrl}` + `/ethnies/nom`);
 
   }
   // pour recuperer les  niveauEtudes
   getNiveauEtude(): Observable<any> {
    return this.httpClient.get<Niveauetude[]>(`${this.baseUrl}` + `/niveauetude/niveau`);

  }
  // pour recuperer les  langues parleess
  getLangue(): Observable<any> {
    return this.httpClient.get<Langue[]>(`${this.baseUrl}` + `/langue/nom`); 

  }

   // pour recuperer les  Competences
   getCompetence(): Observable<any> {
    return this.httpClient.get<Langue[]>(`${this.baseUrl}` + `/competence/description`); 

  }

  // pour recuperer les  Identifications
  getIdentification(): Observable<any> {
    return this.httpClient.get<TypeIdentification[]>(`${this.baseUrl}` + `/identification/nom`); 

  }
  getpays(): Observable<any> {
    return this.httpClient.get<Pays[]>(`${this.baseUrl}` + `/pays/nom`); 

  }
 //methode pour ajouter un customer
 addHero (employee: Object): Observable<Object> {
  return this.httpClient.post(`${this.baseUrl}` + `/employes/create`, employee);
}





}
