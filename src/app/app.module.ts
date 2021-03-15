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
import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertyListComponent } from './components/properties/property-list/property-list.component';
import { PropertyThumbnailComponent } from './components/properties/property-thumbnail/property-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LoginComponent,
    PropertyListComponent,
    PropertyThumbnailComponent,
    PropertyDetailComponent,
  ],
  imports: [
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqTb16DbEQ24PiFSgWdG-uQt9GJWdCe0s',
    }),
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MyMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
