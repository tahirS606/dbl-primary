import { RoutesListComponent } from './../components/routes-list/routes-list.component';
import { AuthGuard } from './../components/auth/auth.guard';
import { SignUpComponent } from './../components/auth/sign-up/sign-up.component';
import { LoginComponent } from './../components/auth/login/login.component';
import { ReportComponent } from './../components/report/report.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPropertyComponent } from './../components/properties/add-property/add-property.component';
import { PropertyListComponent } from './../components/properties/property-list/property-list.component';
import { ReportListComponent } from '../components/report-list/report-list.component';

const routes: Routes = [
  { path: '', component: PropertyListComponent },
  {
    path: 'add-property',
    component: AddPropertyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-property/:propertyId',
    component: AddPropertyComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'new-report/:propertyId',
    component: ReportComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'reports/:propertyId',
    component: ReportListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/login',
    component: LoginComponent,
  },
  {
    path: 'user/signup',
    component: SignUpComponent,
  },
{
    path: 'routes',
    component: RoutesListComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
