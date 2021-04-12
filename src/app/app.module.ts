import { MapComponent } from './components/map/map.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPropertyComponent } from './components/properties/add-property/add-property.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SearchPropertiesComponent } from './components/search/search-properties.component';
import { LoginComponent } from './components/registration/login/login.component';
import { PropertyDetailComponent } from './components/properties/property-detail/property-detail.component';
import { MyMaterialModule } from './modules/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertyListComponent } from './components/properties/property-list/property-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportListComponent } from './components/report-list/report-list.component';

import { ReportComponent } from './components/report/report.component';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MyMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,

    // ToastrNotificationsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
