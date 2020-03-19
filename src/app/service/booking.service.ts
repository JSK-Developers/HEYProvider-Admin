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
}
