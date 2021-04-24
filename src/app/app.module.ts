import { AuthInterceptor } from './components/auth/auth-interceptor';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AgmCoreModule } from '@agm/core';
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

import { AgmDrawingModule } from '@agm/drawing';
import { AutoCompleteAddressComponent } from './components/auto-complete-address/auto-complete-address.component'

let GOOGLE_API_KEY = 'AIzaSyDbpD2C4fBsYbzVQwEr1rIaNbl8zVyimok'

// import { ToastrModule } from 'ngx-toastr';
// import { ToastrNotificationsComponent } from './components/toastr-notifications/toastr-notifications.component';

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
    AutoCompleteAddressComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MyMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_API_KEY,
      libraries: ['drawing']
    }),
    AgmDrawingModule,
    // ToastrNotificationsComponent,
  ],
 
  // multi says don't override additionals, just add
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
