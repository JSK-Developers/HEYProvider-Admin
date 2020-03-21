import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/service/booking.service';
import { ActivatedRoute } from '@angular/router';
import { BookServicesByUserField } from '../bookServicesByUserFiled';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  provider: any;
  id: number;
  bookServicesByUserField: BookServicesByUserField
  constructor(
    private bookingService: BookingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.bookServicesByUserField = new BookServicesByUserField();
    this.bookingService.getServiceDetailById(this.id).subscribe(
      data => {
        this.bookServicesByUserField = data
      }
    )
  }

}
