import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Ethenies } from './Ethenies';
import { Observable } from 'rxjs';
import { Niveauetude } from './Classe/Niveauetude';
import { Langue } from './Classe/Langue';
import { TypeIdentification } from './Classe/TypeIdentification';
import { Pays } from './Classe/Pays';
import { Employee } from './Classe/Employee';
import { Competence } from './Classe/Competence';
import { BaseUrl } from './ConfigProjet/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  headers:HttpHeaders=new HttpHeaders({'Content-Type': 'application/json'});
base:BaseUrl = new BaseUrl();
baseUrl:String=this.base.baseUrl;

 // private baseUrl: string = 'http://localhost:8000/api';
  //private baseurleditte: string = 'http://localhost:4201/api/custumeredit';
  private baseUrl2: string = 'http://localhost:8000/api/employes';



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
    return this.httpClient.get<Langue[]>('http://localhost:8000/api/langues'); 

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
  //get £Paysbyno
  getpaysbyNom(nom:String): Observable<Pays> {
    return this.httpClient.get<Pays>(`${this.baseUrl}` + `/pays/nompays/${nom}`); 

  }

 //methode pour ajouter un customer
 addEmployee (employe: Employee): Observable<Employee> {
  return this.httpClient.post<Employee>(`${this.baseUrl}` + `/employes/create`, employe);
}

//
addEmployer2(employe: Object): Observable<Object> {
return this.httpClient.post(`${this.baseUrl2}` + `/create`, employe);
}

 // pour recuperer les  Localite
 getLocalite(): Observable<any> {
  return this.httpClient.get(this.baseUrl+ "/localites/nom"); 

}

//servicze recherche
getcompetencebyDescription(description: String): Observable<Competence> {
  return this.httpClient.get<Competence>(`${this.baseUrl}/competence/${description}`);
}


//servicze recherche situation
getCustomersBySituation(genre: String): Observable<any> {
  return this.httpClient.get(`${this.baseUrl}/situation/${genre}`);
}

getEmployes(): Observable<any> {
  return this.httpClient.get('http://localhost:8000/api/employes'); 
}


  // suppression d'un employee
  deleteEmployeeid(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/employes/${id}`, { responseType: 'text' });
  }






}
