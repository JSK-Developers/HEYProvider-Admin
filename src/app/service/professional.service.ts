import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfessionalRegistrationField } from '../professional-registration/professionalField';
import { Observable } from 'rxjs';

export class ProfessionalNameBean {
  constructor(public data = [], ) { }
}
@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  serviceUrl = 'http://localhost:8080/apiProvider/';
  constructor(private http: HttpClient) { }

  registration(professionalRegistrationFiled: ProfessionalRegistrationField): Observable<any> {
    let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
    let options = {
      headers: httpHeaders
    };
    return this.http.post(this.serviceUrl + 'provider', professionalRegistrationFiled, options)
  }
  getAllProfessional() {
    return this.http.get<ProfessionalRegistrationField[]>(this.serviceUrl + 'provider/List')
  }
  deleteProfessional(id: any) {
    return this.http.delete(this.serviceUrl + `provider/${id}`);
  }
  retriveProfessional(id: any) {
    return this.http.get<ProfessionalRegistrationField>(this.serviceUrl + `singleProvider/${id}`);
  }
  updateProfessional(id: any, professionalRegistrationFiled: any) {
    return this.http.put(this.serviceUrl + `provider/${id}`, professionalRegistrationFiled)
  }
}
