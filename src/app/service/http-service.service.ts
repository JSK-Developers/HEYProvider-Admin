import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegistrationField } from '../user-registration/field';
import { Observable } from 'rxjs';
import { contactUsField } from '../contact-us/contactUsField';

export class UserNameBean {
  constructor(public data = [], ) { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  ServicesUrl = 'http://localhost:8080/api/';
  constructor(private httpclient: HttpClient) { }

  registration(registrationField: RegistrationField): Observable<any> {
    let httpHeaders = new HttpHeaders().set('content-type', 'application/json'); // data will be converted to json formate 
    let options = {
      headers: httpHeaders
    };
    return this.httpclient.post(this.ServicesUrl + 'register', registrationField, options)
  }
  HelloWorld() {
    return this.httpclient.get<UserNameBean>('http://localhost:8080/api/registration/List');
  }

  getAllUser() {
    return this.httpclient.get<RegistrationField[]>('http://localhost:8080/api/registration/List');
  }
  getAllContactUsData() {
    return this.httpclient.get<contactUsField[]>('http://localhost:8080/apiContactus/Contactus/List');
  }
  // deleteUser(id) {
  //   return this.httpclient.delete(`http://localhost:8080/api/users/${id}`);
  // }
  deleteUser(id: any) {
    return this.httpclient.delete(`http://localhost:8080/api/users/${id}`);
  }
  retriveUser(id: any) {
    return this.httpclient.get<RegistrationField>(`http://localhost:8080/api/registration/${id}`);
  }

  updateUser(id: any, registrationField: any) {
    return this.httpclient.put(`http://localhost:8080/api/users/${id}`, registrationField);
  }

  deleteUserData(id: any) {
    return this.httpclient.delete(`http://localhost:8080/apiContactus/ContactusDetail/${id}`);
  }
}
