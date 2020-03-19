import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalDetailModelComponent } from './professional-detail-model.component';

describe('ProfessionalDetailModelComponent', () => {
  let component: ProfessionalDetailModelComponent;
  let fixture: ComponentFixture<ProfessionalDetailModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalDetailModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalDetailModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
