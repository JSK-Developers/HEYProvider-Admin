import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpServiceService } from '../service/http-service.service';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { UserDetailModelComponent } from './user-detail-model/user-detail-model.component';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  bsModalRef: BsModalRef;
  message: string;
  allUser: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  id: number;
  userlist: any;
  deleteMessage: string;
  constructor(private modalService: BsModalService,
    private httpservice: HttpServiceService,
    private router: Router) { }

  ngOnInit() {
    this.refreshUser();
  }
  refreshUser() {
    this.httpservice.getAllUser().subscribe(

      response => {
        console.log(response);
        this.allUser = response
      }
    )
  }
  openModalWithComponent() {

    this.bsModalRef = this.modalService.show(UserDetailModelComponent, Object.assign({}, { class: 'gray modal-lg' }));

    this.bsModalRef.content.closeBtnName = 'Close';
  }
  helloWorld() {
    console.log(this.httpservice.HelloWorld());
    this.httpservice.HelloWorld().subscribe(
      (response: any) => this.handelSuccessfulResponse(response)
    );
    console.log('last line');
  }
  handelSuccessfulResponse(response: any) {
    this.message = response[0].userName;
  }
  deleteUser(id: any) {
    console.log(`delete ${id}`)
    this.httpservice.deleteUser(id).subscribe(
      (response: any) => {
        console.log(response);
        this.deleteMessage = "Delete User SuccessFul!!"
        this.refreshUser();
      }
    )
  }
  updateUser(id: any) {
    console.log(`update ${id}`)
    this.router.navigate(['user', id])
  }
}
