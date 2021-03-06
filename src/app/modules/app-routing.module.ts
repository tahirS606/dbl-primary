import { ReportlistbypropertyComponent } from './../components.reports/reportlistbyproperty/reportlistbyproperty.component';
import { DisplayReportComponent } from './../components/report/display-report/display-report.component';
import { RouteComponent } from './../components/route/route.component';
import { RoutesListComponent } from './../components/routes-list/routes-list.component';
import { AuthGuard } from './../components/auth/auth.guard';
import { SignUpComponent } from './../components/auth/sign-up/sign-up.component';
import { LoginComponent } from './../components/auth/login/login.component';
import { ReportComponent } from './../components/report/report.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPropertyComponent } from './../components/properties/add-property/add-property.component';
import { PropertyListComponent } from './../components/properties/property-list/property-list.component';
import { ReportListComponent } from '../components/report/report-list/report-list.component';

const routes: Routes = [
  { path: 'properties', component: PropertyListComponent },
  {
    path: 'add-property',
    component: AddPropertyComponent,
    canActivate: [AuthGuard]
  },
  {
  path: 'routes/:route',
  component: RouteComponent,
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
    path: 'reports',
    component: ReportListComponent, 
    canActivate: [AuthGuard]
  },

  {
    path: 'reports/:reportId',
    component: DisplayReportComponent,
  },

  {
    path: 'reports/by-property/:propertyId',
    component: ReportlistbypropertyComponent, 
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
    path: '',
    component: RoutesListComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
