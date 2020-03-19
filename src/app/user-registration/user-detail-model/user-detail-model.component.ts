import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { RegistrationField } from '../field';

@Component({
  selector: 'app-user-detail-model',
  templateUrl: './user-detail-model.component.html',
  styleUrls: ['./user-detail-model.component.css']
})
export class UserDetailModelComponent implements OnInit {
  registrationForm: FormGroup;
  submitted: boolean = false;
  registrationfield: RegistrationField;
  // bsModalRef: BsModalRef;
  display = 'none';
  constructor(private formbulder: FormBuilder,
    public bsModalRef: BsModalRef,
    private userRegistrationServices: HttpServiceService) {
    this.registrationfield = {
      id: 1,
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  get f() {
    return this.registrationForm.controls;
  }
  ngOnInit() {
    this.registrationForm = this.formbulder.group({
      id: [''],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  closeModalDialog() {
    // this.ACModalRef.hide; //set none css after close dialog
  }
  PostData(_registrationForm: NgForm) {
    this.submitted = true;
    if (this.registrationForm.get('password')?.value == this.registrationForm.get('confirmPassword')?.value) {
      if (this.registrationForm.valid) {
        this.registrationfield.userName = this.registrationForm.get('userName')?.value;
        this.registrationfield.email = this.registrationForm.get('email')?.value;
        this.registrationfield.password = this.registrationForm.get('password')?.value;
        this.registrationfield.confirmPassword = this.registrationForm.get('confirmPassword')?.value;
        this.userRegistrationServices.registration(this.registrationfield).subscribe(_registrationForm => {
          this.closeModalDialog();
          console.log("Registration Success");
        }, _error => {
          console.log("Error");
        }

        )
      } else {
        alert('Password not match');
      }
    }
  }

}
