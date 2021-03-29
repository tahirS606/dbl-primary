import { AddPropertyComponent } from './../components/properties/add-property/add-property.component';
import { PropertyListComponent } from './../components/properties/property-list/property-list.component';
import { LoginComponent } from '../components/registration/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PropertyListComponent },
  {
    path: 'add-property',
    component: AddPropertyComponent,
  },
];
// routes are javascript objects, for which url, which component presented.  path / , comonent.

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
