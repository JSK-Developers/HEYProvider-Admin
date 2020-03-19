import { Component, OnInit } from '@angular/core';
import { BookingService } from '../service/booking.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-services-by-user',
  templateUrl: './book-services-by-user.component.html',
  styleUrls: ['./book-services-by-user.component.css']
})
export class BookServicesByUserComponent implements OnInit {
  allBookingDetail: any[] = [];
  date: Date;
  constructor(
    private bookingService: BookingService,
    public datepipe: DatePipe
  ) { }
  pendingStatus = 'pending';
  CompleteStatus = 'Done';
  ngOnInit() {
    this.refreshUser();
  }
  refreshUser() {
    this.bookingService.getAllUser().subscribe(

      response => {
        console.log(response);
        this.allBookingDetail = response
      }
    )
  }

}
