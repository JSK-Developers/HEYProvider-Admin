import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookServicesByUserField } from '../book-services-by-user/bookServicesByUserFiled';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  ServicesUrl = 'http://localhost:8080/api/';
  constructor(private httpclient: HttpClient) { }

  getAllUser() {
    return this.httpclient.get<BookServicesByUserField[]>('http://localhost:8080/api/AllData');
  }
  getServiceDetailById(id: any) {
    return this.httpclient.get<BookServicesByUserField>(`http://localhost:8080/api/serviceDetail/${id}`);
  }

  updateDetail(id: any, bookServiceField: any) {
    return this.httpclient.put(`http://localhost:8080/api/updateService/${id}`, bookServiceField);
  }
  deleteUser(id: any) {
    return this.httpclient.delete(`http://localhost:8080/api/AC_Users/${id}`);
  }
}
