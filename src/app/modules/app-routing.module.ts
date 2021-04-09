import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPropertyComponent } from './../components/properties/add-property/add-property.component';
import { PropertyListComponent } from './../components/properties/property-list/property-list.component';
import { ReportComponent } from './../components/report/report.component';
import { ReportListComponent } from './../components/report-list/report-list.component';
// import { LoginComponent } from '../components/registration/login/login.component';

const routes: Routes = [
  { path: '', component: PropertyListComponent },
  {
    path: 'add-property',
    component: AddPropertyComponent,
  },
  {
    path: 'edit-property/:propertyId',
    component: AddPropertyComponent,
  },
  {
    path: 'new-report/:propertyId',
    component: ReportComponent,
  },

  {
    path: 'reports/:propertyId',
    component: ReportListComponent,
  },
];
// routes are javascript objects, for which url, which component presented.  path / , comonent.

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
