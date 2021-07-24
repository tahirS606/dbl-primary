import { SocialLoginModule } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialAuthServiceConfig } from 'angularx-social-login';
import { ReportComponent } from './components/report/report.component';
import { NgxCaptureModule } from 'ngx-capture';


import { AuthInterceptor } from './components/auth/auth-interceptor';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AgmCoreModule, PolygonManager } from '@agm/core';
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
import { ReportListComponent } from './components/report/report-list/report-list.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete"
import { AgmDrawingModule } from '@agm/drawing';
import { AutocompleteAddressComponent } from './components/properties/autocomplete-address/autocomplete-address.component';
import { DisplayReportComponent } from './components/report/display-report/display-report.component';
import { RoutesListComponent } from './components/routes-list/routes-list.component';
import { RouteComponent } from './components/route/route.component';
import {NgPipesModule} from 'ngx-pipes';
import { UniquePipe } from './pipes/unique.pipe';
import { LoggedinasComponent } from './loggedinas/loggedinas.component';
import { ReportsListComponent } from './reports-list/reports-list.component';

@NgModule({
  declarations: [
    AutocompleteAddressComponent,
    AppComponent,
    AddPropertyComponent,
    DisplayReportComponent,
    HeaderComponent,
    LoginComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    ReportComponent,
    ReportListComponent,
    RouteComponent,
    RoutesListComponent,
    SearchPropertiesComponent,
    SignUpComponent,
    UniquePipe,
    LoggedinasComponent,
    ReportsListComponent,
    
    
    
    
  ],
  imports: [
    AgmCoreModule .forRoot({
      apiKey: 'AIzaSyDbpD2C4fBsYbzVQwEr1rIaNbl8zVyimok',
      libraries: ['drawing', 'places', 'geometry']
    }),
    AgmDrawingModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    GooglePlaceModule,
    HttpClientModule,
    MyMaterialModule,
    NgPipesModule, 
    NgxCaptureModule,
    ReactiveFormsModule,
    SocialLoginModule,
  ],
 
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '751908540662-tqna3m89pe5p7713u996a6a17tc484ft.apps.googleusercontent.com'
          )
        }
      ]
    } as SocialAuthServiceConfig,
  } , 
  {
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor, multi: true}, 
    PolygonManager],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
