
import { AuthInterceptor } from './components/auth/auth-interceptor';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AgmCoreModule, PolygonManager } from '@agm/core';
import { MapComponent } from './components/map/map.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddPropertyComponent } from './components/properties/add-property/add-property.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SearchPropertiesComponent } from './components/search/search-properties.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PropertyDetailComponent } from './components/properties/property-detail/property-detail.component';
import { MyMaterialModule } from './modules/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertyListComponent } from './components/properties/property-list/property-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReportListComponent } from './components/report-list/report-list.component';

import { ReportComponent } from './components/report/report.component';

import { GooglePlaceModule } from "ngx-google-places-autocomplete"
import { AgmDrawingModule } from '@agm/drawing';
import { AutocompleteAddressComponent } from './components/properties/autocomplete-address/autocomplete-address.component';
import { PolygonecompleteDirective } from './components/map/polygonecomplete.directive';
import { DisplayReportComponent } from './components/report/display-report/display-report.component';
import { CheckboxComponent } from './components/report/checkbox/checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPropertyComponent,
    LoginComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    MapComponent,
    SearchPropertiesComponent,
    HeaderComponent,
    ReportListComponent,
    ReportComponent,
    SignUpComponent,
    AutocompleteAddressComponent,
    PolygonecompleteDirective,
    DisplayReportComponent,
    CheckboxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MyMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule .forRoot({
      apiKey: 'AIzaSyDbpD2C4fBsYbzVQwEr1rIaNbl8zVyimok',
      libraries: ['drawing', 'places']
    }),
    GooglePlaceModule,
    AgmDrawingModule,
  ],
 
  // multi says don't override additionals, just add
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, 
    PolygonManager],
  bootstrap: [AppComponent],
})
export class AppModule {}
