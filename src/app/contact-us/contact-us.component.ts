import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(
    private httpService: HttpServiceService
  ) { }
  allUserData: any[] = [];
  ngOnInit(): void {
    this.refreshUserData();
  }
  refreshUserData() {
    this.httpService.getAllContactUsData().subscribe(

      response => {
        console.log(response);
        this.allUserData = response
      }
    )
  }
  deleteMessage: any;
  deleteUserData(id: any) {
    console.log(`delete ${id}`)
    this.httpService.deleteUserData(id).subscribe(
      (response: any) => {
        console.log(response);
        this.deleteMessage = "Delete User SuccessFul!!"
        this.refreshUserData();
      }
    )
  }

}
