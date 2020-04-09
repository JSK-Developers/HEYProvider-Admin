import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/service/booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServicesByUserField } from '../bookServicesByUserFiled';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  provider: any;
  id: number;
  bookServicesByUserField: BookServicesByUserField
  minDate: Date;
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  providerId: number;
  userId: number;
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.bookServicesByUserField = new BookServicesByUserField();
    this.bookingService.getServiceDetailById(this.id).subscribe(
      data => {
        this.providerId = data.providerid;
        this.userId = data.userid;
        this.bookServicesByUserField = data
      }
    )
  }
  saveDetail() {
    this.bookingService.updateDetail(this.id, this.bookServicesByUserField).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['services/services'])
      }
    )
  }



}
