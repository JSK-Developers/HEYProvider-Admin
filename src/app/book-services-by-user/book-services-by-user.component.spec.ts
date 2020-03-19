import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookServicesByUserComponent } from './book-services-by-user.component';

describe('BookServicesByUserComponent', () => {
  let component: BookServicesByUserComponent;
  let fixture: ComponentFixture<BookServicesByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookServicesByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookServicesByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
