import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailModelComponent } from './user-detail-model.component';

describe('UserDetailModelComponent', () => {
  let component: UserDetailModelComponent;
  let fixture: ComponentFixture<UserDetailModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
