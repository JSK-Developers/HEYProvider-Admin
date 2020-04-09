import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-book-services-by-user',
  templateUrl: './book-services-by-user.component.html',
  styleUrls: ['./book-services-by-user.component.css']
})
export class BookServicesByUserComponent implements OnInit {
  allBookingDetail: any[] = [];
  bsModalRef: BsModalRef;
  date: Date;
  id: any;
  constructor(
    private bookingService: BookingService,
    // public datepipe: DatePipe,
    private router: Router
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

  getServiceDetail(id: any) {
    console.log(`update ${id}`)
    this.router.navigate(['services', id]);
  }
  deleteMessage: any;
  deleteUser(id: any) {
    console.log(`delete ${id}`)
    this.bookingService.deleteUser(id).subscribe(
      (response: any) => {
        console.log(response);
        this.deleteMessage = "Delete User SuccessFul!!"
        this.refreshUser();
      }
    )
  }

}
