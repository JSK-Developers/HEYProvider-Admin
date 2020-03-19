import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { RegistrationField } from '../field';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: number;
  registrationField: RegistrationField
  constructor(
    private httpService: HttpServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.registrationField = new RegistrationField();
    this.httpService.retriveUser(this.id).subscribe(
      data => this.registrationField = data
    )
  }
  saveUser() {
    this.httpService.updateUser(this.id, this.registrationField).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['user/user'])
      }
    )
  }
}
