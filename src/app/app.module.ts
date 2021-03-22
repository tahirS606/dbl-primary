import { HeaderComponent } from './components/header/header/header.component';
import { SearchPropertiesComponent } from './components/search/search-properties.component';
import { LoginComponent } from './components/registration/login/login.component';
import { PropertyDetailComponent } from './components/properties/property-detail/property-detail.component';
import { MyMaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MapComponent } from './components/map/map.component';
import {} from '@google/maps';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertyListComponent } from './components/properties/property-list/property-list.component';
import { PropertyThumbnailComponent } from './components/properties/property-thumbnail/property-thumbnail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FavoritePropertiesComponent } from './components/dashboard/favorite-properties/favorite-properties.component';
import { IconComponent } from './components/icon/icon.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { PropertyFormComponent } from './components/forms/property-form/property-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LoginComponent,
    PropertyListComponent,
    PropertyThumbnailComponent,
    PropertyDetailComponent,
    DashboardComponent,

    FavoritePropertiesComponent,
    SearchPropertiesComponent,
    IconComponent,
    HeaderComponent,
    PropertyFormComponent,
  ],
  imports: [
    AppRoutingModule,
    AgmCoreModule.forRoot({
      // google map
      apiKey: 'AIzaSyBqTb16DbEQ24PiFSgWdG-uQt9GJWdCe0s',
    }),
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
