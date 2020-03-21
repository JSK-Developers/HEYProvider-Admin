import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';
import { ErrorModule } from './views/errors/error.module';
import { DataTablesModule } from 'angular-datatables';
// main layout
import { NavigationModule } from './main-layout/navigation/navigation.module';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserDetailModelComponent } from './user-registration/user-detail-model/user-detail-model.component';
import { ModalModule } from 'ngx-bootstrap';
import { EditUserComponent } from './user-registration/edit-user/edit-user.component';
import { ProfessionalRegistrationComponent } from './professional-registration/professional-registration.component';
import { ProfessionalDetailModelComponent } from './professional-registration/professional-detail-model/professional-detail-model.component';
import { BookServicesByUserComponent } from './book-services-by-user/book-services-by-user.component';
import { EditProfessionalComponent } from './professional-registration/edit-professional/edit-professional.component';
import { DatePipe } from '@angular/common';
import { ServiceDetailComponent } from './book-services-by-user/service-detail/service-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserDetailModelComponent,
    EditUserComponent,
    ProfessionalRegistrationComponent,
    ProfessionalDetailModelComponent,
    BookServicesByUserComponent,
    EditProfessionalComponent,
    ServiceDetailComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    NavigationModule,
    AppRoutes,
    RouterModule,
    FormsModule,
    SharedModule,
    ViewsModule,
    ErrorModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
