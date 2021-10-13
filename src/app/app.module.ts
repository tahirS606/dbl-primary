import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ErrorComponent } from './components/auth/error/error.component';
import { ErrorInterceptor } from './../../error-interceptor';
import { SocialLoginModule } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialAuthServiceConfig } from 'angularx-social-login';
import { ReportComponent } from './components/report/report.component';

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
import { DialogComponent } from './components/dialog/dialog.component';
import { ReportlistbypropertyComponent } from './components.reports/reportlistbyproperty/reportlistbyproperty.component';
import { FooterComponent } from './components/footer/footer.component';
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { NgxDropzoneModule } from 'ngx-dropzone';


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
    DialogComponent,
    ErrorComponent,
    ReportlistbypropertyComponent,
    FooterComponent,
    
  
  ],
  imports: [
    AgmCoreModule .forRoot({
      apiKey: 'AIzaSyAKDgyfjOkz_TRX20-sSH_zJ_5Qmfp7P3c',
      libraries: ['drawing', 'places', 'geometry']
    }),
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'budden' } as CloudinaryConfiguration),
    AgmDrawingModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    GooglePlaceModule,
    HttpClientModule,
    MyMaterialModule,
    NgPipesModule, 
    NgxDropzoneModule,
    ReactiveFormsModule,
    SocialLoginModule,
    ShareButtonsModule,
    ShareIconsModule ,
  
    
    

    
  ],
 
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            'AIzaSyAKDgyfjOkz_TRX20-sSH_zJ_5Qmfp7P3c.apps.googleusercontent.com'
          )
        }
      ]
    } as SocialAuthServiceConfig,
  } , 
  { provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor, multi: true}, 
    {provide: HTTP_INTERCEPTORS, 
    useClass: ErrorInterceptor, multi: true},
    PolygonManager],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {}
