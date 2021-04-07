import { OlMapComponent } from './components/ol-map/ol-map.component';
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
import { PropertyThumbnailComponent } from './components/properties/property-thumbnail/property-thumbnail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FavoritePropertiesComponent } from './components/dashboard/favorite-properties/favorite-properties.component';
import { IconComponent } from './components/icon/icon.component';

import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { ReportComponent } from './components/report/report.component';
// import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { ToastrModule } from 'ngx-toastr';
// import { ToastrNotificationsComponent } from './components/toastr-notifications/toastr-notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPropertyComponent,
    LoginComponent,
    PropertyListComponent,
    PropertyThumbnailComponent,
    PropertyDetailComponent,
    DashboardComponent,
    FavoritePropertiesComponent,
    MapComponent,
    SearchPropertiesComponent,
    IconComponent,
    HeaderComponent,
    ReportComponent,
    OlMapComponent,
    // GoogleplacesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      // google map
      apiKey: 'AIzaSyCC4FcGmIBqr91axvbKw1dzIo1nA8GoeMw',
    }),
    // GooglePlaceModule,
    MyMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    // ToastrNotificationsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
