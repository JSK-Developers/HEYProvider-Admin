
import { Map1Component } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { EditUserComponent } from './user-registration/edit-user/edit-user.component';
import { ProfessionalRegistrationComponent } from './professional-registration/professional-registration.component';
import { BookServicesByUserComponent } from './book-services-by-user/book-services-by-user.component';
import { EditProfessionalComponent } from './professional-registration/edit-professional/edit-professional.component';
import { ServiceDetailComponent } from './book-services-by-user/service-detail/service-detail.component';


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
  {
    path: 'dashboards', children:
      [
        { path: 'v1', component: Dashboard1Component },
      ]
  },
  {
    path: 'profiles', children:
      [
        { path: 'profile1', component: Profile1Component },
      ]
  },
  {
    path: 'tables', children:
      [
        { path: 'table1', component: BasicTableComponent },
      ]
  },
  {
    path: 'user', children:
      [
        { path: 'user', component: UserRegistrationComponent },
      ]
  },
  {
    path: 'user', children:
      [
        { path: ':id', component: EditUserComponent },
      ]
  },
  {
    path: 'services', children:
      [
        { path: 'bookByUser', component: BookServicesByUserComponent },
      ]
  },
  {
    path: 'services', children:
      [
        { path: ':id', component: ServiceDetailComponent },
      ]
  },
  {
    path: 'maps', children:
      [
        { path: 'map1', component: Map1Component },
      ]
  },
  {
    path: 'professional', children:
      [
        { path: 'register', component: ProfessionalRegistrationComponent },
      ]
  },
  {
    path: 'professional', children:
      [
        { path: ':id', component: EditProfessionalComponent },
      ]
  },

  { path: 'modals', component: ModalsComponent },
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
