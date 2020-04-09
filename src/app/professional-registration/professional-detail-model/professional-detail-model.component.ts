import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProfessionalService } from 'src/app/service/professional.service';
import { ProfessionalRegistrationField } from '../professionalField';

@Component({
  selector: 'app-professional-detail-model',
  templateUrl: './professional-detail-model.component.html',
  styleUrls: ['./professional-detail-model.component.css']
})
export class ProfessionalDetailModelComponent implements OnInit {
  professionalRegistrationForm: FormGroup;
  submitted: boolean = false;
  professionalRegistrationField: ProfessionalRegistrationField;
  display = 'none';
  constructor(
    private formBuilder: FormBuilder,
    public bsModalRef: BsModalRef,
    private professionalService: ProfessionalService) {
    this.professionalRegistrationField = {
      id: 1,
      userName: '',
      email: '',
      phoneNumber: '',
      password: '',
      panNumber: 1,
      adharNumber: 1,
      bankAccountNumber: 1,
      ifscCode: ''
    }
  }
  get f() {
    return this.professionalRegistrationForm.controls;
  }
  ngOnInit() {
    this.professionalRegistrationForm = this.formBuilder.group({
      id: [''],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      panNumber: ['', Validators.required],
      adharNumber: ['', Validators.required],
      bankAccountNumber: ['', Validators.required],
      ifscCode: ['', Validators.required]
    })
  }

  closeModalDialog() {

  }
  PostData(_profesionalRegistrationForm: NgForm) {
    this.submitted = true;
    if (this.professionalRegistrationForm.valid) {
      this.professionalRegistrationField.userName = this.professionalRegistrationForm.get('userName')?.value;
      this.professionalRegistrationField.email = this.professionalRegistrationForm.get('email')?.value;
      this.professionalRegistrationField.phoneNumber = this.professionalRegistrationForm.get('phoneNumber')?.value;
      this.professionalRegistrationField.password = this.professionalRegistrationForm.get('password')?.value;
      this.professionalRegistrationField.panNumber = this.professionalRegistrationForm.get('panNumber')?.value;
      this.professionalRegistrationField.adharNumber = this.professionalRegistrationForm.get('adharNumber')?.value;
      this.professionalRegistrationField.bankAccountNumber = this.professionalRegistrationForm.get('bankAccountNumber')?.value;
      this.professionalRegistrationField.ifscCode = this.professionalRegistrationForm.get('ifscCode')?.value;
      this.professionalService.registration(this.professionalRegistrationField).subscribe(_ProfessionalRegistrationForm => {
        this.closeModalDialog();
        console.log('Registration Success');
      }, _error => {
        console.log('Error');
      }
      )
    }
  }

}
