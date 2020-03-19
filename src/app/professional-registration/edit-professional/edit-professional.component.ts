import { Component, OnInit } from '@angular/core';
import { ProfessionalRegistrationField } from '../professionalField';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfessionalService } from 'src/app/service/professional.service';

@Component({
  selector: 'app-edit-professional',
  templateUrl: './edit-professional.component.html',
  styleUrls: ['./edit-professional.component.css']
})
export class EditProfessionalComponent implements OnInit {
  id: number;
  professionalRegistrationField: ProfessionalRegistrationField;
  constructor(
    private professionalService: ProfessionalService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.professionalRegistrationField = new ProfessionalRegistrationField();
    this.professionalService.retriveProfessional(this.id).subscribe(
      data => this.professionalRegistrationField = data
    )
  }
  saveUser() {
    this.professionalService.updateProfessional(this.id, this.professionalRegistrationField).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['professional/register'])
      }
    )
  }
}
