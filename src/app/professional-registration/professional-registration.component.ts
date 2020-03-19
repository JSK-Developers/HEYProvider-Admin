import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Subject } from 'rxjs';
import { ProfessionalService } from '../service/professional.service';
import { Router } from '@angular/router';
import { ProfessionalDetailModelComponent } from './professional-detail-model/professional-detail-model.component';

@Component({
  selector: 'app-professional-registration',
  templateUrl: './professional-registration.component.html',
  styleUrls: ['./professional-registration.component.css']
})
export class ProfessionalRegistrationComponent implements OnInit {
  bsModalRef: BsModalRef;
  messgae: String;
  allProfessional: any[] = [];
  dtOption: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  id: number;
  professionalList: any;
  deleteMessage: String;
  constructor(
    private modelService: BsModalService,
    private httpService: ProfessionalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshProfessional();
  }
  refreshProfessional() {
    this.httpService.getAllProfessional().subscribe(
      response => {
        console.log(response);
        this.allProfessional = response
      }
    )
  }
  openModalWithComponent() {
    this.bsModalRef = this.modelService.show(ProfessionalDetailModelComponent, Object.assign({}, { class: 'gray model-lg' }));
    this.bsModalRef.content.closeBtnName = 'close';
  }

  deleteProfessional(id: any) {
    console.log(`delete ${id}`);
    this.httpService.deleteProfessional(id).subscribe(
      (response: any) => {
        console.log(response);
        this.deleteMessage = "Delete Professional Successfully";
        this.refreshProfessional();
      }
    )
  }
  updateProfessional(id: any) {
    console.log(`update ${id}`);
    this.router.navigate(['professional', id])
  }
}
